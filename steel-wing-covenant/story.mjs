// 钢翼盟约 — 剧情数据对外唯一入口（保持既有 import 路径不变）
//
// 数据已拆分为固定目录 + 章节模块：
//   dist/story/catalog.mjs            章节身份 / 节点 id 约定 / 体量目标
//   dist/story/world.mjs              阵营、回响、实体、对手与机制
//   dist/story/characters.mjs         角色档案与表情 → 立绘文件映射
//   dist/story/scenes.mjs             场景登记表（精确路径 / 位置 / 光线 / 可见实体）
//   dist/story/chapters/chNN.mjs      单章正文（唯一需要逐章编写的地方）
//   dist/story/chapters/manifest.mjs  章节就绪清单（未就绪的章节不会被加载）
//
// engine.mjs / app.mjs / tests 仍然使用：import { STORY } from './story.mjs'

export { STORY, CAMPAIGN_READINESS, CHAPTERS } from './story/index.mjs';
export { STORY as default } from './story/index.mjs';
