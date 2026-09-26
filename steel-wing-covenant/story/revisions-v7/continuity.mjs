// One physical recovery, after the final external guidance; old node IDs remain.
export const REVISION = {id:'physical-continuity-v7',patches:{
  c2_g13:{next:'c2_136'},
  c2_139:{next:'c2_g14'},
  c2_g16:{next:'c2_140'},
  c8_01:{scene:'hangar_docked',tone:'off_duty',text:'离港后，渡鸦号沿主航道驶向第七段锚地。交班铃响过，几名刚下值的地勤把饭带到机库，趁轮休坐下来吃。你和薇拉穿过走道，闻见了热汤的气味。',next:'c8_307'},
  c8_306:{next:'c8_317'},
  c8_173:{nextIf:[
    {requires:['bridge_write_disabled'],next:'c8_br01'},
    {requires:['key_returned'],next:'c8_br01'}
  ]},
  c8_h14:{next:'c8_v7_arrival',nextIf:[
    {requires:['c8_chain_cut_clean'],next:'c8_317'},
    {requires:['c8_chain_took_board'],next:'c8_317'},
    {requires:['c8_chain_scarlet_cut'],next:'c8_317'}
  ]}
},nodes:{
  c8_v7_arrival:{id:'c8_v7_arrival',kind:'dialogue',chapter:'ch08',scene:'orbit',expression:'neutral',tone:'duty',speaker:'narration',
    text:'渡鸦号在外缘熄掉主推力，靠残余速度滑进锚地交通圈。沧澜的蓝色边缘压在屏幕下沿，第七段锚点的浮标排成一条弧，七枚里有四枚已经不亮了。',next:'c8_02'}
}};
