// 钢翼盟约 / STEEL-WING COVENANT — 第八章「霜环反攻」章节模块（纯数据，无外部导入、无运行时 I/O）
//
// 契约见 CHAPTER_MODULE_CONTRACT.md；世界固定事实见 FULL_GAME_BIBLE.md 与 story/{catalog,world,characters,scenes}.mjs。
// 本轮口径：一条正常主干路径 ≥14,000 中文可读字符（目标 14,000–15,000）；实际值见 contentActual 与 ch08-notes.json。
// G24 状态修复：ch07 拆毁写入授权芯片（bridge_write_disabled）时，本章在第一次真实写校时之前走 c8_br01–c8_br05
// 的现场重做段落（跳过联锁、芯片烧断、具名抄送三家），修完清除该旗标并留下 bridge_write_restored /
// bridge_write_restore_cost_paid；芯片完好的路线不经过这些节点。c8_122 只把回收条款抄进锚地日志
// （recovery_clause_logged），不再设置 keating_resolved；ch07 未答复的路线由 c8_kp01 把未决状态
// （keating_clause_pending_finale）交给终章。被毁路线的显示字符数因此高于 15,000（上限 15,194）。
// 章末结果是"继续点"（continuesTo: 'ch09'），不是全书结局；本模块不代表整部游戏完成。

export const CHAPTER = {
  number: 8,
  id: 'ch08',
  nodeIdPrefix: 'c8_',
  title: '第八章 · 霜环反攻',
  badge: '第八章',
  status: 'complete',
  entry: 'c8_01',
  nextChapter: 'ch09',
  contentTarget: {
    mainPathCjk: 14000,
    note: '本轮用户口径：一条主干路径 ≥14,000 个中文可读字符，目标 14,000–15,000；互相排斥的分支不相加。'
  },
  contentActual: {
    mainPathCjk: 14823,
    corpusCjk: 18316,
    nodes: 327,
    choices: 7,
    options: 23,
    outcomes: 4,
    measuredAt: '2026-09-12',
    method: 'drafts/ch08-selfcheck.mjs（临时自检脚本，非交付物）：按引擎语义（requires / nextIf 先命中先用再回落 next / variants / 选项顺序 / effects）从 c8_01 有界遍历；主干路径只统计该路径上真正显示过的文本（命中的变体或基准文本 + 被选项的文案与选项反应），互相排斥的分支不相加。CJK 判定与 catalog.mjs 的 countingMethod 相同（3400-4DBF / 4E00-9FFF / F900-FAFF）。G26 文案修复（c8_292 把"主角"改成第二人称"你"）之后按引擎口径复算的数字以 FULL_GAME_PLAN.json 与 FULL_GAME_READY.json 的登记为准；本条自检记录按当时的字节原样保留。',
    routeWitness: {
      mainPath_allFirstAvailable: 14823,
      out_ch8_concord: { min: 14783, max: 15177 },
      out_ch8_scarlet: { min: 14795, max: 15181 },
      out_ch8_spire: { min: 14808, max: 15194 },
      out_ch8_neutral: { min: 14796, max: 15190 },
      chipIntact: {
        out_ch8_concord: { min: 14783, max: 14860 },
        out_ch8_scarlet: { min: 14795, max: 14864 },
        out_ch8_spire: { min: 14808, max: 14877 },
        out_ch8_neutral: { min: 14796, max: 14873 }
      },
      chipDestroyed: {
        out_ch8_concord: { min: 15100, max: 15177 },
        out_ch8_scarlet: { min: 15112, max: 15181 },
        out_ch8_spire: { min: 15125, max: 15194 },
        out_ch8_neutral: { min: 15113, max: 15190 }
      },
      minimumWitnessedPath: 14783
    },
    tone: { combat: 3540, duty: 7350, off_duty: 3933 },
    note: '四条章末结果在芯片完好/被毁两组前置状态下各有见证路径：完好路线 14,783–14,877，被毁路线 15,100–15,194；最短的一条 14,783 个 CJK 字符，全部满足 ≥14,000 硬口径，被毁路线因新增 c8_br01–c8_br05 修复段落高出原 14,000–15,000 目标带（详见 ch08-notes.json 的 stateRepairG24）。可达性来自离散选择组合枚举（7,766 条，未触上限）＋ 64 条确定性随机路径＋ 16 条定向见证路径；这是有界遍历，不是形式化证明，也不枚举 trust / standing 数值。'
  },
  decisions: [
    'c8_choice_fleet',
    'c8_choice_ultimatum',
    'c8_choice_vote',
    'c8_choice_repair',
    'c8_choice_chain',
    'c8_choice_wing',
    'c8_choice_arrive'
  ],
  outcomeNodeIds: ['out_ch8_concord', 'out_ch8_scarlet', 'out_ch8_spire', 'out_ch8_neutral'],
  scenes: ['orbit', 'bridge', 'commandroom', 'reactor', 'battle', 'ship_rail', 'hangar'],
  companionMilestones: {
    ivna: [
      '表决：她第一次在记录里公开站在你一边，把 XR-03 的编号摆上桌，要求那一行写"自愿"',
      '把回收条款钉进锚地作业日志：要执行，就得有人在上面签名'
    ],
    doran: [
      '用本该送去矿站的水泵备件修好第三台主环，自己留在环舱里看着它',
      '把工具箱交给薇拉保管，锁着的那一格一起交出去'
    ],
    nova: [
      '把观测数据公开到底：观察员登记当场失效，她被灰塔从名单上划掉',
      '把"对照组"这三个字写成能被别人引用的句子'
    ],
    vera: [
      '在观察廊第一次说出自己想要什么，并且当场把最后一块桃子拿走',
      "在机库里当着伊芙娜的面，主动要求驾驶夜枭承担探测任务"
    ]
  },
  outcomes: {
    out_ch8_concord: {
      chapter: 'ch08',
      title: '章末结果 · 登记在联合名下',
      route: 'concord',
      routeName: '环带联合',
      summary: '第七段的钥匙由渡鸦号写入，按联合的登记走；本舰被标成"执行中"的作业船，开火指令在这一栏下面过期。',
      consequences: [
        '锚地内线的作业位给了渡鸦号，三号主环烧到红，人都在。',
        '回收条款被抄进锚地作业日志：再执行一次，就得有人签名。',
        "矿区恢复了照明，航道控制权仍由联合登记保管。"
      ],
      nextHook: '校准序列没有取消，只是被推迟到本舰修得动的时候。维斯特要的那条干净数据，还差一个对照组。',
      continueHint: '终章从「锚地的钥匙已经在联合的登记里，而校准还没开始」继续。',
      continuesTo: 'ch09'
    },
    out_ch8_scarlet: {
      chapter: 'ch08',
      title: '章末结果 · 灯是矿区的',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: '钥匙按外环接收机自己的登记写入，联合的登记表上没有这一段；矿站的调度席第一次自己念出了锚点的编号。',
      consequences: [
        '渡鸦号贴在外缘，赤垣的拖船卡在本舰和联合炮线之间。',
        '第七段重新亮起时，亮的是矿区维护的灯。',
        '联合没有开火，也没有走：两条护航舰停在内线，把这件事记成"待核实"。'
      ],
      nextHook: '钥匙交出去容易，收回来难；本舰现在站在两种登记之间，任何一边都可以说自己是来"恢复秩序"的。',
      continueHint: '终章从「锚点归矿站维护，联合的舰队还在内线」继续。',
      continuesTo: 'ch09'
    },
    out_ch8_spire: {
      chapter: 'ch08',
      title: '章末结果 · 对照组的签名',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: '本舰把整条重写记录公开，署名"校准对照"；灰塔的观测序列被迫把渡鸦号写进对照组，那条干净数据从此不干净。',
      consequences: [
        '维斯特的实验还在跑，但每一段都得挂上本舰的名字。',
        "诺瓦的观察员登记失效，她本人留在舰上，那张失效的卡仍由她随身带着。",
        '公开的一半数据让三方都不敢先开火：谁先动，谁就成了被记录的那一方。'
      ],
      nextHook: '记录公开之后，剩下的一半就成了所有人想要的东西；本舰手里那半条命，也被写进了目录。',
      continueHint: '终章从「数据公开了一半，三方都被钉在自己的声明上」继续。',
      continuesTo: 'ch09'
    },
    out_ch8_neutral: {
      chapter: 'ch08',
      title: '章末结果 · 钥匙在船上',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: "本舰把重写留在自己的核心里，第七段只对本舰亮着。三支舰队的灯都转向这一艘船，三方暂时保持对峙。",
      consequences: [
        '钥匙没有交给任何一方，也没有被任何人夺走。',
        '矿区、联合、灰塔同时派人来谈，来的人都只带了一句话和一份空白的交接单。',
        '渡鸦号停在暗段中间，靠自己的接收机看路。'
      ],
      nextHook: '一条船握着整段航道的路标，能撑多久不取决于火力，取决于船上四张椅子还坐着谁。',
      continueHint: '终章从「一艘半条命的船站在三支舰队中间，钥匙在船上」继续。',
      continuesTo: 'ch09'
    }
  },
  nodes: {
    c8_01: {
      id: 'c8_01',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '渡鸦号在外缘熄掉主推力，靠残余速度滑进锚地交通圈。沧澜的蓝色边缘压在屏幕下沿，第七段锚点的浮标排成一条弧，七枚里有四枚已经不亮了。',
      next: 'c8_02'
    },
    c8_02: {
      id: 'c8_02',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        {
          requires: ['out_ch7_concord'],
          text: '本舰离港那张许可的附页上写着担保人一栏，签的是伊芙娜的编号。联合的档案里，担保人是负连带责任的。'
        },
        {
          requires: ['out_ch7_scarlet'],
          text: '离港清单上，本舰的坞位登记的是一家外购备件商的运输位。替本舰开门的人没有上船，也没有留下名字。'
        },
        {
          requires: ['out_ch7_spire'],
          text: '本舰在港里的那段停留被写进了校准记录，条目叫"非计划靠泊"。从港口出来以后，航迹后面就多了一个旁观者的注脚。'
        },
        {
          requires: ['out_ch7_neutral'],
          text: '本舰没有领任何一方的离港许可，是趁夜班换班从货检通道出来的。港里的灯到最后一刻都没有为本舰亮过。'
        }
      ],
      text: '本舰离港的时候只带了够一次加速的燃料和一份没有盖章的申请。港里的灯到最后一刻都没有为本舰亮过。',
      next: 'c8_03'
    },
    c8_03: {
      id: 'c8_03',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三支舰队的灯挤在三个高度上。联合两条护航舰压在近轨高度，船身拖着一串补给艇；赤垣三条改装货船贴着外缘排开，货舱门全开着；灰塔两条白船停在极向，最后面是一艘瘦长的校准船，它连航行灯都关着。',
      next: 'c8_04'
    },
    c8_04: {
      id: 'c8_04',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        {
          type: 'flag',
          key: 'fleet_converged',
          value: true
        }
      ],
      text: '锚地交通圈现在有四支队伍。第四支只有一条船，就是本舰。三方之间的频道没有一条是互相交换的，本舰的台面上却同时亮着三个呼叫灯。',
      next: 'c8_05'
    },
    c8_05: {
      id: 'c8_05',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '广播：锚地管制频道占用中。三个队列同时呼叫本舰——联合管制、赤垣突击队、灰塔校准。请指定接收顺序，未接队列将转为留言。',
      next: 'c8_06'
    },
    c8_06: {
      id: 'c8_06',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三条声音是同时进来的。通讯台把它们切成三条窄带，一条压着一条：有人已经在报编号，有人在报时间，还有一个声音什么都没报，只是等着。',
      next: 'c8_07'
    },
    c8_07: {
      id: 'c8_07',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vester',
      text: '阿德里安·维斯特，灰塔校准序列。零点整，第七段会按照计划失效一次。这件事不需要你们同意，也不需要你们帮忙。\n你们只要做一件事：在零点之前，把本舰的位置和航迹原样发给我。作为交换，我的记录里会出现你们的船名，只出现船名。',
      next: 'c8_08'
    },
    c8_08: {
      id: 'c8_08',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '校准船的位置在交通圈最外那一条腿上，比赤垣的货船还远。它没有开航行灯，也不做任何一次姿态修正——它不打算靠过来。',
      next: 'c8_09'
    },
    c8_09: {
      id: 'c8_09',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '穆尔·基廷，联合安全处。渡鸦号，你们的离港没有备案，船上带着两台未结案的样本机体和一个未完成处置的编号。\n两小时内到内线登舰点报到，把 AU-11 的处置单和 XR 系列的去向一起交上来。按程序走，船员的编制还保得住。',
      next: 'c8_10'
    },
    c8_10: {
      id: 'c8_10',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        {
          requires: ['keating_onboard'],
          text: '基廷的信号是从本舰自己的通讯干管里出来的。他没有带来交通艇，也没有带押送班——他带来的是一份打印好的处置单，就压在通讯台边上。'
        },
        {
          requires: ['keating_resolved'],
          text: '基廷的信号换了中转，是从联合护航舰上转出来的。他还在念同一份处置单，但那份单子在本舰这边已经有了对折的痕迹。'
        }
      ],
      text: '他的信号走的是联合护航舰的中转，念的那份单子本舰见过一次，编号还是同一个。',
      next: 'c8_11'
    },
    c8_11: {
      id: 'c8_11',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'scarlet_voice',
      text: '赤垣「靛」字队。第七段我们自己量过：灯撑不到两个钟头，灰塔就要把它抽空；往后靠灯走路的人就得用老办法——肉眼，加运气。\n你们手上有钥匙，我们有船和人。借我们一段，外环给你们留一条走廊：谁拦你们，我们就打谁。',
      next: 'c8_12'
    },
    c8_12: {
      id: 'c8_12',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '外缘那三条货船里，有一条把货舱门全开了，里面停着两条拖船和一排还没挂弹的无人机。矿站的调时灯从那扇门里照出来，一条一条打在货舱壁上。',
      next: 'c8_13'
    },
    c8_13: {
      id: 'c8_13',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '三个队列，三种价码。先把本舰自己的数字摆出来：我们还有几次加速，几个主环，第七段还有多久。\n谁先把自己的条件摆完，谁就是在替别人做决定。',
      next: 'c8_14'
    },
    c8_14: {
      id: 'c8_14',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '燃料只够一次正经加速，加完就是一条抛物线。第三号主环从上次进港就一直在掉压力，我修到一半。\n真要动，本舰只有一次选择在哪条线上停下来。停错地方，我们就得靠别人把我们拖回去——而这里没有别人。',
      next: 'c8_15'
    },
    c8_15: {
      id: 'c8_15',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '第七段的七枚浮标，四枚暗、三枚亮。暗的四枚间隔十一分钟，掉的是同一个序号位——有人在按顺序抽，抽到一半停下了。\n他停在哪里我不知道，但第七段现在只剩三枚在说话。',
      next: 'c8_16'
    },
    c8_16: {
      id: 'c8_16',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '锚链的规矩在交通图上是写在角落里的：一段没有主人的时候，第一个把校时写进去的人，就是这一段的主人。写进去的窗口不长，短到只有一次机会。',
      next: 'c8_17'
    },
    c8_17: {
      id: 'c8_17',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "我算过一遍，{callsign}，念给你听。联合两条护航舰的火力圈盖住内线，本舰从外缘直线进内线要十九分钟；赤垣的拖船到第七段的边缘要十二分钟；校准船不动，但它的序列一旦开始，任何人写进去的数据都要过它的校准。\n正面突破和撤离都来不及。我们得利用三家的时间差。",
      next: 'c8_18'
    },
    c8_18: {
      id: 'c8_18',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '交通屏上，三个队列的等待时间各自在跳：联合的还剩九分钟，赤垣的还有十一分钟，灰塔那一条不显示倒计时，只显示一行"等待信号"。',
      next: 'c8_19'
    },
    c8_19: {
      id: 'c8_19',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '我记下来了。还有一件事，不在报告里：第七段的校时灯也在喂外环的接收机。它掉完以后，矿站的调时会漂。\n漂多少我不确定。按他们的表走，差不多是三天。',
      next: 'c8_20'
    },
    c8_20: {
      id: 'c8_20',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '通讯台的三个呼叫灯一起闪。九分钟以后，第一条队列会转成留言，第二条会跟上。',
      next: 'c8_choice_fleet'
    },
    c8_choice_fleet: {
      id: 'c8_choice_fleet',
      kind: 'choice',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你把手放在通讯台上。三条队列，只有一条能先开口。',
      choices: [
        {
          id: 'c8_fleet_union',
          label: '先接联合管制：先把程序走完，让本舰在锚地的记录里有一个合法位置。',
          next: 'c8_opt_fleet_union',
          reaction: '联合管制席报出一串流程号，把本舰标成"未备案进场，待核"。基廷的队列转到第二顺位，等的时候他没有插话。\n他的沉默比刚才那段通牒还要整齐。',
          effects: [
            {
              type: 'standing',
              who: 'concord',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_fleet_union',
              value: true
            }
          ]
        },
        {
          id: 'c8_fleet_scarlet',
          label: '先接赤垣：问清楚走廊的宽度、拖船的油量，和谁来承担先动手这件事。',
          next: 'c8_opt_fleet_scarlet',
          reaction: '赤垣那边回得很快，像是早就写好了答案：走廊宽六百米，拖船自带给养，先动手的一方由联合承担。\n他们说完就报了下一组数字，没有问本舰的名字。',
          effects: [
            {
              type: 'standing',
              who: 'scarlet',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_fleet_scarlet',
              value: true
            }
          ]
        },
        {
          id: 'c8_fleet_spire',
          label: '先接灰塔：让维斯特把他说的"零点"讲清楚，包括失效的边界和校准的时限。',
          next: 'c8_opt_fleet_spire',
          reaction: '维斯特没有客套，直接念了三个时间段：失效一分钟，空窗四十六分钟，校准接管两小时。他说完就停，像是在等本舰去算这三个数意味着什么。\n诺瓦把这行字圈了起来。',
          effects: [
            {
              type: 'standing',
              who: 'spire',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_fleet_spire',
              value: true
            }
          ]
        }
      ]
    },
    c8_opt_fleet_union: {
      id: 'c8_opt_fleet_union',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '程序号一栏一栏填完，本舰的呼号第一次出现在锚地交通表上。填到第四栏，管制席要本舰报一次实时的船况。',
      next: 'c8_21'
    },
    c8_opt_fleet_scarlet: {
      id: 'c8_opt_fleet_scarlet',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '赤垣把走廊的四个角点发了过来，航迹画得很直。他们的调度员在最后加了一句：走廊只在第七段断掉以后生效。',
      next: 'c8_21'
    },
    c8_opt_fleet_spire: {
      id: 'c8_opt_fleet_spire',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '灰塔把三个时间段发成一张表，表上每一行都留了签名栏。三个签名栏，一个都没填。',
      next: 'c8_21'
    },
    c8_21: {
      id: 'c8_21',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "第一条队列接进来以后，另外两条也保持接通。联合在报编号，赤垣在报角点，灰塔在报时间段，三路声音同时挤进耳机，你把音量逐一调低，按顺序记录。",
      next: 'c8_22'
    },
    c8_22: {
      id: 'c8_22',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '都听见了。上舰桥，把这三个数字摆在同一个屏上。\n通讯台，从现在起任何一条外发信息都要两个人点头。',
      next: 'c8_23'
    },
    c8_23: {
      id: 'c8_23',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜把白袖标往上推了一格，先进了升降梯。铎兰从机库报上来一句：第三号主环的压力还在掉，掉得不快，但一直在掉。',
      next: 'c8_24'
    },
    c8_24: {
      id: 'c8_24',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '升降梯门合上的时候，舷窗里那排暗掉的浮标正好灭到第五枚。剩下的两枚还亮着，间隔十一分钟。',
      next: 'c8_50'
    },
    c8_50: {
      id: 'c8_50',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舰桥的主屏被切成三块，三块里各是一张脸和一条声纹。伊芙娜站在中央战术台后面，把安全束带扣上，动作和起飞前一样慢。',
      next: 'c8_51'
    },
    c8_51: {
      id: 'c8_51',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '三家说的话都太长。诺瓦，把他们要的东西写成三行，一行一条，写在战术台上。\n字要小，我们要看的是空白的地方。',
      next: 'c8_52'
    },
    c8_52: {
      id: 'c8_52',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "第一行，联合要人：AU-11 的处置单，XR 系列的去向。第二行，赤垣要钥匙：一段碎片就够。第三行，灰塔要数据：本舰停在原地不动，把航迹原样交出去。\n三方的要求列满了纸，对应的交换条件还得继续谈。",
      next: 'c8_53'
    },
    c8_53: {
      id: 'c8_53',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三块屏上，三个人都没有关掉自己那一路的镜头。联合那边背后是护航舰的作战室；赤垣那边是货舱；灰塔那边只有一张空椅子和一卷摊开的数据纸带。',
      next: 'c8_54'
    },
    c8_54: {
      id: 'c8_54',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vester',
      text: '补一条规则，免得你们猜。零点之后，第七段里任何还在用旧校时的船，会被当成没有校准的变量，重新写一遍。写进去的航迹会跟着你们三年。\n留在外面的人只记录，不动手。那是我的对照组。',
      next: 'c8_55'
    },
    c8_55: {
      id: 'c8_55',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "他说\"对照组\"的时候，语气和他报时间段的时候一模一样。法务席继续逐项核对附件，记录员在纸带上补了一行编号。",
      next: 'c8_56'
    },
    c8_56: {
      id: 'c8_56',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "他要用原样保留的航道做对照。渡鸦号如果停在原地不动，本舰航迹就能提供那一组原始参照。\n我们不动，他的实验就成立。",
      next: 'c8_x01'
    },
    c8_x01: {
      id: 'c8_x01',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '把他的序列从头念一遍。霜环锚地那次无人母舰，死航线，沧澜的海上封锁，静默壁的校准站——每一次都有一段航道彻底失效过一次。\n今天轮到第七段。锚地是他最后一段，也是最干净的一段。',
      next: 'c8_x02'
    },
    c8_x02: {
      id: 'c8_x02',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '他要在这一段里拿到什么？',
      next: 'c8_x03'
    },
    c8_x03: {
      id: 'c8_x03',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "一次自然发生的失效，再加一条有人干预过的对照。两边都在他的记录里，他就能说清楚哪一段该重新校准、哪一段该封。\n所以本舰停在这里不动，对他最好；本舰动起来，他就得多写一行。",
      next: 'c8_57'
    },
    c8_57: {
      id: 'c8_57',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '渡鸦号，把话说完整。报到以后，AU-11 的处置单可以按"编制内留用"归档，XR-03 的案子按"留舰观察"结案，两个编号都不用进回收流程。\n代价写在第一页：本舰解除武装，钥匙交联合登记，锚地的事由安全处处理。',
      next: 'c8_58'
    },
    c8_58: {
      id: 'c8_58',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '他手里那张纸是打印的，页眉有联合的流程号。纸的右下角留着一栏签名，横线画得很直。',
      next: 'c8_59'
    },
    c8_59: {
      id: 'c8_59',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'scarlet_voice',
      text: '赤垣把话说到底：你们不借，我们也做。我们那两条拖船能切，切完这一段就是矿区的。\n差的是你们手上那个能把校时写回去的东西。有它，矿站自己拿钥匙；没有它，这一段就黑着，冬天靠灯飞。',
      next: 'c8_60'
    },
    c8_60: {
      id: 'c8_60',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '环形战术台上，三个呼叫灯在同一个高度上亮着。伊芙娜把三行字往中间推了推，用指节压住最下面那一行。',
      next: 'c8_61'
    },
    c8_61: {
      id: 'c8_61',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '谁先动，谁承担后果。本舰现在动一下，就同时踩在三家的纸上。\n但不动也踩——停在这里，灰塔把我们写进对照组，联合按照流程来收，赤垣自己动手，然后说本舰在场。',
      next: 'c8_62'
    },
    c8_62: {
      id: 'c8_62',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '补一个物理条件。要往暗段里写校时，接收机必须在段内，而且得知道接缝的形状。\n本舰的接收机够用。接缝的形状，得有人飞进去量。',
      next: 'c8_63'
    },
    c8_63: {
      id: 'c8_63',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '屏上那卷纸带动了一下。灰塔的校准船开始转天线，一盏一盏地转，像是在对准什么。',
      next: 'c8_64'
    },
    c8_64: {
      id: 'c8_64',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '他把序列往前挪了：剩下三枚一起算，从现在起一小时四十分走完，也就是零点整。\n再算一遍也是这个数，{callsign}。他不想等我们商量完。',
      next: 'c8_65'
    },
    c8_65: {
      id: 'c8_65',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '战术台把三家的最后通牒摊在同一张图上。三条线都指向第七段，三条线都不肯先画到中间。',
      next: 'c8_choice_ultimatum'
    },
    c8_choice_ultimatum: {
      id: 'c8_choice_ultimatum',
      kind: 'choice',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜把外发键推到桌子中间。三条队列都在等你回话。',
      choices: [
        {
          id: 'c8_ult_open',
          label: '把三条队列并成一条：观测数据、条款编号、本舰船况，原样发出去，三家同时收。',
          next: 'c8_opt_ult_open',
          reaction: '记录员把这封回执念了一遍，确认三个队列都在收。赤垣那边先回了收到，联合那边停了几秒，灰塔没有回话，但校准船的天线停住了一格。\n从这一刻起，本舰的底牌已经不在本舰手里。',
          effects: [
            {
              type: 'standing',
              who: 'spire',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_ult_open_record',
              value: true
            }
          ]
        },
        {
          id: 'c8_ult_spire',
          label: '只回灰塔：接受观察组的登记，换一条进段通道和零点前的静默。',
          next: 'c8_opt_ult_spire',
          reaction: '维斯特给了一条通道号，没有要签名。他说本舰进段以后要停止一切主动发射，包括求救。\n诺瓦把通道号抄下来，在下面画了一条横线。',
          effects: [
            {
              type: 'standing',
              who: 'spire',
              amount: 2
            },
            {
              type: 'flag',
              key: 'c8_ult_spire_lane',
              value: true
            }
          ]
        },
        {
          id: 'c8_ult_concord',
          label: '只回联合管制：按条令报全船况与损伤，申请一次进段作业许可。',
          next: 'c8_opt_ult_concord',
          reaction: '管制席收了本舰的申报，把"进段作业"这四个字念了两遍。基廷在旁听席上要求知道作业内容，伊芙娜答了六个字：重写锚点校时。\n管制席没有拒绝，也没有批准，只回了一句"待定"。',
          effects: [
            {
              type: 'standing',
              who: 'concord',
              amount: 2
            },
            {
              type: 'flag',
              key: 'c8_ult_concord_slot',
              value: true
            }
          ]
        }
      ]
    },
    c8_opt_ult_open: {
      id: 'c8_opt_ult_open',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "回执发出去以后，本舰的通讯台安静了下来。三条队列都在读同一份东西，收件指示灯陆续亮起，回复栏仍在等待。",
      next: 'c8_66'
    },
    c8_opt_ult_spire: {
      id: 'c8_opt_ult_spire',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '通道号落到本舰的导航台上，航线贴着校准船的投影走。本舰的发射机被标成静默，连自动信标都要关。',
      next: 'c8_66'
    },
    c8_opt_ult_concord: {
      id: 'c8_opt_ult_concord',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '申报进了管制席的队列，编号排在两条补给艇后面。待定的意思很清楚：本舰可以先动，出了事，责任按申报时间算。',
      next: 'c8_66'
    },
    c8_66: {
      id: 'c8_66',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "通讯台记录在案：本舰的答复由我签发，责任在我。\n接下来定具体行动。诺瓦，把作战会议室打开，四个人都到。",
      next: 'c8_67'
    },
    c8_67: {
      id: 'c8_67',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜解下安全束带，把战术台上的三行字撕下来折好塞进胸袋。她走之前看了一眼主屏，三块屏里的人都还坐着。',
      next: 'c8_100'
    },
    c8_100: {
      id: 'c8_100',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '作战会议室的门从里面锁上。长桌固定在地板上，投影把锚地图横铺在桌面中间，第七段那一弧画成灰的，只有两个点还亮。',
      next: 'c8_101'
    },
    c8_101: {
      id: 'c8_101',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '墙角的旧编号被擦过好几回，最下面一层还看得出一个"7"。桌子这一边坐着四个人：伊芙娜、铎兰、诺瓦、薇拉。',
      next: 'c8_102'
    },
    c8_102: {
      id: 'c8_102',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      variants: [
        {
          requires: ['bridge_write_disabled'],
          text: "这次四个人各自表态，原话写进日志。有分歧就当场说。\n先说清楚：本舰还有一次加速，第三号主环在掉压力；接收机现在只能读——写入授权在港里被拆掉了，要写，得先在插座上把它补回来。"
        }
      ],
      text: "这次四个人各自表态，原话写进日志。有分歧就当场说。\n先说清楚：本舰还有一次加速，第三号主环在掉压力，接收机现在还能写。",
      next: 'c8_103'
    },
    c8_103: {
      id: 'c8_103',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '三号环我能修回来，缺的是一枚封圈。全船只剩一枚，是配给时留下来的，本来排给矿区那台水泵。\n封圈装进本舰，矿区那台泵就报废。这一条我不替谁定，你们先表决要干什么，我再动它。',
      next: 'c8_104'
    },
    c8_104: {
      id: 'c8_104',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '诺瓦把投影的一角拉近，第七段那两个亮点在桌面上放大成两枚浮标，中间隔着一条很细的接缝。',
      next: 'c8_105'
    },
    c8_105: {
      id: 'c8_105',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      variants: [
        {
          requires: ['ivna_holds_lever'],
          text: '我的这一条先写。港里那张牌还在我手里：要谈我的编号，就当面谈，别拿本舰的作业去换。\n要对接第七段的写入口，需要一个能挂进 XR 接口的人；本舰只有我一个。写的时候我坐在接收舱，不进战术序列。记录上那一行写"自愿"，编号照写：XR-03，伊芙娜·卡列尔。'
        }
      ],
      text: '我的这一条先写。要对接第七段的写入口，需要一个能挂进 XR 接口的人；本舰只有我一个。\n写的时候我坐在接收舱，不进战术序列。记录上那一行写"自愿"，编号照写：XR-03，伊芙娜·卡列尔。',
      next: 'c8_106'
    },
    c8_106: {
      id: 'c8_106',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把左肩的白色袖标摘下来放在桌上，压在"自愿"那一行上。袖标下面，锁骨那圈接缝的边露出来一点。',
      next: 'c8_107'
    },
    c8_107: {
      id: 'c8_107',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '有人会问同一个问题：如果这一段写给矿区，安全处怎么算我的编号。答案是照旧算。\n我不打算再拿这个编号去换谁的批准。',
      next: 'c8_108'
    },
    c8_108: {
      id: 'c8_108',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '铎兰在日志板上把这一条写完，笔顿了一下，又在后面添了四个字：附议。',
      next: 'c8_109'
    },
    c8_109: {
      id: 'c8_109',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: "我的那一条：三号环归我，封圈归我签，泵的事也归我写清楚。写不写矿区，我都留在环舱里，一直到本舰停下为止。\n我下去守着环体，听轴和管道的声音。哪处有变化，马上报给你们。",
      next: 'c8_110'
    },
    c8_110: {
      id: 'c8_110',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        {
          requires: ['know_doran_scarlet'],
          text: '说这些话的时候，他把铜色左手的五指一根一根摆在桌面上，像是在点清自己要带走的东西。'
        }
      ],
      text: '说完，他把工具箱从桌下拉出来，放在脚边，锁着的那一格朝外。',
      next: 'c8_111'
    },
    c8_111: {
      id: 'c8_111',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '投影转到诺瓦那一边。她把颈绳上的数据卡取下一张，放在桌上，用指甲在卡片背面划了一道。',
      next: 'c8_112'
    },
    c8_112: {
      id: 'c8_112',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '我的那一条最贵，我先把价钱念出来。把观测记录整条公开，灰塔会注销我的观察员登记，我这张卡会在十分钟内变成废卡。\n我还是要发。这条记录放在任何一个口袋里，最后都只剩那一个人的说法。',
      next: 'c8_113'
    },
    c8_113: {
      id: 'c8_113',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把卡推到桌子中间，推到"自愿"那一行旁边，和伊芙娜的袖标并排放着。',
      next: 'c8_114'
    },
    c8_114: {
      id: 'c8_114',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '第三小队二号机，AU-11，申请进段探测。理由三条：夜枭有长焦、红外、信号三种读数；探测臂在校准船的扫描里是沉默件；后座是数据柜，减重以后操纵余量够。',
      next: 'c8_115'
    },
    c8_115: {
      id: 'c8_115',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '理由成立。申请表我签，出去的名额给长机或者给你，由舰桥定。\n你还有什么要补的？',
      next: 'c8_116'
    },
    c8_116: {
      id: 'c8_116',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '有。刚才那三条是理由。\n我要飞。',
      next: 'c8_117'
    },
    c8_117: {
      id: 'c8_117',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '会议室里没有立刻接话。铎兰的笔停在日志板上，诺瓦抬起头，伊芙娜看了她三秒，随后把这一句也写进了日志。',
      next: 'c8_118'
    },
    c8_118: {
      id: 'c8_118',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '写下来了啊。日志这东西，写下去就跟着一辈子。\n不过话说回来，这一句是我在这条船上听过最短的一份申请。',
      next: 'c8_119'
    },
    c8_119: {
      id: 'c8_119',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '投影上，第七段的接缝在旁边闪了一下。接收机把一段实时读数贴上来：灰塔的抽条序列又往前跳了一格。',
      next: 'c8_120'
    },
    c8_120: {
      id: 'c8_120',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '四条意见写完了。现在表决一件事：这一段写完之后，钥匙进谁的登记。\n这一条定下来，后面的活都按它排。',
      next: 'c8_choice_vote'
    },
    c8_choice_vote: {
      id: 'c8_choice_vote',
      kind: 'choice',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '长桌上四个人的目光都落在你这边。日志板翻到新的一页。',
      choices: [
        {
          id: 'c8_vote_concord',
          label: '走联合的登记：作业写进管制席的序列，同时把回收条款抄进锚地日志。',
          next: 'c8_opt_vote_concord',
          reaction: '伊芙娜把这一条念完，签名，写时间。诺瓦在下面补了一行：公开范围＝锚地日志，不含观测原件。\n铎兰把封圈从配给柜的清单上划掉，改写成"舰内使用"。',
          effects: [
            {
              type: 'standing',
              who: 'concord',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_vote_concord',
              value: true
            }
          ]
        },
        {
          id: 'c8_vote_scarlet',
          label: '走矿区的登记：校时写给外环的接收机，这一段以后由他们自己维护。',
          next: 'c8_opt_vote_scarlet',
          reaction: '铎兰先在日志上签了名，然后才抬头。他说这一条他签得最快，也最不好看。\n诺瓦把公开范围改成外环调度席加三座矿站的接收机，后面的名单她留了空行。',
          effects: [
            {
              type: 'standing',
              who: 'scarlet',
              amount: 1
            },
            {
              type: 'trust',
              who: 'doran',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_vote_scarlet',
              value: true
            }
          ]
        },
        {
          id: 'c8_vote_spire',
          label: '走公开的登记：整条重写记录署名"校准对照"，让三方同时看见维斯特那一次失效。',
          next: 'c8_opt_vote_spire',
          reaction: '诺瓦把卡又拿回手里，翻过来压在日志页上：她要在公开件上署自己的编号。\n伊芙娜提醒她，这一步之后灰塔的名单上就没有她了。她说她知道，字照签。',
          effects: [
            {
              type: 'standing',
              who: 'spire',
              amount: 1
            },
            {
              type: 'trust',
              who: 'nova',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_vote_spire',
              value: true
            }
          ]
        },
        {
          id: 'c8_vote_ship',
          label: '谁的登记都不进：本舰自己写，钥匙留在船上，谁要谈就来船边谈。',
          next: 'c8_opt_vote_ship',
          reaction: '伊芙娜把这一条写得最慢，写完在下面加了一行：本舰对该段无维护义务，亦不承担对外供给。\n薇拉在日志边角补了一个字：收到。随后她划掉，改成：明白。',
          effects: [
            {
              type: 'trust',
              who: 'vera',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_vote_ship',
              value: true
            }
          ]
        }
      ]
    },
    c8_opt_vote_concord: {
      id: 'c8_opt_vote_concord',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '管制席的序列号抄进日志的第二天栏。伊芙娜把那张纸折好，和三条通牒并在一起。',
      next: 'c8_121'
    },
    c8_opt_vote_scarlet: {
      id: 'c8_opt_vote_scarlet',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '外环的调度席号抄进日志。铎兰把工具箱横过来，压在那一页上。',
      next: 'c8_121'
    },
    c8_opt_vote_spire: {
      id: 'c8_opt_vote_spire',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '公开件的字段填完：署名一栏是诺瓦的观察员编号，附件一栏写"待现场生成"。',
      next: 'c8_121'
    },
    c8_opt_vote_ship: {
      id: 'c8_opt_vote_ship',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '日志上只留了本舰自己的船名，后面没有登记号。伊芙娜把这一页签完，合上了日志板。',
      next: 'c8_121'
    },
    c8_121: {
      id: 'c8_121',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '表决成立。还有一件事要给你们讲清楚，讲完就散会。\n安全处那份回收条款，从今天起抄在锚地作业日志里，编号、页码、抄送都在。要执行它，得有人在上面签名。',
      next: 'c8_122'
    },
    c8_122: {
      id: 'c8_122',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        {
          requires: ['keating_resolved'],
          text: '条款的编号本舰早就核过一遍，这一次只是把它的页码钉在锚地日志上。基廷那份单子从此不再是本舰的私事。'
        }
      ],
      text: '条款的编号、页码核了两遍，抄送栏填了三家：管制席、赤垣调度席、灰塔校准序列。\n抄写员在页脚补了一句：本页只登记条款，不写结论。',
      onEnter: [
        {
          type: 'flag',
          key: 'recovery_clause_logged',
          value: true
        }
      ],
      nextIf: [
        {
          requires: ['keating_resolved'],
          next: 'c8_123'
        }
      ],
      next: 'c8_kp01'
    },
    c8_kp01: {
      id: 'c8_kp01',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '诺瓦在抄送栏下面补了一行：条款登记，答复未到，不计解决。\n这一行跟着日志的日期留在原处，等一个能把它划掉的人。',
      onEnter: [
        {
          type: 'flag',
          key: 'keating_clause_pending_finale',
          value: true
        }
      ],
      next: 'c8_123'
    },
    c8_123: {
      id: 'c8_123',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '抄送发出去四十一秒以后，联合管制席回了一句"已收"，赤垣回了调度席号，灰塔那一栏只回了时间戳。',
      next: 'c8_124'
    },
    c8_124: {
      id: 'c8_124',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '散会的时候，铎兰先走。他提着工具箱出门，脚步在铁梯上响了一串，往反应堆舱去了。',
      next: 'c8_125'
    },
    c8_125: {
      id: 'c8_125',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '门刚合上，船身就震了一下。震得不重，像有人在很深的地方把一块很长的板子抽走了。桌上的水杯贴着磁扣，晃了两下没倒。',
      next: 'c8_126'
    },
    c8_126: {
      id: 'c8_126',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'system',
      text: '广播：反应堆舱报告三号主环压力归零。接收机报警：第七段反馈脉冲。舰桥，请确认航向保持。',
      next: 'c8_150'
    },
    c8_150: {
      id: 'c8_150',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '反应堆舱里的声音像有人在隔壁一直敲铁皮。检修走道窄得只能侧身，扶手上全是凝在漆面上的手印。三号主环那一侧的红灯把冷蓝色的主回路切成一段一段。',
      next: 'c8_151'
    },
    c8_151: {
      id: 'c8_151',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '铎兰把环壳的检修口卸到第三颗螺栓的时候，压力表已经贴在零上不动了。他用手背贴了一下壳外壁，又缩回来。',
      next: 'c8_152'
    },
    c8_152: {
      id: 'c8_152',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "泄压阀先开了，环体保住了。阀座被冲歪半毫米，封圈整个卷边。\n必须换封圈。目前只能维持三成推力，还得反复停机降温。",
      next: 'c8_153'
    },
    c8_153: {
      id: 'c8_153',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉蹲在走道另一侧，把检修灯夹在肩上，两手稳住环壳的吊带。吊带是手摇的，摇一圈，壳口移动不到一指宽。',
      next: 'c8_154'
    },
    c8_154: {
      id: 'c8_154',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '吊带第三圈有毛刺，我换了一边受力。封圈座我也量了：偏了零点四。\n要装新封圈，得先把这个面磨回去，磨的时候不能停灯，灯一停我看不见刻度。',
      next: 'c8_155'
    },
    c8_155: {
      id: 'c8_155',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '行家。谁教你磨阀座的？\n……别答了，我知道是谁。工具柜第三格最上面那盒研磨膏，拿了就归你管。',
      next: 'c8_156'
    },
    c8_156: {
      id: 'c8_156',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她站起来去拿研磨膏，回来的时候顺手把走道上那根松了的线束绑回管夹。绑完她才想起要报一句，又没说。',
      next: 'c8_157'
    },
    c8_157: {
      id: 'c8_157',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '还有第二件事，比封圈难。反馈脉冲是从接收机那条馈线灌进来的，馈线烧在穿舱的那一段。\n接收机是写校时的嘴。嘴还能用，喂它的那根管子断了。',
      next: 'c8_158'
    },
    c8_158: {
      id: 'c8_158',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '穿舱那一段在两堵隔壁之间，手伸不进去，只能从辅机总线上绕一条临时线。临时线的口径只有原线的一半。',
      next: 'c8_159'
    },
    c8_159: {
      id: 'c8_159',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '半口径的意思：写一次的功率够，写第二次不够。\n本舰只有一次把校时写进去的机会，写歪就是没写。',
      next: 'c8_160'
    },
    c8_160: {
      id: 'c8_160',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜的声音从舱内广播里下来，很短：舰桥要一份能撑多久的时间表，落成三行。',
      next: 'c8_161'
    },
    c8_161: {
      id: 'c8_161',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '第一行：磨面装封圈，三十八分钟。第二行：本舰从现在的站位挪到第七段，全推力二十六分钟。第三行：三号环修好以后，能连续吃重四十分钟，之后衬里开始走形。\n三行加起来，本舰只有一次机会，而且没有回头的油。',
      next: 'c8_162'
    },
    c8_162: {
      id: 'c8_162',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '时间表报到舰桥以后，主屏那边传来一句回话：灰塔的序列又开始往前跳了，剩下的时间是一小时二十二分。',
      next: 'c8_163'
    },
    c8_163: {
      id: 'c8_163',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '三十八加二十六是六十四。零点还剩一小时二十二。\n照这张表，本舰会在零点前十八分钟站到第七段里。那十八分钟要留给馈线冷却和接缝图，写完校时刚好压在零点后面。',
      next: 'c8_x10'
    },
    c8_x10: {
      id: 'c8_x10',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '还有一条，先定下来：写完之后本舰往哪走。\n一次加速只够去一个地方，去了就没有油再回来。',
      next: 'c8_x11'
    },
    c8_x11: {
      id: 'c8_x11',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '三个方向。联合的内线，赤垣的外缘，再就是留在暗段里不动。\n去哪儿不看我们想说什么，看写完之后谁站在那一边等着，还有谁肯替我们挡住别人的炮口。',
      next: 'c8_x12'
    },
    c8_x12: {
      id: 'c8_x12',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "留在暗段里也有一条好处：本舰是这一段唯一有校时的船，谁想走这一段，都得先问本舰。\n补给得自行筹措，三号环的备件也只剩一件。",
      next: 'c8_164'
    },
    c8_164: {
      id: 'c8_164',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: "她说得对，十八分钟是封圈需要的时间。\n各组照作业表干，轮休的找地方坐下，给正在忙的人留出通道。到点我报。",
      next: 'c8_165'
    },
    c8_165: {
      id: 'c8_165',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '他掀开工具箱，把那一枚封圈从最底层拿出来，封圈外面裹着一层黄油纸，纸上还印着矿站的水泵型号。',
      next: 'c8_166'
    },
    c8_166: {
      id: 'c8_166',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: "这一枚现在装在三号环上，矿区的泵今年冬天得重新报一件。我先把这句话写进日志，写完再动手。\n写清楚：渡鸦号领用，经手签字：铎兰。",
      next: 'c8_167'
    },
    c8_167: {
      id: 'c8_167',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉把黄油纸折平，夹进工具箱盖内侧的便签堆里。便签大多是空白的，只有最上面一张写着半个字。',
      next: 'c8_168'
    },
    c8_168: {
      id: 'c8_168',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '磨面的时候，两个人换了三次手。第十四分钟，隔壁的吊带滑了一格，环壳压下两指宽，一条线束被夹断，火花打在铎兰的袖口上。',
      next: 'c8_169'
    },
    c8_169: {
      id: 'c8_169',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "停一下，皮带扣勾住我的手套了，手没事。\n铎兰，你左边垫块木头，吊带挂点往我这边挪一格——我这边有栏杆。",
      next: 'c8_170'
    },
    c8_170: {
      id: 'c8_170',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把手套摘下来看了一眼，手背上一条红痕，没破。她把这段也写进了作业记录，写了三行，一行原因是"挂点偏移"。',
      next: 'c8_171'
    },
    c8_171: {
      id: 'c8_171',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '写得好。这种记录比报告值钱，明年有人翻到它，就知道这个挂点为什么不能那么挂。\n干完了。最后三圈，你来对力矩。',
      next: 'c8_172'
    },
    c8_172: {
      id: 'c8_172',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第三十八分钟，压力表从零动到第一格，停住，又往上走了半格。三号环的声音从敲铁皮变成一条连续的闷响。',
      next: 'c8_173'
    },
    c8_173: {
      id: 'c8_173',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '广播：三号主环恢复，可用推力七成。接收机馈线已接辅机总线，写功率一次。请舰桥确认用电分配。',
      nextIf: [
        {
          requires: ['bridge_write_disabled'],
          next: 'c8_br01'
        }
      ],
      next: 'c8_174'
    },
    c8_br01: {
      id: 'c8_br01',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'system',
      text: '广播：接收机写入插座自检未通过。授权芯片缺失，写入联锁保持关闭，接收机维持只读。',
      next: 'c8_br02'
    },
    c8_br02: {
      id: 'c8_br02',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '插座里只剩一圈接触框。港里那一刀把芯片的熔断片切成两截，两截都在工具箱里。\n备件箱里没有第二枚，登记处补发要等下一班船；本舰等不起。',
      next: 'c8_br03'
    },
    c8_br03: {
      id: 'c8_br03',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '桥回去可以，但要跳过联锁：这一趟写完，芯片自己烧断，接收机以后只能读。\n还有一笔账——名字谁来签，现在就得定。',
      next: 'c8_br04'
    },
    c8_br04: {
      id: 'c8_br04',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '名字我签。第七段现在没有主人，自签的写入只有一种合法写法：写清楚，留名字，抄送三家。\n不写清楚叫篡改；写清楚，才算一次作业。',
      next: 'c8_br05'
    },
    c8_br05: {
      id: 'c8_br05',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉把接触框压回座上，量了三遍；铎兰剪掉铅封，合上夹具。这一件是趁环壳收尾的空当做的，没有多占一分钟。\n灯从红转绿，写入联锁一次性打开；诺瓦把这一页抄送三家，签名在第一行。',
      onEnter: [
        {
          type: 'flag',
          key: 'bridge_write_disabled',
          value: false
        },
        {
          type: 'flag',
          key: 'bridge_write_restored',
          value: true
        },
        {
          type: 'flag',
          key: 'bridge_write_restore_cost_paid',
          value: true
        }
      ],
      next: 'c8_174'
    },
    c8_174: {
      id: 'c8_174',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '用电分配要定下来。总功率只够两件事同时做，第三件必须停。\n三选一，现在定：船速、接收机、还是全舰的生活与货舱。',
      next: 'c8_choice_repair'
    },
    c8_choice_repair: {
      id: 'c8_choice_repair',
      kind: 'choice',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '配电盘上的三排开关都在你手边。铎兰和薇拉等着你报出顺序。',
      choices: [
        {
          id: 'c8_repair_speed',
          label: '保船速与接收机：关掉货舱与生活舱的电，人集中到三个加压舱里，冷着飞。',
          next: 'c8_opt_repair_speed',
          reaction: '全船的暖气一块一块熄下去。货舱减压的提示灯亮了，人从住舱抱着毯子往机库和餐厅走。\n铎兰把三号环的功率表拨到"航速优先"，然后报了一句：机库门口的加热器留着，那地方有人。',
          effects: [
            {
              type: 'trust',
              who: 'doran',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_repair_cold_ship',
              value: true
            }
          ]
        },
        {
          id: 'c8_repair_receiver',
          label: '保接收机与生活用电：航速压到六成，飞得慢一点，写的机会只有一次。',
          next: 'c8_opt_repair_receiver',
          reaction: '三号环的推力被压在六成。计时器上的余量从十八分钟掉到九分钟，伊芙娜在舰桥重新排了一遍进段航线。\n薇拉报了新的数：慢下来的话，接缝要在过站的第二圈才出现。',
          effects: [
            {
              type: 'trust',
              who: 'vera',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_repair_slow_write',
              value: true
            }
          ]
        },
        {
          id: 'c8_repair_all',
          label: '三排都给：环舱和机库的人手动压住，功率全上，代价由下面的人先扛。',
          next: 'c8_opt_repair_all',
          reaction: "铎兰没有反对，只是把环舱的两个人叫过来，让他们把安全绳挂上。他说三号环这么飞，最多撑四十分钟，到时侧面作业区必须清空。\n薇拉把作业记录翻到新一页，写：\"四十分钟之后，撤。\"",
          effects: [
            {
              type: 'flag',
              key: 'c8_repair_overdrive',
              value: true
            },
            {
              type: 'flag',
              key: 'ship_damage_high',
              value: true
            }
          ]
        }
      ]
    },
    c8_opt_repair_speed: {
      id: 'c8_opt_repair_speed',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '冷下来的舱壁开始结一层薄霜。走道上的每个人都多穿了一件，机库那台加热器前面排了四个杯子和一双袜子。',
      next: 'c8_175'
    },
    c8_opt_repair_receiver: {
      id: 'c8_opt_repair_receiver',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '生活用电保住了，舷窗边那一排小灯还亮着。舰桥把进段航线改成两圈通过，第一圈只量，第二圈才写。',
      next: 'c8_175'
    },
    c8_opt_repair_all: {
      id: 'c8_opt_repair_all',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三号环的功率表被拨到顶。舱里的噪声一下抬高半度，说话得凑近耳朵。走道尽头，两个人把安全绳一圈一圈挂上了。',
      next: 'c8_175'
    },
    c8_175: {
      id: 'c8_175',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '铎兰把工具箱从地上提起来，走到过道口，往薇拉脚边一放。箱盖扣了两下，锁着的那一格朝上。',
      next: 'c8_176'
    },
    c8_176: {
      id: 'c8_176',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: "这个你拿着。第二格锁着，钥匙在盖子里侧，胶布底下。里面那些纸你以后自己看，有疑问就找熟悉这些坐标的人核对。\n开战前把工具箱搬进舱里，固定好。甲板上容易被掀走。",
      next: 'c8_177'
    },
    c8_177: {
      id: 'c8_177',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '收到。\n……我记下来了。',
      next: 'c8_178'
    },
    c8_178: {
      id: 'c8_178',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把工具箱搬到走道里侧，用脚背试了试箱子稳不稳，然后把自己的手套压在箱盖上，转身去检查三号环的第二道表。',
      next: 'c8_179'
    },
    c8_179: {
      id: 'c8_179',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舰桥报来一句：接收机接入第七段边缘，段内目前没有别人的信号。赤垣的拖船停在段外，没有动。',
      next: 'c8_180'
    },
    c8_180: {
      id: 'c8_180',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '到地方了。现在把这一段断干净。灰塔那个人要的是本舰不动；我们一动，他就有对照组了。\n那就让他看。看的时候别站在我这边，站到栏杆外面去。',
      next: 'c8_200'
    },
    c8_200: {
      id: 'c8_200',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '渡鸦号把船头压向第七段，三号环的声音升上来，整条船像一根绷紧的弦。沧澜的蓝边转到左舷，锚点浮标的冷光一条一条从舷窗外面掠过去。',
      next: 'c8_201'
    },
    c8_201: {
      id: 'c8_201',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢先出机库。左肩挂钩上挂着机库那把切割钳，钳口用钢丝缠了两圈。夜枭跟在右后方三百米，探测臂收在最低位。',
      next: 'c8_202'
    },
    c8_202: {
      id: 'c8_202',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '夜枭报告：缆桥两点四公里，双缆，带预张力。第一刀切下缆，第二刀必须切在我标的位置，偏两米以上，断头会往回甩。\n标点发给你了。',
      next: 'c8_203'
    },
    c8_203: {
      id: 'c8_203',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '灰鸢，切完立刻脱离，不要停在那里看结果。夜枭，你把读数送到本舰，本舰的接缝图就靠你这一趟。\n联合的截击机起来了，两架，高度比我们低。',
      next: 'c8_204'
    },
    c8_204: {
      id: 'c8_204',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '两架联合截击机从内线拉起来，走的是外侧弧线。它们没有开火，先用明码喊了一句：离开作业区，重复，离开作业区。',
      next: 'c8_205'
    },
    c8_205: {
      id: 'c8_205',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'keating',
      text: '渡鸦号，你们正在进入未校准段，这一步之后本舰会被登记成入侵。最后一次：退出作业区，停船，接受登舰。',
      next: 'c8_206'
    },
    c8_206: {
      id: 'c8_206',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '收到。本舰的答复已经发出，编号在那里。\n灰鸢，进。夜枭，掩护他的右手边。',
      next: 'c8_207'
    },
    c8_207: {
      id: 'c8_207',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢把推力推到底，缆桥在两千米外铺成一条很细的直线。夜枭横到它的右侧，把探测臂抬到水平位。',
      next: 'c8_208'
    },
    c8_208: {
      id: 'c8_208',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '截击机在九百米，正在压我的右后。我不挡它，我把它留在读数里。\n灰鸢，缆桥在你一点钟，还有四百米。',
      next: 'c8_c01'
    },
    c8_c01: {
      id: 'c8_c01',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '前面那架截击机先拉起来，从灰鸢头上过。第二架贴着下面走，把灰鸢逼在两条航迹中间，逼它减速。',
      next: 'c8_c02'
    },
    c8_c02: {
      id: 'c8_c02',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '灰鸢不减速。左肩抬起来，从上面那架下面钻过去，把下面那架留在我的尾后。\n夜枭，把我的航迹报给舰桥，别报我的位置。',
      next: 'c8_c03'
    },
    c8_c03: {
      id: 'c8_c03',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '航迹报了。下面那架在转回你的六点，距离一千一百米，它没有锁你。\n它不想打你，它想把你推离缆桥。',
      next: 'c8_c04'
    },
    c8_c04: {
      id: 'c8_c04',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: '那就不用跟它缠。灰鸢，把速度压到六成，让它超过你；超过以后再进。\n夜枭，把接缝的第三个点提前读出来。',
      next: 'c8_c05'
    },
    c8_c05: {
      id: 'c8_c05',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢松开推力，让两架截击机冲到前面去。它们在前面转了半圈才反应过来，缆桥已经在灰鸢的下面。',
      next: 'c8_c06'
    },
    c8_c06: {
      id: 'c8_c06',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '机库那边报来一句：两架机的外壳温差都还在限内，切割钳的钢丝没有松。地勤把这句话说完就闭了频道，没有再占线。',
      next: 'c8_c07'
    },
    c8_c07: {
      id: 'c8_c07',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '缆桥还剩两百米。灰鸢把两只脚收回去，把左肩对准下缆第六节，速度没有再加。夜枭的标点在它前面一格一格往前跳。',
      next: 'c8_209'
    },
    c8_209: {
      id: 'c8_209',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: "第一发落在灰鸢前方：一条曳光从舷侧掠过，落点离缆桥只有几十米。联合在用最外面的那一点余量警告。",
      next: 'c8_210'
    },
    c8_210: {
      id: 'c8_210',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'scarlet_voice',
      text: '赤垣拖船进场，走缆桥外端。我们只抓那一头，不碰你们。\n联合那边谁先对着拖船开火，我们就把这一笔记在矿区名下。',
      next: 'c8_211'
    },
    c8_211: {
      id: 'c8_211',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '赤垣的拖船从外缘斜切进来，船身上挂着两条报废的系缆。它没有瞄准谁，只是把船头顶向缆桥的另一端。',
      next: 'c8_212'
    },
    c8_212: {
      id: 'c8_212',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: '灰塔的校准船开始写了。它在记本舰、记灰鸢、记拖船，一条一条往上贴时间戳。\n环舱那边报：三号环的输出稳住，四十分钟从第一刀开始算。',
      next: 'c8_213'
    },
    c8_213: {
      id: 'c8_213',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '缆桥在前方展开成两条平行的黑线，每条都有小臂粗，绷得像琴弦。夜枭的标点落在下缆的第六节上，一闪一闪。',
      next: 'c8_choice_chain'
    },
    c8_choice_chain: {
      id: 'c8_choice_chain',
      kind: 'choice',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢把切割钳抬到缆桥上方。第一刀下在哪里，决定这一段是谁断的、断成什么样。',
      choices: [
        {
          id: 'c8_chain_clean',
          label: '只断缆桥：两刀都按夜枭的标点切，浮标本体一个都不碰。',
          next: 'c8_opt_chain_clean',
          reaction: '第一刀进得很干净。第二刀落在标点上，断头往回弹了半米，打在灰鸢左肩的外沿，把切割钳从挂钩上打掉了。\n钳子旋转着飘出去。缆桥断开，两枚浮标本体完好，只是不再说话。',
          effects: [
            {
              type: 'trust',
              who: 'vera',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_chain_cut_clean',
              value: true
            }
          ]
        },
        {
          id: 'c8_chain_board',
          label: '切缆桥，同时把最后一枚浮标的键板拆下来带走：断了，也给本舰留一件实物。',
          next: 'c8_opt_chain_board',
          reaction: '灰鸢切完第一刀就扑向浮标本体，用左机械手抠住键板边沿。第二刀改由夜枭的探测臂顶住缆头代切，臂尖被擦掉一块漆。\n键板卡进灰鸢的背包夹层。这一趟多花了四分钟。',
          effects: [
            {
              type: 'trust',
              who: 'vera',
              amount: -1
            },
            {
              type: 'flag',
              key: 'c8_chain_took_board',
              value: true
            }
          ]
        },
        {
          id: 'c8_chain_scarlet',
          label: '把这一刀让给赤垣的拖船：本舰只记录，最后谁的登记沾上这一段，由他们自己承担。',
          next: 'c8_opt_chain_scarlet',
          reaction: '拖船用两把系缆切刀从外端下手，切得慢，断口毛糙。本舰的接收机把整个过程记了下来，包括拖船自己的编号广播。\n缆桥断开，拖船横过船身，替本舰挡在联合的射线上。',
          effects: [
            {
              type: 'standing',
              who: 'scarlet',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_chain_scarlet_cut',
              value: true
            }
          ]
        }
      ]
    },
    c8_opt_chain_clean: {
      id: 'c8_opt_chain_clean',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '缆桥断开的那一秒，第七段剩下的两枚浮标一起暗掉。整段航道的冷光从上到下熄过去，像有人把一排灯逐个按灭。',
      next: 'c8_214'
    },
    c8_opt_chain_board: {
      id: 'c8_opt_chain_board',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '键板离槽的时候，浮标抖了一下。缆桥断开，第七段全暗，只有灰鸢背包里那块巴掌大的板子还在发微光。',
      next: 'c8_214'
    },
    c8_opt_chain_scarlet: {
      id: 'c8_opt_chain_scarlet',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '断口弹开的时候，拖船的外壳被扫出一道白痕。它没有退，横过船身把浮标挡在联合的射线上。第七段全暗。',
      next: 'c8_214'
    },
    c8_214: {
      id: 'c8_214',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '反馈脉冲顺着接收机的馈线倒灌回来。渡鸦号舷侧那块检修盖板被崩开，连带索挂在外面晃；机库里一名甲板工被震得摔在挂梯上，右肩抬不起来。',
      onEnter: [
        {
          type: 'flag',
          key: 'anchor_chain_broken_once',
          value: true
        },
        {
          type: 'flag',
          key: 'ship_damage_high',
          value: true
        }
      ],
      next: 'c8_215'
    },
    c8_215: {
      id: 'c8_215',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'system',
      text: '广播：第七段失联。接收机馈线温度超限，写功率保留。舰内气密正常，无泄漏。请各舱报人数。',
      next: 'c8_216'
    },
    c8_216: {
      id: 'c8_216',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vester',
      text: "记录：零点前十八分钟，第七段失效。人为操作导致失效，脚本尚未触发。\n好。这样一来，这条数据比原计划的干净。谢谢你们替我把变量动完。",
      next: 'c8_217'
    },
    c8_217: {
      id: 'c8_217',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: '他在把本舰写进对照组。反过来讲，他也把自己钉在了这条记录上：这一段是他先开始抽的，抽条序列带时间戳。\n铎兰，接收机还能写几次？',
      next: 'c8_218'
    },
    c8_218: {
      id: 'c8_218',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: '一次。馈线还在漏，得等它凉到能接上。\n我把话放在这儿：谁现在再往接收机上接一次电，这条线就断在舱里，我们就得靠看着星星回家。',
      next: 'c8_219'
    },
    c8_219: {
      id: 'c8_219',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '联合的两架截击机退到内线，没有再压上来。管制席在明码里报了一串编号，然后转成静默。赤垣的拖船停在断口外侧，船身横着挡在那里。',
      next: 'c8_220'
    },
    c8_220: {
      id: 'c8_220',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '断头扫在灰鸢的挂钩上，刮掉一条漆，挂钩本身没变形；切割钳没了。夜枭停在它右侧，探测臂收回去，臂尖缺了一块漆。',
      next: 'c8_221'
    },
    c8_221: {
      id: 'c8_221',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '灰鸢，你的挂钩还能用，钳子丢了。\n我们回去把接缝图拼完。十八分钟，够我把它写出来。',
      next: 'c8_222'
    },
    c8_222: {
      id: 'c8_222',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: "两机回收，机库立刻加压。全船听好：第七段登记已经解除，下一段改用本舰领航。\n各舱按刚才的表分工，十八分钟之后本舰进段。",
      next: 'c8_250'
    },
    c8_250: {
      id: 'c8_250',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '观景廊是这艘船上最冷也最空的地方，地板下面就是加强肋，走在上面有回声。窗框内侧结了一层薄霜，谁的手印按上去，过几秒就重新硬掉。',
      next: 'c8_251'
    },
    c8_251: {
      id: 'c8_251',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "热水台前排了四个人，队尾那个抱着一只空杯子和一床毯子，毯子是从医务舱借的，边上有一道洗不掉的碘色。热水流得细，接满一杯就往前挪一个人。",
      next: 'c8_252'
    },
    c8_252: {
      id: 'c8_252',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '机库那个摔下来的甲板工坐在长椅上，右胳膊吊在架子里，正用左手笨拙地把杯子往膝盖上挪。他旁边的人在替他按着杯盖。',
      next: 'c8_253'
    },
    c8_253: {
      id: 'c8_253',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "杯子搁桌上吧，用受伤的手端着累。洒出来的我擦。\n回头我给你找个夹子，杯子能卡在椅子边上，你就能一只手喝了。",
      next: 'c8_254'
    },
    c8_254: {
      id: 'c8_254',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '他从工具袋里摸出一只弹簧夹，试了两下，夹在长椅边缘，又把杯子放进去比对。杯子卡住了，只是歪着。',
      next: 'c8_255'
    },
    c8_255: {
      id: 'c8_255',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '诺瓦抱着一个压瘪的罐头从餐厅那头过来，罐头在腋下夹着，手里还拎着一把改锥。她走过来的时候先看了一眼窗外的灯，才看人。',
      next: 'c8_256'
    },
    c8_256: {
      id: 'c8_256',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: "补给那天剩的，甜水桃，铁皮压瘪了，里面没漏。在柜子里放了好些天，今天正好大家都在，开了分吧。\n谁有钳子？改锥撬不开这种罐。",
      next: 'c8_257'
    },
    c8_257: {
      id: 'c8_257',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '拿改锥撬罐头，你这是要把它撬到别人脸上去。\n钳子在……钳子没了。那把钳子刚才跟着灰鸢一起留在外面了。',
      next: 'c8_258'
    },
    c8_258: {
      id: 'c8_258',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '他摊了一下手，又用铜色那只手在工具袋里翻了半天，最后翻出一把没柄的旧扳手，把罐头顶在长椅横梁上，一点一点压着撬边。',
      next: 'c8_259'
    },
    c8_259: {
      id: 'c8_259',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '慢一点，别把它撬成两半。糖水洒在毯子上，今天晚上这一层就没法待人了。\n……撬开了。五块，块都挺大。',
      next: 'c8_260'
    },
    c8_260: {
      id: 'c8_260',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '罐头摆在长椅中间，五块桃子泡在糖水里，最上面那块是碎的，边角塌下去，泡得最久。几个人围着看，谁都没有先伸手。',
      next: 'c8_261'
    },
    c8_261: {
      id: 'c8_261',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '规矩先说好：一人一块，碎的也算一块。\n谁嫌碎谁闭嘴，别挑。',
      next: 'c8_262'
    },
    c8_262: {
      id: 'c8_262',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '薇拉蹲在长椅边上，先把每一块的大小看过一遍，然后拿了最小的那一块。她咬了一口，把勺子放回罐头里，没有评论味道。',
      next: 'c8_263'
    },
    c8_263: {
      id: 'c8_263',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '看，她挑最小的。\n薇拉，你每次先看一遍再拿，跟做检查一样。桃罐头不查岗，拿大的。',
      next: 'c8_264'
    },
    c8_264: {
      id: 'c8_264',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '我知道。\n……我记住了，下一罐拿大的。',
      next: 'c8_265'
    },
    c8_265: {
      id: 'c8_265',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '这话我可听见了。下一罐谁开我不知道，反正我记住了。\n行了，还剩最后一块碎的，谁都不肯要。先放着，放凉了更好吃。',
      next: 'c8_266'
    },
    c8_266: {
      id: 'c8_266',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '铎兰把罐头盖扣回去，压在长椅上，转身去忙别的：他要把那只旧靴子的鞋底粘回去，胶用的是机库的垫片胶，抹了厚厚一层。',
      next: 'c8_267'
    },
    c8_267: {
      id: 'c8_267',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '那个胶不对。垫片胶要压三十分钟才算粘住，你抹这么厚，它现在只是滑。\n标签第三行写着：适用温度不得低于零上五度。这一层现在不到五度。',
      next: 'c8_268'
    },
    c8_268: {
      id: 'c8_268',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "……我修了十四年船，今天让一个刚来半年的念标签。\n行，听你的。压三十分钟。压完再看看。真粘住了，你以后替我盯着养护时间。",
      next: 'c8_269'
    },
    c8_269: {
      id: 'c8_269',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '靴子被压在长椅腿下面，鞋跟朝上。铎兰坐回椅子上，把两只手都插进袖子里，隔着窗看外面的灯。',
      next: 'c8_270'
    },
    c8_270: {
      id: 'c8_270',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '来，猜一个。外面那六条船，谁先动？输的人明天去洗热水台。\n我押联合那两条截击机，它们已经松了一次队形。',
      next: 'c8_271'
    },
    c8_271: {
      id: 'c8_271',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '我押赤垣那条拖船。它刚才横过来的时候，主推一直没熄，手是热的。',
      next: 'c8_272'
    },
    c8_272: {
      id: 'c8_272',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '有道理，但你把顺序押反了：拖船已经在动了，它不算。\n算我赢。热水台归你。',
      next: 'c8_273'
    },
    c8_273: {
      id: 'c8_273',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '窗外那排灯确实有人先动：赤垣的拖船把船头又扭了两度，然后停住。诺瓦在她的本子上画了一道，没有写名字。',
      next: 'c8_274'
    },
    c8_274: {
      id: 'c8_274',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '第七段七枚浮标，现在全暗。\n我数了三遍，三遍都到七就停了。这个没什么可数的，我还是要数。',
      next: 'c8_275'
    },
    c8_275: {
      id: 'c8_275',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '你这是无聊。无聊是对的，人闲着才像人。\n真到了每一分钟都有事干的时候，你就该想家了。',
      next: 'c8_276'
    },
    c8_276: {
      id: 'c8_276',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '插一句工作，说完就不说了。校准船那边每一分钟都在写记录，本舰的位置、姿态、发射或者不发射，它都收。\n所以这十几分钟里，我们的每一次动作，都会跟着这条数据一起被读。',
      next: 'c8_277'
    },
    c8_277: {
      id: 'c8_277',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '那正好。让它读。\n读出来的是：这船上的人刚才在分一罐桃子，而且分了五分钟。',
      next: 'c8_278'
    },
    c8_278: {
      id: 'c8_278',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '廊道尽头，伊芙娜端着杯子站了一会儿。她没有坐下，看了一眼表，又看了一眼窗外那六条船的位置，杯子里的水还没凉就放下了。',
      next: 'c8_279'
    },
    c8_279: {
      id: 'c8_279',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '还有十二分钟。机库要人，两机的地面准备和挂件检查都得做完。\n薇拉，你的那份接缝图早点交，我要在进段之前看到它落成三行。',
      next: 'c8_280'
    },
    c8_280: {
      id: 'c8_280',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '伊芙娜走得很快，靴底在这种地板上本来会响，她压着脚跟走，所以只响了一半。',
      next: 'c8_281'
    },
    c8_281: {
      id: 'c8_281',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '廊道里的人陆续散了。有人去机库，有人回住舱拿厚衣服，长椅上剩下那只罐头和两床毯子。',
      next: 'c8_g01'
    },
    c8_g01: {
      id: 'c8_g01',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "靠墙那根暖气立管上搭着三只袜子和一副手套，都是刚洗的，袜口和手套上都留着各自缝的线记。管子烫手，袜子下面滴的水在踢脚线上积成一小条。",
      next: 'c8_g02'
    },
    c8_g02: {
      id: 'c8_g02',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '热水台前面，一个地勤端着两只杯子占着位置，后面的人等得不耐烦，用手指敲了敲台面。前面那个说：两只都是别人的，他替人接。',
      next: 'c8_g03'
    },
    c8_g03: {
      id: 'c8_g03',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "替人接也算排队，但你得说清楚替谁接。\n接好就给他送过去，后面的人也要接水。",
      next: 'c8_g04'
    },
    c8_g04: {
      id: 'c8_g04',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '那个地勤报了一个名字，后面排队的人就散了火，把杯子往前挪了挪。水开了，蒸汽糊了半面窗。',
      next: 'c8_g05'
    },
    c8_g05: {
      id: 'c8_g05',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '吊着胳膊的甲板工坐到薇拉对面，用左手在她头发的高度比了一下。他比得不准，但意思很清楚：那边长出来一截。',
      next: 'c8_g06'
    },
    c8_g06: {
      id: 'c8_g06',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '自己剪的。四十天一次，用那把量尺的小剪子。\n左边这一绺是留的。它挡不到视线，还能让我一眼看出来今天有没有剪歪。',
      next: 'c8_g07'
    },
    c8_g07: {
      id: 'c8_g07',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '后面那一块你看不见，我来给你修平，两分钟。\n……不愿意也没事，我不动你最上面那层。',
      next: 'c8_g08'
    },
    c8_g08: {
      id: 'c8_g08',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '不用。谢谢。\n让别人拿着剪刀站在我后面这件事，我做不了。你就当我这句是说明。',
      next: 'c8_g09'
    },
    c8_g09: {
      id: 'c8_g09',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '行，说明收到。\n镜子给你，盥洗室那面，拿回来记得挂回去，不然明天早上又是全体对着管子刷牙。',
      next: 'c8_g10'
    },
    c8_g10: {
      id: 'c8_g10',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '薇拉拿着那面小镜子侧过身，对着窗玻璃的反光看了看后脑那一块。她把镜子还回去，说了一声"记下来了"。',
      next: 'c8_g11'
    },
    c8_g11: {
      id: 'c8_g11',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '吊着胳膊的甲板工把左手放到膝盖上，摊开三根手指，又收回去一根。他冲薇拉抬了抬下巴，意思是来一局。',
      next: 'c8_g12'
    },
    c8_g12: {
      id: 'c8_g12',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '规矩很简单：两个人同时出手指，谁报的数正好等于两根手指加起来，谁赢。薇拉前四局都报错了。',
      next: 'c8_g13'
    },
    c8_g13: {
      id: 'c8_g13',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '等一下。你出三根的时候，肩膀会先动。\n再来。',
      next: 'c8_g14'
    },
    c8_g14: {
      id: 'c8_g14',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: "她又输了两局，然后赢了四局。甲板工气得用左手拍膝盖，拍到自己疼，笑得倒抽气。诺瓦在旁边记了个数，被问起时，她把纸翻过去，说还差最后一局再算。",
      next: 'c8_x20'
    },
    c8_x20: {
      id: 'c8_x20',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "廊道尽头的计时器报了一句：距进段十三分钟。大家按原定的轮休表继续等，热水队伍又向前挪了一格。",
      next: 'c8_g15'
    },
    c8_g15: {
      id: 'c8_g15',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "廊道尽头的扬声器被人打开了，有人接上播放器，放起一盘旧录音带。带子拉长过，第一首歌从头到尾都慢了半拍，副歌那两句干脆糊在一起。",
      next: 'c8_g16'
    },
    c8_g16: {
      id: 'c8_g16',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '又是这盘。上一任通讯兵留下的，谁都不肯扔，谁都不肯修。\n听久了就习惯了，慢半拍也挺好，正好能跟着唱。',
      next: 'c8_g17'
    },
    c8_g17: {
      id: 'c8_g17',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '它的走带速度是标准的，音高偏低是因为压带轮磨损。\n换个压带轮就对了。',
      next: 'c8_g18'
    },
    c8_g18: {
      id: 'c8_g18',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '你看，我就说别修。\n她要是真给它换上了，这船上就少了一盘能跟着唱的带子。',
      next: 'c8_g19'
    },
    c8_g19: {
      id: 'c8_g19',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '第二首歌放到一半，扬声器被关掉了：舰桥要用这条线传话。廊道里剩下水管的滴答声，和那面结了霜的窗。',
      next: 'c8_282'
    },
    c8_282: {
      id: 'c8_282',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '薇拉没有走。她抱着罐头坐到最里面那张长椅上，那扇窗对着第七段的方向，玻璃上有一道从里到外的划痕。',
      next: 'c8_283'
    },
    c8_283: {
      id: 'c8_283',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她把罐头盖掀开，用勺子把最后那一块碎的挖出来，直接吃了。糖水从勺子边上滴了一滴在她手背的白胶布上。',
      next: 'c8_284'
    },
    c8_284: {
      id: 'c8_284',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '这块是我的。\n他们都不肯要，我要。',
      next: 'c8_285'
    },
    c8_285: {
      id: 'c8_285',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '你还想要什么？不用挑小的说。',
      next: 'c8_286'
    },
    c8_286: {
      id: 'c8_286',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'vera',
      text: '我要飞进去。\n探测那一趟归我。理由我在会议室里说过了，那三条都成立，但我不靠它们站住这一句。',
      next: 'c8_287'
    },
    c8_287: {
      id: 'c8_287',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她把勺子搁在罐头边上，两只手放在膝盖上，等一个答复。窗外第七段的方向一片全黑，只有更远处的锚点在亮。',
      next: 'c8_288'
    },
    c8_288: {
      id: 'c8_288',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '我在会议室里已经听见了。到了机库，你把这句话当着地勤再说一遍，让签字的人听见。',
      next: 'c8_289'
    },
    c8_289: {
      id: 'c8_289',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '好。\n那我还要一样东西：回来的时候，这张长椅归我。靠窗这半张，第三节。',
      next: 'c8_290'
    },
    c8_290: {
      id: 'c8_290',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '这半张现在是铎兰粘鞋的地方。',
      next: 'c8_291'
    },
    c8_291: {
      id: 'c8_291',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '鞋他明天就穿走了。\n我记下来了：第三节，靠窗，回来以后归我。',
      next: 'c8_292'
    },
    c8_292: {
      id: 'c8_292',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她伸手把你那只杯子的杯沿转了一圈，看了一眼缺口，然后把自己的杯子换过去。两只有豁口的杯子在她手里对着看了一遍。',
      next: 'c8_293'
    },
    c8_293: {
      id: 'c8_293',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "你的杯口有豁。喝的时候会磕到牙。\n换个新的吧，柜子里有。",
      next: 'c8_294'
    },
    c8_294: {
      id: 'c8_294',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她把自己那只完好的杯子推过来，把有豁的那只收在膝盖上，两只手圈着，像是在替它挡住什么。',
      next: 'c8_295'
    },
    c8_295: {
      id: 'c8_295',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '窗外那六条船的航行灯在玻璃上排成两行。薇拉脖子上那只秒表从领口里滑出来一点，指针停在原来的地方。',
      next: 'c8_296'
    },
    c8_296: {
      id: 'c8_296',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '它一直停着。我知道它停着，我每天都看它一眼，确定它没有自己走。\n等哪天我想让它走，我自己上发条。',
      next: 'c8_297'
    },
    c8_297: {
      id: 'c8_297',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: "还有一件事：进段以后接缝对不上，马上喊停。\n我核算需要三秒，算完就答复你。",
      next: 'c8_298'
    },
    c8_298: {
      id: 'c8_298',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '三秒我等你。三秒以后我按我的判断来。',
      next: 'c8_299'
    },
    c8_299: {
      id: 'c8_299',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '够用。\n走吧，机库叫人了。',
      next: 'c8_300'
    },
    c8_300: {
      id: 'c8_300',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '广播：第三小队，两机地面准备。机库加压完成，挂件复检已在做，距进段五分钟。',
      next: 'c8_301'
    },
    c8_301: {
      id: 'c8_301',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '机库重新加压以后，冷白维护灯一盏盏亮起来，把地面上的水痕照得发亮。灰鸢停在二号位，左肩挂钩空着；夜枭停在三号位，两片侦测翼正在慢慢展开。\n机体检查在等的那十几分钟里已经做完了，剩下的项目都要当着飞行员的面过一遍。',
      next: 'c8_302'
    },
    c8_302: {
      id: 'c8_302',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '地勤两个人爬上夜枭的背，把两片侦测翼的锁扣一个一个过一遍。机库主管在下面报数，报到第四个的时候，上面回了一句"卡"，再动了一下，才继续。',
      next: 'c8_303'
    },
    c8_303: {
      id: 'c8_303',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '探测臂的三块镜片用软布擦了两遍，擦到第三遍的时候，薇拉要求停下来：她要看一眼第二块镜片边上那道旧碰伤还在不在。它还在。',
      next: 'c8_304'
    },
    c8_304: {
      id: 'c8_304',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "旧伤不影响长焦，只影响红外，读数里会有一道固定的偏。偏移值写进当班记录，明天交接时一并说明。\n右腿外侧那个空壳照旧，谁都不许往上装东西。",
      next: 'c8_305'
    },
    c8_305: {
      id: 'c8_305',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '后座的数据柜被整块吊下来，换上一块清空的记录匣。两个人抬着走过机库，匣子的边角在灯下反光。',
      next: 'c8_306'
    },
    c8_306: {
      id: 'c8_306',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '灰鸢那边，两具短程拦截器挂上左肩下方的挂点，弹药检查员报了一串数，写完签字。左肩外沿那道浅痕他看了一眼，没有提。',
      next: 'c8_307'
    },
    c8_307: {
      id: 'c8_307',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '机库角落的加热器前面，有人架了一口锅。锅是从厨房借的，底上有一圈黑，汤是面条加罐头菜，香味在冷空气里散得很慢。',
      next: 'c8_308'
    },
    c8_308: {
      id: 'c8_308',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '排队，一人一勺，先给爬上爬下的。\n谁要是站在锅边上吃，我就把他算成第二个爬上爬下的。',
      next: 'c8_309'
    },
    c8_309: {
      id: 'c8_309',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '箱子被搬过来当桌子，工具箱也被搬过来垫在下面。盖子上的漆被擦出一块亮痕，锁着的那一格朝里。',
      next: 'c8_310'
    },
    c8_310: {
      id: 'c8_310',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '工具箱当饭桌，铎兰，这算不算违规？你以前可是连水杯都不许往上面放。',
      next: 'c8_311'
    },
    c8_311: {
      id: 'c8_311',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '这箱子现在不归我管。归谁管你问谁，别问我。\n我只负责吃。',
      next: 'c8_312'
    },
    c8_312: {
      id: 'c8_312',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '薇拉端着碗站在锅边，听了这句，把碗从箱盖上挪到膝盖上，蹲下来吃。她吃得很快，汤没剩下。',
      next: 'c8_313'
    },
    c8_313: {
      id: 'c8_313',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "箱盖还得放碗，你坐边上一点。\n……算了，你蹲着吃也行，汤碗往这边放，锁孔进了油，明天开箱又得费劲。",
      next: 'c8_314'
    },
    c8_314: {
      id: 'c8_314',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '不会滴。碗口朝里，离锁孔十四厘米。\n……我知道这句话多余。',
      next: 'c8_315'
    },
    c8_315: {
      id: 'c8_315',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '不多余，你这句话是今天最好笑的一句。\n地勤，你们听见没有，这船上有人蹲着吃饭还量距离。',
      next: 'c8_316'
    },
    c8_316: {
      id: 'c8_316',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "机库里有人笑了一声，接着有人跟着笑。薇拉抬起头看了看周围，听见他们还在说刚才的牌局，嘴角也松了下来，继续吃下一口。",
      next: 'c8_h01'
    },
    c8_h01: {
      id: 'c8_h01',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '吃完以后，两个地勤把一桶漆从加热的水里捞出来。三号位地面上的编号上一次涂得薄，边上已经磨出底色，他们要趁地面还空着补一遍。',
      next: 'c8_h02'
    },
    c8_h02: {
      id: 'c8_h02',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '数字的漏板是硬纸做的，边角泡过水，那个 3 的圆弧上缺了一小块。两个人对着缺口商量：照原样补，还是把它补圆。',
      next: 'c8_h03'
    },
    c8_h03: {
      id: 'c8_h03',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "补圆。这个 3 本来就是手画的，画它的人早就不在这条船上了，你们照缺口补，反而画得跟它不像。\n漆调稠一点，这地方经常拖轮子，容易磨。",
      next: 'c8_h04'
    },
    c8_h04: {
      id: 'c8_h04',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '刷子递到薇拉手里的时候，她先把袖子往上卷了两圈，再蹲下去，用刷尖沿着刮出来的旧痕慢慢走了一圈。',
      next: 'c8_h05'
    },
    c8_h05: {
      id: 'c8_h05',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '歪了一点五厘米。重画一遍要等这一层干。\n要不要等？',
      next: 'c8_h06'
    },
    c8_h06: {
      id: 'c8_h06',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '不等。手写的 3 就该歪一点五厘米。\n你要是想练，等回来以后慢慢练，那时候地面归你管。',
      next: 'c8_h07'
    },
    c8_h07: {
      id: 'c8_h07',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '说到回来以后——工具板上那把内六角还挂着，标签是空的。谁用完没写名字？\n我押是刚才抱杯子那位，赌一锅碗。',
      next: 'c8_h08'
    },
    c8_h08: {
      id: 'c8_h08',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '工具板前面，一个地勤把内六角取下来看了看，又挂回去，撕下一张标签写上自己的名字。笔是绑在板子上的，绳子只有二十厘米，他写了三遍才写完。',
      next: 'c8_h09'
    },
    c8_h09: {
      id: 'c8_h09',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: "……不算。他没拿去用。\n行，我自己洗锅。薇拉，你擦干，拿到旁边擦，离刚刷的漆远一点。",
      next: 'c8_h10'
    },
    c8_h10: {
      id: 'c8_h10',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '洗锅的地方在机库角上，水管出来的水是冷的，锅底那圈黑得用钢丝球。两个人一个洗一个擦，中间隔着一只桶和一句关于水温的争论。',
      next: 'c8_h11'
    },
    c8_h11: {
      id: 'c8_h11',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '这锅是厨房借的，还回去要是不干净，下一顿就没有锅。\n所以我洗两遍。你擦的时候把边上一圈也擦到，上一回那圈留了一道印子。',
      next: 'c8_h12'
    },
    c8_h12: {
      id: 'c8_h12',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "上一回轮到隔壁班。\n……边上一圈我擦三遍。",
      next: 'c8_h13'
    },
    c8_h13: {
      id: 'c8_h13',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '诺瓦笑到一半，抬头看见三号位那边的地勤已经在收梯子。她把布拧干搭在锅沿上，没有再说什么。',
      next: 'c8_h15'
    },
    c8_h15: {
      id: 'c8_h15',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "还锅的时候，伙房的人从箱底翻出一张面票，票背面上写着日期，日期就是今天。伙房的人举着票问了一圈，最后把它夹在值班本上，等领票的人回来。",
      next: 'c8_h16'
    },
    c8_h16: {
      id: 'c8_h16',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '哦，那碗面是给寿星的。\n谁过生日自己站出来，别让我一个一个问，我这人问话很烦。',
      next: 'c8_h17'
    },
    c8_h17: {
      id: 'c8_h17',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '一个舱面兵把手举了半截又放下。他说本来不打算讲，讲出来就得请客，而这船上现在没有能请的东西。',
      next: 'c8_h18'
    },
    c8_h18: {
      id: 'c8_h18',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '没东西请，那就欠一顿。欠一顿也是正经的一顿，只要有人记着。\n找个能立起来的东西，插上。',
      next: 'c8_h19'
    },
    c8_h19: {
      id: 'c8_h19',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "他们从加热器旁边找来一根短短的焊条，用胶带把它裹在饼干上，立在工具箱盖上。最后找来一盏维护灯，从侧面照过去，影子拉得很长。",
      next: 'c8_h20'
    },
    c8_h20: {
      id: 'c8_h20',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '船上的规矩，寿星不用讲话，吹一下，大家吃饼干。\n谁想讲两句，可以，讲完饼干就归别人。',
      next: 'c8_h21'
    },
    c8_h21: {
      id: 'c8_h21',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '祝词要说什么？我只有报告体的句子。\n比如说：祝你下一个考核周期顺利。',
      next: 'c8_h22'
    },
    c8_h22: {
      id: 'c8_h22',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '这句就挺好。我们这儿平时更省事：谁过生日，谁的饼干最大，就这样。\n灯吹不灭，影子就当蜡烛。好了，散了，锅还了，人该上机了。',
      next: 'c8_h14'
    },
    c8_h14: {
      id: 'c8_h14',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '锅还了，灯留着。\n人都到齐了，剩下的时间归手续：检查单、出动表、签字。签完就各上各的位子。',
      next: 'c8_317'
    },
    c8_317: {
      id: 'c8_317',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '吃完，箱子往外挪。薇拉站起来，走到三号位前面，机库主管正拿着夹板等最后一个签字。',
      next: 'c8_318'
    },
    c8_318: {
      id: 'c8_318',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '主管，我补一句。探测那一趟，我飞。理由三条已经报给舰桥；如果你要按编制签，就签长机加一号僚机，二号机跟着长机走。\n编制怎么写我都签。这一趟我自己飞。',
      next: 'c8_319'
    },
    c8_319: {
      id: 'c8_319',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "夹板停在半空。两个地勤本来就蹲在起落架旁边，这会儿都抬起了头。压缩机还在响，地勤的目光从她手上的笔移到夹板上。",
      next: 'c8_320'
    },
    c8_320: {
      id: 'c8_320',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '主管看了你一眼。签字的笔在他手里转了一圈，笔帽没有打开。',
      next: 'c8_choice_wing'
    },
    c8_choice_wing: {
      id: 'c8_choice_wing',
      kind: 'choice',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你的名字要写在出动表的第一行。探测位给谁，由你这一笔定。',
      choices: [
        {
          id: 'c8_wing_vera_probe',
          label: '探测位给薇拉：夜枭进内圈量接缝，灰鸢在外圈掩护，接缝图由她交。',
          next: 'c8_opt_wing_vera',
          reaction: '她在出动表的"探测"一栏写下自己的编号，写完把笔还给主管，笔帽按上。\n地勤把清单翻到下一页，开始念夜枭的挂件。她一条一条答，答得比平时快。',
          effects: [
            {
              type: 'trust',
              who: 'vera',
              amount: 2
            },
            {
              type: 'flag',
              key: 'c8_wing_vera_probe',
              value: true
            }
          ]
        },
        {
          id: 'c8_wing_swap',
          label: '换位：灰鸢飞探测，夜枭掩护。探测臂的读数会差一档，进段窗口从四十六分钟缩到二十。',
          next: 'c8_opt_wing_swap',
          reaction: '她签了字，没有争。签完她问了一句：接缝图精度差多少。你答：两米。她说：那第二圈不要飞，飞了也写不准。\n她把这一句写进了出动表的备注栏。',
          effects: [
            {
              type: 'trust',
              who: 'vera',
              amount: -1
            },
            {
              type: 'flag',
              key: 'c8_wing_swap',
              value: true
            }
          ]
        },
        {
          id: 'c8_wing_delegate',
          label: '探测位给她，最后一步也给她：第二圈要不要进，由她在座舱里决定，舰桥只提供数据。',
          next: 'c8_opt_wing_delegate',
          reaction: '主管把出动表翻回来，问了一句谁担这个责任。你答：她担她那一趟，我担我这一趟，签两个名字。\n薇拉把自己的编号写在第二行，又在后面加了四个字：自行判断。',
          effects: [
            {
              type: 'trust',
              who: 'vera',
              amount: 2
            },
            {
              type: 'flag',
              key: 'c8_wing_vera_go',
              value: true
            }
          ]
        }
      ]
    },
    c8_opt_wing_vera: {
      id: 'c8_opt_wing_vera',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '出动表抄送舰桥。三分钟后，伊芙娜的批复回来了两个字：照办。后面跟着一行时间。',
      next: 'c8_321'
    },
    c8_opt_wing_swap: {
      id: 'c8_opt_wing_swap',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '出动表抄送舰桥。伊芙娜的批复回来后，舰桥把进段航线改成单圈通过，接收机的极化参数也重排了一遍。',
      next: 'c8_321'
    },
    c8_opt_wing_delegate: {
      id: 'c8_opt_wing_delegate',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '出动表上签了两个名字，抄送舰桥。伊芙娜批了四个字：权限照给。后面多画了一道横线。',
      next: 'c8_321'
    },
    c8_321: {
      id: 'c8_321',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '座舱盖打开的时候，机库里的维护灯正好转到最亮的一档。两个人各自爬梯子上机，地勤在下面对了一遍氧气和束带。',
      next: 'c8_322'
    },
    c8_322: {
      id: 'c8_322',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '都听好。本舰进段只走一趟，回来的时候两台机都在这三个位子上，谁的位子空着，我就在谁的位置上站到天亮。\n行了，干活。',
      next: 'c8_323'
    },
    c8_323: {
      id: 'c8_323',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '机库开始泄压，门口的警示灯从琥珀转成红。地勤撤到隔舱里，隔着观察窗比了个手势，两架机同时松开刹车。',
      next: 'c8_350'
    },
    c8_350: {
      id: 'c8_350',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '两架机从三号位前面弹出去，机库的灯只剩一条。灰鸢向左压，夜枭向右展开，渡鸦号的船身随后从它们中间压过去，三号环的光在船尾拖出一条窄线。',
      next: 'c8_351'
    },
    c8_351: {
      id: 'c8_351',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第七段里一片黑：七枚浮标都不亮，只剩金属弧面反着沧澜的白光。这一段的航道图上，本舰现在是一条没有路标也没有登记的线。',
      next: 'c8_352'
    },
    c8_352: {
      id: 'c8_352',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '夜枭，按出动表的顺序进场。第一圈只量，不要贴到接缝上。灰鸢在外线挡联合。\n两机都在频道里，本舰不喊第二次。',
      next: 'c8_353'
    },
    c8_353: {
      id: 'c8_353',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      variants: [
        {
          requires: ['c8_wing_vera_probe'],
          text: '夜枭第一个进段。它把两片侦测翼展开到最大，探测臂贴着浮标的外弧走，三块镜片一路扫过去。灰鸢留在它外侧，把敌我识别关掉，只留被动接收。'
        },
        {
          requires: ['c8_wing_swap'],
          text: '灰鸢第一个进段。它没有长焦镜，读接缝靠的是被动测距和一张拼出来的图，每读一段都得停下来对一次。夜枭留在它外侧，探测臂替它补信号。'
        },
        {
          requires: ['c8_wing_vera_go'],
          text: '夜枭第一个进段，两片侦测翼展开到最大。它在接缝边上没有停，直接从第二枚浮标的位置切进去，把第一圈的读数一口气拉完。灰鸢跟在它外侧，替它把联合的截击机挡在视界外。'
        }
      ],
      text: '两架机按顺序进段，一前一后，探测臂和被动接收交替开机。舰桥的接收机把每一段读数接过去，一行一行往接缝图上贴。',
      next: 'c8_354'
    },
    c8_354: {
      id: 'c8_354',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '接缝读数到手：双缆断口偏了三十厘米，剩下的两点间距比图上短七百米。\n本舰写的时候要用这两个点做基准，不然后半段会写偏。',
      next: 'c8_355'
    },
    c8_355: {
      id: 'c8_355',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: "联合的两条护航舰在压进来，展开拦阻队形，封住了内侧通路。赤垣那边三条货船把外缘围成一条弧，灰塔的校准船第一次开了主推。\n三家都在往这一段里挤，谁都想在写完之后第一个站到浮标旁边。",
      next: 'c8_356'
    },
    c8_356: {
      id: 'c8_356',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '校准船的主推开得很轻，只把船头扭了十一度。它不开航行灯，也不发话，只是把自己挪到这一段的外侧，像是在等一个位置。',
      next: 'c8_357'
    },
    c8_357: {
      id: 'c8_357',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vester',
      text: '渡鸦号，你们现在做的事，会让这条数据多出一个干预项。写进去的每一行，都会挂上你们的呼号。\n我建议你们把接缝图交给我，让我来写：那样它至少是一条完整的记录。',
      next: 'c8_358'
    },
    c8_358: {
      id: 'c8_358',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: "先完成写入。他的报告以后再处理。\n接收机准备，伊芙娜进接收舱。",
      next: 'c8_359'
    },
    c8_359: {
      id: 'c8_359',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '接收舱在舰桥后面，一扇窄门隔开。伊芙娜把左肩的袖标重新别上，坐进那张带束带的椅子上，把领口拉开一寸。',
      next: 'c8_360'
    },
    c8_360: {
      id: 'c8_360',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '接口挂上以后，我会先报三遍状态。第三遍报完，接口自己会锁，那时候你们喊我我也听不见。\n时间按接收机的来，不按我的来。',
      next: 'c8_361'
    },
    c8_361: {
      id: 'c8_361',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第一遍，第二遍，第三遍。第三遍的尾音落下以后，舱门上的灯从琥珀转成蓝，接口锁上。她在椅子里的肩膀往下沉了半寸。',
      next: 'c8_362'
    },
    c8_362: {
      id: 'c8_362',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'system',
      text: '广播：接收机进入写序列。剩余写窗口二十八分钟。三号主环输出七成，馈线温度上限告警。全舰停止非必要用电。',
      next: 'c8_363'
    },
    c8_363: {
      id: 'c8_363',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: "联合的截击机第二次压上来，这一次压得很低，从灰鸢下面过。它们正对着本舰背部的校时接收天线下降。",
      next: 'c8_364'
    },
    c8_364: {
      id: 'c8_364',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '灰鸢压低，从它们中间切进去，把它们的射界挡在船身外面。\n夜枭不要跟上来，你留在接缝上，读数不能断。',
      next: 'c8_365'
    },
    c8_365: {
      id: 'c8_365',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢横切进去，两架截击机被迫分开。一架从它下面穿过去，一发打在本舰背上的天线座旁边，外壳被削掉一块，天线没有歪。',
      next: 'c8_c10'
    },
    c8_c10: {
      id: 'c8_c10',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '被分开的那两架没有走。它们从灰鸢的两侧重新拉起来，一左一右，把灰鸢夹在中间，逼它与本舰拉开。',
      next: 'c8_c11'
    },
    c8_c11: {
      id: 'c8_c11',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '灰鸢不跟它们打。往本舰的背上靠，把机身压在天线和它们中间。\n它们要打天线，就得先穿过我。',
      next: 'c8_c12'
    },
    c8_c12: {
      id: 'c8_c12',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢贴着本舰的背鳍飞，两侧的截击机把距离压到六百米，谁都没有开第二发。写序列的提示音在频道里一格一格往前走。',
      next: 'c8_c13'
    },
    c8_c13: {
      id: 'c8_c13',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'keating',
      text: '渡鸦号，你们背上的那根天线是本舰唯一的写入口。它现在在开火线上。\n停写，我可以让截击机退出去。这是最后一次。',
      next: 'c8_c14'
    },
    c8_c14: {
      id: 'c8_c14',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '收到。写序列不停。\n灰鸢，你的位置很好，再撑一分四十秒。',
      next: 'c8_c15'
    },
    c8_c15: {
      id: 'c8_c15',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '一分四十秒里，两架截击机做了三次切入，灰鸢做了三次同样的动作：把机身横在天线前面，让对方先撞上自己。第三次切进来的时候，联合那架先退了出去。',
      next: 'c8_c16'
    },
    c8_c16: {
      id: 'c8_c16',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: "联合那架退出去了，另一架还在我这边。识别到干扰吊舱，正在发射干扰信号。\n它在压我的信号，我能顶住，但读数会有一道缺口。",
      next: 'c8_c17'
    },
    c8_c17: {
      id: 'c8_c17',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '干扰在接缝图上撕出一道空白，宽到能吞掉半个浮标。薇拉把探测臂转开，改用被动接收，把那道缺口交给舰桥去补。',
      next: 'c8_c18'
    },
    c8_c18: {
      id: 'c8_c18',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '缺口补上了。用旧图加刚才那三个点，误差在允许范围内。\n写你们的，我这边不换位置。',
      next: 'c8_c19'
    },
    c8_c19: {
      id: 'c8_c19',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '本舰背上的接收天线一直在转。转到位的时候，第七段第一枚浮标的旧校时被擦掉，新的数字压上去，浮标本体的金属壳轻轻震了一下。',
      next: 'c8_366'
    },
    c8_366: {
      id: 'c8_366',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '接缝读数没断。天线座那零点二的偏移，我补回来了。\n灰鸢，你的右后有个影子，别回头，往我这边来。',
      next: 'c8_367'
    },
    c8_367: {
      id: 'c8_367',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '赤垣的拖船横过来，把联合的第二发挡在了自己外面。它的外壳上又添了一道白痕，船身晃了一下，仍旧没有还击。',
      next: 'c8_368'
    },
    c8_368: {
      id: 'c8_368',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'scarlet_voice',
      text: '拖船报告：外壳破了一个舱，人都在。我们还能挡两次，第三次你们自己看着办。\n写你们的。',
      next: 'c8_369'
    },
    c8_369: {
      id: 'c8_369',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '写序列在接收机的提示音里一格一格往前走。接缝图上的两条细线一道一道对上，后半段还没合拢。',
      next: 'c8_370'
    },
    c8_370: {
      id: 'c8_370',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: '三号环到顶了。衬里温度在走，四十分钟以后你们要是不回来，我就得把它断了，断了以后本舰没有回头路。\n我在下面，别管我。',
      next: 'c8_371'
    },
    c8_371: {
      id: 'c8_371',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '接缝合拢到最后一节的时候，校准船的天线全部转了过来。它开始写自己的校准序列，两组写入在同一个频道上撞到一起。',
      next: 'c8_372'
    },
    c8_372: {
      id: 'c8_372',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'nova',
      text: '他的校准在抢后半段，我们的写在前面领先四百毫秒。谁先落到最后一个浮标上，这一段就记谁的时间。\n环舱那边还能多给一点功率吗？',
      next: 'c8_373'
    },
    c8_373: {
      id: 'c8_373',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: '给不了。馈线完了，再来就是断。\n要抢就把最后那节写快一点，别跟我这儿要功率。',
      next: 'c8_374'
    },
    c8_374: {
      id: 'c8_374',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '夜枭，最后一节你来读，读到就报，不要等图。\n灰鸢压住右边那架，别让它看见天线。',
      next: 'c8_375'
    },
    c8_375: {
      id: 'c8_375',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vera',
      text: '读到了。最后一个浮标的旧校时差十一毫秒，比图上小。\n报给接收机——现在。',
      next: 'c8_376'
    },
    c8_376: {
      id: 'c8_376',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'system',
      text: '广播：写序列完成，剩余写窗口四十秒。接收机进入冻结，四十秒后钳位。',
      next: 'c8_377'
    },
    c8_377: {
      id: 'c8_377',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第七段的第一枚浮标亮起来，接着是第二枚。它们亮得比原来慢，颜色也浅一些——写进去的是本舰自己的校时。',
      next: 'c8_378'
    },
    c8_378: {
      id: 'c8_378',
      kind: 'dialogue',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '通道打开以后，三方同时往这一段里进。联合的两条护航舰走内线，赤垣的货船贴着外缘，校准船落在最外侧。渡鸦号带着两架机走到第七段的中段，前方就是锚地的核心区。',
      next: 'c8_choice_arrive'
    },
    c8_choice_arrive: {
      id: 'c8_choice_arrive',
      kind: 'choice',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '接收机把这一次的校时握在四十秒的钳位里。四十秒之后，它会按现在挂在舰上的登记发出去。三方都在等你这一句。',
      choices: [
        {
          id: 'c8_arrive_concord',
          label: '按联合登记发出去：校时进管制席的作业序列，回收条款同时归档。',
          next: 'out_ch8_concord',
          reaction: '管制席的序列号在最后十秒挤进接收机，本舰被标成一艘执行中的作业船。基廷那边的频道彻底静了。\n四十秒到，第七段的校时挂上联合的登记。',
          effects: [
            {
              type: 'standing',
              who: 'concord',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_arrive_concord',
              value: true
            }
          ]
        },
        {
          id: 'c8_arrive_scarlet',
          label: '按矿区登记发出去：校时挂到外环调度席，这一段以后由矿站自己维护。',
          next: 'out_ch8_scarlet',
          reaction: '外环调度席的登记号在第二十九秒进来，矿区那三座接收机同时回了一次校时。拖船把破掉的舱转过去，挡住那一侧的灯。\n四十秒到，第七段挂上矿区的登记。',
          effects: [
            {
              type: 'standing',
              who: 'scarlet',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_arrive_scarlet',
              value: true
            }
          ],
          requires: ['c8_vote_scarlet']
        },
        {
          id: 'c8_arrive_spire',
          label: '按公开登记发出去：整条重写署名"校准对照"，让这次失效变成一份公开的记录。',
          next: 'out_ch8_spire',
          reaction: '公开件在第三十一秒推上三家的公开队列，署名栏是诺瓦的编号，"附件"一栏填了这一段的重写全过程。\n四十秒到，第七段挂上的是一份谁都能读的记录。',
          effects: [
            {
              type: 'standing',
              who: 'spire',
              amount: 1
            },
            {
              type: 'flag',
              key: 'c8_arrive_spire',
              value: true
            }
          ],
          requires: ['c8_vote_spire']
        },
        {
          id: 'c8_arrive_ship',
          label: '不进任何登记：校时留在本舰的核心里，只对本舰亮，谁要谈就来船边谈。',
          next: 'out_ch8_neutral',
          reaction: "接收机在最后的十秒里撤掉了对外登记，只把校时写进本舰自己的接收机。第七段亮着，但亮给谁看由本舰决定。\n三家都在同一个高度上停住，保持距离，等待本舰答复。",
          effects: [
            {
              type: 'flag',
              key: 'c8_arrive_ship',
              value: true
            }
          ]
        }
      ]
    },
    out_ch8_concord: {
      id: 'out_ch8_concord',
      kind: 'chapterOutcome',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch8_concord',
      continuesTo: 'ch09',
      onEnter: [
        { type: 'flag', key: 'out_ch8_concord', value: true },
        { type: 'flag', key: 'finale_ready', value: true }
      ],
      text: '联合的作业序列号在四十秒的最后一段落进接收机。渡鸦号停在锚地内线，三号主环烧到红，船上的人都还在。\n第七段的校时挂在联合的登记里，矿区的接收机照旧只能拿灯走路；回收条款跟着这一条记录一起归档，再要执行它，得有人在锚地日志上落笔。\n夜枭的接缝图留了副本，灰鸢的天线座歪着零点二；伊芙娜从接收舱里出来的时候手还抬不起来，她说这一条是她自己签的。'
    },
    out_ch8_scarlet: {
      id: 'out_ch8_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch8_scarlet',
      continuesTo: 'ch09',
      onEnter: [
        { type: 'flag', key: 'out_ch8_scarlet', value: true },
        { type: 'flag', key: 'finale_ready', value: true }
      ],
      text: "外环调度席的登记号在第二十九秒进了接收机。第七段重新亮起来的时候，亮的是矿区维护的灯，联合的登记表上这一段还空着。\n渡鸦号贴在外缘，赤垣的拖船卡在本舰和联合炮线之间，破掉的舱门还开着；联合的两条护航舰停在原位，把这件事记成\"待核实\"。\n铎兰把工具箱留在薇拉手里，自己回到环舱；诺瓦的数据卡还剩一张；伊芙娜从接收舱出来以后，先问的是矿区的调时对不对。"
    },
    out_ch8_spire: {
      id: 'out_ch8_spire',
      kind: 'chapterOutcome',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch8_spire',
      continuesTo: 'ch09',
      onEnter: [
        { type: 'flag', key: 'out_ch8_spire', value: true },
        { type: 'flag', key: 'finale_ready', value: true }
      ],
      text: "公开件在第三十一秒推上三家的队列。署名一栏是诺瓦的观察员编号，灰塔在四分钟以后把这一栏从名单上划掉了；她本人留在舰上，那张卡仍收在她的颈绳里。\n第七段的校时挂在一份谁都能读的记录上，维斯特的校准序列被迫把渡鸦号写进对照组，那条\"干净数据\"从此带着本舰的呼号。\n三方都没有撤：联合停在内线，赤垣围在外缘，校准船落在最外侧；渡鸦号停在三种登记中间，接收机还留着半次写功率。"
    },
    out_ch8_neutral: {
      id: 'out_ch8_neutral',
      kind: 'chapterOutcome',
      chapter: 'ch08',
      scene: 'battle',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch8_neutral',
      continuesTo: 'ch09',
      onEnter: [
        { type: 'flag', key: 'out_ch8_neutral', value: true },
        { type: 'flag', key: 'finale_ready', value: true }
      ],
      text: "接收机在最后十秒里撤掉了对外登记。第七段亮着，亮的是本舰的校时，只对本舰的接收机说话；三支舰队在同一个高度上停住，保持距离，等待本舰答复。\n渡鸦号停在暗段中间，舷侧那块盖板还挂在系留索上，三号环还有不到半小时的余量。来谈的人一个接一个地呼叫，每一路都只带一句话和一份空白的交接单。\n四张椅子都在：伊芙娜守接收舱，铎兰守环舱，诺瓦守记录，薇拉把工具箱放在自己的座位下面。"
    }
  }
};

export default CHAPTER;
