// 钢翼盟约 / STEEL-WING COVENANT — 第三章「沧澜」章节模块（纯数据，无 import、无运行时 I/O）
//
// 契约见 candidate/production/contracts-g1/CHAPTER_MODULE_CONTRACT.md；世界固定事实见
// contracts-g1/dist/story/{catalog,world,characters,scenes}.mjs；美术身份见 ART_IDENTITY_LOCK.json。
//
// 入口 c3_01；章末结果 out_ch3_concord / out_ch3_scarlet / out_ch3_spire / out_ch3_neutral，
// 四个结果的 continuesTo 都是 ch04。本章内部无环，跨章只通过章末结果连接。
//
// 时间线（本轮整改后的唯一口径，与已批准美术的光线一致）：
//   D1 轨道：等窗口（02:00 起），窗口是 D1 14:10（灰塔路线提前到 05:20；诺瓦路线压后到 15:10）。
//   D1 黄昏—夜：下午落地接舷，街上买东西与军需栈房对档案（城市图=雨后蓝调黄昏），
//                东岬海堤选走绕路（海岸图=傍晚斜光），深夜回船补件。
//   D2 上午—午后：台地旧基站（地表图=上午硬光）→ 地面遭遇战 → 近海海战（黄昏入夜）。
//   D2 夜：回船，机库分面与过夜检修，医务舱私下对话
//             （机库图 / 医务舱图都是船内封闭舱室，地面阶段不用任何带星空窗景的房间）。
//   D3 傍晚六点半：民政所核对（基廷把最后时限压到当天零点）→ 当晚二十一点四十分出港入轨 → 舰桥三方同时要人。
//   D3 夜—D4：四个章末结果各自起飞回到轨道；夜枭右腿接口箱按汛前检修单重新接回通电，
//                这是本轮地面阶段的临时断电，不是永久拆除（接口箱的拆与不拆是第四章的事）。
//
// 四个章末结果都把渡鸦号写回沧澜轨道、薇拉在船上，并各自保留自己的路线代价：
//   联合=当面核对窗口排到联合港；赤垣=她自己去站上把接应线接上，代价留在那里；
//   灰塔=观测单元装到船上、诺瓦当常驻技术员；中立=三边都回绝、船员公开分歧且仍未和解。
//
// 说话人：narration / system / player / ivna / doran / nova / vera，
// 加上 authoring-additions.json 已批准的 keating 与 vester（登记申请见 ch03-cast-additions.json）。
// 每个节点只写一个实际说话人；另一人的回答是另一个节点。选项节点使用 choices 字段（引擎读的就是这个）。
//
// 知识纪律：本章坐实「薇拉档案上的名字属于一个死人」。
//   c3_choice_name 的三条路线都包含她第一次说「我不想」并且同一条路上坐实名字，
//   因此 vera_refused_once / vera_true_name_known / bridge_coordinates 在三路上都成立，
//   这是本章的必答而不是奖励；分歧落在她拒绝之后去了哪里。

export const CHAPTER = {
  number: 3,
  id: 'ch03',
  nodeIdPrefix: 'c3_',
  title: '第三章 · 沧澜',
  badge: '第三章',
  status: 'complete',
  entry: 'c3_01',
  nextChapter: 'ch04',
  contentTarget: {
    mainPathCjk: 14000,
    note: '一条正常完整路径 14,000–15,000 个中文可读字符（不含标点、空白、数字与拉丁字母）；实际值见 contentActual 与同目录 ch03-notes.json。'
  },
  contentActual: {
    mainPathCjk: 15646,
    corpusCjk: 22863,
    nodes: 299,
    choices: 8,
    options: 24,
    measuredAt: '2026-09-12',
    method: 'drafts/ch03-selfcheck.mjs（临时自检脚本，非交付物）的默认（有界）口径：从 c3_01 按引擎语义（requires / nextIf / variants / 选项顺序 / effects）走 64 条有界路径（8 个选择节点 × 8 个选项索引，越界取最后一个可用项）+ 3 条显式正常路线 + 4 条策略路线；只统计该路径上真正显示的文本（节点文本或命中的变体 + 被选项的文案 + 该选项的反应），不把互斥分支相加；语料总量统计全章节点文本、变体、选项文案与选项反应。CJK 判定为 [\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-FAFF]，不含标点、空白、数字与拉丁字母。本轮不做「节点 × 旗标」的逐状态枚举：本章 requires 总数为 0，旗标不构成门槛，静态链接遍历（全部 target 存在、299 节点从入口静态可达、无环）与逐状态枚举在本章等价。重复键审计直接读 ch03.mjs 源码统计 nodes / outcomes 两张表第一层键；当前 299 / 4，重复 0，加载后的对象与源码键数一致。',
    routeWitness: {
      mainPath_allFirstAvailable: 17054,
      mainPath_allSecondAvailable: 16032,
      mainPath_allLastAvailable: 15646,
      routeA_standard_direct: 16006,
      routeB_coast_detour: 16982,
      routeC_graytower_paid_window: 15626,
      out_ch3_concord: 16101,
      out_ch3_scarlet: 17263,
      out_ch3_spire: 17137,
      out_ch3_neutral: 17040,
      minimumWitnessedPath: 15626
    },
    toneSplit: {
      corpus: { combat: 2906, duty: 13521, offDuty: 6436 },
      allFirstAvailable: { combat: 2104, duty: 9576, offDuty: 5374, offDutyShare: 0.3151 },
      allLastAvailable: { combat: 2075, duty: 9458, offDuty: 4113, offDutyShare: 0.2629 }
    },
    audit: {
      boundedWalks: 64,
      boundedWalksRange: [16101, 17263],
      boundedWalksAllTerminal: true,
      staticLinks: { reachableFromEntry: 299, unreachable: 0, cycles: 0, requiresTotal: 0, missingTargets: 0 },
      duplicateKeys: { nodesKeys: 299, outcomesKeys: 4, loadedNodes: 299, loadedOutcomes: 4, duplicates: 0 },
      previousFullSearch: { mode: 'full（保留，本轮未运行）', states: 140063, cap: 400000 }
    },
    note: '四个章末结果各有一条见证路径（本轮 64 条有界走法口径：最短 16,101，最长 17,263；三条显式「正常路线」15,626 / 16,006 / 16,982；最短主干 15,646）。全部高于 14,000 的下限：本轮不做逐状态穷举，改用「64 条有界走法 + 静态链接 + 重复键审计」，因为本章 requires 总数为 0，旗标不构成门槛，两种口径在本章等价。取舍与逐项理由见 ch03-notes.json 的 contentActual.trimPolicy 与 repairsR2。'
  },
  decisions: [
    'c3_choice_city',
    'c3_choice_market',
    'c3_choice_veteran',
    'c3_choice_detour',
    'c3_choice_plateau',
    'c3_choice_firefight',
    'c3_choice_sea',
    'c3_choice_name'
  ],
  outcomeNodeIds: ['out_ch3_concord', 'out_ch3_scarlet', 'out_ch3_spire', 'out_ch3_neutral'],
  scenes: ['orbit', 'planet_approach', 'city', 'coast', 'surface', 'landbattle', 'seabattle', 'hangar', 'medbay', 'ship_rail', 'quarters', 'bridge'],
  companionMilestones: {
    ivna: [
      '东岬海堤：同类之间的第一句实话，以及一条不替她决定的退路',
      '台地下的临时口令：她把指挥权交出来一分钟，让薇拉把话说完',
      '章末：只有她一个人投弃权'
    ],
    doran: [
      '港区修一台民用泵，顺手替两个矿站留话',
      '雨棚底下的一句话：名字是别人写的，手艺是自己的',
      '章末：他把工装收成两包，说一包是给新的地方留的'
    ],
    nova: [
      '观测表上第一次出现「不确定，原因是薇拉·厄兰」',
      '台地基站里把活体读数从清单上划掉',
      '章末：她自己按下发送键，第一个交出去'
    ],
    vera: [
      '上街买东西：按手册说话，被店主当成怪人',
      '军需栈房：看着档案照片一句话没说',
      '台地遮棚下第一次主动提问（问主角要什么）',
      '对着正式命令说出第一次「我不想」'
    ]
  },
  outcomes: {
    out_ch3_concord: {
      chapter: 'ch03',
      title: '章末结果 · 一份调到第二副桌上写的报告',
      route: 'concord',
      routeName: '环带联合',
      summary: '她自己挑了联合：不逃、不躲，要求当面核对档案，并要求把「薇拉·厄兰」这个名字的处置写成她自己签字的附件。',
      consequences: [
        '基廷把移交窗口从「下一班交通艇」改成「随船到联合港当面核对」，他的权限没有涨，耐心涨了。',
        '渡鸦号多了一份编号登记：辅机序列二期 AU-11 仍在编，但档案身份栏被划掉，改成待核。',
        '死航线第二段锚链解码（锚链钥匙第二段）留在船上的导航核心，副本由你自己保管，没有进任何一边的档案。',
        '薇拉在报告末尾自己写了一行：本人不同意移交，理由口述。',
        '渡鸦号按凌晨的窗口回到沧澜轨道，航向联合港外的汇合点；联合的护航艇跟在四十公里外面，不进射界也不离开。'
      ],
      nextHook: '联合港的档案室会开两次门：一次给基廷，一次给你。',
      continueHint: '第四章从「她当着编制说不同意、而窗口已经排到联合港」继续：船已经在沧澜轨道上，被三边同时追踪，薇拉在船上。',
      continuesTo: 'ch04'
    },
    out_ch3_scarlet: {
      chapter: 'ch03',
      title: '章末结果 · 一条不写进任何名单的名字',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: "她选了赤垣，打算亲自去外环看看矿站怎么过冬；这次的去向由她自己决定。",
      consequences: [
        '赤垣在澜港的军需栈房后面给出了一条不写进图的接应线，接头词是一句货物问价。',
        '死航线第二段锚链解码随她一起走，渡鸦号留下的是一份改写过的通航记录，矿物名对不上但电码对得上。',
        '铎兰把工具箱第二格腾空了一半，他说那里本来是留给矿站过冬的第三条线的。',
        '基廷当天晚上就把「辅机序列 AU-11 去向不明」写进了报告——他没有点名渡鸦号，但把日期写得很清楚。',
        '她自己去外湾把接应线接上了，回来的时候带着手写字条；船按凌晨的窗口回到沧澜轨道，人没有少，夜枭的接口箱也按汛前检修单接回通电。'
      ],
      nextHook: '外环十七个矿站里，有五个会先知道这条路存在；另外十二个要靠别的办法。',
      continueHint: '第四章从「船上多了一条不写进图的线、人的位置没有变」继续：船已经在沧澜轨道上，被三边同时追踪，薇拉在船上。',
      continuesTo: 'ch04'
    },
    out_ch3_spire: {
      chapter: 'ch03',
      title: '章末结果 · 一次自愿的观测',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: '她自己接通了灰塔的观测频道：用被观测三十天换一份能对上编号的档案原件，条款由诺瓦先看一遍。',
      consequences: [
        '灰塔的观测窗口先从湳礁台站开始，台站由渡鸦号自己选、自己带人上去验电，观测局的保安只能站在门外。',
        '维斯特要的活体读数被写在条款第七行；诺瓦在旁边手写批注：可撤回，需本人每十天确认一次。',
        '死航线第二段锚链解码只交出一半，另一半留在夜枭的存储器里，读取口令在薇拉自己手上。',
        '基廷发现名单上多了一行观测局编号，他第一次在报告里写了「程序冲突」。',
        '观测单元装到船上的主桅后面，船按凌晨的窗口回到沧澜轨道；技术员是诺瓦，薇拉留在自己的岗位上。'
      ],
      nextHook: '观测站的三十天里，维斯特会试着让一段航道再失效一次，好让对照组有第二个样本。',
      continueHint: '第四章从「船上多了一份三十天的观测条款、观测单元已经装在船上」继续：船已经在沧澜轨道上，被三边同时追踪，薇拉在船上。',
      continuesTo: 'ch04'
    },
    out_ch3_neutral: {
      chapter: 'ch03',
      title: '章末结果 · 留在船上，谁也不给',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: '三边的要求都被压回纸上：她不交出去，也不走出去；船在天气窗口打开以后入轨等下一步，等来的会是别的船。',
      consequences: [
        '三份要求都留在舰桥战术台上：基廷的移交单、赤垣的接应线、灰塔的观测登记；每一份都没有签字。',
        '渡鸦号在风暴过去、跑道重新亮灯以后入轨等待天气窗口；夜枭的接口箱按汛前检修单接回通电，接缝封条完好，签名是薇拉。',
        '死航线第二段锚链解码进了导航核心，读取需要三把钥匙：你的、诺瓦的、薇拉的。',
        '船员第一次公开分裂：伊芙娜要求所有人不得私下接任何一边的通讯，铎兰当场说他做不到；两个人后来都没有收回自己那句话。'
      ],
      nextHook: '三边都看见了这艘船没有倒向任何一边，所以三边都会再来一次——下一次不会只带纸。',
      continueHint: '第四章从「三个人同时被要求站队、船员公开分裂且没有和解」继续：船已经在沧澜轨道上，被三边同时追踪，薇拉在船上。',
      continuesTo: 'ch04'
    }
  },
  nodes: {
    // ══ 第一节拍：沧澜轨道，等指令（orbit / duty，三路分歧的入口） ══════════════
    c3_01: {
      id: 'c3_01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '沧澜的轨道上很安静，安静到能听见通风管里那点风。\n'
        + '主屏上挂着一串排队编号：锚点浮标从北极侧一路亮到赤道，二十一枚，间隔均匀，一批一批地往同一片海面上照。渡鸦号吊在队列末尾，引擎降到最低那档，像一条停在路边等红灯的旧货船。',
      next: 'c3_01_b'
    },
    c3_01_b: {
      id: 'c3_01_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "舰桥上的人各站各的位置。伊芙娜在战术台前核对落地许可的编号，诺瓦在观测台前换数据卡，铎兰拿着一份备件单在角落里等着签字。落地窗口还在排队，伊芙娜每核完一个编号，就抬头看一次计时器。",
      next: 'c3_02'
    },
    c3_02: {
      id: 'c3_02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '死航线那半段数据已经在导航核心外面码好了十二个包裹，摆了一整晚。'
        + '谁先拿到它们，谁就先拿到那半条路：这个道理，船上四个懂行的人各想了一遍，谁都没先说出口。',
      next: 'c3_02_b'
    },
    c3_02_b: {
      id: 'c3_02_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '十二个包裹里装的不只是航向。'
        + '第二座锚点的解码、过点时的母线电压、还有一段三秒钟的静默——那三秒里所有仪器都在工作，只是没有一条记录写进了公文。'
        + '诺瓦把这三秒单独抄了一份，没有并入任何一份包裹。',
      next: 'c3_03'
    },
    c3_03: {
      id: 'c3_03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「三条线，都挂着。」诺瓦把观测板转过来，'
        + '「一是联合航道处，要求先把十二个包裹按标准格式上交，落地窗口排在明天十四点十分。二是赤垣的商用频道，用的是矿站的货价表，问我们船上还有多少压舱矿石。三是灰塔的观测登记，只问了一个数字：我们过第二座锚点的时间，精确到秒。」',
      next: 'c3_04'
    },

    c3_04: {
      id: 'c3_04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "伊芙娜继续核对许可。「航道处给窗口，赤垣在试我们的口风，灰塔想做数据交换。拖到最后，三家都会来催。」她推过航道图，「先定一家。我去回复另外两边，谈崩了再报上去。」",
      next: 'c3_04_c'
    },

    c3_04_c: {
      id: 'c3_04_c',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "「买菜也得排进日程。」她补了一句，「膳食舱的人连着骂了三天。今天要是不买，船上的菜就只够撑到风暴进湾。」",
      next: 'c3_05'
    },
    c3_05: {
      id: 'c3_05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      onEnter: [{ type: 'flag', key: 'met_keating', value: true }],
      text: '基廷从舰桥后侧的走道下来，手里夹着那只灰色文件夹。'
        + '「补一句。」他说，'
        + '「安全处的审核没有结束。沧澜是这一带唯一能开门的港口，落地许可由我签。你们想下船买东西、想把灰鸢的挂架换掉，都得先经过那一栏。」',
      next: 'c3_05_b'
    },
    c3_05_b: {
      id: 'c3_05_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      text: '他把文件夹里的一页抽出来给诺瓦看。'
        + '「第四栏到最后一栏我都签了，落地许可从十四点开始有效，限六个小时。超过六个小时，港务按滞留处理，滞留是要交钱的——这笔钱不用你们出，也不用我出，它会挂在这艘船的账户上。」',
      next: 'c3_06'
    },
    c3_06: {
      id: 'c3_06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: "「另外一句，只说一次。」他翻开文件夹第一页，又合上。「这艘船上有一份人事记录需要核对。这次先核对文字记录。核对结果和人员处置分开办。」",
      next: 'c3_07'
    },
    c3_07: {
      id: 'c3_07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '他说完就去核对接舷码头的水文数据，把一个后脑勺留给你们。'
        + '伊芙娜在战术台底下按了两个键，舰桥的记录灯灭掉一颗。',
      next: 'c3_07_b'
    },
    c3_07_b: {
      id: 'c3_07_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "你走到战术台前，把三条线重新拉了一遍。航道处那条是直的：交东西，换窗口，没有别的。赤垣那条绕：用货价表上的词回话，等于承认看得懂。灰塔那条最短：给一个数字，换一个数字。三条线并排亮在屏幕上，回复栏都还空着。",
      next: 'c3_choice_city'
    },
    c3_choice_city: {
      id: 'c3_choice_city',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三条线上的光点还在闪。落地窗口只有三个，过了就要等沧澜的天气带过去。',
      choices: [
        {
          id: 'c3_orb_full',
          label: '按标准流程上交：十二个包裹全给航道处，落地走明天十四点十分那个窗口。',
          next: 'c3_or1_a1',
          reaction: '伊芙娜把标准格式的移交单调出来，一份一份地对编号。基廷在旁边站着看完了全部十二个，中途没有说一句话。',
          effects: [
            { type: 'flag', key: 'c3_orb_full', value: true },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c3_orb_first',
          label: '先落下去再算账：让诺瓦用清单格式回执，把落地窗口往前压。',
          next: 'c3_or1_b1',
          reaction: '诺瓦在回执末尾加了一行技术备注，把「已收到」写成「已收到，内容待核」。她说这一行能拖住联合的盖章，拖到船落地为止。',
          effects: [
            { type: 'flag', key: 'c3_orb_first', value: true },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        },
        {
          id: 'c3_orb_clock',
          label: '把过点时间卖给灰塔，换一个能自己挑的落地窗口和一份对时文件。',
          next: 'c3_or1_c1',
          reaction: '灰塔的回执来得比谁都快：一串校验码、一个落地窗口，还有一纸对时文件，签发单位写着观测局第三观测组。伊芙娜读完把文件按在台面上，说这份东西以后要贴起来。',
          effects: [
            { type: 'flag', key: 'c3_orb_clock', value: true },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 }
          ]
        }
      ]
    },
    c3_or1_a1: {
      id: 'c3_or1_a1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '十二个包裹一个不落地过了一遍校验，航道处的回执在第四十分钟进来，落地窗口给到第二天十四点十分，锁不上也不放。'
        + '基廷在自己那一栏签了字，签完把笔插回口袋，像是要证明这支笔只有他能收。',
      next: 'c3_or1_a2'
    },
    c3_or1_a2: {
      id: 'c3_or1_a2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「规矩走完了。」伊芙娜把移交单副本夹进舰桥夹板，'
        + '「你按规矩走，我就按规矩替你顶。下次想抄近路，先告诉我一声——我不拦，但我要站在旁边看。」',
      next: 'c3_or1_end'
    },
    c3_or1_end: {
      id: 'c3_or1_end',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '离窗口开放还有三十多个小时。'
        + '船上把这两天切成值班段：机库做汛前检修，仓库把要带下船的空罐和工具清点一遍，舰桥每四个小时记一次轨道。',
      next: 'c3_dt01'
    },
    c3_or1_b1: {
      id: 'c3_or1_b1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "诺瓦把回执发出去，顺手把发送时间往后调了六分钟。「接口允许调整发送时间，六分钟在裕度以内。」她把观测板扣在胸前，「落地窗口我压到十五点十分，港区的排班表上正好空一格。空的那一格本来给一艘运水产的船，那艘船昨天翻在浅滩上了。」",
      next: 'c3_or1_b2'
    },
    c3_or1_b2: {
      id: 'c3_or1_b2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "「十五点十分。」伊芙娜看了一眼主屏，「你比标准窗口早了一个小时，代价是那艘翻掉的船的名字以后会挂在这张表上。」她顿了顿，「把那艘船的名字保留下来，以后查得到这个窗口原本给了谁。落地以后把排班表复印一份贴膳食舱门口。」",
      next: 'c3_or1_b3'
    },
    c3_or1_b3: {
      id: 'c3_or1_b3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '落地窗口提前到十五点十分。省下来的一个小时记在排班表上，也记在那艘翻掉的船的编号旁边。',
      next: 'c3_dt01'
    },
    c3_or1_c1: {
      id: 'c3_or1_c1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vester',
      text: '灰塔的频道接得很稳，背景里是设备和风扇的声音。'
        + '「过点时间收到。」那个人说话不快，'
        + '「你们在死航线上没有按任何一份预测飞，这很好。落地窗口我给你改到十三点四十分，另外给你们一份对时文件——你们会用到，因为你们接下来会想核对一些发生过的时刻。」',
      next: 'c3_or1_c2'
    },
    c3_or1_c2: {
      id: 'c3_or1_c2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vester',
      text: '「顺便说一句。」他补道，'
        + '「观测局的登记不等于保护，也不等于收留。我们只做记录，记录不会替你爱人，也不会替你抓人。要这点，你找别人。」',
      next: 'c3_or1_c3'
    },
    c3_or1_c3: {
      id: 'c3_or1_c3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "频段断掉，指挥台上多了一纸对时文件。诺瓦把文件读了两遍，逐项核对时刻，附件里也只有对时记录。基廷在舰桥后侧看完了全程，没有当场发作，只是把文件夹的搭扣按响了两次。",
      next: 'c3_or1_c4'
    },
    c3_or1_c4: {
      id: 'c3_or1_c4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「你换了半个小时，还多了一条观测局的记录。」伊芙娜说，'
        + '「这笔买卖我不反对，前提是你记得买家是谁。」',
      next: 'c3_dt01'
    },




    // ══ 插曲：起飞前的一顿普通饭与等指令的收尾（ship_rail / off_duty） ═══════
    c3_dt01: {
      id: 'c3_dt01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '离下港还有十几个小时，伊芙娜把舰桥上的人分了班。'
        + '第一班去食堂，第二班在观察廊等指令，任务是把发下来的那几箱补给吃一部分——膳食舱的说法是「新菜进船之前先把旧的清出地方」。',
      next: 'c3_dt02'
    },
    c3_dt02: {
      id: 'c3_dt02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "观察廊是封闭的加压舱廊，一整排落地舷窗，窗面有细密划痕和一层薄霜，靠窗摆着几节长椅和一张积着薄灰的观察记录台。渡鸦号在这里是侧着身子的，舷窗外能看到沧澜的弧线和那颗苍白的卫星，卫星在窗框里走得很慢。",
      next: 'c3_dt03'
    },
    c3_dt03: {
      id: 'c3_dt03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: "铎兰拎着一个加热袋进来，袋子里是清出来的旧罐头、两包没泡开的干粮和一壶热水。「先分一下，每样都有。」他把东西摊在长椅上，「存粮吃到这一顿，落地以后得多买点菜。我想吃点带叶子的了。」",
      next: 'c3_dt04'
    },
    c3_dt04: {
      id: 'c3_dt04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "诺瓦先挑了一罐，用勺子敲了敲罐底，听声音判断里面还有多少。「这个牌子换了配方。」她说，「上一次是三年前，那次太咸。你们谁记得上一次吃过什么？」铎兰想了一会儿，说好像也是咸的。诺瓦点点头，把罐子递给他。",
      next: 'c3_dt05'
    },
    c3_dt05: {
      id: 'c3_dt05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '加热袋的水汽在舷窗上结了一层白。'
        + '薇拉坐在最靠里那节长椅上，把干粮掰成小块泡在热水里，按分钟数着。'
        + '数到第四分钟，她用勺子舀起来尝了一口，皱着眉把勺子放回去，又等了半分钟。',
      next: 'c3_dt06'
    },
    c3_dt06: {
      id: 'c3_dt06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: "「光等着泡开可得等到换班。」铎兰说，「拿盖子压碎，泡得快。」他伸手把她的杯子按住，隔着杯盖压了两下。薇拉再尝的时候没有皱眉，她把杯子端在手里，看了两眼杯壁，像是在核对一个参数。",
      next: 'c3_dt07'
    },
    c3_dt07: {
      id: 'c3_dt07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「压两下。」她说，'
        + '「这样快。」她说，「手册上没写。」'
        + '她把杯盖压回去，又压了一下，动作比刚才熟练。',
      next: 'c3_dt08'
    },
    c3_dt08: {
      id: 'c3_dt08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '吃完以后，诺瓦把空罐按大小叠成一摞，铎兰把长椅上的水渍擦干一半就走了，剩下的那一半留在窗台上，慢慢渗成一小片深色。'
        + '舷窗外的沧澜转过去一格，卫星从窗框里消失，又从另一头出来。',
      next: 'c3_dt09'
    },
    c3_dt09: {
      id: 'c3_dt09',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '薇拉把杯子放回长椅上，从背心口袋里摸出一卷白胶布，把右手中指上松掉的一圈重新缠好。'
        + '缠完她把胶布卷收起来，两只手放在膝盖上，看着窗外。'
        + '她没有说话，也没有要走，就是坐在那里，看行星慢慢转。',
      next: 'c3_dt10'
    },
    c3_dt10: {
      id: 'c3_dt10',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '廊子里只剩两个人。'
        + '舷窗下面那排加强肋把舱灯的光切成一段一段，落在她过大的灰蓝背心上，胸口那条旧姓名条已经洗得看不清字了。',
      next: 'c3_dt11'
    },
    c3_dt11: {
      id: 'c3_dt11',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「这条廊子的椅子，第三节最平。」她说，'
        + '「第四节有一个翘起来的钉子，坐下去会硌。我是昨天试出来的。你以后要是来，坐第三节。」',
      next: 'c3_dt12'
    },
    c3_dt12: {
      id: 'c3_dt12',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '你说好。'
        + '舱廊里安静了一会儿，只有通风管的风声和很远的地方传来的、水在管子里流动的声音。'
        + '她把脚往前挪了半寸，让鞋跟踩在长椅下面那根横杆上，姿势看起来比站着的时候松了一点。',
      next: 'c3_rl01'
    },
    c3_rl01: {
      id: 'c3_rl01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '交班前最后一件事是把要带下船的东西点一遍：空保温壶两个、购物清单一张、修泵的工具包一个、灰鸢的备用销子四个。'
        + '伊芙娜在单子上逐个打勾，打到销子那一行停了一下，问备用件是不是从机库领的。铎兰说是，单子他签的。',
      next: 'c3_rl02'
    },
    c3_rl02: {
      id: 'c3_rl02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉把自己那只杯子放进柜子，摆正，杯口朝上。'
        + '「下船以后有三件事我要说清楚。」她把手放在柜门上，'
        + '「第一，买菜的钱是公账，我把收据留着。第二，如果要跟店主说话，我先问一句再开口。第三，今天不在走廊里分白胶布——上个月分掉了小半卷。」',
      next: 'c3_rl03'
    },
    c3_rl03: {
      id: 'c3_rl03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "「胶布的事你记这么清。」诺瓦把观测板收进袋子里，「那一卷算铎兰送的。你记进公账，回头他又得翻工具箱找领用单。」",
      next: 'c3_rl04'
    },
    c3_rl04: {
      id: 'c3_rl04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「那我改成：那一卷是他给的。」薇拉说，'
        + '「这一条我记在私人那一页。」'
        + '她把小本子翻到后半页，写了两行，写完把本子合上，塞回背心内袋，和内袋里那叠纸放在一起。',
      next: 'c3_rl05'
    },
    c3_rl05: {
      id: 'c3_rl05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '廊里的灯按班次调暗了一档。'
        + '铎兰把空罐拎走，边走边敲，敲到第三下被伊芙娜从走道那头看了一眼，就停了。'
        + '舷窗外那颗苍白卫星正好转到窗框中间，停了两秒，又滑出去。',
      next: 'c3_rl06'
    },
    c3_rl06: {
      id: 'c3_rl06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "轮换表走了一整轮，舷窗外的沧澜从夜面转到晨昏线，又从晨昏线转到受光的一面。十二个小时里，大家按班次吃饭、换岗，等待港务通知。按港务给的时刻，窗口还要等半天。",
      next: 'c3_ap01'
    },

    // ══ 第二节拍：第一眼沧澜（planet_approach / duty） ══════════════════════════
    c3_ap01: {
      id: 'c3_ap01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '主屏上的沧澜是一颗蓝色的球，蓝色被云带切成几段，露出来的陆地全是硬的：岩脊、断口、浅色的岩台，没有一大片平整的地方。'
        + '晨昏线从画面左下斜着切过去，一半城市还在亮灯。',
      next: 'c3_ap01_b'
    },
    c3_ap01_b: {
      id: 'c3_ap01_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '大气的边缘在屏幕外侧亮成一条细线。'
        + '穿过第一条云带的时候，船身开始轻轻抖，抖得很匀，像有人在下面用手指敲桌沿。'
        + '再往下，海面出现了：一大片深蓝，中间嵌着几块浅色，是珊瑚礁还是浅滩，从轨道上分不出来。',
      next: 'c3_ap02'
    },
    c3_ap02: {
      id: 'c3_ap02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "画面右上角，素月缓缓移过云层，苍白表面上散着大小环形山。沧澜只有这一颗卫星。航道图叠上屏幕时，几条人工航路绕过它，在行星前方交汇。",
      next: 'c3_ap03'
    },
    c3_ap03: {
      id: 'c3_ap03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "「卫星，素月；单星系统，无行星环。磁场正常。」诺瓦报完轨道数据，切到登陆说明，「大气能呼吸，气压比舰内高一档。海浪很重，出海全员穿救生背心，互相检查扣带。」",
      next: 'c3_ap04'
    },
    c3_ap04: {
      id: 'c3_ap04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '澜港的轮廓从云缝里露出来，贴在海岸线上，长条形，一头是深水泊位，一头是礁石。'
        + '空港在城北，一条着陆带被海水围着，两侧全是低矮的厂房和临海的养殖槽。',
      next: 'c3_ap04_b'
    },
    c3_ap04_b: {
      id: 'c3_ap04_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「重力一点零五个标准。」诺瓦报了最后一个数字，'
        + '「比船上重四分之一。落地以后别学铎兰那样直接从舱门跳下来，跳下来膝盖要疼三天——他自己试过。」',
      next: 'c3_ap05'
    },
    c3_ap05: {
      id: 'c3_ap05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉站在主屏侧后方，位置和昨天一样，离舷窗三步，离战术台四步。'
        + '「进港检查清单十一项。」她报完，停了一下，'
        + '「其中第七项要求机组在下船前确认外骨骼无外部损伤。灰鸢左肩挂架在死航线上裂过一道，我没有补报。」',
      next: 'c3_ap06'
    },
    c3_ap06: {
      id: 'c3_ap06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: "「现在补。落地之前把它写进清单，原因栏写挂载应力，附上刚才的测量值。」",
      next: 'c3_ap07'
    },
    c3_ap07: {
      id: 'c3_ap07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'warm',
      tone: 'duty',
      speaker: 'vera',
      text: '「收到。」她翻到清单第七项，把两行字写进去，落笔很慢，像在数笔画。'
        + '写完把笔别回胸前口袋，又说了一句：'
        + '「两行都写进去了，理由栏写挂载应力。」',
      next: 'c3_ap07_b'
    },
    c3_ap07_b: {
      id: 'c3_ap07_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '港务频道：渡鸦号，着陆带二，进港航线已清空，地面风速七级，阵风十一级，横风上限八级，允许进近。'
        + '频道停了一拍，又补上：泊位在东侧第三排，机库里有两台备用吊车，用不用你们自己定。',
      next: 'c3_ap08'
    },
    c3_ap08: {
      id: 'c3_ap08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '着陆带从上往下压过来，先是白色的浪线，再是礁石上那层被潮水泡久的黑，最后是混凝土上一排排褪色的框。'
        + '起落架接地的时候船身往下一沉，舷窗外掠过一大片溅起来的浅水；这里的重力比船上重，你扶着战术台站直的时候，膝盖比平时更花力气。',
      next: 'c3_ap08_b'
    },
    c3_ap08_b: {
      id: 'c3_ap08_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'planet_approach',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '港务的引导车从着陆带旁边开过来，车顶的灯一闪一闪。'
        + '牵引杆接上以后，整艘船被慢慢拖着走过一段水泥地，停在一排低矮的机库之间。'
        + '舷窗外面能看见栈桥上晒着的渔网，和几个边跑边回头的小孩。',
      next: 'c3_cy00'
    },
    c3_cy00: {
      id: 'c3_cy00',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '接舷手续办完，卸货单签完，天已经往黄昏那边偏了。'
        + '街灯还没亮，店里的灯先亮了；雨停在两个小时以前，檐口的水还在往下滴。'
        + '伊芙娜把三小时地面时间写进排班表：补给、修件、吃饭，各自记在自己的清单上。',
      next: 'c3_cy01'
    },

    // ══ 第三节拍：港区上街买东西（city / off_duty） ═════════════════════════════
    c3_cy01: {
      id: 'c3_cy01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '港区的街是湿的，雨刚停没多久。低层房子的外墙上挂着成排的管线，屋檐下晾着没有被收走的衣服，水一滴一滴地打在装卸轨上。'
        + '渡鸦号的人被放了三个小时的地面时间。',
      next: 'c3_cy01_b'
    },
    c3_cy01_b: {
      id: 'c3_cy01_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '街上有正常的动静：装卸轨上的空车一节一节地滑过去，卖热食的小车在路口停着，锅盖一掀，白气糊住半张招牌。'
        + '小孩蹲在水沟边低头看什么，看完就走了。'
        + '这里跟霜环外环不一样，也跟船上不一样——这里的日子看起来是有人一直过下去的。',
      next: 'c3_cy02'
    },
    c3_cy02: {
      id: 'c3_cy02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '铎兰把一张单子拍在你手里，单子背面还沾着铜臂蹭出来的油。'
        + '「两件事。第一，十八号栈房后面那台民用泵，昨天烧了一个线圈，我答应人家今晚之前让它喝水。第二，」他把那页翻过来，'
        + '「这上面是菜。别笑，船上的菜比零件重要，膳食舱那几位已经连着骂了三天罐头。」',
      next: 'c3_cy03'
    },
    c3_cy03: {
      id: 'c3_cy03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '薇拉跟在你右侧半步，背着那只过大的灰蓝救生背心，背心上原来那位主人的旧姓名条还贴在胸口。'
        + '她的手指在袖口里蜷着，白胶布裹到第二个指节。她看街的方式和看仪表差不多：先看边缘，再看中间，最后才看人。',
      next: 'c3_cy03_b'
    },
    c3_cy03_b: {
      id: 'c3_cy03_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '买菜的清单是三行手写字，中间那行被人用红笔圈过：鱼干不要最便宜的。'
        + '下面的落款写着膳食舱值班员的名字，名字后面还画了一只很小的锅。',
      next: 'c3_cy04'
    },
    c3_cy04: {
      id: 'c3_cy04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「清单上第一项：买四公斤鲜菜、两公斤鱼干、十二个鸡蛋。」她把纸念得很平，像在报参数，'
        + '「第二项：问店主能不能按周结账。第三项：如果对方拒绝，不重复询问。这一条是我们那边写的，所以我照做。」',
      next: 'c3_cy05'
    },
    c3_cy05: {
      id: 'c3_cy05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '街口第一家杂货铺门口挂着塑料帘子，帘子上印着一条洗得发白的鱼。'
        + '店里的灯亮着，柜台上摆着玻璃罐，一个五十来岁的女人正拿抹布擦秤盘，膝盖下面趴着一只上了年纪的狗。',
      next: 'c3_cy05_b'
    },
    c3_cy05_b: {
      id: 'c3_cy05_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '柜台上的玻璃罐里装着腌菜和干货，罐口的封纸上盖着日期。'
        + '墙上挂着一块木牌，木牌上写着今天的价钱，三行字里有一行被划掉重写过。'
        + '门外，装卸轨上的一节空车滑过去，挂着的小铃铛响了一路。',
      next: 'c3_cy06'
    },
    c3_cy06: {
      id: 'c3_cy06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉在柜台前站定，两只脚跟并齐，背挺得很直。'
        + '「您好。第三小队 2 号机代表渡鸦号提出采购申请：鲜菜四公斤、鱼干两公斤、鸡蛋十二个。请求按周结账。若贵方不同意，我方不再重复申请。」'
        + '她说完就把清单递出去，像递一份正式的表格。',
      next: 'c3_cy07'
    },
    c3_cy07: {
      id: 'c3_cy07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '抹布停在秤盘上。女店主抬眼看了看她，又看了看你，眉毛慢慢抬起来。'
        + '趴在地上的狗抬起头，很配合地叫了一声，又趴回去。'
        + '柜台上那台老式台秤的指针晃了两下，停在零上。',
      next: 'c3_cy08'
    },
    c3_cy08: {
      id: 'c3_cy08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉没有等到回答，按第三条把清单收了回来，动作标准得像完成了一次交接。'
        + '「我方不再重复申请。」她重复了一遍，声音比刚才小半格，然后把手垂回身侧，等你的下一步。',
      next: 'c3_choice_market'
    },
    c3_choice_market: {
      id: 'c3_choice_market',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '女人把抹布往肩上一搭，看看薇拉，又看看你，等着谁先说话。',
      choices: [
        {
          id: 'c3_mk_rescue',
          label: '接话救场：你按这条街的方式把事情说圆，说船上的小妹今天第一次上街。',
          next: 'c3_cy_a1',
          reaction: '女人笑出了声，笑到一半自己咳了一下，转手就往秤上抓菜。她说第一次上街的都这样，她第一次出门买菜的时候把整条街的价钱问了三遍。',
          effects: [
            { type: 'flag', key: 'c3_mk_rescue', value: true },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        },
        {
          id: 'c3_mk_hold',
          label: '放手让她自己收尾：站到一边，让她按自己的方式谈完这笔账。',
          next: 'c3_cy_b1',
          reaction: '薇拉看了你一眼，重新把清单摊开。这一次她没有抬头念，而是照着女人的问话一条一条答，答得很慢，但没有再提第三条。',
          effects: [
            { type: 'flag', key: 'c3_mk_hold', value: true },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        },
        {
          id: 'c3_mk_leave',
          label: '换一家。你把清单折起来，向店主点头，带她走出帘子。',
          next: 'c3_cy_c1',
          reaction: '薇拉跟着你出去，在帘子外站定，说这条街的第二家铺子距离一百二十米，走过去要两分钟。她的记录没有错，只是那条记录里没有第二种问法的位置。',
          effects: [
            { type: 'flag', key: 'c3_mk_leave', value: true }
          ]
        }
      ]
    },
    c3_cy_a1: {
      id: 'c3_cy_a1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '女人一边抓菜一边问：哪条船下来的，待多久，鸡蛋要不要挑大的。'
        + '你答一句，她接一句，秤盘上的菜越堆越高，最后她多塞了两把晒干的辣椒，说这个你们船上没有，拿去试试。',
      next: 'c3_cy_a2'
    },
    c3_cy_a2: {
      id: 'c3_cy_a2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉站在旁边看着秤，等到结账的时候主动伸手把两个袋子接过去。'
        + '「多少钱。」她问完自己愣了一下，又补上两个字：'
        + '「刚才。」'
        + '她把这三个字说得像是把卡住的开关按了下去。',
      next: 'c3_cy_a3'
    },
    c3_cy_a3: {
      id: 'c3_cy_a3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '出了帘子，她走在街沿内侧，一直没说话。走到第二个路口，她开口：'
        + '「我有一件事不明白。」'
        + '她把袋子换到另一只手，'
        + '「她刚才多给的两把辣椒，不在清单上。我们没有单据可以报，也没有对应的编号。这种多出来的东西，应该记在哪里。」',
      next: 'c3_cy_a4'
    },
    c3_cy_a4: {
      id: 'c3_cy_a4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '铎兰从栈房那头过来，正好听见最后一句，抬手就要去拎袋子。'
        + '「记我账上。」他说，'
        + '「这家老板娘叫雷姐，她男人十六年前开船跑外环，回来的次数比汛期还少。你以后再来，就说船上下来的，她给你多塞的东西比今天多。」',
      next: 'c3_cy_a5'
    },
    c3_cy_a5: {
      id: 'c3_cy_a5',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「记下来了。」她说，'
        + '「雷姐，多塞的东西不用报。」'
        + '她顿了一下，又自己加了半句：'
        + '「下次我来的时候带空的袋子。」',
      next: 'c3_cy_a6'
    },
    c3_cy_a6: {
      id: 'c3_cy_a6',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '三个袋子，一个你拎着，两个在她手上。街灯从湿漉漉的路面亮起来，把一长串影子拉在装卸轨上晃。',
      next: 'c3_cy_a6_b'
    },
    c3_cy_a6_b: {
      id: 'c3_cy_a6_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '有人在街对面的窗口收衣服，收完顺手把窗子关上。'
        + '雷姐把门口的塑料帘子拉下来一半，狗从帘子底下钻出来，跟了你们三步，又自己回去了。',
      next: 'c3_cy_b6_b'
    },
    c3_cy_b1: {
      id: 'c3_cy_b1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '女人问她要几条鱼干，她答四条；问她鸡蛋要不要挑，她答不挑，按价。问到第三遍，女人把秤盘一推，'
        + '「你这孩子，问一句答一句，是机器啊？」',
      next: 'c3_cy_b2'
    },
    c3_cy_b2: {
      id: 'c3_cy_b2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'vera',
      text: "薇拉停了半秒。「不是。」她说，「抱歉。我头一次自己买鱼干。讲价一般从多少开始合适？」她把清单举起来，像是要把这句话补上一个依据，举到一半又放下去。",
      next: 'c3_cy_b3'
    },
    c3_cy_b3: {
      id: 'c3_cy_b3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "女人看了她一会儿，把秤盘上的鱼干重新数了一遍，多给了一条。「下次想买多少，直接跟我说。」她说，「带钱来就行。」她把袋口扎紧，往柜台边一推：“拎这里，底下沾了水。”",
      next: 'c3_cy_b4'
    },
    c3_cy_b4: {
      id: 'c3_cy_b4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '出门以后，薇拉把多出来的那条鱼干翻过来看了看，标签上写着这家店的地址和一个手写的日期。'
        + '「她多给了一条。」她说，'
        + '「我不知道为什么。但我记下来了——我以为她会因为第三条把我赶出去。」',
      next: 'c3_cy_b5'
    },
    c3_cy_b5: {
      id: 'c3_cy_b5',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '「她不赶你，是因为你没有跟她绕。」你说，'
        + '「这条街上的人不喜欢绕。」',
      next: 'c3_cy_b6'
    },
    c3_cy_b6: {
      id: 'c3_cy_b6',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '鱼干在纸袋里戳出两个尖角，往你手心上蹭。你们往回走的时候，薇拉的步子和来的时候不一样了——她在数店铺，数到第七家的时候自己停下来了。',
      next: 'c3_cy_c4_b'
    },
    c3_cy_b6_b: {
      id: 'c3_cy_b6_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '走到第二个路口，她把清单翻过来，在最下面自己添了一行：'
        + '下次带空袋子。'
        + '添完她把清单折起来，折痕对得很齐。',
      next: 'c3_cy09'
    },
    c3_cy_c1: {
      id: 'c3_cy_c1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '第二家铺子的门口堆着空桶，柜台后面的男人正往一个旧线圈上缠胶布。'
        + '你没提清单，先说自己是来找泵的——那男人立刻把手上的活儿停了半拍，问你们船上有没有会看电容的。',
      next: 'c3_cy_c2'
    },
    c3_cy_c2: {
      id: 'c3_cy_c2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉把两只袋子放在门外，进去帮他把线圈翻了个面。她没有解释自己会什么，只报了一句：'
        + '「线头烧在第三圈，绕回来的时候要换向。」'
        + '那男人看了她三秒，把改锥递了过去。',
      next: 'c3_cy_c3'
    },
    c3_cy_c3: {
      id: 'c3_cy_c3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '线圈绕完，薇拉把手在裤子上擦干，回头找你。'
        + '「菜他按平时的价钱卖，比隔壁便宜。」她顿了顿，'
        + '「我用了工作里的做法。下一次我想先问一句，再动手。」',
      next: 'c3_cy_c4'
    },
    c3_cy_c4: {
      id: 'c3_cy_c4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她把袋子分开：菜她拎，鱼干你拎，鸡蛋在她怀里兜着，走路的时候两只胳膊收得很紧。',
      next: 'c3_cy_c4_b'
    },
    c3_cy_c4_b: {
      id: 'c3_cy_c4_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '第二家铺子门口的空桶里积了半桶雨水，水面上浮着一只塑料盖。'
        + '你们走过的时候，那个男人在后面喊了一声，说下午要是还下雨，让他们把桶收进屋。',
      next: 'c3_cy09'
    },

    c3_cy09: {
      id: 'c3_cy09',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '「这台泵是从北边矿站退下来的，退役单还没销。」他把旧线圈挑出来给你看，铜线上烧穿的洞比指甲盖大，'
        + '「矿站那边压着两台新泵，报关单卡在联合的物资处。澜港这户人家急着用水，就先把旧的买回来用。你说这算什么账。」',
      next: 'c3_cy10'
    },
    c3_cy10: {
      id: 'c3_cy10',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉蹲下来，把那台泵的铭牌和旧线圈的编号抄进自己的小本子。'
        + '她没有提问，抄完以后把本子翻给你看了一眼：两个编号，一个是泵的，一个是矿站退役单上的。两个号差一位数。',
      next: 'c3_cy11'
    },
    c3_cy11: {
      id: 'c3_cy11',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '铎兰把新绕好的线圈装回去，通电，泵吭哧了两声，把水打上来。'
        + '他甩了甩铜手指上的水，'
        + '「行了。栈房的人要是问是谁修的，你就说机库那个姓阿吉斯的。」'
        + '他压低声音补了一句：'
        + '「顺带替我留个话，一〇七和一一二两台泵的报关卡住了，让能说话的人去说。」',
      next: 'c3_cy12'
    },
    c3_cy12: {
      id: 'c3_cy12',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "「留话的对象是谁。」薇拉问。铎兰没有立刻答，先把工具一件一件收回包里，收完了才说：「这条街上会接话的人。话留在栈房，他们会沿自己的线传出去。」",
      next: 'c3_cy13_b'
    },


    // ══ 第四节拍：找到真正的薇拉·厄兰的旧同伴（city / duty） ═══════════════════
    c3_cy14: {
      id: 'c3_cy14',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '港区民政所开在码头后面的老楼里，门口挂着褪色的牌子，牌子上写着户籍、婚姻、死亡登记三个窗口。'
        + '第三个窗口今天只开半天，窗台上的号牌排到了四十一，现叫到九。',
      next: 'c3_cy15'
    },
    c3_cy13_b: {
      id: 'c3_cy13_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「调档的手续我先问一遍。」诺瓦把观测板翻开，'
        + '「民政所的旧档分三档：公开的，凭船号就能看；限船级的，要船长签字；封存的，要安全处的批条。」'
        + '她停了一下，'
        + '「六年前那次失踪的卷宗归在第二档。也就是说，我们这边签个字就能看。」',
      next: 'c3_cy14'
    },
    c3_cy15: {
      id: 'c3_cy15',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '诺瓦在楼梯口等你们，观测板夹在腋下。'
        + '「我提前查了。」她说，'
        + '「六年前霜环外环那次失踪，报到这里备案的有十一条。其中一条，姓名栏写着薇拉·厄兰，年龄二十四，职务是码头军需栈房的资料员。」',
      next: 'c3_cy16'
    },
    c3_cy16: {
      id: 'c3_cy16',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "「查一〇七号矿站那份报关单时翻到的。」诺瓦扣上观测板，「检索来源我会照实写，免得他们以为我另外开了她的调查。」",
      next: 'c3_cy17'
    },
    c3_cy17: {
      id: 'c3_cy17',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '军需栈房在港区最里面，一扇铁门，一只猫，一排挂在外墙上的旧缆绳。'
        + '看门的人姓石，六十出头，左手少了半根小指。你们进去的时候他正在把一卷缆绳按号分成三堆，分得很慢，但没有一根是错的。',
      next: 'c3_cy18'
    },
    c3_cy18: {
      id: 'c3_cy18',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "石师傅抬眼看了看薇拉，手里那根正拆股的缆绳停了一下。待他低下头，拇指又沿着原来的绳股慢慢分开。",
      next: 'c3_cy19'
    },
    c3_cy19: {
      id: 'c3_cy19',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '「军需栈房六年前归外环管。」他说，声音干，'
        + '「你们要查的是哪一条。」'
        + '他把缆绳放下，两只手垂在身侧，右手的小指在裤缝上按住了一个位置，像按住一张纸。',
      next: 'c3_choice_veteran'
    },
    c3_choice_veteran: {
      id: 'c3_choice_veteran',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '栈房的铁门半开着，外面的雨打在缆绳上，一线一线往下淌。薇拉站在你左后方，手在袖口里。',
      choices: [
        {
          id: 'c3_vt_front',
          label: '正面说明来意：把薇拉的名字、编号和那份旧机组名单都摆到桌上。',
          next: 'c3_cy_d1',
          reaction: '你说完，石师傅看了薇拉很久。他没有问她是谁，只问了一句：这姑娘自己知道多少。',
          effects: [
            { type: 'flag', key: 'c3_vt_front', value: true },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        },
        {
          id: 'c3_vt_ask',
          label: '先说报关单：用两台泵的单号开口，让他自己决定要不要谈到人。',
          next: 'c3_cy_e1',
          reaction: '石师傅把缆绳重新分成三堆，分完第一堆的时候才开口：单号他能查，人名他也能查，前一个不用问安全处，后一个要。',
          effects: [
            { type: 'flag', key: 'c3_vt_ask', value: true },
            { type: 'standing', who: 'scarlet', amount: 1 }
          ]
        },
        {
          id: 'c3_vt_step',
          label: '让她自己问。你退到门口，把这一刻交给她。',
          next: 'c3_cy_f1',
          reaction: "薇拉往前走了半步，站到缆绳堆前面。她看着石师傅，三秒后才开口。你站在她身侧，等她把话说完。",
          effects: [
            { type: 'flag', key: 'c3_vt_step', value: true },
            { type: 'trust', who: 'vera', amount: 2 }
          ]
        }
      ]
    },
    c3_cy_d1: {
      id: 'c3_cy_d1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '你把名字说了出来：薇拉·厄兰，编号 AU-11。'
        + '说完你才发现，栈房里安静得能听见外面的雨从缆绳上滴到水泥地的声音。',
      next: 'c3_cy_d2'
    },
    c3_cy_d2: {
      id: 'c3_cy_d2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '石师傅转身进了里屋。抽屉拉了一下，很涩，第二次才拉开。'
        + '他拿出一只铁皮盒子，盒子上的漆掉得只剩一个角，打开来是一叠用皮筋捆着的旧纸和一张硬卡。',
      next: 'c3_cy_d2_b'
    },
    c3_cy_d2_b: {
      id: 'c3_cy_d2_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '里屋很小，墙上钉着两层木架，架子上是缆绳的样品和旧账本。'
        + '窗台上放着一只没盖的搪瓷缸，缸底结着一圈茶渍。'
        + '铁皮柜的抽屉拉开时发出很涩的声音，柜子里除了文件和图纸，还塞着一把已经不能用的量规。',
      next: 'c3_cy_d3'
    },
    c3_cy_d3: {
      id: 'c3_cy_d3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '「她是我的领航。」他说，'
        + '「六年前出事那天，我在地面。船回来的时候，带回来的是这个名字，和一个装不进棺材的重量。」'
        + '他把那张硬卡推过柜台。卡片上是一个年轻女人，穿着联合作训飞行服，左肩的名字条整整齐齐。',
      next: 'c3_cy_d4'
    },
    c3_cy_d4: {
      id: 'c3_cy_d4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '照片上的人黑短发，发梢参差，左颊旁留着一绺没剪掉的长发。灰绿色的眼睛，左眼瞳孔外缘有一圈更深的环。'
        + '这张脸和站在柜台前的这张脸一模一样，连脖子右边那颗很小的痣都在同一个位置。',
      next: 'c3_cy_d5'
    },
    c3_cy_d5: {
      id: 'c3_cy_d5',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把卡片拿起来，两只手托着，像托一件随时会被风吹走的纸。'
        + '「这不是我。」她说，'
        + '「我没有见过这个人。我见过这张脸——每天在镜子里。我没有见过她。」',
      next: 'c3_cy_d6'
    },
    c3_cy_d6: {
      id: 'c3_cy_d6',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '铁皮盒子里还有一份复印件，纸已经发脆。死亡登记表，编号一栏写着：霜环外环，失踪，认定死亡，姓名薇拉·厄兰，年龄二十四。'
        + '认定日期是六年前十一月九日。',
      next: 'c3_cy_d7'
    },
    c3_cy_d7: {
      id: 'c3_cy_d7',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "石师傅从盒底摸出一只用塑封袋装着的小东西。一只机械秒表，表盘上停着 00:00，表壳右侧刻着她名字的缩写。「从救生艇里捞出来的。」他说，「捞到的是一艘空艇。这表当时就停了，我一直留着，想着她回来以后亲手还给她。」",
      next: 'c3_cy_d8'
    },
    c3_cy_d8: {
      id: 'c3_cy_d8',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉从颈绳上把那只停着的秒表解下来，放在柜台上，和塑封袋里那只并排。'
        + '两只表一模一样，唯一的区别是刻字：袋子里那只刻着缩写，她脖子上这只什么都没刻。',
      next: 'c3_cy_d9'
    },
    c3_cy_d9: {
      id: 'c3_cy_d9',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'vera_knows_fake_id', value: true }],
      text: "两只表并排搁在柜台上，表盘映着门口阴白的天光。雨声从门口传进来，石师傅的手在裤缝上按着，指关节发白。薇拉站在那里，眼睛一直看着那张硬卡，一眨不眨。",
      next: 'c3_cy10a'
    },
    c3_cy_e1: {
      id: 'c3_cy_e1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你把两台泵的单号写在栈房的旧报纸边上：一〇七和一一二，退役单和报关单差一位数。'
        + '石师傅看了两张报纸角，把它们对在一起，指头压在缝上。',
      next: 'c3_cy_e2'
    },
    c3_cy_e2: {
      id: 'c3_cy_e2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '「报关单我明天就能让人去问。」他说，'
        + '「你说的这个姑娘，我拿不准要不要说。」'
        + '他把报纸折起来，折得很整齐，'
        + '「因为我认识一个跟她一样的人，六年前死了。」',
      next: 'c3_cy_e3'
    },
    c3_cy_e3: {
      id: 'c3_cy_e3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '他进里屋拿了一只铁皮盒子出来。抽屉拉了两下才开，皮筋捆着的旧纸，一张硬卡。'
        + '卡片上的人黑短发、发梢参差，左颊旁留着一绺长发，灰绿色的眼睛，左眼瞳孔外缘有一圈更深的环。',
      next: 'c3_cy_e4'
    },
    c3_cy_e4: {
      id: 'c3_cy_e4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '你和那张卡片之间隔着两米，和站在卡片前面的活人之间隔着半步。'
        + '两米是一个人能看清五官的距离，半步是一个人不需要看清的距离。'
        + '薇拉没有动。她的手指在袖口里蜷起来，白胶布在灯下亮了一线。',
      next: 'c3_cy_e5'
    },
    c3_cy_e5: {
      id: 'c3_cy_e5',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '「那张卡上的人，什么时候死的。」她问。'
        + '石师傅报了一个日期，六年前的十一月九日。'
        + '薇拉把这两个数字念了一遍，很轻，像在记一个坐标。',
      next: 'c3_cy_e6'
    },
    c3_cy_e6: {
      id: 'c3_cy_e6',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '盒子里还有一只塑封袋装着的机械秒表，表盘停在 00:00，表壳上刻着缩写。'
        + '薇拉把颈绳上那只解下来，放在旁边。两只表一模一样，只有刻字不同——一只有，一只没有。',
      next: 'c3_cy_e7'
    },
    c3_cy_e7: {
      id: 'c3_cy_e7',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'vera_knows_fake_id', value: true }],
      text: '石师傅把报关单那两张报纸角收进抽屉，又停了一下，把盒子里那份死亡登记复印件推到柜台边上。'
        + '「复印件给你。」他说，'
        + '「原件不能出门。她要是问我是谁，你就说，是小石。」',
      next: 'c3_cy10a'
    },
    c3_cy_f1: {
      id: 'c3_cy_f1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "「我想查一个人的记录。」薇拉说，「薇拉·厄兰。二十四岁，六年前在霜环外环失踪。我想查她当年的编号。我现在用的是 AU-11，属于另一份档案。」她说完，自己把手抬起来，又放下，等着对方的回答。",
      next: 'c3_cy_f2'
    },
    c3_cy_f2: {
      id: 'c3_cy_f2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '石师傅看了她很久。铁皮盒子拿出来的时候，他的手在盒盖上停了一下，像是在决定要不要打开。'
        + '盒子打开，里面是一张硬卡、一叠旧纸，和一只塑封袋。',
      next: 'c3_cy_f3'
    },
    c3_cy_f3: {
      id: 'c3_cy_f3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '硬卡上是黑短发、发梢参差、左颊旁一绺长发的年轻女人，灰绿色眼睛，左眼瞳孔外缘一圈更深的环。'
        + '死亡登记复印件上写着：霜环外环，失踪，认定死亡，认定日期六年前十一月九日，年龄二十四。',
      next: 'c3_cy_f4'
    },
    c3_cy_f4: {
      id: 'c3_cy_f4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "薇拉把两只手放在柜台边上，很稳。「她的表在我身上。」她说，「我的报到文件里写着这个名字。我想查清这个名字原来的主人。她的事，请您告诉我。」",
      next: 'c3_cy_f5'
    },
    c3_cy_f5: {
      id: 'c3_cy_f5',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '石师傅把塑封袋推到她面前。袋子里的机械秒表停在 00:00，表壳上刻着缩写。'
        + '薇拉把颈绳上那只解下来，并排放在旁边。两只表完全一样，只有刻字不同。',
      next: 'c3_cy_f6'
    },
    c3_cy_f6: {
      id: 'c3_cy_f6',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [{ type: 'flag', key: 'vera_knows_fake_id', value: true }],
      text: '「她是我的领航。」石师傅说，'
        + '「你脖子上的表，是她出事那天带着的那只。你报的名字，是她留在登记表上的那个名字。别的我不知道。」'
        + '他把死亡登记复印件对折，推过柜台。',
      next: 'c3_cy10a'
    },
    c3_cy10a: {
      id: 'c3_cy10a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '雨小了。'
        + '薇拉把复印件收进救生背心内袋，把两只秒表都放进同一个袋子，袋子口折了三折，按在胸口，按了很久。'
        + '她没有哭，也没有再问。走出去的时候她在门槛上停了一下，把鞋底的水蹭干净才踏上街。',
      next: 'c3_cy11a'
    },
    c3_cy11a: {
      id: 'c3_cy11a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "诺瓦在街对面等着，观测板夹在腋下，没有翻开。「谈完了？」她说，「我这边记了一项，来源是登记表：军需栈房旧员工石某，确认六年前有一条失踪认定。」她看了薇拉一眼，「这一句我写不确定。原因是薇拉·厄兰。」",
      next: 'c3_cy12a'
    },
    c3_cy12a: {
      id: 'c3_cy12a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉对诺瓦点了下头。'
        + '「不确定是对的。」她说，'
        + '「我也写不确定。」',
      next: 'c3_cy13a'
    },
    c3_cy13a: {
      id: 'c3_cy13a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '看门那只猫从栈房的墙头上跳下来，落在你们中间，抖了抖身上的水，然后走开。'
        + '街灯一盏一盏亮起来，把港区照成一片湿的橙色。',
      next: 'c3_cy14a'
    },
    c3_cy14a: {
      id: 'c3_cy14a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '出港区的路上，灰鸢的挂架修好了，新换的销子比原来的粗一档。'
        + '十八号栈房后面那台泵在打水，水声很响，泵壳上还留着刚才那只手按出来的掌印。',
      next: 'c3_cy15a'
    },

    // ══ 第五节拍：天气转坏的通报（city → 岔路，duty） ══════════════════════════
    c3_cy15a: {
      id: 'c3_cy15a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '港区广播：风暴带自东向西经过澜湾，预计后天傍晚进湾，海面风力升到九级，锚点浮标进入维护状态。'
        + '广播停了一下，又补一句：作业窗口只留到风暴进湾之前，夜航船一律推迟出港。',
      next: 'c3_cy16a'
    },
    c3_cy16a: {
      id: 'c3_cy16a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '从今晚算起，到风暴进湾还有两天。够在港区把该核的字核完，再把台地那一趟走掉。'
        + '那几座基站里有一座还挂着备用电源，里面的记录仪时间戳，是核对死航线第二段锚链的最后一个办法——以前是最后一个，现在只剩这一趟。',
      next: 'c3_cy17a'
    },
    c3_cy17a: {
      id: 'c3_cy17a',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '伊芙娜在栈房门口等你们，手里拿着一份港区地图，地图上圈了三个点。'
        + '「台地那条路我走过一次，来回四个小时。」她说，'
        + '「今晚回船，天亮以后上坡；你要决定先去哪儿——东岬海堤有一条旧路可以绕，路上要停一次；不去，就直接上坡。」',
      next: 'c3_choice_detour'
    },
    c3_choice_detour: {
      id: 'c3_choice_detour',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '地图上，东岬那条线用铅笔画得很轻，台地那条线是印上去的。两条线在坡底的旧堤口汇合。',
      choices: [
        {
          id: 'c3_dt_coast',
          label: '走东岬：绕一段海堤，把话说完，再上坡。',
          next: 'c3_co01',
          reaction: '伊芙娜把地图折起来收进口袋。她说东岬那段路她一个人走，让你和薇拉先走，说到堤口再合。',
          effects: [
            { type: 'flag', key: 'c3_dt_coast', value: true }
          ]
        },
        {
          id: 'c3_dt_direct',
          label: '直接上坡：把七个小时全留给台地，海堤以后再说。',
          next: 'c3_dt_d1',
          reaction: '伊芙娜在台地那条线上按了一下，把折痕压平。她说那就没有以后了——风暴过去台地的路基会断一半，这条路只走这一趟。',
          effects: [
            { type: 'flag', key: 'c3_dt_direct', value: true }
          ]
        }
      ]
    },
    c3_dt_d1: {
      id: 'c3_dt_d1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "「那就走印的这条。」伊芙娜说，「今晚回船，天亮出发。薇拉跟我一台车，你和诺瓦一台。上去以后，电台只用短报，别提名字，提编号。」她把车钥匙扔给你，「路上有七个小时。你们要聊什么，可以趁这段路聊聊。下坡就要开始忙了。」",
      next: 'c3_sf01'
    },

    // ══ 第六节拍：东岬海堤，退路（coast / off_duty） ═══════════════════════════
    c3_co01: {
      id: 'c3_co01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '东岬的海堤是旧的，堤面上铺着一层被海风吹糙的石板，缝里长出贴地的草。'
        + '太阳压在堤口的海面上，把石板照成暖褐色；远处澜港的灯一盏一盏亮起来，像一条贴在水上的白线。'
        + '出海一天的渔船正排着队往湾里走，桅顶的绿灯一盏接一盏。',
      next: 'c3_co02'
    },
    c3_co02: {
      id: 'c3_co02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '伊芙娜把改装车停在堤口的检修道上，从后座拿出两个保温壶，一个给你，一个自己留着。'
        + '她拧开盖子，里面的汤还烫，味道很淡，是船上那种淡。',
      next: 'c3_co03'
    },
    c3_co03: {
      id: 'c3_co03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: "「从这里到堤口，一千二百米。」她说，「你走前面，我和她走后面。我陪她慢慢走，你到堤口等我们。」她喝了一口汤，「这条堤我六年前来过一次，那次是来接人，没接到。」",
      next: 'c3_co04'
    },
    c3_co04: {
      id: 'c3_co04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '你走在前面。身后的脚步一前一后，都不快。'
        + '海风把薇拉背心上的旧姓名条吹起来，又拍回去。她的影子长一截短一截，跟着堤面上的石板缝一起走。',
      next: 'c3_co04_b'
    },
    c3_co04_b: {
      id: 'c3_co04_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '堤下面的水很清，退潮时留下的水洼里能看见石头和一只慢慢移动的蟹。'
        + '薇拉在水洼边停了一步，看了两秒，然后跟上来，什么都没有说。',
      next: 'c3_co05'
    },
    c3_co05: {
      id: 'c3_co05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '「今天那份复印件，我看到了。」伊芙娜说。'
        + '「你收在背心内袋里，右边那一格，鼓出来一块。」'
        + '她走到堤边，把手里的保温壶放在石台上，'
        + '「我不问里面写了什么。我问你一句：你现在想怎么用它。」',
      next: 'c3_co06'
    },
    c3_co06: {
      id: 'c3_co06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「交上去。」薇拉说，'
        + '「交给谁我不确定。基廷要核对档案，复印件就是核对结果。交上去，我这个人就没有名字了，档案上会写待核。」',
      next: 'c3_co07'
    },
    c3_co07: {
      id: 'c3_co07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'ivna',
      text: "「不交，也不会有名字。」伊芙娜把外套下摆掀起来一点，又放下。「我锁骨底下那块板子是打进去的，编号 XR-03。有人在文件上替我把那三个数字划掉过——换了一份空白身份，他们就更方便给我安排任务。」",
      next: 'c3_co08'
    },
    c3_co08: {
      id: 'c3_co08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: "「所以这条路我走过。」她说，「有三个地方可以去。我把情况告诉你，你想好了再答。」她伸出手指，一根一根数：「一，联合的档案室。当面核对，人在编制里，代价是从此每次出港都要签一份身份确认表。」",
      next: 'c3_co09'
    },
    c3_co09: {
      id: 'c3_co09',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '「二，外环的矿站。赤垣在澜港有一条接应线，头一句话是问货价。去了就没有编号，也没有担保人。三，第三边，灰塔。他们给条款，条款写在纸上，纸是有价的。」'
        + '她把第三根手指收回去，'
        + '「还有第四个地方，不算地方：留在船上。这个我最后再说。」',
      next: 'c3_co10'
    },
    c3_co10: {
      id: 'c3_co10',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉看着堤下的水。'
        + '「四个地方我都记着。」她说，'
        + '「我不会现在选。我不能凭一句话判断哪个地方更好。我需要知道每个地方要我做什么、给我什么、什么时候能走。」',
      next: 'c3_co11'
    },
    c3_co11: {
      id: 'c3_co11',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '「可以。」伊芙娜说，'
        + '「这句话我等了一路。你要是刚才立刻点头，我反而要拦你。」'
        + '她弯腰把保温壶收起来，'
        + '「条件我给你记着：你要能拿到每一份条款的原文，一个字都不能是我或他复述的。」',
      next: 'c3_co11_b'
    },
    c3_co11_b: {
      id: 'c3_co11_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '堤上起了风，风里有一点咸味。'
        + '远处的港区开始亮灯，一盏一盏连着亮，亮到最靠海的那排就停了——再过去是礁石，没有灯。',
      next: 'c3_co12'
    },
    c3_co12: {
      id: 'c3_co12',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「记下了。」薇拉说。'
        + '她顿了一下，忽然问：'
        + '「你刚才说，你六年前来过这条堤，是来接人的。那个人接回去了吗。」',
      next: 'c3_co12_b'
    },
    c3_co12_b: {
      id: 'c3_co12_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '堤上有一只翻过来的小木船，船底积着清水。'
        + '伊芙娜把保温壶放在船帮上，看了看远处那条正在往港区走的渔船。'
        + '那条船的桅顶挂着一盏绿灯，灯随着浪一起一落，像是有人在很远的地方点头。',
      next: 'c3_co15'
    },


    c3_co15: {
      id: 'c3_co15',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'coast',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '回到堤口的时候，天边那块乌云压得更低。伊芙娜把车钥匙插进锁孔，'
        + '看了一眼后座上的两个空保温壶，说下回带一个就够了。',
      next: 'c3_sf01'
    },

    // ══ 第七节拍：台地，关系落点（surface / off_duty） ══════════════════════════
    c3_sf01: {
      id: 'c3_sf01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '台地的路是压出来的，压在层状的岩面上，一路往上盘。'
        + '上午的硬光斜着打在岩脊上，云影从上面跑过，跑得比车快；路边贴地的草一丛一丛，踩上去会发出干脆的响。',
      next: 'c3_sf01_b'
    },
    c3_sf01_b: {
      id: 'c3_sf01_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '车往上盘的时候，窗外的港区一段一段缩小。'
        + '开到第一个回头弯，能看见渡鸦号停在下面：四百二十米长的旧船，海军蓝的装甲板，船头那截阶梯一样的方头，三条侧面开口里有一条开着，机库的灯亮着。',
      next: 'c3_sf02'
    },
    c3_sf02: {
      id: 'c3_sf02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '旧基站在台地北侧，三座混凝土壳子半埋在岩里，屋顶上的天线歪了一根。'
        + '其中一座还挂着备用电源，指示灯每隔四秒亮一次，亮的时候能听见壳子里有很轻的电流声。',
      next: 'c3_sf03'
    },
    c3_sf03: {
      id: 'c3_sf03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '诺瓦把观察台架起来，接了三条线。'
        + '「记录仪还活着，时间戳准。」她说，'
        + '「死航线第二段锚链的过点时间可以对上——对上以后，我们能算出一个偏移量，知道那段锚链被改写的时候用的是哪套口令。」',
      next: 'c3_sf04'
    },
    c3_sf04: {
      id: 'c3_sf04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '伊芙娜留在坡下守车，电台只留短报。'
        + '「二十分钟。」她说，'
        + '「二十分钟对不上就把东西拆回去，风暴上来之前路基要封。」'
        + '她说完把车开到坡脚最平的一块岩面上，熄了火。',
      next: 'c3_sf05'
    },
    c3_sf05: {
      id: 'c3_sf05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '记录仪吐出来的纸带上，第二段锚链的过点时间比联合给的预测早了四分十一秒。'
        + '诺瓦把纸带按在岩面上，用一支铅笔沿着两行数字画了一条线。线的两头对不上，中间空出来一小段。',
      next: 'c3_sf05_b'
    },
    c3_sf05_b: {
      id: 'c3_sf05_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '基站里积着一层细沙，门框上有一道被风磨出来的浅槽。'
        + '墙上还留着手写的值班表，最后一格的日期停在六年前，字迹被太阳晒得发白。'
        + '记录仪在墙角，外壳上的漆成片地起皮，指示灯亮的时候能把它照出一点颜色。',
      next: 'c3_sf06'
    },
    c3_sf06: {
      id: 'c3_sf06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "「四分十一秒，正好对上那次修改。」她说，「有人在我们过点之前，先把那座浮标的编号改过一次。改的人在台地这边的基站里留过一串校验码——基站记录仪记下来了，因为它不认识那串码，就把它当异常存了六年。」",
      next: 'c3_sf07'
    },
    c3_sf07: {
      id: 'c3_sf07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「把校验码抄下来，原件留着。」',
      next: 'c3_sf08'
    },
    c3_sf08: {
      id: 'c3_sf08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      onEnter: [{ type: 'flag', key: 'anchor_key_fragment_2', value: true }],
      text: "「抄完了。」诺瓦把校验码写在纸带背面，写了四行。她写完没有立刻收笔，在最后一行的下面留着一段空白，然后在那段空白里写了一个词：不确定。「这行留给后面核对的人。」她说，「操作人还没查到，但人为修改的证据在这里。两件事得写清楚。」",
      next: 'c3_sf09'
    },
    c3_sf09: {
      id: 'c3_sf09',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '基站壳子里那盏指示灯第四次亮起来。'
        + '诺瓦把外部记录接口从基站的维护口上拆下来，螺丝收紧，盖板归位，地上的线一根一根卷好。'
        + '她做完这些才说：'
        + '「她今天在栈房里没有哭。我写报告的时候，这一栏我不知道该写什么。」',
      next: 'c3_sf09_b'
    },
    c3_sf09_b: {
      id: 'c3_sf09_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '基站还留着一组旧的电量记录：六年前十一月八日夜里到九日凌晨，主电源连着断了四次。'
        + '记录纸的边缘被水泡过，最后一行只剩一半：二十三时四十七分，外部请求接入，来源未登记。'
        + '诺瓦把这一行抄下来，在旁边注了一个问号。',
      next: 'c3_sf10'
    },
    c3_sf10: {
      id: 'c3_sf10',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「那就不写。」',
      next: 'c3_sf11'
    },
    c3_sf11: {
      id: 'c3_sf11',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "「报告的空白栏会被退回来，要求补读数。」诺瓦合上观测板，「写『不确定』才能把这个问题保留下来，等后面查。」她又看你一眼，「今天这段谈话就到这里吧。我还想少写一份接触说明。」",
      next: 'c3_sf12'
    },
    c3_sf12: {
      id: 'c3_sf12',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "风把纸带的尾巴吹起来，诺瓦用记录仪压住它，又从背包里拿出三块压缩饼和两个水袋。「船上的饭点我们赶不上。」她说，「饼还热，趁早吃。」饼很咸，你咽了两口，就拧开水袋喝水。三个人在基站背风的一侧坐着，把最后一块掰成了三份。",
      next: 'c3_sf13'
    },
    c3_sf13: {
      id: 'c3_sf13',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉把分给她的那一份吃完了，包括碎在包装纸角里的渣。'
        + '「我在船上吃过一次这种饼。」她说，'
        + '「那天是检修，铎兰把饼泡在汤里。他泡的那一份比我泡的软。我按同样的时间泡的，还是硬的。」',
      next: 'c3_sf13_b'
    },
    c3_sf13_b: {
      id: 'c3_sf13_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '基站背风的那一侧有一块平一点的岩面，坐上去正好能挡住风。'
        + '台地下面是一整片海，云影一块一块地在上面走。'
        + '风里没有机械的味道，只有草被晒过以后那种干的味道。',
      next: 'c3_sf14'
    },
    c3_sf14: {
      id: 'c3_sf14',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '诺瓦笑了一声，笑得有点突然，自己先愣了一下。'
        + '「因为他泡的时候在跟人吵架，忘了时间。」她说，'
        + '「你下次也找个人吵一架，饼就软了。」',
      next: 'c3_sf15'
    },
    c3_sf15: {
      id: 'c3_sf15',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '诺瓦去拆观察台的时候，薇拉留在基站背风的那一侧没有动。'
        + '她把纸袋折成方形，压在一块小石头下面，然后看向台地外面那片海。'
        + '云影从她脸上掠过去，又回来。',
      next: 'c3_sf16'
    },
    c3_sf16: {
      id: 'c3_sf16',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "「有件事想问你。」她说，「等任务结束，你最想做什么？」",
      next: 'c3_choice_plateau'
    },
    c3_choice_plateau: {
      id: 'c3_choice_plateau',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她没有看你手里的水袋，也没有看观察台，只看着你。台地下面，伊芙娜的车灯亮了一下，又灭下去，是短报收到。',
      choices: [
        {
          id: 'c3_pl_ship',
          label: '「我要这艘船完整地飞出去。船在，人才有地方站。」',
          next: 'c3_sf_a1',
          reaction: '她说记下来了，然后追问了半句：船完整以后呢。你没有立刻答上来，她没有催，等你把水袋拧上盖子才继续。',
          effects: [
            { type: 'flag', key: 'c3_pl_ship', value: true },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        },
        {
          id: 'c3_pl_truth',
          label: '「我要那条航线明天还亮着。谁的名字写在上面无所谓，灯不能灭。」',
          next: 'c3_sf_b1',
          reaction: "她慢慢点头，往远处的浮标看了一眼。以前听到的都是争夺航道的命令，这次有人惦记着航路上的灯。她把这句话记了下来。",
          effects: [
            { type: 'flag', key: 'c3_pl_truth', value: true },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: 1 }
          ]
        },
        {
          id: 'c3_pl_crew',
          label: '「我要船上这四个人以后还能一起吃饭，别的以后再说。」',
          next: 'c3_sf_c1',
          reaction: '她把这个答案重复了一遍，重复的时候把「四个人」念成了「四个」。她说这个人数的算法她第一次用，用得不太熟。',
          effects: [
            { type: 'flag', key: 'c3_pl_crew', value: true },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        }
      ]
    },
    c3_sf_a1: {
      id: 'c3_sf_a1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「船完整以后呢。」她问。'
        + '你想了一会儿，说你还不知道，得看下个月航线能不能通。'
        + '「那就先记着这件事。」她说，'
        + '「下个月有了答案，你告诉我。我会问第二遍。」',
      next: 'c3_sf17'
    },
    c3_sf_b1: {
      id: 'c3_sf_b1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「灯不能灭。」她把这句话跟着念了一遍。'
        + '「这句话我记着。它比船要小一点，比名字要大一点。我可以照着它做事，不用先问一遍对不对。」',
      next: 'c3_sf17'
    },
    c3_sf_c1: {
      id: 'c3_sf_c1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「四个人。」她说，'
        + '「船上一共多少人，我不知道准确数字。四个人我数得出来：你、伊芙娜、铎兰、诺瓦。」'
        + '她停了一下，'
        + '「我在外面。这不影响这句话，我先把这件事记清楚。」',
      next: 'c3_sf17'
    },
    c3_sf17: {
      id: 'c3_sf17',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '「第二个问题。」她说，'
        + '「我这个人是怎么来的。今天以前，我以为只要按手册做，就不会错。今天以后，我手册上第一页写的名字是别人的。」'
        + '她把手伸进背心内袋，摸了那叠折了三折的复印件一下，没有拿出来。',
      next: 'c3_sf18'
    },
    c3_sf18: {
      id: 'c3_sf18',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '「不管那个名字原来是谁的。你在这条船上做的每一件事，是你做的。」',
      next: 'c3_sf19'
    },
    c3_sf19: {
      id: 'c3_sf19',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '她听完没有立刻回话，先把水袋递给你，然后把两只手在膝盖上放平。'
        + '「我不确定这句话能不能当依据。」她说，'
        + '「但我把它记在第一页。第一页原来是名字的位置，现在放着这句话。」',
      next: 'c3_sf20'
    },
    c3_sf20: {
      id: 'c3_sf20',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '坡下传来两声短报：风暴提前了。'
        + '你们把观察台收进车里，回头看了一眼台地北侧的基站——指示灯还在按四秒一次亮，像什么都没发生。',
      next: 'c3_sf20_b'
    },
    c3_sf20_b: {
      id: 'c3_sf20_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'surface',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '收线的时候诺瓦把纸带卷成一卷，塞进筒里，筒口用胶带封了两道。'
        + '薇拉把折叠椅收起来，靠着基站墙站了一会儿。'
        + '台地边上，云从西面压过来，把远处的海面切成明暗两块。',
      next: 'c3_lb01'
    },


    // ══ 第八节拍：台地与港区之间的地面遭遇战（landbattle / combat） ════════════
    c3_lb01: {
      id: 'c3_lb01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'system',
      text: '港务广播：北侧海面出现不明浮体，数量七到九，正在向岸线释放小型无人机。所有港区居民向东侧高处疏散。'
        + '广播重复了第二遍，中间夹着电流声。',
      next: 'c3_lb02'
    },
    c3_lb02: {
      id: 'c3_lb02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '「灰鸢和夜枭从台地直接起，别回港区落地。」伊芙娜已经上了车，'
        + '「母舰在浅海外面，无人机想占台地北侧的三座基站——那是这条路唯一的高点。丢了基站，他们能把整个澜湾的锚点当成中继站。」',
      next: 'c3_lb03'
    },
    c3_lb03: {
      id: 'c3_lb03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: "「交战边界确认。」她报得很快，「港区建筑列入禁射区，目标确认后再开火。追击止于浅海线，外海在母舰火力覆盖下。」她拉上车门，「我在坡下做短波中继。你们的频道我听得到，指挥我不管。」",
      next: 'c3_lb04'
    },
    c3_lb04: {
      id: 'c3_lb04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢从台地北侧的岩面起跳，推进器把碎石往身后扫出一条扇形的印子。'
        + '左肩那块颜色不一样的替换件在硬光下亮了一下。'
        + '夜枭跟在右后方，两片侦测翼半展开，探测臂朝下压着。',
      next: 'c3_lb05'
    },
    c3_lb05: {
      id: 'c3_lb05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「第一组六个，高度一百二，速度七十，从北偏东十七度切入。」薇拉报完参数，'
        + '「它们不往港区飞，全都朝基站。基站外壳是混凝土，它们带的载荷打不穿——它们要的是屋顶上的天线。」',
      next: 'c3_lb06'
    },
    c3_lb06: {
      id: 'c3_lb06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '「先切第一组。你压高度，把它们的航线往东逼；我从北面拦。」',
      next: 'c3_lb07'
    },
    c3_lb07: {
      id: 'c3_lb07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「收到。」夜枭压到一百米以下，贴着岩脊横切过去。'
        + '第一组无人机被迫往东抬，队形拉开成一条斜线。'
        + '灰鸢从斜线的头上切进去，第一台打着旋掉在岩地上，碎片溅出去很远。',
      next: 'c3_lb08'
    },
    c3_lb08: {
      id: 'c3_lb08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '第二组从海面方向冒出来，贴得很低。'
        + '它们擦过防潮堤的顶沿，扬起来的尘土把整条堤面盖住，'
        + '货轨上停着的一节空车厢被掀翻，滚下坡去，砸在礁石上。',
      next: 'c3_lb09'
    },
    c3_lb09: {
      id: 'c3_lb09',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「第二组八个，带的是两段式。」她报得很平，'
        + '「前段打天线，后段打机体关节。它们的引信认金属——别用左臂去接，探测臂会先中。」',
      next: 'c3_choice_firefight'
    },
    c3_choice_firefight: {
      id: 'c3_choice_firefight',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '基站屋顶的天线还剩两根。第二组已经压到坡脚上方六十米，前后分成了两截。',
      choices: [
        {
          id: 'c3_lb_antenna',
          label: '先保基站：把两截都拦在北坡外面，天线一根也不丢。',
          next: 'c3_lb_a1',
          reaction: '夜枭横到北坡正上方，用探测臂的长焦把第二截的引信距离一个一个报出来。灰鸢在岩面上做出两个急转，把两截顶回去。',
          effects: [
            { type: 'flag', key: 'c3_lb_antenna', value: true },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c3_lb_harbor',
          label: '先保港区：放基站天线，把无人机群引到空滩上再打。',
          next: 'c3_lb_b1',
          reaction: '你把战线往东拉，让天线挨了第一轮。基站屋顶冒起一股白烟，港区那边的疏散车队正好从堤口过去，一辆都没停。',
          effects: [
            { type: 'flag', key: 'c3_lb_harbor', value: true },
            { type: 'standing', who: 'scarlet', amount: 1 }
          ]
        },
        {
          id: 'c3_lb_split',
          label: '两台分头：你去港区上空，夜枭守基站。',
          next: 'c3_lb_c1',
          reaction: '「收到。」薇拉没有多问，掉头回到基站上方。她一个人拦一整个组，用探测臂报三遍引信距离，第三遍的时候声音有点变。',
          effects: [
            { type: 'flag', key: 'c3_lb_split', value: true },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'ivna', amount: -1 }
          ]
        }
      ]
    },
    c3_lb_a1: {
      id: 'c3_lb_a1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '第一截在两座基站之间被打散，第二截被逼到岩脊背面。'
        + '灰鸢的左肩被一块碎片擦过，替换件上多了一道新印子，没裂。'
        + '基站屋顶的两根天线都还在，指示灯照旧四秒一次亮。',
      next: 'c3_lb10'
    },
    c3_lb_b1: {
      id: 'c3_lb_b1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '天线被打掉一根，基站屋顶冒出一股白烟，很快被风扯散。'
        + '你把整群无人机引到空滩上，在湿沙上把它们一架一架打掉，'
        + '被打穿的机体落进浅水，冒起来的水柱一排一排。',
      next: 'c3_lb10'
    },
    c3_lb_c1: {
      id: 'c3_lb_c1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢赶到港区上空的时候，第二组已经分成了三段，一段扑天线，一段扑码头，一段在低空绕圈找目标。'
        + '你把扑码头的那一段拦住，拦下来的代价是港区的装卸轨被掀掉两节。'
        + '基站那边的通讯一直没断，探测臂的报数隔几秒就来一次，一次比一次短。',
      next: 'c3_lb10'
    },
    c3_lb10: {
      id: 'c3_lb10',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: "「第三组从海里上来了。」薇拉的声音第一次带上了喘，「九台，从澜湾西侧，贴着水面。它们转向港区了——疏散车队正在那边！」",
      next: 'c3_lb11'
    },
    c3_lb11: {
      id: 'c3_lb11',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '伊芙娜的短波插进来。'
        + '「车队还有八分钟过西侧堤口。」她说，'
        + '「渡鸦号在锚地起不了火，机库那两台是你们。港务能派的是两条渔政艇，火力不够。」',
      next: 'c3_lb12'
    },
    c3_lb12: {
      id: 'c3_lb12',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '「灰鸢下去。夜枭在高处看水线，把浮体位置喂给渔政艇。」',
      next: 'c3_lb13'
    },
    c3_lb13: {
      id: 'c3_lb13',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「收到。」夜枭抬到三百米，探测臂切到红外。'
        + '「浮体七个，水线以下还有两个没露头。第一艘渔政艇右舷七十米有东西在动，别往那边压。」',
      next: 'c3_lb14'
    },
    c3_lb14: {
      id: 'c3_lb14',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢落在西侧堤口外沿的湿沙上，脚下立刻陷进去半米。'
        + '第一台冲上来的无人机被你按在浪线里，第二台的碎片打在你胸口的装甲上。'
        + '堤面上，车队的头灯一串一串地往东移。',
      next: 'c3_lb14_b'
    },
    c3_lb14_b: {
      id: 'c3_lb14_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '落点选在堤口外的湿沙上，灰鸢的脚掌一沉，扬起来的沙和水混成一片。'
        + '第一台无人机从浪线后面冲出来，速度七十，高度不到二十米，直扑车队的尾车。'
        + '你横着撞过去，把它按进浅水；第二台从侧面咬上来，碎片打在胸甲上，声音很闷。',
      next: 'c3_lb15'
    },
    c3_lb15: {
      id: 'c3_lb15',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '「左腿，膝盖外侧，擦伤。」她报的是自己。'
        + '刚才那一轮急横切，夜枭的座舱把手肘护板甩到最外侧，她的膝盖磕在操纵台下面那道横梁上。'
        + '「不影响的。我再说一遍：不影响的。」夜枭的高度没有掉，探测臂也没有停。',
      next: 'c3_lb16'
    },
    c3_lb16: {
      id: 'c3_lb16',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '「车队过堤口了。」伊芙娜报完这一句，'
        + '「灰鸢撤出浪线，夜枭下来接你。剩下残敌交给渔政艇，它们打不动浮体，但能拖住。」',
      next: 'c3_lb17'
    },
    c3_lb17: {
      id: 'c3_lb17',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢从浪线里退出来的时候，右腿的液压响了一声，不重，但听得出来。'
        + '夜枭落下来时没有用右腿承重，先把左机械手撑在堤面上，把右腿慢慢放平。'
        + '它右腿外侧那只接口箱离地只剩一层沙。',
      next: 'c3_lb18'
    },
    c3_lb18: {
      id: 'c3_lb18',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'landbattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「接口箱外壳有划痕，功能正常。」她在座舱里报完，'
        + '「灰鸢右腿液压压力低了百分之十四。我们不能再打一场。」',
      next: 'c3_sb01'
    },

    // ══ 第九节拍：近海海战，掩护撤离（seabattle / combat） ═════════════════════
    c3_sb01: {
      id: 'c3_sb01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'system',
      text: '港务广播：母舰级浮体两艘进入澜湾西口，正在向近海释放大型无人机。渔船与运输船全部撤向东侧水道。'
        + '广播最后的编号念得很快，念完就切成了警报音。',
      next: 'c3_sb02'
    },
    c3_sb02: {
      id: 'c3_sb02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '「撤离船队在澜湾西口，十七条，最大的那条装了四十六个人。」伊芙娜的短波里有浪声，'
        + '「渡鸦号在锚地压着，甲板上的近防炮能盖住水道，但盖不住西口——你们的机体去那里。」',
      next: 'c3_sb03'
    },
    c3_sb03: {
      id: 'c3_sb03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「西口水深二十三米，浮体吃水九米，可以在浅堆上把它们逼住。」薇拉报得很快，'
        + '「风浪九级，掠海高度低于三十米会被浪盖住。我建议我方留一台在高处。」',
      next: 'c3_sb04'
    },
    c3_sb04: {
      id: 'c3_sb04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '「你留高处。灰鸢下去。」',
      next: 'c3_sb05'
    },
    c3_sb05: {
      id: 'c3_sb05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '「等一下。」薇拉第一次没有先说收到。'
        + '「灰鸢的右腿液压低百分之十四，掠海动作里有一段要单腿承重。夜枭的推力小，但我这台的右腿是完好的。」'
        + '她只说到这里，没有替你决定。',
      next: 'c3_sb05_b'
    },
    c3_sb05_b: {
      id: 'c3_sb05_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '渔政两条艇按约定关掉航灯，只留桅顶一盏绿灯。'
        + '它们贴着堤脚往西口走，速度慢，船身被浪推得侧过来，又扶正。'
        + '灰鸢在它们上方五十米处跟着，机体下面的水面被灯光照出一条窄窄的亮线。',
      next: 'c3_choice_sea'
    },
    c3_choice_sea: {
      id: 'c3_choice_sea',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '西口水道上的十七条船已经排成了两列。浪把它们抬起来又放下去，最高的那条船甲板上站满了人。',
      choices: [
        {
          id: 'c3_sea_swap',
          label: '改令：夜枭下去压浮体，灰鸢在高处带船队走。',
          next: 'c3_sb_a1',
          reaction: '「收到。」这一声她答得比刚才快。夜枭掠过你的座舱时把探测臂收得很紧，两片侦测翼完全展开，像把整条水道抬在翅膀底下。',
          effects: [
            { type: 'flag', key: 'c3_sea_swap', value: true },
            { type: 'trust', who: 'vera', amount: 2 }
          ]
        },
        {
          id: 'c3_sea_push',
          label: '按原令执行：灰鸢下去，右腿的账回头再算。',
          next: 'c3_sb_b1',
          reaction: '「收到。」她没有再提这件事，把夜枭抬到四百米，用探测臂把两个浮体的每一次转向都报出来。她的报数很短，短到听不出情绪。',
          effects: [
            { type: 'flag', key: 'c3_sea_push', value: true },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c3_sea_both',
          label: '两台一起下：一台拦浮体，一台贴船队走。',
          next: 'c3_sb_c1',
          reaction: '这个方案把两台机体都放进了浪线里。伊芙娜在短波里沉默了两秒，说知道了，然后让渔政艇把灯火全部关掉。',
          effects: [
            { type: 'flag', key: 'c3_sea_both', value: true },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'ivna', amount: -1 }
          ]
        }
      ]
    },
    c3_sb_a1: {
      id: 'c3_sb_a1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '夜枭冲进西口的时候把第一排浪整个劈开，水从两片翼面上甩出去。'
        + '它用左机械手按住第一艘浮体的试射口，把那个口子压进水里，'
        + '第二艘浮体转舵想走，被灰鸢从高处打掉了转向桨。',
      next: 'c3_sb_a2'
    },
    c3_sb_a2: {
      id: 'c3_sb_a2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '「第一艘不打了。」她在浪声里报，'
        + '「第二艘在往浅堆上靠，它想把自己搁上去——搁上去就还能当一次炮台。我推它出去还是让它搁。」',
      next: 'c3_sb_a3'
    },
    c3_sb_a3: {
      id: 'c3_sb_a3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '「让它搁。搁在浅堆上它自己下不来，我们回头再拆。」',
      next: 'c3_sb_a4'
    },
    c3_sb_a4: {
      id: 'c3_sb_a4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第二艘浮体冲上浅堆，船身歪成三十多度，试射口抬不起来。'
        + '夜枭从它上方退出来，右腿在水面上方两米处转了个身，'
        + '接口箱底部蹭过一块礁石，火星很短，落到水里就没了。',
      next: 'c3_sb06'
    },
    c3_sb_b1: {
      id: 'c3_sb_b1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢压到浪线里，右腿每一次蹬水都比左腿慢半拍。'
        + '第一艘浮体的试射口被你打哑，代价是右腿膝盖的液压管爆开一条缝，橙色的油在水面上散成一片。'
        + '第二艘被你顶出西口，转头往深海里跑。',
      next: 'c3_sb_b2'
    },
    c3_sb_b2: {
      id: 'c3_sb_b2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '「灰鸢右腿液压漏了。」薇拉报的时候没有提高声音，'
        + '「你现在的高度能撑住，但落地的时候右腿会先软。我给你报两个落点：堤口西侧二十米是硬岩，往东四十米是湿沙。湿沙会陷，硬岩会滑。」',
      next: 'c3_sb_b3'
    },
    c3_sb_b3: {
      id: 'c3_sb_b3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: '「湿沙。」',
      next: 'c3_sb_b4'
    },
    c3_sb_b4: {
      id: 'c3_sb_b4',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢落在堤口西侧的湿沙上，右腿陷进去，机身整个往右歪。'
        + '你用左臂撑住地面，把机身扶正，'
        + '浪从背后推上来，埋过膝盖，又退回去。',
      next: 'c3_sb06'
    },
    c3_sb_c1: {
      id: 'c3_sb_c1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '两台机体同时压进浪线。'
        + '灰鸢在第一艘浮体上打开一个口子，夜枭从侧后把第二艘的转向桨打掉。'
        + '离得最近的时候，夜枭的左机械手从灰鸢的肩甲上方擦过去，相隔不到一米。',
      next: 'c3_sb_c2'
    },
    c3_sb_c2: {
      id: 'c3_sb_c2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '「灰鸢右肩上方一米。」她报的是两台机体之间的距离。'
        + '「不用让。我算得准。」'
        + '她把这句说完，探测臂一直跟着你的机背，没有移开。',
      next: 'c3_sb_c3'
    },
    c3_sb_c3: {
      id: 'c3_sb_c3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '两条船队在你们身后一个一个地过西口，最大的那条装了四十六个人，甲板上有人朝机体的方向抬了抬手，没有喊，也听不见。',
      next: 'c3_sb06'
    },
    c3_sb06: {
      id: 'c3_sb06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '渡鸦号的近防炮在水道两侧打出一排短点射，把最后三台无人机压回海里。'
        + '十七条船全部过完西口，用时十一分钟。'
        + '最后一艘的尾灯消失在雨幕里之后，港务才把警报降了一档。',
      next: 'c3_sb07'
    },
    c3_sb07: {
      id: 'c3_sb07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'seabattle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: "「回来。」伊芙娜的短波很短，「两台都回港区。你陪薇拉进医务舱，腿伤让军医查一遍。现在只有她自己的报告。」",
      next: 'c3_rp01'
    },
    c3_rp01: {
      id: 'c3_rp01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '两台机体先后在港区北面的维护位落地，冲掉沙和盐以后，从尾部坡道走进渡鸦号的机库，固定在检修位上。'
        + '灰鸢右腿的液压管在支架上被整根换掉；夜枭的外壳只多两道划痕，右腿外侧那只接口箱上沾着一层细沙，壳体没变形。'
        + '薇拉从座舱梯上下来的时候左腿先着梯蹬，右腿虚了一下；医务兵在机库边上的操作台上给她清创、上药、缠了两圈绷带，她坐在台子边上，没有让人扶。',
      next: 'c3_rp02'
    },
    c3_rp02: {
      id: 'c3_rp02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: "铎兰从食堂端出来一锅面，锅盖上还压着他那条赭红布巾。「汤是昨天剩的，面是今天煮的。」他把锅放在机库那张折叠桌上，「吃完再吵，吵完再写报告。今晚的饭都留着，回来晚的自己去灶上热。」",
      next: 'c3_rp03'
    },
    c3_rp03: {
      id: 'c3_rp03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '四个人围着那张折叠桌把面分了。'
        + '碗不够，薇拉用的是她自己那只写着呼号的杯子，面在里面显得很小一坨。'
        + '她吃得很慢，先尝一口，再加一点盐，再尝一口——她在给这锅面找正确的比例。',
      next: 'c3_rp04'
    },
    c3_rp04: {
      id: 'c3_rp04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: "「再加就咸了。」诺瓦看着她往杯子里倒第三遍盐，「够了够了，盐罐给我。」薇拉把盐罐放下，尝了一小口，说这次对了。她没有笑，不过她把杯子往桌子中间推了半寸，好让别人也够得到。",
      next: 'c3_rp05'
    },
    c3_rp05: {
      id: 'c3_rp05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '面吃完，谁都没有马上走。'
        + '伊芙娜把明天的安排压在台面上：天亮以前把灰鸢的液压试完，白天按汛前检修单把两台机体过一遍，天黑之前把该签的字签完。'
        + '薇拉把自己那只杯子洗干净，倒扣在架子上，然后沿走道去医务舱换药，一路把舱顶的灯按灭了三盏。',
      next: 'c3_q101'
    },

    // ══ 第十节拍：她看着自己的档案照（medbay / duty） ════════════════════════
    c3_q101: {
      id: 'c3_q101',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '船停在港区三号泊位，舷梯外面是一排夜灯。你们回到船上已经是夜里十一点，机库里两台机体都固定好了，灰鸢右腿的液压管靠在支架上。'
        + '薇拉膝盖外侧那道擦伤在维护位处理过，现在她一个人在医务舱里换了一遍药、重新缠了两圈，把药盒放回原处，标签朝外。'
        + '医务舱的灯只开了靠里的那一盏，走道里的灯调成夜间的一半。',
      next: 'c3_q101_b'
    },
    c3_q101_b: {
      id: 'c3_q101_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '船上的夜班在按部就班地做事：货舱的清点单、机库的过夜检查、舰桥每两小时一次的记录。'
        + '伊芙娜把今天的战斗记录写完，在末尾加了一行：机体未报损，人员一处擦伤，已处理。'
        + '她把这一行写完，才允许自己把笔放下。',
      next: 'c3_q102'
    },
    c3_q102: {
      id: 'c3_q102',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把那只袋子放在桌上，把里面两张纸摊开：一张是硬卡的翻拍照片——石师傅允许她拿手机拍一次，另一张是死亡登记复印件。'
        + '她把两张纸并排摆好，摆得很正，用两只手指按住边角。',
      next: 'c3_q103'
    },
    c3_q103: {
      id: 'c3_q103',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你站在医务舱门口。她没有让你进来，也没有让你出去，只是低头看着那张翻拍的照片。'
        + '照片上的人黑短发、发梢参差、左颊旁一绺长发，灰绿色眼睛，左眼瞳孔外缘一圈更深的环。',
      next: 'c3_q104'
    },
    c3_q104: {
      id: 'c3_q104',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '她一句话也没说。'
        + '医务舱那盏灯的光落在她左边的头发上，那一绺长发垂到下巴的位置，和照片上那一绺的位置分毫不差。'
        + '她的手指按着纸的边角，白胶布在灯下亮了一条线。',
      next: 'c3_q105'
    },
    c3_q105: {
      id: 'c3_q105',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '过了很久，她伸手把两张纸叠起来，对着原来的折痕折了三折，放回背心内袋，再把内袋的扣子按上。'
        + '做这些的时候，她的手很稳。'
        + '然后她抬起头，看着你，还是一个字都没有说。',
      next: 'c3_q106'
    },
    c3_q106: {
      id: 'c3_q106',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'player',
      text: '「要不要我今晚把基廷拦在门外。」',
      next: 'c3_q107'
    },
    c3_q107: {
      id: 'c3_q107',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '「不用。」她说，'
        + '「他要核对，迟早核到。拦一晚上，明天他带着两个人来，后天带四个人。」'
        + '她把灯调到最暗那一档，'
        + '「而且现在我不想一个人待着。这句话我不知道该不该说。」',
      next: 'c3_q108'
    },
    c3_q108: {
      id: 'c3_q108',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你没有出去。'
        + '你在她桌边的折叠椅上坐下来，两个人中间隔着一张桌子和两杯凉掉的水。'
        + '她把手放在膝盖上，坐得笔直，很久以后肩膀才往下塌了一格。',
      next: 'c3_q109'
    },
    c3_q109: {
      id: 'c3_q109',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "「问你一件小时候的事。」她说，「你有没有特别喜欢过谁送的一件东西？后来有人要拿走，你一直舍不得还。」",
      next: 'c3_q110'
    },
    c3_q110: {
      id: 'c3_q110',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「有。一件旧夹克，别人说是我哥的。我穿到破了也没还。」',
      next: 'c3_q111'
    },
    c3_q111: {
      id: 'c3_q111',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'warm',
      tone: 'duty',
      speaker: 'vera',
      text: '「穿到破。」她把这四个字念了一遍。'
        + '「我脖子上这块表停在零点，我不知道为什么停在那里，也不知道表壳上为什么没有刻字。但它在。」'
        + '她摸了摸胸口，'
        + '「它在我这儿。」',
      next: 'c3_q112'
    },
    c3_q112: {
      id: 'c3_q112',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '走道尽头传来脚步声，经过医务舱门口，又往舰桥方向去了。'
        + '桌上的两杯水已经彻底凉了。薇拉把其中一杯推到你那边，自己拿起另一杯，喝了一口，皱了皱眉，还是喝完了。',
      next: 'c3_q113'
    },
    c3_q113: {
      id: 'c3_q113',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '舰内广播：明天傍晚六点三十分，民政所二楼移交单核对。'
        + '广播念完之后又补了一句：涉及人员请提前十分钟到位。',
      next: 'c3_ci01'
    },

    // ══ 第十一节拍：她第一次说「我不想」（city / duty） ═════════════════════════
    c3_ci01: {
      id: 'c3_ci01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "第二天傍晚六点半，澜港的雨小成一层雾。港区路面上的积水被风吹出一道一道的纹，街灯刚亮起来，临街的小店还开着门，报关行的门口站着最后几个人。基廷把核对地点放在旧民政所二楼，理由是那里的户籍原件不能出港——这条规定确实印在门口的办事须知上，想换地方还得另外申请。",
      next: 'c3_ci02'
    },
    c3_ci02: {
      id: 'c3_ci02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      text: '「核对不复杂。」基廷把文件夹摊在桌上，摊得很整齐，'
        + '「六年前霜环外环失踪登记一份，姓名薇拉·厄兰，年龄二十四。你们船上的报到文件一份，姓名薇拉·厄兰，编号 AU-11，看上去二十二。两份文件上的名字是同一个。」',
      next: 'c3_ci02_b'
    },
    c3_ci02_b: {
      id: 'c3_ci02_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '民政所二楼的窗户朝海，雨痕在玻璃上拉出几条斜线。'
        + '屋里只有三张桌子，桌上放着印台、订书机和一叠空白登记表。'
        + '书记员把公章放在桌角，章柄朝外——这间屋子里办事的人都知道，章放在外面是给人看的。',
      next: 'c3_ci03'
    },
    c3_ci03: {
      id: 'c3_ci03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '「结论我不下。」他说，'
        + '「档案室会下。我现在要办的是程序：编号 AU-11 的身份栏先挂起来，人员按安全处移交程序，随下一班交通艇回档案室当面核对。核对完，编制重新登记。」',
      next: 'c3_ci04'
    },
    c3_ci04: {
      id: 'c3_ci04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '「交接单我看一遍。」',
      next: 'c3_ci05'
    },
    c3_ci05: {
      id: 'c3_ci05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '单子是两页。第一页写着移交事由、时间、接收单位；第二页是他们那边已经填好的部分：'
        + '接收条件、医学评估栏、以及一行小字——移交对象在核对期间不得担任机体操作岗。'
        + '落款那一栏空着，等薇拉自己签。',
      next: 'c3_ci06'
    },
    c3_ci06: {
      id: 'c3_ci06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把两页都读完了，读得很慢。'
        + '「第三行，」她指着那行小字，'
        + '「把我从机体操作岗拿下来，理由写的是身份未核。这行是标准条款，还是这次加的。」',
      next: 'c3_ci07'
    },
    c3_ci07: {
      id: 'c3_ci07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      text: '「这次加的。」基廷说，'
        + '「因为你这台机体的存储里有死航线第二段解码。核对期间你不能碰夜枭，这是防止解码被带走。」',
      next: 'c3_ci08'
    },
    c3_ci08: {
      id: 'c3_ci08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把笔拿起来，握了一会儿。'
        + '「命令是：明天早上六点，编号 AU-11 带个人物品登交通艇，接受身份核对，核对期间不得担任操作岗。是否执行。」她把这句话复述得一字不差。',
      next: 'c3_ci09'
    },
    c3_ci09: {
      id: 'c3_ci09',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '基廷点头。'
        + '窗外的港区正在卸昨天的货，装卸轨的响声一阵一阵进来。'
        + '纸上的那一行空白，等着有人写下第一个字。',
      next: 'c3_ci10'
    },
    c3_ci10: {
      id: 'c3_ci10',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '「我不想。」她说。'
        + '声音不大，也没有加重。'
        + '她把笔放在纸上，笔身压着那一行空白。',
      next: 'c3_ci11'
    },
    c3_ci11: {
      id: 'c3_ci11',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "基廷的手停在文件夹上。他抬头看向薇拉，像在等她把话继续说完。门口的伊芙娜也收住了脚步。",
      next: 'c3_ci12'
    },
    c3_ci12: {
      id: 'c3_ci12',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '「你再说一遍。」基廷说，'
        + '「把这一行念完整。你想说什么，就写在这里，我不改你的字。」',
      next: 'c3_ci13'
    },
    c3_ci13: {
      id: 'c3_ci13',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "「我不想被移交。」她说，「核对可以在这里做，该签的我会签。我要求留在夜枭上，名字也由我自己决定。」她说完把笔帽盖上，放到纸的左边，位置很正。",
      next: 'c3_ci14'
    },
    c3_ci14: {
      id: 'c3_ci14',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      text: "基廷把文件夹合上，动作很慢。「记下来了。」他说，「口头拒绝正式命令，写进现场记录。强制移交暂缓。这条街上有三家的人看着，动手就会把事情扩大。」",
      next: 'c3_ci15'
    },
    c3_ci15: {
      id: 'c3_ci15',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '「我给你到今晚零点。」他说，'
        + '「零点以前，你自己选一个地方写在这张纸上，我就按你写的往上递。零点以后，我按程序递。你不用现在答我。」',
      next: 'c3_ci16'
    },
    c3_ci16: {
      id: 'c3_ci16',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜把门带上，走廊里只剩下你们三个人。'
        + '楼下传来一阵短促的货车喇叭，紧接着是有人在喊货位号——澜港的一天照常往下走，跟这间屋子里的事没有关系。',
      next: 'c3_ci17'
    },
    c3_ci17: {
      id: 'c3_ci17',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "「这一句你说得对。」伊芙娜说，「零点也是三边约好的回复期限。三边都在等你的答案，谁先拿到你，谁就拿着这条航线的下一段。」她看了一眼手表，「回船上说。舰桥上可以把材料摊开。」",
      next: 'c3_inside01'
    },

    // ══ 转场：检查单先落在纸上（city / duty） ═══════════════════════════════════
    c3_inside01: {
      id: 'c3_inside01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'city',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '从民政所回到泊位，你们把这一天摊在纸上过了一遍：基廷的移交单、赤垣那张货价表、灰塔的收件编号，还有栈房那份死亡登记复印件。'
        + '伊芙娜把它们锁进舰桥抽屉，钥匙挂在腰上；诺瓦把栈房复印件装进证物袋，编号是当天的日期。'
        + '基廷把时限留在单子上：今晚零点，或者他按程序递。',
      next: 'c3_orb01'
    },

    // ══ 转场：回轨道（orbit / duty） ════════════════════════════════════════════
    c3_orb01: {
      id: 'c3_orb01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '渡鸦号已经在沧澜轨道上，主机熄了火，船身按巡航姿态慢慢转。'
        + '出港是二十一点四十分：从三号泊位拖到长跑道尽头，两台机体的挂架锁到位，三台主发动机依次点火，甲板在 1.05 g 里抖了一下才抬起机头，澜港在雨幕里缩成一条橙色的湿线。'
        + '提前离港是伊芙娜定的：船一离港，基廷今晚就没有再派人上船的路，三边要谈什么，都得追到轨道上来谈。',
      next: 'c3_orb02'
    },
    c3_orb02: {
      id: 'c3_orb02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '离港三十七分钟以后，重力回到 0.8 g，沧澜在舷窗下面转成一弧蓝白，那颗苍白的卫星从画面右下方升起来。'
        + '机库里，铎兰把夜枭右腿外侧的接口箱按汛前检修单接回原位、通电、在接缝上打了一道封印标记；'
        + '维修记录写的是「汛前临时断电，复位通电」，值班人签名是薇拉。',
      next: 'c3_orb03'
    },
    c3_orb03: {
      id: 'c3_orb03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '「三条线跟着我们上来了。」诺瓦把观测板转过来，'
        + '「联合的护航艇四十公里，灰塔的观测艇十一公里，赤垣的地面电台还在用三年前就该作废的旧代号。」'
        + '她把三条线并排钉在主屏下面，'
        + '「他们不进射程，也不走，就在轨道外面等我们自己说。」',
      next: 'c3_br01'
    },

    // ══ 第十二节拍：三方同时要人（bridge / duty，章末四选一） ═══════════════════
    c3_br01: {
      id: 'c3_br01',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '渡鸦号的舰桥在半环形操纵台中间，中央战术台上摊着三份东西，各自压着一只磁扣。'
        + '主屏分了三格：左格是澜湾的风暴云图，右格是三条跟踪线，中间那格挂着舷窗外的行星弧线。'
        + '船已经在轨道上，机库那两台机体都锁在挂架上。',
      next: 'c3_br01_b'
    },
    c3_br01_b: {
      id: 'c3_br01_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "舰桥的记录灯只开着两颗：一颗照战术台，一颗照主屏。半环形操纵台后面的座椅都转向屏幕，按键上那张手写便签还贴着昨天的日期。中央战术台的三份纸上，磁扣压着三种不同颜色的纸边——蓝的、暗红的、橙的。",
      next: 'c3_br02'
    },
    c3_br02: {
      id: 'c3_br02',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第一份是基廷的移交单，两页，第三行的小字还在。'
        + '第二份是赤垣通过军需栈房递进来的接应线，写在货价表背面，开头一句是问压舱矿石多少钱。'
        + '第三份是灰塔的观测登记，条款七行，下面附了一页观测排期。',
      next: 'c3_br03'
    },
    c3_br03: {
      id: 'c3_br03',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '「联合的条件不变。」基廷站在战术台一侧，'
        + '「当面核对，人在编制里，编号保留，我来担保移交期间不做医学处置。你签在第二页。」',
      next: 'c3_br04'
    },
    c3_br04: {
      id: 'c3_br04',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '「但我要说清楚一件事。」他补了一句，'
        + '「档案室核对完，如果认定你和六年前那份失踪登记是同一个人，你就得按失踪人员的档案重新登记。名字会留下，年龄会改，编制会重排。这是最干净的一条路，也是最贵的一条。」',
      next: 'c3_br05'
    },
    c3_br05: {
      id: 'c3_br05',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "铎兰把货价表翻过来，推到台面中央。「赤垣的价我念一遍。」他说，「他们按接头词认人，过去以后再登记。接应线从这里到底下那个栈房，货价表背面的第三行是接头词。过去以后要从头安顿，过冬的矿站和住处都得自己找。」",
      next: 'c3_br06'
    },
    c3_br06: {
      id: 'c3_br06',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '「条件就这么多，我不替他们加也不替他们减。」他把铜手指按在纸上，'
        + '「另外一句是我自己的：你去了，那条线上以后多一个人手，少一个名字。矿站那边冬天挺长，活挺多，饭不好吃。」',
      next: 'c3_br07'
    },
    c3_br07: {
      id: 'c3_br07',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '诺瓦把第三份推过来，她已经在边上手写了两行批注。'
        + '「灰塔的条款七行，我给你念一条不写在纸上的：他们要的是活体神经读数，观测期三十天，每天两次。第七行写着可撤回，但撤回要走一次医疗评估，评估由他们指定。」',
      next: 'c3_br08'
    },
    c3_br08: {
      id: 'c3_br08',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '「他们开给我的一句话是：观测对象身份会由观测局登记，不并入联合档案。」她把板子合上，'
        + '「这句话我不确定能不能信。我写在批注里了：来源为对端口述，需要对方书面确认。」',
      next: 'c3_br09'
    },
    c3_br09: {
      id: 'c3_br09',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '伊芙娜站在战术台正后方，没有碰那三份纸。'
        + '「三个地方都是别人的地方。」她说，'
        + '「还有第四个选项：留在船上。你留下，联合的移交单会一直开着，赤垣的接应线会一直挂着，灰塔的排期会一直排着。船在澜港等天气，等到他们中间有人先动手。」',
      next: 'c3_br09_b'
    },
    c3_br09_b: {
      id: 'c3_br09_b',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '通讯台开着三个窄带频道，每个频道只留一条最小的接收线。'
        + '三条线都在等人说话：蓝的那条挂着安全处的呼号，暗红的那条挂着一段货价，橙的那条每隔十分钟发一次对时脉冲。'
        + '三条线都没有发话，舱里安静得能听见那三盏小灯轮流呼吸。',
      next: 'c3_br10'
    },
    c3_br10: {
      id: 'c3_br10',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "「我只说一件事，说完就投弃权。」她看着薇拉，「你今天已经说过自己的意愿，我会原话记录。零点前，我把三方的要求一并报上去，让上面看清他们各自要什么。」",
      next: 'c3_br11'
    },
    c3_br11: {
      id: 'c3_br11',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把三份纸一份一份读完，读了很久。'
        + '读完她把手放在战术台边上，先看向基廷，再看向铎兰，最后看向你和伊芙娜。'
        + '「我选不了。」她说，'
        + '「这三份纸里，没有一份写着我要做什么、能做多久、什么时候可以走。你们要我挑的时候，等于让我挑一份我不知道内容的合同。」',
      next: 'c3_br12'
    },
    c3_br12: {
      id: 'c3_br12',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "「我想先把条件弄清楚。」她说，「零点以前，三份材料都摊开，条件、期限、能带走的东西，一项项写全。在那之后我才决定去向，夜枭先留在船上。」她把手从桌沿收回来，「我刚才想了很久。现在想好了，就这样办。」",
      next: 'c3_br13'
    },
    c3_br13: {
      id: 'c3_br13',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '主屏右下角的时间跳了一格：二十三点四十七分。'
        + '三份纸摊在战术台上，磁扣压着各自的角。基廷站着，铎兰坐着，诺瓦把观测板翻开又合上。'
        + '舷窗外那颗苍白卫星从画面边缘滑过去，主屏上的三条跟踪线一条都没有灭。',
      next: 'c3_br14'
    },
    c3_br14: {
      id: 'c3_br14',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '「你说话。」伊芙娜对你说，'
        + '「三边的人都在听。你说什么，船就按什么走。」',
      next: 'c3_choice_name'
    },
    c3_choice_name: {
      id: 'c3_choice_name',
      kind: 'choice',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '战术台上的三份纸等着被推向其中一边，或者三份都留在中间。薇拉站在台子对面，没有再替自己解释什么。',
      choices: [
        {
          id: 'c3_nm_concord',
          label: '把联合那份推到她面前，同时要求核对地点改在船上、由她本人签字。',
          next: 'c3_nm_a1',
          reaction: '基廷把第二页翻到正面，把「随交通艇回档案室」那一行划掉，改成「随船至联合港当面核对」。他改完把笔递过去，笔尖朝自己。',
          effects: [
            { type: 'flag', key: 'vera_true_name_known', value: true },
            { type: 'flag', key: 'vera_refused_once', value: true },
            { type: 'flag', key: 'bridge_coordinates', value: true },
            { type: 'standing', who: 'concord', amount: 2 }
          ]
        },
        {
          id: 'c3_nm_scarlet',
          label: '把货价表交给她，让她决定要不要走那条不写进图的路。',
          next: 'c3_nm_b1',
          reaction: "铎兰把纸推到她面前，又把工具箱钥匙搁在纸边，伸手压住被风扇吹起的纸角。",
          effects: [
            { type: 'flag', key: 'vera_true_name_known', value: true },
            { type: 'flag', key: 'vera_refused_once', value: true },
            { type: 'flag', key: 'bridge_coordinates', value: true },
            { type: 'standing', who: 'scarlet', amount: 2 }
          ]
        },
        {
          id: 'c3_nm_spire',
          label: '接下灰塔的条款，但要求排期落在这艘船上、遥控而不是被带走。',
          next: 'c3_nm_c1',
          reaction: '诺瓦当场把条款发回观测局，要求把观测站改成船上遥控单元。二十分钟后回执进来，观测局同意排期后移，条件是他们要一个常驻技术员——诺瓦说这个我来。',
          effects: [
            { type: 'flag', key: 'vera_true_name_known', value: true },
            { type: 'flag', key: 'vera_refused_once', value: true },
            { type: 'flag', key: 'bridge_coordinates', value: true },
            { type: 'standing', who: 'spire', amount: 2 }
          ]
        },
        {
          id: 'c3_nm_aboard',
          label: '三份都不推：把船留在锚地，等她拿全条款，谁先动手谁先被记下来。',
          next: 'c3_nm_d1',
          reaction: '三份纸留在战术台中间，一只磁扣压着三个角。基廷看了两秒，把文件夹扣上；铎兰把货价表折回原来的折痕；诺瓦往观测局的频道发了一行回执，写着暂缓。',
          effects: [
            { type: 'flag', key: 'vera_true_name_known', value: true },
            { type: 'flag', key: 'vera_refused_once', value: true },
            { type: 'flag', key: 'bridge_coordinates', value: true },
            { type: 'flag', key: 'crew_split', value: true }
          ]
        }
      ]
    },
    c3_nm_a1: {
      id: 'c3_nm_a1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把第二页转到自己面前，在追加要求栏里写了两行：'
        + '一，核对过程本人在场；二，核对结果出来以前，编号 AU-11 不撤销。'
        + '她把笔还回去，'
        + '「这一次是我签的。」',
      next: 'c3_nm_a2'
    },
    c3_nm_a2: {
      id: 'c3_nm_a2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '基廷撕下移交单第一页的副本，对折，收进文件夹的内侧。'
        + '他说他会把这份附件单独递上去，不并入原来的那两份。'
        + '伊芙娜在战术台底下按了两个键，把舰桥的记录灯重新打开一颗。',
      next: 'c3_ret_a1'
    },
    c3_ret_a1: {
      id: 'c3_ret_a1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '零点前二十分钟，薇拉自己回到住舱，把该带的都带上：两份复印件、两只秒表、那本写到第一页的小本子。'
        + '她没有收拾行李，只把床铺折好、把借来的杯子放回架子。'
        + '经过机库的时候她又在检修单上确认了一遍接口箱那一栏，签名栏写的是「随船核对」。',
      next: 'c3_ship_concord'
    },
    c3_nm_b1: {
      id: 'c3_nm_b1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "薇拉把货价表拿起来，把背面那三行接头词读了两遍。「第三行是接头词。」她说，「过去以后要自己安顿，我记着。我想试一次，从登记名字开始，都由我自己来。」她说完，把表折好，收进背心内袋，和那两张复印件放在一起。",
      next: 'c3_nm_b2'
    },
    c3_nm_b2: {
      id: 'c3_nm_b2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "铎兰把工具箱钥匙收回来，挂回腰带上。「那条线我走过三回。」他说，「头一回是送货，第二回是接人，第三回是去认领一具遗体。都不好走。你要是走到一半想回来，让当地人替你联系阿吉斯，他们知道怎么传话。」",
      next: 'c3_ret_b1'
    },
    c3_ret_b1: {
      id: 'c3_ret_b1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她真的去了。'
        + '第二天午后，伊芙娜把渡鸦号停在澜湾外湾的锚位上，用一条没有编号的小艇把她送到外湾浮标北侧——小艇开出去的时候船上的灯全灭，只留桅顶一盏绿灯。'
        + '一个半小时以后小艇回来，薇拉自己从舷梯上跨进来。'
        + '她靴子上沾着水泥灰，袖口里有渔货舱的味道，内袋里多了一张字条：这条接应线从今天起算存在。'
        + '她只说了一句：「线接上了。用我这双手接的。」',
      next: 'c3_ret_b2'
    },
    c3_ret_b2: {
      id: 'c3_ret_b2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "凌晨的窗口打开时，渡鸦号从澜湾外湾抬起来。雨带压在云层下面，舷窗很快只剩一片灰，再往上就是干净的蓝白。主循环压到低档以后，铎兰把工具箱第二格锁进三号货舱的柜子，钥匙挂在原来的位置——那半格空出来的位置还保留着，标签纸平整地贴在格沿。",
      next: 'c3_ship_scarlet'
    },
    c3_nm_c1: {
      id: 'c3_nm_c1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "薇拉把条款第七条重读了一遍，然后在空白处写了一行要求：观测期间每一个读数都要有她本人的接收记录。「我签这个。」她说，「原有七条要和这条补充要求一起生效。修改之前，先取得我的同意。」",
      next: 'c3_nm_c2'
    },
    c3_nm_c2: {
      id: 'c3_nm_c2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '诺瓦把回执发出去，收回来，又发出去一条。'
        + '「常驻技术员我来当。」她说，'
        + '「条款里没写技术员要待几年，我按三十天报。三十天以后他们要人，就让他们自己来船上写申请。」'
        + '她把观测板推到薇拉面前，让她看那两行手写批注。',
      next: 'c3_ret_c1'
    },
    c3_ret_c1: {
      id: 'c3_ret_c1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '观测单元最后是装在船上的：主桅后面的伸缩臂架腾出一格，灰塔的箱子焊在减震托架上，线从舱壁穿孔进来，接进诺瓦那张观测台。'
        + '装完以后，诺瓦让薇拉亲手把第一条数据线接上，再让她自己拔下来重接一次：「你要会拆，别只会接。」',
      next: 'c3_ret_c2'
    },
    c3_ret_c2: {
      id: 'c3_ret_c2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '完成入轨的第二天夜里，渡鸦号在沧澜的晨昏线外侧调了一次姿态。'
        + '观测单元的箱子在船体外面泛着一点冷光，薇拉把第一组读数念了两遍：一遍给诺瓦，一遍给记录器。'
        + '锚链第二段解码只交出去一半，另一半留在夜枭的存储器里，读取口令写在她自己的本子上。',
      next: 'c3_ship_spire'
    },
    c3_nm_d1: {
      id: 'c3_nm_d1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把三份纸按原样摆好，一只磁扣压住三个角。'
        + '「我没有选。」她说，'
        + '「这句话我知道不算一个答案，但它是我现在能负责的那一句。等三份东西写全，我再选一次。」',
      next: 'c3_nm_d2'
    },
    c3_nm_d2: {
      id: 'c3_nm_d2',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「那我报上去：三方同时要人，船上没有决定。」伊芙娜把三份材料扫进平板，'
        + '「这句话很难看，但它至少是真的。船留在锚地，等天气，也等他们下一步。」'
        + '她看向铎兰，'
        + '「你刚才说要给赤垣回一句话。」',
      next: 'c3_nm_d3'
    },
    c3_nm_d3: {
      id: 'c3_nm_d3',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '「回。」铎兰把货价表折回原来的折痕，'
        + '「我就说船还在，货没定。这句话他们听得懂。」'
        + '他把纸塞进工装口袋，口袋鼓出来一块，和另一边那只装着空白便签的口袋一样鼓。',
      next: 'c3_ret_d1'
    },
    c3_ret_d1: {
      id: 'c3_ret_d1',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '二十六小时以后，风暴带从澜湾上空过去，港务解除封航。'
        + '渡鸦号等下面那条跑道重新亮起引导灯，才从澜湾外面的锚位抬起来，穿过还没散尽的雨云。'
        + '入轨以后，机库里的接口箱重新接回通电；唯一没变回来的东西在值班表上——伊芙娜和铎兰的名字被排进了不同的班次，两人都签了字。',
      next: 'c3_ship_neutral'
    },

    // ══ 章末收束段：出发前的四个落点（bridge / duty） ══════════════════════════
    c3_ship_concord: {
      id: 'c3_ship_concord',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "零点前十分钟，基廷把改过的移交单副本留在舰桥上。伊芙娜把航向输入导航核心：先去联合港外的汇合点，再决定后面的航程。锚链第二段的解码留在船上，读取需要你和诺瓦两个人的口令。薇拉回住舱以前绕了一趟机库，在汛前检修单上签了字：夜枭右腿外侧的接口箱已经接回通电，接缝上那道封印标记完好。",
      next: 'out_ch3_concord'
    },
    c3_ship_scarlet: {
      id: 'c3_ship_scarlet',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '零点以前，赤垣在澜港的军需栈房把回话递了上来：三天以后，外湾浮标北侧，接应线只开一次，来船不许带编号。'
        + '薇拉把回话抄进本子，抬头说了一句：她去，一个人去。'
        + '伊芙娜没有拦，只把救生背心的扣子替她扣好，又往口袋里塞了一盏备用手电。'
        + '导航核心里的锚链第二段解码留了一份改写过的通航记录：矿物名对不上，电码对得上。',
      next: 'out_ch3_scarlet'
    },
    c3_ship_spire: {
      id: 'c3_ship_spire',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '灰塔的回执在半小时后进来：观测排期后移，观测单元装到船上，常驻技术员一名，报到时间另行通知。'
        + '诺瓦把条款打印了两份，一份给薇拉，一份贴在舰桥的便签板下面，用磁扣压着四角。'
        + '夜枭的存储器里留了锚链第二段解码的一半，读取口令写在薇拉自己的本子上。',
      next: 'out_ch3_spire'
    },
    c3_ship_neutral: {
      id: 'c3_ship_neutral',
      kind: 'dialogue',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '入轨以后，三份没有签字的要求留在舰桥战术台上，磁扣压着各自的角。'
        + '伊芙娜下令任何人不得私下接三边的通讯，铎兰当场说他做不到，两个人都没有收回自己那句话。'
        + '机库里，夜枭右腿外侧的接口箱按汛前检修单接回通电，接缝封条完好，签名栏里是薇拉的字。',
      next: 'out_ch3_neutral'
    },

    // ══ 章末结果（四个，continuesTo 都是 ch04） ═════════════════════════════════
    out_ch3_concord: {
      id: 'out_ch3_concord',
      kind: 'chapterOutcome',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch3_concord',
      continuesTo: 'ch04',
      onEnter: [
        { type: 'flag', key: 'out_ch3_concord', value: true },
        { type: 'standing', who: 'concord', amount: 1 }
      ],
      text: '凌晨的窗口最先排到渡鸦号。'
        + '船从澜湾的锚位抬起来，穿过还没散尽的雨云，在沧澜的晨昏线外侧进入轨道；护航艇留在四十公里外面，不切入射界，也不离开。'
        + '移交单被改成「随船核对」，第三行的小字划掉，旁边是薇拉自己写的两行要求；核对结果出来以前，船上谁都不许替她念那个名字。'
        + '机库里，夜枭右腿外侧的接口箱接回通电，接缝上那道封印标记完好；薇拉在下面的汛前检修单上签了字。'
        + '船上一共四个人，一个都没有少。'
        + '按她自己的说法，这一次是她自己签的。',
      next: null
    },
    out_ch3_scarlet: {
      id: 'out_ch3_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch3_scarlet',
      continuesTo: 'ch04',
      onEnter: [
        { type: 'flag', key: 'out_ch3_scarlet', value: true },
        { type: 'standing', who: 'scarlet', amount: 1 }
      ],
      text: '赤垣那条接应线上多了一个没有编号的人手，名字要等到矿站自己给她一个。'
        + '接头那一个半小时里她不在船上，回来的时候靴子上沾着港区的水泥灰；这件事不写进任何一份记录，只有她自己那张手写字条收在背心内袋里。'
        + '导航核心里的通航记录被改写了一遍：矿物名对不上，电码对得上。'
        + '凌晨的窗口打开，渡鸦号从澜湾外湾抬起来，穿过雨带进入沧澜轨道。'
        + '薇拉回到自己的岗位，夜枭右腿外侧的接口箱接回通电，接缝上那道封印标记完好。'
        + '船上一共四个人，一个都没有少；她只是从今天起，多了一条不写进任何名单的线。',
      next: null
    },
    out_ch3_spire: {
      id: 'out_ch3_spire',
      kind: 'chapterOutcome',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch3_spire',
      continuesTo: 'ch04',
      onEnter: [
        { type: 'flag', key: 'out_ch3_spire', value: true },
        { type: 'standing', who: 'spire', amount: 1 }
      ],
      text: '渡鸦号带着一份三十天的观测条款在傍晚入轨，观测单元装在主桅后面的伸缩臂架上。'
        + '条款贴在人人都看得见的地方，第七行下面有两行手写批注，字迹是诺瓦的。'
        + '夜枭的存储器里留着一半解码，读取口令在薇拉自己的本子上；机库里，接口箱接回通电、封印标记完好。'
        + '船上一共四个人，一个都没有少；她第一次把工作上的东西留在自己身上，而且没有写报告。',
      next: null
    },
    out_ch3_neutral: {
      id: 'out_ch3_neutral',
      kind: 'chapterOutcome',
      chapter: 'ch03',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch3_neutral',
      continuesTo: 'ch04',
      onEnter: [
        { type: 'flag', key: 'out_ch3_neutral', value: true },
        { type: 'flag', key: 'crew_split', value: true }
      ],
      text: "渡鸦号在雨带上面入轨，等港务解除封航、跑道重新亮灯。三份没有签字的要求留在舰桥战术台上，磁扣压着各自的角。讨论结束，舰桥开始排下一班的值更；舷窗外面那颗苍白卫星转过去的时候，值班表上两个挨着的名字被排进了不同的班次。",
      next: null
    }
  }
};

export default CHAPTER;
