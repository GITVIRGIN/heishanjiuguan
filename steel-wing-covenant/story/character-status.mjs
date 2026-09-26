// Narrative outcomes override a historical score's present-tense wording.
export const CHARACTER_STATUS_RULES = {
 ivna:[{requires:['fx_word_spoken_final'],relationship:{label:'公事往来',line:'她按职责执行任务与移交，私人交谈停在这次复位之后。'}}],
 doran:[{requires:['fx_word_spoken_final'],relationship:{label:'隔阂',line:'他继续完成工作，交给你的个人信任需要重新建立。'}}],
 nova:[{requires:['fx_word_spoken_final'],relationship:{label:'保持距离',line:'合作限于公事，私人判断由她自己保留。'}}],
 vera:[
  {requires:['fx_word_spoken_final'],relationship:{label:'受口令约束',line:'她的这次响应受复位口令控制，值守继续，过去的亲近无法代替本人意愿。'}},
  {requires:['ending_common_clock_hidden_reached','vera_word_used'],relationship:{label:'重新相处',line:'她愿意继续合作，口令副本由她自己销毁；信任要在以后的实际回应里重新建立。'}}
 ]
};
