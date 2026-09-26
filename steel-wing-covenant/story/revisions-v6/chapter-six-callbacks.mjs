import {CHAPTER} from '../chapters/ch06.mjs';
const withoutFutureDamage=id=>(CHAPTER.nodes[id].variants||[]).filter(v=>!(v.requires||[]).includes('ship_damage_high'));
export const REVISION={
 id:'chapter-six-callbacks',nodes:{},finalEndings:{},directions:{},
 patches:{
  c6_01:{variants:withoutFutureDamage('c6_01')},
  c6_f23:{variants:withoutFutureDamage('c6_f23')}
 }
};
