// 钢翼盟约 — 故事目录（固定事实：id / 章节身份 / 节点 id 约定 / 体量目标）
//
// 这里是"不会随某一章写作而变化"的部分：故事 id、版本、九个章节的 id 与标题、
// 节点 id 前缀、入口/出口约定、场景名单与体量目标。每一章的**正文**只写在
// dist/story/chapters/chNN.mjs 里；本文件不放任何剧情节点。
//
// 章节契约（完整版见仓库根目录 CHAPTER_MODULE_CONTRACT.md）：
//   - 章节 id：ch01 … ch08 为八章，ch09 为终章。
//   - 节点 id 前缀：ch01 → c1_，ch02 → c2_，… ch08 → c8_，终章 → fx_。
//   - 起始节点：第 N 章为 c<N>_01（终章为 fx_01）。
//   - 章末结果节点 kind='chapterOutcome'，id 约定 out_ch<N>_<route>（第一章保留四个旧 id：
//     ending_concord / ending_scarlet / ending_spire / ending_standing_alone，旧存档不改名）。
//   - 终章结局节点 kind='ending'，id 约定 ending_<name>_final，必须带 closure 字段
//     （机制结果 / 船与同伴落点 / 主角位置），不得用"下一章见"收尾。

export const STORY_ID = 'mecha-bonds-vn';
/** 故事数据版本：章节模块、节点 id 与旗标契约变化时递增（存档会比对这一项） */
/**
 * G20：第九章全部接入、终章结局与跨章状态修复（第八章一次性写入授权的消耗、
 * 第九章薇拉信任门槛、民用立绘状态）都落进数据之后，故事版本从 g1-1 升到 g2-1。
 * 旧版本存档不会被静默迁移：saves.mjs 会拒绝加载并保留原档（见 parseEnvelope 的
 * incompatible-story 分支）。
 */
export const STORY_VERSION = 'g2-1';
export const STORY_SCHEMA = 1;

export const STORY_TITLE = {
  zh: '钢翼盟约',
  en: 'STEEL-WING COVENANT',
  tagline: '三条航线，一艘船，你只有一个呼号。'
};

export const START_NODE_ID = 'c1_01';
export const FINALE_CHAPTER_ID = 'ch09';

/**
 * 体量目标（与"实际写出多少"严格分开记录）。
 * 用户口径：八章 + 终章；一条完整主干路径 ≥ 110,000–120,000 中文可读字符；
 * 每章主干路径约 13,000–14,000 字；全书约 1,800–2,200 个对话/叙事节点。
 * 时长目标只在 FULL_GAME_PLAN.json 的 targets.durationHours 里记录（实测通读之前不对外标注，
 * 也不在玩家界面上宣传）。
 * 这些是**目标**；每一章自己的实际计数写在 FULL_GAME_PLAN.json 的 contentActual 与
 * dist/story/chapters/chNN.mjs 的 contentActual 里，未写出的章节 contentActual: null。
 */
export const CAMPAIGN_TARGETS = {
  chapters: 9,
  mainPathCjkPerChapter: { min: 13000, max: 15000 },
  /** 用户口径：全书一条正常主干路径 ≥ 120,000 中文可读正文字符（不把互斥分支相加）。 */
  mainPathCjkTotal: { min: 120000, note: '实测值见 tests/measure-content.mjs 的 fullCampaign 报告与 FULL_GAME_READY.json。' },
  nodesTotal: { min: 1800, max: 4000 },
  endings: { ordinary: 8, hidden: 1, additionalCost: 1 },
  durationHours: {
    min: 5,
    note: '对外标注时长必须先做真实计时通读。不得用节点数或字数换算成"实测时长"；按字数折算只能写成估算。'
  },
  countingMethod: '中文可读字符 = 一条完整主干路径上真正显示过的文本里的 CJK 表意文字（/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/），不含标点、空白、数字与拉丁字母；不把互斥分支相加。正文口径（body）只数节点文本与命中的变体，不含选项文案与选项反应；两者分开报告。'
};

/**
 * 九个章节的固定身份。status 是"这一章真实写到哪一步"，不是愿望：
 *   not-authored     还没有这个模块文件（运行时不加载，也不会去请求它）
 *   playable         模块存在且可玩到章末结果
 *   complete         模块存在、体量达标、并按终章前置条件验收过
 */
export const CHAPTER_CATALOG = [
  {
    number: 1,
    id: 'ch01',
    nodeIdPrefix: 'c1_',
    title: '第一章 · 霜环锚地',
    badge: '第一章 · 完整',
    entry: 'c1_01',
    status: 'playable',
    startSituation: '预备机师登上渡鸦号，雾环锚地警报响起，XR-07 被卷进战场。',
    endSituation: 'XR-07 有了四种处置结果；薇拉报到；下一章从对应的继续点进入死航线。',
    nextChapter: 'ch02',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['ending_concord', 'ending_scarlet', 'ending_spire', 'ending_standing_alone'],
    scenes: ['hangar', 'battle', 'hold', 'medbay', 'workshop', 'messhall', 'ship_rail'],
    decisionCount: 9,
    contentTarget: { mainPathCjk: 13000 },
    // 以引擎口径（tests/measure-content.mjs 的逐章走查）为准；章节模块自带的 ch01-selfcheck.mjs
    // 给出 14289，两套遍历实现在少量边界（选项反应 / 终点节点）上计入不同，差 26 个 CJK。
    contentActual: {
      mainPathCjk: 14315,
      corpusCjk: 20538,
      nodes: 314,
      decisions: 9,
      measuredAt: '2026-09-12',
      method: 'tests/measure-content.mjs：从 c1_01 按引擎真实推进、每个选择取第一个可用项走到 ending_concord，统计路径上真正显示过的文本（节点文本 / 命中的变体 + 选项文案 + 选项反应）；语料总量为本章全部节点文本、变体、选项文案与反应之和。'
    }
  },
  {
    number: 2,
    id: 'ch02',
    nodeIdPrefix: 'c2_',
    title: '第二章 · 死航线',
    badge: '第二章',
    entry: 'c2_01',
    status: 'playable',
    startSituation: '锚点成片失效，渡鸦号必须走一条没有路标的死航线；安全处的检查还没有结束。',
    endSituation: '死航线穿越成功或失败；薇拉第一次违令；真正的薇拉·厄兰的死亡记录被铎兰翻出来。',
    nextChapter: 'ch03',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['out_ch2_concord', 'out_ch2_scarlet', 'out_ch2_spire', 'out_ch2_neutral'],
    scenes: ['ship_rail', 'bridge', 'quarters', 'medbay', 'commandroom', 'hangar', 'battle', 'orbit'],
    decisionCount: 6,
    contentTarget: { mainPathCjk: 14000 },
    contentActual: {
      mainPathCjk: 14998,
      corpusCjk: 19735,
      nodes: 302,
      choices: 6,
      choiceOptions: 19,
      measuredAt: '2026-09-12',
      method: 'tests/measure-content.mjs：从 c2_01 按引擎真实推进、每个选择取第一个可用项走到 out_ch2_concord，统计路径上真正显示过的文本；语料总量为本章全部节点文本、变体、选项文案与反应之和。章节自检 drafts/ch02-selfcheck.mjs 枚举全部 972 条组合，主路径同为 14998 CJK。'
    }
  },
  {
    number: 3,
    id: 'ch03',
    nodeIdPrefix: 'c3_',
    title: '第三章 · 沧澜',
    badge: '第三章',
    entry: 'c3_01',
    status: 'playable',
    startSituation: '渡鸦号带着半条死航线的数据接近唯一有人居住的行星沧澜，等待指令。',
    endSituation: '薇拉的档案身份被坐实是死人的名字；她第一次说「我不想」；三方开始同时要人。',
    nextChapter: 'ch04',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['out_ch3_concord', 'out_ch3_scarlet', 'out_ch3_spire', 'out_ch3_neutral'],
    scenes: ['orbit', 'planet_approach', 'city', 'coast', 'surface', 'landbattle', 'seabattle', 'hangar', 'medbay', 'ship_rail', 'quarters', 'bridge'],
    decisionCount: 8,
    contentTarget: { mainPathCjk: 14000 },
    // 引擎口径（tests/measure-content.mjs：从 c3_01 走，每个选择取第一个可用项）主路径 17,054、
    // 语料 22,863。章节自带的 ch03-selfcheck.mjs 走 64 条有界走法，给出 15,626–17,263，
    // 两套口径都如实保留；交付与测试以引擎口径为准。
    contentActual: {
      mainPathCjk: 17054,
      corpusCjk: 22863,
      nodes: 299,
      decisions: 8,
      measuredAt: '2026-09-12',
      method: 'tests/measure-content.mjs：从 c3_01 按引擎真实推进、每个选择取第一个可用项走到 out_ch3_concord，统计路径上真正显示过的文本；语料总量为本章全部节点文本、变体、选项文案与反应之和。章节自检另有 64 条有界走法（15,626–17,263）。'
    }
  },
  {
    number: 4,
    id: 'ch04',
    nodeIdPrefix: 'c4_',
    title: '第四章 · 校准',
    badge: '第四章',
    entry: 'c4_01',
    status: 'playable',
    startSituation: '渡鸦号回到轨道，被三边同时追踪；维斯特的「校准」进入最后阶段。',
    endSituation: '接口箱被拆开，击杀令当众公开；主角到底念不念复位口令有了确定状态。',
    nextChapter: 'ch05',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['out_ch4_concord', 'out_ch4_scarlet', 'out_ch4_spire', 'out_ch4_neutral'],
    scenes: ['orbit', 'reactor', 'hangar', 'quarters', 'commandroom', 'medbay', 'bridge', 'battle'],
    decisionCount: 5,
    contentTarget: { mainPathCjk: 14000 },
    contentActual: {
      mainPathCjk: 15191,
      corpusCjk: 18927,
      nodes: 183,
      decisions: 5,
      measuredAt: '2026-09-12',
      method: 'tests/measure-content.mjs：从 c4_01 按引擎真实推进、每个选择取第一个可用项走到 out_ch4_concord，统计路径上真正显示过的文本；语料总量为本章全部节点文本、变体、选项文案与反应之和。'
    }
  },
  {
    number: 5,
    id: 'ch05',
    nodeIdPrefix: 'c5_',
    title: '第五章 · 补给线',
    badge: '第五章',
    entry: 'c5_01',
    status: 'playable',
    startSituation: '锚链数据只拿到一半，渡鸦号必须先替外环矿站跑一趟配给，才有资格谈下一步。',
    endSituation: '船员在配给对象上第一次真正分裂；他们遇见另一名「辅机序列」的人，看清拒绝的代价。',
    nextChapter: 'ch06',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['out_ch5_concord', 'out_ch5_scarlet', 'out_ch5_spire', 'out_ch5_neutral'],
    scenes: ['messhall', 'bridge', 'hangar', 'orbit', 'city', 'battle', 'reactor', 'commandroom'],
    decisionCount: 7,
    contentTarget: { mainPathCjk: 14000 },
    // G18 修复后重测：战斗段改成轨道转运拦截、封样一场从住舱换到作战会议室，
    // 引擎口径主路径 15,410、语料 16,880；章节自带的 ch05-selfcheck.mjs 全部 1,296 条组合
    // 实测 15,363–15,447。两套口径都如实记录，交付与测试以引擎口径为准。
    contentActual: {
      mainPathCjk: 15410,
      corpusCjk: 16880,
      nodes: 271,
      decisions: 7,
      measuredAt: '2026-09-12',
      method: 'tests/measure-content.mjs：从 c5_01 按引擎真实推进、每个选择取第一个可用项走到 out_ch5_concord，统计路径上真正显示过的文本；语料总量为本章全部节点文本、变体、选项文案与反应之和。'
    }
  },
  {
    number: 6,
    id: 'ch06',
    nodeIdPrefix: 'c6_',
    title: '第六章 · 静默壁',
    badge: '第六章 · 完整',
    entry: 'c6_01',
    status: 'complete',
    startSituation: '灰塔的校准站是唯一能补齐锚链数据的地方，而它不欢迎任何一边的军舰。',
    endSituation: '维斯特的实验对照组被拿到手；诺瓦必须在公开与沉默之间作一次选择。',
    nextChapter: 'ch07',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['out_ch6_concord', 'out_ch6_scarlet', 'out_ch6_spire', 'out_ch6_neutral'],
    scenes: ['orbit', 'ship_rail', 'bridge', 'commandroom', 'reactor', 'hangar', 'battle'],
    decisionCount: 7,
    contentTarget: { mainPathCjk: 14000, note: 'G23 口径：一条主干路径 ≥14,000 中文可读字符，目标 14,000–15,000。' },
    contentActual: {
      mainPathCjk: 14456,
      corpusCjk: 18918,
      nodes: 311,
      choices: 7,
      choiceOptions: 22,
      measuredAt: '2026-09-12',
      method: 'drafts/ch06-selfcheck.mjs：64 条有界走法（4 组前置状态 × 16 个取项模式）显示口径 14,393–14,551、正文口径 13,883–14,033，四个章末结果各有见证；工程口径（tests/measure-content.mjs）在同一天按同一版字节复测，逐章数值登记在 FULL_GAME_READY.json。'
    }
  },
  {
    number: 7,
    id: 'ch07',
    nodeIdPrefix: 'c7_',
    title: '第七章 · 归港',
    badge: '第七章 · 完整',
    entry: 'c7_01',
    status: 'complete',
    startSituation: '渡鸦号必须回联合港补充与修理，而安全处已经在那里等着归档所有人。',
    endSituation: '基廷的回收条款被摊到桌面上；伊芙娜的编号第一次成为可以交换的东西，而主角拒绝或接受。',
    nextChapter: 'ch08',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['out_ch7_concord', 'out_ch7_scarlet', 'out_ch7_spire', 'out_ch7_neutral'],
    scenes: ['hangar', 'quarters', 'messhall', 'commandroom', 'medbay', 'bridge', 'battle', 'orbit'],
    decisionCount: 6,
    contentTarget: { mainPathCjk: 14000, note: 'G23 口径：一条主干路径 ≥14,000 中文可读字符，目标 14,000–15,000。' },
    contentActual: {
      mainPathCjk: 14517,
      corpusCjk: 19759,
      nodes: 168,
      choices: 6,
      choiceOptions: 19,
      measuredAt: '2026-09-12',
      method: 'drafts/ch07-selfcheck.mjs：64 条有界走法（4 组前置状态 × 16 个取项模式）14,436–14,588，四个章末结果各 16 条、19 个选项全部覆盖；工程口径见 FULL_GAME_READY.json。'
    }
  },
  {
    number: 8,
    id: 'ch08',
    nodeIdPrefix: 'c8_',
    title: '第八章 · 霜环反攻',
    badge: '第八章 · 完整',
    entry: 'c8_01',
    status: 'complete',
    startSituation: '三方舰队在霜环锚地外集结：维斯特要用一次彻底失效换一条干净数据，时间不多了。',
    endSituation: '渡鸦号带着桥与半条命抵达锚地，四名同伴各自的立场落定，终章的前置条件冻结。',
    nextChapter: 'ch09',
    routeIds: ['concord', 'scarlet', 'spire', 'neutral'],
    outcomeNodeIds: ['out_ch8_concord', 'out_ch8_scarlet', 'out_ch8_spire', 'out_ch8_neutral'],
    scenes: ['orbit', 'bridge', 'commandroom', 'reactor', 'battle', 'ship_rail', 'hangar'],
    decisionCount: 7,
    contentTarget: { mainPathCjk: 14000, note: 'G24 口径：一条主干路径 ≥14,000 中文可读字符；芯片被毁路线的现场重做段落会高出 15,000 上沿。' },
    contentActual: {
      mainPathCjk: 14826,
      corpusCjk: 18317,
      nodes: 327,
      choices: 7,
      choiceOptions: 23,
      measuredAt: '2026-09-12',
      method: 'drafts/ch08-selfcheck.mjs：7,766 条离散组合枚举（未触上限）+ 64 条确定性随机路径 + 16 条定向见证路径；四条章末结果在芯片完好 / 被毁两组前置状态下各有见证（完好 14,783–14,877，被毁 15,100–15,194）。工程口径见 FULL_GAME_READY.json。'
    }
  },
  {
    number: 9,
    id: 'ch09',
    nodeIdPrefix: 'fx_',
    title: '终章 · 盟约',
    badge: '终章 · 完整',
    entry: 'fx_01',
    status: 'complete',
    startSituation: '三方舰队在锚地会合，渡鸦号是唯一还能改写锚点的一方。',
    endSituation: '维斯特与锚链、基廷与击杀令、桥与航道归属同时收束；八条普通路线、一条隐藏路线各有行动与尾声，另保留服从结局。',
    nextChapter: null,
    routeIds: ['concord', 'scarlet', 'spire', 'together', 'watch', 'exodus', 'lightship', 'returned', 'common_clock', 'reset'],
    outcomeNodeIds: [
      'ending_concord_final', 'ending_scarlet_final', 'ending_spire_final',
      'ending_together', 'ending_reset', 'ending_watch_final', 'ending_exodus_final',
      'ending_lightship_final', 'ending_returned_final', 'ending_common_clock_hidden'
    ],
    scenes: ['battle', 'bridge', 'commandroom', 'reactor', 'hangar', 'ship_rail', 'messhall', 'orbit', 'planet_approach', 'city', 'coast'],
    decisionCount: 5,
    contentTarget: { mainPathCjk: 14000, note: '普通路线在完整共同主线之后还包含独占行动；单线正文与选项反馈分别计数，互斥分支不相加。' },
    contentActual: {
      mainPathCjk: 14692,
      bodyCjk: 14223,
      choiceReactionCjk: 469,
      corpusCjk: 26511,
      nodes: 302,
      choices: 5,
      choiceOptions: 19,
      endings: 5,
      measuredAt: '2026-09-12',
      method: 'tests/measure-content.mjs（引擎口径）：从 fx_01 按真实规则推进、每个选择取第一个可用项；bodyCjk 只数节点文本与命中的变体，choiceReactionCjk 单列选项文案与反应。drafts/ch09-selfcheck.mjs 的有界遍历给出同一量级的五个结局路径。'
    },
    finalePrerequisites: [
      'out_ch1_* 至少一项成立（第一章四个章末结果之一）',
      'vera_word_used 或 vera_word_refused 二者其一（第四章的复位口令选择）',
      'anchor_key_fragment ≥ 2（第五章与第六章各能拿一段；只有一段时终章必须给出代价分支）',
      'bridge_key_holder 有确定值（谁拿着桥的钥匙）',
      'keating_resolved（击杀令的结局在终章之前或终章之内确定）',
      'crew_split 记录了四名同伴是否仍在船上——缺席者必须在终章给出书面落点'
    ]
  }
];

export const getChapterMeta = (chapterId) =>
  CHAPTER_CATALOG.find((chapter) => chapter.id === chapterId) || null;

/**
 * 后续章节才设置的旗标（跨章契约）。
 * 校验规则：requires 引用一个"既没有被任何节点设置、也没有登记在这里"的旗标 = 错误；
 * 登记在这里但还没写到 = 允许，但会给出"由后续章节设置"的警告。
 * 这样第一章可以安全地引用第三章才揭晓的知识门控（档案面板不会提前泄露）。
 */
export const FUTURE_FLAGS = [
  { key: 'anchor_key_fragment_1', setBy: 'ch02' },
  { key: 'vera_first_disobedience', setBy: 'ch02' },
  { key: 'vera_reset_phrase_seen', setBy: 'ch02' },
  { key: 'vera_knows_fake_id', setBy: 'ch02' },
  { key: 'vera_knows_kill_order_hint', setBy: 'ch02' },
  { key: 'keating_onboard', setBy: 'ch02' },
  { key: 'ivna_suspects_vera', setBy: 'ch02' },
  { key: 'out_ch2_concord', setBy: 'ch02' },
  { key: 'out_ch2_scarlet', setBy: 'ch02' },
  { key: 'out_ch2_spire', setBy: 'ch02' },
  { key: 'out_ch2_neutral', setBy: 'ch02' },
  { key: 'anchor_key_fragment_2', setBy: 'ch03' },
  { key: 'vera_refused_once', setBy: 'ch03' },
  { key: 'vera_true_name_known', setBy: 'ch03' },
  { key: 'bridge_coordinates', setBy: 'ch03' },
  { key: 'crew_split', setBy: 'ch03' },
  { key: 'out_ch3_concord', setBy: 'ch03' },
  { key: 'out_ch3_scarlet', setBy: 'ch03' },
  { key: 'out_ch3_spire', setBy: 'ch03' },
  { key: 'out_ch3_neutral', setBy: 'ch03' },
  { key: 'interface_box_removed', setBy: 'ch04' },
  { key: 'vera_knows_kill_order', setBy: 'ch04' },
  { key: 'vera_word_used', setBy: 'ch04' },
  { key: 'vera_word_refused', setBy: 'ch04' },
  { key: 'bridge_key_holder', setBy: 'ch04' },
  { key: 'out_ch4_concord', setBy: 'ch04' },
  { key: 'out_ch4_scarlet', setBy: 'ch04' },
  { key: 'out_ch4_spire', setBy: 'ch04' },
  { key: 'out_ch4_neutral', setBy: 'ch04' },
  { key: 'supply_choice_recorded', setBy: 'ch05' },
  { key: 'aux_series_deserter_met', setBy: 'ch05' },
  { key: 'ship_damage_high', setBy: 'ch05' },
  { key: 'out_ch5_concord', setBy: 'ch05' },
  { key: 'out_ch5_scarlet', setBy: 'ch05' },
  { key: 'out_ch5_spire', setBy: 'ch05' },
  { key: 'out_ch5_neutral', setBy: 'ch05' },
  { key: 'calibration_station_visited', setBy: 'ch06' },
  { key: 'vester_control_group_exposed', setBy: 'ch06' },
  { key: 'nova_report_public', setBy: 'ch06' },
  { key: 'know_vester_method', setBy: 'ch06' },
  { key: 'out_ch6_concord', setBy: 'ch06' },
  { key: 'out_ch6_scarlet', setBy: 'ch06' },
  { key: 'out_ch6_spire', setBy: 'ch06' },
  { key: 'out_ch6_neutral', setBy: 'ch06' },
  { key: 'archive_visited', setBy: 'ch07' },
  { key: 'keating_resolved', setBy: 'ch07' },
  { key: 'kill_order_known_to_crew', setBy: 'ch07' },
  { key: 'ivna_holds_lever', setBy: 'ch07' },
  // G20：第六章与第七章草稿真实设置、冻结快照漏登记的跨章旗标（ch09 的变体与 nextIf 会读）
  { key: 'anchor_key_fragment_3', setBy: 'ch06' },
  { key: 'bridge_write_disabled', setBy: 'ch07' },
  { key: 'key_returned', setBy: 'ch07' },
  { key: 'key_kept', setBy: 'ch07' },
  { key: 'met_keating', setBy: 'ch07' },
  { key: 'met_vester', setBy: 'ch07' },
  { key: 'out_ch7_concord', setBy: 'ch07' },
  { key: 'out_ch7_scarlet', setBy: 'ch07' },
  { key: 'out_ch7_spire', setBy: 'ch07' },
  { key: 'out_ch7_neutral', setBy: 'ch07' },
  { key: 'fleet_converged', setBy: 'ch08' },
  { key: 'anchor_chain_broken_once', setBy: 'ch08' },
  { key: 'finale_ready', setBy: 'ch08' },
  // G20：第八章 G24 状态修复引入的旗标（现场重做写入授权、条款登记、终章未决交接）
  { key: 'bridge_write_restored', setBy: 'ch08' },
  { key: 'bridge_write_restore_cost_paid', setBy: 'ch08' },
  // G20：一次性写入授权在第八章第一次真实写入时被消耗（c8_c19 的纯运行时规则）
  { key: 'bridge_write_consumed', setBy: 'ch08' },
  { key: 'recovery_clause_logged', setBy: 'ch08' },
  { key: 'keating_clause_pending_finale', setBy: 'ch08' },
  { key: 'out_ch8_concord', setBy: 'ch08' },
  { key: 'out_ch8_scarlet', setBy: 'ch08' },
  { key: 'out_ch8_spire', setBy: 'ch08' },
  { key: 'out_ch8_neutral', setBy: 'ch08' },
  // G20：终章在最终选择之前按真实累积信任派生的关系资格旗标。
  // 只是把"trust.vera ≥ 4"这条阈值判定写成节点级规则，不是生产数据里的数值表达式，
  // 也不锁任何路线：低信任玩家仍然有三条派系路线与两个无条件保底结局。
  { key: 'vera_bond_close', setBy: 'ch09（fx_60b → fx_60c 的 nextIf 判定）' },
  // 终章的真实换装节点：她真的把袖标收起来（fx_s_08）或穿便装出现在海岸（fx_t_11）之后。
  { key: 'ivna_costume_civilian', setBy: 'ch09（fx_s_08 / fx_t_11）' },
  { key: 'ending_concord_final_reached', setBy: 'ch09' },
  { key: 'ending_scarlet_final_reached', setBy: 'ch09' },
  { key: 'ending_spire_final_reached', setBy: 'ch09' },
  { key: 'ending_together_reached', setBy: 'ch09' },
  { key: 'ending_reset_reached', setBy: 'ch09' }
];

export const FIRST_CHAPTER = CHAPTER_CATALOG[0];
export const LAST_CHAPTER = CHAPTER_CATALOG[CHAPTER_CATALOG.length - 1];

export default {
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
};
