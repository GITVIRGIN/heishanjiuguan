// 钢翼盟约 — 世界固定事实：阵营、回响文案、实体登记与终章必须收束的对手/机制。
// 这里只写"跨章不变"的东西；任何一章的剧情节点都不放在本文件。

/** 实体登记：场景登记表里的 visibleEntities 只能引用这里的 id */
export const ENTITIES = {
  'ship-raven': { id: 'ship-raven', kind: 'ship', name: '渡鸦号', note: '环带联合旧式护航母舰；海军蓝装甲板 + 钢灰结构 + 琥珀警示条' },
  'ship-egret': { id: 'ship-egret', kind: 'ship', name: '白鹭', note: '外环运输船；第一章里被拖出射界的那条船' },
  'mecha-graykite': { id: 'mecha-graykite', kind: 'mecha', name: '灰鸢', note: '主角的轻型人形机；左肩有一块颜色不一样的替换件，左肩带牵引挂钩' },
  'mecha-nightowl': { id: 'mecha-nightowl', kind: 'mecha', name: '夜枭', note: '薇拉的僚机；矮宽肩、右臂三合一探测臂、两片无挂点侦测翼、右腿接口箱' },
  'drone-mothership': { id: 'drone-mothership', kind: 'ship', name: '无人母舰', note: '没有国籍标识，涂层属于灰塔商船序列' },
  'prop-xr07': { id: 'prop-xr07', kind: 'prop', name: 'XR-07 驾驶舱', note: '嵌满神经桥接的旧式驾驶舱；不是武器，是桥' },
  'station-anchor-buoy': { id: 'station-anchor-buoy', kind: 'prop', name: '锚点浮标', note: '霜环航道唯一的路标；谁掌握锚点，谁决定矿站这个冬天能不能拿到补给' },
  'character-player': { id: 'character-player', kind: 'character', name: '你（预备机师）' },
  'character-ivna': { id: 'character-ivna', kind: 'character', name: '伊芙娜·卡列尔' },
  'character-doran': { id: 'character-doran', kind: 'character', name: '铎兰·阿吉斯' },
  'character-nova': { id: 'character-nova', kind: 'character', name: '诺瓦·岑' },
  'character-vera': { id: 'character-vera', kind: 'character', name: '薇拉·厄兰' },
  'character-keating': { id: 'character-keating', kind: 'character', name: '穆尔·基廷' },
  'character-au09': { id: 'character-au09', kind: 'character', name: '阿肆' }
};

export const FACTIONS = {
  concord: {
    id: 'concord',
    name: '环带联合',
    fullName: '环带联合 · 联合防务军',
    color: '#4E7BC4',
    stance: '让航线继续存在',
    wants: '配给、封锁与秩序：把不可控的东西归档。',
    secrets: [
      {
        id: 'concord_xier',
        label: '你在证词里写下的',
        text: '账目：旧实验项目「曦尔」的编号至今留在联合的舰船档案里，而且没有作废记录。',
        requires: ['saw_xr07']
      },
      {
        id: 'concord_wayne',
        label: '你亲耳听到的',
        text: '账目：安全处来的人真正要核对的，是还有几台样本能被"回收"。',
        requires: ['know_xr03']
      }
    ],
    standingLine: {
      low: '你的档案被标了一句"需观察"。',
      neutral: '你的呼号还躺在例行记录里。',
      high: '管制频道里，有人开始把你的呼号念得顺口。'
    }
  },
  scarlet: {
    id: 'scarlet',
    name: '赤垣解放阵线',
    fullName: '赤垣解放阵线',
    color: '#C2492F',
    stance: '我们不要配给，我们要回名字',
    wants: '外环矿站的自救同盟：撬开货舱，让所有人看见里面是什么。',
    secrets: [
      {
        id: 'scarlet_cost',
        label: '你听见的',
        text: '账目：为了把航道打开，他们愿意先炸掉半条——包括他们自己要走的这半条。',
        requires: ['heard_scarlet_hail']
      },
      {
        id: 'scarlet_doran',
        label: '他承认的',
        text: '账目：渡鸦号上有一个他们的人，而这个人十四年来救过这船上大部分人。',
        requires: ['know_doran_scarlet']
      }
    ],
    standingLine: {
      low: '你的呼号在他们的名单上，画着一把叉。',
      neutral: '他们的频道里没人提起你。',
      high: '有人在赤垣的公开频道里，替你把话说了一半。'
    }
  },
  spire: {
    id: 'spire',
    name: '灰塔观测局',
    fullName: '灰塔观测局',
    color: '#E4703A',
    stance: '观测，然后继续',
    wants: '不站队，只校准航线：等两败，再接管。',
    secrets: [
      {
        id: 'spire_nomark',
        label: '你看见的',
        text: '账目：那艘无人母舰没有国籍标识，涂层却属于灰塔财团的商船序列——"中立"标着价。',
        requires: ['saw_drone_mothership']
      },
      {
        id: 'spire_sample',
        label: '她说的',
        text: '账目：灰塔要的是能被采集的活体样本，其余一切都只是把样本牵出来的线。',
        requires: ['know_spire_target']
      }
    ],
    standingLine: {
      low: '灰塔的记录里，你是一行待核实的文字。',
      neutral: '灰塔的记录里，你是一个可用的变量。',
      high: '灰塔的记录里，你的名字后面多了一个问号——那是他们少见的兴趣。'
    }
  }
};

/** 旗标 → 结算面板上的"回响"文字（把数值翻译成人话） */
export const ECHOES = {
  signed_injector: '你签下的违规改装单折成三角，躺在你胸袋里。铎兰说过：备案他写，参数他认。',
  reported_injector: '你把改装单交给了伊芙娜。铎兰说"行，规矩人"，然后把单子锁进了工具箱第二格。',
  self_inspected: '你在地上照着单子把三段喷口过了一遍，报出三处要复紧的位置。几分钟后，你为那三处庆幸。',
  delayed_scramble: '起飞延误了几拍，灰鸢的左肩装甲替你还了这笔账。',
  obey_ivna: '你守了条令。伊芙娜事后只说了两个字，然后换上了一双新手套。',
  spire_datalink: '你把数据链交给诺瓦。数据拉回了中线，她顺手删掉了报告里你的呼号。',
  open_hail: '你用明码喊过赤垣。半条航道真的让了出来。他们记住了这个呼号。',
  wreck_sealed: 'XR-07 的记录器按条令封存。你留给安全处的是一份干净、完整、没有温度的清单。',
  wreck_prized: '铎兰在十二分钟里拆下记录器，指纹擦得比维修还细。这船上从此多了一份不在清单上的数据。',
  wreck_read_first: '诺瓦先读了驾驶舱。她只说了两个字："活的。"然后把手放在了颈边那串数据卡上。',
  ivna_covers: '你替伊芙娜遮住了接口环。她要你站到旁边，别挡在她前面。',
  ivna_reported: '你陪伊芙娜走进指挥舱，把编号念了出来。账单已经开好。',
  ivna_shielded: '你把舰医的登记表折起来揣进兜里。那张纸上写着她今晚用过两支镇静剂。',
  doran_trusted: '铎兰把工具箱第二格的钥匙给了你。他说这叫"共犯凭证"，笑得像在说晚饭。',
  doran_stopped: '你要他今晚停手，他照做了。锁扣转了两圈，钥匙在他自己口袋里。',
  doran_watched: '你抄下了那个记号，什么也没说。他看懂了，然后把话咽了回去。',
  nova_self_written: '你在诺瓦那一栏自己写了"可担保，理由保密"。她把副本发出去时没有修改一个字节。',
  nova_wrote_truth: '诺瓦照实写了，包括你替伊芙娜藏起编号的事。报告末尾多了一行：建议复核对象——伊芙娜·卡列尔。',
  nova_page_deleted: '你删掉了那一页。诺瓦告诉你：你删的是副本，灰塔不发副本。',
  know_doran_scarlet: '你知道渡鸦号的机修长是赤垣的联络员，而你没有把他交出去。',
  ivna_marked: '伊芙娜被写进了"建议复核"名单。这笔账是你亲手签的。',
  vera_wing_lead: '薇拉的记录里多了一条手册上没有的指令：跟住左翼。',
  vera_box_asked: '你问过她右腿那只接口箱。她说到做到——着陆以后真的拆开看了。',
  vera_joke_failed: '她记住了"先骂，再请"。铎兰说这丫头学东西快得让人害怕。',
  met_vera: '第三小队来了个新面孔：报编号比报名字熟练。',
  ending_concord: '你把 XR-07 连同自己的呼号一起写进了联合的档案。伊芙娜留在船上，做她的担保人是你。',
  ending_scarlet: 'XR-07 留在渡鸦号，霜环航道上多了一条不写在图上的航线。你成了赤垣名单上一个有人担保的呼号。',
  ending_spire: 'XR-07 的数据链进了灰塔的报告，换来伊芙娜那一栏的四个字：不可采集。',
  ending_alone: 'XR-07 封在渡鸦号自己的货舱里，钥匙在你口袋里。三方都没拿到，这条船只能靠自己。'
};

export const WORLD_FACTS = {
  planet: {
    name: '沧澜',
    type: '唯一有人居住的行星；蓝色海洋占绝大多数，陆地为岩石大陆与群岛',
    rings: '无环',
    moon: '只有一颗苍白色卫星「素月」',
    atmosphere: '可呼吸；海面有云带与季风',
    gravity: '1.05 g',
    mustNotShow: '不得出现第二颗卫星、行星环、气态巨星条纹、紫色海洋'
  },
  ship: {
    name: '渡鸦号',
    type: '环带联合防务军护航母舰（旧式，拼装维护）',
    gravity: { cruise: '0.8 g', battle: '0.3 g' },
    palette: '海军蓝装甲板 + 钢灰结构 + 琥珀色警示条 + 少量褪色编号'
  },
  space: {
    region: '霜环航道：外环矿站的补给线，恒星光偏冷，锚点浮标是唯一路标',
    gravity: '0 g（舱内靠自旋或磁靴；舱外必须画牵引索/喷口）'
  }
};

/** 终章必须同时收束的两条线（机制层面 + 人物层面） */
export const ANTAGONISTS = {
  vester: {
    id: 'vester',
    name: '阿德里安·维斯特',
    role: '灰塔观测局首席观测员',
    logic: '要拿到一条干净的航道数据，就必须先让一段航道彻底失效一次。第一章的无人母舰、第二章的死航线、第三章的海上封锁都是他的对照组与实验组。',
    mustResolve: '终章必须给出他的实验被终止或被公开的确定结果，并交代他个人的结局。'
  },
  keating: {
    id: 'keating',
    name: '穆尔·基廷',
    role: '联合安全处少校（薇拉的指令来源）',
    logic: '不在战场上赢，在档案里赢；用「回收条款」处理不可控的人和物。',
    mustResolve: '终章必须交代那条击杀令的结局（撤销 / 执行 / 被公开）。'
  },
  anchorChain: {
    id: 'anchor_chain',
    name: '锚链协议',
    how: '联合铺设锚点浮标、灰塔校准、外环矿站依赖；桥（XR 系列驾驶舱）能重写锚点数据，等于决定哪条航线明天还亮着。',
    mustResolve: '终章必须给出锚点的归属或共管结果，并说明桥的最终处置（封存 / 公开 / 拆解）。'
  }
};

export default { ENTITIES, FACTIONS, ECHOES, WORLD_FACTS, ANTAGONISTS };
