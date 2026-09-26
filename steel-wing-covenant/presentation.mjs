// Art direction changes presentation only; it cannot set flags or choose a route.
export const EXPRESSION_IDS = ['neutral','serious','warm','angry','sad','worried','happy','pensive'];
export const FRAMING_IDS = ['full','half','close','head'];
const meets = (state, requires) => !requires || requires.every(key => Boolean(state.flags?.[key]));

// A branch can revisit the same room while the ship is in a different place.
export function resolveNodeSceneId(node, state = {}) {
  if (!node) return null;
  const rule = (node.sceneIf || []).find(rule => meets(state, rule.requires)
    && !(rule.forbids || []).some(key => Boolean(state.flags?.[key])));
  return rule?.scene || node.scene || null;
}

const POSE_SCENE_BASE = {
  hangar_docked: 'hangar', bridge_harbor: 'bridge',
  ship_rail_harbor: 'ship_rail', messhall_closed: 'messhall', coast_night: 'coast'
};

export function resolvePresentation(node, state, character, outfit, book = {}) {
  let expression = node.expression || 'neutral';
  let framing = node.tone === 'combat' ? 'head' : character.id === 'au09' ? 'full' : 'half';
  let poseId = null;
  if (book.enabled) {
    const rules = book.directions?.[node.id] || [];
    const activeVariant = (node.variants || []).findIndex(v => meets(state, v.requires));
    for (const rule of rules) {
      if (!meets(state, rule.requires)) continue;
      if (Number.isInteger(rule.variantIndex) && rule.variantIndex !== activeVariant) continue;
      if (EXPRESSION_IDS.includes(rule.expression)) expression = rule.expression;
      if (FRAMING_IDS.includes(rule.framing)) framing = rule.framing;
      if (rule.pose) poseId = rule.pose;
    }
  }
  const pose = poseId && book.poses?.[poseId];
  const civilian = String(outfit || '').startsWith('civilian');
  const sceneId = resolveNodeSceneId(node, state);
  const poseSceneId = node.presentationScene || sceneId;
  const validPose = pose && pose.speaker === character.id
    && pose.scenes.includes(POSE_SCENE_BASE[poseSceneId] || poseSceneId)
    && Boolean(pose.civilian) === civilian;
  if (validPose) return {
    expression: pose.expression, framing: pose.framing,
    nativeFraming: pose.nativeFraming || pose.framing, poseId, file: pose.file
  };
  return { expression, framing, nativeFraming: character.id === 'au09' ? 'full' : 'knees', poseId: null, file: null };
}
