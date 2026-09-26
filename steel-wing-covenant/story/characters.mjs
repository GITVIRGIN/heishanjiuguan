// Exact identity/outfit/expression mapping. Camera direction is separate from identity.
// Unknown is reserved for an unidentified voice; missing art never invents a speaker.
import { EXPRESSION_IDS } from '../presentation.mjs';
const FULL = (id, expression) => `assets/portraits-v7/portrait-${id}-${expression}.webp`;
const PORTRAITS = id => Object.fromEntries(EXPRESSION_IDS.map(mood => [mood, FULL(id, mood)]));

export const CHARACTERS = {
  player: {
    id: 'player',
    name: '你',
    displayRole: '环带联合 · 预备机师',
    faction: 'concord',
    color: '#9FC0FF',
    usesCallsign: true,
    metFlag: null,
    portraits: {},
    mecha: {
      id: 'graykite',
      name: '灰鸢',
      text: '轻型人形机：钢灰装甲 + 琥珀警示条，右肩刷着编号，左肩是一块颜色不一样的替换件，左肩带牵引挂钩。',
      knownBy: 'player'
    }
  },
  ivna: {
    id: 'ivna',
    name: '伊芙娜·卡列尔',
    shortName: '伊芙娜',
    age: 28,
    gender: '女',
    role: '联合军中尉 · 第三小队指挥',
    faction: 'concord',
    color: '#C9CFD6',
    metFlag: 'met_ivna',
    // 立绘按服装分组：默认组为作训服八种表情，
    // 只有剧情真的写明她换了民用装束之后（costumes.*.requires 成立）才切到民用那一组。
    // 两条结局分支的民用身份不是同一句话：通航之后她在外环矿站当航道教官，
    // 「不写进任何档案」那一条她留在船上做副手、编制不交也不填表——
    // 所以服装档按路线分开声明，每一档自己带 role / caption：
    // 引擎按当前状态命中其中一档，职衔与说明跟着这一档走（发言框、说明行与档案卡读同一份结果），
    // 不会出现"立绘已经换成便装、职衔还写着联合军中尉"的错位。
    // 两条路线复用同一组便装八表情，保留同一角色的身份与羁绊。
    costumes: {
      civilian_exodus: {
        label:'岸上便装', requires:['ending_exodus_final_reached'],
        role:'港区靠岸演练教官', caption:'银灰短发、冷灰眼睛，换上深蓝素衫，手套收在腰边。'
      },
      civilian_lightship: {
        label:'灯船便装', requires:['ending_lightship_final_reached'],
        role:'灯船轮值负责人', caption:'银灰短发、冷灰眼睛，休息时穿深蓝素衫，袖口挽起。'
      },
      civilian_scarlet: {
        label: '民用便装（通航之后：外环矿站航道教官）',
        requires: ['ivna_costume_civilian', 'fx_final_scarlet'],
        role: '外环矿站航道教官',
        caption: '银灰短发，冷灰眼睛，民用便装；带队袖标折好收进储物格最底层。'
      },
      civilian_together: {
        label: '民用便装（不写进任何档案：渡鸦号副手）',
        requires: ['ivna_costume_civilian', 'fx_final_together'],
        role: '渡鸦号副手',
        caption: '银灰短发，冷灰眼睛，民用便装；带队袖标留在联合的配发箱里，没带上岸。'
      }
    },
    portraits: {
      ...PORTRAITS('ivna'),
      civilian_exodus: PORTRAITS('ivna-civilian'),
      civilian_lightship: PORTRAITS('ivna-civilian'),
      civilian_scarlet: PORTRAITS('ivna-civilian'),
      civilian_together: PORTRAITS('ivna-civilian')
    },
    portraitAlt: '伊芙娜·卡列尔：银灰短发，冷灰眼睛，柔和的脸部轮廓与眼角细纹；深靛蓝飞行服。',
    costumeNote:
      '作训服的口袋里常放着折过的检查单。离舰后她换上素色便衣，把袖标和配发装备收好。',
    look: '银灰短发剪到下颌，冷灰眼睛，眼角有细纹，笑起来眼尾轻轻收拢；深靛蓝飞行服，左肩一条白色带队袖标，锁骨上那道旧烧伤的边缘平直得可疑。',
    trait: '精确、寡言；约束自己比别人更狠，用条令当盾牌。',
    speech: '条令体、短句、报编号；忙的时候只给结论，闲下来才会补一句具体的话。',
    caption: '银灰短发，冷灰眼睛，左肩一条白色带队袖标。',
    mecha: null,
    secrets: [
      {
        id: 'ivna_port',
        label: '你看见的',
        text: '疑点：锁骨下那道"旧烧伤"边缘平直——那是接口盖板留下的痕迹，编号被人锉掉了。',
        requires: ['saw_ivna_port']
      },
      {
        id: 'ivna_xr03',
        label: '你确认的',
        text: '真相：她是「曦尔计划」的样本 XR-03，唯一能与 XR-07 的神经桥接对接的人。',
        requires: ['know_xr03']
      }
    ],
    bondLine: {
      guard: '她看你的方式，和看一块待检零件一样。',
      formal: '她开始把你的呼号放进战术表的第一列。',
      ally: '她会替你挡下一次质问，然后把过程写进自己的事故报告。'
    }
  },
  doran: {
    id: 'doran',
    name: '铎兰·阿吉斯',
    shortName: '铎兰',
    age: 31,
    gender: '男',
    role: '渡鸦号机库机修长',
    faction: 'concord',
    color: '#B87333',
    metFlag: 'met_doran',
    portraits: PORTRAITS('doran'),
    portraitAlt: '铎兰·阿吉斯：黑色短直发、赭红布巾，橙色工装胸襟与铜色机械左前臂。',
    look: '肤色偏浅，黑色短直发，额前系着赭红布巾，右眉一道断口疤，工装袖口卷到肘，左小臂是铜色机械义肢，贴满空白便签。',
    trait: '热心、嘴碎；一句话里半句是真的，但真话永远在最前面。',
    speech: '市井口吻，用修理和食物打比方；先开玩笑，再讲实话。',
    caption: '黑色短直发，额前系着赭红布巾，左前臂是铜色机械义肢。',
    mecha: null,
    secrets: [
      {
        id: 'doran_notes',
        label: '你看见的',
        text: '疑点：工具箱第二格锁着，里面的便签抄着渡鸦号导航核心的坐标，末页画着赤垣「靛」字队的记号。',
        requires: ['saw_doran_notes']
      },
      {
        id: 'doran_scarlet',
        label: '他承认的',
        text: '真相：他是赤垣「靛」字队联络员，任务是拿到导航核心，为外环矿站打开霜环航道。',
        requires: ['know_doran_scarlet']
      }
    ],
    bondLine: {
      guard: '他还在笑着，但不再把事情交到你手上。',
      formal: '他愿意让你站在他工具箱的第二格旁边。',
      ally: '他把扳手递到你手里，自己不动手。这在他那儿等于交底。'
    }
  },
  nova: {
    id: 'nova',
    name: '诺瓦·岑',
    shortName: '诺瓦',
    age: 26,
    gender: '女',
    role: '灰塔观测局观察员（名义：联合特聘技术顾问）',
    faction: 'spire',
    color: '#E4703A',
    metFlag: 'met_nova',
    portraits: PORTRAITS('nova'),
    portraitAlt: '诺瓦·岑：两条细辫、橙红飞行夹克与颈上空白数据卡。',
    look: '两条细黑辫垂在肩前，琥珀色眼睛，灰色观测制服外套一件过大的橙红飞行夹克，颈上挂满空白数据卡。',
    trait: '轻快、直接、爱算概率；从不承认自己在乎什么。',
    speech: '用概率与数据说话，坚持用呼号称呼主角，遇到不想答的问题就换话题。',
    caption: '两条细黑辫垂在肩前，琥珀色眼睛，橙红飞行夹克上挂着空白数据卡。',
    identityNote: '黑发：诺瓦是长发细辫，薇拉是参差短发——两个人都是黑发，靠剪影、服装与配件区分，不能靠发色区分。',
    mecha: null,
    secrets: [
      {
        id: 'nova_table',
        label: '你看见的',
        text: '疑点：她的报告里有一张"忠诚度—可用性"表，你的呼号在最下面一行，写了三个版本。',
        requires: ['saw_nova_report']
      },
      {
        id: 'nova_target',
        label: '她说的',
        text: '真相：灰塔要的是活体神经读数。驾驶舱是饵，伊芙娜才是他们的目标。',
        requires: ['know_spire_target']
      }
    ],
    bondLine: {
      guard: '她仍然只对你说"观测对象"该听的那部分。',
      formal: '她开始把不算数的直觉说给你听。',
      ally: '她第一次把报告推到你面前，让你自己看那一栏。'
    }
  },
  vera: {
    id: 'vera',
    name: '薇拉·厄兰',
    shortName: '薇拉',
    age: 22,
    gender: '女（成年）',
    role: '联合防务军第三小队 2 号机 · 呼号「夜枭」 · 辅机序列二期 AU-11',
    faction: 'concord',
    color: '#8FA98E',
    metFlag: 'met_vera',
    portraits: PORTRAITS('vera'),
    portraitAlt: '薇拉·厄兰：黑短发与左颊旁的一绺长发，灰绿色眼睛，平直的上眼线、小巧的鼻口；灰绿作训服与灰蓝救生背心。',
    look: '黑短发自己剪的、发梢参差，左颊旁留着一绺没剪掉的长发；灰绿色眼睛，左眼瞳孔外缘一圈更深的环；苍白冷调肤色，右臂内侧一整条旧接口疤；灰绿色联合作训飞行服（肩章名字条拆下又缝回），外面套一件过大的灰蓝救生背心；手指缠着白胶布，颈绳上挂一只停在 00:00 的机械秒表。',
    hairNote: '黑短发 + 左颊旁一绺长发；与诺瓦的长黑细辫是两种剪影，不撞发色、只撞发型区分标准。',
    trait: '先给结论再给依据；把关心说成检查项；礼貌用语靠背诵、经常用错场合；模仿别人的玩笑总是失败。',
    speech: '句子短、信息密；「我记下来了」= 她在乎，「我不确定」= 她真的在犹豫，「这是命令」= 她没有别的说法。不要每页都重复同一句口头禅，也不要总用身体数据说话。',
    caption: '自己剪的黑色短发，左颊旁留着一绺长发，灰绿作训服外面套着过大的救生背心。',
    identityNote: '她看上去 22 岁（成年人）；她档案上的名字属于六年前在霜环外环失踪的王牌飞行员——那个人的年龄、经历与她并不相同。这条时间线在第三章之前不得被角色说破，档案面板也只显示"看起来的年龄"。',
    mecha: {
      id: 'nightowl',
      name: '夜枭',
      text: '联合旧式侦察机改装的僚机：矮、宽肩、明显不对称；右臂是三合一探测臂（长焦/红外/信号），左臂是标准机械手；背后两片可折叠侦测翼，展开后没有任何武器挂点；哑光灰绿 + 琥珀传感器玻璃，关节与替换件是没喷漆的裸金属；右腿外侧挂着一只序列号被磨掉的接口箱。',
      knownBy: 'vera'
    },
    secrets: [
      {
        id: 'vera_orders_suspected',
        label: '你自己猜的',
        text: '疑点：她的报到像在背一份文件，右腿那只接口箱不是原厂件，而她说"交接单上写着无需检查"。',
        requires: ['vera_box_asked']
      },
      {
        id: 'vera_evaluation',
        label: '你看见的',
        text: '疑点：她给你的评估表上只有结论"可担保"，依据一栏空着。她会写，写不得。',
        requires: ['out_ch1_concord']
      },
      {
        id: 'vera_not_reported',
        label: '她没有上报的',
        text: '疑点：渡鸦号吞掉记录的那天，她删掉了自己的一行观测记录。原因一栏空着。',
        requires: ['out_ch1_scarlet']
      },
      {
        id: 'vera_false_name',
        label: '第三章才会坐实的',
        text: '真相：她的档案身份是安全处发给她的一份死人的档案——六年前失踪的王牌飞行员薇拉·厄兰。',
        requires: ['vera_true_name_known']
      },
      {
        id: 'vera_kill_order',
        label: '第四章才会公开的',
        text: '真相：她的指令里有一条针对伊芙娜·卡列尔的回收条款。',
        requires: ['vera_knows_kill_order']
      }
    ],
    bondLine: {
      guard: '她只对你报编号和结论。',
      formal: '她开始在你面前把"我不确定"说出口。',
      ally: '她会先问你想要什么，再决定自己怎么答。'
    }
  },
  scarlet_voice: {
    id: 'scarlet_voice',
    unidentified: true,
    name: '不明通讯',
    displayRole: '赤垣解放阵线 · 「靛」字突击队',
    faction: 'scarlet',
    color: '#A6472F',
    portraits: {}
  },
  // 第五章新登记的配角：环带联合「辅机序列」一期 AU-09（阿肆）。
  // 她没有羁绊计量、没有个人线、不跟船离港；档案卡只在 metFlag 成立（c5_qt_11）之后出现。
  // 身份门控（revealGate）写在角色条目上、由引擎按旗标结算：在她本人把经历说出口之前，
  // 名字 / 角色 / 说明文字 / 立绘一律走"未揭示"那一档——皮上没有编号，编号第一次出现
  // 是薇拉翻开港务处封样单背面那一栏旧登记（一期、第九位、已处理）。
  // 全身镜头保留左手旧拐杖与不等长裤脚；揭示门槛独立于图片是否存在。
  au09: {
    id: 'au09',
    name: '阿肆',
    shortName: '阿肆',
    role: '环带联合「辅机序列」一期 AU-09 · 报废程序后存活 · 现居沧澜港区第四工棚，替港务处与矿站做封样与货检',
    faction: null,
    color: '#7C8A93',
    metFlag: 'aux_series_deserter_met',
    noBond: true,
    revealGate: {
      flag: 'aux_series_deserter_met',
      name: '封样人',
      shortName: '封样人',
      role: '港务处请来的第三方封样人',
      caption: '拄拐的封样人：左手拄杖，深色旧工装，左边裤腿收得比右边高。'
    },
    portraits: {
      neutral: FULL('au09', 'neutral'),
      serious: FULL('au09', 'serious'),
      warm: FULL('au09', 'warm'),
      sad: FULL('au09', 'sad'),
      pensive: FULL('au09', 'pensive')
    },
    portraitReadiness: {
      neutral: 'accepted-and-copied',
      serious: 'accepted-and-copied',
      warm: 'accepted-and-copied'
    },
    portraitAlt: '阿肆的独立立绘：深棕色低发髻、灰眼睛的成年女性，深色旧工装，左手拄着缠布的旧拐杖，右边裤腿比左边长。',
    look: '四十岁上下的成年女性，深棕色头发绾成低发髻，灰眼睛；深色旧工装，左边裤腿收得比右边高，左手拄一根握把缠布的旧拐杖；右前臂一整条旧接口疤，疤上只有一个明显的方形接口凹坑，腕上另有一道更浅的仪表带旧痕。',
    trait: '把话说在货上：先看封条、再看人；不认编号，只认自己经手的活。',
    speech: '短句、具体；说数字的时候是货的数量，不是自己的编号。',
    caption: '深棕色低发髻，灰眼睛，左手拄着缠布的旧杖，深色工装，左边裤腿收得比右边高。',
    mecha: null
  },
  // 两名有名字的对手（登记 id 与 production/authoring-additions.json 一致，后续章节模块可以直接使用；
  // 只有剧情里真的见过本人之后，档案面板才会出现这两张卡）。
  // 配角保持各自三表情；文件缺失时隐藏图片，由真实身份状态决定是否显示 Unknown。
  keating: {
    id: 'keating',
    name: '穆尔·基廷',
    shortName: '基廷',
    role: '联合安全处少校',
    displayRole: '联合安全处少校',
    faction: 'concord',
    color: '#6E7B8B',
    metFlag: 'met_keating',
    opponent: true,
    portraits: {
      neutral: FULL('keating', 'neutral'),
      serious: FULL('keating', 'serious'),
      warm: FULL('keating', 'warm')
    },
    portraitReadiness: {
      neutral: 'accepted-and-copied',
      serious: 'accepted-and-copied',
      warm: 'accepted-and-copied'
    },
    portraitAlt: '穆尔·基廷的独立立绘：四十多岁的成年男性，棱角分明的脸、鬓角花白的深色短发、冷灰眼睛，深藏青高领安全处制服与黑手套。',
    look: '四十多岁的成年男性，棱角分明的脸、鬓角花白的深色短发、冷灰眼睛；深藏青高领安全处制服，黑手套，手里一只没有任何标记的灰色封闭文件夹。',
    caption: '深藏青高领制服，黑手套，灰色封闭文件夹。',
    mecha: null
  },
  vester: {
    id: 'vester',
    name: '阿德里安·维斯特',
    shortName: '维斯特',
    role: '灰塔首席观测员',
    displayRole: '灰塔首席观测员',
    faction: 'spire',
    color: '#7FA6A0',
    metFlag: 'met_vester',
    opponent: true,
    portraits: {
      neutral: FULL('vester', 'neutral'),
      serious: FULL('vester', 'serious'),
      warm: FULL('vester', 'warm')
    },
    portraitReadiness: {
      neutral: 'accepted-and-copied',
      serious: 'accepted-and-copied',
      warm: 'accepted-and-copied'
    },
    portraitAlt: '阿德里安·维斯特的独立立绘：五十出头的成年男性，清瘦长脸、梳得整齐的深灰头发、细圆金属框眼镜、棕色眼睛，炭灰色外勤科研外套。',
    look: '五十出头的成年男性，清瘦长脸、梳得整齐的深灰头发、细圆金属框眼镜、棕色眼睛；炭灰色外勤科研外套罩着石板蓝内衬，随身的是一只普通数据夹。',
    caption: '清瘦长脸，细圆金属框眼镜，炭灰色外勤科研外套。',
    mecha: null
  },
  narration: { id: 'narration', name: '旁白', faction: null, color: '#8A929B', portraits: {} },
  system: { id: 'system', name: '舰内广播', faction: null, color: '#FFB454', portraits: {} }
};

/** 四名同伴（有羁绊计量的角色）：终章必须各自有具体落点 */
export const COMPANION_IDS = ['ivna', 'doran', 'nova', 'vera'];

/** 有名字的对手（没有羁绊计量，档案只在 metFlag 成立后解锁） */
export const OPPONENT_IDS = ['keating', 'vester'];

/**
 * 没有羁绊计量、也不跟船离港的配角（档案同样只在 metFlag 成立后解锁）。
 * au09：第五章「阿肆」——一期辅机序列的幸存者，港务处请来的第三方封样人。
 */
export const NPC_IDS = ['au09'];

export default { CHARACTERS, COMPANION_IDS, OPPONENT_IDS, NPC_IDS };
