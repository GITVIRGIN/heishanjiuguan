import {CHAPTER as originalFinale} from '../chapters/ch09.mjs';
const flag=(key,value=true)=>({type:'flag',key,value});
const patches={
 c8_c19:{onEnterIf:[
  {forbids:['ev6_w8_spent'],effects:[flag('ev6_w8_spent'),flag('bridge_write_consumed')]},
  {requires:['bridge_write_restored','ev6_w8_spent'],forbids:['ev6_w8_bypass_burned'],effects:[flag('ev6_w8_bypass_burned'),flag('bridge_write_disabled')]}
 ]}
};
const nodes={};
const finalEndings={};
const modes=(write,seal,pub,dismantle,manual='本轮按现场维护互校处理，备用控制板与针组留在封箱里。')=>[
 {requires:['ev6_h1_manual_only'],text:manual},
 {requires:['fx_bridge_onewrite'],text:write},
 {requires:['fx_bridge_seal'],text:seal},
 {requires:['fx_bridge_public'],text:pub},
 {requires:['fx_bridge_dismantle'],text:dismantle}
];
Object.assign(patches,{
 c8_br03:{text:'这枚旁路能把眼前这一趟做完，写过以后它自己烧断，接收机转回只读。以后若要再做，就得另拿硬件和针组重建。\n这次由谁签名，现在定下来。'},
 c8_br05:{text:'薇拉把接触框压回座上，量了三遍；铎兰剪掉铅封，合上夹具。灯从红转绿，这枚一次性旁路完成了准备。\n诺瓦把签名页抄送三家。二号泵的备用控制板仍在封箱里，眼前这趟还没用到它。'},
 fx_21:{text:'钥匙盒放在桌上。第八章的作业已经做过，原完整芯片和一次性旁路各有自己的记录。本章若再写，需要用唯一的二号泵备用控制板与针组改接一套新座，旧操作座同时退使能；船会失去这部分推进冗余。其余选择是封座、公开记录或拆除写入路径。'},
 fx_choice_bridge:{choices:originalFinale.nodes.fx_choice_bridge.choices.map(choice=>{
   const c={...choice,effects:[...(choice.effects||[])]};
   if(c.id==='fx_bridge_onewrite'){
     c.label='再做一次：用唯一泵备用板和针组改接新座，承担推进降档，写完封座。';
     c.reaction='伊芙娜确认了这一轮作业申请。铎兰把封箱号列到材料栏，说明这块控制板原来是二号泵最后的备用件。诺瓦记录承诺与成本，正式拆装留到现场准备。';
     c.effects=c.effects.filter(e=>e.key!=='bridge_write_consumed'&&e.key!=='fx_ivna_seat');
     c.effects.push(flag('ev6_w9_rebuild_promised'),flag('ev6_w9_request_active'));
   }else c.effects.push(flag('ev6_w9_request_active',false));
   return c;
 })},
 fx_53a:{text:'工作灯照亮接驳座旁边的走道。铎兰核对当前芯片与封座状态，再把这次实际需要的工具摆到手边。',
  variants:modes(
   '铎兰核对唯一备用控制板和针组的封箱号。医疗包留在走道边，正式拆装完成、测试通过以后，才给接驳座供电。',
   '铎兰将封座和绝缘盖摆到工作灯下。诺瓦拿来封条，伊芙娜检查要装箱的钥匙与现存记录。',
   '诺瓦把三处接收人的回证留在屏幕上。铎兰准备封座，等实际发出与接收逐项确认以后完成封存。',
   '铎兰在壳体上标出剪针的位置，把三个零件袋放到一旁。只读显示与写入路径分开核对。'
  )},
 fx_54:{text:'先把这次实际选择的工序做清楚，供电、针组和封座各查一遍。',
  variants:modes(
   '先拆唯一的泵备用板和针组，隔离旧操作座，再做新座测试。材料用到哪里，我当场报；正式写入另等指令。',
   '先断写入供电，再上绝缘盖和封座。原件随记录装箱，只读线单独留下。',
   '先核对实际接收，再封写入口。出去的记录留着本舰底本，封条和回证一起交。',
   '先断写入供电，再剪针，剪下来的零件分袋。只读线保留，最后单独测试。'
  ),
  nextIf:[{requires:['ev6_w9_request_active'],next:'fx_v6_w9_prepare'}]
 },
 fx_55:{text:'按眼前这套工序来。设备状态、人员边界，各自当面确认。',
  variants:modes(
   '束带我自己检查，供电等设备就绪以后再接。薇拉守走道，负责读数和停止呼叫。铎兰在座边看断路器。',
   '我在封条上签名。写入口封好以后，钥匙和原件一起装箱，拆过哪些接点也写进去。',
   '三处确认收件以后我签封条。已经公开的那一份留在外面，移交清单按这个范围登记。',
   '我照着标记盯剪针的位置。每断开一组就停一下，留出让诺瓦核对只读线的时间。'
  )},
 fx_56:{text:'我在走道外面报实际读数，按这次工序逐项确认。',
  variants:modes(
   '我守在走道外面。设备就绪和人员确认分别报，谁说停，我就把这条呼叫直接交给断路器旁的人。',
   '我报只读线的状态。封座压到位以后，记录应该还在，新的写入请求会被隔开。',
   '我看三处接收灯，收到几处就报几处。封存以后，再报本舰的只读状态。',
   '我报留下的那组只读线。剪针每停一次，我都重新查一遍。'
  )},
 fx_56a:{text:'工作区状态已经核对，下一步按实际设备就绪情况进行。',
  variants:modes(
   '走道与应急断路器已经清开。医疗包在我手边，接驳座等设备就绪确认以后供电。现在先核对新座这一项。',
   '写入供电已断开，只读显示正常。封条号留在记录上，封座压紧后再查一次。',
   '三处回证按顺序进来，公开记录留了本舰副本。写入供电断开，下一步压封座。',
   '写入供电已断开，原始记录在只读席。铎兰动哪一组针，我就核对对应的读线。'
  ),
  nextIf:[{requires:['ev6_w9_needs_legacy_prepare'],next:'fx_v6_w9_legacy_prepare'}]
 },
 fx_57:{text:'铎兰将当前工序的实物摆在工作灯下，诺瓦开始核对记录。',
  variants:[
   {requires:['ev6_h1_manual_only'],text:'备用控制板和针组保持封箱。本轮使用现场维护互校，神经桥留在只读和已经选择的封座、拆除状态。'},
   {requires:['ev6_w9_complete'],text:'这一套一次性写入已经完成，旧操作座退出使能，封座压到位。铎兰复核封条和用过的材料，保留同一份作业记录。'},
   ...modes(
    '铎兰复核已经装好的同一套新座，报出测试通过。伊芙娜确认人员边界，接驳座开始供电。进度条向前走了一格，薇拉将这一刻报到舰桥。',
    '铎兰断开写入供电，将封座沿对角压紧。诺瓦把只读校验值抄在封条背面，伊芙娜签名，钥匙随记录装箱。',
    '诺瓦将原始记录和方法说明发到已确认的三处接收点，逐一听回证。铎兰随后压紧封座，将只读线留在外侧；公开与封存分别留下完成时间。',
    '铎兰按标记剪断写入针，将零件装进三个袋子。诺瓦重新核对只读显示，伊芙娜确认最后一组写入路径已经拆除。'
   ).slice(1)
  ],
  onEnterIf:[
   {requires:['fx_bridge_onewrite','ev6_w9_material_paid','ev6_w9_ready'],forbids:['ev6_h1_manual_only','ev6_w9_started','ev6_w9_complete'],effects:[flag('ev6_w9_started'),flag('ev6_w9_ready',false),flag('ev6_w9_request_active',false),flag('fx_ivna_seat')]},
   {requires:['fx_bridge_seal'],forbids:['ev6_h1_manual_only'],effects:[flag('ev6_terminal_sealed'),flag('bridge_write_disabled')]},
   {requires:['fx_bridge_public'],forbids:['ev6_h1_manual_only'],effects:[flag('fx_records_public'),flag('ev6_terminal_sealed'),flag('bridge_write_disabled')]},
   {requires:['fx_bridge_dismantle'],forbids:['ev6_h1_manual_only'],effects:[flag('ev6_terminal_dismantled'),flag('ev6_terminal_sealed',false),flag('bridge_write_disabled')]}
  ]
 },
 fx_57a:{text:'现场的人停下来逐项核对，确认当前工序留下的实物和读数。',
  variants:modes(
   '写入进到中段，舱里的照明轻轻抖动。伊芙娜报出自己的状态，薇拉在走道外面复诵，铎兰的手守在断路器上。设备与人的读数分开记。',
   '封座压紧以后，铎兰松手让伊芙娜复查。诺瓦重新读出留下的校验值，封条正反两面都拍入记录。',
   '三处回证都已收到，诺瓦把它们留在原始记录旁边。铎兰让出位置，伊芙娜沿封座的螺丝逐个复查。',
   '零件袋按剪下的顺序排好。铎兰将断开的写入针指给两人看，诺瓦再次读出只读席上的旧记录。'
  )},
 fx_57b:{text:'当前工序的校验与记录对上了，下一步按实物状态收尾。',
  variants:modes(
   '中段校验对上了。这次新座的作业还在进行，完成时间等最后确认，再写进同一份记录。',
   '只读校验一致，写入路径已经被封座隔开。这里记录的是封存，没有新增本章写入。',
   '三处确认收到原始记录与方法说明。本舰完成封座，公开内容和当前只读状态分开登记。',
   '只读校验一致，剪下的针组数量也对上了。记录写物理拆除，原先发生过的作业仍在各自的记录里。'
  )},
 fx_58:{text:'工序做完了。材料、封条和只读状态都在这里，按实物收尾。',
  variants:modes(
   '本章这次写入完成，新座封存，旧座已经退出使能。唯一的泵备用板和针组用掉了，最大加速度掉一档，回港以前要按这个余量飞。本航次已经没有第三套材料。',
   '封座完成，钥匙装箱，只读和原始记录保留。备用控制板与针组没有进入这次工序。',
   '记录已经公开，封座也压好了。备用控制板与针组仍在箱里，后续移交会带上已经公开的范围。',
   '针组已经剪下分袋，只读线复查通过。备用控制板和针组仍然封箱，船上保留的是拆除后的接口。'
  ),
  onEnterIf:[{requires:['fx_bridge_onewrite','ev6_w9_started'],forbids:['ev6_h1_manual_only','ev6_w9_complete'],effects:[flag('ev6_w9_complete'),flag('bridge_write_consumed'),flag('ev6_terminal_sealed'),flag('bridge_write_disabled'),flag('ev6_w9_ready',false),flag('ev6_w9_request_active',false)]}]
 },
 fx_59:{text:'过境队列按当前实测范围运行，现场维护组继续看着尚待校准的区段。',
  variants:modes(
   '本章这次改写已核准，三号锚标按新确认的值放行，最后两条船依次通过。作业记录按接收清单移交，此前公开过的内容继续公开。',
   '第八章作业和现在的实测范围留在只读席。过境船按已核准的范围慢行，受限的那一段交现场维护组继续量。这里完成的是封座。',
   '公开的方法和原件已经到三处。现场维护组按当前实测放船，受限区段继续核对；本舰这一轮公布与封座都已完成。',
   '只读记录仍可供现场维护组核对，受限区段按慢行范围放船。写入路径已拆除，后续修正要由别的实际维护设备承担。'
  )},
 fx_60:{text:'手套给我。现场这一段收好以后，去机库帮铎兰扶一下灰鸢的左肩板。',
  variants:modes(
   '手套放在旁边，我先喝点水。手还在抖，给我一刻钟。灰鸢左肩板等人到齐再卸，铎兰会叫你去扶。',
   '手套给我，封条和钥匙我带去舰桥。灰鸢左肩板要两个人扶，去机库接铎兰。',
   '回证和封条我一起带去舰桥。手套收好，接下来去帮铎兰卸灰鸢的左肩板。',
   '三袋零件跟移交单放在一起，我带去舰桥。铎兰先收钳子，你到机库等他，一起卸左肩板。'
  )},
 fx_60a:{text:'铎兰收好工具，诺瓦整理记录，伊芙娜将核对过的物件带往舰桥。薇拉关掉工作区一半的灯，最后一个离开走道。',
  variants:modes(
   '十五分钟以后，伊芙娜喝完半杯温水，试着握了握手。她将束带收回座边，起身走了两步。薇拉收好医疗包，铎兰和诺瓦核对这一次作业的材料与记录。',
   '封座照片、钥匙和封条副本收进同一只箱子。只读显示仍在工作，伊芙娜带箱去舰桥，薇拉最后关掉工作灯。',
   '三处回证和本舰底本各留了一份。封座照片归进同一页，伊芙娜带着清单离开走道，薇拉将工作灯调回值班亮度。',
   '三个零件袋沿清单排列，断针照片归到原始记录后面。伊芙娜接走移交箱，薇拉关掉工作灯，只读席仍亮着。'
  )},
 fx_r_03:{text:'联合的接收组拆走写入针与执行线束，将零件分批登记上缴，干管按规格压上封板。只读记录和此前已经公开的副本各自保留。第七段转回配给表的调度，原始记录的后续调阅由接管方登记。',onEnter:[flag('ev6_terminal_dismantled'),flag('ev6_terminal_sealed',false),flag('bridge_write_disabled'),flag('ev6_old_writer_retired')]},
 fx_r_10:{text:'渡鸦号回到联合护航序列，进坞大修，二号泵换了新件。三处侧面开口刷了漆，尾部三个推进环换过衬垫。熟悉的名字仍在各自的岗位栏，交接的时候开始按编号答复。'}
});
const preparationText='铎兰将二号泵唯一的备用控制板从封箱里取出，拆下原有端子，用备用针组改接新座。原完整芯片也随适配退使能，隔离到带封条的旧件盒里；旧旁路残件按原样留档。焊点冷却后，诺瓦读出测试结果，铎兰才报这一套已经就绪。';
const prepareEffects=[
 flag('ev6_w9_material_paid'),flag('ev6_old_writer_retired'),flag('ev6_w9_ready'),
 flag('bridge_write_disabled',false),flag('ev6_w9_needs_legacy_prepare',false)
];
for(const [id,next] of [['fx_v6_w9_prepare','fx_55'],['fx_v6_w9_legacy_prepare','fx_57']]){
 nodes[id]={id,chapter:'ch09',kind:'dialogue',scene:'reactor',speaker:'narration',expression:'neutral',tone:'duty',text:preparationText,next,
  variants:[
   {requires:['ev6_h1_manual_only'],text:'备用材料保持封箱，本轮按现场互校处理，神经桥的写入申请已经撤回。'},
   {requires:['ev6_w9_complete'],text:'唯一这套新座的作业已经完成，封条与旧件盒都在原位。本航次没有第三套材料，现场按原记录复核。'},
   {requires:['ev6_w9_started'],text:'唯一这套新座已经开始作业，材料去向和旧座退使能都有记录。现场继续核对这同一次操作。'},
   {requires:['ev6_w9_rechecked'],text:'铎兰指向已经装好的同一套新座，沿着原来的接线复测。唯一备用板的去向和旧座隔离都在记录里，现场只确认这套设备的状态。'}
  ],
  onEnterIf:[
   {requires:['ev6_w9_material_paid'],effects:[flag('ev6_w9_rechecked')]},
   {requires:['fx_bridge_onewrite'],forbids:['ev6_h1_manual_only','ev6_w9_material_paid','ev6_w9_started','ev6_w9_complete'],effects:prepareEffects}
  ]
 };
}
nodes.fx_v6_together_remove={
 id:'fx_v6_together_remove',chapter:'ch09',kind:'dialogue',scene:'reactor',speaker:'narration',expression:'neutral',tone:'duty',
 text:'独立航行的承诺落到实物上。铎兰打开已经断电的写入路径，把执行针逐排剪下；旧座的使能接点也一并隔离。伊芙娜核对零件袋，诺瓦保留只读与公开记录。做完以后，你们带着实物清单回舰桥。',
 variants:[
  {requires:['ev6_together_already_settled'],text:'你们按刚才选定的处置复核实物，封签和保管人的名字仍在原处。{bridge_status} 确认完毕，伊芙娜带着同一份清单回舰桥。'},
  {requires:['ev6_together_already_dismantled'],text:'原先剪下的针组仍在三个零件袋里。铎兰与伊芙娜逐件复核，诺瓦确认只读记录完整，公开过的副本也照旧保留。你们带着同一份拆除清单回舰桥。'}
 ],
 onEnterIf:[
  {requires:['v6_o4_disposition_done'],effects:[flag('ev6_together_already_settled')]},
  {requires:['ev6_terminal_dismantled'],effects:[flag('ev6_together_already_dismantled')]},
  {forbids:['ev6_terminal_dismantled','v6_o4_disposition_done'],effects:[flag('ev6_terminal_dismantled'),flag('ev6_terminal_sealed',false),flag('bridge_write_disabled'),flag('ev6_old_writer_retired')]}
 ],
 next:'fx_t_01'
};

const closureById={
 ending_concord_final:'记录与维护辖区交回联合护航序列，第七段的配给与公开核对由在场各方继续监督。{bridge_status}',
 ending_scarlet_final:'锚点维护由矿站出人承担，渡鸦号在外环补给与护航，放弃联合的常规补给保障。{bridge_status}',
 ending_spire_final:'灰塔保留有限校准合同，原始记录的既有公开范围和个人同意边界继续生效。{bridge_status}',
 ending_together:'本舰承担独立维修、运输与护航，锚点由矿站实际维护，各方均不获得本舰的独占接管权。{bridge_status}',
 ending_reset:'联合接管本段调度与舰上编制，执行线束与写入路径按实际交接拆除；已经公开的记录继续存在。{bridge_status}'
};
const summaryById={
 ending_concord_final:'渡鸦号带着受监督的配给与维护承诺回到正规护航编制，个人的签字和设备实物分别留档。',
 ending_scarlet_final:'矿站自己出人守线，渡鸦号留在外环跑补给，承担放弃联合保障后的实际航行成本。',
 ending_spire_final:'渡鸦号以有限校准合同取得合法航权，已公开的证据与个人的同意范围继续保留。',
 ending_together:'渡鸦号按自己的规矩独立航行，靠维修、运输与护航维持生活，接口按本次实际处置留在只读状态。',
 ending_reset:'复位口令被使用，联合接管舰上编制与本段调度。四位同行者仍有各自岗位，关系已被这次选择改变。'
};
for(const [id,old] of Object.entries(originalFinale.endings)){
 finalEndings[id]={...old,classification:id==='ending_reset'?'cost':'ordinary',
  summary:summaryById[id]||old.summary,
  closure:{...old.closure,mechanism:closureById[id]||old.closure.mechanism}
 };
}
finalEndings.ending_scarlet_final.closure.companions=[
 '伊芙娜：脱离联合编制，担任矿站航道教官，姓名与责任由本人签认。',
 '铎兰：回三〇九号站做外环联络员，修理册子留给船上的接班人。',
 '诺瓦：作为独立观测员署名，灰塔除名；已经公开的资料继续保留在原公开范围。',
 '薇拉：自己签领姓名，以独立机师身份参加需要她、也经她同意的工作。'
];
const roles={
 ending_concord_final:{
  ivna:{role:'联合护航序列 · 第三小队长机',faction:'concord'},
  doran:{role:'渡鸦号机修长',faction:'concord'},
  nova:{role:'灰塔观测员 · 私人频道联络',faction:'spire'},
  vera:{role:'联合护航序列机师 · 姓名由本人签领',faction:'concord'}
 },
 ending_scarlet_final:{
  ivna:{role:'外环矿站航道教官',faction:null},
  doran:{role:'三〇九号站 · 外环联络员',faction:'scarlet'},
  nova:{role:'独立观测员',faction:null},
  vera:{role:'独立机师 · 姓名由本人签领',faction:null}
 },
 ending_spire_final:{
  ivna:{role:'持合法身份的机师 · 定期本人复核',faction:null},
  doran:{role:'独立签约机修长',faction:null},
  nova:{role:'灰塔独立署名观测员',faction:'spire'},
  vera:{role:'持合法身份的机师 · 本人确认观察边界',faction:null}
 },
 ending_together:{
  ivna:{role:'渡鸦号副手',faction:null},
  doran:{role:'渡鸦号机修长 · 独立承接维修',faction:null},
  nova:{role:'独立观测与联络',faction:null},
  vera:{role:'独立机师 · 自行确认班次',faction:null}
 }
};
for(const [id,characterStates] of Object.entries(roles))finalEndings[id].characterStates=characterStates;
patches.ending_concord_final={text:'归档。渡鸦号回到联合护航编制，原始记录与维护辖区照签过的承诺移交，外环三个站的配给继续公开核对。{bridge_status}',variants:[]};
patches.ending_spire_final={text:'校准报告。有限校准合同换来合法航权，诺瓦保留独立署名，涉及本人的数据逐项确认。已经公开的范围照旧保留。{bridge_status}',variants:[]};
patches.ending_scarlet_final={text:'通航。矿站自己派人维护锚点，渡鸦号留在外环跑补给，航程和损耗由愿意守线的人一起承担。{bridge_status}',variants:[]};
patches.ending_together={text:'不写进任何档案。第七段由矿站维护，渡鸦号靠维修、运输与护航维持自己的生活。我的袖标收在箱里，名字留在自己的日志上。{bridge_status}',variants:[
 {requires:['vera_bond_close'],text:'不写进任何档案。第七段由矿站维护，渡鸦号靠维修、运输与护航维持生活。我的袖标收在箱里，名字留在自己的日志上。回程排班时，薇拉将自己写到相邻的一格，落笔之前先问了那一班想跟谁搭档。{bridge_status}'}
 ]};
export const REVISION={
 id:'bridge-ledger',patches,nodes,finalEndings,directions:{},links:[],prerequisites:[],
 redirects:[{from:'fx_t_01',to:'fx_v6_together_remove'}]
};
