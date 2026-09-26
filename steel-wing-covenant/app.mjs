// 钢翼盟约 — 界面层（原生 ES module，无框架、无依赖、无网络）
//
// G1 运行时要点：
//   - 背景由场景登记表（story/scenes.mjs）驱动：每个 sceneId 一个精确文件路径，
//     缺失或加载失败时显示可恢复的缺图状态，不拿别的场景顶替、不谎报已加载。
//   - 立绘按节点的 expression 取精确文件；Unknown 仅用于尚未揭露身份的说话人。
//   - 持久存档：自动存档 + 3 个手动槽（localStorage），严格版本校验、覆盖确认、
//     损坏与写入失败都有可读提示；旧版 sessionStorage 进度只读导入、不删除。
//   - 自动播放：默认关闭，A 键或按钮开关；遇到选项 / 章末结果 / 面板 / 标题 / 玩家输入立即停止。
//   - WebMCP：把界面真实可做的操作暴露成工具；读工具只报屏幕上此刻的东西，不补全台词。

import {
  ENGINE_VERSION,
  createState,
  advance,
  choose,
  getNode,
  getNodeText,
  resolveNext,
  getChapterInfo,
  getNodeChapter,
  getSceneInfo,
  resolveSceneArtFile,
  getChoiceList,
  getBlockedChoiceCount,
  isEnded,
  isAwaitingChoice,
  getEchoes,
  getSecrets,
  getEnding,
  getContinuation,
  continueChapter,
  getBondSummary,
  speakerDisplayName,
  isCharacterRevealed,
  getStandingSummary,
  previewRouteLeaning,
  getBacklog,
  getSpeakerInfo,
  getCharacterPresentation,
  getPortraitFile,
  getPortraitFileCandidates,
  resolveCostumeId,
  resolvePortraitState,
  UNKNOWN_PORTRAIT_LABEL,
  formatText,
  serialize,
  deserialize,
  validateStory,
  auditCampaign
} from './engine.mjs';
import { STORY as PRODUCTION_STORY, CAMPAIGN_READINESS } from './story.mjs';

// 数据来源：默认用聚合好的 STORY。宿主/测试可以在加载界面层之前设置
// globalThis.__MBVN_STORY_OVERRIDE（同一形状的故事对象）来接入另一份章节模块集；
// 界面层只读它，不会改写任何故事数据。没有这个钩子时行为与以前完全一致。
const STORY = (typeof globalThis !== 'undefined' && globalThis.__MBVN_STORY_OVERRIDE)
  ? globalThis.__MBVN_STORY_OVERRIDE
  : PRODUCTION_STORY;
import { registerGameTools, createToolHandlers } from './webmcp.mjs';
import { paginatePassage, restoredPage } from './reader.mjs';
import { sceneLighting } from './scene-lighting.mjs';
import { resolveNodeSceneId } from './presentation.mjs';
import {
  SLOT_IDS,
  SLOT_LABELS,
  MANUAL_SLOT_IDS,
  LEGACY_SESSION_KEY,
  saveKey,
  buildEnvelope,
  parseEnvelope,
  importLegacy,
  describeEnvelope
} from './saves.mjs';

const DEFAULT_SCENE = 'hangar';

/* ---------- 玩家可见的进度文案 ----------
 * 只用中文章节标题与就绪状态：不出现章节模块 id，也不出现把写作进度讲给玩家听的技术用语；
 * 收录几章就写几章，其余章节与终章都写完时，同一套渲染直接变成"全书"口径。
 */
const CAMPAIGN = (STORY.campaign && STORY.campaign.readiness) || CAMPAIGN_READINESS;

function chapterRecordFor(id) {
  return (STORY.chapters || []).find((chapter) => chapter.id === id) || null;
}

function chapterTitleFor(id) {
  const record = chapterRecordFor(id);
  if (record && record.title) return record.title;
  return id || STORY.title.zh;
}

function chapterTitlesText(ids) {
  return (ids || []).map(chapterTitleFor).join('、');
}

const presentChapterIds = () => (CAMPAIGN.chaptersPresent || []).slice();
const pendingChapterIds = () => (CAMPAIGN.chaptersPending || []).slice();

/** 标题角标：收录几章就写几章；不写死"第一章" */
function titleKickerText() {
  const present = presentChapterIds().length;
  const total = (STORY.chapters || []).length;
  if (total > 0 && present >= total) return '机甲战争群像 · 视觉小说';
  return `机甲战争群像 · 视觉小说 · 已收录 ${present} 章`;
}

/** 标题提示：中文标题 + 就绪状态，终章写完时自动切换成全书口径 */
function titleHintText() {
  const present = presentChapterIds();
  const pending = pendingChapterIds();
  if (!pending.length) {
    const endings = Object.values(STORY.finalEndings || {});
    const ordinary = endings.filter(e => e.classification === 'ordinary').length;
    return `${present.length} 章旅程 · ${ordinary} 条结局路线 · 隐藏结局`;
  }
  const readyPart = present.length
    ? `已收录并可直接游玩：${chapterTitlesText(present)}。`
    : '还没有收录任何章节。';
  const pendingPart = pending.length
    ? `还没有写出来的章节：${chapterTitlesText(pending)}——写好一章才会出现在这里，每一章都以「章末结果」收尾，全书结局留到终章。`
    : '全书已经写完：从第一章一路走到终章，章节之间靠章末结果连接。';
  return `${readyPart}${pendingPart}原创角色与剧情，全员成年，恋爱线索轻微、次要。`;
}

/** 边界说明：同样是中文标题，不列技术 id */
function boundaryNoteText() {
  const present = chapterTitlesText(presentChapterIds()) || '无';
  const pending = chapterTitlesText(pendingChapterIds()) || '无';
  return '下一章还没有写出来：每一章都以「章末结果」收尾，写好一章才会出现在这里，全书结局留到终章。'
    + `（已收录：${present}；未收录：${pending}）`;
}

const dom = {
  titleScreen: document.getElementById('title-screen'),
  gameScreen: document.getElementById('game-screen'),
  sceneStage: document.getElementById('scene-stage'),
  sceneLayerA: document.getElementById('scene-layer-a'),
  sceneLayerB: document.getElementById('scene-layer-b'),
  sceneFallback: document.getElementById('scene-fallback'),
  sceneFallbackText: document.getElementById('scene-fallback-text'),
  btnSceneRetry: document.getElementById('btn-scene-retry'),
  titleKicker: document.getElementById('title-kicker'),
  chapterLabel: document.getElementById('chapter-label'),
  locationLabel: document.getElementById('location-label'),
  nameplate: document.getElementById('nameplate'),
  callsignInput: document.getElementById('callsign-input'),
  btnStart: document.getElementById('btn-start'),
  btnResume: document.getElementById('btn-resume'),
  btnFresh: document.getElementById('btn-fresh'),
  btnLoad: document.getElementById('btn-load'),
  resumeDetail: document.getElementById('resume-detail'),
  titleHint: document.getElementById('title-hint'),
  portraitWrap: document.getElementById('portrait-wrap'),
  portrait: document.getElementById('portrait'),
  portraitUnknown: document.getElementById('portrait-unknown'),
  portraitCaption: document.getElementById('portrait-caption'),
  speakerName: document.getElementById('speaker-name'),
  speakerRole: document.getElementById('speaker-role'),
  factionTag: document.getElementById('faction-tag'),
  reaction: document.getElementById('reaction'),
  dialogueText: document.getElementById('dialogue-text'),
  pageLabel: document.getElementById('page-label'),
  continueLabel: document.getElementById('continue-label'),
  choiceList: document.getElementById('choice-list'),
  blockedNote: document.getElementById('blocked-note'),
  continueHint: document.getElementById('continue-hint'),
  finale: document.getElementById('finale'),
  finaleTitle: document.getElementById('finale-title'),
  finaleSummary: document.getElementById('finale-summary'),
  finaleBody: document.getElementById('finale-body'),
  boundaryNote: document.getElementById('boundary-note'),
  btnContinueChapter: document.getElementById('btn-continue-chapter'),
  btnRestart: document.getElementById('btn-restart'),
  btnFinaleTitle: document.getElementById('btn-finale-title'),
  btnAuto: document.getElementById('btn-auto'),
  btnSaves: document.getElementById('btn-saves'),
  btnDossier: document.getElementById('btn-dossier'),
  btnBacklog: document.getElementById('btn-backlog'),
  btnTitle: document.getElementById('btn-title'),
  autoStatus: document.getElementById('auto-status'),
  saveStatus: document.getElementById('save-status'),
  dossier: document.getElementById('dossier'),
  dossierBody: document.getElementById('dossier-body'),
  backlog: document.getElementById('backlog'),
  backlogList: document.getElementById('backlog-list'),
  saves: document.getElementById('saves'),
  savesBody: document.getElementById('saves-body'),
  savesNote: document.getElementById('saves-note'),
  confirm: document.getElementById('confirm'),
  confirmTitle: document.getElementById('confirm-title'),
  confirmMessage: document.getElementById('confirm-message'),
  btnConfirmOk: document.getElementById('btn-confirm-ok'),
  btnConfirmCancel: document.getElementById('btn-confirm-cancel'),
  btnCloseDossier: document.getElementById('btn-close-dossier'),
  btnCloseBacklog: document.getElementById('btn-close-backlog'),
  btnCloseSaves: document.getElementById('btn-close-saves'),
  dialoguePanel: document.getElementById('dialogue-panel')
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/** 图片可用性：文件路径 → 'loading' | 'ready' | 'error'（只记录真实加载结果） */
const art = { scenes: {}, portraits: {} };
/** 已经解码过的图片对象：保住引用，避免"标记 ready 之后被回收又重新解码"时画出空白帧 */
const decodedArt = new Map();
const MAX_DECODED_ART = 24;

function keepImage(img, file) {
  decodedArt.delete(file);
  decodedArt.set(file, img);
}

function trimDecodedArt() {
  const sceneFile = state ? sceneArtFileFor(currentSceneId()) : null;
  const protectedFiles = new Set([paintedSceneFile, previousPaintedSceneFile, sceneFile, state ? readerSpeaker()?.portraitFile : null]);
  for (const file of decodedArt.keys()) {
    if (decodedArt.size <= MAX_DECODED_ART) break;
    if (protectedFiles.has(file) || art.scenes[file] === 'loading' || art.portraits[file] === 'loading') continue;
    decodedArt.delete(file);
    delete art.scenes[file];
    delete art.portraits[file];
  }
}

/**
 * 等这张图真的解码完成再回调。浏览器支持 decode() 时用它；不支持或解码失败时退回到
 * "已经 onload" 的既成事实（此时图片至少已经可用，不能因此把这一档表情判成缺失）。
 */
function decodeThen(img, onReady) {
  if (img && typeof img.decode === 'function') {
    Promise.resolve()
      .then(() => img.decode())
      .then(
        () => onReady(),
        () => onReady()
      );
    return;
  }
  onReady();
}
let sceneLayerIndex = 0;
let paintedSceneFile = null;
let previousPaintedSceneFile = null;

const typing = { active: false, full: '', shown: 0, raf: 0, startTime: null, generation: 0, onDone: null };
const reading = { nodeId: null, pages: [], index: 0, anchor: null };
const currentPage = () => reading.pages[reading.index] || null;
const hasNextPage = () => reading.index + 1 < reading.pages.length;
const readingSettled = () => Boolean(currentPage()) && !hasNextPage() && !typing.active;
const choicesReady = () => readingSettled() && isAwaitingChoice(state);
const endingReady = () => readingSettled() && isEnded(state);
function readingPosition() {
  const page = currentPage();
  return page && reading.nodeId === state?.nodeId
    ? { nodeId: reading.nodeId, kind: reading.anchor?.kind || page.kind, offset: reading.anchor?.offset ?? page.start } : null;
}

function readerSpeaker() {
  return currentPage()?.kind === 'reaction'
    ? { id: 'narration', name: '旁白', role: '', color: '#b4c1cc', revealed: true }
    : getSpeakerInfo(state, STORY);
}

function readerNode() {
  const node = state ? getNode(state, STORY) : null;
  if (node && reading.nodeId === node.id && currentPage()?.kind === 'reaction') {
    const previous = state.history?.[state.history.length - 2];
    const source = previous && STORY.nodes[previous.nodeId];
    if (source?.choices?.length) return source;
  }
  return node;
}

function createPageMeasure() {
  // Pure/DOM-light test hosts use a conservative three-line estimate.
  if (typeof getComputedStyle !== 'function' || !dom.dialogueText.clientWidth) {
    return { fits: text => text.split('\n').reduce((n,line)=>n+Math.max(1,Math.ceil([...line].length/28)),0)<=3, cleanup() {} };
  }
  const style = getComputedStyle(dom.dialogueText);
  const measure = document.createElement('p');
  measure.className = 'dialogue-text dialogue-measure';
  measure.setAttribute('aria-hidden','true');
  measure.style.width = `${dom.dialogueText.clientWidth}px`;
  measure.style.font = style.font;
  measure.style.lineHeight = style.lineHeight;
  measure.style.letterSpacing = style.letterSpacing;
  document.body.append(measure);
  const height = dom.dialogueText.clientHeight;
  return {
    fits(text) { measure.textContent = text; return measure.getBoundingClientRect().height <= height + .5; },
    cleanup() { measure.remove(); }
  };
}

function prepareReading(cursor) {
  const node = getNode(state, STORY);
  const segments = [];
  if (state.lastReaction) segments.push({ kind: 'reaction', text: state.lastReaction });
  segments.push({ kind: 'body', text: formatText(state, getNodeText(node, state)) });
  const measure = createPageMeasure();
  try { reading.pages = paginatePassage(segments, measure.fits); }
  finally { measure.cleanup(); }
  reading.nodeId = state.nodeId;
  reading.index = restoredPage(reading.pages, cursor?.nodeId === state.nodeId ? cursor : null);
  const page = currentPage();
  const preserveAnchor = cursor?.nodeId === state.nodeId
    && Number.isSafeInteger(cursor.offset) && cursor.kind === page?.kind
    && cursor.offset >= page.start && cursor.offset < page.end;
  reading.anchor = page
    ? { kind: page.kind, offset: preserveAnchor ? cursor.offset : page.start }
    : null;
}

function renderReadingControls() {
  renderSpeaker();
  renderChoices();
  renderContinueHint();
  renderFinale();
  dom.pageLabel.textContent = reading.pages.length > 1 ? `${reading.index + 1} / ${reading.pages.length}` : '';
  dom.continueLabel.textContent = hasNextPage() ? '下一屏' : '继续';
}

function renderReadingPage(instant = false) {
  stopTyping();
  const page = currentPage();
  renderScene();
  const chapter = getNodeChapter(STORY, readerNode());
  dom.chapterLabel.textContent = chapter ? chapter.title : STORY.title.zh;
  dom.reaction.hidden = true;
  dom.reaction.textContent = '';
  dom.dialogueText.scrollTop = 0;
  const done = () => {
    dom.dialogueText.dataset.typing = 'done';
    renderReadingControls();
    scheduleAuto();
  };
  if (instant) {
    dom.dialogueText.textContent = page?.text || '';
    done();
  } else {
    dom.dialogueText.dataset.typing = 'running';
    typeText(page?.text || '', done);
    renderReadingControls();
  }
}

let state = null;
let screen = 'title';
let pendingSave = null;
let legacyNotice = null;
let confirmResolver = null;

const auto = { on: false, timer: 0, reason: null };

/* ---------- 本地存储（读写都做异常处理：不把"写失败"当成功） ---------- */
function readLocal(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeLocal(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return { ok: true };
  } catch (error) {
    const name = error && error.name ? String(error.name) : 'Error';
    return {
      ok: false,
      reason: name,
      message: name === 'QuotaExceededError' || /quota/i.test(String(error && error.message))
        ? '本地存储空间不足，这一份没有保存。先清掉一个手动存档再试。'
        : '浏览器拒绝写入本地存储（可能被隐私设置禁用），这一份没有保存。'
    };
  }
}

function removeLocal(key) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

function setSaveStatus(message) {
  dom.saveStatus.textContent = message || '';
}

function formatTimestamp(ms) {
  const date = new Date(ms);
  const pad = (value) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function readSlot(slotId) {
  const raw = readLocal(saveKey(slotId));
  return parseEnvelope(raw, { story: STORY, engineVersion: ENGINE_VERSION, deserializeState: deserialize });
}

function readLegacySlot() {
  let raw = null;
  try {
    raw = window.sessionStorage.getItem(LEGACY_SESSION_KEY);
  } catch (error) {
    raw = null;
  }
  if (!raw) return null;
  return importLegacy(raw, { story: STORY, engineVersion: ENGINE_VERSION, deserializeState: deserialize });
}

/** 最近一次可继续的进度：自动存档 / 三个手动槽 / 旧版导入，取 savedAt 最新的一份 */
function readLatestSave() {
  const candidates = [];
  for (const slotId of SLOT_IDS) {
    const result = readSlot(slotId);
    if (result.ok) candidates.push(result.envelope);
  }
  const legacy = readLegacySlot();
  if (legacy) {
    if (legacy.ok) candidates.push(legacy.envelope);
    else legacyNotice = legacy.message;
  } else {
    legacyNotice = null;
  }
  candidates.sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
  return candidates[0] || null;
}

function refreshPendingSave() {
  pendingSave = readLatestSave();
}

function saveToSlot(slotId, options = {}) {
  if (!state) return false;
  const envelope = buildEnvelope({
    state,
    slotId,
    story: STORY,
    engineVersion: ENGINE_VERSION,
    serializeState: serialize,
    savedAt: Date.now(),
    screen,
    readingPosition: readingPosition()
  });
  const result = writeLocal(saveKey(slotId), envelope);
  if (!result.ok) {
    setSaveStatus(result.message);
    return false;
  }
  refreshPendingSave();
  if (!options.silent) setSaveStatus(`已保存到${SLOT_LABELS[slotId] || slotId}。`);
  return true;
}

/* ---------- 图片加载（场景与立绘都按精确路径记录真实结果） ---------- */
/**
 * 这一幕真正要用的那张图：基础图 + "已经交付"的专用衍生图（灰鸢/夜枭同框时才换），
 * 未交付一律退回基础图。加载、渲染、重试、读状态四处必须共用这一个解析入口：
 * 之前加载走的是解析后的衍生图（hangar → bg-hangar-duo.png），渲染与读状态走的却是
 * 登记表里的基础图（assets/hangar.png），于是缓存里查不到刚加载的那张，背景全黑、
 * sceneArt 谎报 idle（G21 实测）。这里返回 null 才算"这一幕没有登记任何图"。
 */
function sceneArtFileFor(sceneId) {
  const resolved = resolveSceneArtFile(sceneId, STORY);
  return resolved ? resolved.file : null;
}

function loadSceneArt(sceneId, options = {}) {
  const file = sceneArtFileFor(sceneId);
  if (!file) return;
  if (!options.force && (art.scenes[file] === 'ready' || art.scenes[file] === 'loading')) return;
  art.scenes[file] = 'loading';
  const img = new Image();
  keepImage(img, file);
  img.onload = () => {
    // 图片解码完成后才标记 ready：进度标志不能跑在解码前面（G1 复核的实际现象）
    decodeThen(img, () => {
      art.scenes[file] = 'ready';
      if (screen === 'game') { renderScene(); renderSpeaker(); }
      trimDecodedArt();
    });
  };
  img.onerror = () => {
    art.scenes[file] = 'error';
    if (screen === 'game') { renderScene(); renderSpeaker(); }
  };
  img.src = file;
}

function loadPortraitArt(file, options = {}) {
  if (!file) return;
  if (!options.force && (art.portraits[file] === 'ready' || art.portraits[file] === 'loading')) return;
  art.portraits[file] = 'loading';
  const img = new Image();
  keepImage(img, file);
  img.onload = () => {
    decodeThen(img, () => {
      art.portraits[file] = 'ready';
      if (screen === 'game') renderSpeaker();
      trimDecodedArt();
    });
  };
  img.onerror = () => {
    art.portraits[file] = 'error';
    if (screen === 'game') renderSpeaker();
  };
  img.src = file;
}

/** 只预载"当前节点 + 下一个节点"用得到的图，不在标题画面把所有大图拉下来 */
function preloadAroundCurrentNode() {
  if (!state || screen !== 'game') return;
  const node = getNode(state, STORY);
  if (!node) return;
  loadSceneArt(resolveNodeSceneId(node, state));
  if (currentSceneId() !== resolveNodeSceneId(node, state)) loadSceneArt(currentSceneId());
  const info = getSpeakerInfo(state, STORY);
  if (info && info.portraitFile) loadPortraitArt(info.portraitFile);

  const nextId = resolveNext(state, node, STORY);
  if (nextId && STORY.nodes[nextId]) {
    const nextNode = STORY.nodes[nextId];
    if (nextNode.scene) loadSceneArt(resolveNodeSceneId(nextNode, state));
    const nextSpeaker = STORY.characters[nextNode.speaker];
    const expression = nextNode.expression || 'neutral';
    // 预载把"这一句可能用到的每一档服装"都取来（默认档 + 当前状态命中的服装档）：
    // 渲染仍由 getSpeakerInfo 决定真正显示哪一张（身份门控与服装档都在那里判定），
    // 预载只是提前把图放到缓存里，不改变这一句显示什么。
    const candidates = nextSpeaker && nextSpeaker.portraits
      ? getPortraitFileCandidates(nextSpeaker, expression, resolveCostumeId(nextSpeaker, state))
      : [];
    for (const file of candidates) loadPortraitArt(file);
    const nextPresentation = getSpeakerInfo({ ...state, nodeId: nextId }, STORY);
    if (nextPresentation?.portraitFile) loadPortraitArt(nextPresentation.portraitFile);
  }
}

/* ---------- 打字机 ---------- */
function stopTyping() {
  typing.generation++;
  if (typing.raf) cancelAnimationFrame(typing.raf);
  typing.raf = 0;
  typing.active = false;
}

function finishTyping() {
  if (!typing.active) return false;
  stopTyping();
  dom.dialogueText.textContent = typing.full;
  dom.dialogueText.dataset.typing = 'done';
  if (typing.onDone) typing.onDone();
  return true;
}

function typeText(text, onDone) {
  stopTyping();
  dom.dialogueText.textContent = '';
  typing.full = text;
  typing.onDone = onDone || null;
  if (reduceMotion.matches || text.length < 2) {
    dom.dialogueText.textContent = text;
    if (typing.onDone) typing.onDone();
    return;
  }
  typing.active = true;
  typing.shown = 0;
  // Use the animation timeline itself. Its first timestamp can precede the
  // performance.now() sampled by the click handler within the same frame.
  typing.startTime = null;
  const generation = typing.generation;
  const charsPerSecond = 42;

  const step = (now) => {
    if (generation !== typing.generation || !typing.active) return;
    if (typing.startTime === null) typing.startTime = now;
    const elapsed = (now - typing.startTime) / 1000;
    const target = Math.max(typing.shown, 0, Math.min(text.length, Math.floor(elapsed * charsPerSecond)));
    if (target !== typing.shown) {
      typing.shown = target;
      dom.dialogueText.textContent = text.slice(0, target);
    }
    if (target >= text.length) {
      typing.active = false;
      typing.raf = 0;
      if (typing.onDone) typing.onDone();
      return;
    }
    typing.raf = requestAnimationFrame(step);
  };
  typing.raf = requestAnimationFrame(step);
}

/* ---------- 自动播放（默认关闭；任何时候遇到需要停的情况都停） ---------- */
function readableLength(text) {
  return ((text || '').match(/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/g) || []).length;
}

// 阅读停留：按 300–400 个中文可读字符 / 分钟折算（约 167ms 一个字），再加上少量起句时间。
// 这不是"保证时长"，而是让自动播放不要读得比人快：具体延迟完全由这一句的真实字数决定。
const AUTO_CJK_MS = Math.round(60000 / 360);
const AUTO_LATIN_MS = 55;
const AUTO_BASE_MS = 900;
const AUTO_MAX_MS = 45000;

function autoDelayFor(text) {
  const raw = text || '';
  const cjk = readableLength(raw);
  const latin = (raw.match(/[A-Za-z0-9]/g) || []).length;
  return Math.min(AUTO_MAX_MS, Math.max(1500, AUTO_BASE_MS + cjk * AUTO_CJK_MS + latin * AUTO_LATIN_MS));
}

/** 这一段是否超出对话区可视范围（超出时自动播放不替玩家翻页，避免没读到就滑走） */
function textOverflowsPanel() {
  const panel = dom.dialogueText;
  const height = panel.clientHeight;
  const full = panel.scrollHeight;
  return typeof height === 'number' && typeof full === 'number' && height > 0 && full > height + 8;
}

function updateAutoStatus() {
  const on = auto.on;
  dom.btnAuto.setAttribute('aria-pressed', on ? 'true' : 'false');
  dom.btnAuto.classList.toggle('is-on', on);
  if (on) {
    dom.autoStatus.hidden = false;
    dom.autoStatus.textContent = '自动阅读中';
    return;
  }
  dom.autoStatus.hidden = true;
  dom.autoStatus.textContent = '';
}

function clearAutoTimer() {
  if (auto.timer) {
    clearTimeout(auto.timer);
    auto.timer = 0;
  }
}

function stopAuto(reason) {
  const wasOn = auto.on;
  const wasPending = Boolean(auto.timer);
  clearAutoTimer();
  auto.on = false;
  if (reason) auto.reason = reason;
  if (wasOn || wasPending || reason) updateAutoStatus();
}

function scheduleAuto() {
  clearAutoTimer();
  if (!auto.on) return;
  if (screen !== 'game' || !state) return stopAuto('回到标题');
  if (overlaysOpen()) return stopAuto('面板打开');
  if (endingReady()) return stopAuto('到达章末结果');
  if (choicesReady()) return stopAuto('等待选择');
  if (typing.active) return;
  if (textOverflowsPanel()) return stopAuto('这一段没有完整显示在屏幕上，请手动继续');
  const delay = autoDelayFor(dom.dialogueText.textContent);
  auto.timer = setTimeout(() => {
    auto.timer = 0;
    runAutoAdvance();
  }, delay);
}

function runAutoAdvance() {
  if (!auto.on || screen !== 'game' || !state) return false;
  if (overlaysOpen()) {
    stopAuto('面板打开');
    return false;
  }
  if (endingReady() || choicesReady()) {
    stopAuto(isEnded(state) ? '到达章末结果' : '等待选择');
    return false;
  }
  if (typing.active) {
    finishTyping();
    scheduleAuto();
    return true;
  }
  const moved = onAdvance();
  return Boolean(moved);
}

function setAuto(next) {
  const turnOn = typeof next === 'boolean' ? next : !auto.on;
  if (turnOn) {
    if (screen !== 'game' || !state || endingReady() || choicesReady()) {
      auto.on = false;
      auto.reason = '现在没有可以自动推进的对话';
      updateAutoStatus();
      return false;
    }
    auto.on = true;
    auto.reason = null;
    updateAutoStatus();
    // 正在逐字显示时，让这一句按自己的节奏打完；打完的回调会接上自动播放
    scheduleAuto();
    return true;
  }
  stopAuto('玩家关闭');
  return false;
}

/* ---------- 渲染：场景 ---------- */
function currentSceneId() {
  const node = readerNode();
  if (node && node.id !== state?.nodeId && currentPage()?.kind === 'reaction') {
    const previous = state.history?.[state.history.length - 2];
    if (previous?.nodeId === node.id && previous.scene) return previous.scene;
  }
  return resolveNodeSceneId(node, state) || DEFAULT_SCENE;
}

function activeSceneInfo() {
  return getSceneInfo(STORY, currentSceneId());
}

function displayedSceneLabel(scene) {
  const profile = scene?.mechaProfile;
  if (!profile) return scene?.location || '';
  if (profile.pilot === 'player') return `${profile.name} · 你的机体 · ${state?.callsign || STORY.defaultCallsign}`;
  const pilot = STORY.characters[profile.pilot];
  const introduced = pilot && (!pilot.metFlag || Boolean(state?.flags?.[pilot.metFlag])) && isCharacterRevealed(state,pilot);
  return introduced ? `${profile.name} · 驾驶员：${pilot.shortName || pilot.name}` : `${profile.name} · 出击前检查`;
}

function renderScene(options = {}) {
  const scene = activeSceneInfo();
  const sceneId = currentSceneId();
  dom.locationLabel.textContent = displayedSceneLabel(scene);
  document.body.dataset.scene = sceneId;
  // 与 loadSceneArt 用同一个解析结果：加载哪张图，这里就查哪张、画哪张
  const file = sceneArtFileFor(sceneId);
  const artState = file ? art.scenes[file] || 'idle' : 'missing-scene';
  document.body.dataset.sceneArt = artState;

  const layers = [dom.sceneLayerA, dom.sceneLayerB];
  if (artState === 'ready' && paintedSceneFile !== file) {
    const target = layers[sceneLayerIndex % 2];
    const other = layers[(sceneLayerIndex + 1) % 2];
    target.style.backgroundImage = `linear-gradient(180deg, rgba(9, 13, 22, 0.08), rgba(9, 13, 22, 0.28)), url("${file}")`;
    target.classList.add('active');
    other.classList.remove('active');
    sceneLayerIndex += 1;
    previousPaintedSceneFile = paintedSceneFile;
    paintedSceneFile = file;
  } else if (artState !== 'ready' && !(['loading','idle'].includes(artState) && paintedSceneFile)) {
    // Retain the outgoing shot until the incoming image is decoded. The public
    // state still reports loading; a failure shows the explicit retry state.
    for (const layer of layers) layer.classList.remove('active');
    paintedSceneFile = null;
    previousPaintedSceneFile = null;
  }

  const missing = artState === 'error' || artState === 'missing-scene';
  dom.sceneFallback.hidden = !missing;
  if (missing && scene) {
    dom.sceneFallbackText.textContent = `${scene.location}的场景图片加载失败，请重试。`;
  }
  if (options.force) preloadAroundCurrentNode();
}

function retryScene() {
  const scene = activeSceneInfo();
  if (!scene) return;
  loadSceneArt(currentSceneId(), { force: true });
  renderScene();
}

/* ---------- 渲染：说话人与立绘 ---------- */
function readerPortrait(info = readerSpeaker()) {
  const portrait = resolvePortraitState(info, art.portraits);
  // Use the image actually painted, including the held outgoing frame.
  const depicted = paintedSceneFile && Object.values(STORY.scenes).some(scene =>
    scene.hidePortraits?.includes(info?.id) && sceneArtFileFor(scene.id) === paintedSceneFile);
  if (portrait.mode === 'known' && depicted)
    return { ...portrait, mode: 'none', file: '', depictedInScene: true };
  return portrait;
}

function renderSpeaker() {
  const info = readerSpeaker();
  const isNarration = !info || info.id === 'narration';
  const portrait = readerPortrait(info);
  document.body.dataset.personVisible = portrait.mode === 'known' ? 'true' : 'false';
  dom.gameScreen.dataset.framing = info?.framing || 'half';
  const sceneId = currentSceneId();
  const lighting = sceneLighting(sceneId, info?.id, info?.outfit);
  dom.gameScreen.dataset.sceneGraded = 'true';
  dom.gameScreen.style.setProperty('--scene-grade-brightness', String(lighting.brightness));
  dom.gameScreen.style.setProperty('--scene-grade-saturation', String(lighting.saturation));
  // Narration hides the person, but retains the established scene grade.
  // Only the local feathered light fades, avoiding whole-screen flashes.
  if (portrait.mode === 'known') {
    dom.gameScreen.dataset.portraitTone = lighting.tone;
    for (const [key, value] of Object.entries({
      '--focus-blur': `${lighting.blur}px`,
      '--focus-saturation': lighting.localSaturation,
      '--focus-lift': lighting.lift,
      '--focus-color': lighting.color,
      '--person-brightness': lighting.personBrightness
    })) dom.gameScreen.style.setProperty(key, String(value));
  }
  dom.nameplate.hidden = isNarration;
  dom.dialoguePanel.classList.toggle('is-narration', isNarration);
  dom.portraitWrap.hidden = portrait.mode === 'none';
  dom.portraitWrap.dataset.framing = info?.framing || 'half';
  dom.portraitWrap.dataset.nativeFraming = info?.nativeFraming || 'knees';
  dom.portraitWrap.dataset.pose = info?.poseId || '';
  dom.portraitUnknown.hidden = portrait.mode !== 'unknown';

  dom.speakerName.textContent = info ? info.name : '旁白';
  dom.speakerName.style.color = info ? info.color : 'var(--ivory)';
  dom.speakerRole.textContent = info && info.role ? info.role : '';
  dom.speakerRole.hidden = !info || !info.role;

  if (info && info.factionName) {
    dom.factionTag.hidden = false;
    dom.factionTag.textContent = info.factionName;
    dom.factionTag.style.setProperty('--tag-color', info.factionColor || 'var(--amber)');
  } else {
    dom.factionTag.hidden = true;
  }

  if (portrait.mode === 'known') {
    dom.portraitWrap.classList.add('uses-portrait');
    dom.portraitWrap.classList.remove('uses-unknown', 'is-narration');
    dom.portrait.dataset.speaker = info.id;
    dom.portrait.removeAttribute('data-panel');
    dom.portrait.style.setProperty('background-image', `url("${portrait.file}")`);
  } else {
    // 切换到旁白、未知身份或缺图时，清理上一位说话人的影像。
    dom.portraitWrap.classList.remove('uses-portrait');
    dom.portraitWrap.classList.toggle('uses-unknown', portrait.mode === 'unknown');
    dom.portraitWrap.classList.toggle('is-narration', isNarration);
    dom.portrait.removeAttribute('data-speaker');
    dom.portrait.removeAttribute('data-panel');
    dom.portrait.style.removeProperty('background-image');
    dom.portrait.style.removeProperty('--panel');
  }
  dom.portraitWrap.dataset.speaker = info ? info.id : 'narration';
  dom.portraitWrap.dataset.portrait = portrait.mode;
  dom.portraitWrap.dataset.expression = info ? info.expression || 'neutral' : '';
  dom.portraitWrap.style.setProperty('--speaker-color', info ? info.color : 'var(--ivory)');

  const portraitArtState = info && info.portraitFile ? art.portraits[info.portraitFile] || 'idle' : null;
  const caption = portrait.mode === 'unknown' ? 'Unknown · 身份未明'
    : portrait.mode === 'known' ? `${info.name}${info.caption ? ` · ${info.caption}` : ''}` : '';
  dom.portraitWrap.dataset.portraitArt = portraitArtState || 'none';
  dom.portraitCaption.textContent = caption;
  dom.portraitWrap.setAttribute('aria-label', caption);
}

/* ---------- 渲染：对话 / 选项 / 反馈 ---------- */
function renderReaction() {
  if (state && state.lastReaction) {
    dom.reaction.hidden = false;
    dom.reaction.textContent = state.lastReaction;
  } else {
    dom.reaction.hidden = true;
    dom.reaction.textContent = '';
  }
}

function renderChoices() {
  const choices = getChoiceList(state, STORY);
  dom.choiceList.textContent = '';
  const awaiting = choicesReady();
  dom.choiceList.hidden = !awaiting || choices.length === 0;

  const blocked = awaiting ? getBlockedChoiceCount(state, STORY) : 0;
  if (blocked > 0) {
    dom.blockedNote.hidden = false;
    dom.blockedNote.textContent = `另有 ${blocked} 个选项尚未解锁。`;
  } else {
    dom.blockedNote.hidden = true;
    dom.blockedNote.textContent = '';
  }

  if (!awaiting || choices.length === 0) return;

  choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice';
    button.dataset.choiceId = choice.id;

    const badge = document.createElement('span');
    badge.className = 'choice-index';
    badge.textContent = String(index + 1);

    const label = document.createElement('span');
    label.className = 'choice-label';
    label.textContent = formatText(state, choice.label);

    button.append(badge, label);
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      stopAuto('玩家输入');
      pickChoice(choice.id);
    });
    dom.choiceList.append(button);
  });
}

function renderContinueHint() {
  const awaiting = choicesReady();
  const ended = endingReady();
  dom.continueHint.hidden = awaiting || ended;
}

function renderFinale() {
  const ended = endingReady();
  dom.finale.hidden = !ended;
  if (!ended) {
    dom.finaleTitle.textContent = '';
    dom.finaleSummary.textContent = '';
    dom.finaleBody.textContent = '';
    dom.boundaryNote.hidden = true;
    dom.boundaryNote.textContent = '';
    dom.btnContinueChapter.hidden = true;
    return;
  }

  const ending = getEnding(state, STORY);
  const chapter = getChapterInfo(STORY, ending && ending.chapter);
  const isFinal = Boolean(ending && ending.isFinal);
  const continuation = getContinuation(state, STORY);
  dom.finaleTitle.textContent = ending
    ? `${ending.title}${isFinal ? '' : chapter ? ` · ${chapter.title}` : ''}`
    : '结算';
  dom.finaleSummary.textContent = ending ? ending.summary : '';
  dom.finaleBody.textContent = '';

  const addSubtitle = (text) => {
    const title = document.createElement('h3');
    title.className = 'finale-subtitle';
    title.textContent = text;
    dom.finaleBody.append(title);
  };
  const addList = (lines, extraClass) => {
    if (!lines.length) return;
    const list = document.createElement('ul');
    list.className = extraClass ? `finale-list ${extraClass}` : 'finale-list';
    for (const line of lines) {
      const item = document.createElement('li');
      item.textContent = line;
      list.append(item);
    }
    dom.finaleBody.append(list);
  };

  if (isFinal && ending && ending.closure) {
    // 终章结局：直接念出作者写好的收束，不加"机制 / 主角"这类评估标签
    addSubtitle('尾声');
    addList([ending.closure.mechanism, ending.closure.ship]);
    const companions = Array.isArray(ending.closure.companions) ? ending.closure.companions : [];
    if (companions.length) {
      addSubtitle('他们各自的落点');
      addList(companions);
    }
    if (ending.closure.protagonist) {
      const last = document.createElement('p');
      last.className = 'finale-hook';
      last.textContent = ending.closure.protagonist;
      dom.finaleBody.append(last);
    }
  } else {
    const lines = [];
    if (ending && ending.consequences.length) lines.push(...ending.consequences);
    for (const echo of getEchoes(state, STORY)) lines.push(echo.text);
    if (lines.length) {
      addSubtitle('这一章留下的结果');
      addList(lines);
    }
  }

  addSubtitle('你和他们现在的位置');

  const bondRow = document.createElement('div');
  bondRow.className = 'meter-row';
  for (const bond of getBondSummary(state, STORY)) {
    const chip = document.createElement('span');
    chip.className = 'meter-chip';
    chip.style.setProperty('--chip-color', bond.color);
    chip.textContent = `${bond.shortName}：${bond.label}`;
    bondRow.append(chip);
  }
  dom.finaleBody.append(bondRow);

  const bondLines = document.createElement('ul');
  bondLines.className = 'finale-list finale-bonds';
  for (const bond of getBondSummary(state, STORY)) {
    if (!bond.line) continue;
    const item = document.createElement('li');
    item.textContent = `${bond.shortName}：${bond.line}`;
    bondLines.append(item);
  }
  dom.finaleBody.append(bondLines);

  if (!isFinal) {
    const leaning = previewRouteLeaning(state, STORY);
    const leaningBox = document.createElement('p');
    leaningBox.className = 'finale-leaning';
    leaningBox.textContent = `当前阵营关系：${leaning.topLabel}`;
    dom.finaleBody.append(leaningBox);

    const standingBox = document.createElement('p');
    standingBox.className = 'finale-standing';
    standingBox.textContent = getStandingSummary(state, STORY)
      .map((faction) => `${faction.name}：${faction.label}`)
      .join('　·　');
    dom.finaleBody.append(standingBox);
  }

  if (!isFinal && ending && (ending.continueHint || ending.nextHook)) {
    addSubtitle('故事从哪里继续');
    const hook = document.createElement('p');
    hook.className = 'finale-hook';
    const parts = [];
    if (ending.continueHint) parts.push(ending.continueHint);
    if (ending.nextHook) parts.push(ending.nextHook);
    hook.textContent = parts.join(' ');
    dom.finaleBody.append(hook);
  }

  // 下一章按钮：只有在"下一章真的已经写好、入口存在"时才出现；否则停在诚实的章末边界。
  if (continuation && continuation.available && continuation.nextChapter) {
    const next = continuation.nextChapter;
    dom.btnContinueChapter.hidden = false;
    dom.btnContinueChapter.disabled = false;
    dom.btnContinueChapter.textContent = `进入${next.title}${next.badge ? `（${next.badge}）` : ''}`;
    dom.boundaryNote.hidden = false;
    dom.boundaryNote.textContent = `下一章已经就位：点上面的按钮或按空格 / 回车接着走。`;
  } else {
    dom.btnContinueChapter.hidden = true;
    dom.btnContinueChapter.disabled = false;
    dom.btnContinueChapter.textContent = '';
    const honestBoundary = !isFinal && continuation && continuation.reason === 'chapter-not-loaded';
    dom.boundaryNote.hidden = !honestBoundary;
    dom.boundaryNote.textContent = honestBoundary ? boundaryNoteText() : '';
  }
}

function renderDialogue(entryOptions) {
  const node = getNode(state, STORY);
  if (!node) return;
  const options = entryOptions || {};
  stopTyping();
  prepareReading(options.readingPosition);
  preloadAroundCurrentNode();
  renderReadingPage(Boolean(options.instantText));

  if (options.focusChoices && choicesReady()) {
    const first = dom.choiceList.querySelector('.choice');
    if (first) first.focus({ preventScroll: true });
  }
}

function renderBacklog() {
  dom.backlogList.textContent = '';
  const entries = getBacklog(state);
  for (const entry of entries) {
    let visibleText = entry.text;
    if (entry.nodeId === state.nodeId) {
      const page = currentPage();
      const revealed = Math.min(page?.text.length || 0,
        Math.max(0, typing.active ? typing.shown : dom.dialogueText.textContent.length));
      visibleText = page?.kind === 'body'
        ? formatText(state, getNodeText(getNode(state, STORY), state)).slice(0, page.start + revealed)
        : '';
      if (!visibleText) continue;
    }
    const item = document.createElement('li');
    item.className = `backlog-entry backlog-${entry.kind}`;

    const head = document.createElement('span');
    head.className = 'backlog-speaker';
    const scene = entry.scene ? getSceneInfo(STORY, entry.scene) : null;
    head.textContent = scene ? `${entry.speakerName}（${scene.location}）` : entry.speakerName;

    const body = document.createElement('p');
    body.className = 'backlog-text';
    body.textContent = visibleText;

    item.append(head, body);
    dom.backlogList.append(item);
  }
  dom.backlogList.scrollTop = dom.backlogList.scrollHeight;
}

function renderDossier() {
  dom.dossierBody.textContent = '';
  const metFlags = state ? state.flags : {};
  const metCompanions = getBondSummary(state, STORY).filter((bond) => {
    const character = STORY.characters[bond.id];
    return !character.metFlag || Boolean(metFlags[character.metFlag]);
  });

  const castTitle = document.createElement('h3');
  castTitle.textContent = '同行者';
  dom.dossierBody.append(castTitle);

  if (metCompanions.length === 0) {
    const none = document.createElement('p');
    none.className = 'dossier-locked';
    none.textContent = '与角色见面后，档案会陆续开启。';
    dom.dossierBody.append(none);
  }

  for (const bond of metCompanions) {
    const character = STORY.characters[bond.id];
    const presentation = getCharacterPresentation(state,character.id,STORY);
    const card = document.createElement('article');
    card.className = 'dossier-card';
    card.style.setProperty('--card-color', character.color);

    const neutralFile = getPortraitFile(character,'neutral',presentation.outfit);
    if (neutralFile) {
      const shot = document.createElement('img');
      shot.className = 'dossier-portrait';
      shot.src = neutralFile;
      shot.alt = `${character.name} · ${presentation.caption || character.portraitAlt || '立绘'}`;
      shot.width = 1024;
      shot.height = 1536;
      shot.decoding = 'async';
      shot.addEventListener('error', () => {
        const placeholder = document.createElement('div');
        placeholder.className = 'dossier-portrait-unknown';
        placeholder.textContent = '影像加载失败';
        placeholder.setAttribute('role', 'img');
        placeholder.setAttribute('aria-label', `${character.name}：无可用影像`);
        shot.replaceWith(placeholder);
      });
      card.append(shot);
    }

    const head = document.createElement('header');
    const name = document.createElement('strong');
    // 年龄只显示角色看起来的年龄；身份真相由剧情旗标门控，不在这一栏提前说破
    name.textContent = character.age
      ? `${character.name}（${character.age} · ${character.gender}）`
      : character.name;
    const role = document.createElement('span');
    role.className = 'dossier-role';
    // 档案卡的职衔与发言框读同一份判定：身份门控与服装档都在 getCharacterPresentation 里，
    // 换了衣服的角色不会出现"立绘是便装、职衔还是旧编制"的两套说法。
    role.textContent = presentation.role;
    head.append(name, role);

    const look = document.createElement('p');
    look.className = 'dossier-line';
    look.textContent = `外观：${presentation.outfitMeta?.caption || character.look}`;

    const trait = document.createElement('p');
    trait.className = 'dossier-line';
    trait.textContent = `性情：${character.trait}`;

    const bondLine = document.createElement('p');
    bondLine.className = 'dossier-bond';
    bondLine.textContent = `现在的距离：${bond.label} —— ${bond.line || ''}`;

    card.append(head, look, trait, bondLine);

    // 座机：只写能被观察到的事实，不编造战斗数值表；没有登记座机的角色不显示这一栏
    if (character.mecha && character.mecha.name && character.mecha.text) {
      const mecha = document.createElement('p');
      mecha.className = 'dossier-mecha';
      mecha.textContent = `座机 · ${character.mecha.name}：${character.mecha.text}`;
      card.append(mecha);
    }

    const secrets = getSecrets(state, bond.id, STORY);
    for (const secret of secrets.revealed) {
      const line = document.createElement('p');
      line.className = 'dossier-secret';
      line.textContent = `${secret.label}：${secret.text}`;
      card.append(line);
    }
    if (secrets.lockedCount > 0) {
      const lockedLine = document.createElement('p');
      lockedLine.className = 'dossier-locked';
      lockedLine.textContent = `还有 ${secrets.lockedCount} 段经历有待了解。`;
      card.append(lockedLine);
    }

    dom.dossierBody.append(card);
  }

  // 有名字的对手与没有羁绊计量的配角：名字与角色在 production/authoring-additions.json
  // 与各章 cast-additions 里已经登记，但档案只在剧情里真的见过本人（metFlag 成立）之后才出现。
  // 带身份门控的角色（第五章的 au09）在门控没开时用未揭示的名字 / 角色与同一个 Unknown 相框，
  // 不借别人的立绘，也不提前泄露她的编号与来历。
  const notableIds = [...(STORY.opponentIds || []), ...(STORY.npcIds || [])];
  const metNotables = notableIds.filter((id) => {
    const character = STORY.characters[id];
    return character && character.metFlag && Boolean(metFlags[character.metFlag]);
  });
  if (metNotables.length) {
    const opponentTitle = document.createElement('h3');
    opponentTitle.textContent = '打过交道的人';
    dom.dossierBody.append(opponentTitle);
  }
  for (const id of metNotables) {
    const character = STORY.characters[id];
    const notableRevealed = isCharacterRevealed(state, character);
    const gate = character.revealGate || null;
    const card = document.createElement('article');
    card.className = 'dossier-card';
    card.style.setProperty('--card-color', character.color);

    const neutralFile = notableRevealed && character.portraits ? character.portraits.neutral : null;
    if (neutralFile) {
      const shot = document.createElement('img');
      shot.className = 'dossier-portrait';
      shot.src = neutralFile;
      shot.alt = character.portraitAlt || `${character.name}的立绘`;
      shot.width = 1024;
      shot.height = 1536;
      shot.decoding = 'async';
      shot.addEventListener('error', () => {
        const placeholder = document.createElement('div');
        placeholder.className = 'dossier-portrait-unknown';
        placeholder.textContent = UNKNOWN_PORTRAIT_LABEL;
        placeholder.setAttribute('role', 'img');
        placeholder.setAttribute('aria-label', `${character.name}：无可用影像`);
        shot.replaceWith(placeholder);
      });
      card.append(shot);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'dossier-portrait-unknown';
      placeholder.textContent = UNKNOWN_PORTRAIT_LABEL;
      placeholder.setAttribute('role', 'img');
      placeholder.setAttribute('aria-label', '无可用影像');
      card.append(placeholder);
    }

    const head = document.createElement('header');
    const name = document.createElement('strong');
    name.textContent = speakerDisplayName(state, id, STORY);
    const role = document.createElement('span');
    role.className = 'dossier-role';
    role.textContent = getCharacterPresentation(state, id, STORY).role;
    head.append(name, role);

    const look = document.createElement('p');
    look.className = 'dossier-line';
    look.textContent = `外观：${notableRevealed ? character.look : (gate && gate.caption) || character.look}`;

    card.append(head, look);
    dom.dossierBody.append(card);
  }

  const factionTitle = document.createElement('h3');
  factionTitle.textContent = '三条航线';
  dom.dossierBody.append(factionTitle);

  for (const standing of getStandingSummary(state, STORY)) {
    const faction = STORY.factions[standing.id];
    const card = document.createElement('article');
    card.className = 'dossier-card faction-card';
    card.style.setProperty('--card-color', faction.color);

    const head = document.createElement('header');
    const name = document.createElement('strong');
    name.textContent = faction.fullName;
    const stance = document.createElement('span');
    stance.className = 'dossier-role';
    stance.textContent = faction.stance;
    head.append(name, stance);

    const wants = document.createElement('p');
    wants.className = 'dossier-line';
    wants.textContent = `想要什么：${faction.wants}`;

    const standingLine = document.createElement('p');
    standingLine.className = 'dossier-bond';
    standingLine.textContent = `对你的判定：${standing.label} —— ${standing.line}`;

    card.append(head, wants);

    const secrets = getSecrets(state, standing.id, STORY);
    for (const secret of secrets.revealed) {
      const line = document.createElement('p');
      line.className = 'dossier-secret';
      line.textContent = `${secret.label}：${secret.text}`;
      card.append(line);
    }
    if (secrets.lockedCount > 0) {
      const lockedLine = document.createElement('p');
      lockedLine.className = 'dossier-locked';
      lockedLine.textContent = `还有 ${secrets.lockedCount} 条账你没看到——航道上还没有人把它摆到你面前。`;
      card.append(lockedLine);
    }

    card.append(standingLine);
    dom.dossierBody.append(card);
  }
}

/* ---------- 存档面板 ---------- */
function renderSaves() {
  dom.savesBody.textContent = '';
  const noteParts = [];
  if (legacyNotice) noteParts.push(legacyNotice);
  noteParts.push('存档只保存在这台设备的浏览器里：没有账号、没有云端。旧版第一章进度不会被自动删除。');
  dom.savesNote.textContent = noteParts.join(' ');

  for (const slotId of SLOT_IDS) {
    const result = readSlot(slotId);
    const row = document.createElement('div');
    row.className = 'save-row';
    row.dataset.slot = slotId;

    const head = document.createElement('div');
    head.className = 'save-row-head';
    const label = document.createElement('strong');
    label.textContent = SLOT_LABELS[slotId] || slotId;
    const detail = document.createElement('span');
    detail.className = 'save-row-detail';
    if (result.ok) {
      const summary = describeEnvelope(result.envelope, STORY, { formatTimestamp });
      detail.textContent = `呼号 ${summary.callsign} · ${summary.summaryLine}${summary.savedAtText ? ` · ${summary.savedAtText}` : ''}`;
    } else if (result.reason === 'empty') {
      detail.textContent = '空';
    } else {
      detail.textContent = `无法读取：${result.message}`;
    }
    head.append(label, detail);
    row.append(head);

    const actions = document.createElement('div');
    actions.className = 'save-row-actions';

    if (MANUAL_SLOT_IDS.includes(slotId)) {
      const saveButton = document.createElement('button');
      saveButton.type = 'button';
      saveButton.className = 'btn subtle';
      saveButton.dataset.action = 'save';
      saveButton.dataset.slot = slotId;
      saveButton.textContent = result.ok ? '覆盖保存' : '保存到这一格';
      saveButton.disabled = !state || screen !== 'game';
      saveButton.addEventListener('click', () => onSaveSlotClick(slotId, result.ok));
      actions.append(saveButton);
    }

    if (result.ok) {
      const loadButton = document.createElement('button');
      loadButton.type = 'button';
      loadButton.className = 'btn primary';
      loadButton.dataset.action = 'load';
      loadButton.dataset.slot = slotId;
      loadButton.textContent = '读取';
      loadButton.addEventListener('click', () => onLoadSlotClick(slotId));
      actions.append(loadButton);
    } else if (result.reason !== 'empty') {
      const clearButton = document.createElement('button');
      clearButton.type = 'button';
      clearButton.className = 'btn subtle';
      clearButton.dataset.action = 'clear';
      clearButton.dataset.slot = slotId;
      clearButton.textContent = '清空这一格';
      clearButton.addEventListener('click', () => onClearSlotClick(slotId));
      actions.append(clearButton);
    }

    row.append(actions);
    dom.savesBody.append(row);
  }
}

/* ---------- 确认面板 ---------- */
function askConfirm(title, message) {
  // 防重复提交：同一时刻只允许一个确认面板；重复请求直接按"取消"处理
  if (confirmResolver) return Promise.resolve(false);
  dom.confirmTitle.textContent = title;
  dom.confirmMessage.textContent = message;
  dom.confirm.hidden = false;
  document.body.classList.add('overlay-open');
  stopAuto('面板打开');
  return new Promise((resolve) => {
    confirmResolver = (value) => {
      dom.confirm.hidden = true;
      confirmResolver = null;
      if (!overlaysOpen()) document.body.classList.remove('overlay-open');
      resolve(value);
    };
  });
}

function resolveConfirm(value) {
  if (confirmResolver) confirmResolver(Boolean(value));
}

/* ---------- 交互 ---------- */
function openOverlay(element) {
  element.hidden = false;
  document.body.classList.add('overlay-open');
  stopAuto('面板打开');
  const focusTarget = element.querySelector('button');
  if (focusTarget) focusTarget.focus({ preventScroll: true });
}

function closeOverlays() {
  dom.dossier.hidden = true;
  dom.backlog.hidden = true;
  dom.saves.hidden = true;
  document.body.classList.remove('overlay-open');
}

function overlaysOpen() {
  return !dom.dossier.hidden || !dom.backlog.hidden || !dom.saves.hidden || !dom.confirm.hidden;
}

function toggleDossier() {
  if (dom.dossier.hidden) {
    if (state) renderDossier();
    dom.backlog.hidden = true;
    dom.saves.hidden = true;
    openOverlay(dom.dossier);
  } else {
    closeOverlays();
    scheduleAuto();
  }
}

function toggleBacklog() {
  if (dom.backlog.hidden) {
    if (state) renderBacklog();
    dom.dossier.hidden = true;
    dom.saves.hidden = true;
    openOverlay(dom.backlog);
  } else {
    closeOverlays();
    scheduleAuto();
  }
}

function toggleSaves() {
  if (dom.saves.hidden) {
    renderSaves();
    dom.dossier.hidden = true;
    dom.backlog.hidden = true;
    openOverlay(dom.saves);
  } else {
    closeOverlays();
    scheduleAuto();
  }
}

async function onSaveSlotClick(slotId, exists) {
  if (!state) return;
  if (exists) {
    const ok = await askConfirm(
      '覆盖存档',
      `${SLOT_LABELS[slotId]}里已经有一份进度。覆盖之后，原来那一份就找不回来了——确定覆盖吗？`
    );
    if (!ok) {
      renderSaves();
      return;
    }
  }
  saveToSlot(slotId);
  renderSaves();
}

async function onLoadSlotClick(slotId) {
  const result = readSlot(slotId);
  if (!result.ok) {
    setSaveStatus(result.message);
    renderSaves();
    return;
  }
  const hasProgress = screen === 'game' && state && !state.ended;
  if (hasProgress) {
    const ok = await askConfirm('读取存档', '现在这一局的进度会被这份存档替换，确定读取吗？');
    if (!ok) return;
  }
  closeOverlays();
  startGame(result.envelope.state, result.envelope.state.callsign, result.envelope.readingPosition);
  setSaveStatus(`已读取${SLOT_LABELS[slotId] || slotId}。`);
}

async function onClearSlotClick(slotId) {
  const ok = await askConfirm('清空这一格', `确定清空${SLOT_LABELS[slotId] || slotId}吗？这一份进度将无法恢复。`);
  if (!ok) return;
  removeLocal(saveKey(slotId));
  if (pendingSave && pendingSave.slotId === slotId) refreshPendingSave();
  setSaveStatus(`${SLOT_LABELS[slotId] || slotId}已清空。`);
  renderSaves();
}

function pickChoice(choiceId) {
  if (!state || !choicesReady()) return false;
  const nextState = choose(state, choiceId, STORY);
  if (nextState === state) return false;
  state = nextState;
  renderDialogue({ instantText: false, focusChoices: true });
  saveToSlot('auto', { silent: true });
  return true;
}

function onAdvance() {
  if (!state) return false;
  if (finishTyping()) {
    scheduleAuto();
    return true;
  }
  if (hasNextPage()) {
    reading.index++;
    const page = currentPage();
    reading.anchor = { kind: page.kind, offset: page.start };
    renderReadingPage();
    saveToSlot('auto', { silent: true });
    return true;
  }
  if (isEnded(state)) return false;
  if (isAwaitingChoice(state)) {
    dom.choiceList.querySelector('.choice')?.focus({ preventScroll: true });
    return false;
  }
  state = advance(state, STORY);
  renderDialogue({ instantText: false });
  saveToSlot('auto', { silent: true });
  return true;
}

/**
 * 章末"进入下一章"：调用的是引擎里那个被测试覆盖的纯函数 continueChapter。
 * 只在下一章真的写好、入口存在时成功；成功后就地更新章节 / 场景 / 立绘与存档，
 * 并且把自动播放停在边界上——进新一章不会自己往前跑。
 */
function onContinueChapter() {
  if (!state || !endingReady()) return false;
  const nextState = continueChapter(state, STORY);
  if (!nextState) {
    dom.btnContinueChapter.hidden = true;
    renderFinale();
    return false;
  }
  state = nextState;
  stopAuto('进入下一章');
  renderDialogue({ instantText: false });
  saveToSlot('auto', { silent: true });
  dom.dialoguePanel.focus({ preventScroll: true });
  return true;
}

function showTitle() {
  closeOverlays();
  stopTyping();
  stopAuto('回到标题');
  screen = 'title';
  dom.gameScreen.hidden = true;
  dom.titleScreen.hidden = false;
  document.body.dataset.scene = 'title';
  closeOverlays();
  // 回到标题时必须重新读一遍存储：给的是最近一次写下的进度，而不是开机时的旧快照
  refreshPendingSave();
  refreshTitleOptions();
  setSaveStatus('');
}

function startGame(existing, callsign, cursor) {
  state = existing || createState({ callsign: callsign !== undefined ? callsign : dom.callsignInput.value, story: STORY });
  screen = 'game';
  dom.titleScreen.hidden = true;
  dom.gameScreen.hidden = false;
  auto.reason = null;
  updateAutoStatus();
  renderDialogue({ instantText: false, readingPosition: cursor });
  saveToSlot('auto', { silent: true });
  dom.dialoguePanel.focus({ preventScroll: true });
  return state;
}

function clearProgress() {
  for (const slotId of SLOT_IDS) removeLocal(saveKey(slotId));
  pendingSave = null;
}

function refreshTitleOptions() {
  if (pendingSave) {
    dom.btnStart.hidden = true;
    dom.btnResume.classList.add('primary');
    dom.btnResume.hidden = false;
    const summary = describeEnvelope(pendingSave, STORY, { formatTimestamp });
    dom.btnResume.textContent = summary.legacy
      ? `继续旧版进度（呼号 ${summary.callsign}）`
      : summary.ended
        ? `查看上次的章末结果（呼号 ${summary.callsign}）`
        : `继续：呼号 ${summary.callsign}`;
    dom.btnFresh.hidden = false;
    dom.resumeDetail.hidden = false;
    const bits = [summary.chapterTitle || '第一章', summary.savedAtText ? `保存于 ${summary.savedAtText}` : '旧版进度'];
    if (summary.legacy) bits.push('旧存档按原样保留，不会被自动删除');
    dom.resumeDetail.textContent = bits.join(' · ');
  } else {
    dom.btnStart.hidden = false;
    dom.btnResume.hidden = true;
    dom.btnFresh.hidden = true;
    dom.btnStart.textContent = '开始旅程';
    dom.resumeDetail.hidden = true;
    dom.resumeDetail.textContent = '';
  }
}

/* ---------- 键盘 / 触屏 ---------- */
function isTextEntry(element) {
  if (!element) return false;
  const tag = element.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || element.isContentEditable;
}

window.addEventListener('keydown', (event) => {
  const activatesControl = event.key === ' ' || event.key === 'Spacebar' || event.key === 'Enter';
  if (activatesControl && event.target?.closest?.('button, a, [role="button"]')) return;
  if (isTextEntry(event.target) && event.key !== 'Enter') return;

  if (!dom.confirm.hidden) {
    if (event.key === 'Escape') {
      event.preventDefault();
      resolveConfirm(false);
    }
    return;
  }

  if (overlaysOpen()) {
    if (event.key === 'Escape' || event.key.toLowerCase() === 'd' || event.key.toLowerCase() === 'l' || event.key.toLowerCase() === 's') {
      event.preventDefault();
      closeOverlays();
      scheduleAuto();
    }
    return;
  }

  if (screen === 'title') {
    if (event.key === 'Enter' && isTextEntry(event.target)) {
      event.preventDefault();
      startGame(null);
    }
    return;
  }

  if (!state) return;
  const key = event.key;

  if (key === ' ' || key === 'Spacebar' || key === 'Enter') {
    event.preventDefault();
    stopAuto('玩家输入');
    // 章末结果上，空格 / 回车与"进入下一章"按钮等价；没有下一章时仍然是原来的边界行为。
    if (endingReady() && getContinuation(state, STORY) && getContinuation(state, STORY).available) {
      onContinueChapter();
      return;
    }
    onAdvance();
    return;
  }
  if (/^[1-9]$/.test(key)) {
    const choices = getChoiceList(state, STORY);
    const target = choices[Number(key) - 1];
    if (target) {
      event.preventDefault();
      stopAuto('玩家输入');
      pickChoice(target.id);
    }
    return;
  }
  if (key.toLowerCase() === 'a') {
    event.preventDefault();
    setAuto();
    return;
  }
  if (key.toLowerCase() === 's') {
    event.preventDefault();
    toggleSaves();
    return;
  }
  if (key.toLowerCase() === 'd') {
    event.preventDefault();
    toggleDossier();
    return;
  }
  if (key.toLowerCase() === 'l') {
    event.preventDefault();
    toggleBacklog();
    return;
  }
  if (key === 'Escape') {
    event.preventDefault();
    if (isEnded(state)) showTitle();
  }
});

window.addEventListener('visibilitychange', () => {
  if (typeof document.hidden === 'boolean' && document.hidden) stopAuto('标签页切走');
});

dom.finale.addEventListener('click', (event) => event.stopPropagation());
dom.dialoguePanel.addEventListener('click', (event) => {
  if (screen !== 'game' || overlaysOpen() || event.target?.closest?.('button, a, input, select, summary')) return;
  stopAuto('玩家输入');
  onAdvance();
});

const startForm = document.getElementById('start-form');
startForm.addEventListener('submit', (event) => {
  event.preventDefault();
  startGame(null);
});

dom.btnResume.addEventListener('click', () => {
  if (pendingSave && pendingSave.state) startGame(pendingSave.state, pendingSave.state.callsign, pendingSave.readingPosition);
});
dom.btnFresh.addEventListener('click', () => {
  clearProgress();
  startGame(null);
});
dom.btnLoad.addEventListener('click', () => {
  renderSaves();
  openOverlay(dom.saves);
});
dom.btnRestart.addEventListener('click', async () => {
  const ok = await askConfirm('重新开始', '这一局的进度（信任、声望、旗标与回放）会清空，自动存档也会被清掉。确定重新开始吗？');
  if (!ok) return;
  clearProgress();
  startGame(null);
});
dom.btnFinaleTitle.addEventListener('click', showTitle);
dom.btnContinueChapter.addEventListener('click', () => {
  stopAuto('玩家输入');
  onContinueChapter();
});
dom.btnAuto.addEventListener('click', () => setAuto());
dom.btnSaves.addEventListener('click', toggleSaves);
dom.btnDossier.addEventListener('click', toggleDossier);
dom.btnBacklog.addEventListener('click', toggleBacklog);
dom.btnCloseDossier.addEventListener('click', () => {
  closeOverlays();
  scheduleAuto();
});
dom.btnCloseBacklog.addEventListener('click', () => {
  closeOverlays();
  scheduleAuto();
});
dom.btnCloseSaves.addEventListener('click', () => {
  closeOverlays();
  scheduleAuto();
});
dom.btnSceneRetry.addEventListener('click', retryScene);
dom.btnConfirmOk.addEventListener('click', () => resolveConfirm(true));
dom.btnConfirmCancel.addEventListener('click', () => resolveConfirm(false));
dom.btnTitle.addEventListener('click', showTitle);

dom.callsignInput.addEventListener('input', () => {
  dom.callsignInput.value = dom.callsignInput.value.replace(/[\u0000-\u001F\u007F<>]/g, '').slice(0, 12);
});

reduceMotion.addEventListener('change', () => {
  if (state && screen === 'game') renderDialogue({ instantText: true, readingPosition: readingPosition() });
});

let readingResizeFrame = 0;
function reflowReading() {
  if (readingResizeFrame) cancelAnimationFrame(readingResizeFrame);
  readingResizeFrame = requestAnimationFrame(() => {
    readingResizeFrame = 0;
    if (screen !== 'game' || !state) return;
    const cursor = readingPosition();
    stopAuto('阅读区尺寸变化');
    stopTyping();
    prepareReading(cursor);
    renderReadingPage(true);
  });
}
window.addEventListener('resize', reflowReading);
if (document.fonts?.addEventListener) document.fonts.addEventListener('loadingdone', reflowReading);

/* ---------- WebMCP（可选）：把同一批可见操作暴露成工具 ---------- */
function overlayName() {
  if (!dom.confirm.hidden) return 'confirm';
  if (!dom.saves.hidden) return 'saves';
  if (!dom.dossier.hidden) return 'dossier';
  if (!dom.backlog.hidden) return 'backlog';
  return null;
}

/**
 * 此刻屏幕上真正可见的状态：标题画面不给游戏字段，覆盖面板打开时不给被挡住的台词与选项。
 * text 只回报屏幕上已经显示出来的部分（正在逐字显示时就是子串）——读工具不替玩家补全。
 */
function visibleState() {
  const overlay = overlayName();
  const hasPending = Boolean(pendingSave);
  const readiness = CAMPAIGN;

  if (screen !== 'game' || !state) {
    return {
      screen: 'title',
      overlay,
      chapterId: null,
      chapter: null,
      callsign: hasPending ? pendingSave.callsign : dom.callsignInput.value || STORY.defaultCallsign,
      pendingSave: hasPending
        ? {
            slotId: pendingSave.slotId,
            callsign: pendingSave.callsign,
            ended: Boolean(describeEnvelope(pendingSave, STORY)?.ended),
            legacy: Boolean(pendingSave.legacy),
            savedAt: pendingSave.savedAt || null
          }
        : null,
      nodeId: null,
      scene: null,
      sceneId: null,
      sceneArt: null,
      speaker: null,
      speakerRole: null,
      expression: null,
      tone: null,
      portrait: null,
      portraitFile: null,
      portraitArt: null,
      text: '',
      typing: false,
      awaitingChoice: false,
      choices: [],
      ended: false,
      ending: null,
      canContinueChapter: false,
      nextChapter: null,
      auto: { on: false, stoppedReason: auto.reason },
      campaign: { mode: readiness.mode, chaptersPresent: [...readiness.chaptersPresent], chaptersPending: [...readiness.chaptersPending] }
    };
  }

  const node = getNode(state, STORY);
  const info = readerSpeaker();
  const ended = endingReady();
  const ending = ended ? getEnding(state, STORY) : null;
  const choicesVisible = isAwaitingChoice(state) && !dom.choiceList.hidden && !overlay;
  const scene = activeSceneInfo();
  // 与渲染同一份解析结果：读状态说的必须是屏幕上真正要画的那张图
  const sceneArtEntry = scene ? sceneArtFileFor(scene.id) : null;
  const chapterInfo = getNodeChapter(STORY, readerNode());
  const portrait = readerPortrait(info);
  const continuation = ended ? getContinuation(state, STORY) : null;
  const canContinue = Boolean(continuation && continuation.available && !overlay);

  return {
    screen: 'game',
    overlay,
    chapterId: chapterInfo ? chapterInfo.id : null,
    chapter: chapterInfo
      ? { id: chapterInfo.id, title: chapterInfo.title, badge: chapterInfo.badge, status: chapterInfo.status }
      : null,
    callsign: state.callsign,
    pendingSave: null,
    nodeId: node ? node.id : null,
    page: { index: reading.index + 1, total: reading.pages.length },
    scene: scene ? displayedSceneLabel(scene) : null,
    sceneId: scene ? scene.id : null,
    sceneArt: sceneArtEntry ? art.scenes[sceneArtEntry] || 'idle' : 'missing-scene',
    speaker: info ? info.name : null,
    speakerRole: info ? info.role : null,
    expression: info ? info.expression : null,
    framing: portrait.mode === 'none' ? null : info?.framing || 'half',
    pose: portrait.mode === 'known' ? info?.poseId || null : null,
    tone: info ? info.tone : null,
    portrait: dom.portraitWrap.dataset.portrait || portrait.mode,
    portraitFile: portrait.mode === 'known' ? portrait.file : null,
    portraitArt: info && info.portraitFile ? art.portraits[info.portraitFile] || 'idle' : 'none',
    text: overlay ? '' : dom.dialogueText.textContent || '',
    typing: !overlay && typeof dom.dialogueText.dataset.typing === 'string' && dom.dialogueText.dataset.typing === 'running' && typing.active,
    awaitingChoice: choicesVisible,
    choices: choicesVisible
      ? getChoiceList(state, STORY).map((choice) => ({ id: choice.id, label: formatText(state, choice.label) }))
      : [],
    ended,
    ending: ending && !overlay
      ? {
          id: ending.id,
          kind: ending.kind,
          isFinal: ending.isFinal,
          title: ending.title,
          route: ending.route,
          summary: ending.summary,
          continueHint: ending.continueHint,
          continuesTo: ending.continuesTo
        }
      : null,
    canContinueChapter: canContinue,
    nextChapter: canContinue && continuation.nextChapter
      ? {
          id: continuation.nextChapter.id,
          title: continuation.nextChapter.title,
          badge: continuation.nextChapter.badge,
          entryId: continuation.entryId
        }
      : null,
    auto: { on: auto.on, stoppedReason: auto.reason },
    campaign: { mode: CAMPAIGN.mode, chaptersPresent: [...CAMPAIGN.chaptersPresent], chaptersPending: [...CAMPAIGN.chaptersPending] }
  };
}

const toolHandlers = createToolHandlers({
  snapshot: visibleState,
  settle: () => {
    stopAuto('工具操作');
    finishTyping();
  },
  overlay: overlayName,
  inProgress: () => screen === 'game' && Boolean(state) && !endingReady(),
  hasDiscardableProgress: () => screen === 'game' ? Boolean(state) : Boolean(pendingSave),
  restart: (callsign) => {
    closeOverlays();
    if (typeof callsign === 'string') dom.callsignInput.value = callsign;
    clearProgress();
    startGame(null, callsign);
    stopAuto('工具操作');
    finishTyping();
  },
  state: () => (screen === 'game' ? state : null),
  isEnded: () => screen === 'game' && Boolean(state) && endingReady(),
  isAwaitingChoice: () => screen === 'game' && Boolean(state) && choicesReady(),
  availableChoices: () => (screen === 'game' && choicesReady() ? getChoiceList(state, STORY) : []),
  nodeId: () => (screen === 'game' && state ? state.nodeId : null),
  advance: () => {
    stopAuto('工具操作');
    const moved = onAdvance();
    finishTyping();
    return moved;
  },
  choose: (choiceId) => {
    stopAuto('工具操作');
    const ok = pickChoice(choiceId);
    finishTyping();
    return ok;
  },
  canContinueChapter: () => Boolean(endingReady() && getContinuation(state, STORY)?.available && !overlayName()),
  continuation: () => (state ? getContinuation(state, STORY) : null),
  continueChapter: () => {
    stopAuto('工具操作');
    const ok = onContinueChapter();
    finishTyping();
    return ok;
  }
});

/* ---------- 启动 ---------- */
function boot() {
  const report = validateStory(STORY);
  if (!report.ok) {
    console.error('剧情图校验失败：', report.errors);
    dom.btnStart.disabled = true;
    dom.titleHint.textContent = '剧情数据损坏，暂时无法开始。';
    return;
  }
  if (report.warnings.length) console.warn('剧情图警告：', report.warnings);

  const audit = auditCampaign(STORY);
  console.info(`本章可玩范围：${chapterTitlesText(presentChapterIds()) || '无'}；未收录：${chapterTitlesText(pendingChapterIds()) || '无'}`);

  dom.callsignInput.placeholder = STORY.defaultCallsign;
  document.title = `${STORY.title.zh}｜${STORY.title.en}`;
  dom.portraitUnknown.textContent = UNKNOWN_PORTRAIT_LABEL;
  dom.boundaryNote.textContent = '';
  dom.btnContinueChapter.hidden = true;
  // 标题角标与提示按真实收录情况生成：写好一章，这里就多一章，不需要改死文案
  dom.titleKicker.textContent = titleKickerText();
  dom.titleHint.textContent = titleHintText();
  dom.saveStatus.textContent = '';
  updateAutoStatus();
  refreshPendingSave();
  refreshTitleOptions();
  document.body.dataset.scene = 'title';
  document.body.dataset.storyMode = CAMPAIGN.mode;

  const bridge = registerGameTools(toolHandlers);
  if (bridge.supported) {
    console.info(`已注册 ${bridge.registered.length} 个界面工具：${bridge.registered.join(', ')}`);
  }
  window.__MBVN_WEBMCP = bridge;
}

boot();

// 便于宿主在控制台里独立检查状态流转（只读检查 + 自动播放控制）
window.__MBVN = {
  get state() {
    return state;
  },
  get screen() {
    return screen;
  },
  get pendingSave() {
    return pendingSave;
  },
  story: STORY,
  readiness: CAMPAIGN,
  visibleState,
  validate: () => validateStory(STORY),
  audit: () => auditCampaign(STORY),
  continuation: () => (state ? getContinuation(state, STORY) : null),
  continueChapter: () => onContinueChapter(),
  auto: {
    get on() {
      return auto.on;
    },
    get reason() {
      return auto.reason;
    },
    toggle: () => setAuto(),
    stop: (reason) => stopAuto(reason || '手动停止'),
    fire: () => runAutoAdvance(),
    delayFor: (text) => autoDelayFor(text)
  },
  overlays: {
    open: () => overlayName(),
    close: () => {
      closeOverlays();
      scheduleAuto();
    }
  }
};
