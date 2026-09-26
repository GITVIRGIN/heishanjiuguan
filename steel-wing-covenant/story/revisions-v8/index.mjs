// V8 是纯文风润色层，只覆盖 text / variants[].text / choices[].label /
// choices[].reaction / closure.*。任何结构字段都不出现在这一层里。
// 由 tools/v8/compile-batch.mjs 依据 evidence/review-v8/accepted-batches.json 生成。
import { REVISION as prose } from './prose.mjs';
export const STORY_REVISIONS_V8 = [prose];
