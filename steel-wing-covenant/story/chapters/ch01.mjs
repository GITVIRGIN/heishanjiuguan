// 钢翼盟约 / STEEL-WING COVENANT — 第一章「霜环锚地」章节模块（纯数据，无外部导入、无运行时 I/O）
//
// 契约见 CHAPTER_MODULE_CONTRACT.md；世界固定事实见 FULL_GAME_BIBLE.md 与 story/{catalog,world,characters,scenes}.mjs。
// 本轮是编辑返修（不是重写剧情）：保留入口 c1_01、九个既有 decision id、四个章末结果 id 与全部既有跨章旗标含义，
// 把「一个节点里塞进两三个人的回合」按真实说话人拆成独立节点（说话人 = 显示谁的立绘），
// 按实际活动校正 tone，并把薇拉写成第一章的常驻同伴而不是「一直在学做人」的支线。

export const CHAPTER = {
  number: 1,
  id: 'ch01',
  nodeIdPrefix: 'c1_',
  title: '第一章 · 霜环锚地',
  badge: '第一章 · 完整',
  status: 'complete',
  entry: 'c1_01',
  nextChapter: 'ch02',
  contentTarget: {
    mainPathCjk: 13000,
    note: '一条主干路径 13,000–14,500 个中文可读字符；实际值见 contentActual 与同目录 ch01-notes.json。'
  },
  contentActual: {
    mainPathCjk: 14289,
    corpusCjk: 20538,
    nodes: 314,
    decisions: 9,
    measuredAt: '2026-09-12',
    method: 'drafts/ch01-selfcheck.mjs（临时自检脚本，非交付物）：按引擎语义（requires / nextIf / variants / 选项顺序 / effects）从 c1_01 有界遍历；主干路径只统计该路径上真正显示过的节点文本、选项文案与选项反应，语料总量统计全章节点文本、变体、选项与反应。CJK 判定与 catalog.mjs 的 countingMethod 相同（表意文字区间 3400-4DBF / 4E00-9FFF / F900-FAFF）。',
    routeWitness: {
      mainPath_allFirstAvailable: 14289,
      ending_concord: 14161,
      ending_scarlet: 14335,
      ending_spire: 14178,
      ending_standing_alone: 13870,
      minimumWitnessedPath: 13870
    },
    note: '四个章末结果各有一条见证路径，最短的一条 13,870 个 CJK 字符，最长 14,335，四条都在 13,500–14,500 区间内。可达性是「节点 × 影响分支门的旗标」的有界状态搜索（本次 445,237 个状态，上限 2,000,000，未触上限），不是穷尽证明。'
  },
  decisions: ['c1_choice_injector', 'c1_choice_wing', 'c1_choice_trust', 'a1_choice_wreck', 'a2_choice_order', 'ivna_choice', 'doran_choice', 'nova_choice', 'b1_choice_commit'],
  outcomeNodeIds: ['ending_concord', 'ending_scarlet', 'ending_spire', 'ending_standing_alone'],
  scenes: ['hangar', 'battle', 'hold', 'medbay', 'workshop', 'messhall', 'ship_rail'],
  companionMilestones: {
    ivna: [
      '登机前的两条规矩与那双手套',
      '医务舱：锁骨下的接口与三种处理方式',
      '章末：担保人一栏、留舰观察与四个落点'
    ],
    doran: [
      '违规改装单与签字',
      '工具箱第二格、导航核心的影子线路与共犯凭证',
      '章末：白鹭的假清单与四个落点'
    ],
    nova: [
      '登机前按进座舱接口的数据卡',
      '观察廊：忠诚度表、那句「不可采集」与四个落点',
      '章末：灰塔要的是活体读数'
    ],
    vera: [
      '登机前报到：报编号比报名字熟练',
      '右腿接口箱的第一次提问与「跟住左翼」',
      '会战：一次真正的分歧（探测臂不能顶，机械手可以）',
      '下班：餐厅里的第一个位置、观察廊与一卷胶布',
      '章末：四段互不相同的落点'
    ]
  },
  linearOrder: [
    'c1_01', 'c1_02', 'c1_03', 'c1_04', 'c1_05', 'c1_06', 'c1_07', 'c1_choice_injector',
    'c1_ch_inj_sign', 'c1_ch_inj_sign_b', 'c1_ch_inj_report', 'c1_ch_inj_inspect', 'c1_ch_inj_inspect_b',
    'c1_ve_01', 'c1_ve_02', 'c1_ve_03', 'c1_ve_04', 'c1_va_01', 'c1_va_01_b', 'c1_va_01_c', 'c1_va_02', 'c1_va_02_p', 'c1_va_02_b',
    'c1_choice_wing', 'c1_ch_wing_lead', 'c1_ch_wing_check', 'c1_ch_wing_joke', 'c1_ve_05_j', 'c1_ve_05', 'c1_ve_05_p', 'c1_ve_06',
    'c1_08', 'c1_nv_01', 'c1_nv_02', 'c1_09'
  ],
  outcomes: {
    ending_concord: {
      chapter: 'ch01',
      title: '章末结果 · 回到编制',
      route: 'concord',
      routeName: '环带联合',
      summary: 'XR-07 整机封存交给联合档案处，伊芙娜的处置从「待评估样本」改成「留舰观察」，担保人一栏签的是你的呼号。',
      consequences: [
        '白鹭和灰鸢都活着回来了，联合把这次锚地事故写成「处置得当」，顺手抹掉了白鹭货单上的一个编号。',
        '伊芙娜留在渡鸦号上，但她的档案从「样本」变成「留舰观察」，代价是你的档案上多了一句「需长期留意」。',
        '「曦尔计划」这个编号第一次出现在正式文件里，档案处删不掉，只能盖住。'
      ],
      nextHook: '阿吉斯这个姓为什么会出现在销毁记录上？铎兰的义肢下面还压着什么，第二章会有人去翻。',
      continueHint: '第二章从「船还在联合序列里，但你的档案不干净、伊芙娜的编号被人翻过」继续。',
      continuesTo: 'ch02'
    },
    ending_scarlet: {
      chapter: 'ch01',
      title: '章末结果 · 靛色的钥匙',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: '渡鸦号自己吞掉了这次记录，XR-07 留在三号货舱，铎兰接上了导航核心的影子线路，霜环航道上多了一条不写在图上的缝。',
      consequences: [
        '安全处检查官带走的是一份干净、完整的假清单；铎兰的工具箱第二格第二天少了一层。',
        '十七个外环矿站里有两个开始回话，渡鸦号的呼号第一次出现在赤垣的收件名单上。',
        "伊芙娜读完了你那份有七句话是假的证词，把它折好收进兜里，随后换了一副新手套。"
      ],
      nextHook: '赤垣答应「先不动这条船」，可盟约这种东西只保到下一次开火。',
      continueHint: '第二章从「船少了一次安全检查、多了一条不写进图里的航线」继续。',
      continuesTo: 'ch02'
    },
    ending_spire: {
      chapter: 'ch01',
      title: '章末结果 · 一个被改写的问号',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: 'XR-07 的神经桥接数据进了灰塔的报告，换回伊芙娜那一栏的四个字：不可采集。驾驶舱被装上交通艇，编号一栏空着。',
      consequences: [
        '灰塔的无人母舰解除了对渡鸦号的锁定，但航线图上多了三个长期观测点。',
        '伊芙娜读到报告时只说了两个字：「交易。」她没有谢你。',
        '你的呼号第一次被写进灰塔的长期观测档案，诺瓦在备注里给这一栏留了空白。'
      ],
      nextHook: '灰塔要活体读数，联合要归档，赤垣要航道：下一次，三边缺的会是同一件东西。',
      continueHint: '第二章从「航线图上多了三个观测点、船上有人被写进长期观测档案」继续。',
      continuesTo: 'ch02'
    },
    ending_standing_alone: {
      chapter: 'ch01',
      title: '章末结果 · 谁也没给',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: 'XR-07 封进渡鸦号三号货舱，封条上的担保呼号是你，钥匙在你口袋里。三边都没拿到，这条船第一次同时得罪了三边。',
      consequences: [
        '检查官在证词上盖了「待核实」，带走一份不完整的清单，临走前多看了你两秒。',
        '伊芙娜、铎兰、诺瓦各自提出了处置方案，也各自被你按下了；铎兰当着你的面把第二格的锁焊死。',
        "从这一夜起，渡鸦号要独自承担封存驾驶舱的后果，担保和补给都得另找办法。"
      ],
      nextHook: '钥匙在你身上。下一章会有人为它来敲你的舱门，而敲门的可能不止一个人。',
      continueHint: '第二章从「三方都得罪了、船只能靠自己、钥匙在你口袋里」继续。',
      continuesTo: 'ch02'
    }
  },
  nodes: {
    // ── 第一节拍：三号机库，出发前（hangar / duty） ────────────────────────────
    c1_01: {
      id: 'c1_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "三号机库的闸门只开了一半，冷气顺着缝往外跑，吹得你手里的准入证翻了个面。\n桁架下面有人拿扳手敲装甲板，敲两下，停一会儿，再敲两下。广播念到第十七个备件编号时，你终于找到通往三号机位的标牌。",
      next: 'c1_02'
    },
    c1_02: {
      id: 'c1_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "准入证是今早刚发的，塑封膜还有一点温度。姓名下面那一行印着：预备机师，第三小队，呼号待定。\n值班军士从兜里摸出一卷黄胶带，在两张表上各贴一条，用油笔写上：{callsign}。“记住呼号。”他说，“待会儿频道里叫到你，马上应答。”",
      next: 'c1_03'
    },
    c1_03: {
      id: 'c1_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: "广播：呼号 {callsign}，登记确认。三号起飞位，你有四分钟。\n广播停了一拍，又补一句：升降机刚换过油管，正在低速试运行。扶稳，等平台停靠。",
      next: 'c1_04'
    },
    c1_04: {
      id: 'c1_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      onEnter: [{ type: 'flag', key: 'met_ivna', value: true }],
      text: "伊芙娜·卡列尔。第三小队，长机。\n她手里那叠检查单已经折出了毛边，报完自己就把单子夹到腋下：“起飞以后跟住我的左翼，机动听我口令。”\n她把手套扔给你。“戴上。桁架上面结霜，铁比看上去滑。”",
      next: 'c1_05'
    },
    c1_05: {
      id: 'c1_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她转身去够挂架上的扳手，领口滑开一点。锁骨下面那道旧疤是直的，四个角各留一个对称的小孔，像有东西在那里扣了很多年。\n你还没来得及看第二眼，她已经把领子拉平，顺手把扳手在掌心敲了敲，去对下一颗螺栓。',
      next: 'c1_06'
    },
    c1_06: {
      id: 'c1_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      onEnter: [{ type: 'flag', key: 'met_doran', value: true }],
      text: "“铎兰·阿吉斯。机库归我管，你那台灰鸢也归我管。”\n他从灰鸢左肩上滑下来，铜色的左臂上挂着油，右眉那道断口疤被灯照得很亮。“三段喷口的喉管我给你换了，比原厂耐烧。旧编号磨掉了，库存账还得补。签字，我好收工具。”",
      next: 'c1_07'
    },
    c1_07: {
      id: 'c1_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '单子是手写的，字难看，参数倒是写得清清楚楚：进气温度上限抬高一档，喷口寿命少三分之一。落款那一栏空着，等你写呼号。\n按联合条令第一章第四节，这张纸现在应该已经进了碎纸机。',
      next: 'c1_choice_injector'
    },
    c1_choice_injector: {
      id: 'c1_choice_injector',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '他把笔帽咬在嘴里等你，铜手指在台面上敲了半拍。起飞位那头，伊芙娜敲了两下表壳：还有两分钟。',
      choices: [
        {
          id: 'ch1_sign',
          label: '签。你垫着膝甲写下呼号，把单子折起来塞进口袋：“飞完这趟，自己去补一份备案。”',
          next: 'c1_ch_inj_sign',
          reaction: '他把签好的那页对折，压在工具箱的盖子下面。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'flag', key: 'signed_injector', value: true }
          ]
        },
        {
          id: 'ch1_report',
          label: "你拿着改装单去找伊芙娜：“这项改装还差一份备案。”",
          next: 'c1_ch_inj_report',
          reaction: '她把单子扫了一遍，在末尾写了四个字：下不为例，然后还给铎兰。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'trust', who: 'doran', amount: -1 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'reported_injector', value: true }
          ]
        },
        {
          id: 'ch1_inspect',
          label: '两个都不选：你蹲下来，照着单子把三段喷口自己过一遍。',
          next: 'c1_ch_inj_inspect',
          reaction: '你报出三处要复紧的位置，又报出一处扭矩过头。铎兰吹了声口哨，把扭矩扳手递过来。\n等你收手，广播已经催到第二遍。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'flag', key: 'self_inspected', value: true },
            { type: 'flag', key: 'delayed_scramble', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（c1_choice_injector）：每个说话人各占一个节点
    c1_ch_inj_sign: {
      id: 'c1_ch_inj_sign',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“补，明天补。”他把笔接回去，“参数我认，出事我担，你只管飞。”",
      next: 'c1_ch_inj_sign_b'
    },
    c1_ch_inj_sign_b: {
      id: 'c1_ch_inj_sign_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '队尾，伊芙娜朝那张纸看了一眼，没说话，把手套往上拉了一格。',
      next: 'c1_ve_01'
    },
    c1_ch_inj_report: {
      id: 'c1_ch_inj_report',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“规矩人。”他朝你点点头，转身把纸塞进工具箱最里面那一格。那格是锁着的。",
      next: 'c1_ve_01'
    },
    c1_ch_inj_inspect: {
      id: 'c1_ch_inj_inspect',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "伊芙娜回头看了你两秒：“快点。”",
      next: 'c1_ch_inj_inspect_b'
    },
    c1_ch_inj_inspect_b: {
      id: 'c1_ch_inj_inspect_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你晚出发了九十秒。',
      next: 'c1_ve_01'
    },
    // ── 薇拉登场（hangar / duty） ──────────────────────────────────────────
    c1_ve_01: {
      id: 'c1_ve_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '隔壁停机位上停着一台你没见过的机子：比灰鸢矮一头，肩膀却宽得多，涂装是哑光灰绿，关节和替换件都是没喷漆的裸金属。右臂是一整条探测臂，末端三片镜片叠在一起；左臂倒是普通的机械手。\n它右腿外侧挂着一只接口箱，漆色和机身对不上，序列号那一块被人磨平了。',
      next: 'c1_ve_02'
    },
    c1_ve_02: {
      id: 'c1_ve_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      onEnter: [{ type: 'flag', key: 'met_vera', value: true }],
      text: '“薇拉·厄兰。第三小队二号机，夜枭。辅机序列二期，编号 AU-11。”\n她把编号报完，双手贴在裤缝上等你说话，过了半秒又补一句：“请多指教。”\n她说这句的时候看着你身后三米的地方，像在念一段背下来的东西。',
      next: 'c1_ve_03'
    },
    c1_ve_03: {
      id: 'c1_ve_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "伊芙娜从挂架那边绕过来，扫了一眼她肩章上重新缝过的名字带：“线换掉。白的反光，远处看得见。”\n“还有，”她走了两步又停下，“缝之前把旧印子拆干净。有人问起旧部队的事，你自己想好怎么答。”",
      next: 'c1_ve_04'
    },
    c1_ve_04: {
      id: 'c1_ve_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“记录：肩章白线反光，交接前更换。”\n她答得很快，快得像在念一张提前写好的卡。伊芙娜已经走远了，她还站在原地，把那句话默念了一遍，然后抬手摸了摸肩章——名字带底下确实压着一道旧印子，边缘发黑，洗不掉的那种。',
      next: 'c1_va_01'
    },
    c1_va_01: {
      id: 'c1_va_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "地勤今天少两个人，联合检查改成双机自己过。你和薇拉走到灰鸢左肩下面，把挂钩托架的四颗螺栓一颗一颗过了一遍。\n第三颗拧出来的时候她没有说话，只把螺栓举到灯下——螺纹的牙距比另外三颗粗，是后配的。",
      next: 'c1_va_01_b',
    },
    c1_va_01_b: {
      id: 'c1_va_01_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "“拿错型号了。”她翻过螺栓，把端面上的编号朝向你，“库存箱也得重新分一遍。”",
      next: 'c1_va_01_c'
    },
    c1_va_01_c: {
      id: 'c1_va_01_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "你们从备件箱底翻出两颗型号相符的螺栓，换掉旧件。装到第四颗时，扳手卡在了半圈的位置。薇拉俯身看了一眼孔沿，拿出量规：孔位偏了两毫米。",
      next: 'c1_va_02'
    },
    c1_va_02: {
      id: 'c1_va_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“记录：左肩挂耳四颗，两颗非标准件已换，第四颗孔位偏差两毫米，力矩按七成上。”\n她把这一串报完，又补了一句：“要不要我报到机修长那里？”",
      next: 'c1_va_02_p',
    },
    c1_va_02_p: {
      id: 'c1_va_02_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“我来说。”你把手电照在那颗拧不到底的螺栓上。',
      next: 'c1_va_02_b'
    },
    c1_va_02_b: {
      id: 'c1_va_02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“好。”她看着那颗螺栓，语气和刚才一样平，“如果他不换，第四颗会先变形。牵引的时候受力最大的就是它。”\n她说完就闭嘴了，像是在等你决定要不要把这句话当真。",
      next: 'c1_choice_wing'
    },
    c1_choice_wing: {
      id: 'c1_choice_wing',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "广播在催起飞。她站在登机梯下面等你说话——手扶着梯栏，等你拿主意。",
      choices: [
        {
          id: 'ch1_wing_lead',
          label: '“跟住我的左翼，其余按手册来。”',
          next: 'c1_ch_wing_lead',
          reaction: '她点了一下头，点得很标准。',
          effects: [
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'flag', key: 'vera_wing_lead', value: true }
          ]
        },
        {
          id: 'ch1_wing_check',
          label: "“你右腿那只箱子是后来加装的吧？自己检查过吗？”",
          next: 'c1_ch_wing_check',
          reaction: '她低头看了一眼接口箱，又抬头看你。',
          effects: [
            { type: 'trust', who: 'vera', amount: 2 },
            { type: 'flag', key: 'vera_box_asked', value: true }
          ]
        },
        {
          id: 'ch1_wing_joke',
          label: '“铎兰说，新来的要先请机库喝一轮合成咖啡。”',
          next: 'c1_ch_wing_joke',
          reaction: '挂架后面有人笑出了声，笑到一半停住。铎兰把脸转向工具柜，肩膀还在抖。',
          effects: [
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'flag', key: 'vera_joke_failed', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（c1_choice_wing）：薇拉 / 铎兰各自的回合单独成节点
    c1_ch_wing_lead: {
      id: 'c1_ch_wing_lead',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "“收到。左翼。”她转身去推登机梯，推到一半又回头：“手册里没有‘跟住某人的左翼’这一条。我记在队里的规矩下面。”",
      next: 'c1_ve_05'
    },
    c1_ch_wing_check: {
      id: 'c1_ch_wing_check',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“没有。交接单上写着无需检查。”她顿了一下，又说：“着陆以后我拆开看。拆坏了，我赔。”",
      next: 'c1_ve_05'
    },
    c1_ch_wing_joke: {
      id: 'c1_ch_wing_joke',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“丫头，这时候该先骂我一句，再提请客。”",
      next: 'c1_ve_05_j'
    },
    c1_ve_05_j: {
      id: 'c1_ve_05_j',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“记录：先骂，再请。”她顿了一下，补上一句，“你那张改装单我已经骂过了。”",
      next: 'c1_ve_05'
    },
    c1_ve_05: {
      id: 'c1_ve_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      variants: [
        {
          requires: ['vera_wing_lead'],
          text: '她把该做的检查又过了一遍，一个不多，一个不少。检查单背面多了一行她自己的字：跟住左翼。'
        },
        {
          requires: ['vera_box_asked'],
          text: '她把该做的检查又过了一遍，一个不多，一个不少，最后在右腿那只接口箱上停了两秒，把扣带又紧了一格。'
        },
        {
          requires: ['vera_joke_failed'],
          text: '她把该做的检查又过了一遍，一个不多，一个不少。最后一行她写得比平时慢，写完把笔帽扣好。'
        }
      ],
      text: '她把该做的检查又过了一遍，一个不多，一个不少。',
      next: 'c1_ve_05_p'
    },
    c1_ve_05_p: {
      id: 'c1_ve_05_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      variants: [
        {
          requires: ['vera_wing_lead'],
          text: '“我们这边有。飞的时候照这个来。”'
        },
        {
          requires: ['vera_box_asked'],
          text: '“不用赔。你看完把结论告诉我。”'
        },
        {
          requires: ['vera_joke_failed'],
          text: '“按我们的规矩，你刚才那句算及格。”'
        }
      ],
      text: '“上机吧。广播催到第三遍了。”',
      next: 'c1_ve_06'
    },
    c1_ve_06: {
      id: 'c1_ve_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '起飞广播念到了第三遍。夜枭的引擎先醒过来，声音压在机库的噪声底下，很闷。\n她已经坐进座舱了，座舱盖还没合。挂架上的扳手被人一把收走，地勤开始撤轮挡——这套动作今天早上已经练过一次。',
      next: 'c1_08'
    },
    c1_08: {
      id: 'c1_08',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'system',
      text: '警报。机库顶上的红灯一节一节往甲板方向亮过去，桁架上挂着的扳手被震得磕了两下。\n广播：全员一级战备。锚地外侧出现不明舰影，重复，不明舰影。白鹭号正在解缆。',
      next: 'c1_nv_01'
    },
    c1_nv_01: {
      id: 'c1_nv_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '你把自己扣进灰鸢的座舱。液压杆升到一半，挂架后面有人敲了两下玻璃。\n一个穿橙红飞行夹克的女人从阴影里探过来，两条细辫垂在肩前，脖子上挂着一串空白数据卡。',
      next: 'c1_nv_02'
    },
    c1_nv_02: {
      id: 'c1_nv_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      onEnter: [{ type: 'flag', key: 'met_nova', value: true }],
      text: "“呼号 {callsign}。诺瓦·岑，灰塔观测局。”她没等你回话，把一张数据卡按进座舱侧面的接口，“清单的事上天再说。频道上用观测员呼号叫我。真名进了记录，回去又要写接触报告。”\n液压杆继续升上去，她已经退回挂架的阴影里。",
      next: 'c1_09'
    },
    // ── 第二节拍：霜环锚地会战（battle / combat） ─────────────────────────────
    c1_09: {
      id: 'c1_09',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '升降机把灰鸢顶出舱口，气压在你耳朵里响了一下，接着是什么都听不见的两秒。\n白鹭号正在解缆。那是一条外环的老运输船，四个外挂货位只卸空了两个，船身向左压着，像被人拽住了一条腿。两百公里外，锚地浮标 AN-14 已经灭灯十九分钟了。',
      next: 'c1_10'
    },
    c1_10: {
      id: 'c1_10',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: "“第三小队，跟我上。掩护白鹭脱离锚地。”\n“守住运输船两侧，保持队形。白鹭过了锚点再撤。”",
      next: 'c1_10_b',
    },
    c1_10_b: {
      id: 'c1_10_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: "她顿了一下，在频道里补了最后一句：“{callsign}，你在编队末尾。发现白鹭读数异常，立即报告。”",
      next: 'c1_11'
    },
    c1_11: {
      id: 'c1_11',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'scarlet_voice',
      onEnter: [{ type: 'flag', key: 'heard_scarlet_hail', value: true }],
      text: '“这里是赤垣解放阵线，‘靛’字队。环带联合的渡鸦号，你们舱里那口棺材是谁的，你们比我清楚。”\n“让开航道。我们只要那一件，别的东西我们不碰。”',
      next: 'c1_12'
    },
    c1_12: {
      id: 'c1_12',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: "他用平常报航向的语气说完，频道安静了两秒。\n同一时刻，主屏上多了第三个信号：它从极轨切进来，速度不快，姿态稳得不像在打仗。",
      next: 'c1_13'
    },
    c1_13: {
      id: 'c1_13',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: "“{callsign}，刚才那句‘棺材’，你想不想知道里面装的是什么？”诺瓦的声音插进耳机，背景里有很轻的键盘声，“我手上有一份清单。看过一半，另一半被人用黑笔涂了。”",
      next: 'c1_13_b',
    },
    c1_13_b: {
      id: 'c1_13_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '“谁涂的？”你切回编队频道。',
      next: 'c1_13_c'
    },
    c1_13_c: {
      id: 'c1_13_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: "“这个问题比你那台机器值钱。先把船救回来，我再告诉你是哪一边涂的。”",
      next: 'c1_14'
    },
    c1_14: {
      id: 'c1_14',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'saw_drone_mothership', value: true }],
      text: "主屏上那个信号有了轮廓：一艘无人母舰，平整的舷侧从头到尾涂成灰白。\n它的涂层色号属于灰塔财团的商船序列，火控却在同时解算联合和赤垣——两边的船同时被套上了锁定框。",
      next: 'c1_ve_07'
    },
    c1_ve_07: {
      id: 'c1_ve_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "“二号机报告。”薇拉的频道很干净，背景里一点杂音都没有，“那艘母舰的舰体涂层是灰塔商船序列，火控握手用的却是联合的旧协议。协议版本是十一年前停用的那一版。”",
      next: 'c1_ve_07_b',
    },
    c1_ve_07_b: {
      id: 'c1_ve_07_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "“两边都对不上。我不确定它属于谁。”\n“确定的部分是：它的解算优先项是白鹭三号货位。这一点诺瓦说得对。”",
      next: 'c1_15'
    },
    c1_15: {
      id: 'c1_15',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: '“灰塔的涂装，没有国籍。观测局的人，解释。”',
      next: 'c1_16'
    },
    c1_16: {
      id: 'c1_16',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: "“中尉，三分钟以后再听解释。先看它的火控。”\n“解算一直咬着白鹭三号货位。那里装了什么？”",
      next: 'c1_b01'
    },
    c1_b01: {
      id: 'c1_b01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '航道外侧亮起两串曳光。两架“靛”字队的机子压着浮标切过去，把母舰的无人机舱口压在火线下面——他们不打算击沉它，只想让那两排无人机晚飞四十秒。\n那四十秒归你们用。',
      next: 'c1_17'
    },
    c1_17: {
      id: 'c1_17',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: "“呼号 {callsign}，机库频道。”铎兰身后全是鼓风机的声音，“白鹭的导航陀螺在漂，舵面是好的，坏的是数据。照这个漂法，四十秒以后它自己会滑进那艘母舰的射界。”",
      next: 'c1_17_b',
    },
    c1_17_b: {
      id: 'c1_17_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: "“它自己的推力已经掉头不了了。灰鸢左肩挂着牵引钩，去咬它三号货位的横梁，把船头往外顶。咬合角度我一边算一边报给你。”",
      next: 'c1_17_p'
    },
    c1_17_p: {
      id: 'c1_17_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '“它离我多远？”',
      next: 'c1_17_c'
    },
    c1_17_c: {
      id: 'c1_17_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: '“六十米，偏右下方，相对速度每秒一点四。”',
      next: 'c1_18'
    },
    c1_18: {
      id: 'c1_18',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: "“{callsign}，听清楚：先同步数据链，执行联合牵引程序。挂钩留作备用。”\n“铎兰的办法在这个高度还没试过。真要用，你得给我一个把握。”",
      next: 'c1_choice_trust'
    },
    c1_choice_trust: {
      id: 'c1_choice_trust',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '白鹭的读数还在往下掉。\n伊芙娜在等你的回答。诺瓦的手指搭在接口上，铎兰的终端一直在响。',
      choices: [
        {
          id: 'ch2_obey',
          label: '服从伊芙娜：保持静默，走联合的牵引程序。',
          next: 'c1_ch_trust_obey',
          reaction: '你把灰鸢贴到白鹭左舷下方，用肩甲抵住它的横梁，一点一点把横滚压回去。读数一格一格往安全区爬。\n爬完最后一格，你才发现自己屏了八秒的气。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 2 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'obey_ivna', value: true }
          ]
        },
        {
          id: 'ch2_nova',
          label: '交给诺瓦：“数据链给你。快。”',
          next: 'c1_ch_trust_nova',
          reaction: '诺瓦敲了三下接口，把漂掉的陀螺数据硬拉回中线。她盯着读数看了两秒，像是在确认什么。',
          effects: [
            { type: 'trust', who: 'nova', amount: 2 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'spire_datalink', value: true }
          ]
        },
        {
          id: 'ch2_hail',
          label: '切明码频道：“靛字队，这里是环带联合预备机师 {callsign}。棺材里是谁的我不知道，但这半条航道我们一起用。”',
          next: 'c1_ch_trust_hail',
          reaction: '赤垣的频道空了三秒，有人骂了句脏话。航道图上真的让出了半条。\n你身后，伊芙娜隔着座舱盖看了你一眼，一个字没说。',
          effects: [
            { type: 'trust', who: 'doran', amount: 2 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'flag', key: 'open_hail', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（c1_choice_trust）
    c1_ch_trust_obey: {
      id: 'c1_ch_trust_obey',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: '事后在频道里，伊芙娜只说了两个字：“可以。”',
      next: 'c1_19'
    },
    c1_ch_trust_nova: {
      id: 'c1_ch_trust_nova',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: "“成了。”她说，“回头我把这一行写进报告，顺手把你的呼号删掉。”\n她说完停了一下，像是没料到自己会补上后半句。",
      next: 'c1_19'
    },
    c1_ch_trust_hail: {
      id: 'c1_ch_trust_hail',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'scarlet_voice',
      text: '“联合什么时候开始收人了。”那个男声说。',
      next: 'c1_19'
    },
    c1_19: {
      id: 'c1_19',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '白鹭的船头还在往外滑。牵引程序要走完三个校验周期，第三个还没开始，它的三号货位已经进了母舰的解算框。\n你按下了挂钩释放钮。挂钩从灰鸢左肩的托架里翻出来，锁扣在真空中没有声音。',
      next: 'c1_b03'
    },
    c1_b03: {
      id: 'c1_b03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: "白鹭的舰桥上了公用频道，声音被舰体传声压得很扁：“环带联合的机子，我们三号货位的锁扣已经断了。后舱还有三个人，都系在货架上。”",
      next: 'c1_b03_b',
    },
    c1_b03_b: {
      id: 'c1_b03_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '“稳住航向，别自己转向。”你回他，“我来顶你的船头。”',
      next: 'c1_b03_c'
    },
    c1_b03_c: {
      id: 'c1_b03_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '对面的频道没有关，但你只能听见三个人在货架那边互相数数的声音。',
      next: 'c1_20'
    },
    c1_20: {
      id: 'c1_20',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: "“咬合点在你前面十一点方向，横梁外缘。找横梁受力，旁边的旧船板承不住。”\n“挂钩口径三十二，横梁我量过，四十一——咬得住，吃不满。你只有一次咬合机会，松了就得重来一轮。”",
      next: 'c1_21'
    },
    c1_21: {
      id: 'c1_21',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '你把推力压到两成，从下方切进去。白鹭的船壳在你头顶慢慢转，货架的影子一段一段从座舱盖上刷过去。\n横梁上有两道旧焊痕，右端比左端低，结着一层薄霜。距离三米，两米，一米。锁扣咬进去的时候，整台灰鸢抖了一下。',
      next: 'c1_b02'
    },
    c1_b02: {
      id: 'c1_b02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: "一块白鹭掉下来的货架卡角从你右上方擦过去，撞在灰鸢右肩的警示条上，把那一段漆刮成了银白色。",
      next: 'c1_b02_b',
    },
    c1_b02_b: {
      id: 'c1_b02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "“右上方有碎片，距离八米，往后躲半米。”她停了一拍，“你的右肩没事，漆掉了。”",
      next: 'c1_b02_c'
    },
    c1_b02_c: {
      id: 'c1_b02_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '你往里收了半步，锁扣在横梁上咬得更实了。',
      next: 'c1_22'
    },
    c1_22: {
      id: 'c1_22',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“二号机报告：相对速度一点二，闭角十一度。我在你上方二十米，测距一直开着。”\n她停了一拍，语速没有任何起伏：“横梁右端比左端低四厘米。咬右端。你咬得对。”',
      next: 'c1_23'
    },
    c1_23: {
      id: 'c1_23',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '你把推力推到四成。白鹭的船头动了半度，锁扣里的金属开始叫——那种声音靠结构传进座舱，头盔里听得一清二楚。\n左肩的应力表跳到了红线的下半格。',
      next: 'c1_24'
    },
    c1_24: {
      id: 'c1_24',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: "“吃住了。应力在涨。”\n“左肩那块额定三点八，现在四点一……等等，四点六。钩子还稳着，挂耳已经变形！”",
      next: 'c1_24_b',
    },
    c1_24_b: {
      id: 'c1_24_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: "“你要么现在收手，把她交给母舰；要么想个办法把这个力矩拆开。”",
      next: 'c1_25'
    },
    c1_25: {
      id: 'c1_25',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '你按着通讯键喊出去：“夜枭，把你的探测臂伸过去，顶住横梁。”',
      next: 'c1_26'
    },
    c1_26: {
      id: 'c1_26',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "“不行。”\n这两个字她说得比任何一句报告都快。\n“探测臂根部装在颈环上，侧向受力超过两百公斤就会错位。错位我就报不出数据，报不出数据你就等于闭着眼睛顶一条六十米的船。”",
      next: 'c1_26_b',
    },
    c1_26_b: {
      id: 'c1_26_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "“我可以用左手。机械手推杆的额定是六百公斤，我顶在横梁下面，把力矩拆成两段给你。”",
      next: 'c1_27'
    },
    c1_27: {
      id: 'c1_27',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '“什么叫拆成两段。”你问。',
      next: 'c1_27_b'
    },
    c1_27_b: {
      id: 'c1_27_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“我先顶住横梁下方，你把推力降到六成。”她报位置报得很快，像早就把这道题算完了，“等船头顶过十二度，我换一次手。二十秒。”',
      next: 'c1_27_c'
    },
    c1_27_c: {
      id: 'c1_27_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '频道里安静了半秒。伊芙娜没有出声。',
      next: 'c1_28'
    },
    c1_28: {
      id: 'c1_28',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: '“这个法子我没试过。”铎兰说，“但她的数是齐的，比我算的还齐。”\n“你定。左肩那块板子今天已经替你吃过一次了。”',
      next: 'c1_29'
    },
    c1_29: {
      id: 'c1_29',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '“按你说的。六成。”',
      next: 'c1_29_b'
    },
    c1_29_b: {
      id: 'c1_29_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '夜枭从你上方掠过去，灰绿色的机身贴着白鹭的货架滑到横梁下面，左臂的机械手按上去，指节和船板之间只剩两指宽的缝。频道里从此只剩两个数字在跳：角度、应力。',
      next: 'c1_29_c'
    },
    c1_29_c: {
      id: 'c1_29_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“九度。四点三。”\n“十二度。三点九。”',
      next: 'c1_30'
    },
    c1_30: {
      id: 'c1_30',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“换手。”\n她的左手在横梁上挪了半米。画面里那只机械手的手背被船壳蹭掉一层漆，露出下面的裸金属。\n“十四度。三点四。你可以把推力加回去了。”',
      next: 'c1_b04'
    },
    c1_b04: {
      id: 'c1_b04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '白鹭的导航陀螺回到中线，指针抖了两下，稳住。它的舰桥只说了半句：“环带联合，白鹭记下了。”后面那半句被伊芙娜的进线指令压掉了。\n你松开挂钩的时候，锁扣在横梁上留了一道很深的白痕。',
      next: 'c1_31'
    },
    c1_31: {
      id: 'c1_31',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '母舰的解算框在主屏上散成一堆浮点，火控频点从你耳朵里退了出去。\n然后它换了目标。',
      next: 'c1_32'
    },
    c1_32: {
      id: 'c1_32',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'saw_xr07', value: true }],
      text: "一道射流从白鹭三号货位的锁扣上切过去，干净利落，像有人用开箱刀划开一条胶带。\n货箱盖翻起来。一台嵌满神经桥接的旧式驾驶舱，从箱里露了出来，外壳上刷着一个褪色的编号：XR-07。",
      next: 'c1_33'
    },
    c1_33: {
      id: 'c1_33',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: '“……”\n通讯里静了半秒，伊芙娜的声音才接上来，比刚才低一档：“全部返航。收队。”',
      next: 'c1_34'
    },
    c1_34: {
      id: 'c1_34',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      onEnter: [{ type: 'flag', key: 'heard_age_correlation', value: true }],
      text: '“XR-07。”诺瓦说，“曦尔计划第七台原型机。二十年前那批档案里，它是唯一一台没有销毁记录的。”\n她念完，像是想起什么，又补了一句——这一句她没有对着频道说，是对着操作台说的：\n“中尉的档案年龄……你们自己看。”',
      next: 'c1_35'
    },
    c1_35: {
      id: 'c1_35',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '无人母舰慢慢退回极轨，姿态稳得像来的时候。它一次都没有想把谁打沉。\n白鹭的三号货位敞着口，箱子还在上面挂着，一半的数据随着那口箱子一起离开了这条航道。',
      next: 'c1_36'
    },
    c1_36: {
      id: 'c1_36',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: '“呼号 {callsign}，别追。”铎兰的声音有点哑，“你那把挂钩现在卸不下来了，卡死了。”\n“带着它回来。我到甲板上接你。”',
      next: 'c1_37'
    },
    c1_37: {
      id: 'c1_37',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      variants: [
        {
          requires: ['delayed_scramble'],
          text: '返航路上你才有空看自己的左肩：那块替换件已经从挂耳的螺栓孔裂到了喷口侧面，整块板子只剩两根铆钉连着。\n要是你准时升空，咬合点还会往后三十米，吃的力矩也会小一格。这台机器替你那九十秒买了单。'
        }
      ],
      text: '返航路上你才有空看自己的左肩：那块颜色不一样的替换件已经从挂耳的螺栓孔裂到喷口侧面，只剩两根铆钉连着。\n灰鸢落地的时候，你把左臂收得很慢，慢到地勤以为你在省什么。',
      next: 'c1_lz_01'
    },
    // ── 落地与救援（hangar -> hold / duty-track） ───────────────────────────
    c1_lz_01: {
      id: 'c1_lz_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '白鹭被两条拖索拉回渡鸦号左舷，缺口一路在冒白汽。它的后舱门卡住了一半，液压管爆开，门缝里挤着两名甲板工。\n广播在喊救护组，救护组还在三号升降机那边。',
      next: 'c1_lz_02'
    },
    c1_lz_02: {
      id: 'c1_lz_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "“后舱门卡在第四段，液压已经泄完。里面那个人的腿被货架压住了。”",
      next: 'c1_lz_02_b',
    },
    c1_lz_02_b: {
      id: 'c1_lz_02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "夜枭的座舱已经打开，她半个身子还挂在座舱边，报得很快：“我能用手把货架抬起来。你进去拖他——我抬起来的时候你只有七秒，之后我的关节会过热保护。”",
      next: 'c1_lz_02_p'
    },
    c1_lz_02_p: {
      id: 'c1_lz_02_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '“七秒够吗？”',
      next: 'c1_lz_02_c'
    },
    c1_lz_02_c: {
      id: 'c1_lz_02_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“够你拖两米。”',
      next: 'c1_lz_03'
    },
    c1_lz_03: {
      id: 'c1_lz_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: "夜枭的左臂伸进门缝，机械手卡进货架横档，往上一抬。锈水顺着门框淌下来，落在你的面罩上。",
      next: 'c1_lz_03_b',
    },
    c1_lz_03_b: {
      id: 'c1_lz_03_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: "你抓着他的肩带往回拖。第一下没拖动，第二下货架往下沉了一指宽，你听见背后有人在骂——是铎兰，他不知什么时候跟了进来，用铜色的左臂替你顶住了门框。\n两米。",
      next: 'c1_lz_04'
    },
    c1_lz_04: {
      id: 'c1_lz_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“左小腿开放性骨折，出血量中等，意识清醒。担架到这里需要四十秒，我先用他的腰带做了止血带，位置在大腿中段。”",
      next: 'c1_lz_04_b',
    },
    c1_lz_04_b: {
      id: 'c1_lz_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "她把情况报完，才低头看了那个甲板工一眼，补了一句不在清单上的话：“你骂得很大声，这说明你没伤到头。”\n那个人笑了一下，笑到一半疼得停住了。",
      next: 'c1_lz_05'
    },
    c1_lz_05: {
      id: 'c1_lz_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '救护组推着担架拐进机库的时候，你才注意到自己右手在抖。\n夜枭的左手机械手还搁在门框上，关节缝里往外渗着白烟。薇拉站在梯子上看着它，像在数还剩几个动作，然后把手套摘了，露出一排缠着白胶布的手指。',
      next: 'a1_01'
    },
    // ── 第三节拍：三号货舱，十二分钟处置窗口（hold / duty） ──────────────────
    a1_01: {
      id: 'a1_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: 'XR-07 从白鹭的三号货位吊过来，落地的时候三号货舱的底板响了一声，像有人用指关节敲了下桌子。\n压力门在它后面合上，封存区只开了一半工作灯。驾驶舱外壳上那层褪色的漆碰一下掉一片，露出下面全新的接缝——这台东西被人拆开重接过，而且接得很仔细。',
      next: 'a1_02'
    },
    a1_02: {
      id: 'a1_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“任务结束。白鹭货舱里的东西列三级封存，任何人不得靠近，包括你，预备机师。”\n她说完这句，右手一直在抖，抖得很匀。",
      next: 'a1_02_b',
    },
    a1_02_b: {
      id: 'a1_02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“但移运单要有人签字。牵引命令是你下的，这一票挂在你名下——你去把白鹭的货单核对回来，二十分钟以内。签错了字，今晚这船上所有人的证词都会变得很难看。”",
      next: 'a1_03'
    },
    a1_03: {
      id: 'a1_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“等一下。”铎兰蹲在驾驶舱边上，凑近货箱的切口嗅了嗅，“这股润滑脂味……刚涂上去的。”",
      next: 'a1_03_b',
    },
    a1_03_b: {
      id: 'a1_03_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“我修了十四年旧机体，这个味道我认得。它是台老的，被人重新接过一遍，接的时候用的是库存外的手。”\n他伸出手指在接缝上抹了一下，把指腹给你看：油是新的。",
      next: 'a1_07'
    },
    a1_07: {
      id: 'a1_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "白鹭的大副把货单送到货舱来的时候，手还在抖。他要求把三号货位写成“训练器材，一台”；你把手电照在货箱封条上——两条封条，一条完好，一条被射流切断了。",
      next: 'a1_07_p',
    },
    a1_07_p: {
      id: 'a1_07_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“按现状登记。”你说。',
      next: 'a1_07_b'
    },
    a1_07_b: {
      id: 'a1_07_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "大副盯着你手里的笔看了一会儿，签了字。薇拉站在吊索下面，把两条封条的编号逐字念出来，念完在清册上打了个勾。\n吊索往上收的时候，货箱离底板二十厘米，她把左手伸到箱子下面托了一下——托到箱子放进轨道车，一共十九秒。",
      next: 'a1_04'
    },
    a1_04: {
      id: 'a1_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“说三件已经确定的事。”诺瓦靠在压力门上，把袖子往上拉了拉，“一，检查官八十六分钟后对接，比刚才广播里说的快四分钟。二，这台驾驶舱的记录器还剩十二分钟可读，过了自动覆写，我们得赶在覆写前读完。”",
      next: 'a1_04_b',
    },
    a1_04_b: {
      id: 'a1_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“三，那艘母舰带走了白鹭三号货位的一半读数。数据一到手，它就撤了。”\n“我说完了。你们两个都听见了。”",
      next: 'a1_choice_wreck'
    },
    a1_choice_wreck: {
      id: 'a1_choice_wreck',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三号货舱里只剩下工作灯和记录器的指示灯。你有十二分钟，三双眼睛都在等你先开口——门那边的军士长已经开始往封条上写日期了。',
      choices: [
        {
          id: 'ch3_seal',
          label: '“封存。编号登记，贴条，等安全处的人自己来开。”',
          next: 'a1_05',
          reaction: '伊芙娜点头，一个字没多说，把编号写进了移运单。\n铎兰把手插进兜里，退开半步，一直退到工作灯照不到的地方。诺瓦看了你两秒，在数据卡上划掉一行。\n十二分钟里，记录器自己覆写完了全部内容。',
          effects: [
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'wreck_sealed', value: true }
          ]
        },
        {
          id: 'ch3_prize',
          label: '“铎兰，先把它拆出来。十二分钟，别留指纹。”',
          next: 'c1_ch_wreck_prize',
          reaction: '他钻进驾驶舱的背影比在机库里利索十倍，工具袋压在膝盖下面，一颗螺丝都没掉在底板上。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'flag', key: 'wreck_prized', value: true }
          ]
        },
        {
          id: 'ch3_read',
          label: '“诺瓦，你去读。数据链只对你开放，读完把结果说给所有人听。”',
          next: 'c1_ch_wreck_read',
          reaction: '诺瓦的手指在颈边的数据卡上敲了三下。她接进接口，只用了六分钟，中间停了一次手，去看伊芙娜的背影。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'wreck_read_first', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（a1_choice_wreck）
    c1_ch_wreck_prize: {
      id: 'c1_ch_wreck_prize',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“这才对。”',
      next: 'c1_ch_wreck_prize_b'
    },
    c1_ch_wreck_prize_b: {
      id: 'c1_ch_wreck_prize_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜没有拦你，只在压力门上敲了两下——那是“我知道你在干什么”的意思。\n记录器拆出来的时候还剩四分钟。',
      next: 'a1_05'
    },
    c1_ch_wreck_read: {
      id: 'c1_ch_wreck_read',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“读完说给所有人听。”她把这句重复了一遍，像在确认条款，“以前我只向接收人交报告。你是要全舰通报？”",
      next: 'a1_05'
    },
    a1_05: {
      id: 'a1_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      variants: [
        {
          requires: ['wreck_sealed'],
          text: '广播：封存指令已登记，签令人呼号 {callsign}。值班记录员到三号货舱复核封条。\n广播：安全处的交通艇预计八十六分钟后对接，涉事人员各自准备证词。'
        },
        {
          requires: ['wreck_prized'],
          text: '广播：三号货舱作业申请未备案。铎兰·阿吉斯被要求在交接前提交工具清单。\n广播：安全处的交通艇还有八十六分钟，证词由舰务统一收件。'
        },
        {
          requires: ['wreck_read_first'],
          text: '广播：灰塔观测局观察员提交了一次本地数据读取申请。批准。\n广播：安全处的交通艇八十六分钟后对接，证词统一由舰务收件，涉事人员不得私下交换内容。'
        }
      ],
      text: '广播：三号货舱处置记录待补，交接后由值班军士长归档。所有涉事人员准备独立证词，证词由舰务统一收件。',
      next: 'a1_06'
    },
    a1_06: {
      id: 'a1_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "记录器的指示灯灭了。三号货舱里那台驾驶舱现在只是一台旧的驾驶舱，值不值钱要看接下来这一小时怎么写。",
      next: 'a1_06_b',
    },
    a1_06_b: {
      id: 'a1_06_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "八十六分钟，要办完三件事：医务舱的伤情与证词底稿、机库那台被你飞裂了左肩的灰鸢、还有诺瓦手上那份会决定谁被“清理”的报告。\n三个人现在在不同的地方。先找谁，这艘船会记住。",
      next: 'a2_choice_order'
    },
    a2_choice_order: {
      id: 'a2_choice_order',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你把移运单交回军士长手里。走廊的灯一盏接一盏从你脚下亮过去，三个方向都有人在等。',
      choices: [
        {
          id: 'ch4_med',
          label: '先去医务舱。伊芙娜的右手从落地起就没停过抖。',
          next: 'ivna_01',
          reaction: '你敲了门。里面静了很久，久到你以为该走了，然后传来门闩被拨开的声音。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'flag', key: 'first_ivna', value: true }
          ]
        },
        {
          id: 'ch4_machine',
          label: '先去三号机库。灰鸢的左肩还挂着一把卸不下来的钩子。',
          next: 'doran_01',
          reaction: '你到机库的时候，他正把一样东西塞进工具箱第二格——你看见了，他也知道你看见了。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'flag', key: 'first_doran', value: true }
          ]
        },
        {
          id: 'ch4_deck',
          label: '先去观察廊。那份报告上有所有人的名字，包括你的。',
          next: 'nova_01',
          reaction: '她听见脚步声就转过身来，屏幕上那张表在你走近的最后三步里被她最小化了——但她没有关掉。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'flag', key: 'first_nova', value: true }
          ]
        }
      ]
    },
    // ── 第四节点一：医务舱（medbay / duty） ─────────────────────────────────
    ivna_01: {
      id: 'ivna_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'seen_ivna', value: true }],
      variants: [
        {
          requires: ['first_ivna'],
          text: '医务舱的检查灯只开了一盏。伊芙娜坐在检查台边上，作训服上半褪到腰，锁骨下面那块固定胶布刚撕下来一半，专用扳手摊在她自己手边的托盘里。\n门是反锁过的，门闩现在拨开了，但她的手还搭在门把上。'
        }
      ],
      text: '医务舱里两张床空着一张，隔帘拉到一半。伊芙娜坐在检查台边上，领口扣得一丝不苟，工具盘收在托盘里——收得太整齐的人，通常刚做完一件不想让人看见的事。\n救护组刚走，登记台上还摊着今晚的记录。',
      next: 'ivna_02'
    },
    ivna_02: {
      id: 'ivna_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '“把门关上。过来签个字。”\n她把记录推到台面边缘，手指点在第二行：“白鹭那个甲板工，止血带的时间记错了，记成十九分四十七。实际下止血带的人报的是十九分二十。差二十七秒，是一条小腿能不能保住的记录。”\n“你在场。你签这一行。”',
      next: 'ivna_03'
    },
    ivna_03: {
      id: 'ivna_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'saw_ivna_port', value: true }],
      text: "你低头签字的时候，她伸手去够托盘。领口滑开，那道“旧烧伤”下面的接口环露了出来——金属环嵌在锁骨下方，编号被人用锉刀磨过，只剩下两个字符还能看清：XR。\n接口环上还留着出厂登记的刻痕。她顺着你的目光低头，伸手合上领口。",
      next: 'ivna_04'
    },
    ivna_04: {
      id: 'ivna_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“看清楚了吧。”她把领口拉平，动作很慢，“现在你有三个选择：当作没看见；或者写进证词——按条令，那才是对的做法；或者你现在出去，去问一个更省事的版本。”",
      next: 'ivna_04_b',
    },
    ivna_04_b: {
      id: 'ivna_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“提前告诉你代价：那两个字母进了正式文件，这条船上会有人的名字被划到另一张纸上去。我。还有一种可能，是你。”\n“扳手在这儿。你说话之前先想清楚。”",
      next: 'ivna_choice'
    },
    ivna_choice: {
      id: 'ivna_choice',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '她把扳手横在托盘和你之间，等一个答案。医务舱外面有人推着车经过，车轮卡了一下门槛，又走远了。',
      choices: [
        {
          id: 'ch5_cover',
          label: '“我什么都没看见。条件是——你告诉我你是谁，包括你不想说的那部分。”',
          next: 'c1_ch_ivna_cover',
          reaction: '她盯着你看了很久，久到检查灯自动调暗了一档，然后报了一串编号，语气平得像在念别人的档案。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 2 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'flag', key: 'ivna_covers', value: true },
            { type: 'flag', key: 'know_xr03', value: true }
          ]
        },
        {
          id: 'ch5_report',
          label: '“你和我一起去指挥舱，我们一起上报——这是唯一能让你合法留在船上的路。”',
          next: 'c1_ch_ivna_report',
          reaction: '她看了你三秒。那三秒里她什么都没说，只是把扳手从左手换到右手，又换回去。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'ivna_reported', value: true },
            { type: 'flag', key: 'know_xr03', value: true }
          ]
        },
        {
          id: 'ch5_silent',
          label: "你把台面上那张镇静剂领用单拿过来，叠好，放进自己口袋。",
          next: 'c1_ch_ivna_silent',
          reaction: '她看着你把那张纸叠成四折，很久没有说话。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'flag', key: 'ivna_shielded', value: true },
            { type: 'flag', key: 'carry_hidden_form', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（ivna_choice）
    c1_ch_ivna_cover: {
      id: 'c1_ch_ivna_cover',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“第二件事：你要问的时候，先关门。这门锁坏过两次，每次都有人在门外听。”",
      next: 'ivna_05'
    },
    c1_ch_ivna_report: {
      id: 'c1_ch_ivna_report',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“你说得对。”她终于开口，“而且我讨厌你说得对。”",
      next: 'c1_ch_ivna_report_b'
    },
    c1_ch_ivna_report_b: {
      id: 'c1_ch_ivna_report_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把扳手收进工具袋，先你一步去开门，走到门口又停下，把记着错误的第二行重新指给你看——那张纸你还得签。',
      next: 'ivna_05'
    },
    c1_ch_ivna_silent: {
      id: 'c1_ch_ivna_silent',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“那张单子上写着我今晚领了两支。”她最后说，“领用单归舰医，你拿走它，舰医明天会来问我。”",
      next: 'c1_ch_ivna_silent_b'
    },
    c1_ch_ivna_silent_b: {
      id: 'c1_ch_ivna_silent_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她没有让你还回来。',
      next: 'ivna_05'
    },
    ivna_05: {
      id: 'ivna_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      variants: [
        {
          requires: ['ivna_covers'],
          text: '“XR-03。第七号样本，对照组。二十年前那批里，唯一一台没有登记销毁的。”\n“你会用到的只有一件事：XR-07 的神经桥接只认这一串编号。它不认舰籍，不认军规，也不认你现在是什么军衔。”'
        },
        {
          requires: ['ivna_reported'],
          text: "“XR-03，第七号样本。你想知道细节，就去听正式问询，我不在医务舱里说第二遍。”\n“今晚你向他们作了保证。正式问询时，我会在场听。”"
        },
        {
          requires: ['ivna_shielded'],
          text: "“那张单子只记了镇静剂用量。”\n“如果检查官问起，照你亲眼看见的说。病情让军医解释。”"
        }
      ],
      text: '她把工具袋扣上，没有再说别的。',
      next: 'ivna_06'
    },
    ivna_06: {
      id: 'ivna_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '出门之前你把两件事拼到了一起：白鹭上那台驾驶舱的接缝是新的，油是新的，而伊芙娜锁骨下面的接口环是旧的，编号被人磨过。\n二十年前那批样本，今晚在这条航道上有两台。一台在货舱里躺着，一台在替你签移运单。',
      next: 'ivna_07'
    },
    ivna_07: {
      id: 'ivna_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      variants: [
        {
          requires: ['ivna_covers'],
          text: "她在你身后叫住你，声音压得很低：“下次一起去见他们。我来讲经过，你说你亲眼看到的。”\n“站我旁边，给我留点说话的地方。”"
        },
        {
          requires: ['ivna_reported'],
          text: "“你今天做对了。”她说，“明天检查官会核对证词。今天见到的经过，你再从头理一遍。”"
        }
      ],
      text: '她把最后一格盖板扣上，抬下巴示意你出门：“灰鸢左肩的报废单还没签。铎兰在机库等你，他不会等你太久。”',
      next: 'seg_ivna'
    },
    // ── 第四节点二：三号机库（workshop / duty + 生活） ────────────────────────
    doran_01: {
      id: 'doran_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'seen_doran', value: true }],
      variants: [
        {
          requires: ['first_doran'],
          text: '三号机库的灯还亮着一半。灰鸢的左肩装甲卸下来靠在台钳上，裂口对着灯。铎兰坐在起落架下面，手里那杯合成咖啡糖放多了，甜得发苦。\n他递给你另一杯，杯壁还是热的，然后往工具箱那边偏了偏头。'
        }
      ],
      text: '灰鸢的左肩装甲卸下来靠在台钳上，裂口对着灯，像一张被掰开的饼干。铎兰蹲在起落架下面，铜手指夹着一颗取不出来的螺栓，转了半圈又退回来，动作熟练得看不出情绪。\n工具箱第二格锁着，锁是新的，锁扣上还留着出厂的那层保护膜。',
      next: 'doran_02'
    },
    doran_02: {
      id: 'doran_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“先喝一口。”他把台钳边上那只杯子推给你，“喝完再骂我那张单子。”\n他拧了两下，把螺栓吐在手心。“说正事。你今晚能回来，是因为左肩那块板子替你吃了力矩。它是别的机身上拆下来的，挂耳孔位差两毫米——我给你垫了片铁皮，垫片今晚磨没了。”\n“那格先搁着，过来帮我抬一下装甲。”\n“明天我重打四个孔。后天它还能飞。”",
      next: 'doran_03'
    },
    doran_03: {
      id: 'doran_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'saw_doran_notes', value: true }],
      text: "你弯腰去抬那块装甲，工具箱第二格从台面上震开了一条缝，里面滑出一叠便签。\n纸上抄着渡鸦号导航核心的坐标，一页一页标着偏差值。最后一页角上画着一个记号：三道向内的短横线。\n他让你看清了，才伸手把纸收回去，一张一张码整齐。",
      next: 'doran_04'
    },
    doran_04: {
      id: 'doran_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "“十四年，这船上的每台机器我都修过。霜环航道吊着十七个矿站的补给，配给表上他们排最后，排了十一年。”",
      next: 'doran_04_b',
    },
    doran_04_b: {
      id: 'doran_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "“你要把我交出去，现在是最好的时候。我两只手都在台面上，铜的那只你还可以先卸下来。”\n他说完这句，把两只手真的摊平在台面上，机油在灯下反着光。",
      next: 'doran_choice'
    },
    doran_choice: {
      id: 'doran_choice',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '扳手在台面中间，谁伸手都够得到。他没有往后退，也没有往前一步。',
      choices: [
        {
          id: 'ch6_open',
          label: "“打开第二格让我看完。你自己接了什么事，我得知道。”",
          next: 'c1_ch_doran_open',
          reaction: '他打开锁，把整叠便签推到你面前，然后笑了，眼角全皱起来。\n他从台面下摸出一把备用钥匙，放在你那杯咖啡旁边。',
          effects: [
            { type: 'trust', who: 'doran', amount: 2 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'flag', key: 'doran_trusted', value: true },
            { type: 'flag', key: 'know_doran_scarlet', value: true }
          ]
        },
        {
          id: 'ch6_stop',
          label: '“停手。今晚你把核心装回去，我替你兜住。只兜今晚。”',
          next: 'c1_ch_doran_stop',
          reaction: '他把锁扣转了两圈，钥匙握在自己手心里。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: -1 },
            { type: 'flag', key: 'doran_stopped', value: true }
          ]
        },
        {
          id: 'ch6_record',
          label: "你把那个记号抄在手背上，朝装甲另一端抬了抬下巴：“先把这个搬完。”",
          next: 'c1_ch_doran_record',
          reaction: '他看见了你抄下的那一行，笑意收了半截，把后半句话咽了回去。',
          effects: [
            { type: 'trust', who: 'doran', amount: -1 },
            { type: 'flag', key: 'doran_watched', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（doran_choice）
    c1_ch_doran_open: {
      id: 'c1_ch_doran_open',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: "“你听见了没有，”他说，“我干这个十四年，第一次有人先看证据，再看我这个人。”\n他把那叠纸又往你那边推了一寸：“这个叫共犯凭证，留着。”",
      next: 'doran_05'
    },
    c1_ch_doran_stop: {
      id: 'c1_ch_doran_stop',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "“只兜今晚，行。”他捻了捻纸角，“明天的事我自己想办法。你肯帮到这一步，我记着。”",
      next: 'doran_05'
    },
    c1_ch_doran_record: {
      id: 'c1_ch_doran_record',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '“抬稳点。”他只说，“这台机器今天救过你的命。它的左肩明天归我。”',
      next: 'doran_05'
    },
    doran_05: {
      id: 'doran_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      variants: [
        {
          requires: ['doran_trusted'],
          text: "“我要接通导航核心的一条影子线路。”\n“接好以后，霜环会多一条隐蔽航道。线路和船体主控隔开，我试过三遍。”\n“这船上一半人是我从火里拖出来的。我得让他们平安到港。”"
        },
        {
          requires: ['doran_stopped'],
          text: "“你让我停，我就停。可十七个矿站不会因为你讲规矩就晚一天挨饿。”\n“说好只帮今晚，我记着。天亮以后，我另找办法。”"
        },
        {
          requires: ['doran_watched'],
          text: "“记号收好了。”\n“以后在导航图里看到同样的标记，先叫我。那台机体另有主人，得认清了再接近。”"
        }
      ],
      text: '他把扳手在台面上敲了一下，像收工。',
      next: 'doran_06'
    },
    doran_06: {
      id: 'doran_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "你抬着那块装甲往架子上放，视线扫过最上面那张便签的背面。",
      next: 'doran_06_b',
    },
    doran_06_b: {
      id: 'doran_06_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "背面还有一行小字：XR-07 的三段喷口改装参数——就是今晚那张违规改装单上的参数，一个数不差。\n页眉和标注栏用的都是渡鸦号舰体图纸的版式。",
      next: 'doran_07'
    },
    doran_07: {
      id: 'doran_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      variants: [
        {
          requires: ['doran_trusted'],
          text: "“工具箱第二格，你随时可以开。钥匙我不藏了。”\n他端起你那杯已经凉透的咖啡喝了一口，皱起眉：“这玩意儿真难喝。下次还是你来泡吧。”"
        }
      ],
      text: '“回去歇会儿。”他摆摆手，“灰鸢的左肩明天归我，你归你的证词。对了——咖啡机那个按钮还是坏的，得先骂它一句再按。”',
      next: 'seg_doran'
    },
    // ── 第四节点三：观察廊（ship_rail / duty + 生活） ─────────────────────────
    nova_01: {
      id: 'nova_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'seen_nova', value: true }],
      variants: [
        {
          requires: ['first_nova'],
          text: '观察廊整排舷窗都是冷的，靠窗的长椅上搭着一件外套，外套下面压着一个保温杯。诺瓦坐在唯一亮着的那块屏幕前，屏幕上是一张表，最后一列是你的呼号。\n你走近最后三步，她把表最小化了。她没有关掉它。'
        }
      ],
      text: '观察廊的灯关了大半，舷窗上结着一层薄霜，外面的星光是糊的。诺瓦坐在长椅一头，保温杯立在脚边，屏幕压低了一个角度，光把她的两条细辫照出毛边。',
      next: 'nova_02'
    },
    nova_02: {
      id: 'nova_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“你来得正好。我在给你那一栏写第三个版本，前两个我删了。”\n她把保温杯拿起来晃了晃，里面是空的。“这很不正常，呼号 {callsign}。我从来不删数据——删了就是承认自己算错过。”",
      next: 'nova_02_b',
    },
    nova_02_b: {
      id: 'nova_02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "“顺便说一句，这条廊道的加热片坏了两个月，报修单被驳了三次。你们这条船的钱都花在哪了？”",
      next: 'nova_03'
    },
    nova_03: {
      id: 'nova_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'saw_nova_report', value: true }],
      text: '她索性把屏幕转了个角度，让你看那张表：一列人名，一列可用性，一列备注。\n伊芙娜那一行后面写着一句对照：档案年龄 28 / XR-07 归档年份 —— 待核实。字是今天下午的笔迹，墨还没干透。\n你的呼号在最下面一行，三个版本挤在一起，只有最后一个还带颜色。',
      next: 'nova_04'
    },
    nova_04: {
      id: 'nova_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“这份报告会决定谁被清理、谁被留下，包括中尉那一栏。灰塔的算法只吃结论，不吃理由。”",
      next: 'nova_04_b',
    },
    nova_04_b: {
      id: 'nova_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“七成、五成、两成……算了一晚上，全是缺项。”她把表推近一些，“你这一栏还空着。有几件事，只有你本人能确认。”\n“自己填。”",
      next: 'nova_choice'
    },
    nova_choice: {
      id: 'nova_choice',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '光标停在你那一栏上闪。舷窗外面，那艘无人母舰的航迹灯还挂在极轨上，一直没有走远。',
      choices: [
        {
          id: 'ch7_self',
          label: '“我自己写。”你在那一栏写下：可担保，理由保密。',
          next: 'c1_ch_nova_self',
          reaction: '她念了那八个字，然后原封不动地发走了，一个字节都没改。',
          effects: [
            { type: 'trust', who: 'nova', amount: 2 },
            { type: 'flag', key: 'nova_self_written', value: true },
            { type: 'flag', key: 'know_nova_report', value: true }
          ]
        },
        {
          id: 'ch7_truth',
          label: '“照实写。写我把伊芙娜后颈的编号挡下来了，一个字都别省。”',
          next: 'c1_ch_nova_truth',
          reaction: '她照实写了。备注栏里多出一行：建议复核对象——伊芙娜·卡列尔。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'trust', who: 'ivna', amount: -1 },
            { type: 'flag', key: 'nova_wrote_truth', value: true },
            { type: 'flag', key: 'know_nova_report', value: true },
            { type: 'flag', key: 'ivna_marked', value: true }
          ]
        },
        {
          id: 'ch7_erase',
          label: '你伸手把那一页删掉了。',
          next: 'c1_ch_nova_erase',
          reaction: '她没有拦你。等确认框弹出来，她才开口。',
          effects: [
            { type: 'trust', who: 'nova', amount: -1 },
            { type: 'flag', key: 'nova_page_deleted', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（nova_choice）
    c1_ch_nova_self: {
      id: 'c1_ch_nova_self',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“这是我第一次交出去一个没算过概率的结论。”她把杯子放下，“下次补报告时，我还得请你来核对一遍。”",
      next: 'nova_05'
    },
    c1_ch_nova_truth: {
      id: 'c1_ch_nova_truth',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“这就是照实写的样子。”她把屏幕转回你这边，“你要的是这个。别在明天讨厌我。”",
      next: 'nova_05'
    },
    c1_ch_nova_erase: {
      id: 'c1_ch_nova_erase',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“删掉的是本地副本。灰塔那里还有原件。”她把数据卡在指间转了一圈，“这次操作会留记录。我也会记进去。”",
      next: 'nova_05'
    },
    nova_05: {
      id: 'nova_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      variants: [
        {
          requires: ['nova_self_written'],
          text: '“按流程我该问你为什么。”她把杯子扣在长椅上，“不问。今天我也算错一次，就当扯平。”\n“对了，这船上的咖啡机是坏的。铎兰说先骂一句再按。你试过没有？”'
        },
        {
          requires: ['nova_wrote_truth'],
          text: "“提醒一件不写进报告的事：中尉那一栏我只写了‘待核实’。复核名单和定罪名单之间，还隔着一整套流程。”\n她看了你一眼：“先按这个处理。等我睡两小时，回来再核对。”"
        },
        {
          requires: ['nova_page_deleted'],
          text: "“先坐一会儿。那一页还有远端记录，得另想办法处理。”\n她把保温杯盖拧紧：“下次动数据前先叫我，我帮你确认副本的位置。”"
        }
      ],
      text: '她把数据卡收进夹克内袋，动作比平时慢了一拍。',
      next: 'nova_06'
    },
    nova_06: {
      id: 'nova_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      onEnter: [{ type: 'flag', key: 'know_spire_target', value: true }],
      text: "“再给你一件不写进报告的事。”她把屏幕关黑，屏幕上的霜痕映出她半张脸，“中午那艘无人母舰一直在控制火力。它要采集神经桥接的活体读数，得让人活着。”\n“驾驶舱是钩子上的饵。真正值钱的，是能让那台驾驶舱活过来的人——所以每次调整火控，它都跟着三号货位转。”",
      next: 'nova_07'
    },
    nova_07: {
      id: 'nova_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      variants: [
        {
          requires: ['first_nova'],
          text: '“你先来找我。”她背对着舷窗，手插在夹克口袋里，“这一点本身就是个数据点。我记在备注里了——别问我写了什么。”'
        }
      ],
      text: '“回去写你的证词吧，呼号 {callsign}。写之前想清楚一件事：今晚你想保住的是一个编号，还是一个活人。”\n她把外套从长椅上拿起来，抖了一下：“廊道尽头那台加热片是好的，你去那边写，这边冷。”',
      next: 'seg_nova'
    },
    // ── 三条走访线的合流（hangar，计时） ────────────────────────────────────
    seg_ivna: {
      id: 'seg_ivna',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        {
          requires: ['seen_doran', 'seen_nova'],
          text: '医务舱的门在你身后合上。走廊顶灯一格一格往机库方向亮，你数了一下，三个人都见过了，手里只剩最后一张要签的纸。'
        },
        {
          requires: ['seen_doran'],
          text: '医务舱的门在你身后合上，机库方向的卷帘声隔着一层甲板传过来。还剩一个人没见。'
        },
        {
          requires: ['seen_nova'],
          text: "医务舱的门在你身后合上。观察廊的屏幕已经暗了，刚才那张表还在你脑子里打转。你想起薇拉，转身往机库走。"
        }
      ],
      text: '医务舱的门在你身后合上。通讯牌上的计时还在走，你手里那张报废单折成了两折，边角硌着口袋。',
      next: 'doran_01',
      nextIf: [
        { requires: ['seen_doran', 'seen_nova'], next: 'c1_ws_01' },
        { requires: ['seen_doran'], next: 'nova_01' },
        { requires: ['seen_nova'], next: 'doran_01' }
      ]
    },
    seg_doran: {
      id: 'seg_doran',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        {
          requires: ['seen_ivna', 'seen_nova'],
          text: '机库的卷帘在你身后落下，把机油味和那半杯凉咖啡一起关在里面。三个人你都见过了，手上还沾着装甲板的灰。'
        },
        {
          requires: ['seen_ivna'],
          text: '机库的卷帘在你身后落下。你数了数还有人没见，就去数走廊顶灯，数到第七盏的时候决定不数了。'
        },
        {
          requires: ['seen_nova'],
          text: '机库的卷帘在你身后落下。灰鸢的左肩已经拆到架子上，明天它会有四个新孔。还剩一个人没见。'
        }
      ],
      text: '机库的卷帘在你身后落下，机油味被关在里面。走廊尽头的通讯牌在报时，你还有事情没办完。',
      next: 'ivna_01',
      nextIf: [
        { requires: ['seen_ivna', 'seen_nova'], next: 'c1_ws_01' },
        { requires: ['seen_ivna'], next: 'nova_01' },
        { requires: ['seen_nova'], next: 'ivna_01' }
      ]
    },
    seg_nova: {
      id: 'seg_nova',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        {
          requires: ['seen_ivna', 'seen_doran'],
          text: '观察廊的门在你身后合上。那张表上的一列人名被你带走了一半，而表本身还留在那条冷掉的廊道里。三处都走完了。'
        },
        {
          requires: ['seen_ivna'],
          text: '观察廊的门在你身后合上，舷窗上的霜被你的肩膀蹭出一条痕。还剩一个人没见，他的灯通常最后熄。'
        },
        {
          requires: ['seen_doran'],
          text: '观察廊的门在你身后合上。你把保温杯放回了长椅原处，杯底留了一圈水印。还剩一个人没见。'
        }
      ],
      text: '观察廊的门在你身后合上，外面那串航迹灯还钉在极轨上。走廊里的计时器在走，声音很小。',
      next: 'ivna_01',
      nextIf: [
        { requires: ['seen_ivna', 'seen_doran'], next: 'c1_ws_01' },
        { requires: ['seen_ivna'], next: 'doran_01' },
        { requires: ['seen_doran'], next: 'ivna_01' }
      ]
    },
    // ── 第五节拍：机库里的共事（hangar -> workshop / duty + 生活） ────────────
    c1_ws_01: {
      id: 'c1_ws_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三处都走完的时候，通讯牌上的计时还剩三十六分钟。灰鸢被拖回三号机库最里面，左肩空着，挂耳的四个螺栓孔有两个已经豁开。\n薇拉跟着你走进来，左手拎着一块抹布，右手还捏着她的检查单。她先看了一眼裂口，又看了一眼工具箱，然后把抹布搭在台钳上——那动作和她拷贝检查程序一样熟。',
      next: 'c1_ws_02'
    },
    c1_ws_02: {
      id: 'c1_ws_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“起重机遥控坏了，报修单上个月就退回来了。”铎兰咬住手电，腾出两只手，“咱们三个来。二号机左手托住板子，保持这个高度。你扶正孔位，我打销子。”\n“四个孔有两个差两毫米，得先扩一下。扩完这颗螺栓算一次性件，明天记得领新的。”",
      next: 'c1_ws_03'
    },
    c1_ws_03: {
      id: 'c1_ws_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“承受中。左肘关节温度七十四度，还能坚持十一分钟。”夜枭的左手把装甲板托在台钳上方两厘米，纹丝不动。",
      next: 'c1_ws_03_d',
    },
    c1_ws_03_d: {
      id: 'c1_ws_03_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“不用十一分钟。”铎兰把绞刀往里又推了半圈。',
      next: 'c1_ws_03_b'
    },
    c1_ws_03_b: {
      id: 'c1_ws_03_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“那就十一分钟。”她答，“在这个温度下我还能保持精度，超过就不行。”\n她把“不行”两个字说得很干脆，像在报一个参数。那是她今晚第一次说不行，也是为了同一块板子。",
      next: 'c1_ws_04'
    },
    c1_ws_04: {
      id: 'c1_ws_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "绞刀转进第一个孔的时候，整个机库好像都在替你数圈数。铎兰一手进刀一手扶着板子边，铜手指的关节缝里往外渗着细油。",
      next: 'c1_ws_04_b',
    },
    c1_ws_04_b: {
      id: 'c1_ws_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第二个孔快收尾的时候，工作灯闪了三次。你左手扶孔位，右手护着线，手背在螺栓座上蹭出一道口子，血珠冒出来又被油糊住。',
      next: 'c1_ws_04_d'
    },
    c1_ws_04_d: {
      id: 'c1_ws_04_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“松。”铁皮落回槽里，声音很闷。',
      next: 'c1_ws_09'
    },
    c1_ws_09: {
      id: 'c1_ws_09',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "报废单是三页的黄纸，第二页要填原因代码。三个代码印在那里：01 库存误差，03 战时损耗，07 结构老化。",
      next: 'c1_ws_09_b',
    },
    c1_ws_09_b: {
      id: 'c1_ws_09_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '灰鸢的飞行记录器里写着今晚的全部数据：一次挂钩牵引，左肩峰值四点六倍额定，两块非标准螺栓，两颗新销子。',
      next: 'c1_ws_09_d'
    },
    c1_ws_09_d: {
      id: 'c1_ws_09_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“代码你填，落笔前再核一遍。”铎兰把笔递给你，“这张单归你签。”",
      next: 'c1_ws_10'
    },
    c1_ws_10: {
      id: 'c1_ws_10',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "“三行字，三种麻烦。”铎兰用铜手指点了点那张纸，“填 01，全舰盘库三天，机库停工，我陪你数螺丝。填 07，不追责，库存那边会来查这块板子哪来的——它是从别的机身上拆的，查到最后得有人认。”",
      next: 'c1_ws_10_b',
    },
    c1_ws_10_b: {
      id: 'c1_ws_10_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "“填 03，走战时损耗，中队明天会送一份事故问询来，问你为什么在六十米上挂钩。这一份你得自己答。”\n他把螺栓一颗一颗收进盒子：“我一般填 07。今晚这块板子，07 填不得。”",
      next: 'c1_ws_11'
    },
    c1_ws_11: {
      id: 'c1_ws_11',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "你在两处填了 03，在备注栏写了十四行：牵引角度、挂钩口径、横梁尺寸、两块非标准螺栓、四颗挂耳螺栓的实际力矩——包括第三颗换下来之前的。",
      next: 'c1_ws_11_b',
    },
    c1_ws_11_b: {
      id: 'c1_ws_11_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '最后一行写的是：白鹭三号货位，六十米，一次咬合。',
      next: 'c1_ws_11_d'
    },
    c1_ws_11_d: {
      id: 'c1_ws_11_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "铎兰在后面签了机修长那一栏，签完看了眼备注：“行，写得比我细。明天中队那一份，我陪你答。”",
      next: 'c1_ws_05'
    },
    c1_ws_05: {
      id: 'c1_ws_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“收工。两个销子，能拖回本舰港。”他把绞刀往工具卷里一插，顺手拍了下墙上的咖啡机。\n“这玩意儿从第三年就坏了。诀窍是先骂一句，再按。”",
      next: 'c1_ws_05_b',
    },
    c1_ws_05_b: {
      id: 'c1_ws_05_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "薇拉走过去，盯着机器看了两秒，然后很认真地说：“你这台机器是废的。”接着按下按钮。\n咖啡流出来了。她端着杯子回身，表情像刚通过一次武器校验。",
      next: 'c1_ws_06'
    },
    c1_ws_06: {
      id: 'c1_ws_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“记录：先骂，再按，可以出咖啡。”\n她抿了一口，眉毛动了一下——很难说是好喝还是难喝——然后把杯子放下，去收拾夜枭那只被船壳蹭掉漆的手背。",
      next: 'c1_ws_06_b',
    },
    c1_ws_06_b: {
      id: 'c1_ws_06_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: "她从口袋里摸出一卷白胶布，剪下一段，贴在手背的掉漆处，压平，又用拇指沿边缘刮了一遍。那卷胶布和她手指上缠的是同一卷。",
      next: 'c1_ws_07'
    },
    c1_ws_07: {
      id: 'c1_ws_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“掉漆不影响功能。”你说。',
      next: 'c1_ws_07_v',
    },
    c1_ws_07_v: {
      id: 'c1_ws_07_v',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“不影响。”她把手收回来，“但上面有夜枭的编号。掉了，外面看不出它是哪一台。”',
      next: 'c1_ws_07_b'
    },
    c1_ws_07_b: {
      id: 'c1_ws_07_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "她把胶布卷塞回口袋，扣上盖。台钳上的抹布还是她刚才搭的位置，她走的时候顺手把抹布叠了一下。",
      next: 'c1_ws_08'
    },
    c1_ws_08: {
      id: 'c1_ws_08',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“计时还剩二十四分钟。”铎兰用手背擦了擦额头，把工具卷塞进柜子，“去吃饭。检查官不吃晚饭，我们吃。”\n“餐室在左边第二个门。旁边是货梯，进去一趟得多绕二十分钟。诺瓦上个月刚替你们探过路。”",
      next: 'm1_01'
    },
    // ── 第六节拍：餐室（messhall / off_duty，纯生活） ────────────────────────
    m1_01: {
      id: 'm1_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '餐室的灯比走廊暖，长桌上摊着一摞碗，加热台上冒着白汽。留言板上贴满了便签：有人找袜子，有人求借充电线，最上面那张写着“谁把三号洗衣机的滚筒锁死了，自己来开”。\n两个下值的甲板工坐在角落吃面，看见你进来只抬了下头，又低头继续吃。',
      next: 'm1_02'
    },
    m1_02: {
      id: 'm1_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“汤咸了。”铎兰自己先承认，“两罐咸鱼的汤我倒了半罐进去，手滑。”",
      next: 'm1_02_b',
    },
    m1_02_b: {
      id: 'm1_02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "他给三个人各舀了一碗，给自己舀了半碗，然后把咸鱼罐放在桌子正中间：“谁嫌淡谁自己加，别嫌完又来抱怨。”\n他解开赭红布巾重新扎了一遍，头发翘起来一撮，像被风吹过。",
      next: 'm1_03'
    },
    m1_03: {
      id: 'm1_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "诺瓦已经在角落坐好了，托盘盖着她的屏幕，脚边是两个空保温杯。\n“新来的。”她冲薇拉抬了抬下巴，“先说清楚：在这张桌子上吃饭，不用报编号。”",
      next: 'm1_03_v',
    },
    m1_03_v: {
      id: 'm1_03_v',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“我不报编号。”薇拉说。她把碗往前推了半寸，“汤太咸了，这个我报给做饭的人。”',
      next: 'm1_03_b'
    },
    m1_03_b: {
      id: 'm1_03_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "“听见了没有。”诺瓦冲铎兰抬了抬碗，“新来的嫌你手滑。”\n铎兰把那罐咸鱼往自己那边挪了挪，没说话，铜手指在碗沿上敲了个节拍。",
      next: 'm1_04'
    },
    m1_04: {
      id: 'm1_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "薇拉端着碗站在长桌尽头，没有坐下。\n“我坐哪里？”她问得很认真，像在问停机位。",
      next: 'm1_04_d',
    },
    m1_04_d: {
      id: 'm1_04_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“哪儿空坐哪儿。”铎兰说，“这张桌子没有座次表。”',
      next: 'm1_04_b'
    },
    m1_04_b: {
      id: 'm1_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '她扫了一圈桌子，挑了自己左手边最靠墙的位置坐下，把碗放在桌沿，端端正正。第一口她吃得很慢，第二口就正常了。',
      next: 'm1_05'
    },
    m1_05: {
      id: 'm1_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "加热台旁边的架子上挂着一排搪瓷杯，每一只的把手上都写着呼号，字迹有新有旧，最旧的那只已经被人用胶带缠了两圈，胶带下面还能看见“长机”两个字被划掉过。",
      next: 'm1_05_b',
    },
    m1_05_b: {
      id: 'm1_05_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "你从柜子里摸出一只没写过字的备杯，放在薇拉手边，又放下一支油笔。\n她拿着笔想了很久，先在杯身上写了“AU-11”，看了两秒，用拇指把墨迹蹭掉，重新写上“夜枭”两个字。",
      next: 'm1_06'
    },
    m1_06: {
      id: 'm1_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "伊芙娜进门的时候汤已经凉了一半。她没坐，站在加热台边上把碗端起来吃，边吃边把一叠纸放在你手边：白鹭的船员名单，抄了一份。",
      next: 'm1_06_b',
    },
    m1_06_b: {
      id: 'm1_06_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: "“那个甲板工推进手术室了，腿能保住。”她说，“我刚从舰医那儿过来。”",
      next: 'm1_06_n'
    },
    m1_06_n: {
      id: 'm1_06_n',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“你不是说不进医务舱了？”诺瓦问。',
      next: 'm1_06_c'
    },
    m1_06_c: {
      id: 'm1_06_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '“我说我不在医务舱里说第二遍。”伊芙娜把最后两口吃完，“不一样。”',
      next: 'm1_07'
    },
    m1_07: {
      id: 'm1_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "留言板旁边有人拍了下桌子。三号洗衣机的滚筒被谁锁死了，锁的人说是为了省电，用的人说那是因为他洗的是一整箱工作服。诺瓦坚持把锁拆掉，铎兰让她先把满箱的工作服搬下来。两人说了半分钟，滚筒还是锁着。",
      next: 'm1_07_b',
    },
    m1_07_b: {
      id: 'm1_07_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉听了一会儿，认真插话：“如果预约按班次排，每次限重四公斤，就不会有冲突。我可以做一张表。”',
      next: 'm1_07_c'
    },
    m1_07_c: {
      id: 'm1_07_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '桌子边静了一秒。',
      next: 'm1_07_d'
    },
    m1_07_d: {
      id: 'm1_07_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“她不是开玩笑。”诺瓦说。',
      next: 'm1_07_e'
    },
    m1_07_e: {
      id: 'm1_07_e',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“我知道。”铎兰说，“所以更好笑。”',
      next: 'm1_08'
    },
    m1_08: {
      id: 'm1_08',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: "伊芙娜端着空碗走到架子边，看了一眼薇拉那只新杯子。\n“杯子给我吧，我一起放架子上，这边要收桌了。”她把杯子的把手上那截多余的胶布按平，“字写小一点，格子不够。”",
      next: 'm1_08_b',
    },
    m1_08_b: {
      id: 'm1_08_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“收到。”薇拉说。她把杯子拿起来，又写了一遍“夜枭”，这一次小了一号。',
      next: 'm1_08_c'
    },
    m1_08_c: {
      id: 'm1_08_c',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '伊芙娜点点头走了。',
      next: 'm1_11'
    },
    m1_11: {
      id: 'm1_11',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "角落那两个甲板工吃完了，其中一个从兜里掏出一副磨得起毛的扑克，一个人玩两副牌，输了就把牌翻过来重洗。",
      next: 'm1_11_b',
    },
    m1_11_b: {
      id: 'm1_11_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "留言板上有人撕掉一张便签，换上新的：三号洗衣机的袜子我拿走了，黑色，左脚有洞。旁边立刻有人补了一个箭头：那就是我的，还我。\n门口那台热水器的牌子上挂着五个号码牌，排到第六个的人已经睡着在长椅上，手里还攥着毛巾。",
      next: 'm1_12'
    },
    m1_12: {
      id: 'm1_12',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '打牌的甲板工抬头看了薇拉一眼：“听说今天是你把货架抬起来的？”',
      next: 'm1_12_v',
    },
    m1_12_v: {
      id: 'm1_12_v',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“是。”她说，“左手机械手，持续七秒，中间过热保护没有触发。”',
      next: 'm1_12_b'
    },
    m1_12_b: {
      id: 'm1_12_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '甲板工愣了一下，点点头：“行。你今晚要是不困，牌桌缺人。”说完他又低头洗牌去了。',
      next: 'm1_12_q'
    },
    m1_12_q: {
      id: 'm1_12_q',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉转过来问你：“水果糖也是从配给里出的吗？如果我赢了很多，会不会算占用配额？”',
      next: 'm1_13'
    },
    m1_13: {
      id: 'm1_13',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“糖是我自己的。”铎兰把碗摞起来，铜手指磕在碗沿上当节拍，“我每趟补给带半罐水果糖上船，谁赢谁拿，赢完别来跟我要。”",
      next: 'm1_13_b',
    },
    m1_13_b: {
      id: 'm1_13_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“第二班八点半开饭。休息日机库开门，谁想练绞刀谁练，手套自己带。洗衣排班按甲板分，票贴在门口——今天有人为了袜子跟留言板吵起来了。”\n他冲薇拉抬了抬下巴：“想练绞刀就来找我。诺瓦也一起，上回借的工具还在她桌上。”",
      next: 'm1_14'
    },
    m1_14: {
      id: 'm1_14',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "诺瓦回来拿她的保温杯，顺手从铎兰那罐糖里挑了一颗，被铎兰用抹布假装抽了一下手背。",
      next: 'm1_14_b',
    },
    m1_14_b: {
      id: 'm1_14_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "“牌桌上那副牌少一张红桃七，是上个月丢的。”她一边拧杯盖一边说，“你们要是赌糖，我可以告诉你们庄家的胜率……算了，我今天不算数了。”\n她把杯子往腋下一夹，走了两步又回头把糖纸扔进回收口，扔得很准。",
      next: 'm1_15'
    },
    m1_15: {
      id: 'm1_15',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "餐室的噪声慢慢落下去，加热台的灯从两盏关成一盏，墙上那张袜子的便签被人在下面又添了一行，字很小。",
      next: 'm1_15_b',
    },
    m1_15_b: {
      id: 'm1_15_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "薇拉坐在最靠墙的位置上，把刚喝过的杯子转了半圈，让写着“夜枭”的那一面对着过道。她看了一圈桌子，看了一圈门口，最后看回自己那只杯子。\n铎兰把抹布往肩上一搭，开始收桌子。",
      next: 'm1_16'
    },
    m1_16: {
      id: 'm1_16',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "角落那两个甲板工把牌收好，一边穿外套一边聊外环的配给：第七矿站今年的取暖罐比去年少两成，他们打算把家里那份寄回去。\n“寄回去的运费比罐子贵。”\n“那就买贵的那一档，反正我妈会骂我。”",
      next: 'm1_16_b',
    },
    m1_16_b: {
      id: 'm1_16_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "薇拉在旁边听着，把这两句都听完了，没有插话。她把杯子往架子上放的时候，顺手把旁边两只歪掉的杯子也转正了——先把缺口朝里，再把把手朝外，和架子上原先的摆法一样。",
      next: 'm1_09'
    },
    m1_09: {
      id: 'm1_09',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: "两个甲板工先走了，把碗摞在回收口。铎兰开始收桌子，铜手指夹着抹布，擦得桌面上全是弧线。\n薇拉站起来，把自己那只碗、诺瓦那只碗、还有你面前那只都摞在一起，端去回收口。她走路的时候碗里的水没晃出来一滴。",
      next: 'm1_09_b',
    },
    m1_09_b: {
      id: 'm1_09_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: "“计时还剩八分钟。”诺瓦把屏幕从托盘底下抽出来，扫了一眼，起身往外走，“我去把报告封口。呼号 {callsign}，去舷窗那边站一会儿——这边的窗子今天没什么好看的，但比屏幕强。”",
      next: 'm1_10'
    },
    m1_10: {
      id: 'm1_10',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“去吧。”铎兰把抹布往肩上一搭，“这边我收。你手上的伤口去医务舱处理一下，餐室这瓶已经见底了。”",
      next: 'm1_10_b',
    },
    m1_10_b: {
      id: 'm1_10_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: "他拎起那只咸鱼罐，晃了晃：“下次少放半罐。”\n薇拉站在门口等你，手里端着那只写了“夜枭”的杯子，杯口朝外，像是随时准备交还。",
      next: 'c1_vr_01'
    },
    // ── 第七节拍：左舷观察廊（ship_rail / 下班为主） ─────────────────────────
    c1_vr_01: {
      id: 'c1_vr_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "你推开左舷观察廊的门，脚步声沿着玻璃传到另一头。整排舷窗结着一层薄霜，霜面上被人用手指划过几道，其中一道后面挂着一颗很低的星。\n锚地浮标在窗外排成一条弧线，冷白的光一个一个往左舷后面退。弧线的远端缺了一点光，那是 AN-14 的位置。",
      next: 'c1_vr_02'
    },
    c1_vr_02: {
      id: 'c1_vr_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“交接之前要交一份评估。”她把一张复写纸递给你，纸角压得很平，“你那一栏我写了‘可担保’。依据一栏空着。”\n“评估表一共四栏，结论、依据、签名、日期。”她报得很清楚，“空白的那一栏，是我按流程该填而没有填的唯一一处。”',
      next: 'c1_vr_03'
    },
    c1_vr_03: {
      id: 'c1_vr_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '你把复写纸翻过来看了看正面的痕迹，又翻回去。\n“依据栏为什么空着？”',
      next: 'c1_vr_03_v'
    },
    c1_vr_03_v: {
      id: 'c1_vr_03_v',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把手放在窗上，指尖压在白霜里，压出一个很小的圆。',
      next: 'c1_vr_04'
    },
    c1_vr_04: {
      id: 'c1_vr_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“填了依据，这一栏就会转出去，转出去就会有人来核对我凭什么这么写。”\n“核对得太多，写结论的人就会换。”",
      next: 'c1_vr_04_b',
    },
    c1_vr_04_b: {
      id: 'c1_vr_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "她把手从窗上挪开，霜面上的圆慢慢边缘化开。“结论是真的。你今晚把我从探测臂上拦下来，我照了你的方法，没出错。”",
      next: 'c1_vr_05'
    },
    c1_vr_05: {
      id: 'c1_vr_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "你们在窗边站了一会儿，看着远处的灯。船体在某个方向轻轻响了一声，像一块很大的铁翻了个身。\n窗外那排浮标的冷光一格一格往后退。薇拉看着它们，嘴唇动了几下。",
      next: 'c1_vr_06'
    },
    c1_vr_06: {
      id: 'c1_vr_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“十八个亮的，一个灭的。”',
      next: 'c1_vr_06_p',
    },
    c1_vr_06_p: {
      id: 'c1_vr_06_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“AN-14。中午那会儿灭的。”你说。',
      next: 'c1_vr_06_q'
    },
    c1_vr_06_q: {
      id: 'c1_vr_06_q',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '她点了点头，把它记下来，然后又问：“下班以后，我一般应该在哪儿？”',
      next: 'c1_vr_06_b'
    },
    c1_vr_06_b: {
      id: 'c1_vr_06_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "她的声音还是很平稳。报浮标时一直朝外的脸转了过来，视线停在你脸上，等着你的回答。",
      next: 'c1_vr_07'
    },
    c1_vr_07: {
      id: 'c1_vr_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: "“班次结束以后，餐室开两轮，第二轮的汤比第一轮淡一点。无聊就来这条廊道，长椅随便坐，就是加热片坏的，靠东头那一段不冷。”",
      next: 'c1_vr_07_b',
    },
    c1_vr_07_b: {
      id: 'c1_vr_07_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: "“想学东西就去三号机库。铎兰收工以后会把绞刀拿出来给地勤练手，谁去都行，只要别碰他的第二格。”\n“还有一个地方：机库甲板下午有人打牌，赌注是水果糖。你去了他们会让你算牌。”",
      next: 'c1_vr_11'
    },
    c1_vr_11: {
      id: 'c1_vr_11',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“住舱呢？”她问，“交接单上没有床位号。我到舰的时候，值星官只说‘先放行李’。”",
      next: 'c1_vr_11_b',
    },
    c1_vr_11_b: {
      id: 'c1_vr_11_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "你翻了翻走廊尽头的住舱牌：四号甲板辅助舱，三号床，备注那一栏写着“原 AU-09 使用，待清理”。\n“原 AU-09”——这个编号写在木牌上，被人用手指抹过很多次，字迹已经发亮。",
      next: 'c1_vr_12'
    },
    c1_vr_12: {
      id: 'c1_vr_12',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“三号床是上铺还是下铺？”她问得很具体，“如果是下铺，行李可以塞在床底，上铺塞不进。”',
      next: 'c1_vr_12_p',
    },
    c1_vr_12_p: {
      id: 'c1_vr_12_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“上铺。”',
      next: 'c1_vr_12_b'
    },
    c1_vr_12_b: {
      id: 'c1_vr_12_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“好。”她点了点头，又看了一眼那块牌，“原 AU-09 的东西还在里面。里面的东西如果没登记，明天我交到甲板办公室去；如果有登记，就等他回来拿。”\n她说完停了停，补一句：“我进去之前会先把柜子擦干净。这是我的习惯。”",
      next: 'c1_vr_13'
    },
    c1_vr_13: {
      id: 'c1_vr_13',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "你们在窗边又站了一阵。船体在某处轻轻响了一声，那排浮标的光一格一格从右往左退，退到最远的地方缺了一颗。",
      next: 'c1_vr_13_b',
    },
    c1_vr_13_b: {
      id: 'c1_vr_13_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "薇拉把杯子换到左手，右手伸进外套口袋，摸到那卷白胶布又松开。她看窗外的时间比看你多，站的位置离你大约一步，不近不远，刚好谁都不用让路。\n舷窗上那层霜被两个人的呼吸化出一小片，能看见后面的星。",
      next: 'c1_vr_14'
    },
    c1_vr_14: {
      id: 'c1_vr_14',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“那条长椅，你一般坐哪一段？”',
      next: 'c1_vr_14_p',
    },
    c1_vr_14_p: {
      id: 'c1_vr_14_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“从东头数第三段。”',
      next: 'c1_vr_14_s'
    },
    c1_vr_14_s: {
      id: 'c1_vr_14_s',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她走过去，在第三段坐下，两只手放在膝盖上，背挺得很直，像在等一次检查。过了两秒，她自己把背靠到窗框上，找了一个不太标准的姿势。',
      next: 'c1_vr_14_b'
    },
    c1_vr_14_b: {
      id: 'c1_vr_14_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“外面那颗没亮的，是 AN-14。”她说，“明天点灯的时候，我想看清楚它是怎么装的。”',
      next: 'c1_vr_08'
    },
    c1_vr_08: {
      id: 'c1_vr_08',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: "她把你说的那几件事按顺序重复了一遍，一件都没落下，然后说：“我记下来了。”",
      next: 'c1_vr_08_b',
    },
    c1_vr_08_b: {
      id: 'c1_vr_08_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: "说完她站起来，去看那条长椅的第三段，走回来的时候发现了什么——你右手手背那道口子还在往外渗，机油糊过的地方已经发暗。\n她从口袋里摸出那卷白胶布，撕下一段递过来：“贴上。机库的油会进去。”",
      next: 'c1_vr_09'
    },
    c1_vr_09: {
      id: 'c1_vr_09',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: "你把手背伸过去，她自己动手贴：先按住一半，再从边上压平，最后用拇指沿胶布边刮了一圈，力道比你自己贴要稳。",
      next: 'c1_vr_09_b',
    },
    c1_vr_09_b: {
      id: 'c1_vr_09_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: "她的手指上缠着同样的白胶布，贴到你手背上的这一条比她自己用的宽一点。\n贴完她退开半步，端起杯子站回窗边，肩膀挨着窗框，安静得像一件收好的工具。",
      next: 'c1_vr_10'
    },
    c1_vr_10: {
      id: 'c1_vr_10',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "通讯牌上的计时跳到两分钟的时候，左舷窗外多了两个亮点：安全处的交通艇先亮进场灯，再亮识别灯，最后才亮对接口那一圈黄灯。",
      next: 'c1_vr_10_b',
    },
    c1_vr_10_b: {
      id: 'c1_vr_10_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "薇拉把杯子往架子上一放，杯口朝外，字朝着走廊。\n“该去货舱了。”她说，“你签字的时候，我站在门内侧的第二个位置——那里能看到编号，也不会挡路。”",
      next: 'b1_01'
    },
    // ── 第八节拍：三号货舱，检查官进场（hold / duty） ────────────────────────
    b1_01: {
      id: 'b1_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "三号货舱的封存区只开了一半灯。XR-07 停在吊索下面，外壳上那道被切开的货箱缝朝外，编号那一面对着门。",
      next: 'b1_01_b',
    },
    b1_01_b: {
      id: 'b1_01_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "封条上写着你的呼号，后面是一片还没写字的空白。军士长把移运单夹在腋下，站在压力门旁边，眼睛盯着计时器。\n对接口的震动声顺着船体传过来，很轻，两下。",
      next: 'b1_02'
    },
    b1_02: {
      id: 'b1_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "薇拉比你先到。她站在门内侧的第二个位置，手里拿着一叠封存清册，把封条编号念了一遍，核对完才把册子交给你。",
      next: 'b1_02_b',
    },
    b1_02_b: {
      id: 'b1_02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "“编号一致，清册三页，交接方一栏空着。”她说，“我站在这里，是因为这一侧能看到编号，也不挡后面的通道。”\n她说这些的时候，压力门的指示灯正好从红跳到绿。",
      next: 'b1_03'
    },
    b1_03: {
      id: 'b1_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      variants: [
        {
          requires: ['know_xr03'],
          text: "“我站在这里。”伊芙娜走进工作灯下，挡在驾驶舱前面，“他们进门就会看到我。”\n“你签下去，我和这台机器都会留在船上。连我惹来的麻烦也一样。想清楚再落笔。”"
        }
      ],
      text: "“注意货舱门，他们快到了。”伊芙娜站在工作灯照不到的阴影里，手插在兜里。\n“今晚来的人姓韦恩，安全处的。他负责清点，事故经过另有人问。你手里的单子写什么，他就带走什么。”",
      next: 'b1_04'
    },
    b1_04: {
      id: 'b1_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“你手上有四个走向。”诺瓦把屏幕转了个角度给你看，上面只有四行字，“交回联合：五成二；写进灰塔的报告：六成一；让渡鸦号自己吞掉这条记录：一成七；谁也不给、钥匙留你手里：四成一。”",
      next: 'b1_04_b',
    },
    b1_04_b: {
      id: 'b1_04_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“这些是你平安离舰的估算概率。依据在后面，你可以逐条看。”\n“实际情况随时会变。”她收回屏幕，指关节轻敲了一下边框。",
      next: 'b1_05'
    },
    b1_05: {
      id: 'b1_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“我这双手今晚只负责擦油。”铎兰的切割枪放在台面上，没有开，枪口朝着墙。",
      next: 'b1_05_b',
    },
    b1_05_b: {
      id: 'b1_05_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“就按刚才商量的办。记录和工单对齐，检查官问起才有依据。”\n“十分钟前我把灰鸢的左肩装回去两颗销子。它明天还能飞。剩下的你定。”",
      next: 'b1_choice_commit'
    },
    b1_choice_commit: {
      id: 'b1_choice_commit',
      kind: 'choice',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '门外的脚步声停在压力门那一侧。XR-07 挂在吊索下面，编号对着你，货箱缝里还能闻到一点新的润滑脂味。\n你手里的移运单只有一栏空着。',
      choices: [
        {
          id: 'ch8_concord',
          label: '交回联合档案处。你在担保人一栏写下自己的呼号，并要求开箱时伊芙娜本人到场。',
          next: 'cc_01',
          reaction: '伊芙娜看了你一眼，没有说谢谢，只是站到你右手边半步的位置——那是她带队时站的位置。\n薇拉把封存清册翻到第三页，在“在场人员”那一栏后面加上一行小字：AU-11，见证。',
          effects: [
            { type: 'standing', who: 'concord', amount: 2 },
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'flag', key: 'ending_concord', value: true }
          ]
        },
        {
          id: 'ch8_scarlet',
          label: '按铎兰说的做：让渡鸦号自己吞掉这条记录，驾驶舱留在船上。',
          requires: ['know_doran_scarlet'],
          next: 'c1_ch_commit_scarlet',
          reaction: '铎兰把切割枪收回工具箱，动作慢得像在收一件家什。\n薇拉看着他把货单上的编号划掉，又看了一眼你，把手里的清册合上了。',
          effects: [
            { type: 'trust', who: 'doran', amount: 2 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'standing', who: 'concord', amount: -2 },
            { type: 'flag', key: 'ending_scarlet', value: true }
          ]
        },
        {
          id: 'ch8_spire',
          label: '“写进你的报告——但伊芙娜那一栏改成四个字：不可采集。”',
          requires: ['know_nova_report'],
          next: 'c1_ch_commit_spire',
          reaction: '诺瓦停了两秒才点头。',
          effects: [
            { type: 'trust', who: 'nova', amount: 2 },
            { type: 'standing', who: 'spire', amount: 2 },
            { type: 'flag', key: 'ending_spire', value: true }
          ]
        },
        {
          id: 'ch8_alone',
          label: '谁也不给：把驾驶舱封进渡鸦号自己的三号货舱，钥匙交给你自己。',
          next: 'c1_ch_commit_alone',
          reaction: "三秒后，铎兰先笑了，伊芙娜把钥匙推给你，诺瓦在她的表上给“渡鸦号”这一栏补了一个数——今晚第一次出现的新行。",
          effects: [
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'flag', key: 'ending_alone', value: true }
          ]
        }
      ]
    },
    // 选项反应拆分（b1_choice_commit）
    c1_ch_commit_scarlet: {
      id: 'c1_ch_commit_scarlet',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "“记住了。”他说，“这条船今天没把东西交出去，别的说法都是别人替我们加的。”",
      next: 'sc_01'
    },
    c1_ch_commit_spire: {
      id: 'c1_ch_commit_spire',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“交易成立。”她把数据卡从领口拽出来，“价码谈清楚了，这就好办。”\n她转头看向薇拉：“新来的，你看到了什么？”",
      next: 'c1_ch_commit_spire_b'
    },
    c1_ch_commit_spire_b: {
      id: 'c1_ch_commit_spire_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“我看到签字。”薇拉说，“没看到别的。”',
      next: 'sp_01'
    },
    c1_ch_commit_alone: {
      id: 'c1_ch_commit_alone',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把封条压平，在压力门内侧站定：“内侧第二个位置。门一开我先报编号。”',
      next: 'nt_01'
    },
    // ── 章末分支 A：交回联合档案处（hold -> medbay / duty） ───────────────────
    cc_01: {
      id: 'cc_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'concord',
      text: '压力门开了。进来的只有三个人：一个穿深色常服的少校，两个提工具箱的技术员。少校姓韦恩，胸前的识别牌连编号都印得比别人小一号。\n“封条编号。”他先开口。\n薇拉把清册翻到第二页，念了一遍编号，一个字没差。韦恩自己走过去看了封条，才回头看你。',
      next: 'cc_02'
    },
    cc_02: {
      id: 'cc_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'concord',
      text: '韦恩问了三个问题，都很短：牵引命令是谁下的；货箱缝是什么时候出现的；今晚进过这个货舱的人有几个。\n你把移运单交给他，报了牵引命令的编号和接令时间；缝是母舰的射流切的；进舱的连同技术员一共六个。\n他听完不置可否，只让技术员把缝口拍照，把吊索重新校了一次。',
      next: 'cc_03'
    },
    cc_03: {
      id: 'cc_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'concord',
      text: '技术员把白鹭的原始货单翻出来对：上面写的是“训练器材，一台”。\n韦恩把两页纸并排放在台面上，抬头看你：“你的封条上写的是编号 XR-07。这个编号在白鹭的货单上没有。”',
      next: 'cc_03_p'
    },
    cc_03_p: {
      id: 'cc_03_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      route: 'concord',
      text: '“货单是错的。我按实物登记。”',
      next: 'cc_03_b'
    },
    cc_03_b: {
      id: 'cc_03_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'concord',
      text: '他把这句话原样抄进记录，抄得很慢，一个字一个字。',
      next: 'cc_04'
    },
    cc_04: {
      id: 'cc_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      route: 'concord',
      variants: [
        {
          requires: ['know_xr03'],
          text: '伊芙娜从阴影里走出来，站到你右手边半步的位置。\n“伊芙娜·卡列尔，第三小队长机。”她解开领口一颗扣子，让接口环露在外面，“编号 XR-03。今晚要核对实物，就一起核。”\n韦恩的笔停了一下，又继续往下写。他把这一句抄了两遍。'
        }
      ],
      text: '伊芙娜从阴影里往前走了一步，走进工作灯的光里。\n“伊芙娜·卡列尔，第三小队长机。进过这个货舱的人，包括我。”\n她没有再往前走，把手插回兜里，站在那里让你签完剩下的字。',
      next: 'cc_05'
    },
    cc_05: {
      id: 'cc_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      route: 'concord',
      text: '广播：编号 XR-07 移交档案处，登记生效，担保人呼号 {callsign}。\n广播：伊芙娜·卡列尔，处置意见由“待评估样本”改为“留舰观察”，直属担保人负责。\n广播：担保人档案标记——需长期留意。',
      next: 'cc_06'
    },
    cc_06: {
      id: 'cc_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'concord',
      text: "技术员用四条固定带把驾驶舱绑在货板上，又给缝口贴了一圈封签，封签上压着韦恩自己的章。固定、贴签、核对编号，十六分钟后，他在交接栏签了字。\n他走之前把抄好的那页记录折起来放进内袋，目光在你胸前那块黄胶带上停了一下，像是要把呼号记住。",
      next: 'cc_07'
    },
    cc_07: {
      id: 'cc_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'warm',
      tone: 'duty',
      speaker: 'ivna',
      route: 'concord',
      text: '半小时后，医务舱。伊芙娜把一副新手套拆开，自己戴上一只，把另一只扔给你。\n“旧的给你。”她说，“我戴过。你下次按警报按钮之前先摸一下它，然后别犹豫。”',
      next: 'cc_07_p'
    },
    cc_07_p: {
      id: 'cc_07_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      route: 'concord',
      text: '“为什么给我？”',
      next: 'cc_07_v'
    },
    cc_07_v: {
      id: 'cc_07_v',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'warm',
      tone: 'duty',
      speaker: 'ivna',
      route: 'concord',
      text: '“因为明天开始，会有人拿你今晚签的字来问你问题。”她把袖口拉平，“戴着它，至少你的手看起来还是你自己的。”',
      next: 'cc_08'
    },
    cc_08: {
      id: 'cc_08',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      route: 'concord',
      text: '薇拉在清册第三页签完字，把复写纸撕下一张交给你。\n“见证记录：AU-11。依据：在场。”她把自己写的那两行念了一遍，“明天我们还有十八颗浮标要核，AN-14 得重新点亮。安全处的交通艇申请了明天的泊位，他们不会走远。”\n她合上册子，又补了一句：“你今天签的每一个字都是真的。这一点我记得住。”',
      next: 'c1_ve_10'
    },
    c1_ve_10: {
      id: 'c1_ve_10',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      route: 'concord',
      text: '交接结束以后，薇拉在观察廊找到你，把那份评估表的副本递过来。你那一栏写着两个字：可担保。依据那一栏还是空的。\n“结论在这里。”她说，“依据不能写。”\n她把杯子放在长椅上，站到窗边。左颊旁那绺没剪掉的长发贴在霜面上，像忘了收进去的一根线头。\n“明天我把右腿那只箱子拆开。”她说，“我说过要拆的。”',
      next: 'ending_concord'
    },
    ending_concord: {
      id: 'ending_concord',
      kind: 'chapterOutcome',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      route: 'concord',
      onEnter: [{ type: 'flag', key: 'out_ch1_concord', value: true }],
      text: '夜里两点，三号机库。灰鸢的左肩装回了两颗销子，左臂收在最省空间的角度，像在护着什么。\n伊芙娜站在登舰梯下面等你，把手套的余温塞进你手里：“这份档案从现在起跟着你。下一次我不会再按条令回答你——这句我提前告诉你。”\nXR-07 的编号留在了联合的登记册上。你保住了船上的人，代价是你的呼号从此和“曦尔计划”写在同一页纸上。',
      outcomeId: 'ending_concord',
      continuesTo: 'ch02'
    },
    // ── 章末分支 B：让渡鸦号自己吞掉记录（hold -> workshop / duty） ─────────
    sc_01: {
      id: 'sc_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'doran',
      text: '封条没有贴。铎兰把驾驶舱的编号从货单上划掉，在原来那一行补上七个字：报废结构件，灰鸢左肩备件。\n他把新打进去的两颗销子的编号也抄了上去——那两颗销子是真的，今天下午才装上去。',
      next: 'sc_01_d'
    },
    sc_01_d: {
      id: 'sc_01_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      route: 'doran',
      text: "“清单要经得起翻。”他说，“一个真编号搭一句真话，剩下的他们自己会替我们圆。”",
      next: 'sc_02'
    },
    sc_02: {
      id: 'sc_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'doran',
      text: '韦恩进门的时候，驾驶舱已经不在吊索下面了：它被推进封存区最里面，盖着一块灰色防尘布，布角压着那两颗真销子。\n少校的三个问题和别处一样。铎兰答得又慢又啰嗦，啰嗦到韦恩开始看表。十分钟后，技术员把“报废结构件”抄进货单，带着一份干净、完整的清单走了。',
      next: 'sc_03'
    },
    sc_03: {
      id: 'sc_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'scarlet_voice',
      route: 'doran',
      variants: [
        {
          requires: ['open_hail'],
          text: '“环带联合的 {callsign}。”赤垣频道里那个男声说，“你中午在锚地让出过半条航道，这笔我们记着。渡鸦号的事按盟约办——先不动这条船。”\n“盟约只有一条：不许有人再拿配给表决定谁饿死。”'
        }
      ],
      text: '“不认识这个呼号。”赤垣频道里那个男声说，“但渡鸦号的机修长替你们担保，那就先信他。”\n“把话说清楚：航道要开，今晚不动船。”',
      next: 'sc_04'
    },
    sc_04: {
      id: 'sc_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      route: 'doran',
      text: '“听见了？他们答应先不动这条船。”铎兰把频道关掉，用手背蹭了一下脸，“真话是：盟约只保到下一次开火。所以那条缝今晚上就得缝进图里。”\n“影子线路走导航核心的第三段备用通道。它不改航向，只在锚点数据上多盖一层标注——走这条路的人得自己带图。”\n“我要你做的只有一件：我动手的时候，你站在这扇门前面。”',
      next: 'sc_05'
    },
    sc_05: {
      id: 'sc_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'doran',
      text: '机库的灯关了三分之二，只留灰鸢身上那一盏。你站在卷帘旁边，替他挡住监控的第三个角度——那个角度归值班军士管，今晚值班的是个只爱睡觉的年轻人。\n铎兰的手比平时稳，稳得不像在偷东西，像在做一件拖了十四年的事。核心柜打开的时候，里面那股冷气吹到你的小腿上。',
      next: 'sc_06'
    },
    sc_06: {
      id: 'sc_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      route: 'doran',
      text: "你回头时，薇拉站在机库门口，清册摊在手上。\n她的视线掠过你和核心柜，落到册页上。\n“记录：三号机库，今日无异常。”她填上当前时间，扣好笔帽，转身走了。\n门边的工作灯晃了一下。你听着她的脚步渐渐远去。",
      next: 'sc_07'
    },
    sc_07: {
      id: 'sc_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      route: 'doran',
      text: "“完了。”铎兰锁好核心柜，坐在工具箱上喘了两口，“十七个矿站里有两个回话了。信号从旧中继转来的。十一年了，那边居然还开着接收机。”\n“钥匙给你。”他把第二格的钥匙放进你手心，铜手指冰得吓人，“第二格归你开了。里面那摊事，往后咱俩一块儿料理。”",
      next: 'sc_08'
    },
    sc_08: {
      id: 'sc_08',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'doran',
      text: '你的证词里有七句话是假的：五句关于一件不存在的报废结构件，两句关于灰鸢左肩的报废原因。\n伊芙娜把你的证词从头到尾读了两遍。她没有问你，只把袖标往上拉了拉，换上一副新拆的手套——和锚地那天同一个牌子。',
      next: 'sc_08_d'
    },
    sc_08_d: {
      id: 'sc_08_d',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      route: 'doran',
      text: '“明天核 AN-14。”她说，“你跟我一台升降机。”',
      next: 'c1_ve_11'
    },
    c1_ve_11: {
      id: 'c1_ve_11',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      route: 'doran',
      text: '交接之前，薇拉在记录台上删掉了一行。你替渡鸦号吞掉记录的时候，她就站在门内侧的第二个位置，看得一清二楚。\n“没有上报。”她说，“原因：待补充。”\n她把光标从原因那一栏移开，没有填。手一直放在键盘上，指节上那几圈白胶布在屏幕光里很亮。\n“明天核浮标，我的记录会照实写。”她补了一句，“今天这一行，我留空。”',
      next: 'ending_scarlet'
    },
    ending_scarlet: {
      id: 'ending_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      route: 'doran',
      onEnter: [{ type: 'flag', key: 'out_ch1_scarlet', value: true }],
      text: "天亮之前，铎兰敲了敲灰鸢的左肩装甲：“这台机器明天归我。你把证词核对好，检查时我们各管各的。”\nXR-07 留在三号货舱里，盖着那块灰防尘布。安全处的交通艇带着一份干干净净的清单离舰，赤垣的频道安静下去，霜环航道上多了一条不写在图上的缝。\n“工单我会补齐。”他说完就走，铜手指在门框上敲了一下。",
      outcomeId: 'ending_scarlet',
      continuesTo: 'ch02'
    },
    // ── 章末分支 C：数据链进灰塔的报告（hold -> ship_rail / duty） ───────────
    sp_01: {
      id: 'sp_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'nova',
      text: '你把 XR-07 的神经桥接接口交给诺瓦的时候，条件写在便签上，只有一行：伊芙娜·卡列尔——不可采集。\n她把便签读了两次，没问为什么，转身去接数据链。技术员进门的时候，移交单上“编号”那一栏还空着，韦恩看着那一栏看了三秒，签了字。\n驾驶舱被装上交通艇的货架，编号没有跟着走。',
      next: 'sp_02'
    },
    sp_02: {
      id: 'sp_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      route: 'nova',
      text: '“报告发出去了。”诺瓦把屏幕转过来给你看，只有收件栏和一行确认编号，“无人母舰已经解除对渡鸦号的锁定。他们拿到了想要的读数，就没有必要留在这条航线上。”\n“中尉那一栏我写了四个字：不可采集。”她把屏幕转回去，“这是我这辈子第一次替别人改结论。备注栏里我写了‘样本不可及’——他们没有理由再来要她。”',
      next: 'sp_03'
    },
    sp_03: {
      id: 'sp_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      route: 'nova',
      onEnter: [{ type: 'trust', who: 'ivna', amount: -1 }],
      text: '伊芙娜在气闸门口截住你。\n“灰塔的记录里，我那一栏现在是四个字：不可采集。”她把每个字都说得很清楚，“你替我做的这笔交易，我要它成为最后一次。下一次你要动我那一栏，先问我。”\n“我不是一件可以换的东西，也不该由别人替我谈价钱。”',
      next: 'sp_04'
    },
    sp_04: {
      id: 'sp_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'nova',
      text: '她说完就走了，没有等你回答。走廊那头，诺瓦站在观察廊门口看着这一幕，一句话都没插。\n她等你走近了才让开路。',
      next: 'sp_05'
    },
    sp_05: {
      id: 'sp_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      route: 'nova',
      text: '“我该解释一下刚才为什么没替你说话。”她靠回长椅上，腿伸直，“因为解释会变成担保，担保会变成报告里的一行，然后我就没办法把你当成一个变量看。我不做那种事。”\n“你听着不舒服，那是正常的。”她把腿收回来，“我也不打算说得好听一点。”',
      next: 'sp_06'
    },
    sp_06: {
      id: 'sp_06',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      route: 'nova',
      text: '她从领口拽出一张旧数据卡放在台面上。卡面没有编号，边角磨得发白。\n“这是我的私人备份，里面没有你们任何一个。”她把卡翻了个面，“留这个空位，是因为我开始不喜欢每件事都写进报告的感觉。这句话我只说一次，你听完就忘。”\n她起身去拿保温杯，发现里面是空的，骂了一声这座廊道的加热片。',
      next: 'sp_07'
    },
    sp_07: {
      id: 'sp_07',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      route: 'nova',
      text: "“按估算，你以后会后悔今天这笔交易。”她说，“那个数我不写进报告。报告里只有一句话：待观察。”\n“先观察一阵。明天有新情况，我会补进去。”",
      next: 'sp_08'
    },
    sp_08: {
      id: 'sp_08',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'nova',
      text: '交通艇离舰之前，技术员把货架锁死，驾驶舱的固定带在灯下反出一道白光。它被运走的时候没有编号，只有一张写着“受检器材”的标签。\n航线图上多了三个长期观测点，其中最近的一个离 AN-14 只有四十公里。薇拉站在货舱门口，看着那台驾驶舱被推上对接通道，手里的清册一直没合上。',
      next: 'c1_ve_12'
    },
    c1_ve_12: {
      id: 'c1_ve_12',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      route: 'nova',
      text: "薇拉把灰塔那份报告的副本读了两遍，放在台面上推给你：中尉那一栏被改成了“不可采集”。\n“这一条，我在评估里留空了。”她说，“可能是漏项。可我读到它的时候，记得自己停过笔。”\n她把副本收回去，折成和清册一样的宽度，夹在第三页后面。\n“如果你问我哪一种，”她停了一下，“我还需要想一想。以前写评估时，答案总是很快就出来了。”",
      next: 'ending_spire'
    },
    ending_spire: {
      id: 'ending_spire',
      kind: 'chapterOutcome',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      route: 'nova',
      onEnter: [{ type: 'flag', key: 'out_ch1_spire', value: true }],
      text: "交通艇离开二十分钟以后，诺瓦把报告推到机库台面上，最后一行是她手写的：\n“呼号 {callsign}——停止观测。个人备注，诺瓦。”\n灰塔拿到了数据，联合拿到了空编号，渡鸦号拿到了一个已经划掉的采购需求。伊芙娜那一栏从此写着“不可采集”，你的呼号第一次被写进灰塔的长期观测档案。\n诺瓦在你的呼号旁留下了那个数。后面的日期栏还空着。",
      outcomeId: 'ending_spire',
      continuesTo: 'ch02'
    },
    // ── 章末分支 D：谁也没给（hold -> medbay / workshop / ship_rail） ────────
    nt_01: {
      id: 'nt_01',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'neutral',
      text: '你把钥匙收进自己口袋。三号货舱里安静得能听见吊索的钢丝在吃劲，XR-07 留在渡鸦号上，清单上多了一行“结构件：三号货舱，限舰内”。\n封条上只有你一个呼号，后面是大片空白。军士长把移运单收走的时候，手抖了一下，又按平了。',
      next: 'nt_02'
    },
    nt_02: {
      id: 'nt_02',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'neutral',
      text: '韦恩在证词上盖了“待核实”三个字，带走一份不完整的清单。他翻到最后一页，发现“移交对象”那一栏是空的，笔尖在纸上停了一秒。\n“这个编号留在舰上，就要有人替它负责。”他说。',
      next: 'nt_02_p'
    },
    nt_02_p: {
      id: 'nt_02_p',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      route: 'neutral',
      text: '“我知道。”',
      next: 'nt_02_b'
    },
    nt_02_b: {
      id: 'nt_02_b',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      route: 'neutral',
      text: '他走之前看了你两秒——那种眼神你认得，他在记你的呼号。',
      next: 'nt_03'
    },
    nt_03: {
      id: 'nt_03',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      route: 'neutral',
      text: '伊芙娜在医务舱门口等你。\n“你把它留下了。”她说，“留下就是谁都没给，也就是谁都可以再来拿。接下来每一个来敲这艘船的人都得先过你这一关。”\n“我服从这个决定，因为它是你签的字。”她把袖口拉平，“但我今晚不替你把手套收回去。”',
      next: 'nt_04'
    },
    nt_04: {
      id: 'nt_04',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'workshop',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      route: 'neutral',
      text: "铎兰当着你的面把工具箱第二格的锁焊死了，焊点很不讲究，一看就是故意的。\n“焊死了。要开，只能连箱盖一起切。”他把焊枪线绕在胳膊上，“我也得切。”\n“我还是觉得这办法悬。不过东西留在船上，总归看得住。”\n他把灰鸢左肩最后那两颗销子拧到位，拧完拍了拍：“明天这台机器照样飞。”",
      next: 'nt_05'
    },
    nt_05: {
      id: 'nt_05',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      route: 'neutral',
      text: "观察廊里，诺瓦在她的表上给“渡鸦号”补了一行，备注一栏写着：此人经常改变计划。本次保全了船员。\n“四成一。”她说，“这条备注掺了我自己的判断。你以后得让我继续这么写得下去。”\n她把屏幕扣上，看了一眼舷窗外面那十八颗浮标：“明天你要去点 AN-14。那玩意儿不亮，这条航道上所有人走夜路都得靠猜。”",
      next: 'c1_ve_13'
    },
    c1_ve_13: {
      id: 'c1_ve_13',
      kind: 'dialogue',
      chapter: 'ch01',
      scene: 'hold',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      route: 'neutral',
      text: '封条贴好以后，薇拉在压力门前面站了很久，把封条的四个角都按了一遍。\n“这口箱子留在船上。”她说，“三边都会再来。检查官今晚带走的清单不完整，明天他还会带人来补。”\n她把接口箱的扣带又紧了一格，像是替自己记下了一件事。\n“明天第一班，我跟你去点浮标。”',
      next: 'ending_standing_alone'
    },
    ending_standing_alone: {
      id: 'ending_standing_alone',
      kind: 'chapterOutcome',
      chapter: 'ch01',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      route: 'neutral',
      onEnter: [{ type: 'flag', key: 'out_ch1_neutral', value: true }],
      text: '钥匙在你口袋里，XR-07 在三号货舱里，三边的档案上都留了你的呼号。\n灰鸢的左肩明天归铎兰，白鹭的甲板工明天做第二次手术，AN-14 明天要去点。渡鸦号第一次为一件东西同时得罪了三边——从今晚起，它只能靠自己。\n机库的灯一盏盏灭下去，最后剩灰鸢身上那一盏，照着它空了一块的左肩。',
      outcomeId: 'ending_standing_alone',
      continuesTo: 'ch02'
    },
    /* __APPEND_NODES__ */
  }
};

export default CHAPTER;
