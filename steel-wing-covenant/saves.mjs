// 钢翼盟约 — 存档封包（纯函数，无 DOM、无存储访问）
//
// 存储由界面层负责（浏览器本地存储 API），本模块只做：
//   1) 生成带版本信息的存档封包；
//   2) 严格校验：损坏 / 版本不匹配 / 别的故事 / 节点已不存在，都拒绝加载并给出人话原因；
//   3) 读取旧版会话存档（旧 key 只读导入，绝不删除、绝不覆盖）。
//
// 命名空间与旧 key：
//   - 新存档：'mbvn-campaign:auto' / 'mbvn-campaign:slot1..3'
//   - 旧会话存档：'mbvn-slice-v1'（G0 第一章用会话级浏览器存储写的）——保留原样，
//     只做一次性导入尝试；导入失败也不动它。

export const SAVE_SCHEMA_VERSION = 1;
export const CAMPAIGN_NAMESPACE = 'mbvn-campaign';
export const SLOT_IDS = ['auto', 'slot1', 'slot2', 'slot3'];
export const SLOT_LABELS = {
  auto: '自动存档',
  slot1: '存档一',
  slot2: '存档二',
  slot3: '存档三'
};
export const MANUAL_SLOT_IDS = ['slot1', 'slot2', 'slot3'];
export const LEGACY_SESSION_KEY = 'mbvn-slice-v1';

export function saveKey(slotId) {
  return `${CAMPAIGN_NAMESPACE}:${slotId}`;
}

export function isManualSlot(slotId) {
  return MANUAL_SLOT_IDS.includes(slotId);
}

const isPlainObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const engineMajor = (version) => String(version || '').split('.')[0];

/**
 * 生成存档封包。
 * state 参数是引擎状态（不是字符串）；封包内保存 engine.serialize(state) 的结果。
 */
export function buildEnvelope({ state, slotId, story, engineVersion, serializeState, savedAt, screen, readingPosition }) {
  if (!state || !story || typeof serializeState !== 'function') {
    throw new Error('buildEnvelope 需要 state / story / serializeState');
  }
  const node = story.nodes[state.nodeId] || null;
  const chapter = (story.chapters || []).find((entry) => entry.id === (node && node.chapter)) || null;
  return JSON.stringify({
    saveSchemaVersion: SAVE_SCHEMA_VERSION,
    storyId: story.id,
    storyVersion: story.storyVersion || null,
    engineVersion: engineVersion || null,
    slotId,
    savedAt: typeof savedAt === 'number' ? savedAt : null,
    screen: screen === 'title' ? 'title' : 'game',
    callsign: state.callsign,
    chapterId: chapter ? chapter.id : null,
    chapterTitle: chapter ? chapter.title : null,
    nodeId: state.nodeId,
    ended: Boolean(state.ended),
    trust: { ...(state.trust || {}) },
    standing: { ...(state.standing || {}) },
    readingPosition: readingPosition && readingPosition.nodeId === state.nodeId
      && ['body', 'reaction'].includes(readingPosition.kind)
      && Number.isSafeInteger(readingPosition.offset) && readingPosition.offset >= 0
      ? { nodeId: state.nodeId, kind: readingPosition.kind, offset: readingPosition.offset } : null,
    state: serializeState(state)
  });
}

/**
 * 严格校验一个存档封包。
 * 返回 { ok:true, envelope } 或 { ok:false, reason, message }。
 * reason ∈ empty | corrupt | incompatible-save | different-story | incompatible-story | incompatible-engine | stale-node
 */
export function parseEnvelope(raw, { story, engineVersion, deserializeState } = {}) {
  if (typeof raw !== 'string' || raw.trim() === '') {
    return { ok: false, reason: 'empty', message: '这个槽位是空的。' };
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    return { ok: false, reason: 'corrupt', message: '存档内容不完整（不是有效的 JSON），无法读取。原档保留在本地存储里。' };
  }
  if (!isPlainObject(parsed)) {
    return { ok: false, reason: 'corrupt', message: '存档结构不正确，无法读取。原档保留在本地存储里。' };
  }
  if (parsed.saveSchemaVersion !== SAVE_SCHEMA_VERSION) {
    return {
      ok: false,
      reason: 'incompatible-save',
      message: `存档格式版本是 ${String(parsed.saveSchemaVersion)}，本版本只认 ${SAVE_SCHEMA_VERSION}。没有可用的迁移，原档保留。`
    };
  }
  if (!story || parsed.storyId !== story.id) {
    return { ok: false, reason: 'different-story', message: '这不是《钢翼盟约》这一条故事的存档。' };
  }
  if (story.storyVersion && parsed.storyVersion !== story.storyVersion) {
    return {
      ok: false,
      reason: 'incompatible-story',
      message: `存档来自剧情数据 ${String(parsed.storyVersion)}，当前是 ${story.storyVersion}。没有可用的迁移，原档保留。`
    };
  }
  if (engineVersion && engineMajor(parsed.engineVersion) !== engineMajor(engineVersion)) {
    return {
      ok: false,
      reason: 'incompatible-engine',
      message: `存档来自引擎 ${String(parsed.engineVersion)}，当前引擎是 ${engineVersion}，跨大版本不加载。原档保留。`
    };
  }
  if (typeof parsed.state !== 'string') {
    return { ok: false, reason: 'corrupt', message: '存档缺少可恢复的状态数据，无法读取。原档保留。' };
  }
  if (typeof parsed.nodeId !== 'string' || !story.nodes[parsed.nodeId]) {
    return {
      ok: false,
      reason: 'stale-node',
      message: '存档停在一个当前章节数据里不存在的节点上，无法恢复。原档保留。'
    };
  }
  const state = typeof deserializeState === 'function' ? deserializeState(parsed.state, story) : null;
  if (!state) {
    return { ok: false, reason: 'corrupt', message: '存档里的状态字段不完整，无法恢复。原档保留。' };
  }
  return { ok: true, envelope: { ...parsed, state } };
}

/**
 * 旧版会话存档导入（只读）：
 * 旧结构是 { screen, state }，state 是引擎 serialize 出来的字符串。
 * 成功返回和 parseEnvelope 一样的 envelope（legacy:true）；失败给出人话原因，绝不修改旧 key。
 */
export function importLegacy(raw, { story, engineVersion, deserializeState } = {}) {
  if (typeof raw !== 'string' || raw.trim() === '') {
    return { ok: false, reason: 'empty', message: '没有找到旧版进度。' };
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    return {
      ok: false,
      reason: 'corrupt',
      message: '检测到旧版第一章进度，但内容已经损坏，无法导入。旧存档没有被删除。'
    };
  }
  if (!isPlainObject(parsed) || typeof parsed.state !== 'string') {
    return {
      ok: false,
      reason: 'corrupt',
      message: '检测到旧版第一章进度，但结构不是预期格式，无法导入。旧存档没有被删除。'
    };
  }
  let inner;
  try {
    inner = JSON.parse(parsed.state);
  } catch (error) {
    return {
      ok: false,
      reason: 'corrupt',
      message: '检测到旧版第一章进度，但里面的状态已损坏，无法导入。旧存档没有被删除。'
    };
  }
  if (!isPlainObject(inner) || inner.storyId !== story.id || !story.nodes[inner.nodeId]) {
    return {
      ok: false,
      reason: 'stale-node',
      message: '检测到旧版第一章进度，但它停在当前章节数据里不存在的节点上，无法导入。旧存档没有被删除。'
    };
  }
  const state = typeof deserializeState === 'function' ? deserializeState(parsed.state, story) : null;
  if (!state) {
    return {
      ok: false,
      reason: 'corrupt',
      message: '检测到旧版第一章进度，但状态字段不完整，无法导入。旧存档没有被删除。'
    };
  }
  return {
    ok: true,
    envelope: {
      saveSchemaVersion: SAVE_SCHEMA_VERSION,
      storyId: story.id,
      storyVersion: story.storyVersion || null,
      engineVersion: engineVersion || null,
      slotId: 'legacy',
      savedAt: null,
      screen: parsed.screen === 'game' ? 'game' : 'title',
      callsign: state.callsign,
      chapterId: null,
      chapterTitle: null,
      nodeId: state.nodeId,
      ended: Boolean(state.ended),
      legacy: true,
      state
    }
  };
}

/** 标题画面 / 存档清单用的人话摘要 */
export function describeEnvelope(envelope, story, options = {}) {
  if (!envelope) return null;
  const position = envelope.readingPosition;
  const positioned = position?.nodeId === envelope.nodeId
    && ['body', 'reaction'].includes(position.kind)
    && Number.isSafeInteger(position.offset) && position.offset >= 0;
  // Saves from before paging reopen at the start of the pending feedback.
  const reaction = Boolean(envelope.state?.lastReaction)
    && (!positioned || position.kind === 'reaction');
  const history = envelope.state && envelope.state.history;
  const previous = reaction && Array.isArray(history) ? history[history.length - 2] : null;
  const source = previous && story?.nodes?.[previous.nodeId];
  const node = source?.choices?.length ? source : story?.nodes?.[envelope.nodeId];
  const ended = Boolean(envelope.ended) && !reaction;
  const chapter = (story && story.chapters ? story.chapters : []).find(
    (entry) => entry.id === (reaction ? node?.chapter : envelope.chapterId || node?.chapter)
  ) || null;
  const savedAt = typeof envelope.savedAt === 'number' ? envelope.savedAt : null;
  const format = typeof options.formatTimestamp === 'function' ? options.formatTimestamp : () => null;
  return {
    slotId: envelope.slotId,
    label: SLOT_LABELS[envelope.slotId] || '存档',
    legacy: Boolean(envelope.legacy),
    callsign: envelope.callsign || (envelope.state && envelope.state.callsign) || '',
    chapterId: chapter ? chapter.id : null,
    chapterTitle: chapter ? chapter.title : (envelope.chapterTitle || ''),
    nodeId: envelope.nodeId || null,
    ended,
    savedAt,
    savedAtText: savedAt ? format(savedAt) : null,
    summaryLine: chapter
      ? `${chapter.title}${ended ? ' · 章末结果' : ''}`
      : ended
        ? '已在章末结果'
        : '进行中'
  };
}

export default {
  SAVE_SCHEMA_VERSION,
  CAMPAIGN_NAMESPACE,
  SLOT_IDS,
  SLOT_LABELS,
  MANUAL_SLOT_IDS,
  LEGACY_SESSION_KEY,
  saveKey,
  isManualSlot,
  buildEnvelope,
  parseEnvelope,
  importLegacy,
  describeEnvelope
};
