// 钢翼盟约 / STEEL-WING COVENANT — 第二章「死航线」章节模块（纯数据，无 DOM 依赖、无 import）
//
// 章节模块契约见 candidate/production/contracts-g1/CHAPTER_MODULE_CONTRACT.md。
// 入口 c2_01，章末结果 out_ch2_concord / out_ch2_scarlet / out_ch2_spire / out_ch2_neutral，
// 四个结果的 continuesTo 都是 ch03；本章内部无环，跨章只通过章末结果连接。
// 说话人：narration / ivna / doran / nova / vera / system / scarlet_voice，
// 加上 authoring-additions.json 已批准的 keating（登记申请见 ch02-cast-additions.json）。
// 本章不设置 vera_knows_fake_id：铎兰在旧机组名单上看见的只是一条读者可见的疑点，
// 没有任何角色在第二章里说破死人的名字。
//
// 修复轮（宿主审计后）：选择节点一律使用真实 schema 字段 choices（引擎 getChoiceList / choose /
// validateStory 只读 choices，不再出现节点级 options）；夜枭的侦测架损坏写成锁销剪断、铰链咬死的
// 临时故障（两片翼都留在架上，次日六点换销复位），不写成永久失去机体部件；和平的章末结果
// out_ch2_scarlet 改用已登记的安静轨道场景 orbit，不停留在会战画面。
//
// 时间线修复轮（G10，宿主审计后）：全章统一到一条船钟时间线，并区分"解缆倒计时"与"危险过槽窗口"——
//   06:20 观察廊（c2_01 起；解缆排在十六点十分）；06:50 三段 / 七段 / 九段锚点同时掉线；
//   约 13:20 作战会议室（基廷登舰约在 12:05，接口确认排在 14:00，落在"登舰后四小时"之内）；
//   14:00–14:10 医务舱接口确认（复位口令），14:40 伊芙娜接舰桥；16:10 解缆；
//   16:10–21:00 出港与接近段（住舱 19:50、机库 20:20–20:40、进空白 21:00）；
//   21:50 潮汐窗开（窗口只有 90 分钟），槽内手操与两机外场；23:12 出槽（窗口还剩 7 分 19 秒）；
//   次日 02:00 观察廊；天亮前把解码写成九页文件。三条候选航线共用同一个槽与同一个潮汐窗，
//   差别只在槽外的航段：旧航线 11 小时、赤垣 4 小时、灰塔校准槽 7.5 小时（c2_18 / c2_20 /
//   c2_lane_* / c2_144 各写一次），所以三种走法都成立，不存在"某条路线时间上不可能"。

export const CHAPTER = {
  number: 2,
  id: 'ch02',
  nodeIdPrefix: 'c2_',
  title: '第二章 · 死航线',
  badge: '第二章',
  status: 'complete',
  entry: 'c2_01',
  nextChapter: 'ch03',
  contentTarget: {
    mainPathCjk: 14000,
    note: '一条正常完整路径 14,000–15,000 个中文可读字符（不含标点、空白、数字与拉丁字母）。'
  },
  contentActual: {
    mainPathCjk: 14998,
    corpusCjk: 19735,
    nodes: 302,
    choices: 6,
    choiceOptions: 19,
    decisionPicks: ['c2_lane_old', 'c2_ord_written', 'c2_log_restore', 'c2_tell_full', 'c2_dn_look', 'c2_hd_concord'],
    pathRange: { min: 14883, median: 15003, max: 15187, combinations: 972 },
    offDutyShare: 0.2701,
    measuredAt: '2026-09-12',
    method: 'drafts/ch02-selfcheck.mjs：按真实 schema（选择节点字段为 choices，与 dist/engine.mjs 的 getChoiceList / choose / validateStory 同名；节点级 options 会被脚本直接判为问题）从 c2_01 遍历 requires / nextIf / variants / 选项顺序 / effects；六个选择节点共 972 种组合全部枚举，不是抽样。主干路径只统计该路径上真正显示过的文本（节点文本或命中的变体 + 被选项的文案 + 该选项的反应），不把互斥分支相加；语料总量统计全章节点文本、变体、选项文案与选项反应。CJK 判定为 [\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-FAFF]，不含标点、空白、数字与拉丁字母。mainPathCjk 取「每个选择都取第一个可用项」的路径（与 catalog 口径一致），该路径终点 out_ch2_concord，270 个节点。G10 时间线修复后按最终文本复算，并与引擎口径 tests/measure-content.mjs 的逐章走查逐字对齐（14998 / 19735）。'
  },
  decisions: [
    'c2_choice_lane',
    'c2_choice_orders',
    'c2_choice_log',
    'c2_choice_tell_ivna',
    'c2_choice_deadname',
    'c2_choice_handler'
  ],
  outcomeNodeIds: ['out_ch2_concord', 'out_ch2_scarlet', 'out_ch2_spire', 'out_ch2_neutral'],
  scenes: ['ship_rail', 'bridge', 'commandroom', 'medbay', 'quarters', 'hangar', 'battle', 'orbit'],
  companionMilestones: {
    ivna: ['在基廷面前替薇拉挡下第一句', '第一次把「同类」摆到台面上', '死航线里用手操纪律把船带过去'],
    doran: ['旧机组名单上的死亡记录（他只给一半解释）', '影子线路与机库里的加班饭', '给灰鸢左肩重做挂架'],
    nova: ['补齐三条航线的版本说明', '当着薇拉的面承认自己在打分', '报告里第一次写下「不确定」'],
    vera: ['第一次见到复位口令被使用', '第一次删掉自己报告里的一行', '把死航线的第二座锚点解码交给全船', '留下一截被剪断的侦测翼锁销（复位排在次日六点）']
  },
  outcomes: {
    out_ch2_concord: {
      chapter: 'ch02',
      title: '章末结果 · 一条被归档的航线',
      route: 'concord',
      routeName: '环带联合',
      summary: '死航线走通，整段解码按流程进了联合档案处；安全处的审核从一次检查变成了一条常设条款。',
      consequences: [
        "联合拿到第二座锚点的解码，矿站的补给表上添上了一条新核实的近路。",
        '基廷的权限从「审核」升成「经手」，他不再只是来查船的，他要跟着这条线走。',
        '薇拉在移交单上签了自己的编号，签字栏下面留着的那一行空白，被她自己划掉了。'
      ],
      nextHook: '档案处会先看数据，再决定要不要保这艘船；而灰塔的观测点已经记住了渡鸦号过点的时间。',
      continueHint: '第三章从「航线被联合归档、船上多了一名安全处少校」继续。',
      continuesTo: 'ch03'
    },
    out_ch2_scarlet: {
      chapter: 'ch02',
      title: '章末结果 · 闪两下的路标',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: '赤垣用一段不写在任何图上的路把渡鸦号接了过去；这条路从此有了两个名字。',
      consequences: [
        '赤垣拿到死航道的过点记录，十七个矿站里有五个开始按这条线排补给。',
        '铎兰的影子线路正式跑起来，他也第一次当着全体船员的面承认自己是哪一边的人。',
        '联合的图上是空白，赤垣的图上是实线——渡鸦号走在了两张图中间。'
      ],
      nextHook: '赤垣的盟约保到下一次开火为止；而联合不会永远把一条近路写成空白。',
      continueHint: '第三章从「船上有半张赤垣的图、联合的问号还没销掉」继续。',
      continuesTo: 'ch03'
    },
    out_ch2_spire: {
      chapter: 'ch02',
      title: '章末结果 · 一次被记录的通过',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: '校准槽标出了航道，代价是整段飞行都被观测；维斯特的对照组拿到了第一批真实数据。',
      consequences: [
        '灰塔的观测表上，渡鸦号过点的每一秒都有编号。',
        "诺瓦在报告末尾亲笔写下「不确定」，随后签了名。",
        '薇拉在自己的第二份评估里没有写「可担保」，她写了「待复核」。'
      ],
      nextHook: '观测局的兴趣不会停在一份数据上；下一次，他们要的会是能带走的东西。',
      continueHint: '第三章从「船被灰塔登记为长期观测对象」继续。',
      continuesTo: 'ch03'
    },
    out_ch2_neutral: {
      chapter: 'ch02',
      title: '章末结果 · 谁也不给',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: '整段解码留在船上，三边各自只拿到自己看得见的那一部分；船走通了，代价写在机库里。',
      consequences: [
        '航线数据锁进渡鸦号自己的导航核心，取数据的钥匙不在你身上。',
        '灰鸢的左肩挂架裂了，夜枭那片折在收位上的侦测翼还挂在架上等换销复位，两处都没有报损。',
        '基廷离舰时留下一份没写完的清单，他说下次再来的时候，清单就写满了。'
      ],
      nextHook: '三边都看见了这条路的一小段，只有渡鸦号看见了全部——这件事本身就是一个倒计时。',
      continueHint: '第三章从「三方都记着这条船、船上多了一道没报损的裂口」继续。',
      continuesTo: 'ch03'
    }
  },
  nodes: {
    c2_01: { id: 'c2_01', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '解缆排在今天十六点十分。左舷观察廊的舷窗上结着一层薄霜，霜里有三道指甲划出来的线，两条被人用袖口擦糊了。窗外两列锚点浮标一直排到看不见的地方，隔一会儿亮一下。', next: 'c2_02' },
    c2_02: { id: 'c2_02', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「值班表我看过了。」薇拉说，「第三小队二号机，夜枭，起飞前检查六项，十九分钟。你比我早到四分钟。」', next: 'c2_03' },
    c2_03: { id: 'c2_03', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '她手里端着从餐室带上来的杯子。杯壁上有人用记号笔写了「夜枭」两个字，比旁边那一排名字都小一号。她把杯子放在长椅第三节上，那一节有一条别人用胶带补过的裂缝。', next: 'c2_04' },
    c2_04: { id: 'c2_04', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「船长说，出发前十分钟不排任何事。」她停了一下，「我不知道这十分钟该做什么。」', next: 'c2_05' },
    c2_05: { id: 'c2_05', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '你指了指窗上那三道线。她说她在餐室听人讲过：有人每出一次港就划一道，划到第三道的时候，袖子擦上去，前面两道就糊了。', next: 'c2_06' },
    c2_06: { id: 'c2_06', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「三条线，三次出港。」她说完又补了一句，「我不知道为什么要用线记。船上有的是记录表。」', next: 'c2_a1' },
    c2_a1: { id: 'c2_a1', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: "六点二十，观察廊里开始有人经过。夜班的端着杯子往住舱走，白班的往机库走，有人打着哈欠借过，有人讨论早餐。那排陪了他们半年的浮标在舷窗外慢慢后退。", next: 'c2_a2' },
    c2_a2: { id: 'c2_a2', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '长椅另一头坐着一个地勤，正拿小刀剪袜子上的线头。他指了指薇拉杯子上的字，说那是诺瓦的手笔：她给别人写名字都写小一号，理由是「大号字占地方」。', next: 'c2_a3' },
    c2_a3: { id: 'c2_a3', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: "「架子上十七只杯子，写全名的只有三只。」薇拉又看了一眼杯架，「短名字的也只写了一个字。可能大家习惯这样？」", next: 'c2_a4' },
    c2_a4: { id: 'c2_a4', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '地勤笑了一声，剪完线头走了。走之前他留下一句：热水器今天第三次跳闸，谁最后一个用谁去拍它一下——拍左边，别拍右边，右边那下会把开关拍松。', next: 'c2_a9' },
    c2_a9: { id: 'c2_a9', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '走道那头果然响了一下，是有人拍完了热水器回来，把袖口上的水甩在地板上。他说这次是左边拍好的，右边拍完多响了一声，多响的那声把值夜的人吓醒了。', next: 'c2_a10' },
    c2_a10: { id: 'c2_a10', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「设备清单里没有热水器。」薇拉说，「我来之前把能查到的船内设备都看完了，暖水那一段只写了『见舱室公告』——公告贴在餐室门后面，我没有权限把它撕下来带走。」', next: 'c2_a5' },
    c2_a5: { id: 'c2_a5', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '诺瓦从走道那头过来，脖子上挂着数据卡，看到你们两个站在窗边，脚步慢了半拍，又照直走过去。她手里那张卡上有三行手写的数字，最下面一行被涂掉过一次。', next: 'c2_a6' },
    c2_a6: { id: 'c2_a6', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「她今天要交三份报告。」薇拉说，「上个月是四份。她在餐室说过一句话：报告比人多。」', next: 'c2_a7' },
    c2_a7: { id: 'c2_a7', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '你说解缆排在十六点十分，离现在还有九个小时五十分钟。薇拉把杯子放下，把这九个小时五十分钟换成了窗口时间，又换成了检查时间，最后换成了两班轮值的长度——她换完自己点了一下头。', next: 'c2_a8' },
    c2_a8: { id: 'c2_a8', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「九个小时五十分钟。」她说，「我从现在开始计时。你要是迟到，我会记下来。」说完她把杯子里剩下的那点水喝完，喝得很慢，像是在等一个不属于她的集合铃。', next: 'c2_07' },
    c2_07: { id: 'c2_07', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: "你端起杯子，靠在窗框上问她：这半年里，有什么东西是她自己想要的？吃的、用的，或者一件想做的事，都行。", next: 'c2_08' },
    c2_08: { id: 'c2_08', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「请重复一遍问题。」她说。你重复了。她把手从杯子边上收回去：「我听见了。我只是需要一句重复的时间。」', next: 'c2_09' },
    c2_09: { id: 'c2_09', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '窗外第三段的浮标灭了一枚。隔了两秒，它又亮回来，亮度比刚才低一档。她看了一眼，把杯子挪正，没说什么——那时候你们两个都以为那是老旧浮标的正常脾气。', next: 'c2_10' },
    c2_10: { id: 'c2_10', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: "「以前想领什么，我会先查清单。」她说，「你这样问，我得从头想。」", next: 'c2_11' },
    c2_11: { id: 'c2_11', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: "你说，接下来有些事得由她自己决定。她点了点头，点得像收到一条命令，然后自己发现点错了，又摇了一下头。", next: 'c2_12' },
    c2_12: { id: 'c2_12', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「我记下来了。」她说，「这一条我不写进报告。是我自己留着的。」', next: 'c2_13' },
    c2_13: { id: 'c2_13', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'system', text: '「全体注意：霜环三段、七段、九段锚点浮标同时掉线。重复，三段、七段、九段同时掉线。所有岗位就位。」', next: 'c2_14' },
    c2_14: { id: 'c2_14', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'narration', text: "六点五十，舰桥的战术台亮起三张图。主屏上那两列浮标的名字一段接一段变成灰色，中间隔着的距离比刚才更大。相邻的几枚一起熄灭，整段航道很快暗了下去。", next: 'c2_15' },
    c2_15: { id: 'c2_15', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「三段、七段、九段全灭，四段断断续续，剩下六段还能用。」伊芙娜的指节按在台面边缘，「十七个矿站的补给线现在只剩六段。我们原定的那条，要穿第三段。」', next: 'c2_16' },
    c2_16: { id: 'c2_16', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'nova', text: "「有人在动浮标。」诺瓦把一枚数据卡推进槽里，「掉线的顺序是三、七、九、十三，中间隔着走。有人在跳着拔路标——而且是按着表拔的。」", next: 'c2_17' },
    c2_17: { id: 'c2_17', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'doran', text: '「反应堆没问题，氧化剂按原计划够。」铎兰的声音从三号机库那头插进来，背景里有扳手掉在铁板上，「但你们要绕路就先说绕多少小时。我得算热水器还撑不撑得住——它上礼拜刚修过，脾气比船长差。」', next: 'c2_18' },
    c2_18: { id: 'c2_18', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「三条候选，槽是同一段槽。」伊芙娜先把中间那根线画粗，「那条槽的潮水一个潮次只倒九十分钟，三条路都得在那一个半小时里过，谁先谁后都一样。区别在槽外：档案处去年的旧航线，槽外十一个小时，路上有三座用电池的旧浮标，联合没来得及拆。赤垣让出来的一段，槽外四个小时，他们只给一个坐标和一句『跟着闪两下走』。还有灰塔的校准槽，槽外七个半小时，稳，但每过一个点都得报我们是谁、在哪、装了些什么。」', next: 'c2_19' },
    c2_19: { id: 'c2_19', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'nova', text: '「补一句版本说明。」诺瓦把中间那条拖开，上面只有几个手打的点，「『闪两下』的那座浮标可能是别人的船，也可能是一块石头。赤垣自己也没走完过这条线——他们只走进去过。」', next: 'c2_20' },
    c2_20: { id: 'c2_20', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「灰塔的槽最稳，代价写在条款里：航段数据归观测局。」她敲了敲第三张图，「联合那条槽外十一个小时，中间要穿两段封锁区，我们不一定有通行码。你挑。」', next: 'c2_b1' },
    c2_b1: { id: 'c2_b1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'narration', text: "三条线摊开后，诺瓦和铎兰先为时间吵了起来。一个按窗口算，一个把氧化剂余量也算进去，结果差了四十分钟。他们各自拿着表，让对方重算。", next: 'c2_b2' },
    c2_b2: { id: 'c2_b2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'nova', text: '「差在残场修正。」诺瓦说，「档案处的旧航线要三次修正，每次十五分钟；我按实测给的是八分钟一次。你们信纸还是信我，快点定，窗口不等人。」', next: 'c2_b3' },
    c2_b3: { id: 'c2_b3', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'doran', text: '「信你。」铎兰说，「但你那三次修正得写在纸上。我不想到时候在泵房里听人吵『该按谁的数据』——泵房很吵，吵架得靠喊，喊多了费水。」', next: 'c2_b4' },
    c2_b4: { id: 'c2_b4', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「写在我的排班表上，谁的数据谁签字。」伊芙娜说，「从今天起，这艘船上每一条航向都要有签字的人。出事的时候，我要知道该找谁念那张纸。」', next: 'c2_b5' },
    c2_b5: { id: 'c2_b5', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: "诺瓦推出去三张纸，每张纸右下角都留了一个空。几个人都先翻起了附页。签名要随方案存档，将来出了事，还得拿它核对当时的决策。", next: 'c2_b6' },
    c2_b6: { id: 'c2_b6', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: '「我签第一张。」伊芙娜签完把笔递给你，「第二张是你的。第三张空着——留给那个最后改航线的人。」', next: 'c2_21' },
    c2_21: { id: 'c2_21', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'doran', text: "「旧的那三座我认得型号，能修。」铎兰说，「电池得过去测。档案处写着『待核』，勘测日期那一栏也空着。」", next: 'c2_choice_lane' },
    c2_choice_lane: {
      id: 'c2_choice_lane',
      kind: 'choice',
      chapter: 'ch02',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "投影上的三条线各有一段中断。资料来自三个地方，绘图日期也不同，你们得自己补上中间那段航道。",
      choices: [
        {
          id: 'c2_lane_old',
          label: '走档案处的旧航线：槽外十一个小时，但那三座浮标是联合自己的家什，坏没坏我们至少能自己修。',
          next: 'c2_lane_a1',
          reaction: '伊芙娜把通行码抄进战术台，抄完扣上笔帽。她说这条路我们背得出坏法，代价是绕。',
          effects: [
            { type: 'flag', key: 'c2_lane_old', value: true },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c2_lane_red',
          label: '接赤垣那段：槽外四个小时，赌他们标的那两下闪光。他们给坐标，我们给担保。',
          next: 'c2_lane_b1',
          reaction: "铎兰在机库那头笑了一声，笑声后面是工具箱合上的声音。那半张图随即亮在主屏上，旁边还添了他的维修标记。",
          effects: [
            { type: 'flag', key: 'c2_lane_red', value: true },
            { type: 'standing', who: 'scarlet', amount: 2 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c2_lane_cal',
          label: '用灰塔的校准槽：槽外七个半小时，数据给他们，船是我们的。',
          next: 'c2_lane_c1',
          reaction: '诺瓦把观测局的条款调出来，指着中间一行让你看完才按确认。她等你看完，没有催。',
          effects: [
            { type: 'flag', key: 'c2_lane_cal', value: true },
            { type: 'standing', who: 'spire', amount: 2 },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        }
      ]
    },
    c2_lane_a1: { id: 'c2_lane_a1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '你把手指按在最上面那张图上。伊芙娜没有问理由，只把旧航线的三个浮标编号抄进战术台，抄得比需要的时间慢一点——她是在让全船都听见这条路有多长。', next: 'c2_lane_a2' },
    c2_lane_a2: { id: 'c2_lane_a2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: '「槽外十一个小时，两班轮值。」她说，「你排后一班，前一班我坐。别一个人守全程——上次有人这么干，落地以后连自己的呼号都念错了。」', next: 'c2_22' },
    c2_lane_b1: { id: 'c2_lane_b1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'narration', text: '你选了中间那条。铎兰把导航核心的影子线路接到主屏上——第一根线是在三号机库的台钳底下接的，接口处还缠着一圈没剪的胶带。', next: 'c2_lane_b2' },
    c2_lane_b2: { id: 'c2_lane_b2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'doran', text: "「槽外四个小时。」铎兰说，「前提是他们标的那两下闪光还在。要是不在，我们就是拿四个小时去撞一堵墙。到时候撤回来，船上的氧化剂就够呛了。」", next: 'c2_22' },
    c2_lane_c1: { id: 'c2_lane_c1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '你选了校准槽。灰塔的条款有三页，第二页中间那行字是诺瓦用指甲划出来的：过点时间、舰体震动曲线、航线解码，全部归观测局归档。', next: 'c2_lane_c2' },
    c2_lane_c2: { id: 'c2_lane_c2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'nova', text: "「确认了，我提交。」她按下确认键，「我不喜欢那行字，但我喜欢有人把代价看完再签。观测局那边已经开始计时了——从你按下确认的那一秒算起。」", next: 'c2_22' },
    c2_22: { id: 'c2_22', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '航线选定不到四分钟，通信席抬起头：安全处的交通艇申请靠泊，从观测站飞过来要五个小时。登记表上只有一行备注——航段审核，随船。', next: 'c2_23' },
    c2_23: {
      id: 'c2_23',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '登舰口在左舷七号。来的人一共三个：一个记录员、一个技术兵，还有一个穿深蓝高领制服的中年男人。他进门先把文件夹换到左手，右手一直空着。',
      onEnter: [
        { type: 'flag', key: 'met_keating', value: true },
        { type: 'flag', key: 'keating_onboard', value: true }
      ],
      next: 'c2_24'
    },
    c2_24: { id: 'c2_24', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「穆尔·基廷，安全处少校。」他说，「从今天起，这艘船的航段审核、样本清点、档案移交由我经手。船怎么飞还是你们的事。」', next: 'c2_25' },
    c2_25: { id: 'c2_25', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「把范围说清楚。」伊芙娜没有请他们坐，「航段审核不包含航行指挥。」', next: 'c2_26' },
    c2_26: { id: 'c2_26', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「当然不包含。」基廷把文件夹翻开，「我要三样：XR-07 的封存或移交状态、船上所有样本的活体记录、辅机序列人员的接口台账。前两样按条令，第三样按回收条款——每一样都有编号，编号归我。」', next: 'c2_27' },
    c2_27: { id: 'c2_27', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '三份副本被推到桌面中间。你没有马上伸手。站在你右手边的薇拉视线落在台账第一页上，停的时间比看一页纸需要的时间长了一点。', next: 'c2_28' },
    c2_28: { id: 'c2_28', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'keating', text: '「AU-11。」他说，「辅机序列二期。你的接口箱上一次接收命令是四十一天前。按流程，登舰后四小时内由我本人做一次接口确认。你可以拒绝，拒绝会被记成不服从。」', next: 'c2_29' },
    c2_29: { id: 'c2_29', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「不需要记成不服从。」她说，「我配合。请把时间排在出发前。」', next: 'c2_30' },
    c2_30: { id: 'c2_30', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'ivna', text: "「她归第三小队，流程走我的签字。」伊芙娜把台账合上推回去半寸，「你要看她身上的东西，先在我的表上写字。她的人员档案在第三小队，按机师流程办。」", next: 'c2_31' },
    c2_31: { id: 'c2_31', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「签字可以。」基廷拧开笔帽，动作不快，「卡列尔中尉，你签的每一个字我都会带走一份。顺便说一句——你的台账我也要。XR-03 的接口比她的老，你比她更需要一份完好记录。」', next: 'c2_c1' },
    c2_c1: { id: 'c2_c1', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '技术兵把三只箱子搬进会议室，箱盖上都贴着回收标记。基廷把台账翻到「辅机序列二期 AU-11」那一页，整页对着你们，纸面上只有三行字填过。', next: 'c2_c2' },
    c2_c2: { id: 'c2_c2', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'keating', text: "「看最下面那一栏。」他用笔尖点着，「接口箱序列号：无。生产厂：无。检验章：无。三个来源栏全空着，连它从哪里来的都查不到。」", next: 'c2_c3' },
    c2_c3: { id: 'c2_c3', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「箱子随机器一起到。」薇拉说，「交接单上写着无需检查。这句话我背得下来，因为签收的人是我。」', next: 'c2_c4' },
    c2_c4: { id: 'c2_c4', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: "「签收栏有你的名字，签发栏还空着。」基廷把笔尖收回去，「所以我今天只登记，不追究。这一栏我先留空——等哪天有人肯告诉我签发人是谁，我再填。」", next: 'c2_c5' },
    c2_c5: { id: 'c2_c5', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '他没有问任何私人问题，也没有提高声音。会议桌对面，伊芙娜的手一直放在战术板边上；门口的铎兰没有进来，只用那只铜色的左手扶着门框。', next: 'c2_c6' },
    c2_c6: { id: 'c2_c6', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'doran', text: '「少校，你的箱子贴着回收标记。」铎兰在门口说，「回收的东西我们机库见得多了。有件事你得知道：这船上现在有三台机器贴着回收标记，其中两台还能飞。」', next: 'c2_c7' },
    c2_c7: { id: 'c2_c7', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: "「那两台我会登记，今天保留原装状态。」基廷合上台账，「下次配合一点。多带两个检查员，还得麻烦你们另备两份饭。」", next: 'c2_c8' },
    c2_c8: { id: 'c2_c8', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '他垫好复写纸，把三份副本的第一页各抄了一遍，字迹很规矩，抄完把笔盖上。整个过程十一分钟，比船上的人预想的快——他不拖时间，时间是他用来等别人的东西。', next: 'c2_32' },
    c2_32: { id: 'c2_32', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '会议室的投影还亮着航线图，三个人都没有看它。铎兰靠在门框上，铜色的左手垂着，手里捏着一块擦得很干净的白布——那是他进机修间之前才用的东西。', next: 'c2_33' },
    c2_33: { id: 'c2_33', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'doran', text: "「少校，机库归我管。」铎兰说，「你要进三号机库看东西，先说看哪一格。我得把正在装的零件收好。装配停一会儿，整船的出港时间都得往后挪。」", next: 'c2_34' },
    c2_34: { id: 'c2_34', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「你姓阿吉斯。」基廷看了他一眼，比看一份文件久，「阿吉斯这个姓我在一份旧销毁记录上见过。那件事和今天没关系，我只是记性好。」', next: 'c2_35' },
    c2_35: { id: 'c2_35', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'narration', text: '他没有再解释那句旧记录，也没有等谁回答。文件夹翻到下一页，纸角压住了航线图的一角——正好压在你们刚选的那条线上。', next: 'c2_36' },
    c2_36: { id: 'c2_36', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'nova', text: '「补一个时间。」诺瓦把窗口表推上台面，「三段灭掉之后的第十五个小时，那条槽里的潮流会倒一次。我们只有九十分钟能过。现在还剩八个小时三十分——先解缆，再按两班轮值飞五个多小时到槽口，到了就在槽口外面排队等水。」', next: 'c2_37' },
    c2_37: { id: 'c2_37', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'keating', text: '「我知道窗口。」基廷把笔帽扣上，「我也可以让这艘船在泊位里等下一个。下一个是十七天以后，那时候你们的补给表上会有十一个矿站是空的。所以——先把接口确认做完。」', next: 'c2_choice_orders' },
    c2_choice_orders: {
      id: 'c2_choice_orders',
      kind: 'choice',
      chapter: 'ch02',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '八小时三十分挂在主屏角落。桌面上是三份要签的副本，桌边是一个有权让船留在泊位的人，和一条只有九十分钟的槽。',
      choices: [
        {
          id: 'c2_ord_written',
          label: '全部按流程配合，但每一样都要书面回执，并由伊芙娜签字。',
          next: 'c2_ord_a1',
          reaction: '你把「书面回执」四个字写进要求里。伊芙娜看了你一眼，把回执联抽出来，放进自己的战术板夹层。',
          effects: [
            { type: 'flag', key: 'c2_orders_written', value: true },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c2_ord_ivna',
          label: '让伊芙娜顶在流程前面，你自己盯着他的手。',
          next: 'c2_ord_b1',
          reaction: '伊芙娜往前挪了半步，正好站到台账和你之间。她把袖标那一侧朝外，像是在提醒谁她签过多少次自己的名字。',
          effects: [
            { type: 'flag', key: 'c2_orders_ivna', value: true },
            { type: 'trust', who: 'ivna', amount: 2 },
            { type: 'standing', who: 'concord', amount: -1 }
          ]
        },
        {
          id: 'c2_ord_trade',
          label: '把航线解码的优先阅读权许给他，换他今天不碰接口箱。',
          next: 'c2_ord_c1',
          reaction: '基廷听完没有立刻回答。他先看了薇拉一眼，又看回你——他明白你换的是什么，也明白你换了以后就不能反悔。',
          effects: [
            { type: 'flag', key: 'c2_orders_trade', value: true },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'nova', amount: -1 }
          ]
        }
      ]
    },
    c2_ord_a1: { id: 'c2_ord_a1', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「可以。回执我签。」基廷把第一页翻过来，「你们最好也自己留一份。将来出事，谁签的字谁认——我这句话是免费的。」', next: 'c2_ord_a2' },
    c2_ord_a2: { id: 'c2_ord_a2', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '记录员把回执抄了两份，一份留船、一份进他的文件夹。纸上的字迹很整齐，整齐到你看不出哪一份是给安全处看的。', next: 'c2_38' },
    c2_ord_b1: { id: 'c2_ord_b1', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「你要审她，先审我。」伊芙娜说，「我的接口比她老，问题比她的多。流程上我是她的带队军官，你先写我的名字。」', next: 'c2_ord_b2' },
    c2_ord_b2: { id: 'c2_ord_b2', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '基廷没有生气。他只是把「XR-03」三个字写进预约栏，写完把笔放下：「两个都排上。下午两点，医务舱。中尉，你可以到场——到场不代表你能替她回答。」', next: 'c2_38' },
    c2_ord_c1: { id: 'c2_ord_c1', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「成交。」基廷把文件夹合上，「我不碰那只箱子，今天。等你们的解码出来，我要原件——不要你们抄过一遍的。你答应得很快，我提醒你一次：原件上有什么，我就能读什么。」', next: 'c2_ord_c2' },
    c2_ord_c2: { id: 'c2_ord_c2', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'nova', text: '「原型数据直接进他的夹子。」诺瓦把笔帽按回去，「行，是你的船。我只提醒一句：到时候别问我为什么观测局那边也有了一份。」', next: 'c2_ord_c3' },
    c2_ord_c3: { id: 'c2_ord_c3', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「记录：接口确认暂缓。」薇拉把这一行念出来的时候没有看你，「暂缓的理由栏我空着。你可以填，也可以不填。」', next: 'c2_38' },
    c2_38: { id: 'c2_38', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: "会议散了。基廷的人往医务舱搬设备，伊芙娜去舰桥排班，铎兰回机库把灰鸢左肩那块替换件卸下来重新量了一遍。你把半页回执对折，夹进值班本里，纸角还露在外面。", next: 'c2_39' },
    c2_39: { id: 'c2_39', kind: 'dialogue', chapter: 'ch02', scene: 'commandroom', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '出发倒计时挂在每一个舱室的墙屏上。还有两个小时二十分钟，渡鸦号要解缆——或者留在泊位里，看着十七个矿站的补给表被划掉。', next: 'c2_40' },
    c2_40: { id: 'c2_40', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '医务舱的检查灯打得很亮，隔帘只拉开一半。两床位的舱室里没有多余的椅子，技术兵把设备箱靠在耗材柜下面，箱子挡住了那个柜门的一半。', next: 'c2_41' },
    c2_41: { id: 'c2_41', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: '「两点整开始，我只有十分钟。」伊芙娜站在帘子边，手套没摘，「两点四十我要接舰桥，解缆之前排班要重新贴一遍。」', next: 'c2_42' },
    c2_42: { id: 'c2_42', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「流程三步。」薇拉坐到检查床沿，先把袖子卷起来再说话，「体表、接口、指令回执。第三步由安全处的口令触发，不需要医疗人员在场。」', next: 'c2_43' },
    c2_43: { id: 'c2_43', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她右臂内侧那条旧接口疤从肘弯一直排到手腕，像一整排缝上去的插孔，边缘的皮肤颜色比旁边浅一号。她撕开手背上一角白胶布，又把它按回去。', next: 'c2_44' },
    c2_44: { id: 'c2_44', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「体表检查，第一步。」基廷念得很平，像在读一张备件单，「皮肤、关节、呼吸、瞳孔反应。技术兵记录。」', next: 'c2_45' },
    c2_45: { id: 'c2_45', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '老式监护仪的接头跟接口箱对不上。技术兵从箱子里翻了三个转接头，第三个才插进去，屏幕上跳出一行「非标准设备」。监护仪没有报警，只是把那一行留在屏幕角落。', next: 'c2_46' },
    c2_46: { id: 'c2_46', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'vera', text: "「接口箱改装过。」她说，「医疗口对不上。手工口对得上，但手工口不接受医疗系统发的复位帧。」", next: 'c2_d1' },
    c2_d1: { id: 'c2_d1', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '技术兵把箱子里的东西一件件摆到检查床上：一管耦合膏、一片校准片、一本打印的流程手册。手册是旧的，边角翻得起了毛，第 41 页夹着一张别人用过的书签。', next: 'c2_d2' },
    c2_d2: { id: 'c2_d2', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'serious', tone: 'duty', speaker: 'keating', text: '「手册第七版。」基廷报出编号，「这一版把医疗口和手工口分开写。第 41 页：手工口可以由安全处直接触发，触发前不需要医疗人员同意，触发后由安全处签字。」', next: 'c2_d3' },
    c2_d3: { id: 'c2_d3', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'serious', tone: 'duty', speaker: 'ivna', text: "「触发以后，她有六个小时受影响。」伊芙娜翻回那一页，「这段时间谁看护？手册只写到复位，后面的流程得补齐。」", next: 'c2_d4' },
    c2_d4: { id: 'c2_d4', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「写了我。」基廷说，「签名我负责。中尉，你可以把这句话抄进你的值班记录——它是我今天说的最有用的一句。」', next: 'c2_d5' },
    c2_d5: { id: 'c2_d5', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '薇拉自己把右臂放到检查床边缘，位置摆得很正——她按手册上的示范摆的。她的手指没有抖；抖的是技术兵手里那片校准片，抖得他要用两只手才拿稳。', next: 'c2_47' },
    c2_47: { id: 'c2_47', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'serious', tone: 'duty', speaker: 'keating', text: '「那走指令回执。」基廷把打印纸翻到最后一页，念得很慢，每个字之间都隔着同样的长度，「AU-11，归位。复述口令。」', next: 'c2_48' },
    c2_48: { id: 'c2_48', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「归位。收到。」', next: 'c2_49' },
    c2_49: {
      id: 'c2_49',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "她回答得比平时快半秒。两只手随后放到了膝盖上，指尖对得整整齐齐——平时她的手总要碰一碰杯子、胶布或纸角，这会儿却搁得规规矩矩。基廷已经在看下一张纸了。",
      onEnter: [
        { type: 'flag', key: 'vera_reset_phrase_seen', value: true }
      ],
      next: 'c2_50'
    },
    c2_50: { id: 'c2_50', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「回执完成。」他敲了敲纸面，「记录：接口响应正常，用时十一秒。」', next: 'c2_d6' },
    c2_d6: { id: 'c2_d6', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '打印纸从机器里出来，两联。一联进了基廷的文件夹，一联留在检查床上，纸还是热的。薇拉维持着刚才的坐姿，两只手放在膝盖上，指尖对得整整齐齐。', next: 'c2_d7' },
    c2_d7: { id: 'c2_d7', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'keating', text: '「两联都盖了时间戳。」他把热的那一联推到你面前，「这一联归船员档案。放在哪儿、给谁看，是你们的事。我只要我这一联完整。」', next: 'c2_d8' },
    c2_d8: { id: 'c2_d8', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '你把纸拿起来的时候，纸的温度隔着指腹传上来，比舱里任何东西都正常。舱里所有东西都正常，只有坐在检查床上的那个人还没有开始动。', next: 'c2_51' },
    c2_51: { id: 'c2_51', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: '「我的十分钟到了。」伊芙娜把手套往下拉了拉，「中尉，两点四十，舰桥。别迟到——今天迟到的人要写两份交接。」', next: 'c2_52' },
    c2_52: { id: 'c2_52', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '门在她身后合上。技术兵蹲在设备箱那边清点转接头，一个一个往格子里放，铁碰铁的响声很有规律。基廷走到舱尾签字。帘子这一侧只剩你和检查床。', next: 'c2_53' },
    c2_53: { id: 'c2_53', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她维持着那个姿势过了几秒。然后她的眼睛先动了——先找门，再找耗材柜，最后才落到你身上。中间那一段，她的视线里没有这个舱室的任何东西。', next: 'c2_54' },
    c2_54: { id: 'c2_54', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「刚才的记录写完了没有。」', next: 'c2_55' },
    c2_55: { id: 'c2_55', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'serious', tone: 'duty', speaker: 'narration', text: '你说没有，纸还在你手上。她伸手要过去，读了两遍——第二遍读的是同一行：「接口响应正常，用时十一秒」。', next: 'c2_56' },
    c2_56: { id: 'c2_56', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'serious', tone: 'duty', speaker: 'vera', text: '「十一秒。」她说，「比我上一次快两秒。」', next: 'c2_57' },
    c2_57: { id: 'c2_57', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '你问她「上一次」是什么时候。她把纸折好，按在膝盖上，没有回答这个问题——她只是把折线又压了一遍，压得比刚才平。', next: 'c2_58' },
    c2_58: { id: 'c2_58', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「记录里没有口令的内容，只有时长。」她说，「这样最好。」', next: 'c2_59' },
    c2_59: { id: 'c2_59', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她把袖子放下来盖住那条疤，站起来的时候扶了一下床沿。你看见她右手那圈白胶布上多了四个折角——那是刚才那十一秒里压出来的。', next: 'c2_60' },
    c2_60: { id: 'c2_60', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她没有提刚才那几秒，也没有提谁看见。她把检查床的床单拉平——那是她自己坐皱的——然后拿起那联热纸先走出了医务舱，去写她那份记录。', next: 'c2_61' },
    c2_61: { id: 'c2_61', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'narration', text: "你在门口站了一会儿。走廊另一头，安全处的人正把设备箱推进货舱；走廊被箱子挤窄了，经过的人纷纷侧身让路。", next: 'c2_62' },
    c2_62: { id: 'c2_62', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '十六点十分，渡鸦号解缆。灯从泊位的暖黄换成一排冷白，船身先是往左压了半度，然后才真正开始移动——它老，但走得稳。', next: 'c2_63' },
    c2_63: { id: 'c2_63', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'nova', text: '「窗口还剩五小时四十分。」诺瓦在主屏上把倒计时按秒挂上去，「赤垣的频道今天很安静。观测局那边倒是发了一次握手请求，内容是问我们走不走校准槽。」', next: 'c2_64' },
    c2_64: { id: 'c2_64', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: '「按计划走，不回应握手。」伊芙娜盯着航向条，「值班表已经贴了。你这一班到二十一点，去把东西放进舱里——出发前十分钟那种安静，今天不会有了。」', next: 'c2_65' },
    c2_65: { id: 'c2_65', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '住舱走道只有两个人宽，靠墙一侧的储物格上贴满了便签。她的舱门开着，折叠床没收起来——她把床板折成一条窄桌面，人坐在地板上，杯子放在腿边。', next: 'c2_66' },
    c2_66: { id: 'c2_66', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: "「我习惯到熄灯时间才上床。」她说得像在解释一条规定，说完往旁边挪了半尺，给你让出地板上的一块地方。", next: 'c2_67' },
    c2_67: { id: 'c2_67', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '她的格子柜里一共三样东西：一只停在零点的机械秒表、一卷白胶布、一条从肩章上拆下来的名字条。三样摆成一条直线，中间隔的距离几乎一样。', next: 'c2_68' },
    c2_68: { id: 'c2_68', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「杯子我洗过了。」她把杯子从腿边拿起来递给你，「餐室的人说，杯子要还到架子上，架子第二层。」', next: 'c2_69' },
    c2_69: { id: 'c2_69', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '你说杯子可以自己留着。她低头看了一眼杯壁上那两个字，问了一个很实际的问题：留着算不算占用公共物资。', next: 'c2_70' },
    c2_70: { id: 'c2_70', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「不算的话，我留着。」她说，「要写在哪一行？」', next: 'c2_71' },
    c2_71: { id: 'c2_71', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '你说不用写。她把杯子放在膝盖上，手指在杯壁两个字上按了一下，像是确认那张记号笔的字还干着。', next: 'c2_e1' },
    c2_e1: { id: 'c2_e1', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '走道尽头的洗衣间只有两台机器，排队排到了明天早上。薇拉盯着一张手写的排队表看了一会儿，问的是另一件事：两套飞行服够不够换。', next: 'c2_e2' },
    c2_e2: { id: 'c2_e2', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「轮值六小时。」她说，「六小时出汗，六小时换洗，六小时睡觉。这个循环要跑四十天，两套不够——我算过，第三十一天开始会缺。」', next: 'c2_e3' },
    c2_e3: { id: 'c2_e3', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: "你说机库储物架上还有六套闲置的旧飞行服，可以找铎兰要一套。她记完位置，又问：领的时候，要向原来的主人打声招呼吗？", next: 'c2_e4' },
    c2_e4: { id: 'c2_e4', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「明天我去问铎兰。」她说，「我要先知道这是谁的，再决定穿不穿。别人的东西穿在身上，出了事说不清是谁弄坏的。」', next: 'c2_e5' },
    c2_e5: { id: 'c2_e5', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '她把手里那卷白胶布卷成一个很紧的小卷，塞进制服口袋，说明天要去医务舱领新的——今天那一卷中间已经撕不齐了，撕不齐的胶布贴上去会翘边。', next: 'c2_e6' },
    c2_e6: { id: 'c2_e6', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「医务舱的耗材柜第二格。」她把这句话说得很轻，像在给自己记数，「我今天去了三次。第一次是流程，第二次是记录，第三次是你叫我。」', next: 'c2_e9' },
    c2_e9: { id: 'c2_e9', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '她把两套飞行服摊在床上叠，叠出来的折痕比配发时还直。叠到第二件的时候她停下来，问洗衣间能不能用热水——接口疤那一段最容易出汗。', next: 'c2_e10' },
    c2_e10: { id: 'c2_e10', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: "「接口疤不能泡。」她自己接了一句，「水温调低些呢？冷水洗完，疤边上还会剩下一圈。我想试试温水。」", next: 'c2_e7' },
    c2_e7: { id: 'c2_e7', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '舱壁上贴着三张前任住户留下的便签：一张写着夜里轻一点，一张写着这层的通风口别堵，还有一张上只有两个字——「周三」，没有上下文。', next: 'c2_e8' },
    c2_e8: { id: 'c2_e8', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「周三。」她念了一遍，「这张没有上下文。我留着，等我想明白它是什么意思——也可能是别人忘了撕。」说完她把便签按回原位，按的位置和原来一样偏左。', next: 'c2_72' },
    c2_72: { id: 'c2_72', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「沧澜我没去过。」她忽然说，「简报上写着重力一点零五倍，街上常年是湿的。落地第一天鞋底会比现在沉百分之五——我算了两次，都是这个数。」', next: 'c2_73' },
    c2_73: { id: 'c2_73', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '你告诉她，湿的街上还有两个别的东西：石头被雨泡过以后的那股味，和港区铁轨上的锈味。她把这两样也记下来了，记在了那张不存在的一行里。', next: 'c2_74' },
    c2_74: { id: 'c2_74', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '然后她把墙上的屏幕翻过来，屏幕的光在舱顶那块胶带上亮出一小块。上面是一份没交的报告，光标停在中间一栏，那一栏的标题是「评估对象观察」。', next: 'c2_75' },
    c2_75: { id: 'c2_75', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「今天二十三点以前，我要交一份报告。」她说得很平，「里面有一行，我准备删掉。」', next: 'c2_76' },
    c2_76: { id: 'c2_76', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: "她把屏幕转向你，指尖停在刚调出的原文旁。那行原文写得很干：评估对象在口令期间在场，未离舱；指令结束后先查看受令者状态，未先查看记录。", next: 'c2_77' },
    c2_77: {
      id: 'c2_77',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'quarters',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "「我的指令要求：评估对象出现偏离就上报，二十四小时以内。」她说，「这一行就是偏离。我把这一行删了。提交之前做的决定，现在告诉你。」",
      onEnter: [
        { type: 'flag', key: 'vera_first_disobedience', value: true }
      ],
      next: 'c2_78'
    },
    c2_78: { id: 'c2_78', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '你问她为什么删。她的手指在屏幕边缘停了一下，没有去按那一行。', next: 'c2_79' },
    c2_79: { id: 'c2_79', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'serious', tone: 'duty', speaker: 'vera', text: "「上报的后果我算得出来：你会被标成需要复核，你的呼号会跟着标签走很久。」她说，「标记一旦发出，就很难撤回。我想再观察一天，确认以后再处理。」", next: 'c2_80' },
    c2_80: { id: 'c2_80', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她说完把屏幕停在原处，没有替你按任何一个键。舱室很小，屏幕的光把你和她之间那块地板照成了两种颜色。', next: 'c2_choice_log' },
    c2_choice_log: {
      id: 'c2_choice_log',
      kind: 'choice',
      chapter: 'ch02',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '那一行还留在屏幕上。她删不删，是她今天做过的一个决定；你接下来要写什么，是另一个。',
      choices: [
        {
          id: 'c2_log_restore',
          label: '让她写回去——那一行不该由她替安全处省下来，也不该由你替她担。',
          next: 'c2_log_a1',
          reaction: '她把光标移回那一行，重新敲进去，一个字都没有改。敲完她问了一句：这算你的命令还是我的记录。你说都算。',
          effects: [
            { type: 'flag', key: 'c2_report_restored', value: true },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'trust', who: 'vera', amount: -1 }
          ]
        },
        {
          id: 'c2_log_keep',
          label: '那是她自己删的，让她自己留着这个决定。',
          next: 'c2_log_b1',
          reaction: '她把那一行删掉，按了保存。屏幕跳回目录页，她盯着目录页看了一会儿，像是在确认这件事真的只剩她一个人知道。',
          effects: [
            { type: 'flag', key: 'c2_report_deleted', value: true },
            { type: 'trust', who: 'vera', amount: 2 }
          ]
        },
        {
          id: 'c2_log_take',
          label: '别动那一行。你在自己的值班记录里把同一件事写下来。',
          next: 'c2_log_c1',
          reaction: "你回舱拿了值班本，把事情按时间写了一遍：口令、时长、她先查看了薇拉的状态。写到这里，你合上了值班本。",
          effects: [
            { type: 'flag', key: 'c2_report_player_note', value: true },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        }
      ]
    },
    c2_log_a1: { id: 'c2_log_a1', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「写回去了。」她把屏幕转回正对你，「安全处会读到你今天做的第一件让他们注意的事。考虑到你还在这条船上，我建议你把安全带的扣法也写对。」', next: 'c2_log_a2' },
    c2_log_a2: { id: 'c2_log_a2', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她按下发送。报告走的是安全处的独立通道，走的时候没有经过船上的任何一台终端——你这才知道，她的报告从一开始就不在渡鸦号的网络上。', next: 'c2_81' },
    c2_log_b1: { id: 'c2_log_b1', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「保留了。」她说，然后把屏幕关掉。这个动作她做了两次——第一次关掉了屏幕，第二次才把屏幕边缘那一条缝上的光也按灭。', next: 'c2_log_b2' },
    c2_log_b2: { id: 'c2_log_b2', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'vera', text: "「二十三点前我会再交一份评估，写你今天的表现。那一份里不会有这一行。」她顿了一下，「你提前知道，明天核对起来会方便些。」", next: 'c2_81' },
    c2_log_c1: { id: 'c2_log_c1', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'vera', text: "「时间和现场经过都记下来了。」她把那条值班记录从头读到尾，读到「先查看受令者状态」的时候停了一下，「这一句写得很准。」", next: 'c2_log_c2' },
    c2_log_c2: { id: 'c2_log_c2', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她把自己的报告保存、加密、上锁，整个流程用了不到一分钟。值班本上那一页的内容留在了船上——这是今天唯一一份两边都跑不掉的记录。', next: 'c2_81' },
    c2_81: { id: 'c2_81', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '二十点差十分，她站起来把折叠床放回原位。床板落下去的时候响了一声，舱壁上那张便签被震得翘起一角，上面是某个前任住户写的「夜里轻一点」。', next: 'c2_82' },
    c2_82: { id: 'c2_82', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「今天下午口令那十一秒。」她站在门口把话说得很直，「我不想让第三个人知道。要不要告诉卡列尔中尉，你决定。你决定完，我就按你的决定执行。」', next: 'c2_83' },
    c2_83: { id: 'c2_83', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '走道尽头传来两声舱门开关的声音。基廷的人开始换班，船上多出来的那三个人让夜班的路都变窄了。', next: 'c2_84' },
    c2_84: { id: 'c2_84', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '你手上现在有两件事：一件是那条口令在她身上做了什么，一件是她今天删掉的那一行。两件事都能只留在两个人之间，也都能变成第三个人手里的字。', next: 'c2_choice_tell_ivna' },
    c2_choice_tell_ivna: {
      id: 'c2_choice_tell_ivna',
      kind: 'choice',
      chapter: 'ch02',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '伊芙娜两点四十接了舰桥，现在还在值勤。她是最有可能在下一次口令到来之前看懂这件事的人。',
      choices: [
        {
          id: 'c2_tell_full',
          label: '全部告诉伊芙娜：十一秒、口令的内容、那只接口箱，还有她删掉的那一行。',
          next: 'c2_tell_a1',
          reaction: '你敲开舰桥侧面的值班间。伊芙娜听完没有问为什么，她问的是第一个具体问题——那十一秒里，谁在舱里。',
          effects: [
            { type: 'flag', key: 'ivna_suspects_vera', value: true },
            { type: 'flag', key: 'c2_ivna_told_full', value: true },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c2_tell_part',
          label: "只说操作部分：口令、时长、接口箱经过改装。删掉的那一行留在船上。",
          next: 'c2_tell_b1',
          reaction: '你把话说到接口箱为止。伊芙娜听完看了你三秒，那三秒里她一句都没插话——她数得出你还剩多少没说。',
          effects: [
            { type: 'flag', key: 'ivna_suspects_vera', value: true },
            { type: 'flag', key: 'c2_ivna_told_part', value: true },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        },
        {
          id: 'c2_tell_ask',
          label: '先问她要不要说。她说不说，你就按她的答复办。',
          next: 'c2_tell_c1',
          reaction: '你退回舱门口问她。她想了两次呼吸那么长的时间，说：「今天不说。以后我自己说。」你把这句话记住了，没有替她改写。',
          effects: [
            { type: 'flag', key: 'c2_ivna_not_told', value: true },
            { type: 'trust', who: 'vera', amount: 2 }
          ]
        }
      ]
    },
    c2_tell_a1: { id: 'c2_tell_a1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「十一秒，接口响应正常，签字的是安全处。」伊芙娜在舰桥侧面的值班间里把手套摘下来一只，「我不管你用什么方式把这件事写下来，从今天起，她的接口台账由我签字。基廷要问，让他来找我的编号。」', next: 'c2_tell_a2' },
    c2_tell_a2: { id: 'c2_tell_a2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: "「还有一句。」她把摘下来的手套折进腰带，「下次出现同样的状态，先叫她一声，确认意识。叫名字不行，就叫呼号。夜枭这两个字，她认。」", next: 'c2_85' },
    c2_tell_b1: { id: 'c2_tell_b1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: "「接口箱的改装情况我看过了。」伊芙娜站在战术台侧面的排班屏前，「另外，我刚核对了她的编号：辅机序列二期，签发人一栏是空的。」", next: 'c2_tell_b2' },
    c2_tell_b2: { id: 'c2_tell_b2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她没有追问你剩下的部分，只把值班表上薇拉的名字从二号机挪到了自己那一班的旁边——从明天起，两个人同一班次值勤。', next: 'c2_85' },
    c2_tell_c1: { id: 'c2_tell_c1', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「今天不说。」她说第二遍的时候把杯子从膝盖上拿了起来，「我记下来了：这件事由我自己说，时间我自己定。」', next: 'c2_tell_c2' },
    c2_tell_c2: { id: 'c2_tell_c2', kind: 'dialogue', chapter: 'ch02', scene: 'quarters', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '她走的时候把舱门带得很轻。走道里那三声脚步里，只有一声踩在了金属接缝上——她现在已经知道哪一块板会响。', next: 'c2_85' },
    c2_85: { id: 'c2_85', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '二十三点，三号机库还亮着。铎兰把灰鸢左肩那块替换件卸了下来，靠在工具箱上；夜枭被推到隔壁的检修位，右侧腿上的接口箱盖板开着，里面有四颗螺栓。', next: 'c2_86' },
    c2_86: { id: 'c2_86', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'doran', text: "「这块板子跟这船十一年了。」铎兰用拇指敲了敲灰鸢左肩那块颜色不一样的替换件，「后来换的，每次挨打总是它先顶上。明天过那条槽，你多看着左侧。十一年的老伙计了。」", next: 'c2_87' },
    c2_87: { id: 'c2_87', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '夜枭停在隔壁检修位，右腿的接口箱盖板开着。薇拉蹲在下面，一只手电、一把小扭力扳手，四颗螺栓一颗一颗过，报数报给谁听都不重要——她只是在按顺序做。', next: 'c2_88' },
    c2_88: { id: 'c2_88', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「三颗标准件，一颗孔位偏两毫米。」她从底下退出来，把扳手放回工具箱边沿，「和上次一样。偏的那一颗在靠里侧，受力方向朝上。」', next: 'c2_f1' },
    c2_f1: { id: 'c2_f1', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '机库的冷气从三号起飞位那边吹过来，带一点金属味。灰鸢的左肩替换件被卸到台钳上，边角有一道焊过两次的痕迹，第二次的焊缝比第一次细。', next: 'c2_f2' },
    c2_f2: { id: 'c2_f2', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'doran', text: '「这块板子是从白鹭身上拆的。」铎兰说，「三年前那艘运输船在半路断了龙骨，能用的我们都捡回来了。到今天为止，它替两台机器挨过打——一台是灰鸢，一台是谁我就不说了。」', next: 'c2_f3' },
    c2_f3: { id: 'c2_f3', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '薇拉蹲在夜枭那条腿旁边量第二颗螺栓的孔位，量了两次。她把两次的数字写在手背的胶布上：两次差了零点二毫米。', next: 'c2_f4' },
    c2_f4: { id: 'c2_f4', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'vera', text: "「孔位偏了零点二。」她说，「上一次是两毫米。孔沿一直在磨，螺栓就会越来越松。再跑两趟，偏的就是三毫米，那时候扳手会滑。」", next: 'c2_f5' },
    c2_f5: { id: 'c2_f5', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'doran', text: '「那就是有人给这只箱子换过一次底座。」铎兰说，「换的时候没按原厂的孔距，硬装上去的。装它的人很赶时间——赶时间的人装的箱子，我一般不碰，今天例外。」', next: 'c2_f6' },
    c2_f6: { id: 'c2_f6', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '他说完就去拿垫片了。工具箱第二格的门开着，那份折了两折的打印纸露出一角，纸角的打印头在灯下反了一点光。', next: 'c2_89' },
    c2_89: { id: 'c2_89', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '铎兰伸手去工具箱第二格找垫片，格门开着的时候，里面那份折了两折的打印纸露出来一角——纸角上有档案处的打印头，日期打得比正文小一号。', next: 'c2_90' },
    c2_90: { id: 'c2_90', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'serious', tone: 'duty', speaker: 'narration', text: '名单是六年前的旧机组表，按编号排。第九行写着：AU-09，薇拉·厄兰，霜环外环，未归。后面还有一列小字，被他的拇指盖住了——盖住的正好是日期和处置结论。', next: 'c2_91' },
    c2_91: { id: 'c2_91', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'doran', text: "「哎，夜枭那个接口箱。」铎兰把纸压回格子里，声音和平常一样，「谁给你装的？改装时用的什么件？」", next: 'c2_92' },
    c2_92: { id: 'c2_92', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'vera', text: '「交接单上写着：无需检查。」她把盖板扣回去，四颗螺栓按对角线上紧，「箱子随机器一起来。序号被磨过，磨痕是新的。」', next: 'c2_93' },
    c2_93: { id: 'c2_93', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '铎兰没有接着问。他把第二格的格门关上，锁扣转了两圈——那是他自己那把钥匙转的圈数。然后他换了个话题，问她力矩扳手归位该放哪一格，她答了，答得很准。', next: 'c2_94' },
    c2_94: { id: 'c2_94', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '薇拉去隔壁收手电的时候，铎兰把格门又打开了一条缝，从里面把那张名单抽出来半寸，只给你看了一眼——然后他的手就合上了。', next: 'c2_95' },
    c2_95: { id: 'c2_95', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'serious', tone: 'duty', speaker: 'doran', text: "「那名单上有个人，跟船上一个人重名。」他把声音压得和扳手落地差不多，「重得不太对。我先核实身份。现在去问她，可能逼得她当场表态，咱们手里还缺证据。」", next: 'c2_96' },
    c2_96: { id: 'c2_96', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'serious', tone: 'duty', speaker: 'narration', text: '他说完就去推工具车，铜色的左手扶在车把上，右手把那份纸塞回第二格。三号机库的挂灯照在灰鸢左肩上，把那块颜色更深的替换件从本体里挑了出来。', next: 'c2_choice_deadname' },
    c2_choice_deadname: {
      id: 'c2_choice_deadname',
      kind: 'choice',
      chapter: 'ch02',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '工具箱第二格的锁扣下面压着一份旧名单。离死航线的窗口还有五个小时，机库里只剩你们两个人和一台没装完的机体。',
      choices: [
        {
          id: 'c2_dn_look',
          label: "先查原始记录，暂时保密，核实以后再告诉她。",
          next: 'c2_dn_a1',
          reaction: '铎兰把钥匙重新塞回口袋里，没有给你。他说这事要查就他来查——他的手比你的呼号好使，出了事也是他的第二格。',
          effects: [
            { type: 'flag', key: 'c2_deadname_look', value: true },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c2_dn_seal',
          label: '先封回去。等这条航线飞完，船上少几个外人再说。',
          next: 'c2_dn_b1',
          reaction: '铎兰把第二格的锁扣又转了两圈，这次转得比刚才慢。他说这是你第一次替一份纸做决定，做得不算错。',
          effects: [
            { type: 'flag', key: 'c2_deadname_sealed', value: true }
          ]
        },
        {
          id: 'c2_dn_ivna',
          label: '把名单给我。我去找伊芙娜。',
          next: 'c2_dn_c1',
          reaction: '铎兰没有把纸拿出来。他先问了一句：你是要她帮着查，还是要她去挡——这两个答案不一样。',
          effects: [
            { type: 'flag', key: 'c2_deadname_ivna', value: true },
            { type: 'trust', who: 'doran', amount: -1 }
          ]
        }
      ]
    },
    c2_dn_a1: { id: 'c2_dn_a1', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'doran', text: '「六年前的名单，霜环外环，编号 AU-09。」他说，「跟我们船上这位一个姓一个名，编号差两号。查这种东西不用问人，问档案就够了——档案不会看着你为难。」', next: 'c2_dn_a2' },
    c2_dn_a2: { id: 'c2_dn_a2', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '他把工具车推回墙角，顺手把灰鸢左肩的挂架螺栓按了一遍。你注意到他把「处置结论」那一列又用手指盖了一次，连他自己都没有读过。', next: 'c2_97' },
    c2_dn_b1: { id: 'c2_dn_b1', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'doran', text: "「封着也行。」他说，「位置记牢。真有人拿名单来查，我们得赶在他们前面把原件取出来。」", next: 'c2_dn_b2' },
    c2_dn_b2: { id: 'c2_dn_b2', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '锁扣合上，第二格的缝里再没有白纸的角。他把钥匙挂回腰带，钥匙和铜臂碰了一下，声音很轻，像谁在数日子。', next: 'c2_97' },
    c2_dn_c1: { id: 'c2_dn_c1', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'serious', tone: 'duty', speaker: 'narration', text: '你说是让她帮你查。铎兰从第二格里把名单拿出来，对折，交到你手上，收得很慢——那张纸到你手里的时候还是凉的。', next: 'c2_dn_c2' },
    c2_dn_c2: { id: 'c2_dn_c2', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'doran', text: "「行。她要是问起这份名单从哪儿来的，你就说机库。其余的我亲自跟她解释。」他停了一下，「她知道我姓什么。」", next: 'c2_dn_c3' },
    c2_dn_c3: { id: 'c2_dn_c3', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'serious', tone: 'duty', speaker: 'ivna', text: '「档案处的旧机组名单。」伊芙娜把纸按在耗材柜上读完，读到第九行的时候没有停，「这件事现在不查。落地以后我去档案柜把原件调出来——这份是复印的，复印的纸不能当依据。」', next: 'c2_dn_c4' },
    c2_dn_c4: { id: 'c2_dn_c4', kind: 'dialogue', chapter: 'ch02', scene: 'medbay', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: "「名单我先收着。」她把纸折成四折，放进制服内侧的口袋，「你今天做的是对的事，方法不算最好。下次直接带来给我看，我能调原档核实。阿吉斯只有这份抄件。」", next: 'c2_97' },
    c2_97: { id: 'c2_97', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '二十点四十，值夜的第三遍广播把机库的挂灯调暗了一档。灰鸢和夜枭并排停在起飞位上，灰鸢左肩那块深色的替换件在灯下比本体暗一档。', next: 'c2_x1' },
    c2_x1: {
      id: 'c2_x1',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '出港前最后一次清点，从三号货舱那扇压力门开始。',
      variants: [
        { requires: ['out_ch1_concord'], text: '三号货舱最里面的封存位空着，只剩一圈压出来的印子和一条没撕干净的封条。XR-07 连同记录器一起被档案处的交通艇接走了，交接单副本贴在你舱门后面，编号四位，前两位是档案处的年份代码。' },
        { requires: ['out_ch1_scarlet'], text: '三号货舱最里面那具驾驶舱盖着两层帆布，清单上写的是「报废结构件：灰鸢左肩备件」。铎兰的影子线路从它的电源口接出去，接口缠着胶带，胶带的颜色和船上的原装胶带不一样。' },
        { requires: ['out_ch1_spire'], text: '驾驶舱还在，数据链的接口箱被拆空了一格——灰塔取走的正是那一格里的读数。诺瓦的观测表上多了三个观测点，其中一个正好压在你们今天要走的槽口上。' },
        { requires: ['out_ch1_neutral'], text: '封条是完整的，签名是你自己的。钥匙在你制服内袋里，昨天洗完衣服之后它换到了另一个口袋，你摸了两次才摸到——它比你记得的位置更靠里。' },
        { requires: ['ending_concord'], text: '旧存档口径：三号货舱的封存位是空的，XR-07 已经被档案处接走，交接单副本贴在你舱门后面，编号四位。' },
        { requires: ['ending_scarlet'], text: '旧存档口径：三号货舱最里面那具驾驶舱盖着帆布，清单上写的是「报废结构件」，铎兰的影子线路从它的电源口接出去。' },
        { requires: ['ending_spire'], text: '旧存档口径：驾驶舱还在，数据链接口被拆空一格，读数已经交出去；诺瓦的观测表上多了三个点。' },
        { requires: ['ending_alone'], text: '旧存档口径：封条是完整的，签名是你自己的，钥匙在你制服内袋里——它在船上，也只在船上。' }
      ],
      next: 'c2_x2'
    },
    c2_x2: {
      id: 'c2_x2',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你们能从它身上拿到的东西，取决于它是被谁带走的、或者是留给谁的。',
      variants: [
        { requires: ['out_ch1_concord'], text: '它不在了，你手上还剩三样东西：交接单、会战那段记录器的遥测抄件、一个能查联合档案的编号。三样都是纸——纸在安全处的清单上很轻，在矿站的冬天里很重。' },
        { requires: ['out_ch1_scarlet'], text: '影子线路今晚还能读它的电源分配表。铎兰说那玩意儿不能当导航，但能告诉你哪一段的电流不稳——死航线的前半段正好吃这一条。' },
        { requires: ['out_ch1_spire'], text: '灰塔那条只读数据链还开着。只读的意思是：他们能看，你不能改。诺瓦可以用它做一次航向对照，代价是那次对照会被记进观测局的档案，连对照的时间都写。' },
        { requires: ['out_ch1_neutral'], text: '钥匙能开货舱门，货舱里那台东西随时能通电。问题是通电以后，它在船上、在你的控制下、同时也在基廷那份清单的第三行上——三件事同时成立。' },
        { requires: ['ending_concord'], text: '你手里剩下的是纸：交接单、遥测抄件、一个能查联合档案的编号。它不在船上，但它在这条航线的每一份清单上。' },
        { requires: ['ending_scarlet'], text: '影子线路还能读它的电源分配表。铎兰说那东西当不了导航，但能指出哪一段电流不稳——前半段正好用得上。' },
        { requires: ['ending_spire'], text: '只读数据链还开着：他们看得到你，你改不了它。一次航向对照的代价是那次对照会被记进档案。' },
        { requires: ['ending_alone'], text: '钥匙在你手里，货舱门随时能开。开门的代价是：基廷的清单第三行上正好有这台东西。' }
      ],
      next: 'c2_x3'
    },
    c2_x3: {
      id: 'c2_x3',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '伊芙娜把这一段的处理方式定得很短。',
      variants: [
        { requires: ['out_ch1_concord'], text: '「少校那份清单的第一行就是它。」她说，「这条航线里，别再让任何人看见多余的封条。空着的位置也是证据，空得干净一点。」' },
        { requires: ['out_ch1_scarlet'], text: '「影子线路今天不关。」她说，「但只有你和铎兰能碰。别人问起来，就说那是照明电路——船上确实缺一盏灯，这个说法不用编。」' },
        { requires: ['out_ch1_spire'], text: "「观测局的数据链我们用，用完就断。」她说，「诺瓦，对照记录由你逐项填，提交前核一遍模板的附加项。」" },
        { requires: ['out_ch1_neutral'], text: '「钥匙你拿着。」她说，「有人问起那扇门，你就说钥匙在你身上，别指给任何人看。你指一次，这艘船以后就多一个被人查的地方。」' },
        { requires: ['ending_concord'], text: '「空着的位置也是证据。」她说，「别再让人看见多余的封条，空得干净一点。」' },
        { requires: ['ending_scarlet'], text: '「影子线路今天不关，但只有你和铎兰能碰。」她说，「别人问，就说是照明电路——这话不用编。」' },
        { requires: ['ending_spire'], text: '「数据链用完就断。」她说，「诺瓦，记录你自己写，别让他们的模板替你写。」' },
        { requires: ['ending_alone'], text: '「钥匙你拿着。」她说，「别指给任何人看。你指一次，这艘船就多一个被人查的地方。」' }
      ],
      next: 'c2_x4'
    },
    c2_x4: {
      id: 'c2_x4',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      text: '基廷过来核对货舱清单的时候，只站在门口，没有进门。',
      variants: [
        { requires: ['out_ch1_concord'], text: '「封存编号我核对过了，和交接单一致。」他说，「这一栏我签完了。剩下的路你们走，记录我抄。」' },
        { requires: ['out_ch1_neutral'], text: '「这扇门的清单上有一页是空白。」他说，「空白不代表没有东西，只代表我还没看。等航线走完，我会来看。」' },
        { requires: ['out_ch1_scarlet'], text: '「三号货舱的重量对不上。」他说，「差得不多，我先按误差记。你可以让我现在就查，也可以让我落地以后查——我建议你选后面那个。」' },
        { requires: ['out_ch1_spire'], text: '「观测局的握手记录里，有一条是从这条船上发出去的。」他说，「内容我读不到，时间我读得到。落地以后我会问一句，问完就归档。」' },
        { requires: ['ending_concord'], text: '「编号我核对过了，和交接单一致。这一栏我签完，剩下的是你们的路，记录我抄。」' },
        { requires: ['ending_scarlet'], text: '「货舱重量对不上，差得不多。」他说，「我先按误差记。你可以让我现在查，也可以让我落地以后查。」' },
        { requires: ['ending_spire'], text: '「有一条握手记录是从这条船上发出去的。」他说，「内容我读不到，时间我读得到。落地以后我问一句，问完就归档。」' },
        { requires: ['ending_alone'], text: '「这扇门的清单上有一页是空白。空白不代表没有东西，只代表我还没看。」' }
      ],
      next: 'c2_x5'
    },
    c2_x5: { id: 'c2_x5', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: "他没有再往下问。安全处的时间表上，货舱排在落地之后，他把「之后」两个字说得很清楚，随后在时间表上划了一道线。检查定在落地之后。", next: 'c2_x6' },
    c2_x6: { id: 'c2_x6', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'duty', speaker: 'narration', text: "压力门重新锁上，锁扣转了两圈，第二圈比第一圈紧——老锁扣又发涩了。走道尽头的广播已经在念出港检查的最后一项。", next: 'c2_98' },
    c2_98: { id: 'c2_98', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'duty', speaker: 'narration', text: '二十一点整，渡鸦号关掉对外广播，进入第三段与第四段之间的空白。主屏上没有航线，只有一条船自己算出来的虚线，每四十秒重算一次，重算的时候会闪一下。', next: 'c2_99' },
    c2_99: { id: 'c2_99', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'narration', text: '你把手轮接过来的时候，陀螺罗盘正被锚点的残场往左拉。自动航线每四十秒重算一次，重算的那一下船首会自己偏出去，你必须在它偏出去之前先压住。', next: 'c2_100' },
    c2_100: { id: 'c2_100', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「手操进槽。」伊芙娜站在你右后方半步，「偏一度半就修，不要等两度。两度就开始吃结构了。」', next: 'c2_101' },
    c2_101: { id: 'c2_101', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'nova', text: '「前段有碎片云，密度不高，每块都在转。」诺瓦把三块最大的碎片标了号，「一号每分钟转十一次，二号十七次。它们不冲我们来，是我们从它们中间穿过去。」', next: 'c2_102' },
    c2_102: { id: 'c2_102', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'doran', text: '「三号泵振动上了两格，能压住。」铎兰在机库里喊，背景里是泵机的声音，「你们在外面别给我弄出新裂口，我在下面只有一双手，还是半双。」', next: 'c2_103' },
    c2_103: { id: 'c2_103', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'narration', text: '一块碎片从船首左侧擦过去，距离足够远，但它的反光在主屏上留下了一条亮线，诺瓦手动把那一条标成了红色。船身没有抖——抖的是甲板下面的那层网，声音从脚底一直传到手轮上。', next: 'c2_104' },
    c2_104: { id: 'c2_104', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'keating', text: "「你们的过点记录采样率是多少。」基廷站在战术台后面问，问得很平，「我需要原始采样，归档用。航行日志可以稍后补。」", next: 'c2_105' },
    c2_105: { id: 'c2_105', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「少校，坐下。」伊芙娜没有回头，「采样率是每秒十二次，你自己看屏幕。你要是站起来挡了诺瓦的视线，我就让人把你请到货舱去。」', next: 'c2_106' },
    c2_106: { id: 'c2_106', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'narration', text: "虚线又跳了一次——这次是往右四十米，跳完自己弹回来了一半。诺瓦把两张图叠在一起比对，发现两边的偏差不一样，偏差恰好沿着锚点残场的方向。她标出受干扰的一段，让导航重新扣除这股拉力。", next: 'c2_107' },
    c2_107: { id: 'c2_107', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'nova', text: '「槽的中段有一座冷锚，老锚，早就不发信号了。」诺瓦把那个位置圈出来，「它还留着热痕。要定住这条虚线，得有人贴着它读一次角度。读数窗九十秒，过了就得等下一个潮次。」', next: 'c2_108' },
    c2_108: { id: 'c2_108', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「船出不去。」伊芙娜把手套拉紧，「船一停，残场就把我们推离中心线。谁出去？」', next: 'c2_109' },
    c2_109: { id: 'c2_109', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'vera', text: '「夜枭出去。」薇拉已经站起来了，「探测臂近距离能读到冷锚的热痕。但读数需要参照——航道口得有一盏灯照着，不然我读到的是一串没有方向的数。」', next: 'c2_110' },
    c2_110: { id: 'c2_110', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「两机出舱，双索。」伊芙娜把指挥权摆好，「灰鸢出去照口子，手操，不准用自动——你的手比它的算法快。船上的手轮我来。九十秒，谁都不许浪费。」', next: 'c2_111' },
    c2_111: { id: 'c2_111', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'serious', tone: 'combat', speaker: 'doran', text: '「听好。」铎兰一边给你扣安全带一边说，「左肩那块板子最多吃一次满推力，吃完就换。夜枭的探测臂不能顶，那只左手能顶——这两句上个月就说过，再说一遍是因为今天要用。」上舱盖之前，他把那盏罐头盒做的临时灯夹在你挂点边上，按了一下开关：「灯也带上，六成电。」', next: 'c2_choice_handler' },
    c2_choice_handler: {
      id: 'c2_choice_handler',
      kind: 'choice',
      chapter: 'ch02',
      scene: 'bridge',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '九十秒的读数窗要开了。槽里的灯只够照出航道口一个边，剩下的参照要从别处来——而此刻刚好有四方在频道上等你回话。',
      choices: [
        {
          id: 'c2_hd_concord',
          label: '用档案处的航段模板标定航道口：数据按流程进联合的档案。',
          next: 'c2_hd_a1',
          reaction: '基廷当场把模板推给诺瓦，回执上签了他自己的编号。他没有要求多一条频道——这是最省事的一种接管，省事到让人不放心。',
          effects: [
            { type: 'flag', key: 'c2_hd_concord', value: true },
            { type: 'standing', who: 'concord', amount: 2 },
            { type: 'standing', who: 'scarlet', amount: -1 }
          ]
        },
        {
          id: 'c2_hd_scarlet',
          label: '接赤垣的临时信标：他们在槽口放了一盏，条件是要过点记录的副本。',
          next: 'c2_hd_b1',
          reaction: '赤垣的应答只有一句：信标已经在闪，两个短、一个长。铎兰在耳机里低声说他们的东西他认得，然后就把频道让给了诺瓦。',
          effects: [
            { type: 'flag', key: 'c2_hd_scarlet', value: true },
            { type: 'standing', who: 'scarlet', amount: 2 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c2_hd_spire',
          label: '用灰塔的校准槽对准：观测窗口开出去，数据归观测局。',
          next: 'c2_hd_c1',
          reaction: '诺瓦把观测局的握手请求调出来，按了接受。她按得很干脆，按完把手指从屏幕上抬起来停了一下，像是在等自己反悔——她没有反悔。',
          effects: [
            { type: 'flag', key: 'c2_hd_spire', value: true },
            { type: 'standing', who: 'spire', amount: 2 },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        },
        {
          id: 'c2_hd_dark',
          label: '谁的都不接：拆一块旧浮标电池当临时灯，参照我们自己给。',
          next: 'c2_hd_d1',
          reaction: '铎兰骂了一句，然后开始拆。他把旧浮标上那块电池卸下来的时候，手上那圈空白便签被蹭掉了半张——他说这是今天的学费，记在自己账上。',
          effects: [
            { type: 'flag', key: 'c2_hd_dark', value: true },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'standing', who: 'scarlet', amount: -1 },
            { type: 'standing', who: 'spire', amount: -1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        }
      ]
    },
    c2_hd_a1: { id: 'c2_hd_a1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'keating', text: "「模板会给你三个标定点。」基廷把回执推回来，「第三个点是估算的，误差我写明了。你们要是掉在那个误差里，档案会记为『按模板执行』，连同我这份误差说明一起保存。」", next: 'c2_hd_a2' },
    c2_hd_a2: { id: 'c2_hd_a2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「那就把第四个点留给我们自己。」伊芙娜把模板钉在主屏角落，「诺瓦，模板进对照，不进航向。航向还是我们的手轮。」', next: 'c2_112' },
    c2_hd_b1: { id: 'c2_hd_b1', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'scarlet_voice', text: '「渡鸦号，信标两短一长，位置在你左舷前方十八公里。」频道里的男声说得很短，「你们过点记录发我们一份。用不上的部分你们可以涂掉，我们就想看看这条路能不能走。」', next: 'c2_hd_b2' },
    c2_hd_b2: { id: 'c2_hd_b2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「记下来，但别答应他们第二遍。」伊芙娜说，「我们今天欠他们一次过点记录。欠东西的船要活着才能还，所以先把船带过去。」', next: 'c2_112' },
    c2_hd_c1: { id: 'c2_hd_c1', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'nova', text: '「握手完成，观测窗口九十秒，与我们的读数窗重合。」诺瓦盯着两个相同的倒计时，「他们会拿到舰体震动曲线。也就是说，他们能算出来我们这台船还能挨几下。」', next: 'c2_hd_c2' },
    c2_hd_c2: { id: 'c2_hd_c2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「那就别让他们看见我们挨。」伊芙娜把手轮交给你之前的最后一秒用在检查安全带上，「观测局喜欢给船打分。今天这一分我们自己挣。」', next: 'c2_112' },
    c2_hd_d1: { id: 'c2_hd_d1', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'combat', speaker: 'doran', text: '「挂架上那盏灯就是我出舱前给你夹上去的那一盏。」铎兰在机库那头说，「旧电池还有六成，够烧十四分钟。灯罩是罐头盒，反光是锡纸——你们要是嫌它丑，回头自己买一个。」', next: 'c2_hd_d2' },
    c2_hd_d2: { id: 'c2_hd_d2', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: "「改用目视导航，我们自己领航。」伊芙娜在主屏上把三个外部频道全部关掉，「只剩我们的手、我们的灯，和夜枭那个脑子。够用。」", next: 'c2_112' },
    c2_112: { id: 'c2_112', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'serious', tone: 'combat', speaker: 'narration', text: '两机出舱用了四十一秒。灰鸢先出去，夜枭跟在后面偏左十八米；两条牵引索从机库门的两侧放出，索长给到两百四十米，再长就要碰槽壁。', next: 'c2_113' },
    c2_113: { id: 'c2_113', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: "槽壁由一层灰色的碎石构成，宽得像一条被拖过的河床。渡鸦号在你们身后三百米，只有舷侧的琥珀灯能看清，那排灯在残场里抖得很厉害。", next: 'c2_g1' },
    c2_g1: { id: 'c2_g1', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '出舱检查按顺序来：第一条索的张力、第二条索的余量、两机之间的十八米间距。薇拉报完这三项，又补了一项她自己的：靠里那片侦测翼的锁销旷了，展开位卡不牢。', next: 'c2_g2' },
    c2_g2: { id: 'c2_g2', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: '「四十一分钟前发现的，起飞前来不及换。」她说，「它可能咬着不动，也可能自己折回来。两种都在架子还在的位置上，但读数的时候我要把角度补两度——先告诉你，免得你以为数字是我算错的。」', next: 'c2_g3' },
    c2_g3: { id: 'c2_g3', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: "你说补吧。她回了一声收到，把那片翼的锁销件号写在舱内记录板上——每个字母的大小写都照着零件表，旁边还标了锁销所在的位置。", next: 'c2_g4' },
    c2_g4: { id: 'c2_g4', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'nova', text: "「残场强度在涨，每秒十四米，方向是你们的左前方。」诺瓦读数，「你们的灯照不到它，但它会把你们俩一起推偏。现在补推力，把横移抵消掉，返程余量稍后重算。」", next: 'c2_g5' },
    c2_g5: { id: 'c2_g5', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '灰鸢的推进剂表停在百分之六十八。你把手操的力度分成十档，用第三档起步：太猛会把两条索带偏，太软会被残场推回来，第三档是你在地面训练里练过最多的那一档。', next: 'c2_g6' },
    c2_g6: { id: 'c2_g6', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'serious', tone: 'combat', speaker: 'doran', text: "「机库门开着的时候船是歪的。」铎兰在频道里说，「回舱走正中，左侧有一盏警示灯坏了。我在泵房作业，门口由你们互相引导。」", next: 'c2_114' },
    c2_114: { id: 'c2_114', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: '「夜枭到位。探测臂预冷三十秒。」薇拉的报数没有多余的词，「冷锚方位：我的正前方，距离四百七十米。热痕比记录里暗，我可能要贴到三百米以内。」', next: 'c2_115' },
    c2_115: { id: 'c2_115', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '你把工作灯打向航道口的边。灰鸢的左手抓住一截折断的横梁，机械指一节一节扣下去，扣到第二节的时候，探照灯才真正照出一条直的边。', next: 'c2_116' },
    c2_116: { id: 'c2_116', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'nova', text: '「参照有了，读数的零点偏左三度。」诺瓦的声音压得很紧，「夜枭，把三度补回去，别按你自己看到的方向算——残场会骗你的眼睛。」', next: 'c2_117' },
    c2_117: { id: 'c2_117', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '第二十五秒，一块巴掌大的碎片从夜枭右后方擦过去，正打在背后那片侦测翼的根部。两片翼都还在架子上，没有任何一块飞出去；靠里那片被撞得往里咬死，锁销当场剪断，从此折在收位里展不开。', next: 'c2_118' },
    c2_118: { id: 'c2_118', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: '「右后推进一路失效。我在转，每秒十四度。」她的声音没有变，「读数还有六十七秒。别让我停下来。」', next: 'c2_119' },
    c2_119: { id: 'c2_119', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「灰鸢，去接。」伊芙娜只说了四个字，隔了一拍才补上第五个，「手操。」', next: 'c2_120' },
    c2_120: { id: 'c2_120', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '你把灰鸢的左手从横梁上松开，机身顺着牵引索的张力摆出去半圈。左肩前端的挂钩在灯下转了一次角度，钩住夜枭胸前的框架。两机撞在一起的力道把你从座椅上推起半寸，安全带又把你按了回去。', next: 'c2_121' },
    c2_121: { id: 'c2_121', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: "「接住了。」她停了三秒，探臂的角度一点点调回去，「左肩挂架读数在跳，收推力，保持握持。挂钩必须吃住载荷。」", next: 'c2_122' },
    c2_122: { id: 'c2_122', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '你们就以这个姿势读下去：她转，你扛。探测臂上的三只镜头一只一只切过去，冷锚的热痕在她屏幕里从一条亮线变成一个点。', next: 'c2_123' },
    c2_123: { id: 'c2_123', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'doran', text: '「船到中段了。」铎兰在底舱报数，「三号泵超红线两百转，我在下面守着。你们外面要是有谁想放弃，先说一声，我好把热水关掉省点电。」', next: 'c2_124' },
    c2_124: { id: 'c2_124', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「船首一度七，压得住。」伊芙娜的手在手轮上没动过位置，「灰鸢，你们两个再撑四十秒——我这边要是退，你们就被槽壁夹住了。」', next: 'c2_g7' },
    c2_g7: { id: 'c2_g7', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '第五十五秒，船的中段从你们左后方过去。它的舷侧在残场里抖，抖得很有规律，像船底下有人一直在数同一串数。', next: 'c2_g8' },
    c2_g8: { id: 'c2_g8', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「灰鸢，报索余量、报姿态、报灯的角度。」伊芙娜报得很短，「三个数，不要一句『还好』。」', next: 'c2_g9' },
    c2_g9: { id: 'c2_g9', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '你把三个数报了出去。第二组数报完的时候，夜枭已经转到你的背侧，探测臂从你头顶扫过去，扫描间隔三秒一次——她转得比你稳，尽管她的推进已经少了一路。', next: 'c2_g10' },
    c2_g10: { id: 'c2_g10', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'nova', text: '「读数窗口还剩三十四秒，热痕在往左偏。」诺瓦说，「它偏得比记录里快。可能是它自己在动，也可能是残场在骗我们——不管哪一种，你们的参照都得跟着修。」', next: 'c2_g11' },
    c2_g11: { id: 'c2_g11', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: "「参照我自己修。」薇拉说，「你把灯握稳，我按光点补角度。光点一晃，参照就会跟着偏。」", next: 'c2_125' },
    c2_125: { id: 'c2_125', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: "第四十九秒，槽里倒过来一股横流，先推夜枭，再推你。挂钩上的载荷一下子翻了倍，你听见左肩那块板子发出一声很短的响——金属的裂声还在延长。", next: 'c2_126' },
    c2_126: { id: 'c2_126', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '灰鸢的姿态先是往右倒，再往槽壁那边斜。牵引索绷成一条直线，却拉不回一个已经裂开的挂点。你离碎石带只剩七十米，速度每秒十一米。', next: 'c2_127' },
    c2_127: { id: 'c2_127', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: '「机械手能顶。探测臂不能。」她说这话的时候已经在动了，「你的左手别用力，用我的。」', next: 'c2_128' },
    c2_128: { id: 'c2_128', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '夜枭的左机械手撑在你的肋部装甲上，五指一节一节扣紧，然后整条手臂发力。两机被推开了半个身位，你的索重新吃上力，她的机体往反方向弹出去，撞在一段浮标残骸上。', next: 'c2_129' },
    c2_129: { id: 'c2_129', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: '「回索上。」她报得很短，「你的挂架裂了，别再吃推力。我这边还能读，读数还有十二秒。」', next: 'c2_130' },
    c2_130: { id: 'c2_130', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '最后十二秒里没有声音。探测臂的三只镜头同时指向那个点，屏幕上的数字一格一格往下掉；槽壁的碎石从你们两边过去，像两条慢慢合上的门。', next: 'c2_131' },
    c2_131: { id: 'c2_131', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'vera', text: "「读到。方位三一七，仰角负四，距离三百一十二米。」她把三组数报完，又补了一组，「热痕的尾向是往回拐的——这是正常停机留下的热痕。有人关掉了这座锚。」", next: 'c2_132' },
    c2_132: {
      id: 'c2_132',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'bridge',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '三组数进了导航核心，船上那条虚线的第二个点被钉住，整条线第一次不再自己跳。诺瓦把这条线锁进本船的核心，锁的时候加了一道只有船长和你在的权限。',
      onEnter: [
        { type: 'flag', key: 'anchor_key_fragment_1', value: true }
      ],
      next: 'c2_133'
    },
    c2_133: { id: 'c2_133', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'nova', text: '「线定住了。」诺瓦把第二个点标成实心，「但这一段的解码只有一半——冷锚的位置我们有了，冷锚里存着的东西我们没有。要拿全套，得有人站到它跟前去。」', next: 'c2_134' },
    c2_134: { id: 'c2_134', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「先过槽。」伊芙娜的手轮转过去两度，「全船，进槽。外面两机贴索跟船，谁都别再吃推力。」', next: 'c2_135' },
    c2_135: { id: 'c2_135', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '渡鸦号从你们中间穿过去的时候离得很近，近到能看清左侧三个机库口一个接一个亮着灯。船首的浪把碎石带推开了一层，那些碎片缓缓往两边让，像被谁从中间分过一次。', next: 'c2_g12' },
    c2_g12: { id: 'c2_g12', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '出槽之后的航道宽了，宽的地方反而更危险：两侧的碎石会往中间合，合拢的速度每秒两米，中间留出来的安全带在慢慢变窄。', next: 'c2_g13' },
    c2_g13: { id: 'c2_g13', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'doran', text: '「泵房水温上了六十度。」铎兰说，「能撑。你们要是在外面再待三分钟，我就得开消防管降温——那时候机库门一开，水先浇到我身上，你们再进来。」', next: 'c2_g14' },
    c2_g14: { id: 'c2_g14', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '你把两机带到船尾右侧的空档里。灯的光柱在碎石上切出一条白线，白线的尽头是渡鸦号第三个机库口——门已经开了一半，里面那盏挂灯在等你。', next: 'c2_g15' },
    c2_g15: { id: 'c2_g15', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「进机库，先左机后右机，间距十二米。」伊芙娜报得很快，「慢一点没关系。撞坏了更慢，还得让铎兰骂你们一路。」', next: 'c2_g16' },
    c2_g16: { id: 'c2_g16', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: "灰鸢先过门，锁扣扣上的时候液压声震了一整条走道。夜枭进来时左侧擦了一下门框，擦出一道白痕——四天以后，你经过时还认得出那道新鲜的刮痕。", next: 'c2_136' },
    c2_136: { id: 'c2_136', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'doran', text: '「三号泵超红线两百四十转。」铎兰在频道里喊，「我不降，我能守到出槽。谁要是现在跟我说要减速，我就把他锁在泵房里听一晚上。」', next: 'c2_137' },
    c2_137: {
      id: 'c2_137',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '槽口外面，你们放出去的那盏参照正在灭。',
      variants: [
        { requires: ['c2_hd_scarlet'], text: '槽口外面，赤垣那盏信标闪完了最后一组两短一长，然后自己熄了。诺瓦后来才算出它的电池只够四十分钟——他们把自己能烧的东西先给了你们。' },
        { requires: ['c2_hd_spire'], text: '槽口外面，观测窗口按秒关闭。灰塔那边在最后三秒里补发了一条请求：请保持姿态三秒，便于采样。伊芙娜没有回，直接把船带了出去。' },
        { requires: ['c2_hd_concord'], text: '槽口外面，档案处的模板在第三个标定点上偏出了十一米——估算点就是估算点。你用手操补掉了那十一米，诺瓦在记录里单独标了一行「现场修正」。' },
        { requires: ['c2_hd_dark'], text: '槽口外面，那只罐头盒做的灯烧到了底。灯灭之前照出的最后一段边线，正好是你们要走的那一段——六成电，十四分钟，一分没多。' }
      ],
      next: 'c2_138'
    },
    c2_138: { id: 'c2_138', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '出槽最后两百米，三个外部参照全都没有了。诺瓦把航向交回你手上，你靠着灰鸢的工作灯和夜枭报的两组角度，把船首一点点摆回中心线——这一段没有任何人帮得上忙。', next: 'c2_139' },
    c2_139: { id: 'c2_139', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'ivna', text: '「出槽。回收双索。」伊芙娜的声音第一次松了半度，「灰鸢、夜枭，进机库。别在外面检查——外面那层东西看多了会让人觉得自己也裂了。」', next: 'c2_140' },
    c2_140: { id: 'c2_140', kind: 'dialogue', chapter: 'ch02', scene: 'battle', expression: 'serious', tone: 'combat', speaker: 'narration', text: '窗口的倒计时停在七分十九秒上。渡鸦号带着两机、一船的裂缝和一盏灭掉的灯，从死航线的那条槽里出来，船尾的碎石慢慢合拢，把那条路又还给了黑暗。', next: 'c2_141' },
    c2_141: { id: 'c2_141', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '出槽二十分钟，全船的状态板挂了出来：灰鸢左肩挂架裂纹三处；夜枭右后侦测翼的铰链咬死、锁销剪断，两片侦测翼都还在架上、折在收位、拿临时销别着，换销复位排在早上六点；一路推进离线，接口箱四颗螺栓震松一颗，三号泵超红线累计十一分钟，氧化剂剩四成。', next: 'c2_142' },
    c2_142: { id: 'c2_142', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: '「两机的损伤先挂在待修单上。」伊芙娜把板子翻到第二页，「安全处的人还在船上，机库的每一张贴纸他都能拍照。你们的裂纹先由铎兰自己修，修完再报。」', next: 'c2_143' },
    c2_143: { id: 'c2_143', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'keating', text: "「现场经过已经记下，结论交上级审核。」基廷合上他的文件夹，「船是你们带过来的，这一句我会照写。至于你们用了谁的路标、许了谁什么，那是你们那一栏的事。我的下一份清单会比这一份长。」", next: 'c2_144' },
    c2_144: { id: 'c2_144', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'ivna', text: '「槽外的航段按两班轮值排，进沧澜外圈之前所有人轮班休息。」伊芙娜把手套摘下来一只，「今天先说一件事：手操那一段，记录里写的是『按现场判断』。这四个字是你们自己挣的，别让谁替它加注解。」', variants: [
      { requires: ['c2_lane_old'], text: '「槽外还有十一个小时到沧澜外圈，两班轮值我已经排好，进外圈之前所有人轮班休息。」伊芙娜把手套摘下来一只，「今天先说一件事：手操那一段，记录里写的是『按现场判断』。这四个字是你们自己挣的，别让谁替它加注解。」' },
      { requires: ['c2_lane_red'], text: '「槽外还有四个小时到沧澜外圈，两班轮值我已经排好，进外圈之前所有人轮班休息。」伊芙娜把手套摘下来一只，「今天先说一件事：手操那一段，记录里写的是『按现场判断』。这四个字是你们自己挣的，别让谁替它加注解。」' },
      { requires: ['c2_lane_cal'], text: '「槽外还有七个半小时到沧澜外圈，两班轮值我已经排好，进外圈之前所有人轮班休息。」伊芙娜把手套摘下来一只，「今天先说一件事：手操那一段，记录里写的是『按现场判断』。这四个字是你们自己挣的，别让谁替它加注解。」' }
    ], next: 'c2_145' },
    c2_145: { id: 'c2_145', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '交班以后，三号机库只留了一盏挂灯。铎兰把两张凳子和一只加热桶搬到台钳边上，桶里是面；热水器最后撑住了，代价是它的开关上多缠了一圈胶带。', next: 'c2_146' },
    c2_146: { id: 'c2_146', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'doran', text: '「你那个挂架我拆下来了。」铎兰用筷子指了指台面，「裂纹从第三个孔开始，裂得像被人咬过。好消息是它能修；坏消息是修它得把左肩整块板卸下来，卸下来你就得用备用件飞一天。」', next: 'c2_147' },
    c2_147: { id: 'c2_147', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: "「那片翼还挂在架上，我只把铰链拆开看了：卡死，锁销剪断。」薇拉把一截剪断的锁销和一片咬出印子的铰链板放在台面边角，「铰链上有撞击痕迹。我想知道撞它的是哪一块碎片——如果找得到，我就能算下一次要躲多远。」", next: 'c2_148' },
    c2_148: { id: 'c2_148', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '你说留着吧。她这次没有问占不占公共物资，只把那截锁销和铰链板收进自己的储物格里，格子角上原来那份空白便签被她压平了。', next: 'c2_149' },
    c2_149: { id: 'c2_149', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「这一次我不问写在哪一行。」她说这句话的时候没有看谁，只是把面桶往自己那边挪了半尺——铎兰说那叫添饭，她说这叫按需分配。', next: 'c2_150' },
    c2_150: { id: 'c2_150', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'doran', text: '「三号泵超红线十一分钟，听着吓人。」铎兰往面里加了一勺不知道是什么的酱，「它去年还超了四十分钟，那次是因为有人把扳手掉进泵房。今天这一回，它超得还算有道理。」', next: 'c2_h1' },
    c2_h1: { id: 'c2_h1', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '吃面的时候，铎兰从口袋里掏出一把螺栓，按长短排在台面上。他说这是今天换下来的，长短不一样，不能混着装回去——混装过的机器他修过三次，三次都是别人装的。', next: 'c2_h2' },
    c2_h2: { id: 'c2_h2', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'doran', text: '「你那个挂架的第三颗螺栓弯了七度。」他挑出最短的那一根，「弯七度还能拆下来，算它命好。上个月有一根弯了十九度，我锯了四十分钟，锯到手都热了。」', next: 'c2_h3' },
    c2_h3: { id: 'c2_h3', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: "「换成我，我会把弯掉的那根留着。」薇拉说，「它记录的是受力方向。拿它对着装配图看，就能还原当时往哪边拉。换上新件以后，还得靠它找原因。」", next: 'c2_h4' },
    c2_h4: { id: 'c2_h4', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '铎兰听完没笑，把那根弯螺栓放进一只空盒子里，盒子外面用油笔写了两个字：留着。写完他把盒子推进工具箱第二格，和那份折好的名单放在同一格。', next: 'c2_h5' },
    c2_h5: { id: 'c2_h5', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'nova', text: '「留着也占地方。」诺瓦端着空碗从门口说，「我的报告里有一条：船上空间有限，无用物件每季度清一次。这条是我写的，我背得出来。」', next: 'c2_h6' },
    c2_h6: { id: 'c2_h6', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'doran', text: '「那是你的报告。」铎兰把格门拍上，「这是我的手艺。工具箱这一格，按我的规矩。」', next: 'c2_h13' },
    c2_h13: { id: 'c2_h13', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '面吃完以后，铎兰把台面上那把螺栓按长短装回三个盒子，最短的那一根单独搁在台钳底下。他说这根明天要用，用在哪儿明天再说。', next: 'c2_h14' },
    c2_h14: { id: 'c2_h14', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'doran', text: '「明天早上六点我装挂架，顺带把夜枭那片翼的销换了、铰链复位。」他说，「装完你试三组载荷，那两片翼也要当着人展开一次给我看。夜枭要在旁边看着，她说她要记数——我说随她，反正她记的比我写的清楚。」', next: 'c2_h15' },
    c2_h15: { id: 'c2_h15', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '薇拉把空碗摞起来端去洗，走之前问洗碗的水在哪儿。铎兰说架子上，凉的。她说好——这个「好」她比平时说得慢一点，像是把它当成一件要记住的事。', next: 'c2_151' },
    c2_151: { id: 'c2_151', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'nova', text: '「我逮到一个人。」诺瓦拎着数据板进来，「她把我的报告当教科书。第四条：不要用问题回答问题。她抄了三遍，第三遍连标点都抄对了。」', next: 'c2_152' },
    c2_152: { id: 'c2_152', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「第一遍我抄错了。」薇拉说，「抄成了『不要回答被提出来的问题』。第二遍对了。第四条的适用范围我还没确认。」', next: 'c2_153' },
    c2_153: { id: 'c2_153', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'nova', text: '「我给很多人打过分。」诺瓦把数据板翻过来扣在台面上，「你是我第一个拿不准的人。所以我在报告末尾写了一行『不确定』——写完我自己看着它愣了半分钟，这是我第一次在正式文件里写这三个字。」', next: 'c2_154' },
    c2_154: { id: 'c2_154', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '铭牌灯照着三个人的影子，影子压在灰鸢的左肩上。面桶见底的时候，铎兰说他明天要修挂架、诺瓦说她明天要把报告重抄一遍、薇拉说她明天要把那截锁销的断面量到毫米。', next: 'c2_155' },
    c2_155: { id: 'c2_155', kind: 'dialogue', chapter: 'ch02', scene: 'hangar', expression: 'neutral', tone: 'off_duty', speaker: 'doran', text: '「饭是我做的，难吃归难吃。」铎兰把桶盖扣上，「谁剩谁洗碗——你们两个今天都剩了。碗在架子上，热水器我已经关了，用凉的。」', next: 'c2_156' },
    c2_156: { id: 'c2_156', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '凌晨两点，观察廊没有别人。舷窗上那三道线还在，第二条被袖子擦糊的那一段更糊了。你在最下面添了一道，划得很短。', next: 'c2_157' },
    c2_157: { id: 'c2_157', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「这是第四道。」她站在你旁边看了一会儿，「第四道是今天。今天不算一趟完整的出港，我们是绕出来的。」', next: 'c2_h7' },
    c2_h7: { id: 'c2_h7', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '她回了一趟餐室，端着两只杯子回来：一只她自己的，一只你的。你那杯上你的呼号是别人替你写的，字很大，占了半个杯壁。', next: 'c2_h8' },
    c2_h8: { id: 'c2_h8', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「大号字占地方。」她把杯子递给你，说完自己停了一下，像是在确认这句话是不是从别人那儿听来的。', next: 'c2_h9' },
    c2_h9: { id: 'c2_h9', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '你说这句是诺瓦的。她说是，她只借一天。然后她把今天做过的三件事报了一遍：在储物格上写自己的名字、留下那截剪断的锁销、在值班表上把自己挪到了另一列。', next: 'c2_h10' },
    c2_h10: { id: 'c2_h10', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: "「第三件是卡列尔中尉让写的。」她说，「她说同一班次比较好管。我算了一下，确实比较好管——两个人的检查时间刚好接得上。」", next: 'c2_h16' },
    c2_h16: { id: 'c2_h16', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '走道尽头传来一阵很轻的响，是通风口里某块松了的铁皮在抖。船在巡航，抖动的间隔很匀，匀到你会不自觉地去数它。', next: 'c2_h17' },
    c2_h17: { id: 'c2_h17', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「今天的噪声比昨天小。」她说，「昨天是三号泵，今天是通风口。我能分得出来。」', next: 'c2_h18' },
    c2_h18: { id: 'c2_h18', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: "你问她是怎么分的。她说她记了三个星期：值班的时候记一次，睡前再记一次，后来不用记也分得出来。她管这叫长在耳朵里的表——说到这个自己起的名字，她还抬手碰了碰耳朵。", next: 'c2_h11' },
    c2_h11: { id: 'c2_h11', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: '窗外的浮标停在半亮的位置上，一直没往下亮。你问她换到别人那一列会不会不习惯。她想了想，说她还没有「习惯」这种东西——说完她补了一句：我的意思是，我还没到那种时候。', next: 'c2_h12' },
    c2_h12: { id: 'c2_h12', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'warm', tone: 'off_duty', speaker: 'vera', text: '「下次换班的时候，你叫我。」她说，「我不确定我能不能自己醒。这句话我记下来了，你不必回答。」', next: 'c2_158' },
    c2_158: { id: 'c2_158', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'warm', tone: 'off_duty', speaker: 'vera', text: '「那我也划一道。」她伸出手指，在你那道线右边一点点的地方划了很浅的一道，两道线没有碰到。划完她把手收回去，看了看指腹上留下的白痕。', next: 'c2_159' },
    c2_159: { id: 'c2_159', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'narration', text: "窗外的深空里，往沧澜去的那一列锚点浮标正在一枚一枚亮起来，亮到一半又停住——它们要等着指令。烧水器在走道那头响了两次，第二次响完，走道那头仍飘着一小股水汽。", next: 'c2_160' },
    c2_160: { id: 'c2_160', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'neutral', tone: 'off_duty', speaker: 'vera', text: '「下一次，我可能会先问你。」她说得很慢，「我不确定这句话现在要不要说。我记下来了。」', next: 'c2_161' },
    c2_161: { id: 'c2_161', kind: 'dialogue', chapter: 'ch02', scene: 'ship_rail', expression: 'warm', tone: 'off_duty', speaker: 'narration', text: '你没有替她回答。你们就那样站着，直到交班铃响，她才把杯子从长椅上拿起来，先走回走道——走到拐角的时候她停了一下，等你跟上。', next: 'c2_162' },
    c2_162: { id: 'c2_162', kind: 'dialogue', chapter: 'ch02', scene: 'bridge', expression: 'neutral', tone: 'duty', speaker: 'narration', text: '天亮前，诺瓦把死航线那一次的解码整理成一份正式文件，一共九页：过点时间、残场偏差、两机出舱记录、最后一组读数。文件的副本去向写在第一页，第一页只有一行。', next: 'c2_route_tail' },
    c2_route_tail: {
      id: 'c2_route_tail',
      kind: 'dialogue',
      chapter: 'ch02',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '第一页那一行写的是这份文件要去的地方。',
      variants: [
        { requires: ['c2_hd_concord'], text: '副本经档案处模板通道移交联合，原件留在船上。基廷在自己的文件夹里写下收件编号，收件编号的第一位是这艘船的舷号——从此这条近路上有联合的名字。' },
        { requires: ['c2_hd_scarlet'], text: '副本按赤垣的要求发到那盏信标的备用频道，涂掉了两处频率，留下了全部过点时间。铎兰把发送记录抄在自己那张便签上，写完把便签贴回铜臂。' },
        { requires: ['c2_hd_spire'], text: "副本经观测局的归档端口送出，观测局回执上写着「样本编号 V-27」。你在船名和呼号之后，又记下了观测局给这条航线编的新号。" },
        { requires: ['c2_hd_dark'], text: '这一次没有副本。九页文件全部锁进本船导航核心，取出需要船长和值班军官两把钥匙；前一页那一行写的是「留船」。' }
      ],
      next: 'out_ch2_neutral',
      nextIf: [
        { requires: ['c2_hd_concord'], next: 'out_ch2_concord' },
        { requires: ['c2_hd_scarlet'], next: 'out_ch2_scarlet' },
        { requires: ['c2_hd_spire'], next: 'out_ch2_spire' }
      ]
    },
    out_ch2_concord: {
      id: 'out_ch2_concord',
      kind: 'chapterOutcome',
      chapter: 'ch02',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'out_ch2_concord', value: true }
      ],
      text: '联合的档案处把这条槽路命名为「渡鸦近路」，编号用的是本船舷号。基廷的审核没有结束，他只是从检查变成了常驻——下一份清单会更长，而这一份已经装订好了。',
      outcomeId: 'out_ch2_concord',
      continuesTo: 'ch03'
    },
    out_ch2_scarlet: {
      id: 'out_ch2_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch02',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'out_ch2_scarlet', value: true }
      ],
      text: '赤垣的频道在发送结束以后没有说再见，只回了一组坐标——那是外环五个矿站的落点，意思是他们已经按这条线排了补给。渡鸦号现在走的是一条联合的图上看不见的路，而路上有人在等它。',
      outcomeId: 'out_ch2_scarlet',
      continuesTo: 'ch03'
    },
    out_ch2_spire: {
      id: 'out_ch2_spire',
      kind: 'chapterOutcome',
      chapter: 'ch02',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'out_ch2_spire', value: true }
      ],
      text: '灰塔把这条航线写成了「V-27 样本」，观测窗口的记录里连三号泵超红线的十一分钟都有。诺瓦在报告的末尾留下了「不确定」三个字，那三个字是她今天唯一没有解释的东西。',
      outcomeId: 'out_ch2_spire',
      continuesTo: 'ch03'
    },
    out_ch2_neutral: {
      id: 'out_ch2_neutral',
      kind: 'chapterOutcome',
      chapter: 'ch02',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'out_ch2_neutral', value: true }
      ],
      text: '九页文件锁进本船的核心，两把钥匙分了两个人。机库里那道裂纹还在灰鸢的左肩上，夜枭那片折在收位上的侦测翼还挂在架上——换销和复位排在早上六点，装完要当着人展开一次；两样都没有报损，它们在等一个什么时候可以说的时候。',
      outcomeId: 'out_ch2_neutral',
      continuesTo: 'ch03'
    },
    // ---C2_NODES_END---
  }
};

export default CHAPTER;
