// 钢翼盟约 — 纯引擎（无 DOM、无 I/O、无副作用；state 一律不可变返回）
// 供 app.mjs、webmcp.mjs 与 tests/*.mjs 共同使用。

import { STORY } from './story.mjs';
import { EXPRESSION_IDS, resolvePresentation, resolveNodeSceneId } from './presentation.mjs';
import { BRIDGE_LEDGER_VERSION, reconcileBridgeHistory, formatBridgeOutcome, describeBridgeHardware } from './bridge-state.mjs';

export const ENGINE_VERSION = '2.4.0';
export const STATE_SCHEMA = 1; // 与旧会话存档兼容：字段只增不改，旧会话存档仍可恢复

export const TRUST_MIN = -3;
export const TRUST_MAX = 6;
export const STANDING_MIN = -3;
export const STANDING_MAX = 6;
/** Only an actual unidentified speaker receives this label. */
export const UNKNOWN_PORTRAIT_LABEL = 'Unknown';

/** Eight supported expressions; missing art and unidentified speakers are separate. */
export const EXPRESSION_VALUES = EXPRESSION_IDS;
/** 节点语气：一格台词只属于一种语气，决定用哪种笔法写 */
export const TONE_VALUES = ['combat', 'duty', 'off_duty'];
export const NODE_KINDS = ['dialogue', 'choice', 'chapterOutcome', 'ending', 'checkpoint'];

const DEFAULT_STORY = STORY;
/** 所有"走到这里就停下来"的节点：章末结果与终章结局都要进结算面板 */
const ENDING_KINDS = new Set(['ending', 'checkpoint', 'chapterOutcome']);
const FINAL_ENDING_KINDS = new Set(['ending']);

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function isNinObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/** 字面量替换：用 split/join 而非替换模板，避免 $& / $` / $' / $$ 被解释 */
function replaceLiteral(text, needle, value) {
  return text.split(needle).join(value);
}

/** {callsign} / {callsignEn} 占位符替换（呼号按字面量插入，不做替换模板解释） */
export function formatText(state, text, story = DEFAULT_STORY) {
  if (typeof text !== 'string') return '';
  if(story.bridgeAccounting)text=replaceLiteral(text,'{bridge_status}',describeBridgeHardware(state));
  const raw = (state && state.callsign) || story.defaultCallsign || '';
  const callsign = String(raw);
  if (!text.includes('{')) return text;
  return replaceLiteral(
    replaceLiteral(text, '{callsignEn}', callsign.toUpperCase()),
    '{callsign}',
    callsign
  );
}

export function sanitizeCallsign(input, story = DEFAULT_STORY) {
  const fallback = (story && story.defaultCallsign) || 'MOSS';
  if (typeof input !== 'string') return fallback;
  const cleaned = input.replace(/[\u0000-\u001F\u007F<>]/g, '').trim();
  if (!cleaned) return fallback;
  return cleaned.slice(0, 12);
}

/** 条件系统：requires 是旗标名数组，全部为真才满足；缺省即无条件 */
export function meetsRequirements(state, requires) {
  if (!Array.isArray(requires) || requires.length === 0) return true;
  const flags = (state && state.flags) || {};
  return requires.every((key) => Boolean(flags[key]));
}

/** 节点文本：优先匹配 variants（前序选择回调），否则用 node.text */
export function getNodeText(node, state) {
  if (!node) return '';
  if (Array.isArray(node.variants)) {
    for (const variant of node.variants) {
      if (variant && typeof variant.text === 'string' && meetsRequirements(state, variant.requires)) {
        return variant.text;
      }
    }
  }
  return typeof node.text === 'string' ? node.text : '';
}

function emptyMeters(keys) {
  const out = {};
  for (const key of keys) out[key] = 0;
  return out;
}

/** 目标节点解析：nextIf 逐条判断条件，最后回落 node.next */
export function resolveNext(state, node, story = DEFAULT_STORY) {
  if (!node) return null;
  if (Array.isArray(node.nextIf)) {
    for (const rule of node.nextIf) {
      if (!rule || typeof rule.next !== 'string') continue;
      if (meetsRequirements(state, rule.requires)) return rule.next;
    }
  }
  return node.next || null;
}

function historyEntry(state, node, turn) {
  const speaker = node.speaker || 'narration';
  return {
    turn,
    nodeId: node.id,
    speaker,
    speakerName: speakerDisplayName(state, speaker),
    scene: resolveNodeSceneId(node, state),
    kind: node.kind || 'dialogue',
    text: formatText(state, getNodeText(node, state))
  };
}

function appendHistory(state, node) {
  const entry = historyEntry(state, node, state.history.length + 1);
  return { ...state, history: [...state.history, entry] };
}

/**
 * 纯运行时派生旗标（数据驱动，节点级声明）：
 * 节点可以写 `deriveFlags: { flagName: { fromTrust: 'vera', min: 4 } }`，
 * 在 resolveNext 之前按"当前真实累积状态"把旗标算出来。规则只允许读引擎本来就有的
 * state.trust / state.standing；没有数值表达式落在故事数据里，也不写死任何一章的角色名。
 * 判定是纯函数：同一 state 永远得到同一个结果，存档读回后重算结果一致。
 * 写法是**双向**的：成立写 true，不成立写 false（覆盖上一次算出来的旧值）——
 * 否则同一个旗标在更晚的派生点上重新判定时，会把早先的 true 留成 stale flag。
 */
function applyDerivedFlags(state, node) {
  const rules = node && node.deriveFlags;
  if (!rules || typeof rules !== 'object') return state;
  let flags = null;
  for (const [flagName, rule] of Object.entries(rules)) {
    if (!rule || typeof rule !== 'object') continue;
    const meters = rule.fromStanding ? state.standing : state.trust;
    if (typeof rule.who !== 'string') continue;
    const value = typeof meters[rule.who] === 'number' ? meters[rule.who] : 0;
    const min = typeof rule.min === 'number' ? rule.min : 0;
    // 成立写 true，不成立写 false：派生旗标记的是"此刻算出来的结果"，
    // 不是"历史上有没有成立过"。
    const met = value >= min;
    if (!flags) flags = { ...(state.flags || {}) };
    flags[flagName] = met;
  }
  return flags ? { ...state, flags } : state;
}

function enterNode(state, node, extra = {}) {
  // onEnter：进节点即结算的旗标（取值幂等，重复进入同节点不会叠加信任）
  let withEntry = Array.isArray(node.onEnter) && node.onEnter.length
    ? applyEffects(state, node.onEnter) : state;
  // These rules describe an event at this node, after ordinary entry effects.
  // Choice conditions retain their existing AND-only meaning.
  for (const rule of node.onEnterIf || []) {
    if (!rule || !meetsRequirements(withEntry, rule.requires)) continue;
    if ((rule.forbids || []).some(key => Boolean(withEntry.flags?.[key]))) continue;
    withEntry = applyEffects(withEntry, rule.effects);
  }
  withEntry=applyDerivedFlags(withEntry,node);
  const withNode = {
    ...withEntry,
    nodeId: node.id,
    ended: ENDING_KINDS.has(node.kind),
    awaitingChoice: Boolean(node.choices && node.choices.length),
    ...extra
  };
  return appendHistory(withNode, node);
}

/** 建立一局全新状态（纯函数，返回新对象） */
export function createState(options = {}) {
  const story = options.story || DEFAULT_STORY;
  const callsign = sanitizeCallsign(options.callsign, story);
  const startNode = story.nodes[story.startId];

  const base = {
    schemaVersion: STATE_SCHEMA,
    storyId: story.id,
    callsign,
    nodeId: story.startId,
    ended: false,
    awaitingChoice: false,
    trust: emptyMeters(Object.keys(story.characters).filter((id) => story.characters[id].bondLine)),
    standing: emptyMeters(Object.keys(story.factions)),
    flags: story.bridgeAccounting ? {ev6_ledger_version:BRIDGE_LEDGER_VERSION} : {},
    chosen: {},
    history: [],
    completedChapters: [],
    lastReaction: null,
    lastEffects: []
  };

  return enterNode(base, startNode);
}

export function getNode(state, story = DEFAULT_STORY) {
  if (!state || !state.nodeId) return null;
  return story.nodes[state.nodeId] || null;
}

export function getStory() {
  return DEFAULT_STORY;
}

export function isEnded(state) {
  return Boolean(state && state.ended);
}

export function isAwaitingChoice(state) {
  return Boolean(state && state.awaitingChoice);
}

/** 推进一个节点；在选项节点或已结束时不动（返回原 state 引用） */
export function advance(state, story = DEFAULT_STORY) {
  if (!state || state.ended) return state;
  const node = getNode(state, story);
  if (!node) return state;
  if (node.choices && node.choices.length) return state;
  const nextId = resolveNext(state, node, story);
  if (!nextId) {
    return { ...state, ended: true, awaitingChoice: false };
  }
  const next = story.nodes[nextId];
  if (!next) return state;
  const cleared = { ...state, lastReaction: null, lastEffects: [] };
  return enterNode(applyDerivedFlags(cleared, next), next);
}

/** 施加效果，返回新 state（不修改入参） */
export function applyEffects(state, effects) {
  if (!Array.isArray(effects) || effects.length === 0) return state;
  const trust = { ...state.trust };
  const standing = { ...state.standing };
  const flags = { ...state.flags };
  const applied = [];

  for (const effect of effects) {
    if (!isNinObject(effect)) continue;
    if (effect.type === 'trust' && Object.prototype.hasOwnProperty.call(trust, effect.who)) {
      trust[effect.who] = clamp((trust[effect.who] || 0) + effect.amount, TRUST_MIN, TRUST_MAX);
      applied.push(effect);
    } else if (effect.type === 'standing' && Object.prototype.hasOwnProperty.call(standing, effect.who)) {
      standing[effect.who] = clamp((standing[effect.who] || 0) + effect.amount, STANDING_MIN, STANDING_MAX);
      applied.push(effect);
    } else if (effect.type === 'flag' && typeof effect.key === 'string') {
      flags[effect.key] = effect.value === undefined ? true : effect.value;
      applied.push(effect);
    }
  }
  if (applied.length === 0) return state;
  return { ...state, trust, standing, flags, lastEffects: applied };
}

/** 当前节点里真正可选的选项（条件不满足的会被过滤） */
export function getChoiceList(state, story = DEFAULT_STORY) {
  const node = getNode(state, story);
  if (!node || !Array.isArray(node.choices)) return [];
  return node.choices.filter((choice) => meetsRequirements(state, choice.requires));
}

/** 被条件锁住的选项数（界面用来说明你还开不了这个口） */
export function getBlockedChoiceCount(state, story = DEFAULT_STORY) {
  const node = getNode(state, story);
  if (!node || !Array.isArray(node.choices)) return 0;
  return node.choices.filter((choice) => !meetsRequirements(state, choice.requires)).length;
}

/** 选择一个分支；同一节点只能生效一次（防重复结算），条件不满足时拒绝 */
export function choose(state, choiceId, story = DEFAULT_STORY) {
  if (!state || state.ended) return state;
  const node = getNode(state, story);
  if (!node || !Array.isArray(node.choices)) return state;
  if (state.chosen[node.id]) return state; // 一次性：同节点已结算，直接返回原 state
  const choice = node.choices.find((item) => item.id === choiceId);
  if (!choice) return state;
  if (!meetsRequirements(state, choice.requires)) return state;

  const withEffects = applyEffects(state, choice.effects || []);
  const marked = {
    ...withEffects,
    chosen: { ...withEffects.chosen, [node.id]: choice.id },
    lastReaction: choice.reaction ? formatText(withEffects, choice.reaction) : null
  };

  // 选项效果结算之后、进入目标之前，也要按目标节点自己的派生规则算一次：
  // 否则"刚刚改变了信任、下一步就按它分流"的写法会慢一拍。
  const target = story.nodes[choice.next];
  if (!target) return { ...marked, ended: true, awaitingChoice: false };
  return enterNode(applyDerivedFlags(marked, target), target, { lastReaction: marked.lastReaction });
}

/** 结算面板：把旗标翻成人话 */
export function getEchoes(state, story = DEFAULT_STORY) {
  const table = story.echoes || {};
  return Object.keys(table)
    .filter((key) => Boolean(state.flags[key]))
    .map((key) => ({ key, text: table[key] }));
}

/** 知识门控：角色/阵营档案里的秘密，只有对应剧情旗标成立才展示 */
export function getSecrets(state, owner, story = DEFAULT_STORY) {
  const source = typeof owner === 'string'
    ? (story.characters[owner] || story.factions[owner] || null)
    : owner;
  const entries = (source && Array.isArray(source.secrets)) ? source.secrets : [];
  const revealed = [];
  const locked = [];
  for (const entry of entries) {
    if (meetsRequirements(state, entry.requires)) revealed.push(entry);
    else locked.push(entry);
  }
  return {
    revealed: revealed.map((entry) => ({ id: entry.id, label: entry.label || '已知', text: entry.text })),
    revealedCount: revealed.length,
    lockedCount: locked.length
  };
}

/**
 * 结算数据：章末结果（kind='chapterOutcome'）与终章结局（kind='ending'）是两种不同的东西。
 *   - 章末结果：`continueHint` 说明故事从哪里继续（continuesTo），不是全书终点。
 *   - 终章结局：必须带 closure（机制结果 / 船与同伴落点 / 主角位置），不得用"下一章见"收尾。
 */
export function getEnding(state, story = DEFAULT_STORY) {
  const node = getNode(state, story);
  if (!node || !ENDING_KINDS.has(node.kind)) return null;
  const id = node.outcomeId || null;
  const table = story.endings || {};
  const chapterTable = story.chapterOutcomes || {};
  const finalTable = story.finalEndings || {};
  const isFinal = FINAL_ENDING_KINDS.has(node.kind);
  const baseMeta = (id && ((isFinal && finalTable[id]) || table[id] || chapterTable[id])) || null;
  const matchedMeta = baseMeta?.variants?.find(v => meetsRequirements(state, v.requires)
    && !(v.forbids || []).some(key => Boolean(state.flags?.[key])));
  const selectedMeta = matchedMeta ? { ...baseMeta, ...matchedMeta } : baseMeta;
  const meta = story.bridgeAccounting ? formatBridgeOutcome(selectedMeta,state) : selectedMeta;
  return {
    id: id || node.id,
    kind: node.kind,
    isFinal,
    classification: (meta && meta.classification) || (isFinal ? 'ordinary' : null),
    characterStates: (meta && meta.characterStates) || null,
    chapter: (meta && meta.chapter) || node.chapter || null,
    title: (meta && meta.title) || (isFinal ? '结局' : '章末结果'),
    route: (meta && meta.route) || 'neutral',
    routeName: (meta && meta.routeName) || '',
    summary: (meta && meta.summary) || formatText(state, getNodeText(node, state)),
    consequences: (meta && meta.consequences) || [],
    nextHook: (meta && meta.nextHook) || '',
    continueHint: (meta && meta.continueHint) || '',
    continuesTo: (meta && meta.continuesTo) || node.continuesTo || null,
    closure: (meta && meta.closure) || node.closure || null,
    endingNodeId: node.id
  };
}

/** 某一章的目录信息（标题 / 前缀 / 起止 / 就绪状态 / 体量目标） */
export function getChapterInfo(story, chapterId) {
  const list = (story && story.chapters) || [];
  return list.find((chapter) => chapter.id === chapterId) || null;
}

/**
 * 章末继续点（纯函数，只读）：
 *   只有"当前停在章末结果节点（kind='chapterOutcome'）"并且"它声明的下一章真的已经写好、入口节点存在"
 *   时才返回 available:true。终章结局（kind='ending'）、普通对话节点、没有声明下一章的章末结果、
 *   以及下一章还没写出来的情况，都返回 available:false 并附上原因——缺章就是缺章，不假装能继续。
 */
export function getContinuation(state, story = DEFAULT_STORY) {
  if (!state || !state.ended) return null;
  const node = getNode(state, story);
  if (!node || node.kind !== 'chapterOutcome') {
    return { available: false, reason: node && node.kind === 'ending' ? 'final-ending' : 'not-at-chapter-outcome', outcomeId: null, nextChapterId: null, entryId: null };
  }
  const outcomeId = node.outcomeId || node.id;
  const meta = (story.chapterOutcomes || {})[outcomeId] || null;
  if (meta && meta.isFinal === true) {
    return { available: false, reason: 'final-ending', outcomeId, nextChapterId: null, entryId: null };
  }
  const nextChapterId = (meta && meta.continuesTo) || node.continuesTo || null;
  const chapterId = (meta && meta.chapter) || node.chapter || null;
  const base = {
    available: false,
    outcomeId,
    chapterId,
    title: (meta && meta.title) || '',
    route: (meta && meta.route) || node.route || 'neutral',
    continueHint: (meta && meta.continueHint) || '',
    nextHook: (meta && meta.nextHook) || '',
    nextChapterId,
    entryId: null,
    nextChapter: null,
    reason: 'no-declared-next-chapter'
  };
  if (!nextChapterId) return base;
  const chapter = getChapterInfo(story, nextChapterId);
  if (!chapter || !chapter.present) {
    return { ...base, reason: 'chapter-not-loaded' };
  }
  if (!chapter.entry || !(story.nodes || {})[chapter.entry]) {
    return { ...base, reason: 'entry-node-missing' };
  }
  return {
    ...base,
    available: true,
    reason: null,
    entryId: chapter.entry,
    nextChapter: {
      id: chapter.id,
      number: chapter.number,
      title: chapter.title,
      badge: chapter.badge || '',
      status: chapter.status || null
    }
  };
}

/**
 * 真正的"进入下一章"（纯函数）：
 *   只在 getContinuation 判定可用时，把状态搬到下一章入口节点；呼号、旗标（含非布尔值）、
 *   信任、声望、已结算的选项、回放历史与已经走完的章末结果全部原样保留，入口节点的 onEnter
 *   效果只结算这一次。不可继续时返回 null——界面据此保持章末边界，不静默跳转。
 */
export function continueChapter(state, story = DEFAULT_STORY) {
  const info = getContinuation(state, story);
  if (!info || !info.available) return null;
  const entry = story.nodes[info.entryId];
  if (!entry) return null;
  const completed = Array.isArray(state.completedChapters) ? state.completedChapters.map((item) => ({ ...item })) : [];
  if (!completed.some((item) => item.outcomeId === info.outcomeId)) {
    completed.push({
      chapterId: info.chapterId,
      outcomeId: info.outcomeId,
      outcomeNodeId: state.nodeId,
      nextChapterId: info.nextChapterId,
      entryId: info.entryId
    });
  }
  const carried = {
    ...state,
    completedChapters: completed,
    lastReaction: null,
    lastEffects: []
  };
  return enterNode(carried, entry);
}

/** 当前节点属于哪一章（节点自带 chapter 字段；没有时按 id 前缀回落） */
export function getNodeChapter(story, node) {
  if (!node) return null;
  if (node.chapter) return getChapterInfo(story, node.chapter);
  const list = (story && story.chapters) || [];
  return list.find((chapter) => chapter.nodeIdPrefix && node.id.startsWith(chapter.nodeIdPrefix)) || null;
}

/** 场景登记查询：节点只能引用登记过的 sceneId */
export function getSceneInfo(story, sceneId) {
  const scenes = (story && story.scenes) || {};
  return scenes[sceneId] || null;
}

/**
 * 场景文件解析（纯函数）：基础图 + 已交付的专用衍生图。
 * 例如 battle → bg-spacebattle.png、hangar → bg-hangar-duo.png：这两张只用于
 * "灰鸢与夜枭确实同时在场"的一幕。候选图 status 不是 'delivered' 时永远退回基础图，
 * 绝不拿别的场景或别的图顶替；界面按返回的真实文件加载，加载失败就显示可恢复的缺图状态。
 */
export function resolveSceneArtFile(sceneId, story = DEFAULT_STORY, options = {}) {
  const scene = getSceneInfo(story, sceneId);
  if (!scene) return null;
  // 在场清单：调用方可以传当前这一幕真实在场的人/机体；不传就按登记表自己声明的在场清单算。
  const participants = Array.isArray(options.participants)
    ? options.participants
    : (Array.isArray(scene.narrativeEntities)
        ? scene.narrativeEntities
        : (Array.isArray(scene.visibleEntities) ? scene.visibleEntities : []));
  const candidates = Array.isArray(scene.upgradeCandidates) ? scene.upgradeCandidates : [];
  for (const candidateId of candidates) {
    const candidate = getSceneInfo(story, candidateId);
    if (!candidate || candidate.status !== 'delivered') continue;
    const required = Array.isArray(candidate.requiresMachines) ? candidate.requiresMachines : [];
    // 专用衍生图只在"两台机体确实同时在场"时启用；清单对不上就用基础图，
    // 宁可退回已交付的基础图，也不拿"只有一台机体"的画面谎报成两台同框。
    if (required.length > 0 && !required.every((id) => participants.includes(id))) continue;
    return {
      sceneId: candidate.id,
      file: candidate.file,
      baseSceneId: scene.id,
      upgraded: true,
      requiresMachines: [...required]
    };
  }
  return {
    sceneId: scene.id,
    file: scene.file,
    baseSceneId: scene.id,
    upgraded: false,
    requiresMachines: []
  };
}

/**
 * 完整游戏完成度审计（供宿主在集成前独立核查）：
 * 只要还有 not-authored 的章节、非 complete 的章节、缺失的终章结局或没有 closure 的结局，
 * 就必须报 complete:false 并逐条给出原因——不得把"部分文件/目录清单"当完成度。
 */
export function auditCampaign(story = DEFAULT_STORY) {
  const chapters = (story && story.chapters) || [];
  const present = chapters.filter((chapter) => chapter.present);
  const pending = chapters.filter((chapter) => !chapter.present);
  const notComplete = present.filter((chapter) => chapter.status !== 'complete');
  const finale = present.filter((chapter) => chapter.id === (story.campaign && story.campaign.finaleChapterId));
  const finalEndings = Object.values((story && story.finalEndings) || {});
  const reasons = [];

  if (pending.length) reasons.push(`还有 ${pending.length} 章没有写出章节模块: ${pending.map((chapter) => chapter.id).join(', ')}`);
  if (notComplete.length) reasons.push(`已有章节还没通过终稿验收: ${notComplete.map((chapter) => `${chapter.id}(${chapter.status})`).join(', ')}`);
  if (!finale.length) reasons.push('终章模块缺失：维斯特 / 锚链 / 基廷 / 复位口令与四名同伴的落点都还没有收束');
  if (!finalEndings.length) reasons.push('终章结局缺失：没有一个带 closure 的结局节点');
  for (const ending of finalEndings) {
    const closure = ending.closure || {};
    if (!closure.mechanism || !closure.ship || !Array.isArray(closure.companions) || !closure.protagonist) {
      reasons.push(`结局 ${ending.id} 的 closure 不完整（机制 / 船 / 四名同伴 / 主角位置）`);
    }
  }

  const evidence = [];
  for (const chapter of chapters) {
    evidence.push({
      id: chapter.id,
      title: chapter.title,
      status: chapter.status,
      present: Boolean(chapter.present),
      nodes: chapter.nodeCount || 0,
      contentTarget: chapter.contentTarget || null,
      contentActual: chapter.contentActual || null
    });
  }

  return {
    complete: reasons.length === 0,
    mode: reasons.length === 0 ? 'full-campaign' : 'chapter-preview',
    chapters: evidence,
    pendingChapters: pending.map((chapter) => chapter.id),
    incompleteChapters: notComplete.map((chapter) => chapter.id),
    finalEndingIds: finalEndings.map((ending) => ending.id),
    reasons
  };
}

export function getBondLabel(score) {
  if (score >= 4) return { key: 'ally', label: '以命相托' };
  if (score >= 2) return { key: 'ally', label: '并肩' };
  if (score >= 0) return { key: 'formal', label: '公事公办' };
  if (score >= -2) return { key: 'formal', label: '留有余地' };
  return { key: 'guard', label: '戒备' };
}

export function getStandingLabel(score) {
  if (score >= 2) return { key: 'high', label: '被记住' };
  if (score >= 1) return { key: 'high', label: '打过照面' };
  if (score === 0) return { key: 'neutral', label: '例行记录' };
  if (score >= -1) return { key: 'low', label: '留了案底' };
  return { key: 'low', label: '重点关注' };
}

export function getBondSummary(state, story = DEFAULT_STORY) {
  return Object.keys(state.trust)
    .filter((id) => story.characters[id] && story.characters[id].bondLine)
    .map((id) => {
      const score = state.trust[id];
      const band = getBondLabel(score);
      const lines = story.characters[id].bondLine || {};
      const current = getCharacterStatus(state,id,story)?.relationship;
      return {
        id,
        name: story.characters[id].name,
        shortName: story.characters[id].shortName || story.characters[id].name,
        color: story.characters[id].color,
        score,
        label: current?.label || band.label,
        line: current?.line || lines[band.key] || ''
      };
    });
}

export function getStandingSummary(state, story = DEFAULT_STORY) {
  return Object.keys(state.standing).map((id) => {
    const faction = story.factions[id] || { name: id, color: '#8A929B', standingLine: {} };
    const band = getStandingLabel(state.standing[id]);
    return {
      id,
      name: faction.name,
      color: faction.color,
      stance: faction.stance,
      score: state.standing[id],
      label: band.label,
      line: (faction.standingLine || {})[band.key] || ''
    };
  });
}

const ROUTE_NOTES = {
  concord: '你按规矩行事，"把活着的人带回家"这条线已经系上。',
  scarlet: '你把频道打开过一次，赤垣开始把你的呼号当成一个人名。',
  spire: '你让灰塔的手伸进过你的驾驶舱，他们的记录里多了一个问号。'
};

/** 航线倾向：不承诺结局，只说明这一段把重心推到了哪边 */
export function previewRouteLeaning(state, story = DEFAULT_STORY) {
  const scout = [
    { id: 'concord', name: (story.factions.concord || {}).name || 'concord', value: (state.standing.concord || 0) + (state.trust.ivna || 0) },
    { id: 'scarlet', name: (story.factions.scarlet || {}).name || 'scarlet', value: (state.standing.scarlet || 0) + (state.trust.doran || 0) },
    { id: 'spire', name: (story.factions.spire || {}).name || 'spire', value: (state.standing.spire || 0) + (state.trust.nova || 0) }
  ];
  scout.sort((a, b) => b.value - a.value);
  const top = scout[0];
  const tie = scout.length > 1 && scout[1].value === top.value;
  return {
    scored: scout,
    top: tie ? 'none' : top.id,
    topLabel: tie ? '三条线并列' : `${top.name} ${top.value > 0 ? '+' : ''}${top.value}`,
    note: tie || top.value === 0 ? '这一段没有把谁推到你前面——三条线都还开着。' : ROUTE_NOTES[top.id]
  };
}

export function getBacklog(state) {
  if (!state || !Array.isArray(state.history)) return [];
  return state.history.map((entry) => ({ ...entry }));
}

export function speakerDisplayName(state, speakerId, story = DEFAULT_STORY) {
  const character = story.characters[speakerId];
  if (!character) return speakerId;
  if (character.usesCallsign) return state && state.callsign ? state.callsign : story.defaultCallsign;
  const gate = character.revealGate;
  if (gate && gate.flag && !isCharacterRevealed(state, character)) {
    return gate.name || character.name;
  }
  return character.name;
}

/**
 * 身份门控（纯函数，数据驱动）：角色条目可以声明 `revealGate: { flag, name, role, caption }`。
 * 旗标没有成立之前，界面上的名字 / 角色 / 说明文字与立绘一律走"未揭示"那一档——
 * 这不是界面层的特例，而是角色条目上的数据；没有声明门控的角色永远视为已揭示。
 * 门控**只**读旗标，不读任何隐藏内容；read_game_state 也不会因此多报任何旗标。
 */
export function isCharacterRevealed(state, character) {
  const gate = character && character.revealGate;
  if (!gate || !gate.flag) return true;
  return Boolean(state && state.flags && state.flags[gate.flag] === true);
}

/**
 * 角色在当前状态下的展示面貌（纯函数，数据驱动）：
 * 身份门控（revealGate）与服装档（costumes）都在这一处判定——发言框、立绘说明行与档案卡
 * 读同一份结果，不会出现"立绘已经换了、职衔还写着旧编制"这种两套说法。
 * 判定只读 state.flags 与角色条目自己声明的内容，不读任何隐藏信息。
 */
export function getCharacterStatus(state,speakerId,story=DEFAULT_STORY) {
  const rule=(story.characterStatusRules?.[speakerId]||[]).find(r=>meetsRequirements(state,r.requires)
    && !(r.forbids||[]).some(key=>Boolean(state.flags?.[key])));
  const outcome=getEnding(state,story)?.characterStates?.[speakerId];
  return {...rule,...outcome};
}

export function getCharacterPresentation(state, speakerId, story = DEFAULT_STORY) {
  const character = story.characters[speakerId] || story.characters.narration;
  const gate = character.revealGate;
  const revealed = isCharacterRevealed(state, character);
  // 状态感知的服装档：角色的 portraits 可以按服装分组（例如伊芙娜的作训服 / 民用便装）。
  // 未揭示时的 outfit 只可能是门控自己声明的那一档；已揭示时由角色声明的 costumeFlags 决定。
  const outfit = (!revealed && gate && gate.outfit) || resolveCostumeId(character, state);
  // 服装组自己的 role / caption 只在"身份已经合法揭示、又真的命中这一套衣服"时才生效：
  // 未揭示的角色一律走门控那一档，服装元数据不越过身份门控（AU09 这类身份门控角色不受影响）。
  const outfitMeta = (outfit && revealed && character.costumes && character.costumes[outfit]) || null;
  const current = revealed ? getCharacterStatus(state,speakerId,story) : null;
  return {
    id: speakerId,
    character,
    revealed,
    outfit,
    outfitMeta,
    faction: current && Object.prototype.hasOwnProperty.call(current,'faction') ? current.faction : character.faction,
    name: speakerDisplayName(state, speakerId, story),
    role: (!revealed && gate && gate.role) || current?.role || (outfitMeta && outfitMeta.role) || character.displayRole || character.role || '',
    caption: (!revealed && gate && gate.caption) || current?.caption || (outfitMeta && outfitMeta.caption) || character.caption || ''
  };
}

export function getSpeakerInfo(state, story = DEFAULT_STORY) {
  const node = getNode(state, story);
  if (!node) return null;
  const speakerId = node.speaker || 'narration';
  const presentation = getCharacterPresentation(state, speakerId, story);
  const character = presentation.character;
  const factionId = node.faction || presentation.faction || null;
  const faction = factionId ? story.factions[factionId] : null;
  const direction = resolvePresentation(node, state, character, presentation.outfit, story.presentation);
  const expression = direction.expression;
  // 身份没有合法揭示之前，即使图片文件已经在目录里也不算可用：同一个居中相框里的 Unknown。
  const portraitFile = presentation.revealed
    ? direction.file || getPortraitFile(character, expression, presentation.outfit) : null;
  return {
    id: speakerId,
    name: presentation.name,
    role: presentation.role,
    caption: presentation.caption,
    color: character.color || '#F2ECE0',
    revealed: presentation.revealed,
    unidentified: character.unidentified === true || presentation.revealed === false,
    panelIndex: typeof character.panelIndex === 'number' ? character.panelIndex : null,
    /** 当前表情的确切文件；缺图与身份未知分别处理。 */
    portrait: portraitFile,
    portraitFile,
    portraits: character.portraits || null,
    outfit: presentation.outfit,
    expression,
    framing: direction.framing,
    nativeFraming: direction.nativeFraming,
    poseId: direction.poseId,
    tone: node.tone || null,
    chapter: node.chapter || null,
    factionId,
    factionName: faction ? faction.name : null,
    factionColor: faction ? faction.color : null,
    scene: resolveNodeSceneId(node, state),
    kind: node.kind || 'dialogue',
    text: formatText(state, getNodeText(node, state))
  };
}

/**
 * 服装档判定（纯函数，数据驱动）：只读角色自己声明的 costumeFlags 与 state.flags。
 * 返回 'civilian' 之类的服装 id；没有声明 costumes 的角色返回 null（走默认档）。
 */
export function resolveCostumeId(character, state) {
  const costumes = character && character.costumes;
  if (!costumes || typeof costumes !== 'object') return null;
  for (const [outfitId, outfit] of Object.entries(costumes)) {
    const requires = Array.isArray(outfit && outfit.requires) ? outfit.requires : [];
    if (requires.length === 0) continue;
    if (state && requires.every((key) => Boolean(state.flags && state.flags[key]))) return outfitId;
  }
  return null;
}

/**
 * 表情 → 立绘文件：精确匹配，**不拿别的档位顶替**。
 *   - character.portraits 是扁平的表情表（{neutral,serious,warm}）时按原语义取值；
 *   - 是按服装分组的表（{military:{...},civilian:{...},costumes:{...}}）时，
 *     outfit 命中的那一组优先；命中的一组里没有这一档表情就返回 null，
 *     绝不退回另一套服装的图，避免"换了衣服却还穿旧装"的错图。
 */
export function getPortraitFile(character, expression = 'neutral', outfit = null) {
  const portraits = character && character.portraits;
  if (!portraits || typeof portraits !== 'object') return null;
  // 命中了服装档就以那一组为准：组里缺这一档表情时返回 null，
  // 绝不回退到另一套服装的图——"换了衣服还穿旧装"是比缺图更糟的谎报。
  if (outfit && portraits[outfit] && typeof portraits[outfit] === 'object') {
    const byOutfit = portraits[outfit][expression];
    return typeof byOutfit === 'string' && byOutfit ? byOutfit : null;
  }
  // 没有服装档（或服装档没有这一组）时按扁平表情表取；没有这一档同样是 null。
  const flat = portraits[expression];
  return typeof flat === 'string' && flat ? flat : null;
}

/**
 * 预载用：同一个角色、同一个表情下**可能用到的每一档服装**的立绘文件（去重、按顺序）。
 * 渲染永远走 getPortraitFile（身份门控 + 服装档）；这个函数只回答"提前把哪几张图放缓存"。
 */
export function getPortraitFileCandidates(character, expression = 'neutral', outfit = null) {
  const portraits = character && character.portraits;
  if (!portraits || typeof portraits !== 'object') return [];
  const files = [];
  const push = (value) => {
    if (typeof value === 'string' && value && !files.includes(value)) files.push(value);
  };
  // 默认档（扁平键）永远在候选里：渲染可能因为身份未揭示或服装未触发而用它。
  push(portraits[expression]);
  if (outfit && portraits[outfit] && typeof portraits[outfit] === 'object') {
    // 命中了服装档：先把它放前面（渲染优先用的就是它），默认档留在后面备用。
    const preferred = portraits[outfit][expression];
    if (typeof preferred === 'string' && preferred) {
      files.unshift(preferred);
      const dedup = files.filter((value, index) => files.indexOf(value) === index);
      return dedup;
    }
    return files;
  }
  for (const group of Object.values(portraits)) {
    if (group && typeof group === 'object') push(group[expression]);
  }
  return files;
}

/**
 * 立绘状态判定（纯函数，界面层只负责加载图片并把它自己的加载结果传进来）。
 * Unknown 只代表正在说话、身份尚未揭露的人。
 * 旁白、玩家与广播不显示人物框；已知角色的图片未就绪时也不冒充未知身份。
 */
export function resolvePortraitState(info, loaded = {}) {
  const file = info && typeof info.portraitFile === 'string' ? info.portraitFile : '';
  const record = file && loaded ? loaded[file] : undefined;
  const usable = Boolean(info && info.id && file && (record === true || record === 'ready'));
  const noPerson = !info || !info.id || ['narration', 'player', 'system'].includes(info.id);
  const unidentified = !noPerson && (info.unidentified === true || info.revealed === false);
  const mode = noPerson ? 'none' : unidentified ? 'unknown' : usable ? 'known' : 'none';
  return {
    mode,
    label: mode === 'unknown' ? UNKNOWN_PORTRAIT_LABEL : '',
    file: mode === 'known' ? file : '',
    expression: (info && info.expression) || 'neutral',
    /** 这一句本来应该有立绘（角色配了表情表）但文件没到位：界面要如实说明缺的是哪一档 */
    artMissing: Boolean(info && info.id && file && !usable),
    noPortraitConfigured: Boolean(info && info.id && !file)
  };
}

export function serialize(state) {
  return JSON.stringify({
    schemaVersion: STATE_SCHEMA,
    storyId: state.storyId,
    callsign: state.callsign,
    nodeId: state.nodeId,
    ended: state.ended,
    awaitingChoice: state.awaitingChoice,
    trust: state.trust,
    standing: state.standing,
    flags: state.flags,
    chosen: state.chosen,
    history: state.history,
    completedChapters: Array.isArray(state.completedChapters) ? state.completedChapters : [],
    lastReaction: state.lastReaction,
    lastEffects: state.lastEffects
  });
}

export function deserialize(raw, story = DEFAULT_STORY) {
  if (typeof raw !== 'string' || !raw) return null;
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    return null;
  }
  if (!isNinObject(parsed)) return null;
  if (parsed.schemaVersion !== STATE_SCHEMA) return null;
  if (parsed.storyId !== story.id) return null;
  if (typeof parsed.nodeId !== 'string' || !story.nodes[parsed.nodeId]) return null;
  if (!isNinObject(parsed.trust) || !isNinObject(parsed.standing)) return null;

  const base = createState({ story, callsign: parsed.callsign });
  const restored = {
    ...base,
    nodeId: parsed.nodeId,
    ended: Boolean(parsed.ended),
    awaitingChoice: Boolean(parsed.awaitingChoice),
    trust: { ...base.trust, ...parsed.trust },
    standing: { ...base.standing, ...parsed.standing },
    flags: { ...parsed.flags },
    chosen: { ...parsed.chosen },
    history: Array.isArray(parsed.history) ? parsed.history.map((entry) => ({ ...entry })) : base.history,
    completedChapters: Array.isArray(parsed.completedChapters)
      ? parsed.completedChapters.map((entry) => ({ ...entry }))
      : [],
    lastReaction: parsed.lastReaction || null,
    lastEffects: Array.isArray(parsed.lastEffects) ? parsed.lastEffects : []
  };
  // Older saves may have heard a fact before its disclosure node set a flag.
  // Recover only facts witnessed in actual history or on the restored page.
  const witnessed = new Set([restored.nodeId, ...restored.history.map(entry => entry.nodeId)]);
  for (const [flag, disclosureNodes] of Object.entries(story.knowledgeReveals || {})) {
    if (Array.isArray(disclosureNodes) && disclosureNodes.some(id => witnessed.has(id))) restored.flags[flag] = true;
  }
  return story.bridgeAccounting ? reconcileBridgeHistory(restored) : restored;
}

function collectTargets(node) {
  const targets = [];
  if (Array.isArray(node.choices)) {
    for (const choice of node.choices) targets.push(choice.next);
  }
  if (Array.isArray(node.nextIf)) {
    for (const rule of node.nextIf) targets.push(rule.next);
  }
  if (node.next) targets.push(node.next);
  return targets.filter((id) => typeof id === 'string');
}

/** 图校验：供宿主独立核查节点链接、条件选项、结局可达性与旗标闭环 */
export function validateStory(story = DEFAULT_STORY) {
  const errors = [];
  const warnings = [];
  const nodes = story.nodes || {};
  const ids = Object.keys(nodes);
  const endingIds = Array.isArray(story.endingIds) ? story.endingIds : [];
  const scenes = story.scenes || {};
  const chapters = Array.isArray(story.chapters) ? story.chapters : [];
  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));

  for (const issue of story.buildIssues || []) errors.push(`故事聚合问题: ${issue}`);

  if (!nodes[story.startId]) errors.push(`startId 缺失: ${story.startId}`);
  if (endingIds.length < 2) errors.push('结局节点少于 2 个，无法构成多结局章节');
  for (const id of endingIds) {
    if (!nodes[id]) errors.push(`结局节点缺失: ${id}`);
    else if (!ENDING_KINDS.has(nodes[id].kind)) errors.push(`结局节点 kind 应为 ending: ${id}`);
  }

  // 章节模块契约：入口、章末结果节点、场景/表情/语气标注
  for (const chapter of chapters) {
    if (!chapterById.has(chapter.id)) errors.push(`章节重复或缺失: ${chapter.id}`);
    if (chapter.present) {
      if (!chapter.entry || !nodes[chapter.entry]) errors.push(`章节入口节点缺失: ${chapter.id} -> ${chapter.entry}`);
      for (const nodeId of chapter.outcomeNodeIds || []) {
        if (!nodes[nodeId]) errors.push(`章节的章末结果节点缺失: ${chapter.id} -> ${nodeId}`);
      }
      for (const sceneId of chapter.scenes || []) {
        if (!scenes[sceneId]) errors.push(`章节声明了未登记的场景: ${chapter.id} -> ${sceneId}`);
      }
    }
  }

  let choiceNodes = 0;
  let dialogueNodes = 0;
  let endingNodes = 0;
  let chapterOutcomeNodes = 0;
  const routeNodes = {};

  for (const id of ids) {
    const node = nodes[id];
    if (node.id !== id) errors.push(`节点 id 与键不一致: ${id} -> ${node.id}`);
    const hasVariants = Array.isArray(node.variants) && node.variants.some((v) => v && typeof v.text === 'string' && v.text.trim());
    if ((typeof node.text !== 'string' || !node.text.trim()) && !hasVariants) errors.push(`节点缺少文本: ${id}`);
    if (!story.characters[node.speaker]) errors.push(`节点说话人不存在: ${id} -> ${node.speaker}`);
    if (node.choices && node.next) errors.push(`节点同时存在 choices 与 next: ${id}`);

    // 每个叙事节点都必须显式选好：章节、场景、表情、语气
    const chapter = chapterById.get(node.chapter);
    if (!node.chapter) errors.push(`节点缺少 chapter: ${id}`);
    else if (!chapter) errors.push(`节点章节不存在: ${id} -> ${node.chapter}`);
    if (!node.scene) errors.push(`节点缺少 scene: ${id}`);
    else if (!scenes[node.scene]) errors.push(`节点引用了未登记的场景: ${id} -> ${node.scene}`);
    if (node.sceneIf !== undefined) {
      if (!Array.isArray(node.sceneIf)) errors.push(`sceneIf 必须是数组: ${id}`);
      else for (const rule of node.sceneIf) {
        if (!isNinObject(rule) || !scenes[rule.scene]) {
          errors.push(`sceneIf 场景未登记: ${id}`); continue;
        }
        for (const key of ['requires', 'forbids']) {
          if (rule[key] !== undefined && (!Array.isArray(rule[key]) || rule[key].some(f => typeof f !== 'string')))
            errors.push(`sceneIf ${key} 必须是旗标数组: ${id}`);
        }
      }
    }
    if (!node.expression) errors.push(`节点缺少 expression: ${id}`);
    else if (!EXPRESSION_VALUES.includes(node.expression)) errors.push(`节点 expression 非法: ${id} -> ${node.expression}`);
    if (!node.tone) errors.push(`节点缺少 tone: ${id}`);
    else if (!TONE_VALUES.includes(node.tone)) errors.push(`节点 tone 非法: ${id} -> ${node.tone}`);
    if (node.kind && !NODE_KINDS.includes(node.kind)) errors.push(`节点 kind 非法: ${id} -> ${node.kind}`);
    if (node.onEnterIf !== undefined) {
      if (!Array.isArray(node.onEnterIf)) errors.push(`onEnterIf 必须是数组: ${id}`);
      else for (const rule of node.onEnterIf) {
        if (!isNinObject(rule) || !Array.isArray(rule.effects)) {
          errors.push(`onEnterIf 缺少 effects: ${id}`); continue;
        }
        for (const key of ['requires', 'forbids']) {
          if (rule[key] !== undefined && (!Array.isArray(rule[key]) || rule[key].some(f => typeof f !== 'string')))
            errors.push(`onEnterIf ${key} 必须是旗标数组: ${id}`);
        }
        for (const effect of rule.effects) {
          if (!isNinObject(effect) || !['flag','trust','standing'].includes(effect.type)) errors.push(`onEnterIf 效果非法: ${id}`);
          else if (effect.type === 'flag' && typeof effect.key !== 'string') errors.push(`onEnterIf 旗标缺少 key: ${id}`);
          else if (effect.type === 'trust' && !story.characters[effect.who]) errors.push(`onEnterIf trust 目标不存在: ${id}`);
          else if (effect.type === 'standing' && !story.factions[effect.who]) errors.push(`onEnterIf standing 目标不存在: ${id}`);
          else if (effect.type !== 'flag' && !Number.isFinite(effect.amount)) errors.push(`onEnterIf 数值非法: ${id}`);
        }
      }
    }

    if (ENDING_KINDS.has(node.kind)) endingNodes += 1;
    else if (!node.choices) dialogueNodes += 1;
    if (node.kind === 'chapterOutcome') chapterOutcomeNodes += 1;

    if (node.route) routeNodes[node.route] = (routeNodes[node.route] || 0) + 1;

    if (node.choices) {
      choiceNodes += 1;
      if (!Array.isArray(node.choices) || node.choices.length < 2) errors.push(`选项节点选项少于 2: ${id}`);
      const unconditional = (node.choices || []).filter((choice) => !choice.requires || choice.requires.length === 0);
      if (unconditional.length < 2) errors.push(`选项节点必须有至少 2 个无条件选项（防死路）: ${id}`);
      const seen = new Set();
      for (const choice of node.choices || []) {
        if (seen.has(choice.id)) errors.push(`选项 id 重复: ${id} -> ${choice.id}`);
        seen.add(choice.id);
        if (!choice.label) errors.push(`选项缺少文案: ${id} -> ${choice.id}`);
        if (!choice.next || !nodes[choice.next]) errors.push(`选项目标不存在: ${id} -> ${choice.next}`);
        for (const effect of choice.effects || []) {
          if (effect.type === 'trust' && !Object.prototype.hasOwnProperty.call(story.characters, effect.who)) {
            errors.push(`trust 目标不存在: ${id} -> ${effect.who}`);
          }
          if (effect.type === 'standing' && !Object.prototype.hasOwnProperty.call(story.factions, effect.who)) {
            errors.push(`standing 目标不存在: ${id} -> ${effect.who}`);
          }
          if (!['trust', 'standing', 'flag'].includes(effect.type)) errors.push(`未知效果类型: ${id} -> ${effect.type}`);
        }
      }
    } else if (ENDING_KINDS.has(node.kind)) {
      if (node.next) errors.push(`结局节点不应有 next: ${id}`);
      if (!node.outcomeId) errors.push(`结算节点缺少 outcomeId: ${id}`);
      else if (node.kind === 'chapterOutcome') {
        const meta = (story.chapterOutcomes || {})[node.outcomeId];
        if (!meta) errors.push(`章末结果缺少 story.chapterOutcomes 条目: ${id} -> ${node.outcomeId}`);
        else if (!meta.continueHint) warnings.push(`章末结果缺少"从哪里继续"的说明: ${node.outcomeId}`);
        if (node.continuesTo && !chapterById.has(node.continuesTo)) {
          errors.push(`章末结果指向不存在的下一章: ${id} -> ${node.continuesTo}`);
        }
        const declaredNext = (meta && meta.continuesTo) || node.continuesTo || null;
        if (declaredNext) {
          const nextChapter = chapterById.get(declaredNext);
          if (!nextChapter) errors.push(`章末结果指向不存在的下一章: ${id} -> ${declaredNext}`);
          else if (!nextChapter.present) warnings.push(`章末结果指向尚未写出的下一章: ${node.outcomeId} -> ${declaredNext}（运行时停在章末边界）`);
          else if (!nextChapter.entry || !nodes[nextChapter.entry]) errors.push(`下一章入口节点缺失: ${declaredNext} -> ${nextChapter.entry}`);
        }
      } else {
        const meta = (story.finalEndings || {})[node.outcomeId];
        if (!meta) errors.push(`终章结局缺少 story.finalEndings 条目: ${id} -> ${node.outcomeId}`);
        else {
          const closure = meta.closure || node.closure;
          if (!closure || !closure.mechanism || !closure.ship || !Array.isArray(closure.companions) || !closure.protagonist) {
            errors.push(`终章结局缺少 closure（机制 / 船 / 四名同伴 / 主角位置）: ${id}`);
          }
        }
      }
    } else if (!node.next && !(Array.isArray(node.nextIf) && node.nextIf.length)) {
      errors.push(`非结局节点必须有 next 或 nextIf: ${id}`);
    }

    for (const target of collectTargets(node)) {
      if (!nodes[target]) errors.push(`指向不存在的节点: ${id} -> ${target}`);
    }
  }

  for (const outcomeId of Object.keys(story.chapterOutcomes || {})) {
    const meta = story.chapterOutcomes[outcomeId];
    if (!meta.title || !meta.summary) errors.push(`章末结果说明不完整: ${outcomeId}`);
    if (!meta.continuesTo) warnings.push(`章末结果没有声明从哪里继续: ${outcomeId}`);
  }
  for (const endingId of Object.keys(story.finalEndings || {})) {
    const meta = story.finalEndings[endingId];
    if (!meta.title || !meta.summary) errors.push(`结局说明不完整: ${endingId}`);
  }

  const reachable = new Set();
  // 章末继续点也算一条真正的边：已经写好的章节入口从起点或上一章的章末结果可达。
  // （缺章的 continuesTo 不会凭空造出节点——它的入口节点本来就存在才会被推进队列。）
  const queue = [
    story.startId,
    ...chapters.filter((chapter) => chapter.present && chapter.entry).map((chapter) => chapter.entry)
  ];
  while (queue.length) {
    const current = queue.shift();
    if (!nodes[current] || reachable.has(current)) continue;
    reachable.add(current);
    for (const target of collectTargets(nodes[current])) queue.push(target);
    const node = nodes[current];
    if (node.kind === 'chapterOutcome') {
      const meta = (story.chapterOutcomes || {})[node.outcomeId] || null;
      const declared = (meta && meta.continuesTo) || node.continuesTo || null;
      const nextChapter = declared ? chapterById.get(declared) : null;
      if (nextChapter && nextChapter.present && nextChapter.entry) queue.push(nextChapter.entry);
    }
  }
  for (const id of ids) {
    if (!reachable.has(id)) warnings.push(`节点不可达: ${id}`);
  }
  if (endingNodes === 0) errors.push('没有结局节点');
  for (const id of endingIds) {
    if (!reachable.has(id)) errors.push(`结局不可达: ${id}`);
  }

  // 旗标闭环：任何 requires 引用的旗标，都必须在某处被设置
  const setFlags = new Set(story.runtimeProducedFlags||[]);
  const requiredFlags = new Set();
  const collectFlags = (effects) => {
    for (const effect of effects || []) {
      if (effect && effect.type === 'flag' && typeof effect.key === 'string') setFlags.add(effect.key);
    }
  };
  const collectRequires = (requires) => {
    for (const key of Array.isArray(requires) ? requires : []) requiredFlags.add(key);
  };
  for (const id of ids) {
    const node = nodes[id];
    collectFlags(node.onEnter);
    for (const rule of Array.isArray(node.sceneIf) ? node.sceneIf : []) {
      collectRequires(rule?.requires);
      collectRequires(rule?.forbids);
    }
    for (const rule of Array.isArray(node.onEnterIf) ? node.onEnterIf : []) {
      collectFlags(rule.effects);
      collectRequires(rule.requires);
      collectRequires(rule.forbids);
    }
    for (const choice of node.choices || []) {
      collectFlags(choice.effects);
      collectRequires(choice.requires);
    }
    for (const rule of node.nextIf || []) collectRequires(rule.requires);
    for (const variant of node.variants || []) collectRequires(variant.requires);
  }
  for (const owner of [...Object.values(story.characters || {}), ...Object.values(story.factions || {})]) {
    for (const secret of owner.secrets || []) collectRequires(secret.requires);
  }
  const plannedFlags = new Map(
    (Array.isArray(story.plannedFlags) ? story.plannedFlags : []).map((entry) => [entry.key, entry.setBy])
  );
  for (const key of requiredFlags) {
    if (setFlags.has(key)) continue;
    if (plannedFlags.has(key)) {
      warnings.push(`旗标由后续章节设置: ${key}（${plannedFlags.get(key)}）`);
      continue;
    }
    errors.push(`条件引用了永远不会被设置的旗标: ${key}`);
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    stats: {
      nodes: ids.length,
      dialogueNodes,
      choiceNodes,
      endingNodes,
      chapterOutcomeNodes,
      finalEndingNodes: endingNodes - chapterOutcomeNodes,
      chapters: chapters.filter((chapter) => chapter.present).length,
      reachable: reachable.size,
      routeNodes
    }
  };
}

/**
 * 走查所有可玩路径（宿主核查用）：按真实状态推进，因此条件选项与 nextIf 都按实际规则展开。
 * 组合数可能很大，所以用 maxPaths / maxStates 设上限，并始终统计每个终点的命中次数。
 */
export function listTerminalPaths(story = DEFAULT_STORY, options = {}) {
  const maxPaths = options.maxPaths || 40;
  const maxStates = options.maxStates || 12000;
  const paths = [];
  const endings = {};
  let exploredStates = 0;
  let truncated = false;
  let stuck = 0;

  const walk = (state) => {
    if (truncated) return;
    exploredStates += 1;
    if (exploredStates > maxStates) {
      truncated = true;
      return;
    }
    if (isEnded(state)) {
      endings[state.nodeId] = (endings[state.nodeId] || 0) + 1;
      if (paths.length < maxPaths) {
        paths.push({ endingNodeId: state.nodeId, trail: state.history.map((entry) => entry.nodeId) });
      }
      return;
    }
    if (isAwaitingChoice(state)) {
      const choices = getChoiceList(state, story);
      if (choices.length === 0) {
        stuck += 1;
        return;
      }
      for (const choice of choices) walk(choose(state, choice.id, story));
      return;
    }
    walk(advance(state, story));
  };

  walk(createState({ story }));
  return { paths, endings, exploredStates, truncated, stuck };
}

export default {
  ENGINE_VERSION,
  STATE_SCHEMA,
  UNKNOWN_PORTRAIT_LABEL,
  EXPRESSION_VALUES,
  TONE_VALUES,
  NODE_KINDS,
  createState,
  getNode,
  getStory,
  advance,
  choose,
  applyEffects,
  getChoiceList,
  getBlockedChoiceCount,
  getNodeText,
  resolveNext,
  meetsRequirements,
  isEnded,
  isAwaitingChoice,
  getEchoes,
  getSecrets,
  getEnding,
  getContinuation,
  continueChapter,
  getChapterInfo,
  getNodeChapter,
  getSceneInfo,
  resolveSceneArtFile,
  getPortraitFile,
  auditCampaign,
  getBondLabel,
  getStandingLabel,
  getBondSummary,
  getStandingSummary,
  previewRouteLeaning,
  getBacklog,
  getCharacterPresentation,
  getSpeakerInfo,
  resolvePortraitState,
  formatText,
  sanitizeCallsign,
  serialize,
  deserialize,
  validateStory,
  listTerminalPaths
};
