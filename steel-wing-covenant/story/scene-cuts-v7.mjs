// Reviewed changes of physical action and introduction detail within a paragraph. Original IDs,
// effects and conditional introductions remain; newly shown images follow the action.
export function applySceneCutsV7(result) {
 const chapters=result.chapters.map(c=>({...c,nodes:{...c.nodes},scenes:[...c.scenes]}));
 const issues=[...result.issues];
 const cuts=[
  {id:'c1_06',anchor:'他从灰鸢左肩滑下来',after:'c1_v7_graykite_parts',beforeScene:'shot_intro_graykite_full',afterScene:'shot_intro_graykite_features'},
  {id:'c1_ve_01',anchor:'右臂是一整条探测臂',after:'c1_v7_nightowl_arms',beforeScene:'shot_intro_nightowl_full',afterScene:'shot_intro_nightowl_features'},
  {id:'c1_v7_nightowl_arms',anchor:'它右腿外侧',after:'c1_v7_nightowl_receiver',beforeScene:'shot_intro_nightowl_features',afterScene:'shot_intro_nightowl_full'},
  {id:'c1_b04',anchor:'你松开挂钩的时候',after:'c1_v7_release',beforeScene:'shot_c1_dual_lever',afterScene:'shot_c1_release_return_pre_reveal'},
  {id:'c1_32',anchor:'货箱盖翻起来。',after:'c1_v7_reveal',beforeScene:'shot_c1_mothership_lock',afterScene:'shot_c1_xr07_reveal'},
  {id:'c1_37',anchor:'灰鸢落地的时候',after:'c1_v7_landing',beforeScene:'shot_c1_release_return_post_reveal',afterScene:'hangar_docked',afterTone:'duty'}
 ];
 for(const cut of cuts){
  const chapter=chapters.find(c=>c.nodes[cut.id]);const original=chapter?.nodes[cut.id];
  const at=original?.text?.indexOf(cut.anchor)??-1;
  if(at<1||original.choices||original.nextIf?.length||chapter.nodes[cut.after]){issues.push('镜头分段来源不符: '+cut.id);continue;}
  const tail=original.text.slice(at).trim();
  const {onEnter,onEnterIf,derive,variants,sceneIf,...presentation}=original;
  chapter.nodes[cut.id]={...original,text:original.text.slice(0,at).trim(),scene:cut.beforeScene,sceneIf:[],next:cut.after};
  if(variants)chapter.nodes[cut.id].variants=variants.map(v=>({...v,text:v.text.includes(cut.anchor)?v.text.slice(0,v.text.indexOf(cut.anchor)).trim():v.text}));
  chapter.nodes[cut.after]={...presentation,id:cut.after,text:tail,scene:cut.afterScene,tone:cut.afterTone||original.tone,next:original.next};
  if(variants)chapter.nodes[cut.after].variants=variants.map(v=>({...v,text:v.text.includes(cut.anchor)?v.text.slice(v.text.indexOf(cut.anchor)).trim():tail}));
  for(const scene of [cut.beforeScene,cut.afterScene])if(!chapter.scenes.includes(scene))chapter.scenes.push(scene);
 }
 return {...result,chapters,issues};
}
