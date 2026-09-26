// 钢翼盟约 / STEEL-WING COVENANT — 第五章「补给线」章节模块（纯数据，无 DOM 依赖、无 import）
//
// 章节模块契约见 candidate/production/contracts-g1/CHAPTER_MODULE_CONTRACT.md。
// 入口 c5_01，章末结果 out_ch5_concord / out_ch5_scarlet / out_ch5_spire / out_ch5_neutral，
// 四个结果的 continuesTo 都是 ch06；本章内部无环，跨章只通过章末结果连接。
//
// 说话人：narration / system / player / ivna / doran / nova / vera，
// 加上 authoring-additions.json 已批准的 keating、vester（两处均为播放中的录音，不是当面出场），
// 以及新增登记的 au09（辅机序列一期 AU-09，报废程序后存活；登记申请见 ch05-cast-additions.json）。
//
// 连续性边界：
//   - 上一章的击杀令、复位口令选择、接口箱状态按 out_ch4_* / vera_word_used|refused 生效，
//     本章只读不写；本章不设置任何知识旗标冒充角色已知。
//   - 不再出现在船上的东西不做回调：巡防舰「白鹭」与 XR-07 的移送状态沿用第四章结尾，
//     本章不写任何被移交的东西又被搬回货舱。
//   - 锚链依赖的现实成本只落在矿站这个冬天：配给表的缺口、泵站的水、取暖的配额。
//   - 辅机序列的报废程序第一次被说清楚（AU-09 是唯一证据来源），vera 在章内主动把它问出口。
//
// 空间与美术口径（G18 修复后）：
//   - 渡鸦号全程留在轨道上，直到第二天按港务处要求落回港区四号泊位办封样与交接；
//     最后一板货、两箱药的物理位置（四号泊位 / 货舱）与四个章末结果保持一致；
//     办完交割再抬回轨道（c5_fin_01），所以本章只有一次下泊、一次离泊。
//   - 战斗段是**轨道上的转运拦截**：地面交接（city，黄昏雨后）办完之后，剩下二十七板
//     在轨道上转给矿站驳船，三具无人机在那里切进来。战斗段不出现城市、云层与地面。
//   - 带舷窗的场景（messhall / quarters / ship_rail / bridge）只在轨道段使用；
//     封闭房间（commandroom / medbay / reactor / hangar）在泊位段照常可用。
//     封样一场发生在作战会议室（封闭房间），不是住舱。
//
// 计量口径（与 catalog.mjs CAMPAIGN_TARGETS.countingMethod 一致）：
//   中文可读字符 = 一条主干路径上真正显示过的文本里的 CJK 表意文字（不含标点、空白、数字、拉丁字母）；
//   本章的实测数字写在 ch05-notes.json，由 ch05-selfcheck.mjs 从最终文件算出，不手工填写。

export const CHAPTER = {
  number: 5,
  id: 'ch05',
  nodeIdPrefix: 'c5_',
  title: '第五章 · 补给线',
  badge: '第五章',
  status: 'complete',
  entry: 'c5_01',
  nextChapter: 'ch06',
  contentTarget: {
    mainPathCjk: 14000,
    note: '一条正常完整路径 ≥14,000 个中文可读字符（目标 14,000–15,000；G18 修复后、G26 文案修复前实测主干为 15,410，G26 之后为 15,409，都在区间上限之上，如实记录，不因此改口径）。'
  },
  contentActual: {
    mainPathCjk: 15409,
    corpusCjk: 16879,
    nodes: 271,
    choices: 7,
    options: 20,
    combinations: 1296,
    measuredAt: '2026-09-12',
    method: 'drafts/ch05-selfcheck.mjs：从 c5_01 按引擎语义（requires / nextIf / variants / 选项顺序 / effects）遍历，七个选择节点的选项数乘积 1,296 条组合全部枚举（不是抽样）；主干路径只统计该路径上真正显示过的文本（节点文本或命中的变体 + 被选项的文案 + 该选项的反应），语料总量统计全章文本、变体、选项文案与选项反应。G26 文案修复（把"上一章 / 第一章"改成世界内指代）之后按引擎口径（tests/measure-content.mjs）在同一版字节上复算：主干 15,409 / 语料 16,879；自检脚本 1,296 条组合的区间是 G18 那一版的记录，未重跑。'
  },
  decisions: [
    'c5_choice_cargo',
    'c5_choice_route',
    'c5_choice_manifest',
    'c5_choice_aux',
    'c5_choice_meal',
    'c5_choice_shaft',
    'c5_choice_split'
  ],
  outcomeNodeIds: ['out_ch5_concord', 'out_ch5_scarlet', 'out_ch5_spire', 'out_ch5_neutral'],
  scenes: ['messhall', 'bridge', 'hangar', 'orbit', 'city', 'battle', 'reactor', 'commandroom'],
  companionMilestones: {
    ivna: [
      '在配给表的签字页上不填第三点，把「第三点未到」原样留在正式记录里（c5_cm_07、c5_cm_14）',
      '第一次承认条令也会饿死人，并要求船员改口径之前先告诉彼此'
    ],
    doran: [
      '把货舱清单改成两套（c5_hg_06），在作战会议室被要求选一套（c5_cm_04b）',
      '提供报废程序的操作口径，并承认他自己替人推过那一次（c5_qt_12）；反应堆抢修里负责井下工具与索具'
    ],
    nova: [
      '把矿站反馈写进正式报告，明知灰塔会把它当样本（c5_ms2_06 到 c5_ms2_10）',
      '在作战会议室当众把自己写的那两行念出来，念完不再让别人猜（c5_cm_11a）'
    ],
    vera: [
      '第一次带队飞二号位，并在频道里问出「手册没写的部分」（c5_orb_02 到 c5_orb_20）',
      '主动问出「报废是什么意思」，并听完 AU-09 的完整回答',
      '在反应堆舱自己扣上腰环、试紧两道再下井，把「我要」说成一件具体的事（c5_rx_08）'
    ]
  },
  outcomes: {
    out_ch5_concord: {
      chapter: 'ch05',
      title: '章末结果 · 一张签过字的配给表',
      route: 'concord',
      routeName: '环带联合',
      summary: '渡鸦号把配给表走完、签了字，货到了矿站，签字栏里也留下了这艘船的名字。',
      consequences: [
        '联合拿到执行记录，基廷的经手权从这一条配给线往下延伸；下一段渠道不再是审问，而是发单。',
        "矿站拿到了这个冬天的燃料与药品，泵站的水保住了；收货记录留下了配给编号，船员的名字只记在舰内的交接单上。",
        '船员第一次在配给对象上真正分裂：一份执行记录被贴进餐厅留言板，谁都没把它撕下来。'
      ],
      nextHook: '联合会把下一张单子递过来；灰塔的观测点已经把这次配给叫作「对照组二的补给条件」。',
      continueHint: '第六章从「配给表执行完成、船带着一份正式签字的记录离开矿站」继续。',
      continuesTo: 'ch06'
    },
    out_ch5_scarlet: {
      chapter: 'ch05',
      title: '章末结果 · 两箱没有编号的罐头',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: '货卸在港区，最后一板没有进仓库，顺着一条不写字的路线进了矿站的井口。',
      consequences: [
        '外环矿站拿到的不止是配给表上的数字；赤垣的影子线路多了一个能过重货的点。',
        '联合的清单上少了两箱，铎兰把这笔差额写成了「运输损耗」，笔迹比平时慢。',
        "货已送到井口，餐厅里的争论却还在继续：下一趟补给的责任该由谁承担。"
      ],
      nextHook: '赤垣用这批货换来的是一条能走的近路；而联合的账目会开始对不上。',
      continueHint: '第六章从「矿站吃到这批货、联合的记录里少了两箱」继续。',
      continuesTo: 'ch06'
    },
    out_ch5_spire: {
      chapter: 'ch05',
      title: '章末结果 · 一份被旁听过的反馈',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: '矿站的反馈被完整写进报告，送交灰塔观测点；渡鸦号因此在他们的样本表上从此有了一整行。',
      consequences: [
        "灰塔收到了矿站对补给线的反馈，也得知了舰内的分歧。",
        '维斯特那边的回执只有一句「已记录条件」；诺瓦把那句话誊进本子，没有删。',
        '矿站这个冬天会拿到配给，但配给表多了一个被观测的备注栏。'
      ],
      nextHook: '校准站会给渡鸦号发邀请，条件是带上那份被旁听过的记录。',
      continueHint: '第六章从「渡鸦号已经把矿站反馈交给灰塔、换来观测点的通道」继续。',
      continuesTo: 'ch06'
    },
    out_ch5_neutral: {
      chapter: 'ch05',
      title: '章末结果 · 停在四号泊位的一板货',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: '货卸下大半，最后一板留在港区四号泊位，钥匙在货舱帐上；三方各自记下了一句不同的话。',
      consequences: [
        '矿站立刻能用的药品与燃料往下分，争议的两箱贴着「待确认」标签留在泊位。',
        '联合、赤垣、灰塔都拿到了自己那一半满意的答复，也都不满意自己没拿到的那一半。',
        "第四条路让争议暂时搁置。船员各自保留意见，等下一次会议继续谈。"
      ],
      nextHook: '四号泊位的钥匙会有人来对；下一章从这条「没签完的账」继续。',
      continueHint: '第六章从「最后一板货停在四号泊位、三方各自留了一句话」继续。',
      continuesTo: 'ch06'
    }
  },
  nodes: {
    // ---------------------------------------------------------------- 饭点第一轮（下班）
    c5_01: {
      id: 'c5_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '舰上时钟第四次改回按港时走之后，餐厅的灯也跟着调暖了一格。加热台的第三格坏了半个月，铎兰用一根铜销把它别住，每次开盖都要垫着布。',
      next: 'c5_01a'
    },
    c5_01a: {
      id: 'c5_01a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '留言板上的便签按位置分成了两派：靠左的是排班和领用，靠右的是谁欠谁一块糖。板子中间那张观测图今天被换掉了，换成一张用铅笔画的港区轮廓，底角写着诺瓦的名字。',
      next: 'c5_01b'
    },
    c5_01b: {
      id: 'c5_01b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '水槽边堆着四只碗、三把叉子和一个洗干净没擦干的锅。餐厅这一轮只来了四个人，第五份餐具摆在倒数第二个位子上，是铎兰多摆的。',
      next: 'c5_02'
    },
    c5_02: {
      id: 'c5_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "「从另一边揭，蒸汽往这边冒。」他把布垫塞给诺瓦，「今天的汤我多放了半勺盐，觉得咸的话，这壶热水兑一点进去。」",
      next: 'c5_02c'
    },
    c5_02c: {
      id: 'c5_02c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '第四格上温着那盆土豆，盆沿扣着一只倒放的碗，碗底用粉笔写着「留着」。旁边还搁着半块干果饼，用纸包着，纸角被油浸透了。',
      next: 'c5_02d'
    },
    c5_02d: {
      id: 'c5_02d',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「写『留着』的那盆别动。」铎兰拿铜销敲了敲盆沿，「那是给零点班留的。上回有人半夜饿了，说自己是零点班，结果他上的是早班。」他把那半块干果饼往桌子中间推了推，「这个可以动。」',
      next: 'c5_03'
    },
    c5_03: {
      id: 'c5_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「咸不咸另说，」诺瓦拿勺子敲了敲锅沿，「这条船在港区买盐的时候是按吨算的，你现在多放半勺，我得写进配给表。」',
      next: 'c5_03a'
    },
    c5_03a: {
      id: 'c5_03a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "「盐是分开领用的。」薇拉从桌子末端接了一句，声音不大，「上个月领了两罐，罐子上有港务处的封条。如果写进配给表，可以按两罐的总消耗记，锅里的盐量另外调整。」",
      next: 'c5_03b'
    },
    c5_03b: {
      id: 'c5_03b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「看见没有。」诺瓦朝薇拉抬了抬勺子，「这就是我们要的证词。铎兰，从今天起盐的消耗量由夜枭背书，我在备注里写：经手人 AU-11，口味偏咸。」',
      next: 'c5_04'
    },
    c5_04: {
      id: 'c5_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「写。你写完了贴留言板上，我明天再改个标题。」铎兰把锅盖压回去，铜销弹了一下，「写着『谁动的盐』。」',
      next: 'c5_05'
    },
    c5_05: {
      id: 'c5_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '留言板上已经贴着三张纸：上周少了一件洗衣粉的申诉、诺瓦画的一只长着观测臂的猫，以及一张写了又划掉的调座申请。薇拉坐在板子底下那张长桌末端，碗里的东西还没动。',
      next: 'c5_06'
    },
    c5_06: {
      id: 'c5_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「夜枭，你那份是你自己打的，还是铎兰替你盛的？」诺瓦拖着凳子挪过去坐下，「他那勺子的准头比我测角误差还大。」',
      next: 'c5_07'
    },
    c5_07: {
      id: 'c5_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「我自己盛的。」薇拉低头看了一眼，「按刻度。第三档，二百克。」',
      next: 'c5_07a'
    },
    c5_07a: {
      id: 'c5_07a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「关于刻度，我有一件事没算明白。」薇拉把勺子放下，「主食份量按当班强度分档。我今天没有当班，第三档应该算高了一档。」',
      next: 'c5_07b'
    },
    c5_07b: {
      id: 'c5_07b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「高了。」诺瓦伸勺子在她碗里比了一下，「所以你欠船上二十克。记账方式：下次带班的时候多盯二十分钟屏幕，不许眨。」',
      next: 'c5_08'
    },
    c5_08: {
      id: 'c5_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「二百克。」诺瓦盯了她两秒，把自己碗里那勺土豆拨过去一半，「那你替我吃这点误差。观测条例第四条：观察员不浪费变量。」',
      next: 'c5_09'
    },
    c5_09: {
      id: 'c5_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉看了看多出来的那一勺，又看了看诺瓦的碗，把叉子摆正了。「我记下来了。」',
      next: 'c5_10'
    },
    c5_10: {
      id: 'c5_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「她记下来了，」铎兰从加热台那边喊，「诺瓦，这四个字在她那儿算付款。你下次想要东西，先问她要收条。」',
      next: 'c5_11'
    },
    c5_11: {
      id: 'c5_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '门开着，走道那头的泵声一顿一顿地传进来。四个人在这张桌子上各占一个角，谁都没有把调座申请从板上拿下来。',
      next: 'c5_11a'
    },
    c5_11a: {
      id: 'c5_11a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '加热台上剩了一点汤底。诺瓦把碗底的胡萝卜挑出来放到薇拉的盘子边上，薇拉看了一眼，没有推回去。铎兰靠在走道口的门框上，慢慢地擦他那把勺子。',
      next: 'c5_12'
    },
    c5_12: {
      id: 'c5_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '伊芙娜端着餐盘进来的时候，制服外套还没脱，袖标压在胳膊下。「先说一件跟饭有关的坏消息，说完再吃。」她把一张折过的纸放在桌子中间。',
      next: 'c5_13'
    },
    c5_13: {
      id: 'c5_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '诺瓦把那纸转过来看了一眼：「港务处的单子？他们要我们替矿站跑配给。」她抬头，「他们还是租我们的货舱。」',
      next: 'c5_14'
    },
    c5_14: {
      id: 'c5_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'ivna',
      text: "伊芙娜用指节按住纸角，先说明舰方承担的责任。剩下的部分她一条一条念出来，最后落到数字上——本季配给执行序列、一百六十吨、矿站签收。",
      next: 'c5_15b'
    },
    c5_15b: {
      id: 'c5_15b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '「走完这一趟，锚链数据才有理由往下谈第二步。」她把这句留在最后，「到时候要不要谈、跟谁谈，是另一件事。」',
      next: 'c5_15'
    },
    c5_15: {
      id: 'c5_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「一百六十吨。」铎兰把勺子横在锅沿上，「里面有罐头、面粉、压缩燃料，还有一批抗生素。数字对得上，签字的人对不上——配给表上这三个点，去年冬天还是五个。」',
      next: 'c5_16'
    },
    c5_16: {
      id: 'c5_16',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "汤在锅里咕了一下。薇拉握着叉子，指尖蹭到白胶布翘起的一角，她低头把它按平。",
      next: 'c5_17'
    },
    c5_17: {
      id: 'c5_17',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '「第三〇七号站在轮换表上被划掉了。」伊芙娜把话说完，「不补人，只补货。港务处的解释是：站点停采，人员已转移。」',
      next: 'c5_18'
    },
    c5_18: {
      id: 'c5_18',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「转移去哪。」诺瓦把纸重新折好，「这三个字在他们的表里可以指任何地方，包括没有第二张表。」',
      next: 'c5_19'
    },
    c5_19: {
      id: 'c5_19',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「先吃饭。」铎兰把锅盖打开，蒸汽把这句顶了半格，「坏消息说完了。汤还要趁热。」',
      next: 'c5_20'
    },
    c5_20: {
      id: 'c5_20',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '第一顿饭的后半段没有结论。诺瓦把单子压在碗下面，伊芙娜吃完了自己那一份，薇拉把二百克吃干净，连汤底的一小片胡萝卜都没剩。走的时候，铎兰把铜销从锅盖上拆下来，揣进围裙口袋。',
      next: 'c5_21'
    },
    // ---------------------------------------------------------------- 舰桥：三条路线（值勤）
    c5_21: {
      id: 'c5_21',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舰桥的战术台上摊着三张航图，都是旧的。中央屏右下角有一行小字，是安全处的航段备注：本批次执行未归档，责任栏待填。',
      next: 'c5_22'
    },
    c5_22: {
      id: 'c5_22',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「三条路。」伊芙娜在第一张图上点了两下，「联合配给表画的常规线，走外环四点，公开，带识别码。全程四十一小时。」',
      next: 'c5_22a'
    },
    c5_22a: {
      id: 'c5_22a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「三条通道各有各的接口，也各有各的代价。」伊芙娜把三张纸并成一排，「联合的线要走外环四个点，公开，带识别码，全程四十一小时，好处是过点有护航、有补给，坏处是每一段飞行都有人看得见。」',
      next: 'c5_22b'
    },
    c5_22b: {
      id: 'c5_22b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "「赤垣给的影子线最快，三十个小时能到，但它要走一段没有锚点的老航道，进来出去都得靠他们的人手动点名。平时通行很快，但一旦失联，搜救只能沿旧航道逐段找。」",
      next: 'c5_22c'
    },
    c5_22c: {
      id: 'c5_22c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「灰塔的校准线折中，三十四个小时，出的价是让我们在观测点挂一个临时样本码。货本身不受影响，代价是这一趟全在别人的记录里。」',
      next: 'c5_22d'
    },
    c5_22d: {
      id: 'c5_22d',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「三条线都能到，区别只在谁看得见。」你把三张纸的顺序调了一下，「还有返程：四十一小时的线和三十小时的线，回来各剩多少余量？」',
      next: 'c5_22e'
    },
    c5_22e: {
      id: 'c5_22e',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「常规线比校准线多七个小时，回程余量最厚；影子线最薄，油算得上紧贴着走。」诺瓦把四个数字排在一张便签上，「校准线省油，但全程有人看着。」',
      next: 'c5_23'
    },
    c5_23: {
      id: 'c5_23',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「第二条，赤垣的影子线路。不公开，不给识别码，过那段没有锚点的老航道。三十小时。」她把第二张图推近一点，「代价写在图上：谁在走这条线，谁自己知道。」',
      next: 'c5_24'
    },
    c5_24: {
      id: 'c5_24',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「第三条，灰塔观察点替我们标一条校准线。三十四小时，全程被观测，货到之前他们先看见货单。」她停了一下，「三条线的货舱配重不一样，装货顺序得跟着改。」',
      next: 'c5_25'
    },
    c5_25: {
      id: 'c5_25',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「第四条。」诺瓦把一支笔搁在台沿上，「等他们的船队顺路捎一趟。慢，但不用我们担路线。港务处的回执说：排队位置在第七，最快九天。」',
      next: 'c5_26'
    },
    c5_26: {
      id: 'c5_26',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「九天以后矿站的第三〇七号站已经停工两周。」伊芙娜把话说得没有余地，「而且我们的锚链数据在港务处只挂了七十二小时的临时窗口。窗口到期，去谈第二步的资格自动失效。」',
      next: 'c5_27'
    },
    c5_27: {
      id: 'c5_27',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「所以时间只有七十二小时，货只有一百六十吨，矿站有五个点。」你把三张图叠在一起比了比，「港务处给的清单，是按几个点的配额算的？」',
      next: 'c5_28'
    },
    c5_28: {
      id: 'c5_28',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '「三个点。」诺瓦把配给表翻到第二页，「第三〇七、第三〇九、第三一四。剩下两个站不在本季表上，理由栏写着『采掘调整』。」她用笔帽敲了敲那四个字，「调整期间不开伙。」',
      next: 'c5_28a'
    },
    c5_28a: {
      id: 'c5_28a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「我们自己还剩多少。」你把配给表的第二页翻过来，「船员的口粮和矿站的配给是不是分开算的？如果混在一起，明天再有人往汤里多放半勺盐，数字就得重新走一遍。」',
      next: 'c5_28b'
    },
    c5_28b: {
      id: 'c5_28b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「分开的。舰上储备按九十天算，不占这一次的货。」伊芙娜把后半句说慢了，「但如果港区查出我们给矿站加货，扣的是船上的储备。」',
      next: 'c5_28c'
    },
    c5_28c: {
      id: 'c5_28c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「名单上现在有五个站，表上写着三个，货是给一百六十吨的货。」诺瓦的笔尖在第二页上停着，「数字本身没错，错的是它没有把这五个站都当成一个冬天。」',
      next: 'c5_28d'
    },
    c5_28d: {
      id: 'c5_28d',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '中央屏右下角那行小字还挂着：执行未归档，责任栏待填。航图上五个点的两节被掐在中间，正是老航道出口的位置，也是影子线路唯一的重货卸货点。',
      next: 'c5_29'
    },
    c5_29: {
      id: 'c5_29',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '航图上那五个点连成一条弯线，像一串被人从中间掐掉两节的念珠。中间那两节正是老航道出口的位置，也是影子线路唯一的重货卸货点。',
      next: 'c5_30'
    },
    c5_30: {
      id: 'c5_30',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "「都看清了。」伊芙娜坐回自己的位置，安全带扣上，「有意见现在说，四个人都把话讲完，再定返程方案。」",
      next: 'c5_choice_cargo'
    },
    c5_choice_cargo: {
      id: 'c5_choice_cargo',
      kind: 'choice',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '配给表摊在你面前，最后一栏空着执行人。你可以照表执行，也可以在自己家的账上动一刀。',
      choices: [
        {
          id: 'c5_cargo_strict',
          label: '照表执行。三个站在册，一百六十吨一点不动。',
          next: 'c5_31',
          reaction: '你在执行人那一栏写下呼号。诺瓦把表收起来，伊芙娜点了点头，铎兰看着舱单没说话，把笔别回了耳朵上。',
          effects: [
            { type: 'flag', key: 'cargo_strict', value: true },
            { type: 'flag', key: 'supply_choice_recorded', value: true },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c5_cargo_extra',
          label: '从渡鸦号自己的储备里再挪两箱药品，走内部损耗。',
          next: 'c5_31',
          reaction: '你把这句写在备注栏外侧，没有写进表里。铎兰看清楚以后只说了两个字「我去搬」，转身就往货舱走。',
          effects: [
            { type: 'flag', key: 'cargo_extra', value: true },
            { type: 'flag', key: 'supply_choice_recorded', value: true },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c5_cargo_recount',
          label: '先不签。要求港务处当着矿站代表的面重新点一遍五个点。',
          next: 'c5_31',
          reaction: '你把执行人栏推回去。伊芙娜看了你三秒，把这一条写进了当日的船务记录，理由栏照抄你的话，一个字没改。',
          effects: [
            { type: 'flag', key: 'cargo_recount', value: true },
            { type: 'flag', key: 'supply_choice_recorded', value: true },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        }
      ]
    },
    c5_31: {
      id: 'c5_31',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '执行记录在舰桥这边落了档。诺瓦把三张航图的坐标抄进自己的终端，随手把一张折叠过的旧纸条垫在键盘底下——那是她从港务处墙报上抄下来的五站点位，比配给表多了两个。',
      next: 'c5_32'
    },
    c5_32: {
      id: 'c5_32',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      variants: [
        { requires: ['vera_word_used'], text: '薇拉站在二号席位那边没有坐。她的接口耳麦戴得比平时高一点，右腿外侧那只位置空着，绑带已经拆掉了。「三条路线我算过了。」' },
        { requires: ['vera_word_refused'], text: '薇拉站在二号席位那边没有坐。耳麦的线在她手指上绕了半圈又放开。「三条路线我算过了。」' }
      ],
      text: '薇拉站在二号席位那边没有坐，耳麦已经戴上。「三条路线我算过了。」',
      next: 'c5_33'
    },
    c5_33: {
      id: 'c5_33',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「常规线最省燃料，影子线路最快，校准线最清楚。三条都需要有人离船去地面交接。我的夜枭可以拆掉挂架腾一个货位，代价是全程只能靠主传感器飞。」',
      next: 'c5_34'
    },
    c5_34: {
      id: 'c5_34',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「不行。」伊芙娜的回答很快，「拆挂架这种事，你已经用掉过一次权限。这次地面需要带队的人，二号位就是你的位置。」',
      next: 'c5_35'
    },
    c5_35: {
      id: 'c5_35',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「收到。」薇拉把耳麦线压回衣领里，然后把手举了一下，又放下，「……我不确定带队需要我做什么，长机。请给我一张任务卡，或者告诉我跟谁对接。」',
      next: 'c5_36'
    },
    c5_36: {
      id: 'c5_36',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「跟我们对接。」伊芙娜在战术台上点开一个新的窗口，「地面四个人，你负责编队与无线电纪律，我负责签字，铎兰负责货，诺瓦负责记录。谁的清单和实物对不上，你第一个报。」',
      next: 'c5_37'
    },
    c5_37: {
      id: 'c5_37',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉把那句话在自己的终端上敲了一遍，抬头时眼睛落回航图，指尖在夜枭的图标上停了一下。',
      next: 'c5_38a'
    },
    c5_38a: {
      id: 'c5_38a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '通信台这一段放的是安全处的旧录音，来自上次航段审核留下的记录。录音里的声音提到执行栏需要一个能追到人的呼号，也提到怎么飞属于船上的事。播放到末尾，合成音报出时间戳：下午三点十一分。',
      next: 'c5_38'
    },
    c5_38: {
      id: 'c5_38',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      text: '「……记录只要求一件事：执行栏必须有一个能追到人的呼号。你们怎么飞，是你们的事。」',
      next: 'c5_choice_route'
    },
    c5_choice_route: {
      id: 'c5_choice_route',
      kind: 'choice',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三条线在台上亮着。导航席等你报第一段航向，港务处的窗口开始倒数。',
      choices: [
        {
          id: 'c5_route_registry',
          label: '走联合配给表上的常规线，识别码全开。',
          next: 'c5_39',
          reaction: '你报出第一段航向。诺瓦把识别码打开，伊芙娜在日志上写了「按表执行」。铎兰去过道那边清点绑货的索具，一句话没多说。',
          effects: [
            { type: 'flag', key: 'route_registry', value: true },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c5_route_shadow',
          label: '走赤垣的影子线路，不挂识别码。',
          next: 'c5_39',
          reaction: "你把识别码那一栏留空。诺瓦把终端合上一半：「接下来四小时脱离外部跟踪。出了事，只能靠舰上的人处理。」铎兰在货舱门上敲了两下，这是他同意的方式。",
          effects: [
            { type: 'flag', key: 'route_shadow', value: true },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c5_route_calibration',
          label: '让灰塔观察点替我们标一条校准线。',
          next: 'c5_39',
          reaction: '灰塔的握手请求在屏幕上闪了两下就被接受。诺瓦把传输级别调到最低，在备注里写了一行：「观测对象知情。」她让你过目，你没有让她删。',
          effects: [
            { type: 'flag', key: 'route_calibration', value: true },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        }
      ]
    },
    c5_39: {
      id: 'c5_39',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '「第三小队，配给执行序列，出航准备。货舱封舱检查十五分钟后开始，主机试车两分钟。重复：仓门作业区内禁止站位。」',
      next: 'c5_40'
    },
    c5_40: {
      id: 'c5_40',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「下舰桥。」伊芙娜解开安全带，「四十分钟以后机库点名。诺瓦，把矿站那五张站点图打印两份，一份带下去，一份留在舰桥。」',
      next: 'c5_41'
    },
    c5_41: {
      id: 'c5_41',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「两份。」诺瓦把纸从打印机里抽出来，抖了抖，「一份给他们看，一份给我自己看。留在这里的那份给谁，我还没想好。」',
      next: 'c5_hg_01'
    },
    // ---------------------------------------------------------------- 机库：装货与两套清单（值勤）
    c5_hg_01: {
      id: 'c5_hg_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三号机库的冷白灯全开，货板从升降台上一板一板推过来。灰鸢的牵引挂钩挂上了一节平板车，夜枭站在三号位以外，两片侦测翼折在背上，占的地方比昨天大了一圈。',
      next: 'c5_hg_02'
    },
    c5_hg_02: {
      id: 'c5_hg_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "「一百六十七。」铎兰把手里那份货单翻了个面，「港务处报的是一百六，实际推上来一百六十七板。多出来的七板没编号，看封条是矿站那边的旧货，混装清点大概漏了这七板。」",
      next: 'c5_hg_03'
    },
    c5_hg_03: {
      id: 'c5_hg_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "「超出的部分不入册。」伊芙娜站在货板边上，手套已经戴好了，「单子上有几个签字，船上就得能有几件货，每一件都要能在同一份账上对到。」",
      next: 'c5_hg_04'
    },
    c5_hg_04: {
      id: 'c5_hg_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '铎兰把笔咬在嘴里没接话。他把货单摊在平板车上，从围裙口袋里抽出一支短铅笔，在第一页的边框外画了一道竖线，又在第二页同样的位置画了一道。',
      next: 'c5_hg_04a'
    },
    c5_hg_04a: {
      id: 'c5_hg_04a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '货板上印着两种封条，一种是港务处的蓝印，一种没有印，只在边上刷了一道红漆。乘务口那边的记录员来回走了两趟，每次经过那七板都低头看一眼编号。',
      next: 'c5_hg_04b'
    },
    c5_hg_04b: {
      id: 'c5_hg_04b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉蹲在最靠边那一板前面看封条，看得很久。「这一板的封条是从里面压的，」她说，「如果在港区被查，一掀就开。药和燃料混在同一板，查的时候会先点到它。」',
      next: 'c5_hg_04c'
    },
    c5_hg_04c: {
      id: 'c5_hg_04c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '「眼不错。」铎兰把短铅笔夹到耳后，「丫头，你把这一板单独标出来，装到最后装。第一个上板的是最容易被掀的，最后一个上的，他们点名点到最后就懒得再翻。」',
      next: 'c5_hg_05'
    },
    c5_hg_05: {
      id: 'c5_hg_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「你在画什么。」薇拉抱着一个封箱带站在货板另一头，看得很认真，「两页的线位置不一样。第一页画在格子里，第二页画在外面。」',
      next: 'c5_hg_06'
    },
    c5_hg_06: {
      id: 'c5_hg_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '「两套清单，丫头。」铎兰把纸张反过来给她看，「格子里那套给港务处，一百六十，件件有编号。格子外面那套给矿站，一百六十七，多的七板是抗生素和压缩燃料，走我这条线的账。」',
      next: 'c5_hg_07'
    },
    c5_hg_07: {
      id: 'c5_hg_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「差额由谁承担。」薇拉问得很直，「如果交接的时候被查，第一份清单的签字人是我。」',
      next: 'c5_hg_08'
    },
    c5_hg_08: {
      id: 'c5_hg_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "「所以我不让你签。」铎兰把那支短铅笔搁在她手里的封箱带上，「两套清单我做了十四年，签字的从来是我。今天你负责清点，账由我来签。出了差额，他们找我。」",
      next: 'c5_hg_09'
    },
    c5_hg_09: {
      id: 'c5_hg_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉低头看那支铅笔。她把封箱带换到左手，右手把笔接过去，捏在指节中间，没有往口袋里放。',
      next: 'c5_hg_10'
    },
    c5_hg_10: {
      id: 'c5_hg_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '伊芙娜站在两排货板中间，看了那一眼，没有走过去。她把手套往上拉了拉，只在转身的时候说了一句：「封舱检查，按实际货物点。谁点的谁报数。」',
      next: 'c5_hg_11'
    },
    c5_hg_11: {
      id: 'c5_hg_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「铎兰。」你走到货板那边，「两套清单的事，得在装完货以前定下来。这件事不能既挂着又不挂着。你现在手里拿的算哪一套，就说哪一套。」',
      next: 'c5_choice_manifest'
    },
    c5_choice_manifest: {
      id: 'c5_choice_manifest',
      kind: 'choice',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '两页纸铺在平板车上，同样的一百六十吨，两份不同的责任。铎兰在等你说话，薇拉手里的铅笔还没有收。',
      choices: [
        {
          id: 'c5_manifest_one',
          label: '只做一套清单，按实际货量报，多出的七板也写进去。',
          next: 'c5_hg_12',
          reaction: '「行。」铎兰把两页纸叠在一起，撕掉外面那页的边框，重新抄了一份一百六十七吨的货单，「报实数，签字还是我。麻烦从暗的变成明的，至少能当面吵。」',
          effects: [
            { type: 'flag', key: 'manifest_single', value: true },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c5_manifest_two',
          label: '两套清单照旧带，但第二套也要有你自己的签字。',
          next: 'c5_hg_12',
          reaction: '你在第二页的角落写下呼号。铎兰看了很久，把纸收进围裙里：「那你就得跟我一起站在卸货口。」这句话说得很平，他把平板车推走了。',
          effects: [
            { type: 'flag', key: 'manifest_two', value: true },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c5_manifest_site',
          label: '两套清单都带，但把第二套交给矿站的人自己决定怎么用。',
          next: 'c5_hg_12',
          reaction: '「交给他们。」铎兰重复了一遍，笑了一下，「他们那儿的规矩我知道：签了字的单子压在抽屉里，没签字的单子贴在井口的墙上。行，就这样。」',
          effects: [
            { type: 'flag', key: 'manifest_site', value: true },
            { type: 'standing', who: 'scarlet', amount: 1 }
          ]
        }
      ]
    },
    c5_hg_12: {
      id: 'c5_hg_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '装货装到第三十二板的时候，吊索卡了一次。铎兰爬上去把滑轮组敲了两下，货板落回平车上，震起来的一层灰落在夜枭的左脚上，薇拉拿袖口蹭掉了，顺手把踏板上的一块胶带压平。',
      next: 'c5_hg_13'
    },
    c5_hg_13: {
      id: 'c5_hg_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '「四十分钟以后关舱门。」铎兰从吊车上滑下来，把扳手插回腰间，「灰鸢的右液压管我换了新的，别用它拖平板车拖太久。夜枭的副油箱加满，你要带队，留够回来的余量。」',
      next: 'c5_hg_13a'
    },
    c5_hg_13a: {
      id: 'c5_hg_13a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '灰鸢的牵引挂钩上挂着一节平板车。灰鸢左肩那块颜色不一样的替换件上落了一层货舱灰，铎兰拿袖子擦了半面，另外半面留给了第二天。',
      next: 'c5_hg_13b'
    },
    c5_hg_13b: {
      id: 'c5_hg_13b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "「夜枭两个侦测架都装好了。」铎兰扣上工具箱，「你上次拆挂架拆得我心疼，这回我先把库存重新排过，原装件都在。飞你的，回来照原样交给我。」",
      next: 'c5_hg_13c'
    },
    c5_hg_13c: {
      id: 'c5_hg_13c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「收到。」薇拉站在夜枭的左脚边，把牵引链从挂钩上取下来，「两个侦测架、两只手、两条腿。我这台机的固定件都在，报告里我会照实写。」',
      next: 'c5_hg_14'
    },
    c5_hg_14: {
      id: 'c5_hg_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「副油箱满载是三点七小时。」薇拉把数字报完，顿了一下，「四小时出头的航段。给我两分钟，我把回程的余量算清楚再上机。」',
      next: 'c5_hg_15'
    },
    c5_hg_15: {
      id: 'c5_hg_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: "「我给你三分钟。」铎兰把扳手在掌心敲了一下，「算不完就喊我，我给你加一格油，余量先留足了，再报方案。」",
      next: 'c5_orb_01'
    },
    // ---------------------------------------------------------------- 轨道出发（值勤）
    c5_orb_01: {
      id: 'c5_orb_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '渡鸦号从港区上空的临时锚位脱开时，晨昏线正在沧澜的云带上走。船体边缘切进光里，行星的蓝色弧线在下面铺开，远处几枚锚点浮标排成一条冷光的线。',
      next: 'c5_orb_02'
    },
    c5_orb_02: {
      id: 'c5_orb_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「第三小队编队通话检查。」薇拉的声音从第二频道进来，比平时慢半拍，「长机，二号位到位。灰鸢在左前，距离二百四十米，速度差零点四。」',
      next: 'c5_orb_03'
    },
    c5_orb_03: {
      id: 'c5_orb_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「收到，二号位。」你把灰鸢推到编队线外面半格，「你在我的右手边，离货舱远一点。第一次带队，规矩按手册：我先动，你跟。」',
      next: 'c5_orb_04'
    },
    c5_orb_04: {
      id: 'c5_orb_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「按手册。」她把这句复述了一遍，然后频道里安静了两秒，「长机。手册上没有写这一条：如果我判断你错了，我该在什么时候说。」',
      next: 'c5_orb_04a'
    },
    c5_orb_04a: {
      id: 'c5_orb_04a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第一段过点以后，编队进入一段没有锚点的空白航道。渡鸦号的货舱在船腹里压着，加速比平时慢了一格，灰鸢和夜枭的编队距离被拉开到三百米。',
      next: 'c5_orb_04b'
    },
    c5_orb_04b: {
      id: 'c5_orb_04b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「长机，编队距离拉开到三百二十米。」薇拉的报点比刚才稳了，「我没有偏离你的线。按照通行手册，僚机在三百米以上间距应该主动收回，请确认。」',
      next: 'c5_orb_04c'
    },
    c5_orb_04c: {
      id: 'c5_orb_04c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「不用收。」你把货舱的晃动压平，「过点的时候留一点余量给货。你按自己的判断走，我盯着你。」',
      next: 'c5_orb_05'
    },
    c5_orb_05: {
      id: 'c5_orb_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「在动手之前说。」你把导航点报进编队链，「你说完，我要是还不改，你就照我说的飞——那笔账归我。」',
      next: 'c5_orb_06'
    },
    c5_orb_06: {
      id: 'c5_orb_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '频道里那两秒的安静又回来了。然后夜枭的位置灯从左前移到右后，差一点点，落在你报的编队线上。',
      next: 'c5_orb_07'
    },
    c5_orb_07: {
      id: 'c5_orb_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「二号位到位。」这一次她把距离报全了，「长机，我记住了。」',
      next: 'c5_orb_08'
    },
    c5_orb_08: {
      id: 'c5_orb_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「编队不错。」伊芙娜在舰桥上看着战术台，声音从主频道下来，「货舱封舱正常。第一段航程按你选的那条线走，下一段进来以前，全体保持在链上。」',
      next: 'c5_orb_09'
    },
    c5_orb_09: {
      id: 'c5_orb_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「港务处发来第二封确认。」诺瓦把光标停在一行字上，「他们问：执行人呼号已记录，是否确认全程按配给表作业。回执需要在一小时内答复。」',
      next: 'c5_orb_10'
    },
    c5_orb_10: {
      id: 'c5_orb_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「照实回。」你看着那个光标，「我们在走哪条线，表上就写哪条线。别在回执上比货单还干净。」',
      next: 'c5_orb_11'
    },
    c5_orb_11: {
      id: 'c5_orb_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「照实。」诺瓦敲下去，「已确认。备注栏我加了一句：本批次货量以实际点收为准。这句话是给矿站看的，也是给后面那些看回执的人看的。」',
      next: 'c5_orb_12'
    },
    c5_orb_12: {
      id: 'c5_orb_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '沧澜在编队下面慢慢转过去。进入第一段航程之后，频道里只剩下速度报点和推进器的底噪，货舱在船腹里稳稳地压着，一百六十七板的重量让渡鸦号的加速比平时慢了一格。',
      next: 'c5_orb_13'
    },
    c5_orb_13: {
      id: 'c5_orb_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第二段过点以前，渡鸦号把航向偏了两度，绕开一只在夜色里翻着滚的无标识集装箱。诺瓦在终端上给它入了一个临时编号。',
      next: 'c5_orb_14'
    },
    c5_orb_14: {
      id: 'c5_orb_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「入库了一个编号：无标识集装箱，位置已记。」诺瓦在终端上敲完，「两件事。航迹在别人的观测表上会多一个折角；加热台上的水开了，谁去关一下。」',
      next: 'c5_orb_15'
    },
    c5_orb_15: {
      id: 'c5_orb_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「我去。」薇拉的声音从第二个频道进来，比刚才松了半格，「长机，编队间距保持二百五十米，我离舱两分钟。这个时间不需要调整航向。」',
      next: 'c5_orb_16'
    },
    c5_orb_16: {
      id: 'c5_orb_16',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「两分钟。」铎兰在餐厅那头把水壶从加热台上提下来，「水壶的把手朝里放，别朝着过道。上回有人端着开水过弯，把自己的手烫了，还怪船转弯太快。」',
      next: 'c5_orb_17'
    },
    c5_orb_17: {
      id: 'c5_orb_17',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「把手朝里。」薇拉复述了一遍，水壶盖合上的声音从频道里传过来，「排风也开着。长机，我回位了，编队间距二百五十米，速度差零点二。」',
      next: 'c5_orb_18'
    },
    c5_orb_18: {
      id: 'c5_orb_18',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '频道里安静了几秒。然后第二个频道又响了一次，声音比刚才低：「长机。烧水这件事，以前有人教过你吗？」',
      next: 'c5_orb_19'
    },
    c5_orb_19: {
      id: 'c5_orb_19',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '「没有。谁都被烫过一两回，烫了就记住了。」你盯着编队线，「你要记的是过弯的时候先把壶放下。别的都靠烫。」',
      next: 'c5_orb_20'
    },
    c5_orb_20: {
      id: 'c5_orb_20',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「记住了。」薇拉停了一下，「那这条也记在跟你有关的表里。表名叫：没有手册的部分。」',
      next: 'c5_orb_21'
    },
    c5_orb_21: {
      id: 'c5_orb_21',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '地面段开始时，夜枭挂着一节平板货斗脱离编队，跟着引导信号降进港区东侧，灰鸢跟在它后面；伊芙娜、铎兰、诺瓦坐在货斗的随货位上一起下去。渡鸦号留在轨道上：一百六十七板全部下去点交，最后那二十七板按计划由矿站的驳船在轨道上接走。',
      next: 'c5_ct_01'
    },
    // ---------------------------------------------------------------- 港区：地面交涉（值勤）
    c5_ct_01: {
      id: 'c5_ct_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '交接地点定在港区东侧的水路转运站：一栋两层的低楼，楼下是装卸轨，楼上是给过路船只留的交接室。黄昏过后下过一场小雨，街灯和店里的灯同时亮着，地面上的水映着管线和招牌。',
      next: 'c5_ct_02'
    },
    c5_ct_02: {
      id: 'c5_ct_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '转运站的卸货口停着两辆旧牵引车，其中一辆的挡板上焊过补丁。矿站来了三个人，领头的中年男人手里拎着一只铁盒。',
      next: 'c5_ct_03'
    },
    c5_ct_03: {
      id: 'c5_ct_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「渡鸦号，配给执行序列。」伊芙娜把封好的文件夹放在桌上，「一百六十七板，按实际点收交接。签收人写谁，你们的章就在谁手里。」',
      next: 'c5_ct_04'
    },
    c5_ct_04: {
      id: 'c5_ct_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '领头的人没有碰那只文件夹。他把铁盒放到桌角，拧开盖子，里面是半盒浑浊的水，底下沉着一层白色的粉状物。',
      next: 'c5_ct_05'
    },
    c5_ct_05: {
      id: 'c5_ct_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '「第三〇七号的泵房上周开始出水带渣，」他说话很慢，先把铁盒推过桌子的一半，「回水管的滤网两天一换。你们的表上写着我们停采、人员转移。停采以后，井底那二十六个人住哪间房。」',
      next: 'c5_ct_05a'
    },
    c5_ct_05a: {
      id: 'c5_ct_05a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "他从工装内袋里抽出一张对折过很多次的纸，纸边已经起了毛。纸上手写着一份名单，二十几行，每一行的末尾有日期，最下面几行的日期是上周。",
      next: 'c5_ct_05b'
    },
    c5_ct_05b: {
      id: 'c5_ct_05b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '伊芙娜把那张纸接过去，从上往下看了三遍，没有数出声。她把它平放在文件夹旁边：「这些名字我只认两个。」',
      next: 'c5_ct_05c'
    },
    c5_ct_05c: {
      id: 'c5_ct_05c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '「水臭的那天起，夜班的人睡不着，」领头的男人说，「人一睡不着就容易吵。上个月为了排风吵了两回，我把两个班拆开了。你们要是卸完就走，下周泵一停，我连拆班的人都凑不齐。」',
      next: 'c5_ct_06'
    },
    c5_ct_06: {
      id: 'c5_ct_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "「表里只列了站点状态。」伊芙娜没有去碰那个铁盒，「我把这二十六个人和水泵的情况一起记进去。水样我看到了。」",
      next: 'c5_ct_07'
    },
    c5_ct_07: {
      id: 'c5_ct_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '楼上有人在喊牵引车让道，声音隔着地板传下来。铎兰已经下楼去开货舱，诺瓦在窗边的小桌上架起了记录终端，薇拉站在门口，把三个矿站工装身上的编号都看了一遍，报进终端。',
      next: 'c5_ct_08'
    },
    c5_ct_08: {
      id: 'c5_ct_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「五个点，你们来了三个人。」薇拉把终端转过来对着桌子，「表上在册的是三点，你们两个没在册。请说一下你们代表哪两个站，我好把交接记录写全。」',
      next: 'c5_ct_09'
    },
    c5_ct_09: {
      id: 'c5_ct_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "领头的人把手从铁盒上挪开，看了薇拉一眼，又看回伊芙娜。「第三〇九和第三一四，」他说，「第三〇七的人来不了，泵房离不了人。这个姑娘问得对，签收按站点记，写上这两个站号。」",
      next: 'c5_ct_10'
    },
    c5_ct_10: {
      id: 'c5_ct_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '卸货从楼下开始。牵引车一次拖两板，铎兰一板一板解索具，薇拉在梯口报板号。报到第八十七的时候，楼下传来第一声闷响。',
      next: 'c5_ct_11'
    },
    c5_ct_11: {
      id: 'c5_ct_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "「停。」铎兰的声音从舱里上来，压得很低，「东边第二列轨道上亮了两盏灯，位置有点怪。诺瓦，你看一下街对面那栋楼的顶。」",
      next: 'c5_ct_12'
    },
    c5_ct_12: {
      id: 'c5_ct_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "「看到了。」诺瓦没有抬头，手已经在终端上落字，「四点方向，两个观测器和一具瞄准镜。这套配置用于火控观测。信号特征我在霜环锚地见过一次，是灰塔的商船序列。」",
      next: 'c5_ct_13'
    },
    c5_ct_13: {
      id: 'c5_ct_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「他们不动手，他们在看货怎么分。」伊芙娜把文件夹按回桌面，「继续卸。卸货速度不变，任何人不要往楼上看。」',
      next: 'c5_ct_14'
    },
    c5_ct_14: {
      id: 'c5_ct_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第八十七板到第一百三十板卸得比前面快。薇拉把板号一路报完，中间有一板封条被雨打湿了，她拿封箱带重新压了一道，把湿的那截撕下来收进兜里。',
      next: 'c5_ct_15'
    },
    c5_ct_15: {
      id: 'c5_ct_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: "「还剩下二十七板。」你站到桌子这边，把货单翻到最后一页，「三〇七的水泵问题，得用滤网和密封件来修。我可以把清单后面那部分留下，你们自己看怎么分。」",
      next: 'c5_ct_16'
    },
    c5_ct_16: {
      id: 'c5_ct_16',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '领头的人把文件夹翻开，手指压在最后一页上，没有翻过。他抬眼看了看伊芙娜。',
      next: 'c5_ct_17'
    },
    c5_ct_17: {
      id: 'c5_ct_17',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「签收单上需要三个名字，」伊芙娜把笔放在文件夹上，「你们给两个名字，我这一栏就写：实际点在册两点，第三点未到。这个写法他们那边看得懂。」',
      next: 'c5_ct_18'
    },
    c5_ct_18: {
      id: 'c5_ct_18',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '笔在桌上放了很久。最后是那个领头的拿起来，在第二行写下站号，又把笔推给旁边的人。签完之后他把铁盒盖好，推回到桌子中间，这次是推给伊芙娜。',
      next: 'c5_ct_19'
    },
    c5_ct_19: {
      id: 'c5_ct_19',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「水样我带走一半。」伊芙娜把铁盒交给诺瓦，「当样本编号存档。灰塔给我们的窗口只够运货，不够救人；下一趟谈的时候，桌上至少有这半盒水。」',
      next: 'c5_ct_20'
    },
    c5_ct_20: {
      id: 'c5_ct_20',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '「样本登记号我写 W-26。」诺瓦把铁盒装进手提箱，「泵房站着二十六个人，样品编号就用这个数。两个数字放在一起，看报告的人自己会想。」',
      next: 'c5_ct_20a'
    },
    c5_ct_20a: {
      id: 'c5_ct_20a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '矿站的人从牵引车的驾驶室里搬下来一只麻袋，里面是烤过的土豆和几块压得很实的干果饼。领头的男人把麻袋放在门口，说这是回程的干粮，装具上的事情他不用港务处的批条。',
      next: 'c5_ct_20b'
    },
    c5_ct_20b: {
      id: 'c5_ct_20b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '「我不吃。」薇拉把麻袋往舱里推了一步，没有拿，「回程我要飞，吃东西会在高过载的时候出问题。土豆你们带回去，第三〇七的人比我们更需要。」',
      next: 'c5_ct_20c'
    },
    c5_ct_20c: {
      id: 'c5_ct_20c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '「你带回去，丫头。」铎兰把麻袋拎起来往机上走，「你不吃，别人吃。等回到船上，离了座舱，你再决定要不要尝一口。」',
      next: 'c5_ct_20d'
    },
    c5_ct_20d: {
      id: 'c5_ct_20d',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「留着。」你让铎兰把麻袋塞进货舱最上面一格，「回船上以后再说。现在先把这一百四十板的板号报完。」',
      next: 'c5_bt_01'
    },
    // ---------------------------------------------------------------- 拦截（战斗）
    c5_bt_01: {
      id: 'c5_bt_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '地面交接办完，最后那二十七板装回货斗，跟着两台机体抬回轨道：矿站的接驳驳船在渡鸦号外侧等着，索具车把货斗里的板一板一板吊过去。灰鸢和夜枭一左一右贴在驳船外侧，两台机体的航行灯在轨道上排成一条线。吊到第九板的时候，三道尾迹从东侧的浮标后面切进来：三具无人机，没有识别码，航向压着驳船的系货架。',
      next: 'c5_bt_02'
    },
    c5_bt_02: {
      id: 'c5_bt_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '「防空警报按转运段流程走，两台机体先贴上去。」伊芙娜的声音从舰内频道下来，「灰鸢带夜枭，把它们压在转运轴以外。驳上那二十七板是矿站过冬的东西，谁都不许往驳船上打。」',
      next: 'c5_bt_03'
    },
    c5_bt_03: {
      id: 'c5_bt_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「二号位在位。」薇拉的频道里没有多余的字，「长机，探测翼收着飞。我用主传感器测它们的数据链，三具里有两具在同一个频率上。」',
      next: 'c5_bt_04'
    },
    c5_bt_04: {
      id: 'c5_bt_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '「收到。你盯频率，我和它们贴。第一具我先撞出界，你跟在我右后，别让第三具绕到你后面。」',
      next: 'c5_bt_05'
    },
    c5_bt_05: {
      id: 'c5_bt_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢从驳船底下翻上去，左肩的替换件擦过吊索。第一具无人机在八百米外做了一个短横滚，把航向对准了系货架上那九板货。',
      next: 'c5_bt_06'
    },
    c5_bt_06: {
      id: 'c5_bt_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'nova',
      text: '「港务处的护航不上线。」诺瓦在舰桥上报，「他们说港区的防空只管到云底。索具车我让他们停在第九板了，剩下的货都锁在吊索上。」',
      next: 'c5_bt_07'
    },
    c5_bt_07: {
      id: 'c5_bt_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: '「那就我们自己管。」伊芙娜把驳船外侧的空域坐标念了一遍，「灰鸢，把它们往浮标圈外压。圈外面是空航道，没有别的船。」',
      next: 'c5_bt_08'
    },
    c5_bt_08: {
      id: 'c5_bt_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第一具无人机扑向系货架，灰鸢从侧面切进去，把它撞得翻了半圈，撞在锚点浮标的支架上，裂成两团火。第二具在同一时间拉开距离，第三具不见了。',
      next: 'c5_bt_09'
    },
    c5_bt_09: {
      id: 'c5_bt_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '「第三具脱队了。」薇拉报得很快，「它没有跟着货走，它在往渡鸦号的接收轴爬。长机，我请求离队跟它，四分钟。」',
      next: 'c5_bt_10'
    },
    c5_bt_10: {
      id: 'c5_bt_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '「不准离队。」你把第二具的位置报给伊芙娜，「它爬它的，我们先把地上这两具收干净。你盯住它的频率，别丢。」',
      next: 'c5_bt_11'
    },
    c5_bt_11: {
      id: 'c5_bt_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「收到。」夜枭的机身往左收了一半，探测臂抬起，「频率还在。它贴着货舱的外板走——长机，它想上我们的接收架。」',
      next: 'c5_bt_12'
    },
    c5_bt_12: {
      id: 'c5_bt_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: '「渡鸦号听到。」伊芙娜的频道切到舰内，「主机降到最低档，货舱门收一半。把那一具放进我们自己的射界，别贴着驳船打。」',
      next: 'c5_bt_13'
    },
    c5_bt_13: {
      id: 'c5_bt_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第二具无人机被灰鸢压到浮标圈外，失去动力以后砸在一只空的转运架上。驳船左侧鼓起两团白光，索具车停在第九板，货斗里最后十八板还锁在吊索上，一道封条都没有松。',
      next: 'c5_bt_15'
    },
    c5_bt_15: {
      id: 'c5_bt_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '「回舰回收，别碰索具上的板子。」你松开操纵杆，「第三具自毁前在接收轴上绕了一圈，主回路的电压冲击让泵组报了错。夜枭，跟我回库。板号报到哪一板，你接着报哪一板。」',
      next: 'c5_bt_16'
    },
    c5_bt_16: {
      id: 'c5_bt_16',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: "「一百四十板。」薇拉报完，又把刚才那一截补上，「长机，那两具撞下来的机体上没有标识，涂层和霜环锚地那艘无人母舰是一种。货物一出舱，它们就迎了上来，埋伏点在转运线上。」",
      next: 'c5_bt_17a'
    },
    c5_bt_17: {
      id: 'c5_bt_17',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "夜枭回库的时候，右腿的支腿在货舱地板上滑了半米。薇拉一出座舱就叫住了转运员，从兜里掏出那截湿封条，交到他手上。然后她才回头查看机体。",
      next: 'c5_bt_17b'
    },
    c5_bt_17a: {
      id: 'c5_bt_17a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '两具残骸的碎片还挂在驳船的网兜上。索具车把最近一具的电池组钳下来，装进铁盘递进货舱；铎兰在登记表上按了手印。',
      next: 'c5_bt_17'
    },
    c5_bt_17b: {
      id: 'c5_bt_17b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「回舰。」伊芙娜站在货舱门口，手套上沾了灰，「矿站的驳船退到射界外面等，二十七板原样收回来。诺瓦的报告里会写：渡鸦号在转运段处置三具无人机，驳船无人受伤，货物无损。至于那第三具上哪去了，由我们在轨道上写。」',
      next: 'c5_ms2_01'
    },
    // ---------------------------------------------------------------- 第二顿饭（下班）
    c5_ms2_01: {
      id: 'c5_ms2_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '两台机体回库、货斗吊回船腹、二十七板重新锁进货舱，前后用了四十分钟。餐厅里的人没有等齐就开火了：加热台第三格这回彻底不亮，铎兰把锅端到墙上的备用接口煮，锅沿上还挂着今天中午没洗掉的一小圈盐渍。',
      next: 'c5_ms2_02'
    },
    c5_ms2_02: {
      id: 'c5_ms2_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「地面交接那四十分钟我一直站在窗边。」诺瓦把两条辫子重新扎紧，「观测记录：港区东侧的灯在雨里是两种颜色，仓库那边的偏黄，店那边偏白。写不写进报告？」',
      next: 'c5_ms2_03'
    },
    c5_ms2_03: {
      id: 'c5_ms2_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「写。」铎兰盛汤的时候没抬头，「你上次把洗衣粉那一行也写了，观测局照样给你回执。他们什么都收，收完了按他们的规矩摆。」',
      next: 'c5_ms2_04'
    },
    c5_ms2_04: {
      id: 'c5_ms2_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'nova',
      text: "「这次报告我把缺货和交接情况单独列出来了。」诺瓦把终端推到桌子中间，屏幕上是一段已经排版好的文字，「我写的是：矿站反馈，第三〇七号站泵房出水带渣，装卸交接时执行人未按在册三点签字。」",
      next: 'c5_ms2_05'
    },
    c5_ms2_05: {
      id: 'c5_ms2_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '铎兰把勺子放下，凑过去看那两行字。他看了足有十几秒，然后坐回去，把碗端起来又放下。',
      next: 'c5_ms2_06'
    },
    c5_ms2_06: {
      id: 'c5_ms2_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「你知道这段话发出去以后会怎么样。」他问得很平，「灰塔会把它抄进样本表。矿站的水、井底的人数、谁没在册，全在一行里，他们连问都不用问。」',
      next: 'c5_ms2_07'
    },
    c5_ms2_07: {
      id: 'c5_ms2_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「知道。」诺瓦把终端又推近一点，「所以我不写他们不该知道的：没有姓名，没有坐标，只有站号和水。剩下的那一半，是我自己留着，不发给任何一边。」',
      next: 'c5_ms2_08'
    },
    c5_ms2_08: {
      id: 'c5_ms2_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '伊芙娜坐在桌子最边上，一直没说话。她把碗里的汤喝到一半，抬头看了看诺瓦的屏幕，又看了看门。',
      next: 'c5_ms2_09'
    },
    c5_ms2_09: {
      id: 'c5_ms2_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'ivna',
      text: "「加一句，」伊芙娜终于开口，「执行记录里那条『第三点未到』，保留原文。让我签字的那一行原样挂着，谁看谁明白。」",
      next: 'c5_ms2_10'
    },
    c5_ms2_10: {
      id: 'c5_ms2_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '诺瓦照做了。她敲字的时候很慢，一行字敲了三遍才定稿，最后把终端转过来，让桌上每个人看了一遍。',
      next: 'c5_ms2_11'
    },
    c5_ms2_11: {
      id: 'c5_ms2_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '薇拉的碗放在她面前，里面是半份汤和两块罐头肉。她把肉切成很小的角，切完以后才发现自己切得太整齐了，动叉子的时候慢了一拍。',
      next: 'c5_ms2_12'
    },
    c5_ms2_12: {
      id: 'c5_ms2_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「那个人的手。」薇拉看着自己的盘子说，「拎铁盒的那只手，虎口有一圈旧疤，和我们右臂内侧的接口疤的位置不一样。他们那边的人也会受伤，也会带疤，只是没有接口。」',
      next: 'c5_ms2_13'
    },
    c5_ms2_13: {
      id: 'c5_ms2_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「伤都长在肉上，不长在壳上。」铎兰把自己那份罐头推过去半块，「你观察得对。下一个问题：你吃不吃这半块，我不爱听客气话。」',
      next: 'c5_ms2_14'
    },
    c5_ms2_14: {
      id: 'c5_ms2_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉看了那半块肉两秒，把它叉到自己碗里。「吃。」她把叉子摆正，又补上两个字：谢谢，并说明这一句没有用错场合。',
      next: 'c5_ms2_15'
    },
    c5_ms2_15: {
      id: 'c5_ms2_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「进步很大。」诺瓦笑出声，「上次你在军需栈房对石师傅说『请多指教』，他以为你要跟他学搬箱子。」',
      next: 'c5_ms2_16'
    },
    c5_ms2_16: {
      id: 'c5_ms2_16',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「我以为交接流程要先问候。」薇拉吃完那半块，把叉子摆回盘沿，「石师傅后来教我认了三天的货签，他没有收学费。我记下来了。」',
      next: 'c5_ms2_17'
    },
    c5_ms2_17: {
      id: 'c5_ms2_17',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '「货签的事你们以后再算。」伊芙娜把空碗叠起来，「诺瓦，报告发出去之前给我看一眼。铎兰，反应堆舱的泵组从接收轴那一下就在报错，你什么时候下去？」',
      next: 'c5_ms2_18'
    },
    c5_ms2_18: {
      id: 'c5_ms2_18',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「吃完就去。」铎兰把碗底最后一口喝完，「耦合件的备件在四号柜第三层，我得先找出来。谁跟我下去谁带灯，我两只手都不够用。」',
      next: 'c5_choice_meal'
    },
    c5_choice_meal: {
      id: 'c5_choice_meal',
      kind: 'choice',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '桌上的碗推来推去，谁都没有先站起来。诺瓦的终端还亮着，伊芙娜的文件夹压在盐罐下面，薇拉把叉子摆成一条直线。',
      choices: [
        {
          id: 'c5_meal_table',
          label: '在桌上把这个补给季的账算完，谁有意见现在就说完。',
          next: 'c5_ms2_19',
          reaction: "你把碗推开，留在座位上。铎兰重新坐下，把裤腿的护垫解了。接下来的半个钟头里，你们把账一条条摊在桌上核对：燃料、药、签字的责任、下一次还要不要走这条路。",
          effects: [
            { type: 'flag', key: 'meal_table_talk', value: true },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c5_meal_galley',
          label: '先洗碗。锅还热着，把话说在手里的活上。',
          next: 'c5_ms2_19',
          reaction: '你把锅端到水槽边。薇拉跟过来接过第二块布，诺瓦把碗按顺序摞好，伊芙娜卷起袖口洗了最后一只。锅里的水凉下去的时候，那批货该怎么算也差不多说清楚了。',
          effects: [
            { type: 'flag', key: 'meal_galley_chores', value: true },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        },
        {
          id: 'c5_meal_alone',
          label: '散了吧，各自去干活；这顿饭就到这里。',
          next: 'c5_ms2_19',
          reaction: "你把碗收走，先出了餐厅。门在身后合上，走道里泵声依旧。餐厅里还在翻账本。你沿着走道回舱，打算晚一点再谈。",
          effects: [
            { type: 'flag', key: 'meal_broke_early', value: true }
          ]
        }
      ]
    },
    c5_ms2_19: {
      id: 'c5_ms2_19',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "餐厅收拾干净以后，留言板上多了一张纸，是那张被划掉又划掉的调座申请。有人把它压平了，用铜销别在板子正中间，纸角还有几道旧折痕。",
      next: 'c5_ms2_24'
    },
    c5_ms2_24: {
      id: 'c5_ms2_24',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '水槽里剩下的碗底有一层薄薄的淀粉浆，诺瓦拿冷水一冲就掉了。她把抹布拧干搭在架子上，又顺手把台面上那圈盐渍擦成一小堆，用指尖弹进垃圾桶。',
      next: 'c5_ms2_25'
    },
    c5_ms2_25: {
      id: 'c5_ms2_25',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「我算过一件事。」诺瓦把抹布挂好，「这条船一天里真正所有人都在餐厅的时间，只有开饭的头二十分钟。其余时间这里就我们三个，谁值勤谁下船，谁在看观测。」',
      next: 'c5_ms2_26'
    },
    c5_ms2_26: {
      id: 'c5_ms2_26',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「二十分钟。」薇拉把这个数字重复了一遍，「那这二十分钟里，大家的说法不一定一致，也算正常。」',
      next: 'c5_ms2_27'
    },
    c5_ms2_27: {
      id: 'c5_ms2_27',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「太正常了。」铎兰把那半块没吃完的干果饼用纸重新包好，「船上七年，我见过的吵架八成是在开饭以前。吵完了谁都得吃饭，锅就那一口。」',
      next: 'c5_ms2_20'
    },
    c5_ms2_20: {
      id: 'c5_ms2_20',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '临走以前，铎兰把那盆土豆从加热台上端下来，换成一只更大的盆，重新扣上那只倒放的碗。碗底的粉笔字被擦掉了一半，他拿手指补了两笔：零点班，热的。',
      next: 'c5_ms2_21'
    },
    c5_ms2_21: {
      id: 'c5_ms2_21',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「你给零点班留的那盆，比刚才端上桌的还多。」诺瓦把抹布挂在钩上，「这条写不写进配给表？」',
      next: 'c5_ms2_22'
    },
    c5_ms2_22: {
      id: 'c5_ms2_22',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "「写。」铎兰把围裙解下来搭在椅背上，「写清楚：额外一勺，经手人铎兰，理由栏写『夜里有人要开泵』。」他顿了顿，「这次先核一下零点班的名单，省得又送到隔壁班去。」",
      next: 'c5_ms2_23'
    },
    c5_ms2_23: {
      id: 'c5_ms2_23',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '餐厅的顶灯关到只剩台面那一盏。留言板上的调座申请被风吹起一个角，压在它上面的铜销晃了两下，没有掉。',
      next: 'c5_qt_01'
    },
    // ---------------------------------------------------------------- 作战会议室：另一个辅机序列的人（值勤；船按港务处要求落回四号泊位）
    c5_qt_01: {
      id: 'c5_qt_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第二天，渡鸦号按港务处的要求落回港区四号泊位：封样和点交都要在泊位上办。零点班交接前，港务处的书记员沿着船内走道敲了一遍门：本季配给执行需要一个第三方封样人，人在港区没走，愿意晚上船一趟，把收回来的二十七板封条对一遍。伊芙娜把人安排在作战会议室靠里的那一角，长桌清出一小块，两把椅子。',
      next: 'c5_qt_02'
    },
    c5_qt_02: {
      id: 'c5_qt_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '上船的是个拄拐的中年女人，四十岁上下：深棕色头发在脑后绾成一个低发髻，灰眼睛，深色的旧工装，左边裤腿收得比右边高。拐杖是旧的，握把上缠着和矿站工装同一种布；她左手拄杖，走路的时候左脚不落地，只用拐杖点地。封样单夹在胳肢窝下面。',
      next: 'c5_qt_02a'
    },
    c5_qt_02a: {
      id: 'c5_qt_02a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她进门的时候先用拐杖试了试舱板接缝，再抬脚。船内走道的天花板比港区低，她把头低下去，动作很熟练，像走过很多条这样的走道。',
      next: 'c5_qt_03'
    },
    c5_qt_03: {
      id: 'c5_qt_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「渡鸦号第三小队。」伊芙娜把封条盒放在桌上，「你要对哪一板？」',
      next: 'c5_qt_04'
    },
    c5_qt_04: {
      id: 'c5_qt_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'au09',
      text: '「最后那二十七板。」她把封样单推过来，声音有点哑，「港务处在单子上写第零号封样人，我不认识数字，我只认封条。你们这边的货有两条账，我知道，我按外面那一条对。」',
      next: 'c5_qt_05'
    },
    c5_qt_05: {
      id: 'c5_qt_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把右前臂的袖口推上去：一整条旧疤从腕子爬到肘弯，疤中间只有一个明显的方形接口凹坑，坑边的皮肤被压得发亮。皮上没有任何字，也没有编号——她的编号不在皮上，在港务处那本用工登记里。',
      next: 'c5_qt_05a'
    },
    c5_qt_05a: {
      id: 'c5_qt_05a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她推袖子的动作是顺手的，像是每天都要推。腕子上还有一道更浅的旧痕，横着的，比臂弯那一个方坑整齐得多——那道是仪表带勒出来的。',
      next: 'c5_qt_05b'
    },
    c5_qt_05b: {
      id: 'c5_qt_05b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'au09',
      text: '「看这里。」她把手腕翻过来一点，让那一个方坑正对着灯，「按手印以前，先从这儿取过一次数据。取完就不需要我飞了。」',
      next: 'c5_qt_06'
    },
    c5_qt_06: {
      id: 'c5_qt_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉本来在桌边拆封条。她拆到第三根的时候停住了，看着那一个接口坑，很久没有把手收回来。房间里只剩封条盒盖子开合的轻响。',
      next: 'c5_qt_07'
    },
    c5_qt_07: {
      id: 'c5_qt_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '「封样单背面有一栏旧编号。」薇拉把纸翻过来，念得很慢，「辅机序列，一期，第九位，编号 AU-09。编号后面盖的是『已处理』的章。」',
      next: 'c5_qt_08'
    },
    c5_qt_08: {
      id: 'c5_qt_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'au09',
      text: '「你是十一号。」拄拐的人点头，没有问对面怎么知道，「我在你之前。第一期一开始，我们那批的名单上有九个人，到第二年末还剩四个。」',
      next: 'c5_qt_08a'
    },
    c5_qt_08a: {
      id: 'c5_qt_08a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'au09',
      text: "「你们那边现在还剩几个二期的人。」她把封样单推到一边，先问了这个，「我想打听那批人的近况。我走以后两年入队的，如今还有几个在？」",
      next: 'c5_qt_09'
    },
    c5_qt_09: {
      id: 'c5_qt_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「你服的役期是四年。」伊芙娜开口，声音很稳，「档案上写的年份我核过，一期、二期都是四年。你不在四年的名单里。」',
      next: 'c5_qt_10'
    },
    c5_qt_10: {
      id: 'c5_qt_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'au09',
      text: '「第三年的冬天我递了一份东西。」她把拐杖在椅背边立直，「写的是：我不续，我不去校准站，我不再飞。递上去第四天，通知下来了，说我的接口达不到继续服役的标准，按报废处理。」',
      next: 'c5_qt_11'
    },
    c5_qt_11: {
      id: 'c5_qt_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'aux_series_deserter_met', value: true }
      ],
      text: '她把「报废」两个字说得很平，像在念货签上的品名。挪椅子的时候，左手在桌沿上撑了一下，臂弯里那一个接口坑跟着绷紧了。',
      next: 'c5_qt_10a'
    },
    c5_qt_10a: {
      id: 'c5_qt_10a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '「你先坐。」诺瓦把椅子往她那边推了半尺，「我们没在审你。这箱封条要对到半夜，你腿这样站着，对不完。」',
      next: 'c5_qt_11a'
    },
    c5_qt_11a: {
      id: 'c5_qt_11a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'au09',
      text: '「他们给的纸上写的是：接口未达继续服役标准，按报废处理，编号注销。」她把拐杖在膝上转了半圈，「那张纸我没有留。留下来也没有用，港务处认的是我按的手印，不认那张纸。」',
      next: 'c5_qt_11b'
    },
    c5_qt_11b: {
      id: 'c5_qt_11b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'au09',
      text: "「腿是断电以后摔的。」她把裤腿拉平，「断电的时候我在椅子上挣，摔了下来，地板是铁的。他们按完手印就把我推了出去，他们按程序认定我已经失去意识。」",
      next: 'c5_qt_12'
    },
    c5_qt_12: {
      id: 'c5_qt_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '「我替人开过那扇门。」铎兰站在门口没进来，手里还拿着四号柜的灯，「报废程序走的是接口机手册：主接口断电、管线机械切断、编号注销。手册写六十分钟，实际多数做四十到五十分钟。」',
      next: 'c5_qt_13'
    },
    c5_qt_13: {
      id: 'c5_qt_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '「她这一条是没切干净。」铎兰没有看那个女人的脸，「断电以后人还在，编号照样注销。她被推出来的时候算作已处理，港区这边给了她一张纸，那张纸上说她不存在。」',
      next: 'c5_qt_14'
    },
    c5_qt_14: {
      id: 'c5_qt_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「所以你现在没有名字。」诺瓦把封样单翻到背面，「矿站的人怎么叫你？」',
      next: 'c5_qt_15'
    },
    c5_qt_15: {
      id: 'c5_qt_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'au09',
      text: '「他们叫阿肆，因为我在第四工棚住。」她把封样单翻到签字那一栏，用指节压住纸角，「这一季我一天跑三个点：转运站、四号泊位、还有你们船上这一趟。封条对不上，货就压在驳上——我干的就是这一行。」她顿了一下，把公事说完，「这一页今晚就能走完；封完这一季，第四工棚换门的事我就能交定钱。」',
      next: 'c5_qt_16'
    },
    c5_qt_16: {
      id: 'c5_qt_16',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '封条一根一根对完，二十七板，全部对上。阿肆在封样单最后一栏按了手印，因为她没有可以签的名字。她把印泥蹭在裤子上，站起来的时候用拐杖点了一下地。',
      next: 'c5_qt_17'
    },
    c5_qt_17: {
      id: 'c5_qt_17',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      variants: [
        {
          requires: ['vera_word_used'],
          text: "「等等。」薇拉跟出去一步，在门口站住，「长机。我的接口箱已经拆了，我知道那里面是什么。我想问一句跟任务无关的话：那四十分钟里究竟发生了什么？从断电开始，可以一件件告诉我吗？」"
        },
        {
          requires: ['vera_word_refused'],
          text: "「等等。」薇拉跟出去一步，在门口站住，「她问过我一次『你为什么不飞』，我说不出理由。现在我想问另一件事：那四十分钟里究竟发生了什么？从断电开始，可以一件件告诉我吗？」"
        }
      ],
      text: "「等等。」薇拉跟出去一步，在门口站住，「我想知道那四十分钟的经过。从断电开始，你能告诉我吗？」",
      next: 'c5_choice_aux'
    },
    c5_choice_aux: {
      id: 'c5_choice_aux',
      kind: 'choice',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '阿肆停在走道口，拐杖点在舱板的接缝上。伊芙娜没有开口，铎兰把灯往墙上收了半圈，把走道让出来。',
      choices: [
        {
          id: 'c5_aux_full',
          label: '让阿肆进来说。这件事要听完整。',
          next: 'c5_qt_18',
          reaction: '你把门口的椅子拉回桌边。阿肆看了你一眼，坐回原位，把拐杖横在膝上，从头讲了一遍：通知、签字、断电、推出来的时候谁在门口。她讲完，桌上那份封样单还摊着，谁都没有先动。',
          effects: [
            { type: 'flag', key: 'aux_full_testimony', value: true },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c5_aux_record',
          label: '只记录程序本身，不要她再复述一遍具体过程。',
          next: 'c5_qt_18',
          reaction: '你把封样单翻到空白面，按铎兰说的口径记下程序步骤：断电、切断、注销、四十分钟。阿肆看着你写完，点了点头，没有多说。薇拉把手里的封条一根一根码齐，码过头了又重来一遍。',
          effects: [
            { type: 'flag', key: 'aux_procedure_recorded', value: true },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        }
      ]
    },
    c5_qt_18: {
      id: 'c5_qt_18',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '走道尽头的压力门开合了两次，阿肆下船，港务处的书记员跟在她后面。桌上的封样单被伊芙娜收进文件夹，四个手印压在同一行纸上。',
      next: 'c5_qt_18a'
    },
    c5_qt_18a: {
      id: 'c5_qt_18a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「封样单收好了。」伊芙娜把文件夹夹到腋下，「这一页以后谁要调，都要先过我。」',
      next: 'c5_qt_19'
    },
    c5_qt_19: {
      id: 'c5_qt_19',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "「长机。」薇拉把最后一根封条放进盒子，盖子扣上，「她说她不认那个数字。我的名字借用了别人的名字，数字由档案处登记。两样都是别人给的，可名字让我想起一个人，数字只会让我想起那张表。我还想再想想。」",
      next: 'c5_qt_20'
    },
    c5_qt_20: {
      id: 'c5_qt_20',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「不用现在想清楚。」你把椅子归位，「你只要记住她今天说了什么，还有她的拐杖是哪只手拿的。」',
      next: 'c5_qt_21'
    },
    c5_qt_21: {
      id: 'c5_qt_21',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「左手。」薇拉答得很快，「她的左腿是拐杖，右手要拿东西，所以封样单是用左手按的手印。」她顿了一下，「我记下来了。」',
      next: 'c5_qt_21a'
    },
    c5_qt_21a: {
      id: 'c5_qt_21a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '会议室的门开着，诺瓦从走道那头过来，手里拎着那只麻袋。她把麻袋放在门边的矮柜上，解开绳口，从里面掏出几块干果饼和一小包烤土豆，分成三份摆在桌上。',
      next: 'c5_qt_21b'
    },
    c5_qt_21b: {
      id: 'c5_qt_21b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: "「矿站给的干粮。」诺瓦把最小的一份推到薇拉面前，「已经回舰了，尝一口吧。这土豆和船上的比，哪个更好吃？我想问他们要配方。」",
      next: 'c5_qt_21c'
    },
    c5_qt_21c: {
      id: 'c5_qt_21c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "薇拉拿起最小的一份，咬了一小口，嚼得很慢。「比船上的干。」她把那块饼放回纸上，「烘得很透，水分少。这种能带进井底下，回潮也不坏。」",
      next: 'c5_qt_21d'
    },
    c5_qt_21d: {
      id: 'c5_qt_21d',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉把剩下的半块用纸重新包好，塞进救生背心的侧袋里。她没有说自己留着做什么，转身先去了走道那头的梯口。',
      next: 'c5_qt_21e'
    },
    c5_qt_21e: {
      id: 'c5_qt_21e',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "「三等分的饼，她拿走最小的一份，剩下两份都归我和铎兰。」诺瓦把纸收起来，「她刚按消耗量算过一遍：她体重最轻，今天没有长时间出舱，按消耗量排第三。」",
      next: 'c5_qt_21f'
    },
    c5_qt_21f: {
      id: 'c5_qt_21f',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「按消耗量排，那我得吃三份。」铎兰把其中一份拿起来咬了一口，「明天上井口搬备件，我排第一，这份先记账上。」',
      next: 'c5_qt_22'
    },
    c5_qt_22: {
      id: 'c5_qt_22',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「记下来就够。」伊芙娜把文件夹夹到腋下，「反应堆舱的泵组从接收轴那一下报到现在，铎兰一个人在四号柜翻备件。你们两个，拿上灯跟我下去。」',
      next: 'c5_rx_01'
    },
    // ---------------------------------------------------------------- 反应堆舱：谁先下去（值勤）
    c5_rx_01: {
      id: 'c5_rx_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '反应堆舱的噪声比平时低了一层，泵机段的检修走道被黄黑相间的警示栅栏隔成两半。二号冷却泵的外壳温度比左泵高八度，联轴器的护罩拆在地上，露出里面一道磨亮的槽。',
      next: 'c5_rx_02'
    },
    c5_rx_02: {
      id: 'c5_rx_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '「耦合件磨掉了三分之一的齿。」铎兰把灯卡在扶手上，蹲在护罩边，「接收轴那一下电压冲击是最后一脚。备件我找出来了，装上去要有人下到井里去，从下面顶住轴座，上面才拧得动。」',
      next: 'c5_rx_02a'
    },
    c5_rx_02a: {
      id: 'c5_rx_02a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '备件是从四号柜第三层翻出来的，外面还裹着出厂时的油纸。铎兰把它放在地上，先用袖口擦掉油纸外面的灰，再拆。',
      next: 'c5_rx_02b'
    },
    c5_rx_02b: {
      id: 'c5_rx_02b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "「二号泵从接收轴那一下就在报错，我一直压着没让人停。」他把旧件拆下半个齿圈，摆在地上给两个人看，「停一台泵，船上后半段就靠一台撑着；回港之前全靠它，转速再往上掉就得减负荷。」",
      next: 'c5_rx_03'
    },
    c5_rx_03: {
      id: 'c5_rx_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '井口在走道左侧，直径不到一米的检修孔，孔边焊着两级脚踏。井底离走道四点二米，轴座在最里面的一角，人下去以后只能侧身。',
      next: 'c5_rx_04'
    },
    c5_rx_04: {
      id: 'c5_rx_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "「电源切断了吗？」伊芙娜先确认作业区已经断电。",
      next: 'c5_rx_05'
    },
    c5_rx_05: {
      id: 'c5_rx_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '「左泵还在跑，右泵已经锁定，隔断阀挂了机械锁。」铎兰把锁头的销子扯出来给她看了一眼，「下井的人在锁之后再挂第二道索。谁下去，谁自己系索，我不替别人系。」',
      next: 'c5_rx_05a'
    },
    c5_rx_05a: {
      id: 'c5_rx_05a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「第二道索挂在谁身上。」伊芙娜把手套摘下来塞进袖口，「挂在你身上，你就是下井的人；挂在固定环上，你只是报数的人。这两件事报进记录里不一样。」',
      next: 'c5_rx_05b'
    },
    c5_rx_05b: {
      id: 'c5_rx_05b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "「挂在固定环上。」铎兰把索具抖开，头端甩到走道外侧，「安全索固定到船体上。要是我被拽下去，环还在，井里的人也还在——拉人的那个人得换一下。」",
      next: 'c5_rx_06'
    },
    c5_rx_06: {
      id: 'c5_rx_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「四点二米。」薇拉在井口蹲下，探头看了一眼，「我的肩宽比铎兰小十一厘米，在里面能转身，他不能。轴座的位置我看过图纸，我下去。」',
      next: 'c5_rx_07'
    },
    c5_rx_07: {
      id: 'c5_rx_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "「你下去也行，安全索挂牢。」铎兰把索具从挂钩上取下来，「但你得听清楚：井里那根轴现在是死的，也可能是活的。你进去先摸轴，再摸锁，顺序不能反。我在上面看不到轴下的情况，每一步都报给我。」",
      next: 'c5_rx_08'
    },
    c5_rx_08: {
      id: 'c5_rx_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「先轴后锁。」薇拉把索具接过去，自己扣上腰环，拉了两下试紧，「长机，我下去。你要是不下命令，我按这条报：这是我判断的处置顺序。」',
      next: 'c5_choice_shaft'
    },
    c5_choice_shaft: {
      id: 'c5_choice_shaft',
      kind: 'choice',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '索具的另一头挂在走道的固定环上，铎兰把灯推到井口边，光柱在井底切成一块白。井口边只剩一个位置。',
      choices: [
        {
          id: 'c5_shaft_doran',
          label: '按手册办：铎兰先下，他下去之前先双人验索。',
          next: 'c5_rx_09',
          reaction: '「对。」铎兰把薇拉腰上的环重新扣了一遍，两个人各拉一次，报出「紧」。他下井的时候只带了扳手和灯，薇拉跪在井口压着灯线，一句多余的话都没有。',
          effects: [
            { type: 'flag', key: 'shaft_doran_first', value: true },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c5_shaft_vera',
          label: '让她下。她已经把顺序和尺寸说清楚了，你在上面盯索。',
          next: 'c5_rx_09',
          reaction: '你接过灯线，在井口边跪下。薇拉侧身下去了，先摸轴，后摸锁，报出两个字：「死的。」上面的扳手这才开始动。',
          effects: [
            { type: 'flag', key: 'shaft_vera_first', value: true },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        }
      ]
    },
    c5_rx_09: {
      id: 'c5_rx_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '轴座顶开以后，上面的螺栓好拧多了。备件卡进槽里，铎兰用铜锤敲了三下，第二下的时候灯闪了一下，走道那头的左泵跟着降了半格转速。',
      next: 'c5_rx_09a'
    },
    c5_rx_09a: {
      id: 'c5_rx_09a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '井口边的手套和灯线缠在一起。薇拉从井里出来的时候先是头，再是肩，最后把索具在井沿上绕了一圈才摘钩。她的飞行服右肩蹭掉了一块漆，手套的虎口位置磨白。',
      next: 'c5_rx_09b'
    },
    c5_rx_09b: {
      id: 'c5_rx_09b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「轴座顶到位了。」薇拉先报结果，再补一句过程，「进去以后先摸到轴，轴是死的，没有转。锁上的销子有一点锈，我用肩膀顶了两下才松开。」',
      next: 'c5_rx_09c'
    },
    c5_rx_09c: {
      id: 'c5_rx_09c',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "「销子锈死了，肩部机构还好。」他把铜锤插回腰带，「回头我给你那块肩板补一道漆，颜色会浅一档。夜枭身上本来就有一块浅的，不差第二块。」",
      next: 'c5_rx_10'
    },
    c5_rx_10: {
      id: 'c5_rx_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '「成了。」铎兰把护罩扣回去，用袖口擦掉上面的一层油，「这一趟下来，二号泵能撑到回港。撑不到也没办法，船上就这一个备件，下一个要等联合港的仓库。」',
      next: 'c5_rx_11'
    },
    c5_rx_11: {
      id: 'c5_rx_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「我把『撑到回港』写进今天的船务记录。」伊芙娜站在栅栏外面，一直没有进来，「船损等级记中，主机可用，二号泵受限。回去交船的时候，这一栏他们要不要看，是他们的事。」',
      next: 'c5_rx_12'
    },
    c5_rx_12: {
      id: 'c5_rx_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "「长机。」薇拉把索具一圈一圈收起来，「刚才在井里，我先摸到的是轴，第二下才摸到锁。如果顺序反了，我的手现在就没有了。」她把索具挂回挂钩上，「刚才我一直照着顺序做，现在上来了，才有点后怕。」",
      next: 'c5_rx_12a'
    },
    c5_rx_12a: {
      id: 'c5_rx_12a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '「这话她只说对了一半。」铎兰把工具点了一遍，「顺序对了手能保住，顺序错了也不一定保不住——得看上面拉索的人反应多快。今天上面那个人是你，她敢下去，是因为你在上面。」',
      next: 'c5_rx_12b'
    },
    c5_rx_12b: {
      id: 'c5_rx_12b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '护罩扣回去以后，二号泵的外壳温度开始往下走。走道那一头的左泵恢复转速，噪声重新盖过说话声。',
      next: 'c5_rx_13'
    },
    c5_rx_13: {
      id: 'c5_rx_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「我听见了。」你把灯从井口边收回来，光柱扫过走道，最后停在铎兰那只铜色的手背上，「上去吧，作战会议室还有人等着我们吵。」',
      next: 'c5_rx_14'
    },
    c5_rx_14: {
      id: 'c5_rx_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '检修走道的尽头有一段没有栏杆的斜面，三个人没有马上走。铎兰坐在备件箱上搓手上的油，薇拉把湿透的袖口卷到肘上，冷蓝的主回路光从栅栏那边照过来。',
      next: 'c5_rx_15'
    },
    c5_rx_15: {
      id: 'c5_rx_15',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '「歇五分钟。」铎兰把水壶从墙上的挂钩取下来，倒了三杯，「船上的规矩：抢修完的人，坐下喝一杯再干活。谁不喝，我可以理解为嫌我的手脏。」',
      next: 'c5_rx_16'
    },
    c5_rx_16: {
      id: 'c5_rx_16',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉接过杯子，先看了一遍杯口，才喝了一小口。「水是热的，壶在第四格。这一趟回来以后，餐厅的水还开着，我记得是谁提下来的。」',
      next: 'c5_rx_17'
    },
    c5_rx_17: {
      id: 'c5_rx_17',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'reactor',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'player',
      text: '「是我提的。」你把杯子端在手里，没有马上喝，「你下去过井，这杯先归你。剩下的账到会议室再算。」',
      next: 'c5_cm_01'
    },
    // ---------------------------------------------------------------- 作战会议室：分裂与章末（值勤）
    c5_cm_01: {
      id: 'c5_cm_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '作战会议室的长桌上摊着三份东西：港务处的配给表、矿站三个站号的签收单、以及诺瓦那份还没发送的报告。投影把三方标记打在墙上，蓝色、红色、橙色各占一格。',
      next: 'c5_cm_02'
    },
    c5_cm_02: {
      id: 'c5_cm_02',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「三条来电。」诺瓦按顺序点开，「第一，港务处问执行记录什么时候交。第二，矿站托人带话：第三〇七的滤网撑不到下一次补货。第三，灰塔观测点开了个窗口——带上配给期间的观测记录，他们就发校准站通道。」',
      next: 'c5_cm_02a'
    },
    c5_cm_02a: {
      id: 'c5_cm_02a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '投影把三方标记打在墙上。港务处那一格写着「执行栏待填」，矿站那一格只有一行铅字站号，灰塔那一格多了一个小小的样本码。三格之间用虚线连着，虚线都不在同一个方向上。',
      next: 'c5_cm_02b'
    },
    c5_cm_02b: {
      id: 'c5_cm_02b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「赤垣没有来电。」诺瓦把终端合上一半，「他们不用打电话。影子线路那边今天晚上有人把卸货点的锚灯熄了，这是在问我们下一趟还走不走。」',
      next: 'c5_cm_03'
    },
    c5_cm_03: {
      id: 'c5_cm_03',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「先把我们的分歧摆出来。」伊芙娜把配给表推到桌子中间，「同一批货，三方要的东西不一样。联合要执行记录上有一条完整的线，赤垣要那批药记住是谁运的，灰塔要的是我们对这条线说了什么。」',
      next: 'c5_cm_04'
    },
    c5_cm_04: {
      id: 'c5_cm_04',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '「三样都能给，三样都不便宜。」铎兰把两页清单从围裙里掏出来放在桌上，「执行记录交给港务处，他们按表核账，多出来的那七板就成了我一个人的事。药直接下井，联合那边下次的货就别想要了。观测记录发出去，第三个泵站的地址也在他们手里。」',
      next: 'c5_cm_04a'
    },
    c5_cm_04a: {
      id: 'c5_cm_04a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '两页清单摊在桌上：一页按实际货量一百六十七吨，一页按在册的一百六十吨。第二页的边框外有一道铎兰画的竖线，第一页的格子边上空着一小块，恰好是签字的位置。',
      next: 'c5_cm_04b'
    },
    c5_cm_04b: {
      id: 'c5_cm_04b',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '「我现在要选一套。」铎兰把两页纸分开，一边一页按在桌面上，「报实数，等于把超出的七板摆在明面上让人查；报在册的，等于那七板以后都由我一个人记账。你们谁开口，我就按哪一套收。」',
      next: 'c5_cm_05'
    },
    c5_cm_05: {
      id: 'c5_cm_05',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "「我改过一版口径，」诺瓦把报告翻到第二页，「写进去的是：矿站第三〇七号泵房出水带渣，第三点在册人员未到场。写这两句，观测点会把它当样本，我知道。可写进报告，至少能让那口井进入下一批维修名单。」",
      next: 'c5_cm_06'
    },
    c5_cm_06: {
      id: 'c5_cm_06',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜没有立刻反驳。她把配给表拉到面前，翻到签字页，那一栏第三点还是空的。',
      next: 'c5_cm_07'
    },
    c5_cm_07: {
      id: 'c5_cm_07',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「我签过三次这种表，」她终于说，「每一次的理由都一样：按条令办，缺口由下一趟补。下一趟从来补不上。第三〇七的人这个冬天要喝带渣的水，是因为我按表签了字。」',
      next: 'c5_cm_08'
    },
    c5_cm_08: {
      id: 'c5_cm_08',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "伊芙娜看着投影，过了一会儿才伸手翻下一页。投影的风扇声在墙上转，蓝色的那一格把伊芙娜的半边脸照得很淡。",
      next: 'c5_cm_09'
    },
    c5_cm_09: {
      id: 'c5_cm_09',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '「我有一个问题。」薇拉一直站在门边，这时候往前走了三步，「我们在这里决定的是货。那阿肆的封样单算不算我们的记录？她是港务处请来的，她的那份也在桌上。」',
      next: 'c5_cm_10'
    },
    c5_cm_10: {
      id: 'c5_cm_10',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「算。」诺瓦把自己的终端转过去给她看，「我写的报告里没有她，也没有第三〇七的名字。你要是觉得该有，现在说。」',
      next: 'c5_cm_11'
    },
    c5_cm_11: {
      id: 'c5_cm_11',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "「不该有。」薇拉说，「写上她，观测局就会查到她的工棚。她已经躲到这里过日子了。报告写站号和水样，给她留点安静吧。」",
      next: 'c5_cm_11a'
    },
    c5_cm_11a: {
      id: 'c5_cm_11a',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "「行。那我把这两句念一遍，你们听着，有出入当场改。」诺瓦把终端立起来，对着桌面读：「矿站第三〇七号泵房出水带渣，第三点在册人员未到场。执行人未在册。」",
      next: 'c5_cm_12'
    },
    c5_cm_12: {
      id: 'c5_cm_12',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '投影把三个格子照在墙上。诺瓦的手指停在回车键上面，伊芙娜看着那张没签完的表，铎兰的两页清单摊在中间，谁都没有先说话。',
      next: 'c5_choice_split'
    },
    c5_choice_split: {
      id: 'c5_choice_split',
      kind: 'choice',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三条渠道，一份报告，两套清单。你要决定的是：这批货最终算谁的记录。',
      choices: [
        {
          id: 'c5_split_concord',
          label: '按联合的配给表走完，执行记录交给港务处。',
          next: 'c5_cm_13',
          reaction: "你让诺瓦把执行记录打印出来，签上呼号。铎兰站起来的时候凳子腿刮了一下地板，他停了一下，走过去合上了货舱账本。",
          effects: [
            { type: 'flag', key: 'c5_split_concord_done', value: true },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c5_split_scarlet',
          label: '最后那两箱药跟着影子线路下井，货单上不写。',
          next: 'c5_cm_13',
          reaction: '你让铎兰把两箱药从四号泊位调回货舱，走那条不写字的线。诺瓦把执行记录的副本收进抽屉，没有发送。伊芙娜看着你做完，签字栏她没有动。',
          effects: [
            { type: 'flag', key: 'c5_split_scarlet_done', value: true },
            { type: 'standing', who: 'scarlet', amount: 1 }
          ]
        },
        {
          id: 'c5_split_spire',
          label: '把这份反馈完整发给灰塔观测点，换校准站的通道。',
          next: 'c5_cm_13',
          reaction: '你点头，诺瓦按下了发送键。传输级别调到最低，备注栏里留着那行「观测对象知情」。伊芙娜把配给表扣上，没有发表意见；铎兰把两页清单收回围裙。',
          effects: [
            { type: 'flag', key: 'c5_split_spire_done', value: true },
            { type: 'standing', who: 'spire', amount: 1 }
          ]
        },
        {
          id: 'c5_split_neutral',
          label: '三条都不选。最后那一板货留在四号泊位，钥匙挂在账上。',
          next: 'c5_cm_13',
          reaction: '你让港务处把最后那板货封在四号泊位，三方各留一份不许拆封的说明。铎兰盯着你看了几秒，把钥匙挂在货舱账的挂钩上，谁都能看见，谁都不能拿。',
          effects: [
            { type: 'flag', key: 'c5_split_neutral_done', value: true }
          ]
        }
      ]
    },
    c5_cm_13: {
      id: 'c5_cm_13',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '投影关掉以后，会议室只剩下桌上一盏灯。伊芙娜把配给表收进文件夹，临走前在门口停了一下，回头看了一眼桌上那份封样单的副本。',
      next: 'c5_cm_14'
    },
    c5_cm_14: {
      id: 'c5_cm_14',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "「今天这件事，我们四个人里有三个版本。」她把手放在门框上，「我不再要求你们统一说法。我只要求一件事：以后谁改口径，提前告诉大家一声，留出一起商量的时间。」",
      next: 'c5_fin_01'
    },
    c5_fin_01: {
      id: 'c5_fin_01',
      kind: 'dialogue',
      chapter: 'ch05',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '交割办完的当天傍晚，渡鸦号从四号泊位抬起来，回到轨道上，船身按夜面姿态慢慢转过去。泵机的底噪比昨天沉了一点，货舱里空下来的位置能听见回声。',
      nextIf: [
        { requires: ['c5_split_scarlet_done'], next: 'out_ch5_scarlet' },
        { requires: ['c5_split_spire_done'], next: 'out_ch5_spire' },
        { requires: ['c5_split_neutral_done'], next: 'out_ch5_neutral' },
        { requires: ['c5_split_concord_done'], next: 'out_ch5_concord' },
        { requires: ['route_shadow', 'manifest_site', 'cargo_extra'], next: 'out_ch5_scarlet' },
        { requires: ['route_calibration', 'manifest_single'], next: 'out_ch5_spire' },
        { requires: ['cargo_recount', 'manifest_site'], next: 'out_ch5_neutral' },
        { requires: ['cargo_strict', 'manifest_single'], next: 'out_ch5_concord' }
      ],
      next: 'out_ch5_concord'
    },
    // ---------------------------------------------------------------- 章末结果（各自独立的物理与记录状态）
    out_ch5_concord: {
      id: 'out_ch5_concord',
      kind: 'chapterOutcome',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch5_concord',
      continuesTo: 'ch06',
      onEnter: [
        { type: 'flag', key: 'out_ch5_concord', value: true }
      ],
      text: '执行记录送回港务处，配给表上有这艘船的呼号。船在轨道上等下一张单子：补给线继续存在，矿站这个冬天有燃料和药，第三〇七的泵房还要等下一趟。灰塔的观测点已经把这次配给写进了他们的对照组清单。',
      next: null
    },
    out_ch5_scarlet: {
      id: 'out_ch5_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch5_scarlet',
      continuesTo: 'ch06',
      onEnter: [
        { type: 'flag', key: 'out_ch5_scarlet', value: true }
      ],
      text: '最后那两箱药没有进账，顺着一条不写字的路线进了井口。港务处的清单上少了这两箱，铎兰把它记成运输损耗；矿站的滤网撑过了这个月。联合的账目从今天开始对不上，而赤垣的影子线路上多了一个能过重货的点。',
      next: null
    },
    out_ch5_spire: {
      id: 'out_ch5_spire',
      kind: 'chapterOutcome',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch5_spire',
      continuesTo: 'ch06',
      onEnter: [
        { type: 'flag', key: 'out_ch5_spire', value: true }
      ],
      text: '报告从最低传输级别发出去，回执只有一句「已记录条件」。灰塔观测点给了渡鸦号一条去校准站的通道，矿站这个冬天会拿到配给，配给表上多了一个被旁听的备注栏。维斯特那边的样本表上，从此有了一整行。',
      next: null
    },
    out_ch5_neutral: {
      id: 'out_ch5_neutral',
      kind: 'chapterOutcome',
      chapter: 'ch05',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch5_neutral',
      continuesTo: 'ch06',
      onEnter: [
        { type: 'flag', key: 'out_ch5_neutral', value: true }
      ],
      text: "最后那一板货封在港区四号泊位，钥匙挂在货舱账的挂钩上，三方各留了一份不许拆封的说明。药品和燃料已经往下分，争议的那两箱贴着「待确认」标签留在原处。分歧仍留在会议记录里，下次调货前，大家还得重新坐下来谈。",
      next: null
    }
  }
};

export default CHAPTER;
