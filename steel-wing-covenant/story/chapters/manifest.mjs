// 钢翼盟约 — 章节就绪清单（readiness metadata）
//
// 这是"哪一章真的写好了"的唯一记录点。后续章节的写法：
//   1) 新建 dist/story/chapters/chNN.mjs，按 CHAPTER_MODULE_CONTRACT.md 导出 CHAPTER；
//   2) 把本文件的 CHAPTER_READINESS[chNN] 从 'not-authored' 改成 'playable' / 'complete'。
// 就绪状态是 'not-authored' 的章节**不会**被运行时加载——所以缺少的章节既不会产生
// 404 / 断链，也不会出现空壳占位章节。只有文件确实存在才允许改状态。
//
// G20 终局整合：ch06–ch09 的模块文件已经落进 dist/story/chapters/（来源是
// production/drafts 的最终草稿字节，主轮集成时逐对 SHA-256 核对）。九个模块都真实存在，
// 因此九章全部离开 'not-authored'。「complete」只在模块体量、终章前置条件与工程级检查
// （tests/story-modules.test.mjs、tests/engine.test.mjs、tests/chapter1-9-actual.test.mjs、
// tests/finale-eligibility.test.mjs）全部通过后才允许写；G20 收尾时统一翻到 'complete'。

/** 章节 id → 动态加载器（只在就绪状态不是 not-authored 时才会被调用） */
export const CHAPTER_MODULES = {
  ch01: () => import('./ch01.mjs'),
  ch02: () => import('./ch02.mjs'),
  ch03: () => import('./ch03.mjs'),
  ch04: () => import('./ch04.mjs'),
  ch05: () => import('./ch05.mjs'),
  ch06: () => import('./ch06.mjs'),
  ch07: () => import('./ch07.mjs'),
  ch08: () => import('./ch08.mjs'),
  ch09: () => import('./ch09.mjs')
};

/** 真实进度：not-authored 表示还没有这个模块文件 */
export const CHAPTER_READINESS = {
  ch01: 'complete',
  ch02: 'complete',
  ch03: 'complete',
  ch04: 'complete',
  ch05: 'complete',
  ch06: 'complete',
  ch07: 'complete',
  ch08: 'complete',
  ch09: 'complete'
};

export const READINESS_STATES = ['not-authored', 'draft', 'playable', 'complete'];

export const READY_CHAPTER_IDS = Object.keys(CHAPTER_READINESS).filter(
  (id) => CHAPTER_READINESS[id] !== 'not-authored'
);

export const PENDING_CHAPTER_IDS = Object.keys(CHAPTER_READINESS).filter(
  (id) => CHAPTER_READINESS[id] === 'not-authored'
);

export default { CHAPTER_MODULES, CHAPTER_READINESS, READINESS_STATES, READY_CHAPTER_IDS, PENDING_CHAPTER_IDS };
