// 钢翼盟约 / STEEL-WING COVENANT — 第六章「静默壁」章节模块（纯数据，无 DOM 依赖，无 import）
//
// 章节模块契约见 candidate/production/contracts-g1/CHAPTER_MODULE_CONTRACT.md。
// 本章状态：长稿（CH06_LONG_DRAFT）。入口 c6_01，四个章末结果继续到 ch07。
// 本章不写终章结局；章末结果 kind='chapterOutcome'，continuesTo 全部指向 ch07。

export const CHAPTER = {
  number: 6,
  id: 'ch06',
  nodeIdPrefix: 'c6_',
  title: '第六章 · 静默壁',
  badge: '第六章',
  status: 'complete',
  entry: 'c6_01',
  nextChapter: 'ch07',
  contentTarget: {
    mainPathCjk: 14000,
    note: '本轮口径：一条主干路径 14,000–15,000 个中文可读字符（用户要求 ≥14,000）。实际值写在 contentActual，并与 ch06-notes.json 的实测数字一致。'
  },
  contentActual: {
    mainPathCjk: 14471,
    bodyCjk: 13943,
    corpusCjk: 18855,
    nodes: 311,
    choices: 7,
    options: 22,
    boundedWalks: 64,
    measuredAt: '2026-09-12',
    method: 'drafts/ch06-selfcheck.mjs：按引擎语义（requires / nextIf / variants / 选项顺序 / effects）从 c6_01 有界遍历。主干路径只统计该路径上真正显示过的文本（节点文本或命中的变体 + 被选项的文案 + 该选项的反应），不把互斥分支相加；语料总量统计全章节点文本、变体、选项文案与选项反应之和。G23 修复轮改跑 64 条有界走法（4 个前置状态 × 16 个取项模式）：显示字数 14,393–14,551，正文（不含选项文案与反应）13,883–14,033；头条路径（seedConcord、每个选择取第一个可用项）显示 14,471 / 正文 13,943，四个章末结果各有见证。'
  },
  decisions: [
    'c6_choice_nova',
    'c6_choice_entry',
    'c6_choice_data',
    'c6_choice_power',
    'c6_choice_fire',
    'c6_choice_publish',
    'c6_choice_custody'
  ],
  outcomeNodeIds: ['out_ch6_concord', 'out_ch6_scarlet', 'out_ch6_spire', 'out_ch6_neutral'],
  scenes: ['orbit', 'ship_rail', 'bridge', 'hangar', 'commandroom', 'reactor', 'battle'],
  companionMilestones: {
    ivna: [
      "静默壁外的等待里，她按队列规程压住全舰的电台，以免申请因无线电违规而作废",
      '断电对峙：她自己站到线缆干管的配电盘前面，把手放在总闸上，等的是谁有权下这一刀',
      '撤离战里她把舰桥的射击权扣在自己手里；校准站在她嘴里第一次不叫站，叫战场'
    ],
    doran: [
      '进站前把灰鸢的左肩牵引挂钩改成吊挂用的双环，为的是接站上那件校准标准件',
      '把对照组数据拆成三份：舰上日志一份、公开副本一份、箱底一份（第三份没告诉任何人）',
      '打完仗在工具箱上分饼干和辣酱，先把最硬的两块挑走，理由是他牙好'
    ],
    nova: [
      '提交窗口前把观察员模板摊开：照实写会把矿站送进灰塔的名单，不写她自己的编号会进「不可用」',
      '第一次在自己的报告里写下结论栏，不再只抄例句',
      '夜里决定公开或沉默：她把对照组数据的去留从灰塔的手里拿了出来'
    ],
    vera: [
      "主动决定动手：进站之前拆掉夜枭右腿空壳里那枚登记线圈，事后才报",
      '断电对峙里把章程原文念给全舰听，包括「终止权在船方」那一句',
      '撤离战里不等命令把夜枭摆到能记录首发弹的位置；她的手还会去摸接口箱原来那一片'
    ]
  },
  outcomes: {
    out_ch6_concord: {
      chapter: 'ch06',
      title: '章末结果 · 交回编制',
      route: 'concord',
      routeName: '环带联合',
      summary: '对照组数据由伊芙娜按规程写成正式报告，走联合的序列上报；校准站的所作所为第一次落在可以盖章的纸上。',
      consequences: [
        '渡鸦号的下一张命令是回联合港：正式报告要在岸上写，证人也要在岸上登记。',
        '静默壁的登记扫描留下了本舰的完整记录，站方档案那一栏写着「待核」；这条记录会跟着船进港。',
        '诺瓦的那一页报告被并进附件；她没有删掉自己的结论栏。'
      ],
      nextHook: '联合港里等着的不只是船坞，还有安全处的归档室——而这张报告把所有人的名字都写在了同一页上。',
      continuesTo: 'ch07',
      continueHint: '第七章从「船必须回联合港补修，而安全处已经在港口等着归档所有人」继续。'
    },
    out_ch6_scarlet: {
      chapter: 'ch06',
      title: '章末结果 · 先给矿站',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: '对照组数据没有进任何一家的档案柜，先通过外环的电台发给了矿站自己；矿站拿到了能自保的证据，也拿到了必须自己承担的后果。',
      consequences: [
        '三个矿站在一晚上之内关掉了本季的校准申请，改用手工测角；冬天的补给表被他们自己重排了。',
        '灰塔很快会知道数据是从哪条船上过去的；渡鸦号的名字会出现在两份名单上，一份是灰塔的，一份是安全处的。',
        '船还得进港：船身需要坞修，而联合港是这一带唯一有对应规格坞位的港口。'
      ],
      nextHook: '带着空货舱和一船纸进联合港，等于把手里的筹码全换成别人手里的把柄。',
      continuesTo: 'ch07',
      continueHint: '第七章从「数据已经发出去、船上只剩副本，而船必须进港修理」继续。'
    },
    out_ch6_spire: {
      chapter: 'ch06',
      title: '章末结果 · 内部举报',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: '数据按灰塔自己的章程递回去：一份针对首席观测员的内部合规举报，递交人签名是诺瓦·岑。',
      consequences: [
        '观测局给渡鸦号发了一张临时通行证，条件是把船开到联合港接受问询，证词按章程逐条记录。',
        '举报在观测局内部掀起的动静比谁都小：三天之内不会有结论，但维斯特的每一次校准都会被留档复核。',
        '诺瓦的编号还在名册上，只是「观察员」那一栏后面多了一个括号。'
      ],
      nextHook: "按章程走的路最慢，可后续文件都需要诺瓦本人到场签署。",
      continuesTo: 'ch07',
      continueHint: '第七章从「船带着临时通行证进港、要在岸上留下证词」继续。'
    },
    out_ch6_neutral: {
      chapter: 'ch06',
      title: '章末结果 · 留在船上',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: '三份数据都留在船上：舰上日志一份、公开副本一份、箱底一份。三边都在找它，三边都没有拿到。',
      consequences: [
        '校准站对外只说渡鸦号「未完成校准离站」；这份说法把船的证书停在半路上，也把它的去向变成了三边都想知道的事。',
        '船身撑不到第二次交火：右舷外板与两个推进环必须进坞修，而最近的坞位在联合港。',
        '四个人的名字现在都挂在同一件东西上——一件没法交给任何人保管的东西。'
      ],
      nextHook: '箱底那一份没有被写进任何清单。船进港的时候，带着它的人会先被搜身，还是先被问话？',
      continuesTo: 'ch07',
      continueHint: '第七章从「船必须进港大修、货舱里却留着三边都想要的三份证据」继续。'
    }
  },
  nodes: {
    c6_01: {
      id: 'c6_01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '沧澜的高轨道上，锚链最后一枚浮标在舰首左前方亮着白光。静默壁校准站横在浮标内侧：一根放平的长脊，脊尾立着一组校准阵列，阵列的开口正对着航道，一圈冷白的标记灯把它的范围圈了出来。渡鸦号停在圈外，所有主动探测都关着，只剩被动接收机在收队列。',
      variants: [
        {
          requires: ['ship_damage_high'],
          text: '沧澜的高轨道上，锚链最后一枚浮标在舰首左前方亮着白光。静默壁校准站横在浮标内侧：一根放平的长脊，脊尾立着一组校准阵列，阵列的开口正对着航道。渡鸦号停在圈外，左舷第三块补板还在渗气，铎兰用两道卡箍压着它，主发动机只敢开到最低档；所有主动探测都关着，只剩被动接收机在收队列。'
        }
      ],
      next: 'c6_02'
    },
    c6_02: {
      id: 'c6_02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '服务申请提交四小时零七分，编号在我们后面还排着两条船。站上没有回话，也没有拒绝。',
      next: 'c6_03'
    },
    c6_03: {
      id: 'c6_03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '队列终端上只有五栏：申请编号、船名、货类、等待时长、答复。答复那一栏是空的。航道图里，静默壁的范围被画成一个圆，圆周正好压在最后一枚浮标上——圈里不许主动呼叫、不许主动照射、不许武器通电。',
      next: 'c6_04'
    },
    c6_04: {
      id: 'c6_04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '它不算港口，算仪器。灰塔的章程写得比这难听：圈里任何一次主动通讯、主动照射、武器通电，都记成一次「干扰事件」。记过一次，申请作废，船名进他们的备注栏。',
      next: 'c6_05'
    },
    c6_05: {
      id: 'c6_05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '我们不开呼叫，它怎么知道我们来了？',
      next: 'c6_06'
    },
    c6_06: {
      id: 'c6_06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "它登记到了。我们越过标线时，队列就记下一行，进表时间四小时零七分。现在要由我们先读取条件，提交以后才会有答复。",
      next: 'c6_07'
    },
    c6_07: {
      id: 'c6_07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '报告。队列里离开过三条船。两条在答复栏出现之前就走了；一条等了十一小时，答复栏写「不受理」，理由栏空着。',
      next: 'c6_08'
    },
    c6_08: {
      id: 'c6_08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '理由栏空着的那条，哪一家的船？',
      next: 'c6_09'
    },
    c6_09: {
      id: 'c6_09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '船名被涂掉了，登记的是民用货类，呼号前缀是外环的。我把三条船进出的时间都记下来了，误差不超过半分钟。',
      next: 'c6_10'
    },
    c6_10: {
      id: 'c6_10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '渡鸦号的锚点参照在上一次抢修里换过一段，读数一直偏着。按联合的规程，偏掉的参照不能带队走补给线；外环的冬季船队两天后装货，十七个矿站的补给表都压在那一天。整条锚链上，只剩下这个站还能发参照修正章。',
      next: 'c6_a01'
    },
    c6_a01: {
      id: 'c6_a01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '机库这边给你说个数：上一趟换掉的那一段参照件是二号与三号之间的一小节，长度两米四，换的时候船在锚地里晃，焊缝补过两次。读数偏多少我不知道，我只知道它偏。',
      next: 'c6_a02'
    },
    c6_a02: {
      id: 'c6_a02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '偏一点会怎么样？',
      next: 'c6_a03'
    },
    c6_a03: {
      id: 'c6_a03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '偏一点，短途看不出来。带队走两天的线，靠参照算位置，一天偏出去几公里，两天就是十几公里；那条线上能当路标的东西不多，锚点是一枚一枚数着走的。',
      next: 'c6_a04'
    },
    c6_a04: {
      id: 'c6_a04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '备选我也说清楚：站上不收，我们用手测参照走外环，速度压一半，队形拉长，船队里那条老运输船跟不上。船队要么减一条船，要么晚三天装货。',
      next: 'c6_a05'
    },
    c6_a05: {
      id: 'c6_a05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '晚三天，第一批配给就得从冬储表后面挪。挪一次还能补，挪两次矿站得自己砍用量。这两条路都不好看，所以我们才在这儿等一个不肯回话的站。',
      next: 'c6_a06'
    },
    c6_a06: {
      id: 'c6_a06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '队列终端上的等待时长又跳了一分钟。主屏右上角是冬储表的第一页：三个矿站的名字后面各挂着一串日期，最近的排在后天中午。',
      next: 'c6_11'
    },
    c6_11: {
      id: 'c6_11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '全舰保持冷态，队列位置不动。谁都不许主动呼叫。换班照常，诺瓦，你的例行提交还有一个半小时。',
      next: 'c6_12'
    },
    c6_12: {
      id: 'c6_12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '知道。写完我去观景廊，这儿的屏幕看久了眼睛疼。四十分钟后我回来接值守。',
      next: 'c6_a07'
    },
    c6_a07: {
      id: 'c6_a07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '广播：静默壁民邮台来话，本舰有四个包裹，靠上泊位以后转交。\n广播：舰内热水用量本周超出一成，值班表后面加了一条：泡茶请用半杯水。',
      next: 'c6_a08'
    },
    c6_a08: {
      id: 'c6_a08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舰桥的舷窗外，静默壁那根长脊没有任何变化，只有阵列开口还在缓慢地转。标记灯的一排冷白点压在最后一枚浮标上，像有人把尺子放在了航道上。',
      next: 'c6_13'
    },
    c6_13: {
      id: 'c6_13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '广播：三号机库申请外部电源一小时，用途：替换参照件的保温与复测。\n广播：餐厅两台加热台停用一台，晚饭只开一号台，加热时间翻倍。',
      next: 'c6_14'
    },
    c6_14: {
      id: 'c6_14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '交班之后，舰桥只剩伊芙娜和两个值夜的人。你从队列终端前走开的时候，屏幕上「答复」那一栏还是空的；窗外那根长脊一动不动，只有阵列开口在缓慢地转。',
      variants: [
        {
          requires: ['out_ch5_concord'],
          text: '交班之后，舰桥只剩伊芙娜和两个值夜的人。上一趟补给线是照联合的配给表走的，回执已经登记进日志；你从队列终端前走开的时候，屏幕上「答复」那一栏还是空的。'
        },
        {
          requires: ['out_ch5_scarlet'],
          text: '交班之后，舰桥只剩伊芙娜和两个值夜的人。上一趟货是先送到矿站手里才登记的，联合的配给表上那一栏空着；你从队列终端前走开的时候，屏幕上「答复」那一栏也是空的。'
        },
        {
          requires: ['out_ch5_spire'],
          text: '交班之后，舰桥只剩伊芙娜和两个值夜的人。上一趟的航迹进了灰塔的观察点，回信只有一行收到；你从队列终端前走开的时候，屏幕上「答复」那一栏还是空的。'
        },
        {
          requires: ['out_ch5_neutral'],
          text: '交班之后，舰桥只剩伊芙娜和两个值夜的人。上一趟三边的回执一份都没拿，配给表、矿站的收条和灰塔的观察记录各缺一半；你从队列终端前走开的时候，屏幕上「答复」那一栏还是空的。'
        }
      ],
      next: 'c6_r01'
    },
    c6_r01: {
      id: 'c6_r01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '左舷观察廊在交班以后是空的。窗框上结着一层薄霜，霜面留了几行粉笔字，是诺瓦的计数表。你推门进去的时候，她正咬着半截粉笔，一只手撑着窗台，另一只手里晃着半杯甜茶。',
      next: 'c6_r02'
    },
    c6_r02: {
      id: 'c6_r02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: "那一排先留着，我用它记换班次数。到今天一共十四个。",
      next: 'c6_r03'
    },
    c6_r03: {
      id: 'c6_r03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '十四个什么？',
      next: 'c6_r04'
    },
    c6_r04: {
      id: 'c6_r04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '从这排窗户能看见的东西。浮标、站的阵列、过路的拖船，有一个算一个。下一行是待议项：有一盏灯往左漂了两格又漂回来，算一次还是两次。',
      next: 'c6_r05'
    },
    c6_r05: {
      id: 'c6_r05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '待议项旁边画了一个问号，字写得很小。走廊另一头的门开了，薇拉端着一只磁扣杯走进来，杯壁上贴着一小条写日期的胶带。她看了一眼窗框，先在左边那张长椅上坐下。',
      next: 'c6_r06'
    },
    c6_r06: {
      id: 'c6_r06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '两次。它经过了两个位置，就该登记两次。',
      next: 'c6_r07'
    },
    c6_r07: {
      id: 'c6_r07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '看见没有，这船上终于有人讲道理。',
      next: 'c6_r08'
    },
    c6_r08: {
      id: 'c6_r08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '诺瓦把「待议」划掉，在旁边写上「按两次记」。长桌那头摊着一袋压缩饼干和一罐甜茶粉，薇拉把饼干按生产日期排了一遍，最早的两块放到最上面，自己拿了杯热水。',
      next: 'c6_r09'
    },
    c6_r09: {
      id: 'c6_r09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '你不喝那个？',
      next: 'c6_r10'
    },
    c6_r10: {
      id: 'c6_r10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '太甜。上次那种罐头也是，太甜的不吃。这一条归到偏好里，不归到检查项里。',
      next: 'c6_r11'
    },
    c6_r11: {
      id: 'c6_r11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '这两栏有区别吗？',
      next: 'c6_r12'
    },
    c6_r12: {
      id: 'c6_r12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '有。检查项要写进日志，偏好不用。',
      next: 'c6_r13'
    },
    c6_r13: {
      id: 'c6_r13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '诺瓦把挂在颈上的那串数据卡摘下来，摊在膝盖上。挂绳的金属扣断了一边，她正用一段缝线缠它，缠得很难看。第一块饼干她掰了一半给薇拉，薇拉接了，掰成两块一样大，先吃小的那块。',
      next: 'c6_r14'
    },
    c6_r14: {
      id: 'c6_r14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '别告诉铎兰。他修好以后会在上面贴一张便签，写上「已修」，还要画个笑脸。',
      next: 'c6_r15'
    },
    c6_r15: {
      id: 'c6_r15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '他真画笑脸？',
      next: 'c6_r16'
    },
    c6_r16: {
      id: 'c6_r16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '我第一个档案袋上就有一个。那袋子现在还在我床底下，笑脸朝上。',
      next: 'c6_r17'
    },
    c6_r17: {
      id: 'c6_r17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '窗外，静默壁的阵列转了半圈，白光扫过窗霜，把计数表的最后一行照亮了。诺瓦看了一眼，没往表上加。她咬断线头，把挂绳绕在手腕上试了试松紧。',
      next: 'c6_a09'
    },
    c6_a09: {
      id: 'c6_a09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '队列的等待音从走廊那一头传过来，四个音，反复走，音高一样。按下问答要等四十分钟以后才有动静，这四个音就一直没停，落到观察廊里的时候已经很轻。',
      next: 'c6_a10'
    },
    c6_a10: {
      id: 'c6_a10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '听见没有，这调子。今天全船都在哼它，三号机库那台气泵的节奏也是这四个音。',
      next: 'c6_a11'
    },
    c6_a11: {
      id: 'c6_a11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '第一和第四个音之间差两个半音，第二和第三个差三个。',
      next: 'c6_a12'
    },
    c6_a12: {
      id: 'c6_a12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '你连等电话的提示音都要拆开量。',
      next: 'c6_a13'
    },
    c6_a13: {
      id: 'c6_a13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '我吹不出来。记成频率的话，下回可以按频率吹。',
      next: 'c6_a14'
    },
    c6_a14: {
      id: 'c6_a14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '别，你按频率吹，我们得按频率捂耳朵。',
      next: 'c6_a15'
    },
    c6_a15: {
      id: 'c6_a15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '诺瓦笑了一声，没接话，把膝盖上的线头收好。薇拉用指节在窗框的霜上点了四下，像把那四个音敲出来；点完她看了看自己的指节，又把手放回杯子上。',
      next: 'c6_a16'
    },
    c6_a16: {
      id: 'c6_a16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '我得回机库了。挂钩加完环还没试吊，夜里做完，白天省一趟。',
      next: 'c6_r_shift'
    },
    c6_r_shift: {
      id: 'c6_r_shift',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
    text: '铎兰走后，观察廊静下来。杯子还搁在桌角，甜茶不烫了，杯壁的水痕已经干了一半。舷窗外只剩锚标一盏接一盏的冷光。诺瓦把毯子叠起来放回长椅上，从架子上取下值班板夹，例行提交还有四十分钟。',
      next: 'c6_r18'
    },
    c6_r18: {
      id: 'c6_r18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '例行提交还有四十分钟。表上第七栏是「结论」，模板给了两个例句：建议继续观察；对象可继续使用。',
      next: 'c6_r19'
    },
    c6_r19: {
      id: 'c6_r19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '你打算写哪个？',
      next: 'c6_r20'
    },
    c6_r20: {
      id: 'c6_r20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "我照实写，矿站就上了灰塔的名单。上一趟是我签收的，航迹在我这儿，谁给矿站让过航线、谁在冬天的配给表上少交了一格，写清楚就是把那些人一格一格标出来。标出来以后，站上下一季的校准申请会被排到最后，航线得拖着过期校准章挨过冬天，补给船很可能改道。",
      next: 'c6_r21'
    },
    c6_r21: {
      id: 'c6_r21',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '不写，我这一栏就空着。观察员连着两次提交空结论，编号进「不可用」；不可用的人不上船，调回塔里做校对，一天八小时对着别人的航迹。',
      next: 'c6_r22'
    },
    c6_r22: {
      id: 'c6_r22',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '所以你在问我。',
      next: 'c6_r23'
    },
    c6_r23: {
      id: 'c6_r23',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '我自己问自己的时候，听见的全是模板的句子。你说一句，我照着你的说法再问一遍。',
      next: 'c6_r24'
    },
    c6_r24: {
      id: 'c6_r24',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '饼干袋里只剩最后两块，碎屑落在她膝盖上，她没拍。窗外的站一动不动，标记灯排成一条直线；薇拉把两个人的杯子并到一起，靠窗那边空出来的位子留给你。',
      next: 'c6_choice_nova'
    },
    c6_choice_nova: {
      id: 'c6_choice_nova',
      kind: 'choice',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '她把笔停在第七栏的上面，等你开口。',
      choices: [
        {
          id: 'c6_nova_prompt_truth',
          label: '「写你看见的。写完再去想后果。」',
          next: 'c6_r25',
          reaction: '诺瓦在第七栏上写了三行，写到第二行停了很久，把「继续观察」划掉，换成了别的话。她把卡扣好，没有给你看。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'flag', key: 'c6_nova_prompt_truth', value: true }
          ]
        },
        {
          id: 'c6_nova_prompt_template',
          label: '「照模板写。先把这一趟飞完。」',
          next: 'c6_r25',
          reaction: '诺瓦把两个例句抄了下来，末尾加了一句「待复核」，然后把数据卡塞回颈上的挂绳里。她收东西的动作比平时快。',
          effects: [
            { type: 'trust', who: 'nova', amount: -1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'c6_nova_prompt_template', value: true }
          ]
        },
        {
          id: 'c6_nova_prompt_own',
          label: '「这是你的报告。你自己写完，自己签。」',
          next: 'c6_r25',
          reaction: '诺瓦看了你两秒，把那张空白卡收起来，换了一张新的。她在第一行写了自己的话，字比平时大，写完把卡翻过去扣在桌上。',
          effects: [
            { type: 'trust', who: 'nova', amount: 2 },
            { type: 'flag', key: 'c6_nova_prompt_own', value: true }
          ]
        }
      ]
    },
    c6_r25: {
      id: 'c6_r25',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '四十分钟过了三分钟，提交回执还没回来。诺瓦把挂绳重新套上脖子，走到窗边，用袖口把霜面上最后一行粉笔字擦掉了一半，又停住。',
      variants: [
        {
          requires: ['c6_nova_prompt_truth'],
          text: '四十分钟过了三分钟，提交回执还没回来。诺瓦把挂绳重新套上脖子，走到窗边，在计数表下面又添了一行小字：「第七栏自己写，不算待议。」'
        },
        {
          requires: ['c6_nova_prompt_template'],
          text: '四十分钟过了三分钟，提交回执来得很快，一行「已登记」。诺瓦把挂绳重新套上脖子，用袖口把霜面上最后一行粉笔字擦掉了一半，又停住。'
        },
        {
          requires: ['c6_nova_prompt_own'],
          text: '四十分钟过了三分钟，提交回执还没回来。诺瓦把挂绳重新套上脖子，把扣在桌上的那张卡翻过来又扣回去，走过来的时候顺手把你的杯子推回了桌子中间。'
        }
      ],
      next: 'c6_r26'
    },
    c6_r26: {
      id: 'c6_r26',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "走廊尽头响了一声提示音。队列终端亮了起来：静默壁的答复栏终于有了字。诺瓦先站起来，粉笔还捏在手里；薇拉把两只杯子一并带走，顺手把长椅上的饼干屑扫进了手心。",
      next: 'c6_b01'
    },
    c6_b01: {
      id: 'c6_b01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '答复栏只有三行，没有称呼，也没有落款：“受理。条件一项：原始航迹记录一份，完整未删节，进入范围前提交。服务期内所有通讯以队列进行，条款七之三、九之一。”主屏右下角开始倒计时，服务窗口还剩九小时五十分。',
      next: 'c6_b02'
    },
    c6_b02: {
      id: 'c6_b02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '它只要一样东西：我们的航迹。完整的那一份，从霜环锚地出来到现在的。',
      next: 'c6_b03'
    },
    c6_b03: {
      id: 'c6_b03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '那份东西里有死航线。那一段不只是航道数据，还有我们当时怎么把航道重新点亮的过程；谁在驾驶，桥上接的哪一根线，全在里面。交出去，等于把最贵的那一页送进灰塔的档案柜。',
      next: 'c6_b04'
    },
    c6_b04: {
      id: 'c6_b04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '报告。还有编制那一栏。航迹附带机组清单，清单上写着第三小队：长机伊芙娜·卡列尔，二号机薇拉·厄兰，编号 AU-11。',
      next: 'c6_b05'
    },
    c6_b05: {
      id: 'c6_b05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '能不能把不该给的那几段删掉？',
      next: 'c6_b06'
    },
    c6_b06: {
      id: 'c6_b06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "可以删掉舰内记录，但提交时，站上的阵列也会测本舰的锚点参照。两边的读数一旦出现差异，船就会被标记为「记录不符」，下一站也会退回申请。条款九之前写着这项要求。",
      next: 'c6_b07'
    },
    c6_b07: {
      id: 'c6_b07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '比不交更糟。不交只是这一趟没校准；记录不符是以后每一趟都要多等两天，等他们派人上船重查。',
      next: 'c6_b08'
    },
    c6_b08: {
      id: 'c6_b08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '条款九之一是另一条路：记录封存、不能提交的船，可以用对等劳务换服务。站上的公开工单里还挂着三件没销的：馈源保温层更换、泵机滤芯更换、标准件吊装。第三件的规格和灰鸢左肩挂钩的额定一致。',
      next: 'c6_b09'
    },
    c6_b09: {
      id: 'c6_b09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '你什么时候读的章程？',
      next: 'c6_b10'
    },
    c6_b10: {
      id: 'c6_b10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '等回话的时候。四条船里只有我们还在等，那就把等的时间用来读条件，读完再报。',
      next: 'c6_b11'
    },
    c6_b11: {
      id: 'c6_b11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '主屏上，服务窗口的倒计时又跳了一格。圈里的标记灯排成一条直线，站的阵列开口慢慢转过来，正对着渡鸦号的舰首。',
      next: 'c6_b12'
    },
    c6_b12: {
      id: 'c6_b12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '还有一件事你们都没算：进圈的船要过登记扫描。机器、货、每一个挂上去的外挂件，标签都会读一遍。夜枭腿上的空壳、灰鸢左肩那块换件，都算外挂件。',
      next: 'c6_b13'
    },
    c6_b13: {
      id: 'c6_b13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '吊装那件要在圈里做，机器出机库，机上的人跟着出。多等六个小时，窗口里做得完。',
      next: 'c6_b14'
    },
    c6_b14: {
      id: 'c6_b14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '做得完。标准件在民用泊位，吊点到阵列基座之间有一条轨道，轨道承重够，只要机体别偏。',
      next: 'c6_choice_entry'
    },
    c6_choice_entry: {
      id: 'c6_choice_entry',
      kind: 'choice',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜把确认页推到桌子中间。三行条件，光标停在最上面那一行，等你先说。',
      choices: [
        {
          id: 'c6_entry_raw',
          label: '「交原始航迹。删改只会换来更麻烦的核查。」',
          next: 'c6_b15',
          reaction: '航迹从导航核心里拷出来用了十一分钟，全程开着舰内日志。拷贝结束以后，诺瓦把文件名改成「提交件」，没有再动它。伊芙娜在提交单上签的是自己的编号。',
          effects: [
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'c6_entry_raw', value: true }
          ]
        },
        {
          id: 'c6_entry_edited',
          label: '「把死航线那一段掐掉，只交剩下的。」',
          next: 'c6_b15',
          reaction: '剪辑在导航核心的校验层里做，切口藏在一次例行压缩后面。诺瓦全程没说话，提交完把校验余数抄进了自己的小本子。铎兰在机库频道里只应了一声好，就去给吊索打油。',
          effects: [
            { type: 'trust', who: 'nova', amount: -1 },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'flag', key: 'c6_entry_edited', value: true }
          ]
        },
        {
          id: 'c6_entry_labor',
          label: '「用条款九之一：我们付工时，不付航迹。」',
          next: 'c6_b15',
          reaction: '诺瓦把条款号敲进队列，附上灰鸢的挂钩额定和夜枭的探测臂清单。答复来得比前一次快，只有两个字：受理。薇拉从椅子上站起来，先去机库了。',
          effects: [
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'flag', key: 'c6_entry_labor', value: true }
          ]
        }
      ]
    },
    c6_b15: {
      id: 'c6_b15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '队列回了第二行：泊位号、进圈时间、登记扫描的次序。进圈时间定在一小时四十分以后；扫描从货舱开始，最后扫两装机体的外挂件。',
      variants: [
        {
          requires: ['c6_entry_raw'],
          text: '队列回了第二行：本轮提交件已登记，编号附在受理号后面；泊位号、进圈时间、登记扫描次序各有三行。扫描从货舱开始，最后扫两装机体的外挂件。'
        },
        {
          requires: ['c6_entry_edited'],
          text: '队列回了第二行：提交件已登记，校验余数与站上测得的参照对过一遍，暂列「待复核」。泊位号、进圈时间、登记扫描次序各三行，扫描最后落在两装机体的外挂件上。'
        },
        {
          requires: ['c6_entry_labor'],
          text: '队列回了第二行：劳务换服务受理，工单号挂在标准件吊装那一行；泊位号、进圈时间、登记扫描次序各三行，扫描最后落在两装机体的外挂件上。'
        }
      ],
      next: 'c6_b16'
    },
    c6_b16: {
      id: 'c6_b16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '一小时四十分。全舰按进港检查走一遍，机库先动。灰鸢的吊索和挂钩你去看，夜枭的探测臂校准你也要在扫描之前做完。',
      next: 'c6_b17'
    },
    c6_b17: {
      id: 'c6_b17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你下舰桥的时候，主屏上的倒计时停在一小时三十八分。走廊里能听见机库方向传来的风炮声：有人已经在给吊索除锈了。',
      next: 'c6_g01'
    },
    c6_g01: {
      id: 'c6_g01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三号机库里风炮响得整层舱壁都在抖。灰鸢停在二号起飞位，左肩的替换件擦过之后留着一道浅痕；夜枭停在它旁边，折叠的侦测翼收在背后，右腿外侧那一圈空壳敞着盖。',
      next: 'c6_g02'
    },
    c6_g02: {
      id: 'c6_g02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '挂钩上给你加了一对双环，间距按标准件的吊耳量过。那件东西三吨半，重心偏在后头，你起吊的时候得往前提半米。',
      next: 'c6_g03'
    },
    c6_g03: {
      id: 'c6_g03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '为什么要往前提？',
      next: 'c6_g04'
    },
    c6_g04: {
      id: 'c6_g04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '轨道贴着阵列基座走，边上就是馈源保温层，偏半米就蹭上。三吨半蹭一下，保温层得整块换，站上那三件工单立刻就变成四件。',
      next: 'c6_g05'
    },
    c6_g05: {
      id: 'c6_g05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '夜枭腿边的地勤灯亮着。薇拉蹲在那圈空壳旁边，盖板已经卸下来放在地上，脚边摊着她自己的工具袋：一把热风枪、两把铲刀、一卷新的白胶布。她没有抬头，手上还在拆。',
      next: 'c6_g06'
    },
    c6_g06: {
      id: 'c6_g06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '再两分钟。盖板别踩，螺栓在盖板上头。',
      next: 'c6_g07'
    },
    c6_g07: {
      id: 'c6_g07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '你在拆什么？',
      next: 'c6_g08'
    },
    c6_g08: {
      id: 'c6_g08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '登记线圈。在空壳最里面，接在那只已经失效的插座后面。接口箱拆掉以后它还在，登记扫描会读到它。',
      next: 'c6_g09'
    },
    c6_g09: {
      id: 'c6_g09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '那是机体的登记线圈。拆了它，夜枭就是台没户口的机器。联合港的坞口会先把机器扣在泊位上，再让船主去补手续，补一次排两个月，还不一定能补上。',
      next: 'c6_g10'
    },
    c6_g10: {
      id: 'c6_g10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '我知道。',
      next: 'c6_g11'
    },
    c6_g11: {
      id: 'c6_g11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '那为什么还要拆？',
      next: 'c6_g12'
    },
    c6_g12: {
      id: 'c6_g12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '扫描读到线圈，等于读到 AU-11。站上会知道夜枭是谁的僚机、长机是谁、机组清单上有几个人。灰塔要的是活体读数，给他们一排编号，他们就会顺着编号往下找。',
      variants: [
        {
          requires: ['aux_series_deserter_met'],
          text: '扫描读到线圈，等于读到 AU-11。上一趟见到的那个人，编号在册子上被划掉，线圈还在，机器还是被认出来，人还是被找回去做了报废登记。灰塔要的是活体读数，给他们一排编号，他们就会顺着编号往下找。'
        }
      ],
      next: 'c6_g13'
    },
    c6_g13: {
      id: 'c6_g13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '你打算怎么拆？剪断最省事。',
      next: 'c6_g14'
    },
    c6_g14: {
      id: 'c6_g14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "不能剪。剪了留断口，扫描照样读得到断口；整枚拿出来，热风过到树脂发软，铲刀从衬垫下面走。准备好工具再拆，必须完整取出。",
      next: 'c6_g15'
    },
    c6_g15: {
      id: 'c6_g15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '铎兰把地勤灯挪近，自己蹲到壳子的另一侧给她挡光。你按着她指的位置扶住盖板；热风枪的低鸣贴着树脂走了三圈，铲刀进去，指尖缠着白胶布的那只手稳得出奇。七分钟以后，一枚拇指大小的线圈整块落进她掌心。',
      next: 'c6_g16'
    },
    c6_g16: {
      id: 'c6_g16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '行家。这活儿我干过两次，两次都留了断口，最后都是一整块换。',
      next: 'c6_g17'
    },
    c6_g17: {
      id: 'c6_g17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '薇拉把线圈装进一只小封袋，用笔在袋口写下日期和机号。封袋收进工具袋最外层以后，她的手又回到那圈空壳的边上，沿着原来装接口箱的那一道压痕摸过去，停了两秒，才把盖板拿起来。',
      next: 'c6_g18'
    },
    c6_g18: {
      id: 'c6_g18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '维护日志我写好了：拆件一枚，原位置右腿外侧空壳内，去向随身封存。原因栏我写的是「防止登记扫描将机体与编号绑定」。责任人填我自己。',
      variants: [
        {
          requires: ['vera_word_refused'],
          text: '维护日志我写好了：拆件一枚，原位置右腿外侧空壳内，去向随身封存。原因栏我写的是「防止登记扫描将机体与编号绑定」，责任人填我自己。上一次在会议室，我答的是不要；这一次是我自己动手，不用谁先问。'
        },
        {
          requires: ['vera_word_used'],
          text: '她先把那一天的日志调出来对了一遍，一行一行看完，确认自己写过的记录都还在，才落笔。维护日志上写：拆件一枚，原位置右腿外侧空壳内，去向随身封存；原因栏是「防止登记扫描将机体与编号绑定」，责任人填她自己。'
        }
      ],
      next: 'c6_g19'
    },
    c6_g19: {
      id: 'c6_g19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'system',
      text: '广播：三号机库维护日志新增一条，签注人伊芙娜·卡列尔。\n广播：进港以后为夜枭补办无登记机体手续，费用走公账，责任栏写第三小队。',
      next: 'c6_g20'
    },
    c6_g20: {
      id: 'c6_g20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '铎兰把双环吊具挂到灰鸢左肩，试了两次松紧，在挂钩上贴了一张便签。机库的减压提示灯亮了；一小时四十分已经过去一半，剩下的时间够做一次空载试吊。',
      next: 'c6_t01'
    },
    c6_t01: {
      id: 'c6_t01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '标线在舰腹下二十米处过去。过线的那一秒，全舰的电台、主动探测和武器电路一起切断，只剩下应急灯与磁靴的嗡声；静默壁的登记扫描从舰尾开始，一段一段扫过来，像有人在船壳上画表格。',
      onEnter: [
        { type: 'flag', key: 'calibration_station_visited', value: true }
      ],
      next: 'c6_t02'
    },
    c6_t02: {
      id: 'c6_t02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '队列回执：货舱标记三处，均已登记。\n队列回执：机库机体两架。左肩外挂件一枚，标记为牵引吊挂；右腿外侧外挂壳体一件。\n队列回执：机体登记线圈缺失，备注栏：待核。',
      next: 'c6_t03'
    },
    c6_t03: {
      id: 'c6_t03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "备注写「待核」，这样可以进圈继续核对。写成「异常」就得停在标线上等复核。",
      next: 'c6_t04'
    },
    c6_t04: {
      id: 'c6_t04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '记下来。回港以后，这一条要写进事故报告的第一页。',
      next: 'c6_t05'
    },
    c6_t05: {
      id: 'c6_t05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '长脊从舷窗外侧移过去。站身是钢灰色的，焊缝上盖着一层旧漆；民用泊位在脊的下侧，吊车轨道贴着基座一直伸到阵列跟前。渡鸦号被引到最外面的一根系缆臂上，系缆上的力一点点加上来，全舰轻轻一顿。',
      next: 'c6_t06'
    },
    c6_t06: {
      id: 'c6_t06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '队列回执：阅览序列批准，时限四十分钟，条目限于校准队列与修正档案。\n队列回执：劳务工单一号已计时，标准件吊装，起始时间以站钟为准。',
      variants: [
        {
          requires: ['c6_entry_labor'],
          text: '队列回执：阅览序列批准，时限四十分钟，条目限于校准队列与修正档案。\n队列回执：劳务工单一号已计时，标准件吊装，起始时间以站钟为准。\n广播：三号机库减压完成，灰鸢出库，牵引双环挂载确认。'
        }
      ],
      next: 'c6_t07'
    },
    c6_t07: {
      id: 'c6_t07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '四十分钟，两个来源：校准队列、修正档案。伊芙娜，会议室的全息台比舰桥的那台好用，投影能铺满整面墙。',
      next: 'c6_m01'
    },
    c6_m01: {
      id: 'c6_m01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '作战会议室的长桌被投影铺满了：左边是校准队列的日志，右边是修正档案的目录，中间空着一条，留给待查的条目。诺瓦把她的数据卡一张张插进投影座，第四张卡插进去的时候，全息图轻轻晃了一下。',
      next: 'c6_m02'
    },
    c6_m02: {
      id: 'c6_m02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '每条修正都有三段：申请、批准、执行。申请写给站上，批准盖章，执行记录落进锚点浮标。三段对上，航道就有人修；缺一段，那条航道就自己漂。',
      next: 'c6_m03'
    },
    c6_m03: {
      id: 'c6_m03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '第一条命中是我们自己。渡鸦号的锚点参照一组，登记类别：参照组。生效时间在我们进圈后六分钟。',
      next: 'c6_m04'
    },
    c6_m04: {
      id: 'c6_m04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '参照组是什么意思？用他们的话说。',
      next: 'c6_m05'
    },
    c6_m05: {
      id: 'c6_m05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '参照组不修，只记。它的漂移被当成基线，用来跟动过手脚的航道对比。换成我们听得懂的话：这一组锚点一季不发修正章，让它们自己漂下去，漂到什么时候坏，坏的那一天算实验数据。',
      next: 'c6_m06'
    },
    c6_m06: {
      id: 'c6_m06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '这条航线一季没有修正章，冬季船队不会走。绕行要十一天，冬储表上排在前面的两个矿站撑不到那时候。这个数我算过两遍，两遍一样。',
      next: 'c6_m07'
    },
    c6_m07: {
      id: 'c6_m07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '投影往下翻。修正档案里翻出一条去年的旧记录页：外环北七航段，申请号 2207，批准栏空白，执行栏写着「撤销」，撤销时间比那条航段的失效通报早了八小时。失效通报的理由栏填的是四个字：自然漂移。',
      next: 'c6_m08'
    },
    c6_m08: {
      id: 'c6_m08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'player',
      text: '撤销那一栏是谁签的？',
      next: 'c6_m09'
    },
    c6_m09: {
      id: 'c6_m09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '签发人栏没有名字，只有职务和印记：首席观测员行使章，号码四十四。北七那一条是三段里缺了两段——申请在、批准撤了、执行根本没发生。',
      next: 'c6_m10'
    },
    c6_m10: {
      id: 'c6_m10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '我把死航线那一段调出来对时间。我们当时从锚点浮标上抄下来的残页里，也有一枚四十四号印，落在航道失效前六个小时。',
      onEnter: [
        { type: 'flag', key: 'vester_control_group_exposed', value: true }
      ],
      next: 'c6_m11'
    },
    c6_m11: {
      id: 'c6_m11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '我明白了。校准章是改写锚点的前提：桥能写，写在浮标里，但要有一枚有效的校准章，写进去的东西才会被航道接受。所以他不炸浮标，他只是不给修。',
      next: 'c6_m12'
    },
    c6_m12: {
      id: 'c6_m12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '那他为什么还要一条没动过的航道？',
      next: 'c6_m13'
    },
    c6_m13: {
      id: 'c6_m13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "因为报告要干净。死航线那一段是我们自己撞进去的，谁都能说是意外；北七是撤销修正以后的漂移，谁都能说是年久失修。他缺一条保持原状的航道做对照，想把另外几次故障归因到干预上。这条航道现在就是我们。",
      next: 'c6_m14'
    },
    c6_m14: {
      id: 'c6_m14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '队列档案里附了一段录音，长度十四秒，登记类型是「随令附送」。诺瓦把它点开的时候，投影的边角抖了一下，声音很平，像在念一张表格。',
      next: 'c6_m15'
    },
    c6_m15: {
      id: 'c6_m15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vester',
      text: '第 44 号令。参照组名单追加一项：护航母舰渡鸦号所属锚点参照一组，整组。不通知，不修正，记录满一季。执行人：本站值班观测员。',
      variants: [
        {
          requires: ['c6_entry_raw'],
          text: '第 44 号令。参照组名单追加一项：护航母舰渡鸦号所属锚点参照一组，整组。你们交上来的航迹里有一段写入特征，编号与死航线那一次一致，那一段留在站上归档。不通知，不修正，记录满一季。执行人：本站值班观测员。'
        },
        {
          requires: ['c6_entry_edited'],
          text: '第 44 号令。参照组名单追加一项：护航母舰渡鸦号所属锚点参照一组，整组。你们交上来的航迹做过压缩，校验余数对不上，这一段交给复核组。登记照旧。不通知，不修正，记录满一季。'
        }
      ],
      next: 'c6_m16'
    },
    c6_m16: {
      id: 'c6_m16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '录音结束，会议室里只剩吊装工单的计时在角落里走。投影上那四行字还亮着：不通知，不修正，记录满一季。诺瓦把播放速度调回一倍，又听了一遍。',
      next: 'c6_m17'
    },
    c6_m17: {
      id: 'c6_m17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '章程第一条：校准站不参与任何一方的作战行动；客户数据只用于修正，不改宗旨。把客户的锚点改登记成参照组、还不通知，是拿这个站在做实验。',
      next: 'c6_m18'
    },
    c6_m18: {
      id: 'c6_m18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '校准权只管航道能不能用，不管哪条航道该坏。这条线就是他越过去的地方，也是我们文件里最好写清楚的地方。',
      next: 'c6_m19'
    },
    c6_m19: {
      id: 'c6_m19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '阅览窗口还剩三十一分钟。他们记每一次翻页，翻过什么都在他们的日志里。你们要哪一份，我就拷哪一份。',
      next: 'c6_m20'
    },
    c6_m20: {
      id: 'c6_m20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '日志页的右下角有三个按钮：申请认证副本；直接拷走原始页；只导出索引与校验值。投影边上，吊装工单的计时从二十分钟跳到十九分五十九。',
      next: 'c6_choice_data'
    },
    c6_choice_data: {
      id: 'c6_choice_data',
      kind: 'choice',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '诺瓦的手停在投影上，等你定。',
      choices: [
        {
          id: 'c6_data_certified',
          label: '「申请认证副本。慢一点，但要站上盖章的那一份。」',
          next: 'c6_m21',
          reaction: '签发流程跑满十四分钟，副本末尾盖了时间戳与两行校验值。诺瓦把副本挂进舰内日志，谁都能调阅；伊芙娜在阅览记录上签了名。',
          effects: [
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'c6_data_certified', value: true }
          ]
        },
        {
          id: 'c6_data_raw',
          label: '「直接拷原始页。别让这一份在他们的柜子里留底。」',
          next: 'c6_m21',
          reaction: '拷贝用了四十秒，日志页只多出一行读取记录，没有申请、没有签注。诺瓦把原始页锁进她自己的存储，锁完把卡从投影座上拔下来捏在手里。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'spire', amount: -1 },
            { type: 'flag', key: 'c6_data_raw', value: true }
          ]
        },
        {
          id: 'c6_data_index',
          label: '「只导出索引和校验值。坐标先带走，正文以后再取。」',
          next: 'c6_m21',
          reaction: '索引十一行，校验值两串。诺瓦把索引抄在一张数据卡的背面，正文仍留在站上；伊芙娜要求把窗口的每一条操作都写进舰内日志。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'flag', key: 'c6_data_index', value: true }
          ]
        }
      ]
    },
    c6_m21: {
      id: 'c6_m21',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '队列在阅览窗口关闭之前推来最后一行提示：校准序列将在十四分钟后开始，到时本舰锚点参照的切除权移交站方，任何人不得在中途断开链路。留言只有这一行，没有落款。',
      onEnter: [
        { type: 'flag', key: 'anchor_key_fragment_3', value: true }
      ],
      variants: [
        {
          requires: ['c6_data_certified'],
          text: '队列在阅览窗口关闭之前推来最后一行提示：校准序列将在十四分钟后开始，到时本舰锚点参照的切除权移交站方，任何人不得在中途断开链路。你手里那份副本的封页上，签发时间正好落在提示之前一分钟。'
        },
        {
          requires: ['c6_data_raw'],
          text: '队列在阅览窗口关闭之前推来最后一行提示：校准序列将在十四分钟后开始，到时本舰锚点参照的切除权移交站方，任何人不得在中途断开链路。诺瓦看着那行字，把捏在手里的数据卡塞进最里面的衣袋。'
        },
        {
          requires: ['c6_data_index'],
          text: '队列在阅览窗口关闭之前推来最后一行提示：校准序列将在十四分钟后开始，到时本舰锚点参照的切除权移交站方，任何人不得在中途断开链路。诺瓦把写着索引的那张卡在桌上敲了两下，收进了挂绳。'
        }
      ],
      next: 'c6_m22'
    },
    c6_m22: {
      id: 'c6_m22',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '「不得在中途断开」这句话本来是说给站上听的。下去两个人，跟我们自己的线缆干管对上：切断权在我们这边，只能在我们这边。',
      next: 'c6_x01'
    },
    c6_x01: {
      id: 'c6_x01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '反应堆舱中段的检修走道只有一人宽，主回路的冷蓝光从扶手底下透上来，噪声大到说话得贴着耳朵。线缆干管从顶板走到舱壁，干管中段那一只配电盘上并着两根线：一根是舰内参照总线，另一根是刚刚接进来的校准链路。',
      next: 'c6_x02'
    },
    c6_x02: {
      id: 'c6_x02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '线我认过了：这根往下走的是他们的，往上走的是我们的。切割钳就在我脚边，你说一句，三秒钟的事。',
      next: 'c6_x03'
    },
    c6_x03: {
      id: 'c6_x03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '先别动钳子。',
      next: 'c6_x04'
    },
    c6_x04: {
      id: 'c6_x04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '条款八之二我念一遍，念完再决定。校准序列开始以后，船方保留随时终止自己锚点参照服务的权利；站方不得因此留置船舶；已经发出的登记不予撤回。',
      next: 'c6_x05'
    },
    c6_x05: {
      id: 'c6_x05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '最后半句是重点。终止是我们的权利，登记是他们的既成事实。断电救不了已经写下去的那一行。',
      next: 'c6_x06'
    },
    c6_x06: {
      id: 'c6_x06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "还有一层：序列跑不完，参照值是空的。空的一组值做不成基线，他这一回就得换个地方重做。断电会让实验缺掉一整段基线数据，他只能另找一组重做。",
      next: 'c6_x07'
    },
    c6_x07: {
      id: 'c6_x07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '那就断。矿站那边的冬天，本来就是被这种东西拖着。',
      next: 'c6_x08'
    },
    c6_x08: {
      id: 'c6_x08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '断链的代价也要算完。参照表断在中间，本舰这一季拿不到修正章；没有修正章的护航舰不能带队走正式航线，冬季船队就没有领队。',
      next: 'c6_x09'
    },
    c6_x09: {
      id: 'c6_x09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '跑完呢？',
      next: 'c6_x10'
    },
    c6_x10: {
      id: 'c6_x10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "跑完可以拿章离站。但这条航道已经登记为参照组，接下来一季会暂停修正。校准章只覆盖今天的状态，下个月的漂移仍会继续。拿到章以后，我们也得另外安排监测。",
      next: 'c6_x11'
    },
    c6_x11: {
      id: 'c6_x11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '那就剩最后一条：异议。章程给站上留了一页复议表，任何一方都能在序列结束后提。表格递上去，登记挂起，修正照发，复议走完之前谁都不能拿这一组做基线。',
      next: 'c6_x12'
    },
    c6_x12: {
      id: 'c6_x12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '复议要多久？',
      next: 'c6_x13'
    },
    c6_x13: {
      id: 'c6_x13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '章程写的是三个工作周。实际会拖，拖的过程里他们不能动那一组，也不能动我们。',
      next: 'c6_x14'
    },
    c6_x14: {
      id: 'c6_x14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'doran',
      text: '三个星期，够他们把复议表从抽屉里拿出来再放回去六次。',
      next: 'c6_x15'
    },
    c6_x15: {
      id: 'c6_x15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '够。复议表递上去，值班观测员必须当天录入；录入本身就是记录。他们在自己的日志里写下一个「争议」，这一行以后撤不掉。',
      next: 'c6_x16'
    },
    c6_x16: {
      id: 'c6_x16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '配电盘上的指示灯跳了一格：序列开始的倒计时进入最后三分钟。薇拉把手套往上拉了拉，手按在干管的支架上；伊芙娜走到配电盘前面，站定，没有碰任何开关。',
      next: 'c6_x17'
    },
    c6_x17: {
      id: 'c6_x17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '都退到扶手后面。这条线今天只由一个人碰，那个人站在这里签字，出了事也是她一个人写报告。',
      next: 'c6_x18'
    },
    c6_x18: {
      id: 'c6_x18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '钳子留在地上。你要用，喊我一声就行，我不走远。',
      next: 'c6_x19'
    },
    c6_x19: {
      id: 'c6_x19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '倒计时走到零。干管里传来一声很轻的接合音，校准链路开始工作；配电盘上的两根线变成同一种亮度。队列终端在走道尽头亮着，等着船方把第一次确认按下去。',
      next: 'c6_x20'
    },
    c6_x20: {
      id: 'c6_x20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '确认页上有三行字，伊芙娜把屏幕转向你，让你先看：序列运行中；终止权在船方；登记不可撤回。她的手停在总闸旁边，等的是谁有权下这一刀。',
      next: 'c6_choice_power'
    },
    c6_choice_power: {
      id: 'c6_choice_power',
      kind: 'choice',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '反应堆舱的噪声压在两个人中间。开关就在伊芙娜手边，第一格是切断，第二格是确认。',
      choices: [
        {
          id: 'c6_power_cut',
          label: '「切断。今天先让他的实验缺一条基线。」',
          next: 'c6_x21',
          reaction: '伊芙娜扳下第一格，链路在两秒内断开。参照表停在一个不完整的数上；她当场打印了终止单，签上编号，让薇拉送往队列。地上那把切割钳一直没动。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'spire', amount: -1 },
            { type: 'flag', key: 'c6_power_cut', value: true }
          ]
        },
        {
          id: 'c6_power_complete',
          label: '「跑完。章拿到手，剩下的事我们自己盯。」',
          next: 'c6_x21',
          reaction: '伊芙娜按下确认，序列走满全程。修正章在四分钟后进了队列，页面干净，编号齐整。铎兰把切割钳收回箱子里，收得比平时重。',
          effects: [
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'trust', who: 'doran', amount: -1 },
            { type: 'flag', key: 'c6_power_complete', value: true }
          ]
        },
        {
          id: 'c6_power_object',
          label: '「跑完，但把复议表递上去——让『争议』两个字写进他们的日志。」',
          next: 'c6_x21',
          reaction: '序列走满，修正章到手；同一分钟内，薇拉把复议表递进队列，条理清楚，把四十四号令的原文与章程第一条抄在同一页上。值班观测员当天录入了「争议」。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'c6_power_object', value: true }
          ]
        }
      ]
    },
    c6_x21: {
      id: 'c6_x21',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "队列在三十秒后推来新的一行。离站限制通知：本舰登记类别已更新为参照组，离站前须接受台账核对，核对期内不得离泊；未提交的阅览副本一并核对。",
      variants: [
        {
          requires: ['c6_power_cut'],
          text: "队列在三十秒后推来新的一行。离站限制通知：本舰终止校准序列已登记；因参照值不完整，本舰离站前须接受台账核对，核对期内不得离泊。"
        },
        {
          requires: ['c6_power_complete'],
          text: "队列在三十秒后推来新的一行。离站限制通知：本舰登记类别已更新为参照组，离站前须接受台账核对，核对期内不得离泊；已发出的修正章在核对期间冻结。"
        },
        {
          requires: ['c6_power_object'],
          text: "队列在三十秒后推来新的一行。离站限制通知：本舰复议申请已录入，登记挂起；挂起期间本舰参照组类别保留，离站前须接受台账核对，核对期内不得离泊。"
        }
      ],
      next: 'c6_x22'
    },
    c6_x22: {
      id: 'c6_x22',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '台账核对是几天？',
      next: 'c6_x23'
    },
    c6_x23: {
      id: 'c6_x23',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '章程写三天，实际排到下周。船队两天后装货，我们还欠九个半小时的吊装收尾。',
      variants: [
        {
          requires: ['c6_entry_labor'],
          text: '章程写三天，实际排到下周。船队两天后装货，吊装那边还差九个半小时才收尾，我们等不起。'
        }
      ],
      next: 'c6_x24'
    },
    c6_x24: {
      id: 'c6_x24',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "他们已经在留置本舰了。全体回岗位，机库准备出机，按离站流程走。",
      next: 'c6_f01'
    },
    c6_f01: {
      id: 'c6_f01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '机库减压完成，两台机体先后出库。灰鸢在前面，夜枭的探测臂收在身前，右腿外侧那圈空壳合着盖。舰体这一侧，系缆臂的磁扣同时松开，四台横向推进器把渡鸦号从泊位上推出去。',
      variants: [
        {
          requires: ['c6_entry_labor'],
          text: '机库减压完成，夜枭先出库。灰鸢还挂在吊装轨道的端头上，左肩双环吊着那件三吨半的标准件；站上的工单计时停在十九分四十。系缆臂的磁扣同时松开，四台横向推进器把渡鸦号从泊位上推出去。'
        }
      ],
      next: 'c6_f02'
    },
    c6_f02: {
      id: 'c6_f02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'system',
      text: '广播：三号机库减压完成。灰鸢出库，夜枭出库。\n广播：全舰武器电路保持冷态，两座炮位锁扣未解锁。',
      next: 'c6_f03'
    },
    c6_f03: {
      id: 'c6_f03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '方位〇四〇，慢车。铎兰，把他们的链路剪断——就现在。',
      next: 'c6_f04'
    },
    c6_f04: {
      id: 'c6_f04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '干管里，切割钳在敷设层外面掐进去，两下断开，断口弹在支架上。队列终端上的阅览窗口一起消失，站上的校准链路从头到尾只剩一段残线挂在渡鸦号的系缆座上，随舰体一起漂走。',
      next: 'c6_f05'
    },
    c6_f05: {
      id: 'c6_f05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: '两条拖船离位，方位一七五，距离两千三，相对速度在加。前面那条的外壳里装着缆索抛射器，后面那条挂着两副钳爪。',
      next: 'c6_f06'
    },
    c6_f06: {
      id: 'c6_f06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'system',
      text: '队列警告：本舰离泊未获台账核对，责令立即停止。三十秒内不停止，按站内处置执行。',
      next: 'c6_f07'
    },
    c6_f07: {
      id: 'c6_f07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '记下时间，不理它。全舰照常加速。',
      next: 'c6_f08'
    },
    c6_f08: {
      id: 'c6_f08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '前拖船的腹部亮了一下，一条缆索带着配重飞出来，冲的是渡鸦号尾部的推进环。灰鸢从舰腹斜切上去，左肩的牵引钩主动迎住缆索；配重缠上挂钩的瞬间，机身被拽得横过来。',
      variants: [
        {
          requires: ['c6_entry_labor'],
          text: '灰鸢先把双环上的标准件松开。三吨半的校准件离钩以后贴着轨道漂开，工单计时当场归零。前拖船的腹部亮了一下，一条缆索带着配重飞出来，冲的是渡鸦号尾部的推进环；灰鸢从舰腹斜切上去，左肩的牵引钩主动迎住缆索。'
        }
      ],
      next: 'c6_f09'
    },
    c6_f09: {
      id: 'c6_f09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '钩子吃住了。卸压。',
      next: 'c6_f10'
    },
    c6_f10: {
      id: 'c6_f10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: '卸压阀在你左手边第二格。松完别往外推，往舰腹里收，绳子会自己滑下去。',
      next: 'c6_f11'
    },
    c6_f11: {
      id: 'c6_f11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '挂钩松开，缆索滑下去了；灰鸢打了个横滚，左肩那块颜色不一样的替换件在配重上擦出一串亮痕，装甲没破。缆索甩回拖船自己身上，缠住了它的抛射管。',
      next: 'c6_a17'
    },
    c6_a17: {
      id: 'c6_a17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '前拖船的推进段亮起来，灰鸢翻身离开它的时候，那台拖船正打着横转，缠住的抛射管拖出一条散索。渡鸦号的舰体在它上方两百米处切过去，转向的过载让右舷那道临时压条又翘起一角。',
      next: 'c6_a18'
    },
    c6_a18: {
      id: 'c6_a18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '左舵十五，桨距七成。把舰尾的推进环从他们的轴线上挪开。',
      next: 'c6_a19'
    },
    c6_a19: {
      id: 'c6_a19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: '第一条在一千一百，方位一九〇，正在打横；第二条在三千二，方位一六五，速度还在加。第二条的钳爪已经张开。',
      next: 'c6_a20'
    },
    c6_a20: {
      id: 'c6_a20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '灰鸢回舰腹，压在夜枭外侧——她那个位置不能动。',
      next: 'c6_a21'
    },
    c6_a21: {
      id: 'c6_a21',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '舰内降到三成重力，机库的工具袋从挂钩上飘起来，被安全网兜住。帆布带勒进肩胛，你把脚扣按实；座舱外的舰体像一条被水冲着的长板，舷侧那排灯一盏盏从视野里过去。',
      next: 'c6_a22'
    },
    c6_a22: {
      id: 'c6_a22',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: '右舷第二道隔舱的临时压条崩了一根，内层板没透。那一段别派人过去，等打完我再上。',
      next: 'c6_a23'
    },
    c6_a23: {
      id: 'c6_a23',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '那一段封闭通行。损管守在门外面，谁都不许进去。',
      next: 'c6_a24'
    },
    c6_a24: {
      id: 'c6_a24',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '灰鸢压到夜枭外侧的时候，第二条拖船的抛射管正好抬起。灰鸢把左肩摆到射线上，那块颜色不一样的替换件迎着对方的管口；拖船迟疑了半秒——这半秒被夜枭的探测臂完整收进记录里。',
      next: 'c6_a25'
    },
    c6_a25: {
      id: 'c6_a25',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '第二发落在框边，时间戳还在走。记录没断。',
      next: 'c6_a26'
    },
    c6_a26: {
      id: 'c6_a26',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '第二条拖船把钳爪收到了最低位，速度压上来，从斜下方切向他们自己开的那条射击线；站脊的标记灯在它背后排成一条直线。',
      next: 'c6_f12'
    },
    c6_f12: {
      id: 'c6_f12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '后面那条拖船不再抛索。它把钳爪收平，腹部打开一只方口，一枚切割装药贴着直线飞过来，落在渡鸦号天线阵的基座上。爆光过后，阵面缺了一角，两条图传一起断掉。',
      next: 'c6_f13'
    },
    c6_f13: {
      id: 'c6_f13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '天线阵缺角，图传两条断。全舰保持武器冷态。',
      next: 'c6_f14'
    },
    c6_f14: {
      id: 'c6_f14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: "这就是开火。墙里每一次放电，阵列都记；他们那一发会被写成「内务处置」，编号在他们自己手里。我们得留下独立观测记录。",
      next: 'c6_f15'
    },
    c6_f15: {
      id: 'c6_f15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '夜枭没有等命令。它从舰腹阴影里横移出去两百米，三合一探测臂抬平，把拖船与站阵列之间那条线收进取景框；机身前压，姿态稳在记录所需的角速度上。',
      next: 'c6_f16'
    },
    c6_f16: {
      id: 'c6_f16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '记录开始。首发时间已经落在帧上，角度标在臂端，我不会挪。',
      next: 'c6_f17'
    },
    c6_f17: {
      id: 'c6_f17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '第二枚装药在她的取景框边缘炸开，测距回波糊成一片白。夜枭肩背后面那两扇折叠探测架，左后这一扇的壳体起了火星，机身抖了一下，又稳住；探测臂一秒没偏。',
      next: 'c6_f18'
    },
    c6_f18: {
      id: 'c6_f18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '左后那一扇探测架外壳过热，记录没断。再给我十二秒。',
      next: 'c6_f19'
    },
    c6_f19: {
      id: 'c6_f19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '夜枭退到舷侧，记录交给舰上。',
      next: 'c6_f20'
    },
    c6_f20: {
      id: 'c6_f20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '舰上天线阵刚缺了一角，图传断了两条。我这边只剩外壳过热。不退。',
      next: 'c6_f21'
    },
    c6_f21: {
      id: 'c6_f21',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '两条拖船并成一列，钳爪重新张开，从斜下方切向渡鸦号的舷侧——那是靠帮抓人的姿态。站脊的标记灯在舰队边缘排成一条直线，最后一枚浮标在两公里外。',
      next: 'c6_a58'
    },
    c6_a58: {
      id: 'c6_a58',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: '前一条的抛射管还缠着散索，后一条的管口已经抬平——它在装第二根缆。',
      next: 'c6_a59'
    },
    c6_a59: {
      id: 'c6_a59',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '推进环护罩放下，机库把外挂件全部收进固定位。灰鸢与夜枭跟着舰体走，别抢在舰首前面。',
      next: 'c6_a60'
    },
    c6_a60: {
      id: 'c6_a60',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '姿态喷口在舰首两侧吐出一串白点，渡鸦号把舰体贴着站脊外侧的吊装轨道压进去，两层阴影叠在一起。最后一枚浮标从主屏左下角移出来，距离八百米。',
      next: 'c6_a61'
    },
    c6_a61: {
      id: 'c6_a61',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '灰鸢在位，夜枭跟着我。舰尾交给你，舰桥。',
      next: 'c6_f22'
    },
    c6_f22: {
      id: 'c6_f22',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '他们要抓船。炮位解锁需要两个人授权，我给你两秒钟决定——打，还是不打。',
      next: 'c6_choice_fire'
    },
    c6_choice_fire: {
      id: 'c6_choice_fire',
      kind: 'choice',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '主屏上的距离读数跳到六百米。拖船的钳爪已经对准舷侧接口。',
      choices: [
        {
          id: 'c6_fire_precise',
          label: '「打动力段。只打动力段。」',
          next: 'c6_f23',
          reaction: '两发成一条线：第一发掀掉前拖船动力舱的外罩，第二发切进它的推进器支架，那台拖船当场偏航，撞开自己的同伴，两条一起脱离轴线。阵列记录里多了一行：渡鸦号开火，目标动力段。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'flag', key: 'c6_fire_precise', value: true }
          ]
        },
        {
          id: 'c6_fire_blind',
          label: '「打阵列馈源。让他们记不全这一段。」',
          next: 'c6_f23',
          reaction: '一发从站脊上方切过去，落在阵列馈源的支撑座上，馈源偏了两度多。站上的记录缺了一截，本舰那一发也一起缺在里头。站脊上的标记灯暗了一片。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'standing', who: 'spire', amount: -1 },
            { type: 'flag', key: 'c6_fire_blind', value: true }
          ]
        },
        {
          id: 'c6_fire_hold',
          label: '「不开火。拿系缆臂和吊装轨的阴影飞出去。」',
          next: 'c6_f23',
          reaction: '炮位保持冷态。渡鸦号贴着站脊外侧的吊装轨道飞，把舰体缩进轨道的阴影里；拖船的钳爪在舷侧抓了两把，外层板被撕开一条长口子，舰体抖得像要散，但屏幕上始终没有出现本舰开火那一行。',
          effects: [
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'flag', key: 'c6_fire_hold', value: true }
          ]
        }
      ]
    },
    c6_f23: {
      id: 'c6_f23',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '渡鸦号压在最后一枚浮标上方过去，两条拖船在标线内侧停下。标线是墙的边：出了线，他们就没有处置权，追出来等于把自己也写进记录。主屏上，静默壁缩成一块亮斑，慢慢落在舰尾。',
      variants: [
        {
          requires: ['ship_damage_high'],
          text: '渡鸦号压在最后一枚浮标上方过去，两条拖船在标线内侧停下。舰体过线时抖了三次：左舷第三块补板渗气加快，右舷多出的那道长口子盖住了两格舷窗。主屏上，静默壁缩成一块亮斑，慢慢落在舰尾。'
        },
        {
          requires: ['c6_fire_hold'],
          text: '渡鸦号压在最后一枚浮标上方过去，两条拖船在标线内侧停下。过线以后舰身还在小幅摆动，右舷那道长口子从舰桥下面一直划到尾部，两层外板一起卷了边。主屏上，静默壁缩成一块亮斑，慢慢落在舰尾。'
        }
      ],
      next: 'c6_f24'
    },
    c6_f24: {
      id: 'c6_f24',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '夜枭最后归舰，左后那一扇探测架的外壳蒙着一层黑，探测臂收进身前时卡了一下，第二下才到位。机库重新加压的时候，全舰的警铃才停下来。',
      next: 'c6_n01'
    },
    c6_n01: {
      id: 'c6_n01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '渡鸦号在外环航段上压着巡航速度飞，舰身每隔一阵轻轻抖一下：舰首两侧的姿态喷管在配平航向，脉冲顺着龙骨传到右舷那块卷了边的外板上。舰钟走到夜里第二班，观察廊只开了靠窗那排地灯；静默壁缩成舰尾的一个小点，早就看不见了。',
      next: 'c6_n02'
    },
    c6_n02: {
      id: 'c6_n02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '长桌上摊着一只帆布袋，袋口的封条剪开了：系泊的时候，站上民邮把攒了三个月的邮件一并转了过来。四个纸包，一张清单，还有一只空袋子，袋角印着「转」字。',
      next: 'c6_n03'
    },
    c6_n03: {
      id: 'c6_n03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '让让，让让，手上有机油。',
      next: 'c6_n04'
    },
    c6_n04: {
      id: 'c6_n04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '铎兰把一只铁盒放在桌上，盒盖压着一张手写标签，字迹圆胖。他抹了两把手，才去拆封条；标签上写着：辣酱，给你船上的人，别省着吃。',
      next: 'c6_n05'
    },
    c6_n05: {
      id: 'c6_n05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '家里人怎么知道往这儿寄？',
      next: 'c6_n06'
    },
    c6_n06: {
      id: 'c6_n06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '锚链上的民邮都存船名，船到哪个站，邮件往哪个站转。这盒东西在外环绕了四个月，今天才追上我们。',
      next: 'c6_n07'
    },
    c6_n07: {
      id: 'c6_n07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '伊芙娜拆开自己的那个纸包，里面是两副新的白带手套。她把旧的那双从腰袋里抽出来比了比，旧手套的虎口已经磨得发亮；新的一副她当场戴上，活动了一下手指，另一副塞进柜子里。',
      next: 'c6_n08'
    },
    c6_n08: {
      id: 'c6_n08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '我的是一盒扣环。',
      next: 'c6_n09'
    },
    c6_n09: {
      id: 'c6_n09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '定的时候我还在塔里，扣环是配旧挂绳的，现在这根我缝过。两个都用，坏一个换一个，这回能撑到归港。',
      next: 'c6_n10'
    },
    c6_n10: {
      id: 'c6_n10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '清单上只剩一行没有主人：一只帆布袋，寄件人栏空着，收件人栏写的是「渡鸦号第三小队」。薇拉把袋子翻过来看了看，又读了清单背面印的货物申报。',
      next: 'c6_n11'
    },
    c6_n11: {
      id: 'c6_n11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '这盒辣酱申报的是「干货，非易燃」。标签上写百分之七十是油，油是易燃的。这一行填错了。',
      next: 'c6_n12'
    },
    c6_n12: {
      id: 'c6_n12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '你连这个也看？',
      next: 'c6_n13'
    },
    c6_n13: {
      id: 'c6_n13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '纸上写着字。等的时间够长，就都看完了。',
      next: 'c6_n14'
    },
    c6_n14: {
      id: 'c6_n14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '行，吃辣的都是自己人。来，先抹一点点。',
      next: 'c6_n15'
    },
    c6_n15: {
      id: 'c6_n15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '厚厚的一层抹在压缩饼干上。薇拉咬了一口，停住，耳朵尖慢慢红起来，眼眶也跟着湿；她把饼干吃完，把空手伸到铁盒边上。',
      next: 'c6_n16'
    },
    c6_n16: {
      id: 'c6_n16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '再来一块。',
      next: 'c6_n17'
    },
    c6_n17: {
      id: 'c6_n17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '记下来：酸的不吃，甜的不吃，辣的再来一块。',
      next: 'c6_n18'
    },
    c6_n18: {
      id: 'c6_n18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "那次发酸是罐头坏了。偏好表记正常的味道就行，这条划掉吧。",
      next: 'c6_a27'
    },
    c6_a27: {
      id: 'c6_a27',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "甜茶罐已经见底，罐壁上糊着一层没化开的粉。热水只剩半壶，壶身烫手，桌边垫了一块布，用来隔热。",
      next: 'c6_a28'
    },
    c6_a28: {
      id: 'c6_a28',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '这罐子里的东西，一半是糖，另一半还是糖。配给表上它算饮料，不算口粮，所以三个月前就该喝完了。',
      next: 'c6_a29'
    },
    c6_a29: {
      id: 'c6_a29',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '我不喝。你们喝。',
      next: 'c6_a30'
    },
    c6_a30: {
      id: 'c6_a30',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '偏好栏今天加了三条：太甜的不喝、辣的要加厚、酸的那次不算。再攒几天，你这栏比我的观察表都长。',
      next: 'c6_a31'
    },
    c6_a31: {
      id: 'c6_a31',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '你把杯子推过去的时候，薇拉先看了一眼杯口，提起水壶倒了半杯，停住，把壶放回桌子中间。',
      next: 'c6_a32'
    },
    c6_a32: {
      id: 'c6_a32',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '半杯。广播里写的。',
      next: 'c6_n19'
    },
    c6_n19: {
      id: 'c6_n19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '窗外，舰身那一抖又来了，比刚才重些。地灯跟着晃了一下，桌上的水杯滑了半格，薇拉伸手把它按住，顺手把杯子往你那边推回来一寸。粉笔写的计数表还在窗框上，最下面添了一行：站脊暗掉的一片灯，按一次记。',
      next: 'c6_a47'
    },
    c6_a47: {
      id: 'c6_a47',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "观察廊尽头那只热水壶的壶盖在响，轻轻震了半分钟。铎兰从机库回来取工具，顺手把壶盖掀开，往里面看了一眼，说是密封圈硬了，明早去机库找一个旧垫圈换上。",
      next: 'c6_a48'
    },
    c6_a48: {
      id: 'c6_a48',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: '这壶谁用得多谁洗，上个月定的规矩。上个月是诺瓦洗的，这个月轮到你。',
      next: 'c6_a49'
    },
    c6_a49: {
      id: 'c6_a49',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '洗就洗。顺手打个赌：等我们下一次靠泊，静默壁那排标记灯亮着几盏？我先报——十一。',
      next: 'c6_a50'
    },
    c6_a50: {
      id: 'c6_a50',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '十二。进圈的时候我数过两遍：外圈十一盏，阵列基座底下还有一盏暗的，靠泊灯亮起来的时候它会跟着亮。',
      next: 'c6_a51'
    },
    c6_a51: {
      id: 'c6_a51',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '你连人家的暗灯都数。行，赌注是下次的热水，谁输了谁先洗壶。',
      next: 'c6_a52'
    },
    c6_a52: {
      id: 'c6_a52',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "壶盖重新盖回去，响声闷了。薇拉把杯子里的水喝到见底，杯底那点沉淀她用指尖抹干净，随后看了看计数表，把笔搁回旁边。",
      next: 'c6_n20'
    },
    c6_n20: {
      id: 'c6_n20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '袋子里那张空清单一会我拿去做别的事。数据卡在我这儿，三份：一份是他们的原件，一份是我们拷的，一份是我们要发出去的样子。',
      next: 'c6_n21'
    },
    c6_n21: {
      id: 'c6_n21',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'player',
      text: '发出去会发生什么？',
      next: 'c6_n22'
    },
    c6_n22: {
      id: 'c6_n22',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '上链。链路电台谁都收得到，先到十七个矿站的值班台，再进三家的档案柜，前后差不到一小时。灰塔的名单会立刻多出一行：泄密来源，渡鸦号。',
      next: 'c6_n23'
    },
    c6_n23: {
      id: 'c6_n23',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '矿站那边的冬天也不会因为收到这条就更暖。他们要么关掉本季的校准申请自己扛，要么把这份东西摆到台面上跟灰塔对质；两条路都要他们自己走。',
      variants: [
        {
          requires: ['c6_fire_hold'],
          text: "矿站那边的冬天也不会因为收到这条就更暖。他们要么关掉本季的校准申请自己扛，要么把这份东西摆到台面上跟灰塔对质；两条路都要他们自己走。记录上能核实墙内那一枪的来源，他们拿去对质时有完整的时间和方位证据。"
        },
        {
          requires: ['c6_fire_precise'],
          text: '矿站那边的冬天会更冷一格：墙里开过火，那一片的校准认证当场作废，下一季之前补不回来；这份东西一发出去，他们就得同时应付灰塔和作废的证书。'
        },
        {
          requires: ['c6_fire_blind'],
          text: '矿站那边最难受。馈源坏在我们那一发上，静默壁这一季报不出任何认证；这份东西一发出去，他们手里的证书和证据一起作废，只剩我们自己那一份记录能说话。'
        }
      ],
      next: 'c6_n24'
    },
    c6_n24: {
      id: 'c6_n24',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '压着又会怎么样？',
      next: 'c6_n25'
    },
    c6_n25: {
      id: 'c6_n25',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "压着就只有我们四个人知道。他照样发他的四十四号令，下一个参照组换一条船；我们手里这份东西越来越旧，拖得越久，越难证明中间的保管过程。",
      next: 'c6_n26'
    },
    c6_n26: {
      id: 'c6_n26',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她把数据卡在指尖转了一圈，放回桌上。铁盒还开着，辣酱边缘凝了一层红油；伊芙娜戴着新手套坐在窗边，没催；铎兰把饼干碎扫到手掌里，倒进袋子。',
      next: 'c6_n27'
    },
    c6_n27: {
      id: 'c6_n27',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '我的报告已经交上去了，那是我自己的结论，谁都改不了。手里这一份不一样：它归全船。发，还是压？',
      next: 'c6_choice_publish'
    },
    c6_choice_publish: {
      id: 'c6_choice_publish',
      kind: 'choice',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '数据卡停在桌子中间。窗外的舰身又抖了一下，卡在桌面上滑出去半厘米。',
      choices: [
        {
          id: 'c6_publish_open',
          label: '「发出去。上链，谁都不用私下接。」',
          next: 'c6_n28',
          reaction: '链路上，诺瓦把三段数据、四十四号令的录音和北七的记录一起发了出去，落款写的是渡鸦号，没有写人名。发完十二分钟，第一个回复来自外环一个矿站的值班台，只有两个字：收到。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: 2 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'standing', who: 'spire', amount: -1 },
            { type: 'flag', key: 'c6_publish_open', value: true },
            { type: 'flag', key: 'nova_report_public', value: true }
          ]
        },
        {
          id: 'c6_publish_hold',
          label: '「压着。先把它带回港，让该看的人当面看。」',
          next: 'c6_n28',
          reaction: '诺瓦把卡收进最里面的衣袋，扣好扣子，在登记表上写「暂存舰内」。她把那张空清单折起来，塞进了袋口。',
          effects: [
            { type: 'trust', who: 'nova', amount: -1 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'c6_publish_hold', value: true },
            { type: 'flag', key: 'nova_report_public', value: false }
          ]
        },
        {
          id: 'c6_publish_stations',
          label: '「先发给矿站。谁要过冬，先让谁看。」',
          next: 'c6_n28',
          reaction: '诺瓦没有上主链路，只用外环的民用电台把数据整段发了过去，附了一行说明与一条回信址。天亮之前，三个矿站回信要求核对原件；灰塔的档案柜里什么都没有多。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'flag', key: 'c6_publish_stations', value: true },
            { type: 'flag', key: 'nova_report_public', value: false }
          ]
        }
      ]
    },
    c6_n28: {
      id: 'c6_n28',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "事情处理完，你们把桌面收好，各自回岗。铎兰先回机库去焊那道口子，伊芙娜去了损管值班；诺瓦把空清单夹在计数表下面，说这份纸她要留着写字。",
      variants: [
        {
          requires: ['c6_publish_open'],
          text: "发送结束，诺瓦确认收件灯亮起，大家才各自回岗。铎兰先回机库去焊那道口子，伊芙娜去了损管值班；诺瓦把发射记录抄进舰内日志，签了名。链路电台的指示灯在她背后一直亮着。"
        },
        {
          requires: ['c6_publish_hold'],
          text: "卡片收好，诺瓦扣上盒盖，大家各自回岗。铎兰先回机库去焊那道口子，伊芙娜去了损管值班；诺瓦把空清单夹在计数表下面，说这份纸她要留着写字。"
        },
        {
          requires: ['c6_publish_stations'],
          text: "民用电台的发射记录里只有三个收件址，没有落款。最后一个收件灯亮起以后，大家各自回岗。铎兰先回机库去焊那道口子，伊芙娜去了损管值班；诺瓦把空清单夹在计数表下面。"
        }
      ],
      next: 'c6_a62'
    },
    c6_a62: {
      id: 'c6_a62',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '剩下的东西要收拾。铁盒盖上，盖子边上的红油用纸巾抹掉；饼干袋折了两折，剩下的半袋放回柜子；壶盖的响声这回落在了点上，听起来顺。',
      next: 'c6_a63'
    },
    c6_a63: {
      id: 'c6_a63',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '到港第一顿我想吃热的。联合港码头外面有一家卖汤面的，碗大，加两勺辣子，排半个小时也值。',
      next: 'c6_a64'
    },
    c6_a64: {
      id: 'c6_a64',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '港区有没有卖小号锉刀和白胶布的铺子？机库那套锉刀只剩两把能用，胶布也快用完了。',
      next: 'c6_a65'
    },
    c6_a65: {
      id: 'c6_a65',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '有，上次那条街往里走第三个铺子，老板会把工具摆到人行道上。到了港我带你去，你负责讲价，我负责在旁边听。',
      next: 'c6_a66'
    },
    c6_a66: {
      id: 'c6_a66',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "薇拉把这句话记在了随身的小本子上，在新的一行写下「第三个铺子」，又在旁边补了个小箭头。窗口那一片霜化开了一小块，露出玻璃外面深色的空处。",
      next: 'c6_n29'
    },
    c6_n29: {
      id: 'c6_n29',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '廊里只剩你和薇拉。她把铁盒盖上，扣好，把饼干袋口折了两折；两手都在忙，眼睛却看着窗外那条稳定下来的光带。',
      next: 'c6_n30'
    },
    c6_n30: {
      id: 'c6_n30',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'ship_rail',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '机库那边还有一台机的探测架外壳要换。我先过去了；你要来就来，来晚了我就先拆。',
      next: 'c6_h01'
    },
    c6_h01: {
      id: 'c6_h01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '夜班的三号机库只开一半工作灯。靠舷侧那一片，铎兰在焊内层板，焊枪压在铜色的左手上，弧光一闪一闪，焊渣掉在接盘里；另一头，夜枭肩背后面那两扇折叠探测架，左后这一扇的壳体已经卸下来靠在支架上，焦痕从卡扣一直爬到散热口。',
      next: 'c6_h02'
    },
    c6_h02: {
      id: 'c6_h02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '扶一下外壳，别让它压到线束。热量往下走，你托内侧那一半。',
      next: 'c6_h03'
    },
    c6_h03: {
      id: 'c6_h03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '外壳是两片拼的，内侧一片比外侧沉。你把内侧托起来的时候，薇拉把卡扣一个个松开，旧的探针从座孔里退出来，金属碰金属，声音很脆。备件是新喷的哑光灰绿，颜色比机身上的浅一点。',
      next: 'c6_h04'
    },
    c6_h04: {
      id: 'c6_h04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '记录存在臂端的存储里，一共四分十一秒。第一发的帧我单独标了出来，标在第七十二帧；后面每一次装药爆开，都有一帧时间戳跟着。',
      next: 'c6_h05'
    },
    c6_h05: {
      id: 'c6_h05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '你打算把它交给谁？',
      next: 'c6_h06'
    },
    c6_h06: {
      id: 'c6_h06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '给诺瓦。要发，用得上；不发，也在舰内日志里留一份原件副本。两份都走登记，时间戳写在一起。',
      next: 'c6_h07'
    },
    c6_h07: {
      id: 'c6_h07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '三份。',
      next: 'c6_h08'
    },
    c6_h08: {
      id: 'c6_h08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '为什么是三份？',
      next: 'c6_h09'
    },
    c6_h09: {
      id: 'c6_h09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '留一份给船上，交一份出去，再留一份防着「交出去的那一份出意外」。我修船修了十几年，见过太多只留一份的东西——丢的都是那一份。',
      next: 'c6_h10'
    },
    c6_h10: {
      id: 'c6_h10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '读写器在三号工作台上，一共三个卡位。第一张写进舰内日志的存储区，第二张装进封套准备随船；诺瓦从舰桥下来取走第二张的时候，顺手把登记表夹回板子上，表上写着「两份，均已登记」。',
      next: 'c6_h11'
    },
    c6_h11: {
      id: 'c6_h11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '舰内日志这一条我签完了：文件名、总时长、第七十二帧的校验值都写在备注里。诺瓦那边我只交出副本，原件留在日志里，谁要动都得留痕。',
      next: 'c6_h12'
    },
    c6_h12: {
      id: 'c6_h12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '诺瓦走后，工作台那头的读写器没有停。第三个卡位里还插着一张空卡，指示灯多亮了一格。铎兰背对着台面，把手上的油擦在布上，擦完才走到台边。',
      next: 'c6_h13'
    },
    c6_h13: {
      id: 'c6_h13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第三张卡写满之后，他把卡从卡位里退出来，用拇指抹掉卡面的浮灰，走到自己那只工具箱前。第二格的锁扣转了两圈，卡进去，锁扣再转两圈。他没有跟任何人说起这件事，机库里也没有别人看见。',
      onEnter: [
        { type: 'flag', key: 'c6_doran_hidden_copy', value: true }
      ],
      next: 'c6_h14'
    },
    c6_h14: {
      id: 'c6_h14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '外壳换好以后，工具箱成了桌子。铁盒放在正中间，压缩饼干摆在旁边，半瓶温水泡着最后一点甜茶粉。铎兰说这叫夜班饭，吃的时候不谈船，规矩是他定的，理由是谈了也得吃。',
      next: 'c6_h15'
    },
    c6_h15: {
      id: 'c6_h15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '晚班这顿最要紧。白天吃的是给活干，晚上吃的才是给自己。',
      next: 'c6_h16'
    },
    c6_h16: {
      id: 'c6_h16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '那盒辣酱是你家里人做的？',
      next: 'c6_h17'
    },
    c6_h17: {
      id: 'c6_h17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '盒子上那个字是家里人的签法。这盒东西在外环绕了四个月，绕到我手上，说明这一带我还没被划掉。',
      next: 'c6_h18'
    },
    c6_h18: {
      id: 'c6_h18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '没被划掉是什么标准？',
      next: 'c6_h19'
    },
    c6_h19: {
      id: 'c6_h19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '能吃辣，不告状。你要是两条都占，我给你留一块加厚的。',
      next: 'c6_h20'
    },
    c6_h20: {
      id: 'c6_h20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '加厚的那块真给他切下来了，抹得比别人厚一倍。薇拉吃到第二口的时候放下了饼干，把杯子里的温水喝掉一半，又拿起来接着吃。她这次没有把饼干掰成一样大的两块。',
      next: 'c6_a33'
    },
    c6_a33: {
      id: 'c6_a33',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '内层板的焊缝在后半夜凉下来。铎兰用硬刷把焊皮刷掉，拿小锤一段一段敲，敲到中间那一段的时候音色不对，他把那一段重新开了坡口，补第二遍。',
      next: 'c6_a34'
    },
    c6_a34: {
      id: 'c6_a34',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '内层我焊死了，外层得整片换。十一米的卷边，坞里得搭两排脚手架，最快也要九天；到了港先别急着卸货，先把坞位定下来。',
      next: 'c6_a35'
    },
    c6_a35: {
      id: 'c6_a35',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '进港以后，夜枭的登记怎么办？登记线圈现在在我工具袋里，机体在册子里是无登记状态。',
      next: 'c6_a36'
    },
    c6_a36: {
      id: 'c6_a36',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'system',
      text: '广播：登记手续按维护日志的记录走，原因栏已经写清，责任人栏不变。\n广播：机库作业照常，坞位安排等进港后由值班室答复。',
      next: 'c6_a37'
    },
    c6_a37: {
      id: 'c6_a37',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '线圈拆了，你后悔吗？',
      next: 'c6_a38'
    },
    c6_a38: {
      id: 'c6_a38',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '不后悔。线圈拆掉，机体少一条能被别人读到的线；手续补得上就补，补不上就多跑几趟窗口。两件事不在一个分量上。',
      next: 'c6_a67'
    },
    c6_a67: {
      id: 'c6_a67',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '铁盒的空盖被留在了工作台上。铎兰把盖子翻过来当小碟，拧下来的四颗非标螺栓摆进去，一颗不乱。',
      next: 'c6_a68'
    },
    c6_a68: {
      id: 'c6_a68',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '明早的活排一下：先试吊，再把我台面上那些东西收进柜子；工具箱的盖子记得合上，压着的东西多。',
      next: 'c6_a69'
    },
    c6_a69: {
      id: 'c6_a69',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '读写器的卡位我要擦一遍，灰积在触点上会写坏卡。擦完我给你报。',
      next: 'c6_h21'
    },
    c6_h21: {
      id: 'c6_h21',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '新换的左后探测架外壳信号偏了零点三度。等外壳凉下来我再校一次，校完把结果写进夜班的日志。',
      next: 'c6_h22'
    },
    c6_h22: {
      id: 'c6_h22',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'doran',
      text: "夜班日志稍晚些交也来得及。饼还热着，先吃。",
      next: 'c6_h23'
    },
    c6_h23: {
      id: 'c6_h23',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '吃完以后，夜班饭就算散了，后半班的活接上来。薇拉绕到夜枭右腿那边收工具；经过那圈空壳的时候，她抬手在壳面上敲了两下，像敲门一样，声音闷。敲完她才蹲下去核对卡扣的扭力，一个一个过。',
      next: 'c6_h24'
    },
    c6_h24: {
      id: 'c6_h24',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '外壳这四个卡扣我明天早上再过一遍。你要是来机库，就先喊我，省得你站在旁边看半小时。',
      next: 'c6_h25'
    },
    c6_h25: {
      id: 'c6_h25',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'system',
      text: '广播：损管值班报告，右舷外层板卷边长度十一米，临时压条已加装，可维持至归港。\n广播：一小时后舰桥集合，全员，讨论第四十四号令的处置。',
      next: 'c6_h26'
    },
    c6_h26: {
      id: 'c6_h26',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '弧光那一片终于灭了。铎兰收起焊枪，走到工具箱前面，把手放在盖子上停了一下，才拔掉钥匙。三号机库的灯一排排关到只剩出口那一盏，两台机体在暗处并排放着，一台的右腿外侧空着一圈，一台的左肩颜色和别处不一样。',
      next: 'c6_z01'
    },
    c6_z01: {
      id: 'c6_z01',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '舰钟三点一十。主屏上是霜环航道的半边图：静默壁在舰尾方向，外环矿站的位置像一把散开的钉子。渡鸦号把航向压在外环航段上，右舷的临时压条每隔几分钟响一次，声响传进舰桥就像有人用指节敲铁皮。',
      next: 'c6_z02'
    },
    c6_z02: {
      id: 'c6_z02',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '把四十四号令拼成一份能用的东西。谁能用它、怎么用、用了以后谁先倒霉，都在桌上说清楚。',
      next: 'c6_z03'
    },
    c6_z03: {
      id: 'c6_z03',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '三段已经在屏上了：四十四号令的原文和录音；北七航段的撤销记录；参照组与实验组的定义。三段的签发印记是同一枚，时间落在三个不同的年份。',
      next: 'c6_z04'
    },
    c6_z04: {
      id: 'c6_z04',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '第四段接在这儿：墙里的第一发落在 04:41:12，是他们的钳爪拖船开的；我们回击或不回击，记在后面。这一段我签了名，校验值和第七十二帧绑在一起。',
      next: 'c6_z05'
    },
    c6_z05: {
      id: 'c6_z05',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '拼起来是什么？',
      next: 'c6_z06'
    },
    c6_z06: {
      id: 'c6_z06',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "他的实验是这样排的：对照组的航道不许动，实验组的航道先毁一次，两组一对比，报告就干净了。死航线是第一组，沧澜近海那次封锁是第二组，去年的北七是第三组；对照组他一直缺一条——一条始终保持原状的航道。现在那一条是我们。",
      onEnter: [
        { type: 'flag', key: 'know_vester_method', value: true }
      ],
      next: 'c6_a53'
    },
    c6_a53: {
      id: 'c6_a53',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "改写那一段我说具体点。浮标里存的是参照偏移；校准章写进去一个值，桥可以把那个值改成另一个。一枚章只能改一次，改完旧的仍留在浮标的记录里，要另开调阅申请才能提取。",
      next: 'c6_a54'
    },
    c6_a54: {
      id: 'c6_a54',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '那两段残页还在我这儿：霜环锚地抄出来的一段，沧澜那边浮标上摘的一段。把两段和站上的偏移记录摆在一起，同一条航道的偏移会前后不一样，中间那次改动落在哪个时间点，一对就知道。',
      next: 'c6_a55'
    },
    c6_a55: {
      id: 'c6_a55',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "现在时间表已经拼齐。拿着它去检验室，把各个时刻的偏移记录并排摆开，就能核实改写过程。",
      next: 'c6_a56'
    },
    c6_a56: {
      id: 'c6_a56',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '时间表我懂：对得上就是对得上。封套里那两份都是这么编的，顺序按时间，附件按来源，谁打开都不至于看错。',
      next: 'c6_a57'
    },
    c6_a57: {
      id: 'c6_a57',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '主屏上，偏移记录排成三条折线：一条平，两条在同一个时间点上折了一个小口子，折口的位置一模一样。诺瓦把两条折线叠上去，重合得几乎看不出来。',
      next: 'c6_z07'
    },
    c6_z07: {
      id: 'c6_z07',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "越界的地方写得很实：章程第一条不许站参与作战；条款八之二不许留置船舶。他把客户改登记成参照组、还不通知，两条都占。这两次操作的时间和签发记录都在这里，可以逐项核对。",
      next: 'c6_z08'
    },
    c6_z08: {
      id: 'c6_z08',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '机库这边说一句：封套在我台面上，随时能交；舰内日志那一份锁在存储区，动一下就要留痕。',
      next: 'c6_z09'
    },
    c6_z09: {
      id: 'c6_z09',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '交出去以后，谁负责证明它是真的？',
      next: 'c6_z10'
    },
    c6_z10: {
      id: 'c6_z10',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '三段自证：我这份报告里的时间戳、薇拉那段记录的校验值、站上队列的登记号。前两样在我们手上，第三样在他们手上。',
      variants: [
        {
          requires: ['c6_data_certified'],
          text: '三段自证：我这份报告里的时间戳、薇拉那段记录的校验值、站上队列的登记号。第三样我们手里有认证副本，封页上的签发时间比队列那行提示早一分钟，检验员拿这个对不出错。'
        },
        {
          requires: ['c6_data_raw'],
          text: '三段自证：我这份报告里的时间戳、薇拉那段记录的校验值、站上队列的登记号。第三样我们手里只有原始页，没有签注；他们要是问来源，就得靠前两样把时间顶住。'
        },
        {
          requires: ['c6_data_index'],
          text: '三段自证：我这份报告里的时间戳、薇拉那段记录的校验值、站上队列的登记号。第三样我们只带走索引和校验值，正文还在他们柜子里；要用，得回去取，取的时候他们大概率已经把柜子锁了。'
        }
      ],
      next: 'c6_z11'
    },
    c6_z11: {
      id: 'c6_z11',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "队列日志里那一页在屏幕上停着：序列结束、终止单、复议录入，或者一栏空白。伊芙娜用指节敲了两下屏幕边缘，把那一页放大，让每个人都能看清时间。",
      variants: [
        {
          requires: ['c6_power_cut'],
          text: '屏幕上停着终止单：序列在第七分钟断开，参照值缺了一段。没有这一段，他的对照组做不成基线，这一回得换个地方重排；我们这边拿到的是一张不完整的参照表和一个空着章的位置。'
        },
        {
          requires: ['c6_power_complete'],
          text: '屏幕上停着修正章：序列跑满，章号齐整，编号是我们自己。章是真的，参照组也是真的——这一组锚点一季不发修正，船队要走这条线，就得带着这份章去赌下个月。'
        },
        {
          requires: ['c6_power_object'],
          text: '屏幕上停着两行：修正章发出，复议申请录入，登记挂起。复议走完之前，他们不能拿这一组当基线，也不能动我们；三个工作周里，这条线照常有人修。'
        }
      ],
      next: 'c6_z12'
    },
    c6_z12: {
      id: 'c6_z12',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '先说船。右舷外层板卷边十一米，内层板我让铎兰焊住了，外层得进坞；两个推进环的支架也要对。这一带只有一个港口有对应坞位，联合港。',
      next: 'c6_z13'
    },
    c6_z13: {
      id: 'c6_z13',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '进港之前，这三段东西得先有个去处。带着它进港，等于让三家在同一张桌子上摸我们的口袋。',
      next: 'c6_z14'
    },
    c6_z14: {
      id: 'c6_z14',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '我这边能走的是内部举报：按章程递回观测局，签名写我。慢，而且我得把自己的编号押在纸上。',
      next: 'c6_z15'
    },
    c6_z15: {
      id: 'c6_z15',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '我主张先给矿站。冬天是他们过，校准断了也是他们挨；数据先到他们手上，他们自己能算出要不要跟灰塔对质。我们替他们决定，就又多一个人替别人决定。',
      next: 'c6_z16'
    },
    c6_z16: {
      id: 'c6_z16',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '我主张交联合。坞位在他们手里，船要是散在半路上，手里剩几张卡都没用。数据是死的，船是活的。',
      next: 'c6_z17'
    },
    c6_z17: {
      id: 'c6_z17',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '三条路我都写了代价：交联合，名字全部进安全处的归档室；给矿站，联合港那边我们算携带证据的外来船；递回灰塔，等复议的这几个月我们得拿通行证过日子。你定。',
      next: 'c6_a39'
    },
    c6_a39: {
      id: 'c6_a39',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '我把三条路的头二十四小时写出来。走联合：报告进序列，灰塔当天会发一份抗议，四到六天以后归档室开始约人谈话。走矿站：天亮前三个矿站能收到，他们会先关掉本季的校准申请，再把配给表重排一遍。递回灰塔：受理编号当天就有，问询排在进港以后，观测局内部一个字都不会往外说。',
      next: 'c6_a40'
    },
    c6_a40: {
      id: 'c6_a40',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '港里那一边呢？',
      next: 'c6_a41'
    },
    c6_a41: {
      id: 'c6_a41',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '联合港 D 区九号坞，坞位要批，批之前要过检查站。检查站后面就是安全处的归档室；谁先把版本交上去，谁的说法就是后来的版本。基廷不上战场，他在那张桌子上等。',
      next: 'c6_a42'
    },
    c6_a42: {
      id: 'c6_a42',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '矿站那边收到数据以后，最先能做的只有两件：停掉本季的校准申请，或者把数据摆到跟灰塔对质的桌上。别的都要等他们把船期和冬储表算完。',
      next: 'c6_a43'
    },
    c6_a43: {
      id: 'c6_a43',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '我说一句难听的：这三条路里，只有一条能让我们合法拿到坞位。船坞不讲立场，它只认排队号。',
      next: 'c6_a44'
    },
    c6_a44: {
      id: 'c6_a44',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '还有一句：我的结论已经交上去了，那是另一份东西，谁都改不动。这一段不一样——它压在船上一天，维斯特就多一天排他的下一组。',
      next: 'c6_a45'
    },
    c6_a45: {
      id: 'c6_a45',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '主屏的右上角走到三点四十六。铁盒还在操纵台边上，盒盖压着那张手写标签；封套与调阅卡摆在桌子正中，两份都登记在册，第三份不在任何清单上。',
      next: 'c6_a46'
    },
    c6_a46: {
      id: 'c6_a46',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'player',
      text: '每人再说一句：你希望它去哪儿？',
      next: 'c6_z18'
    },
    c6_z18: {
      id: 'c6_z18',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '主屏切到夜班记录：舰钟、航向、右舷压条的状态、两份登记在册的副本。铁盒是先前有人顺手放在操纵台边上的，盖子上贴着那张手写标签，油迹还没干。',
      next: 'c6_z19'
    },
    c6_z19: {
      id: 'c6_z19',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'warm',
      tone: 'duty',
      speaker: 'nova',
      text: '提醒一句：我那份报告里写了一整栏结论，这是我第一次自己写结论，不管你们把它交给谁，那一栏都撤不回来了。',
      next: 'c6_z20'
    },
    c6_z20: {
      id: 'c6_z20',
      kind: 'dialogue',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '两个已登记的副本摆在操纵台中间：一只封套，一张舰内日志的调阅卡。伊芙娜把椅子转过来，面朝屏幕；铎兰的机库频道还开着，背景里有工具落进箱子的声音。',
      next: 'c6_choice_custody'
    },
    c6_choice_custody: {
      id: 'c6_choice_custody',
      kind: 'choice',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '主屏上，霜环航道的半边图慢慢转过来，静默壁的位置落在舰尾。三道手续都在桌上，等你说最后一句。',
      choices: [
        {
          id: 'c6_custody_concord',
          label: '「交联合。伊芙娜写正式报告，我们拿报告换坞位。」',
          next: 'out_ch6_concord',
          reaction: '伊芙娜当场起草报告，编号写在第一页；诺瓦把三段附件按顺序编好，薇拉的记录单独成一页。报告用序列频道发出去的时候，舰钟三点四十七分。',
          effects: [
            { type: 'standing', who: 'concord', amount: 2 },
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'flag', key: 'c6_custody_concord', value: true }
          ]
        },
        {
          id: 'c6_custody_scarlet',
          label: '「先给矿站。过冬的人自己拿着，自己决定。」',
          next: 'out_ch6_scarlet',
          reaction: '诺瓦用外环民用电台把三段全部发出去，附上原件核对的方式与渡鸦号的下一个泊位。发完她把发射记录抄进舰内日志，谁都没签名。',
          effects: [
            { type: 'standing', who: 'scarlet', amount: 2 },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'flag', key: 'c6_custody_scarlet', value: true }
          ]
        },
        {
          id: 'c6_custody_spire',
          label: '「按灰塔的章程递回去。诺瓦签名，走内部举报。」',
          next: 'out_ch6_spire',
          reaction: '诺瓦自己在举报页上签了名，编号写在签名后面，三段附件跟着走她的观察员通道。回执来得比预想快：受理，编号 6-114，待核。',
          effects: [
            { type: 'standing', who: 'spire', amount: 2 },
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'flag', key: 'c6_custody_spire', value: true }
          ]
        },
        {
          id: 'c6_custody_ship',
          label: '「三边都不给。三份留在船上，进港再谈。」',
          next: 'out_ch6_neutral',
          reaction: '封套重新贴条，调阅卡从板子上取下来收进舰内保险格；第三张卡至今没有出现在任何清单上。伊芙娜在值班记录里写道：处置待定，决定人——全船。',
          effects: [
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'standing', who: 'spire', amount: -1 },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'flag', key: 'c6_custody_ship', value: true }
          ]
        }
      ]
    },
    out_ch6_concord: {
      id: 'out_ch6_concord',
      kind: 'chapterOutcome',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch6_concord',
      continuesTo: 'ch07',
      onEnter: [
        { type: 'flag', key: 'out_ch6_concord', value: true }
      ],
      text: '正式报告在序列频道上出去了，回执来得很慢，回执上写着「转安全处归档」。渡鸦号拿到了一个临时坞位和一张进港许可：联合港，四天以后，D 区九号坞。伊芙娜把报告底稿锁进舰内存储，钥匙按规程交值班；诺瓦的三段附件编在最前面，薇拉的记录单独成页。封套里那份副本没有交出去，铎兰把它放进机库的保险柜，登记为「随船」。这条船现在有一条合法的路回港，也有一个必须回港的理由——安全处的归档室已经知道所有人的名字写在同一条报告上。',
      next: null
    },
    out_ch6_scarlet: {
      id: 'out_ch6_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch6_scarlet',
      continuesTo: 'ch07',
      onEnter: [
        { type: 'flag', key: 'out_ch6_scarlet', value: true }
      ],
      text: '数据在外环的民用频道上走了整整一夜。天亮之前，两个矿站回信说本季校准申请已经撤了，第三个矿站问能不能核对原件——他们要求核对的方式是把原件送到港区的一间旧仓库。渡鸦号手里已经没有可交出去的副本，只剩舰内日志和封套里那一份；灰塔很快会查到数据是从哪条船上过去的，安全处的档案里也会多出一条「疑似接触」。船身撑不到第二次交火，右舷外层板与两个推进环的支架必须进坞，而这一带唯一有对应坞位的港口是联合港。带着一船纸进港，等于把筹码全换成别人手里的把柄，可这条船没有第二条路可以走。',
      next: null
    },
    out_ch6_spire: {
      id: 'out_ch6_spire',
      kind: 'chapterOutcome',
      chapter: 'ch06',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch6_spire',
      continuesTo: 'ch07',
      onEnter: [
        { type: 'flag', key: 'out_ch6_spire', value: true }
      ],
      text: '举报页的受理编号是 6-114，回执后面跟着一张临时通行证：船可以进联合港，人必须在岸上按章程接受问询，证词逐条记录。观测局内部没有掀起任何动静，三天之内不会有结论；但从这一刻起，维斯特的每一次校准都会留下两份记录，一份在他的柜子里，一份在合规处的复核队列里。诺瓦的编号还在名册上，观察员那一栏后面多了一个括号，括号里写着「证人」。薇拉的记录没有删节，渡鸦号的航向定在联合港，D 区坞位，四天以后。',
      next: null
    },
    out_ch6_neutral: {
      id: 'out_ch6_neutral',
      kind: 'chapterOutcome',
      chapter: 'ch06',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch6_neutral',
      continuesTo: 'ch07',
      onEnter: [
        { type: 'flag', key: 'out_ch6_neutral', value: true }
      ],
      text: '静默壁对外只报了一行结果：渡鸦号未完成台账核对离站。这一行把船上的修正章停在半路上，也把这条船的去向变成了三家都想弄明白的事。三份数据都留在船上：舰内日志一份、封套里一份、还有一份不在任何清单上——连诺瓦的登记表上都只有两行。船身撑不住下一次加速，右舷的外层板、两个推进环的支架、夜枭那两扇探测架里左后那一扇的备用壳体都得在坞里解决；最近的坞位在联合港，那儿的入口拦着安全处的检查站，也拦着所有想知道箱子里是什么的人。',
      next: null
    },
  }
};

export default CHAPTER;
