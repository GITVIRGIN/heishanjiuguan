import { CHAPTER as originalFinale } from '../chapters/ch09.mjs';

const patches = {};
const setScene = (scene, ids) => {
  for (const id of ids) patches[id] = { ...patches[id], scene };
};
const range = (prefix, first, last) => Array.from({length:last-first+1},(_,i)=>prefix+String(first+i).padStart(3,'0'));

setScene('workshop', ['v6_returned_capture02','v6_returned_capture03']);
setScene('hangar_docked', ['v6_scarlet_g03','v6_together_068','fx_s_06','fx_s_07','fx_t_04','fx_t_04a']);
setScene('shore_receiver', [...range('v6_scarlet_',69,83),'v6_scarlet_c01','v6_scarlet_c02','v6_scarlet_c03','v6_scarlet_c04','v6_scarlet_c13','v6_scarlet_c14']);
setScene('bridge_harbor', [...range('v6_scarlet_',96,100),'fx_s_01','fx_s_02','fx_s_03','fx_s_04','fx_s_05','fx_s_12']);
setScene('ship_rail_harbor', ['fx_c_05','fx_c_05a','fx_c_06','fx_c_06a','fx_s_08','fx_s_08a','fx_s_09','fx_s_10','fx_s_11']);
setScene('coast_night', [...range('v6_together_',70,77),'v6_together_c01','v6_together_c02']);
setScene('commandroom', ['v6_together_089','v6_together_090','fx_t_01','fx_t_02','fx_t_03','fx_t_06','fx_t_07','fx_t_09','fx_t_10']);
setScene('messhall_closed', ['fx_t_05']);
for (const id of [...range('v6_together_',78,88),'fx_t_08']) {
  patches[id] = { ...patches[id], sceneIf:[{requires:['v6_o4_shore_work'],scene:'ship_rail_harbor'}] };
}

patches.v6_scarlet_100.text = '伊芙娜把那一页递给她，自己去拿船籍转出的文件。铎兰把工具袋放到脚边，诺瓦关掉重复播放的战斗影像，屏幕留下共用锚点的交接图。此前保住的通道已经开始轮班放行。舷窗外，港区的吊车亮起工作灯，一条补给船正缓缓靠岸。';
patches.v6_together_061 = {
  text:'沧澜的蓝海从云下露出来，一颗苍白的卫星留在远处。渡鸦号沿确认过的路线下降，三枚尾喷依次收低。',
  next:'v6_together_landing'
};

patches.fx_choice_stay = {
  choices:originalFinale.nodes.fx_choice_stay.choices.map(choice => choice.id === 'fx_stay_spire'
    ? {...choice,label:'校准报告：保留既有公开记录，签有限校准合同，换合法航权。'} : choice)
};
patches.fx_p_01 = {
  text:'合同一共十一页：塔保留校准权，写入权整条划掉；第七段的原始数据公开一半，另一半留在塔里备核，先前已经发出的观测报告照旧保留。渡鸦号拿到合法航权，条件是每季度一次船体与记录检查，范围列在附件三。诺瓦对着附件核完最后一项，递来签字笔。',
  variants:[{requires:['fx_records_public'],text:'合同一共十一页：塔保留校准权，写入权整条划掉。第七段的原始记录已经公开，三处接收回证附在合同后面；个人资料另列调阅范围。渡鸦号拿到合法航权，每季度接受一次船体与记录检查。诺瓦翻到自己写的附件三，核完范围，递来签字笔。'}]
};
patches.fx_t_05 = {
  ...patches.fx_t_05,
  text:'这两周的观察补记存在我的私人卡里。原始记录还按我们先前定下的办法保管。塔的除名通知寄到了，我签完名，发现信封刚好能垫这张桌子的短腿。',
  variants:[{requires:['fx_records_public'],text:'三处都还能查到我们发出的原始记录。我这张卡里存的是这两周的个人补记。塔的除名通知也寄到了，我签完名，发现信封刚好能垫这张桌子的短腿。'}]
};
patches.fx_s_10 = {
  ...patches.fx_s_10,
  text:'新航线这一周的观测，我发了半数出去，署名只写观测员。余下那部分带着船员的个人记录，我锁在船上，等他们各自核过再处理。灰塔的除名通知先到了，我把它贴在数据卡套背面，当书签用。',
  variants:[{requires:['fx_records_public'],text:'航道原始记录还在那三处，新航线这一周的观测也发出了能公开的半数。余下带个人信息的记录，等船员各自核过再处理。灰塔的除名通知先到了，我把它贴在数据卡套背面，当书签用。'}]
};

export const REVISION = {
  id:'scene-and-tail-continuity-v6', patches,
  nodes:{v6_together_landing:{
    id:'v6_together_landing',kind:'dialogue',chapter:'ch09',scene:'surface',
    speaker:'narration',expression:'neutral',tone:'duty',
    text:'港口的平台有一半仍泛着水光，南边那格铺好了临时垫面。地勤的灯沿着边缘排开，引着渡鸦号缓缓落稳。',
    next:'v6_together_062'
  }}
};
