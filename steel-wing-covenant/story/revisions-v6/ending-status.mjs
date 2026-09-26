const characterStates={
 ending_watch_final:{
  ivna:{role:'共同护航轮值 · 舰桥指挥',faction:null},
  doran:{role:'护航团机修长',faction:null},
  nova:{role:'共同护航观测与联络',faction:null},
  vera:{role:'二号位机师 · 民船观察教学',faction:null}
 },
 ending_exodus_final:{
  ivna:{role:'港区靠岸演练教官',faction:null},
  doran:{role:'岸上工坊 · 修理教学',faction:null},
  nova:{role:'当地潮报与联络',faction:null},
  vera:{role:'近岸救援与小驳教学',faction:null}
 },
 ending_lightship_final:{
  ivna:{role:'灯船轮值负责人',faction:null},
  doran:{role:'灯船维护与巡检培训',faction:null},
  nova:{role:'灯船实测与通航公告',faction:null},
  vera:{role:'自愿轮值机师 · 巡检教学',faction:null}
 },
 ending_returned_final:{
  ivna:{role:'救援船舰桥负责人',faction:null},
  doran:{role:'救援船机修与舱室改造',faction:null},
  nova:{role:'运输见证与医疗联络',faction:null},
  vera:{role:'独立转诊陪行与获救者联络',faction:null}
 },
 ending_common_clock_hidden:{
  ivna:{role:'共同维护首班 · 舰桥负责人',faction:'concord'},
  doran:{role:'现场维护班长',faction:null},
  nova:{role:'共同保管与独立复核',faction:null},
  vera:{role:'自愿测距与交班教学',faction:null}
 }
};
export const REVISION={
 id:'ending-current-roles',nodes:{},patches:{},directions:{},
 finalEndings:Object.fromEntries(Object.entries(characterStates).map(([id,states])=>[id,{chapter:'ch09',characterStates:states}]))
};
