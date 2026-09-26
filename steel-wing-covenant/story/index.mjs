// 钢翼盟约 — 故事数据聚合器
//
// 把固定目录（catalog）/ 世界（world）/ 角色（characters）/ 场景登记（scenes）与
// 真正写好的章节模块（chapters/chNN.mjs）合并成一个 STORY 对象。
// 只有 manifest.mjs 里状态不是 'not-authored' 的章节才会被加载——缺章节不会产生
// 404、空壳或断链；运行时会照常渲染已经写好的内容。
//
// 本文件不做任何 DOM/存储/网络访问（纯数据聚合，宿主与测试都可以直接 import）。

import {
  STORY_ID,
  STORY_VERSION,
  STORY_SCHEMA,
  STORY_TITLE,
  START_NODE_ID,
  FINALE_CHAPTER_ID,
  CAMPAIGN_TARGETS,
  CHAPTER_CATALOG,
  FUTURE_FLAGS,
  getChapterMeta
} from './catalog.mjs';
import { CHARACTERS, COMPANION_IDS, OPPONENT_IDS, NPC_IDS } from './characters.mjs';
import { CHARACTER_STATUS_RULES } from './character-status.mjs';
import { ENTITIES, FACTIONS, ECHOES, WORLD_FACTS, ANTAGONISTS } from './world.mjs';
import { SCENES, SCENE_IDS, MASTER_REFERENCES } from './scenes.mjs';
import { PRESENTATION_DATA } from './presentation-data.mjs';
import { STORY_REVISIONS } from './revisions-v6/index.mjs';
import { STORY_REVISIONS_V7 } from './revisions-v7/index.mjs';
import { STORY_REVISIONS_V8 } from './revisions-v8/index.mjs';
import { applyReviewedFixesV8, KNOWLEDGE_REVEALS_V8 } from './revisions-v8/reviewed-fixes.mjs';
import { reviseChapters } from './revision-runtime.mjs';
import { applySceneCutsV7 } from './scene-cuts-v7.mjs';
import {
  CHAPTER_MODULES,
  CHAPTER_READINESS,
  READY_CHAPTER_IDS
} from './chapters/manifest.mjs';

const loadedChapters = [];
const loadFailures = [];
for (const id of READY_CHAPTER_IDS) {
  const load = CHAPTER_MODULES[id];
  if (typeof load !== 'function') {
    loadFailures.push({ id, reason: 'manifest-loaders-missing' });
    continue;
  }
  try {
    const module = await load();
    if (!module || !module.CHAPTER) {
      loadFailures.push({ id, reason: 'chapter-export-missing' });
      continue;
    }
    loadedChapters.push(module.CHAPTER);
  } catch (error) {
    loadFailures.push({ id, reason: String((error && error.message) || error) });
  }
}

const previousRevision = reviseChapters(loadedChapters, STORY_REVISIONS);
const v7Revision = applySceneCutsV7(reviseChapters(previousRevision.chapters, STORY_REVISIONS_V7));
// V8 只改文字，必须排在镜头切分之后：切分会拆出 c1_v7_* 等新节点并截断源节点正文，
// 润色的目标 id 与文本要以切分产物为准，否则锚点会被改写导致切分静默失效。
const currentRevision = applyReviewedFixesV8(reviseChapters(v7Revision.chapters, STORY_REVISIONS_V8));
const revised = { ...currentRevision,
  issues:[...previousRevision.issues,...v7Revision.issues,...currentRevision.issues],
  directions:{...previousRevision.directions,...v7Revision.directions,...currentRevision.directions}
};
const buildIssues = [...revised.issues];
for (const failure of loadFailures) {
  buildIssues.push(`章节模块加载失败 ${failure.id}: ${failure.reason}`);
}

const nodes = {};
const chapterOutcomes = {};
const finalEndings = {};
const chapterRecords = [];

for (const chapter of revised.chapters) {
  const catalogEntry = getChapterMeta(chapter.id);
  if (!catalogEntry) buildIssues.push(`章节不在目录里: ${chapter.id}`);
  if (catalogEntry && catalogEntry.nodeIdPrefix && chapter.nodeIdPrefix && catalogEntry.nodeIdPrefix !== chapter.nodeIdPrefix) {
    buildIssues.push(`章节 id 前缀与目录不一致: ${chapter.id} (${chapter.nodeIdPrefix} vs ${catalogEntry.nodeIdPrefix})`);
  }
  if (chapter.entry && !chapter.nodes[chapter.entry]) {
    buildIssues.push(`章节入口节点不存在: ${chapter.id} -> ${chapter.entry}`);
  }

  for (const [id, node] of Object.entries(chapter.nodes || {})) {
    if (nodes[id]) buildIssues.push(`节点 id 跨章节重复: ${id}`);
    if (node.id !== id) buildIssues.push(`节点 id 与键不一致: ${id} -> ${node.id}`);
    nodes[id] = node;
  }

  for (const [outcomeId, meta] of Object.entries(chapter.outcomes || {})) {
    if (chapterOutcomes[outcomeId]) buildIssues.push(`章末结果 id 重复: ${outcomeId}`);
    chapterOutcomes[outcomeId] = { id: outcomeId, chapter: chapter.id, ...meta };
  }
  for (const [endingId, meta] of Object.entries(chapter.endings || {})) {
    if (finalEndings[endingId] || chapterOutcomes[endingId]) buildIssues.push(`终章结局 id 重复: ${endingId}`);
    finalEndings[endingId] = { id: endingId, chapter: chapter.id, classification:'ordinary', ...meta };
  }

  const outcomeNodeIds = Array.isArray(chapter.outcomeNodeIds) ? [...chapter.outcomeNodeIds] : [];
  for (const nodeId of outcomeNodeIds) {
    if (!chapter.nodes[nodeId]) buildIssues.push(`章末结果节点缺失: ${chapter.id} -> ${nodeId}`);
  }

  chapterRecords.push({
    id: chapter.id,
    number: chapter.number,
    title: chapter.title,
    badge: chapter.badge || '',
    nodeIdPrefix: chapter.nodeIdPrefix,
    entry: chapter.entry,
    nextChapter: chapter.nextChapter || (catalogEntry ? catalogEntry.nextChapter : null),
    status: chapter.status || CHAPTER_READINESS[chapter.id] || 'draft',
    present: true,
    nodeCount: Object.keys(chapter.nodes || {}).length,
    decisionCount: Array.isArray(chapter.decisions) ? chapter.decisions.length : 0,
    scenes: Array.isArray(chapter.scenes) ? [...chapter.scenes] : [],
    outcomeNodeIds,
    contentTarget: chapter.contentTarget || (catalogEntry ? catalogEntry.contentTarget : null),
    // Preserve historical path measurements separately from the revised corpus.
    baselineContentActual: chapter.contentActual || catalogEntry?.contentActual || null,
    contentActual: {
      nodes:Object.keys(chapter.nodes).length,
      choices:Object.values(chapter.nodes).filter(n=>n.choices).length,
      choiceOptions:Object.values(chapter.nodes).reduce((sum,n)=>sum+(n.choices?.length||0),0),
      endings:Object.values(chapter.nodes).filter(n=>n.kind==='ending').length,
      corpusCjk:Object.values(chapter.nodes).reduce((sum,n)=>sum+[n.text,...(n.variants||[]).map(v=>v.text),...(n.choices||[]).flatMap(c=>[c.label,c.reaction])]
        .reduce((count,text)=>count+(String(text||'').match(/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/g)||[]).length,0),0),
      method:'当前修订节点及语料的静态计数，含互斥分支；不表示单线篇幅或游玩时长。'
    },
    startSituation: catalogEntry ? catalogEntry.startSituation : null,
    endSituation: catalogEntry ? catalogEntry.endSituation : null
  });
}

for (const catalogEntry of CHAPTER_CATALOG) {
  if (chapterRecords.some((chapter) => chapter.id === catalogEntry.id)) continue;
  chapterRecords.push({
    id: catalogEntry.id,
    number: catalogEntry.number,
    title: catalogEntry.title,
    badge: catalogEntry.badge || '',
    nodeIdPrefix: catalogEntry.nodeIdPrefix,
    entry: catalogEntry.entry,
    nextChapter: catalogEntry.nextChapter,
    status: CHAPTER_READINESS[catalogEntry.id] || 'not-authored',
    present: false,
    nodeCount: 0,
    decisionCount: 0,
    scenes: [...catalogEntry.scenes],
    outcomeNodeIds: [...catalogEntry.outcomeNodeIds],
    contentTarget: catalogEntry.contentTarget,
    contentActual: null,
    startSituation: catalogEntry.startSituation,
    endSituation: catalogEntry.endSituation
  });
}
chapterRecords.sort((a, b) => a.number - b.number);

// 第一章的节点顺序：用于回放与宿主核查，不影响跳转（跨章推进以章末继续点为准）
const firstChapterModule = revised.chapters.find((chapter) => chapter.number === 1);
const linearOrder = Array.isArray(firstChapterModule && firstChapterModule.linearOrder)
  ? [...firstChapterModule.linearOrder]
  : Object.keys(nodes);

const terminalNodeIds = chapterRecords
  .filter((chapter) => chapter.present)
  .flatMap((chapter) => chapter.outcomeNodeIds)
  .filter((id) => Boolean(nodes[id]));

const presentChapters = chapterRecords.filter((chapter) => chapter.present);
const pendingChapters = chapterRecords.filter((chapter) => !chapter.present);
const isFinalePresent = presentChapters.some((chapter) => chapter.id === FINALE_CHAPTER_ID);
const allComplete = pendingChapters.length === 0
  && presentChapters.every((chapter) => chapter.status === 'complete');

export const CAMPAIGN_READINESS = {
  mode: allComplete ? 'full-campaign' : 'chapter-preview',
  fullCampaignReady: allComplete,
  finalePresent: isFinalePresent,
  finalEndingsAvailable: Object.keys(finalEndings).length > 0,
  chaptersPresent: presentChapters.map((chapter) => chapter.id),
  chaptersPending: pendingChapters.map((chapter) => chapter.id),
  chaptersNotComplete: presentChapters.filter((chapter) => chapter.status !== 'complete').map((chapter) => chapter.id),
  campaignTargets: CAMPAIGN_TARGETS
};

const firstCatalog = CHAPTER_CATALOG[0];

export const STORY = {
  id: STORY_ID,
  knowledgeReveals: KNOWLEDGE_REVEALS_V8,
  bridgeAccounting: true,
  runtimeProducedFlags:['ev6_ledger_version','ev6_w9_needs_legacy_prepare'],
  schemaVersion: STORY_SCHEMA,
  storyVersion: STORY_VERSION,
  slice: allComplete ? 'full-campaign' : `chapter-preview-${CAMPAIGN_READINESS.chaptersPresent.join('+') || 'none'}`,
  title: {
    zh: STORY_TITLE.zh,
    en: STORY_TITLE.en,
    tagline: STORY_TITLE.tagline,
    subtitle: firstCatalog ? firstCatalog.title : ''
  },
  chapter: {
    title: firstCatalog ? firstCatalog.title : '',
    badge: firstCatalog ? firstCatalog.badge : '',
    note: '八章与终章连成九章旅程。你在途中做过的选择，会影响谁愿意伸手、哪些损失必须偿还，以及同行者最后的去处。终章有八条普通结局路线、一条需要主动发现并完成的隐藏路线，另保留「服从」结局。各条路线包含各自的行动与尾声；一轮旅程只会抵达其中一个终点。'
  },
  defaultCallsign: '牧星',
  startId: START_NODE_ID,
  // endingIds 保留旧语义：所有"走到这里就停下来结算"的节点 id（当前只有第一章四个章末结果）
  endingIds: terminalNodeIds,
  terminalNodeIds,
  nodes,
  characters: CHARACTERS,
  characterStatusRules: CHARACTER_STATUS_RULES,
  presentation: {...PRESENTATION_DATA, directions: {...PRESENTATION_DATA.directions, ...revised.directions}},
  companionIds: [...COMPANION_IDS],
  opponentIds: [...OPPONENT_IDS],
  npcIds: [...NPC_IDS],
  factions: FACTIONS,
  echoes: ECHOES,
  chapterOutcomes,
  finalEndings,
  endings: { ...chapterOutcomes, ...finalEndings },
  chapters: chapterRecords,
  campaign: {
    targets: CAMPAIGN_TARGETS,
    finaleChapterId: FINALE_CHAPTER_ID,
    readiness: CAMPAIGN_READINESS
  },
  scenes: SCENES,
  sceneIds: [...SCENE_IDS],
  entities: ENTITIES,
  masterReferences: MASTER_REFERENCES,
  worldFacts: WORLD_FACTS,
  antagonists: ANTAGONISTS,
  linearOrder,
  plannedFlags: FUTURE_FLAGS.map((entry) => ({ ...entry })),
  buildIssues,
  nodeCount: Object.keys(nodes).length
};

export const CHAPTERS = chapterRecords;

export default STORY;
