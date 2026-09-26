// 钢翼盟约 / STEEL-WING COVENANT — 第七章「归港」章节模块（纯数据，无 DOM 依赖、无 import、无运行时 I/O）
//
// 章节模块契约见 candidate/production/contracts-g1/CHAPTER_MODULE_CONTRACT.md。
// 本章从 c7_01 进，四个章末结果 continuesTo 均为 ch08；章末结果不是全书结局。
// 计划口径：一条主干路径 13,000 中文字；本轮用户口径为 14,000–15,000，实际值见 contentActual。

export const CHAPTER = {
  number: 7,
  id: 'ch07',
  nodeIdPrefix: 'c7_',
  title: '第七章 · 归港',
  badge: '第七章',
  status: 'complete',
  entry: 'c7_01',
  nextChapter: 'ch08',
  contentTarget: {
    mainPathCjk: 14000,
    note: '计划目标。本轮按用户口径写到一条主干路径 14,000–15,000，实测值记在 contentActual 与 ch07-notes.json。'
  },
  contentActual: {
    mainPathCjk: 14539,
    corpusCjk: 19759,
    nodes: 168,
    choices: 6,
    choiceOptions: 19,
    boundedWalks: 64,
    measuredAt: '2026-09-12',
    method: 'drafts/ch07-selfcheck.mjs：按引擎语义（requires / nextIf / variants / 选项顺序 / effects）从 c7_01 遍历；主干路径只统计该路径上真正显示过的文本（节点文本或命中的变体 + 被选项的文案 + 反应），不把互斥分支相加。G23 修复轮改跑 64 条有界走法（4 个前置状态 × 16 个取项模式）：14,436–14,588（中位 14,518）；报告值取 ch6-concord 种子、每个选择取第一个可用项的路径：14,539 / 148 节点 / out_ch7_concord。972 种组合只登记为声明值，不再全枚举。G26 文案修复（c7_53 与四个章末结果里去掉元叙述式的章节指代）之后按引擎口径复算的数字以 FULL_GAME_PLAN.json 与 FULL_GAME_READY.json 的登记为准；本条自检记录按当时的字节原样保留。'
  },
  decisions: [
    'c7_choice_dock',
    'c7_choice_meal',
    'c7_choice_archive',
    'c7_choice_ivna',
    'c7_choice_deal',
    'c7_choice_wreck'
  ],
  outcomeNodeIds: ['out_ch7_concord', 'out_ch7_scarlet', 'out_ch7_spire', 'out_ch7_neutral'],
  scenes: ['hangar', 'messhall', 'quarters', 'commandroom', 'medbay', 'bridge', 'battle', 'orbit'],
  companionMilestones: {
    ivna: [
      '在进港清单第一页看见自己的档案号排在货之前，要求把“到达前已建号”写进记录',
      '在医务舱拿过表格自己填、自己签，并要求谈判时由她在场',
      '在舰桥上把自己的编号从交易里拿回来：不管主角最后怎么选，她不接受别人替她签字'
    ],
    doran: [
      '在坞架底下被旧同事喊住，第一次不用联络员的口吻说话，聊的是吊车和谁家孩子上学',
      '把修理册子留在工具箱第一格，写清哪一段旧管、哪一盒密封圈是从哪儿拿的',
      '出港时用港里现成的工装卸掉坞架的液压夹，把二号泵的旧毛病一起带上路'
    ],
    nova: [
      '把灰塔的追捕写成流程漏洞：借用港务自己的污染处置流程，让坞架按规程放船',
      '把条款原文录进观测摘要，署名她自己的观测编号',
      '把观测编号写在值班板上，让每一个要签字的人先看见'
    ],
    vera: [
      '在医务舱说出「不要替我决定」——主角和基廷的条件都在场',
      '把夜枭接口壳的复查记录自己抄一份交给伊芙娜，不再等人来问',
      '出港时驾驶夜枭，用探测臂的照明通道给坞架测距，全程没有挂点、没有武器'
    ]
  },
  outcomes: {
    out_ch7_concord: {
      chapter: 'ch07',
      title: '章末结果 · 签字',
      route: 'concord',
      routeName: '环带联合',
      summary: '你把名字签在回收条款下面：渡鸦号拿到坞位、备件与配额，XR-03 的编号进了安全处的调取册。伊芙娜还站在舰桥上，纸面上她随时可以被调走。',
      consequences: [
        '工单当天生效：二号泵、货舱门框压条与两套接插件都排进了维修表，费用走安全处的应急科目。',
        '伊芙娜的编号进入可转移资产清单；她照常值勤，但每一次靠港都要做一次状态确认。',
        "条款已经生效。基廷合上文件夹，等着下一次按条款调取舰上记录。"
      ],
      nextHook: '条款附件第二页压着一项没有写日期的处置令，编号栏已经填好了。',
      continuesTo: 'ch08',
      continueHint: '第八章从「船修好了、名字卖出去了一半、调取随时会来」继续。'
    },
    out_ch7_scarlet: {
      chapter: 'ch07',
      title: '章末结果 · 当众退回',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: '你在港务记录口把条款退回去，全港的调阅记录都留下了这一笔。船是自己开出去的，二号泵的备件是外环的矿站先垫上的。',
      consequences: [
        '港区的公开记录里多了一份谁都能调阅的条款文本；安全处当天收回三份副本，第四份已经在外环的货单上。',
        '二号泵的替换件记在赤垣名下，利息以后再说——铎兰把这一笔写进了工具箱第一格的账本。',
        '渡鸦号在联合的舰籍被挂起：它现在是一条有名字、没有籍的船。'
      ],
      nextHook: "外环垫付了两段旧管。下一次他们需要船、人手或物资时，渡鸦号得兑现这份人情。",
      continuesTo: 'ch08',
      continueHint: '第八章从「船挂着外环的人情、没有联合舰籍、条款文本已经在别人手里」继续。'
    },
    out_ch7_spire: {
      chapter: 'ch07',
      title: '章末结果 · 观测中',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: '条款没有签，副本交给了灰塔的观测通道。渡鸦号从“待归档”变成“观测中”，安全处的调取令在流程里停住了。',
      consequences: [
        '灰塔给这条船加了一个观测编号；此后每一段航线都会被记录，包括不愿意被记录的那几段。',
        '调取令没有撤销，只是被压在流程里。基廷合上文件夹的时候说了两个字：迟早。',
        "诺瓦的公开摘要里多了一行条款原文，她用自己的观测编号署名，承担了发布责任。"
      ],
      nextHook: '观测编号给你挡了一次扣押，也把这条船的位置变成了公开信息。',
      continuesTo: 'ch08',
      continueHint: '第八章从「船上多了一个观测编号、调取令停在流程里」继续。'
    },
    out_ch7_neutral: {
      chapter: 'ch07',
      title: '章末结果 · 谁也没给',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: '条款原封退回，没有副本给任何一家。船出了港，修不了的地方就那样，追捕令也没有跟着撤回。',
      consequences: [
        '二号泵还是老样子，回程要靠值班表盯着压力，铎兰把巡检间隔从四小时改成两小时。',
        "伊芙娜的编号仍在原有档案里。安全处的文件继续有效，执行暂缓。",
        '三方都在观望：一条不收任何人条件的船，在霜环航道里比一条有归属的船更麻烦。'
      ],
      nextHook: '你手里那份原件是唯一的凭据，而复印件在谁手上，你并不知道。',
      continuesTo: 'ch08',
      continueHint: '第八章从「船带着旧伤、谁的面子都没给、追捕令还挂着」继续。'
    }
  },
  nodes: {
    c7_01: {
      id: 'c7_01',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '渡鸦号在联合港三号坞架前收住最后三十米。港方的两条拖索先咬住船头，自己的姿控只用来对准坞架的凹槽。\n机库里所有人都听见了那一声闷响：坞架抱住了船体，四条液压夹一排接一排压下来，把船固定成一个不动的东西。',
      next: 'c7_02'
    },
    c7_02: {
      id: 'c7_02',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '港务广播：泊位链接完成。渡鸦号，提交进港清单三项——货物、乘员、待修条目。\n港务广播：四号泊位的工作灯到二十点，超时按加班费计。\n港务广播：外来人员上舰，须由本舰人员全程陪同。',
      next: 'c7_03'
    },
    c7_03: {
      id: 'c7_03',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "清单是纸的，一式三联，第二联要留在港区档案口。第一行是舰籍：环带联合防务军，第三小队，渡鸦号，状态一栏写着“待核”。\n第二行开始登记人员档案：XR-03 · 卡列尔。建号时间在六天前，那时候这条船还在外环的补给线上。",
      next: 'c7_04'
    },
    c7_04: {
      id: 'c7_04',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "铎兰把清单翻过去看背面，又翻回来。\n“要换的三样：二号泵的备件，货舱门框那条压条，夜枭右腿那只空壳里的线束——港里肯做，但得先有工单号。开了工单，他们才会排检修班。”\n他用铜色的那根手指敲了敲第二行：“还有，这个号是港里另建的。我们还在补给线上的时候，它就建好了。”",
      next: 'c7_05'
    },
    c7_05: {
      id: 'c7_05',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“检验员要上船看夜枭的腿部接插件。”薇拉把记录板递过来，上面是她自己抄的一份复查记录，字迹比印刷体还正，“原壳、空载、接插件断电、封条编号，四项都写上了。最后一项他们大概不会问，我还是写了。”\n她把手收回去，站得笔直：“要不要把这一页给他们看，你说了算。”',
      next: 'c7_06'
    },
    c7_06: {
      id: 'c7_06',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '伊芙娜把第一页抽出来，对着坞架的灯看那行档案号。\n“六天前建号，船今天才到。记录员，把这件事写进进港记录：本舰到达时，该档案已经在港。”她等记录员写完，才把纸放回桌面，“我记下来了。”',
      next: 'c7_choice_dock'
    },
    c7_choice_dock: {
      id: 'c7_choice_dock',
      kind: 'choice',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '港务的稽核员站在梯口，笔帽咬在嘴里等你落笔。铎兰抱着胳膊站在货舱门边，诺瓦把终端屏幕转了个方向，让你看得见她刚调出来的泊位排表：安全处的一条交通艇，十一个小时前就靠了港。',
      choices: [
        {
          id: 'c7_dock_full',
          label: '全申报：夜枭的接插件、货舱里的结构件、拆下来的接收机残件，一行不落。',
          next: 'c7_dock_full_x',
          reaction: "稽核员一项一项抄，抄到“接收机残件”的时候抬了下眼睛，停笔核了一遍字符，再把编号抄全。\n回执有两联：一联钉在舱门口的立柱上，一联他带走。清单第二联连着底下的复写纸，从钉子上揭下来的时候纸角还翘着。",
          effects: [
            { type: 'flag', key: 'dock_declared', value: true },
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c7_dock_slot',
          label: '按清单报：只写“待鉴定结构件”这一行，细节留给正式问询。',
          next: 'c7_dock_slot_x',
          reaction: '稽核员照着清单抄，“待鉴定结构件”那一列他画了个圈。凡是被圈上的东西都要排在鉴定队列后面，队列归港务技术科管，不归泊位管。\n工单申请表往下传了一手，二号泵那一行被挪到了第二页。',
          effects: [
            { type: 'flag', key: 'dock_slotted', value: true },
            { type: 'flag', key: 'pump_deferred', value: true },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 }
          ]
        },
        {
          id: 'c7_dock_third',
          label: '请第三方：外环船级社的验船师就在港里，让他把这份清单验一遍。',
          next: 'c7_dock_third_x',
          reaction: '验船师来得比港务慢，量得比港务细。他在夜枭那条腿旁边蹲了十分钟，把空壳上每一个螺孔都拍了照，最后在清单上写了四个字：与报相符。\n外环船级社的章是圆的，盖在纸角；港区的方章盖在旁边。两个章谁都不挨着谁。',
          effects: [
            { type: 'flag', key: 'dock_thirdparty', value: true },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        }
      ]
    },
    c7_dock_full_x: {
      id: 'c7_dock_full_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“残件也报了。”铎兰把回执从立柱上揭下来折好，“行，往后谁要翻这一页，得先去港区档案口排队。就是慢——今天下午的坞位怕是要让给别人。”\n他把回执塞进工具箱第一格，压在一本记零件号的旧册子下面：“放着，丢不了。”',
      next: 'c7_07'
    },
    c7_dock_slot_x: {
      id: 'c7_dock_slot_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“待鉴定结构件，这五个字写得好看。”铎兰把工单申请翻了两遍，“二号泵进不了今天的队列，得等明天早上。泵要是今晚闹脾气，我下去按两下，你在上面守着通讯，我处理完就回来。”\n他把笔别回耳朵后面：“这一行字往后也能护着我们。”",
      next: 'c7_07'
    },
    c7_dock_third_x: {
      id: 'c7_dock_third_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“外环船级社在港区只有一个验船师，得排队。”诺瓦把照片编号抄进自己的数据卡，“他签过的东西，港务改不了；要改，得再上一趟船，再量一遍。”\n她把卡推回颈边：“我顺便让他把货舱门框也扫了一眼。那条压条裂了两处，比铎兰说的多一处。”',
      next: 'c7_07'
    },
    c7_07: {
      id: 'c7_07',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '港区的流程走得比船慢。货检、乘员登记、待修条目核价，三张纸要在四个窗口之间转一圈，最后转到安全处的桌面上换一个工单号。\n值班表贴在机库的立柱上，第一行是“待命”，后面空着三格。伊芙娜把笔递给记录员：“空着的先别填。”',
      next: 'c7_07a'
    },
    c7_07a: {
      id: 'c7_07a',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '乘员登记在港区是另一张纸：上舰的每一个人都要报编号、军籍和“身体状况”一栏。渡鸦号的乘员表上有三个人的军籍章已经过期，最旧的那一枚是十四个月以前盖的。\n港区的文员把表推回来：这一栏空着，表进不了档案。',
      next: 'c7_07b'
    },
    c7_07b: {
      id: 'c7_07b',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“章过期的三个人，名单报给我。”伊芙娜把乘员表拿过去，在空白处写了三个呼号，“他们的章是我这里没来得及送去换的，责任栏写我的名字。”\n她把表推回给文员：“身体那一栏按实填。有人在吃药就写吃药，不用写药名——药名归医务舱的表管。”',
      next: 'c7_08'
    },
    c7_08: {
      id: 'c7_08',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'doran_port_greeting', value: true }
      ],
      text: '坞架底下有人喊铎兰的名字。那人穿着港务的作业服，袖口磨得发白，手里拎着一根液压软管的接头。\n“阿吉斯？你还活着。”\n“活着。”铎兰把手套摘下来，跟他碰了下拳头。他没有提货运单，没有提箱子，也没有提旧航线；两个人聊的是三号库那台老吊车，聊的是谁家孩子今年上了学。\n三分钟后那人回去干活。铎兰站在原地看他的背影，直到他拐进库房的阴影里。',
      next: 'c7_09'
    },
    c7_09: {
      id: 'c7_09',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“安全处的交通艇，十一个小时前靠港，泊位在七号。”诺瓦把终端转过来给你看，泊位表上那一行是空的，船名一栏只写了编号，“艇上下来四个人，两个进了港务办公室，两个上了坞架的梯子。”\n“还有一件事：我们的泊位被换过。原本是二号，昨天下午换到三号。三号没有直通档案口的通道。”',
      next: 'c7_10'
    },
    c7_10: {
      id: 'c7_10',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“全舰设备保持封存，凭工单开封。”伊芙娜的声音不高，机库里每个人都听得见，“货舱门锁着，钥匙在我这里。夜枭那条腿已经封了，谁要开壳，先拿工单来。”\n她把值班表折起来收进口袋：“先去吃饭。四十分钟以后，军官到会议室。”",
      next: 'c7_11'
    },
    c7_11: {
      id: 'c7_11',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '港区的时间是另一种走法：坞架上的灯按班次亮，广播按小时报一次风况，三号泊位外面的吊车把一箱一箱的滤网从货驳上吊下去，落地的声音隔着船壳传进来。\n有人在机库门口喊了一声吃饭。第二条广播还没念完，餐厅那边的门已经被推开了。',
      next: 'c7_12'
    },
    c7_12: {
      id: 'c7_12',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: "餐厅的门一推开就是暖的。加热台的风扇转一圈响一声，桌上摆着三样东西：腌菜、罐头肉、干面，旁边立着两罐糖水梨，标签上的字被水泡花了。\n港区送上来的那箱燃料棒还堆在门边，等吃过饭再抬进库房。",
      next: 'c7_13'
    },
    c7_13: {
      id: 'c7_13',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“定时器坏了，第四档能把面条煮成糊。”铎兰站在加热台后面，袖子卷到肘，铜色的那只手撑着台面，“港区把食堂班车表贴到我们门口。我用一个下午的饭点，换了坞架上那个密封圈。”\n他把一个纸包推过来，里面是两张还热的饼：“外环的价，别嫌难吃。”',
      next: 'c7_14'
    },
    c7_14: {
      id: 'c7_14',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '诺瓦把一叠刚打印出来的泊位表摊在桌上，纸边还是热的。\n“我在数进港的引擎声。”她用笔尖点着表格里的空格，“货驳最钝，拖船最尖，安全处那种交通艇是两段式——先尖一下，再低下去。七号泊位刚才来了第三条。”\n她把笔递过来：“猜它下一班靠哪儿。猜对了我请你喝港区的咖啡，猜错了你替我去还终端机。”',
      next: 'c7_15'
    },
    c7_15: {
      id: 'c7_15',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉坐在长桌最里面，面前摆着两罐糖水梨中的一罐，罐口没开。她吃饭用的是自己带的那只旧勺子，吃得很慢。\n“这两罐没有写名字。”她说，“没有写名字的东西，我不确定该不该拿。”\n她把罐子往桌子中间推了一点。',
      next: 'c7_16'
    },
    c7_16: {
      id: 'c7_16',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '伊芙娜来得晚，端着杯热水站在桌边。她喝了一口，皱了下眉头：“港区的水一股管子的味道。”\n“二号泵的备件在他们清单上叫‘通用循环组件’，货号第三百一十段。”她对铎兰说，“去提货的时候别念我们的编号。”\n她看了眼表，把杯子放下：“我上去一趟，医务舱要给每个人填一张表。”',
      next: 'c7_choice_meal'
    },
    c7_choice_meal: {
      id: 'c7_choice_meal',
      kind: 'choice',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '餐厅里人不多：值班的、刚下班的，还有两个坞架工蹲在门边啃饼。桌上是热的，外面坞架的灯一格一格亮起来，夜班的口令还早。',
      choices: [
        {
          id: 'c7_meal_fix',
          label: '把加热台的定时器拆开看看。第四档的毛病，听起来像触点脏了。',
          next: 'c7_meal_fix_x',
          reaction: '定时器拆下来，触点果然烧了一个小坑。刮干净，剪一条薄垫片垫上，第四档的指针就不抖了。\n加热台重新亮起来的时候，蹲在门边的两个坞架工回头看了一眼，又把头转回去了。',
          effects: [
            { type: 'flag', key: 'meal_fix', value: true },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c7_meal_game',
          label: '拿过笔，在泊位表的空格里填一个数。',
          next: 'c7_meal_game_x',
          reaction: "第三条交通艇在两小时后靠上了七号泊位，泊位表上原定的九号却一直空着。\n诺瓦把结果圈出来，在旁边写了两个字，然后把咖啡券压在纸下面。",
          effects: [
            { type: 'flag', key: 'meal_game', value: true },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        },
        {
          id: 'c7_meal_vera',
          label: '把罐头拉环扣开，先给自己舀一勺，再把勺子递过去。',
          next: 'c7_meal_vera_x',
          reaction: '糖水很甜，梨软得没什么味道。\n薇拉看着你先吃了一口，才伸手把勺子接过去。她吃得比刚才快一点，罐子最后是空的。',
          effects: [
            { type: 'flag', key: 'meal_vera', value: true },
            { type: 'trust', who: 'vera', amount: 1 }
          ]
        }
      ]
    },
    c7_meal_fix_x: {
      id: 'c7_meal_fix_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“触点烧出坑了还能出厂，港区这批货就这样。”铎兰把工具往围裙兜里一收，从锅里捞了两勺面分进两个碗，“你这手比我那台老钳床稳。第四档以后归你管。”\n他没问你要不要，直接把碗推了过来，筷子横在碗沿上。',
      next: 'c7_ms_10'
    },
    c7_meal_game_x: {
      id: 'c7_meal_game_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“表上写九号，实际靠七号。”诺瓦把那张纸折起来又展开，“差出来的那两位，就是我不写进报告的部分。”\n她把咖啡券推过来：“记账，明天请你。”\n过了一会儿她补了一句：“你不问我为什么记这些？”',
      next: 'c7_ms_10'
    },
    c7_meal_vera_x: {
      id: 'c7_meal_vera_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“甜。”薇拉把空罐放回桌上，标签上泡花的字朝上，“上次吃到这个，是在补给栈的餐车上。那一罐是别人发给我的。”\n她把勺子擦干净，用布卷起来收好：“这只是我自己买的。第一件。”\n她说这句话的语气，和报编号的时候一样平。',
      next: 'c7_ms_10'
    },
    c7_ms_10: {
      id: 'c7_ms_10',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '饭点过了，餐厅只剩下一盏台面灯。加热台修好以后只剩下风声，门边那箱燃料棒还压在原地。\n坞架的广播换成夜班口令，念得比白天慢。长桌上的碗一只一只被摞起来，摞得不太整齐。',
      next: 'c7_ms_10b'
    },
    c7_ms_10b: {
      id: 'c7_ms_10b',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '门边那两个坞架工吃完了，把空碗端到加热台前。年纪大一点的那个用袖子擦了擦碗边，问铎兰借一把扳手，说是要去紧坞架护栏上的螺栓。\n“借工具要押东西。”铎兰说。那人从兜里摸出一枚港区的代币放在台面上，代币上打着三号库的印子，边角磨圆了。',
      next: 'c7_ms_10c'
    },
    c7_ms_10c: {
      id: 'c7_ms_10c',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“三号库的印子，这枚我认得。”铎兰把代币收进围裙兜，把扳手从工具袋里抽出来递过去，“上个月你们库的液压车漏了一路油，把我们货驳的垫布全泡了。这件事我还没忘。”\n那人摆了摆手，让他去找上个月的夜班班长，拎着扳手出门了。铎兰看着门关上，把碗收进池子。",
      next: 'c7_ms_10d'
    },
    c7_ms_10d: {
      id: 'c7_ms_10d',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“代币抵不上扳手。”诺瓦把桌上的糖纸拢成一堆，“三号库的代币在他们食堂只值一份汤，还得当天用。你借出去一把扳手，换回来一份过期的汤。”\n她把糖纸扔进回收桶，动作很利落，扔完看了你一眼：“你们这条船做生意的路子，我到现在没看明白。”',
      next: 'c7_ms_10e'
    },
    c7_ms_10e: {
      id: 'c7_ms_10e',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“汤归你喝。”铎兰在门里回了一句，“垫布那件事我记着。记着归记着，这条航线上一半的库房，我们还进得去。”\n他拍了拍围裙上的面粉：“旧账先记着，扳手总得让人家用。你把桶挪开一点，挡着水槽了。”",
      next: 'c7_ms_10f'
    },
    c7_ms_10f: {
      id: 'c7_ms_10f',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '餐厅的窗外就是坞壁，看不到星。两个值班的船员把收音机调到港区的公用频道，频道里放一段很老的曲子，播到一半被风况播报打断，播报念完，曲子又接回去。\n诺瓦把音量调小了一格：坞架的广播还要听，漏掉一句就要多跑一趟。',
      next: 'c7_ms_10g'
    },
    c7_ms_10g: {
      id: 'c7_ms_10g',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉听了一会儿那段曲子，问了一句很具体的话：“这一段每周都放吗？”\n“周日下午三点，三号库的点播台。谁先打电话谁点。”铎兰把最后一只碗扣进架子。\n“那它下周还会放。”薇拉点点头，把这件事也收进了她自己那个本子里——本子上写的都是这种用不上的东西。',
      next: 'c7_ms_11'
    },
    c7_ms_11: {
      id: 'c7_ms_11',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“锅归你洗。”铎兰把锅盖一扣，冲桌子对面抬了下下巴，“谁最后动那碟腌菜，谁洗。”\n他把围裙从钩子上摘下来，想了想又挂回去：“洗完了把水槽擦干。港区的海水汽重，铁件一夜就起斑。”',
      next: 'c7_ms_12'
    },
    c7_ms_12: {
      id: 'c7_ms_12',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“我最后动腌菜，是因为你把它推到我这边来的。”诺瓦把碗摞在一起，还是端了起来，“锅我洗。明天终端你自己去还，我不替你排队。”\n她走到水槽前，回头看了一眼那张泊位表：“对了，纸我留着。我觉得以后会用得上。”',
      next: 'c7_ms_13'
    },
    c7_ms_13: {
      id: 'c7_ms_13',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“记纸上好。记纸上，以后翻得出来。”铎兰拎起门边那箱燃料棒，一次搬了两层，“这台加热台我在两条船上修过。前一条船上，它坏的那天正好赶上换船长。”\n他把箱子放下，拍了拍手上的灰：“随口说的，别多想。会议室叫人呢，你先上去。”',
      next: 'c7_ms_14'
    },
    c7_ms_14: {
      id: 'c7_ms_14',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'messhall',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '走廊尽头，作战会议室的门开着。投影的航道图上，三号坞架被标成一个蓝点；蓝点旁边钉着一张纸，工单编号那一栏还是空的。\n空着的还有别的地方：值班板上，今天这一格后面本来该写“离港”，现在只写了“待命”。',
      next: 'c7_17'
    },
    c7_17: {
      id: 'c7_17',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '港区给每人发了一只周转箱，塑料的，盖上盖子能当凳子坐。规定写在箱子侧面：一人一件，超重的按货价收钱，一公斤八块。\n船员舱的走廊本来就只够两个人侧身过，现在两边各摆一列箱子，谁经过都得先把手里的东西举起来。',
      next: 'c7_18'
    },
    c7_18: {
      id: 'c7_18',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '你的储物格里没剩多少东西：一件备用内衬、一只掉了把的杯子，还有那张折成三角的改装单——第一天的字迹已经洇开了一点。\n格底压着一块没拆封的抛光布，是铎兰塞进来的，当时他说的是机库里用得上。抛光布还在，机库那边倒是先要用不上了。',
      next: 'c7_19'
    },
    c7_19: {
      id: 'c7_19',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      onEnter: [
        { type: 'flag', key: 'left_ledger', value: true }
      ],
      text: '“我那只箱子超重。”铎兰把一把铜色扳手从箱子里捞出来，在手心掂了掂，又放回工具箱，“工具不装箱，工具跟着船走。箱子留给零件号那本册子和两件换洗衣裳。”\n他把册子摊开给你看：每一条修理都写着日期、部位、谁签的字，最后一页是他自己画的三号机库走线图。\n“册子我留在船上。”他把册子塞回工具箱第一格，“船真要被人收走，好歹有人翻得着，知道哪条线是谁接的。”',
      next: 'c7_20'
    },
    c7_20: {
      id: 'c7_20',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      onEnter: [
        { type: 'flag', key: 'left_card', value: true }
      ],
      text: '诺瓦的箱子摆在走廊最里侧，箱盖开着，里面是一整盒空白数据卡，一张也没写过。\n她挑出一张，低头写了几个字，插进告示栏下面的卡槽里——那一格是留给下一位住这条走廊的人的。\n“写的是泊位号。”她说，“谁捡到谁用。反正我脑子里记得住。”',
      next: 'c7_21'
    },
    c7_21: {
      id: 'c7_21',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉的箱子里只有三样东西：一套换洗的作训服、她自己那只旧勺子，还有一个装照片的纸袋。\n她把纸袋打开给你看：里面是夜枭右腿空壳的螺孔照片，每一张背面都写着日期和位置编号。“这一份已经抄给中尉了。”她说，“这一份我想放进船上的记录柜。船要是被收走，柜子会被一起拉走。”\n她把纸袋的封口压平：“箱子我可以不领吗？我的东西装得下。”',
      next: 'c7_22'
    },
    c7_22: {
      id: 'c7_22',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'left_record', value: true }
      ],
      text: '记录柜在走廊中段，第三个抽屉，钥匙挂在旁边的钩子上。薇拉把纸袋放进去，在登记条上写了日期、位置编号和“复查件”三个字，签名签的是呼号。\n她把笔挂回钩子上，往后退了半步，看着那个抽屉合严，才转身。',
      next: 'c7_22a'
    },
    c7_22a: {
      id: 'c7_22a',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "你那只箱子还空着一半。备用内衬、掉了把的杯子、那块没拆封的抛光布，三样放进去，箱底还看得见；折成三角的改装单最后也塞了进去，压在衣服底下。\n走廊里有人喊了一声“这一箱写谁的名字”，喊到第二遍，有人索性把箱子抬到灯下找标签。",
      next: 'c7_23'
    },
    c7_23: {
      id: 'c7_23',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'ivna',
      text: '伊芙娜的箱子已经扣好了，她坐在上面。箱子不重，侧面贴着一张标签：编号、品名、重量，三栏填得跟印刷的一样齐。\n“医务舱的表我填完了，剩下你那一张。”她递过来一支笔，“箱子里是两双手套、一本条令、还有一件你们不用知道的东西。船要是被收回，我会被调去岸上的调度台，这是流程，现在不聊。”\n她把手按在箱盖上：“帮我抬到坡道口。楼梯口那道门矮，抬高了会撞。”',
      next: 'c7_24'
    },
    c7_24: {
      id: 'c7_24',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '箱子在走廊里摞到第三层，坞架工的推车堵在最窄的那一段。诺瓦的箱子还空着半箱，铎兰的箱子超重两公斤，港区的人说超重就按货价收，一公斤八块。\n薇拉把自己箱子上层的隔板抽出来，往走廊墙边一放：“我这里有地方。”',
      next: 'c7_24b'
    },
    c7_24b: {
      id: 'c7_24b',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '推车在两排箱子中间卡住了，推车的港区工人只好一件一件往下搬。走廊那头另一辆车堵在压力门口，车上堆着滤网、旧管和几箱密封圈，都是三个小时之内要用的东西。\n箱子上的标签有人写错了格位：一只标着“机务”的箱子被贴进了“观测”那一列，负责贴标签的文员已经下班。',
      next: 'c7_24c'
    },
    c7_24c: {
      id: 'c7_24c',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉把贴错的那张标签揭下来，照箱子上的原编号重新写了一张，贴回正确的那一列。\n“标签贴错不会丢东西，只会晚到。”她说，“我在补给栈见过一次，晚了十一天。等它到的时候，泵已经换掉了。”\n她把笔挂回墙上的钩子，站回自己那只箱子旁边，没有再多说。',
      next: 'c7_24d'
    },
    c7_24d: {
      id: 'c7_24d',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“你这话说得像个老库管。”铎兰把两盒螺栓从推车上接下来，顺手把另一只贴错的箱子也翻正，“贴标签这活儿港区一天要贴几百张，贴错了及时改，省得货跟着标签走错地方。”\n他把你脚边那只箱子扛上肩：“这一只我带走。楼梯口那道门矮，你跟在后面看着点。”",
      next: 'c7_25'
    },
    c7_25: {
      id: 'c7_25',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“让修理长的工具进僚机的箱子，这在机务条例里叫什么来着。”铎兰嘴上翻着条例，手上已经把两盒螺栓放进了薇拉的箱子，放之前还用布把盒子擦了一遍。\n“擦干净是怕蹭花了箱子。”他对薇拉说，“这两盒刚从油槽边拿过来。”",
      next: 'c7_26'
    },
    c7_26: {
      id: 'c7_26',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉接过箱子标签，蹲下来填。第一栏写收件人，她写了自己的呼号；第二栏写舰籍，她的笔停住了。\n“这一栏我不确定该往上面写哪一行。”她把笔递过来，“你写，我照着抄。”\n你写完，她照着把三个字描了一遍，笔画比旁边印的还粗。',
      next: 'c7_27'
    },
    c7_27: {
      id: 'c7_27',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "箱子一只一只抬到坡道口，堆成两排。空出来的格子里留着胶带的印子和几根线头，看起来像这条船刚被人搬过一次家。\n广播响了两下，安全处专线接入：渡鸦号，军官到三号会议室。\n伊芙娜把最后一只箱子靠墙放好，抬手把袖标抚平。",
      next: 'c7_28'
    },
    c7_28: {
      id: 'c7_28',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        { requires: ['out_ch6_concord'], text: '会议室的投影已经开好了。校准站带回来的那批数据还在灰塔的复核队列里，渡鸦号的航线记录里，最后一段写着“协助观测”，落款是联合的编号。' },
        { requires: ['out_ch6_scarlet'], text: '会议室的投影已经开好了。校准站带回来的那批数据分成了两份，一份在联合的复核队列里，一份跟着外环的货单走了；渡鸦号的航线记录里，最后一段没有落款。' },
        { requires: ['out_ch6_spire'], text: '会议室的投影已经开好了。校准站带回来的数据现在挂在灰塔的公开摘要上，任何人都能调阅；渡鸦号的航线记录里，最后一段的编号是观测局的。' },
        { requires: ['out_ch6_neutral'], text: "会议室的投影已经开好了。校准站带回的原始数据仍锁在舰内记录柜里；渡鸦号的航线记录里，最后一段只有日期。" }
      ],
      text: '会议室的投影已经开好了。渡鸦号的航线记录摊在长桌中央，最后一段没写完，后面是空白。',
      next: 'c7_29'
    },
    c7_29: {
      id: 'c7_29',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      onEnter: [
        { type: 'flag', key: 'met_keating', value: true }
      ],
      text: '来人把文件包放在长桌中央，自己在对面坐下，没有摘手套。深蓝色的高领制服，领口的扣子扣到最上面，胸前没有多余的东西。\n“穆尔·基廷，安全处。”他把文件夹转向你们，“你们这条船的工单卡在我这里。不用争，流程就是这样：我这一栏不签，港区的坞位就不会给你们。”\n“我把条件写在纸上。你们先看完，再说话。”',
      next: 'c7_30'
    },
    c7_30: {
      id: 'c7_30',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '“第一条。渡鸦号自本条款生效起恢复联合舰籍与维修序列：坞位、备件、燃料，按第三类优先级供给，欠的配额从我的应急科目里划。”\n“第二条。样本 XR-03 的编号转入安全处调取册。持有单位在收到调取令后四十八小时内完成移交，移交对象由安全处指定，移交期间人不必离舰，编号先走。”',
      next: 'c7_31'
    },
    c7_31: {
      id: 'c7_31',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '“第三条。样本 XR-07 及其写入钥匙的保管权一并移交安全处。实物可以按现址封存，钥匙不得复制、不得转运、不得交给任何第三方。”\n“第四条。条款生效期间，持有单位不得就上述两项样本与第三方订立任何形式的交换；已订立的，视为无效。”',
      next: 'c7_32'
    },
    c7_32: {
      id: 'c7_32',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '“第五条。”他把最下面那一行念得很平，“样本失控转移时，执行回收。此条按既有指令办理，指令号第七号原型处置令，执行条件由我签。”\n他把纸推过桌面的中线，正好停在战术灯的光圈里：“念完了。你们可以问。”',
      next: 'c7_33'
    },
    c7_33: {
      id: 'c7_33',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'clause_read_in_room', value: true },
        { type: 'flag', key: 'kill_order_known_to_crew', value: true }
      ],
      text: '会议室里没有声音。记录器的灯亮着，一圈一圈转。\n铎兰的手按在桌沿上，铜色的指节顶着桌子；诺瓦的笔停在半空，笔尖上悬着一小点墨；薇拉把两只手叠在膝盖上，坐得比刚才直；伊芙娜没有看那份文件，她在看基廷的手——看那只戴黑手套的手有没有去拿笔。',
      next: 'c7_34'
    },
    c7_34: {
      id: 'c7_34',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“第五条引用的那份处置令，编号念一遍，执行条件写在哪一栏。”伊芙娜把会议记录翻到空白页，笔尖压在纸上，“档案里查得到的，纸面上就该写出来。”\n“编号第七号原型处置令。”基廷没有停顿，“执行条件写在附件第二页，栏位现在空着。空着的意思是，由我在需要的时候填。你今天要看的只是这一页：签，还是不签。”',
      next: 'c7_35'
    },
    c7_35: {
      id: 'c7_35',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“这份条款在港区档案口的登记号是多少。”诺瓦把笔尖抬起来，等一个数字。\n“档案号 A-19-0706，登记时间六天前，上午九点四十。”基廷报得比船名还熟，“登记人是我。你们进港之前，这份东西已经在档了——放档案的时候不需要你们签字，用的时候才需要。”',
      next: 'c7_36'
    },
    c7_36: {
      id: 'c7_36',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'keating',
      variants: [
        { requires: ['know_vester_method'], text: '“你们中有人见过灰塔的算法。”基廷把手套的指节按在纸角上，“维斯特要一条干净数据，就得让一条航道彻底失效一次；他那边出样本，我这边出档案。你们从校准站捞回来的那点东西，够他把第四条写成案例，不够让他收手。”' },
        { requires: ['nova_report_public'], text: "“另外，你们船上那份公开摘要已经在港区传了两手。摘要一经观测局发布，就进入了他们的流程，超出我的撤回权限。”他把那一页翻正，“所以我更愿意现在把这一页签掉。”" }
      ],
      text: "“你们大概想知道这笔钱是从哪儿出的。”基廷把手指并拢，“安全处的应急科目里有一项序列补偿：回收一台样本，持有单位可以领一份维修配额，按吨位算，够一条护航母舰进两次干船坞。”\n“换句话说，配额会直接记在渡鸦号的维修账上。XR-03 的编号在册上是资产，落到船体上就是二号泵、压条和两份备件申请单。”",
      next: 'c7_37'
    },
    c7_37: {
      id: 'c7_37',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“二号泵的备件，签字以后什么时候能进坞。”铎兰把手从桌沿上拿开。\n“四小时。走应急科目，不用走常规申购。”基廷说，“不签，你们就排队；排到哪一天，看港区这一季的到货表——表我带来了，你们可以自己看。”',
      next: 'c7_38'
    },
    c7_38: {
      id: 'c7_38',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: "“还有一件不在条款里的事。”基廷的视线转到桌子另一端，“AU-11，你那一份档案的问题，我这一栏能处理。手续不复杂：把原件收回去，重新发一份干净的，服役记录照填。条件只有一个——这次通过正式代理渠道提交。”\n薇拉没有立刻回答。她把两只手放在膝盖上，指节上的白胶布在战术灯下面很显眼。",
      next: 'c7_39'
    },
    c7_39: {
      id: 'c7_39',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '“你们也可以不签。”基廷把文件夹合上，扣子扣好，“不签，我这一栏填的就是另一份：脱管单位。港区回执系统会按那一栏自动办事——水、燃料、备件，全环带的联合港都会拒收你们的申请。”\n“然后，第七号原型处置令从归档转到追回。追回不需要我再签一次。”他站起来，把文件夹夹在腋下，“十五点是港区签字的最后一个窗口。纸我留在这里，你们自己复印。”',
      next: 'c7_40'
    },
    c7_40: {
      id: 'c7_40',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '基廷出门的时候在门口停了一下，让外面的两个人先走。门关上以后，记录器的灯还亮着，投影上的蓝点还在三号坞架上闪。\n那份条款留在桌面上，一共三页，第二页的右下角被折过一道。伊芙娜伸手把折角抚平，又把它折回去——她要记住折角原来在哪一边。',
      next: 'c7_41'
    },
    c7_41: {
      id: 'c7_41',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“二号泵现在能撑，撑不到霜环。”铎兰把港区的到货表翻到第三页，用手指压住一行，“备件在第四栏，写的是‘通用循环组件’。这一栏下面有一张附图，图上的接口跟我们的能对上。”\n“签了，四小时。不签，等下一季。”他把表合上，“我只说泵的事，别的你们定。泵的事我不改口。”',
      next: 'c7_42'
    },
    c7_42: {
      id: 'c7_42',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“我先说数字。”诺瓦把已知的港口列在纸上，一共九行，“全环带有补给能力的联合港十一个，我们这条船的吃水只能进其中七个。七个里，回执系统不查联合舰籍的，两个。”\n“两个都在外环，一个归赤垣管，一个归矿站自己管。从霜环到那两个港的航线，我们手里只剩一段。”她把笔搁下，“港口和航线清单都在这张纸上，选之前先看一遍。”",
      next: 'c7_43'
    },
    c7_43: {
      id: 'c7_43',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“记录员，把刚才那两句话原样记进会议记录：第五条引用第七号原型处置令；执行条件栏位空白，签字人基廷。”伊芙娜把袖标往上推了推，看着在座的每一个人，“其他意见现在补充，一并记进这份会议记录。”\n她看向你：“答复期限是十五点。考虑好了，写在纸上交给我。”",
      next: 'c7_44'
    },
    c7_44: {
      id: 'c7_44',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉把那三页纸收齐，按页码排好，双手压在桌面上。\n“第三条写的是钥匙。”她抬起头，“钥匙在船上，钥匙的保管人是我们自己的。写不写进条款，它都在我们手里。”\n她没有再看第二页，也没有看第三页上关于 AU-11 的那一行。',
      next: 'c7_choice_archive'
    },
    c7_choice_archive: {
      id: 'c7_choice_archive',
      kind: 'choice',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '投影上，三号坞架的蓝点转了一圈。港区档案口的终端就在会议室这一侧，屏幕是暗的，要输登记号才会亮。距离十五点还有两小时五十分钟。',
      choices: [
        {
          id: 'c7_arc_read',
          label: '把原始登记调出来：编号、登记时间、附件页码，一项一项对。',
          next: 'c7_arc_read_x',
          reaction: "终端亮起来，档案页一页一页翻过去。登记号、时间、附件页码都能对上，只有一处对不上：第三条后面的日期栏是空的——这一条留了一个开放期限。",
          effects: [
            { type: 'flag', key: 'archive_visited', value: true },
            { type: 'flag', key: 'archive_crosschecked', value: true },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        },
        {
          id: 'c7_arc_share',
          label: '录一份观测副本：让诺瓦把条款原文发进灰塔的公开摘要。',
          next: 'c7_arc_share_x',
          reaction: '摘要的索引号生成得很快，条款的三页原文排进了公开栏，署名按观测局的规矩写：观察员编号，不写舰名。港区的回执系统在四分钟以后弹出了一条受理提示。',
          effects: [
            { type: 'flag', key: 'archive_shared_spire', value: true },
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 }
          ]
        },
        {
          id: 'c7_arc_none',
          label: '不碰原件，只问一个问题：调取令上，谁能签字。',
          next: 'c7_arc_none_k',
          reaction: '问题递出去，答复比想象中快。会议室的门开了一条缝，外面的人把回话带进来，又把门带上了。',
          effects: [
            { type: 'flag', key: 'archive_unopened', value: true },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        }
      ]
    },
    c7_arc_read_x: {
      id: 'c7_arc_read_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '“第三条的日期栏是空的。”伊芙娜把屏幕转回自己面前又看了一遍，“登记在六天前，生效日期留白——他们给自己留了一手：什么时候填，什么时候算。”\n她让记录员把屏幕上的每一个数字抄进会议记录，抄完才把终端关掉：“现在这份东西在哪一天生效，我们这一边也有记录了。”',
      next: 'c7_arc_note'
    },
    c7_arc_share_x: {
      id: 'c7_arc_share_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“发出去了。”诺瓦把终端的回执拍下来存进卡里，“摘要这一栏谁都能调，包括你那位少校；他现在能做的只剩两种：要么当没看见，要么承认这份条款已经出了他的办公室。”\n她把回执折成两折：“记得清楚一点——署名是我的观测编号。这条船的名字不在上面。”',
      next: 'c7_arc_note'
    },
    c7_arc_none_k: {
      id: 'c7_arc_none_k',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '“调取令要两级：经办人一级，审批人一级。”门外带进来的回话很短，基廷自己补了后面半句，“经办人是我。审批人在总部的序列科，一年盖不了几次章。”\n“所以你现在明白第五条为什么写得那么省字了：真正会被用到的，是我的签名。”',
      next: 'c7_arc_note'
    },
    c7_arc_note: {
      id: 'c7_arc_note',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "记录器把会议记录推到桌上，纸还是热的。伊芙娜签了字，把笔递给诺瓦，诺瓦签完递给铎兰，铎兰在“机务”那一栏写了名字，然后把笔还给记录员。\n军官签署结束后，记录员在薇拉那一栏填上“在场”。",
      next: 'c7_45'
    },
    c7_45: {
      id: 'c7_45',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“散会。”伊芙娜把会议记录折好，“医务舱的表要在十五点前送回港区，我上去一次。”\n她走到门口又停住，没有回头：“谁要是打算替我谈这件事，先想清楚一件事——你们替我谈完，签的是你们的名字，被调走的是我的编号。”\n门合上以后，会议室里只剩下投影的蓝光。',
      next: 'c7_46'
    },
    c7_46: {
      id: 'c7_46',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '医务舱的灯比别处亮。港区送来的表一式两份压在检查床上：普通体检那一栏人人都有，下面还有一栏字加粗——体内植入接口者必须申报，未申报者不提供港区医疗服务。\n伊芙娜先在检查床上坐好了。她把袖子卷到肘部，锁骨下面那道平直的旧痕对着检查灯。',
      next: 'c7_47'
    },
    c7_47: {
      id: 'c7_47',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '“我来填。”她把笔从你手里拿过去，一栏一栏写：位置、编号、最后一次维护日期、维护人。\n“维护人这一栏写‘本人’。”她写完把表转过来给你看，“申报比藏起来便宜：港区的扫描门就在舷梯下面，谁身上有接口它先知道，我后知道。”\n她把两份表分开，一份递回给你：“你那份自己填。第三栏体重，别照着老数写。”',
      next: 'c7_48'
    },
    c7_48: {
      id: 'c7_48',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '薇拉敲门进来，手里夹着一张纸。她把纸放在伊芙娜手边，没有往床上多看一眼。\n“夜枭右腿那只壳子的复查记录，我抄了第二份。”她说，“第一份留在船上记录柜里，这一份给你。要是岸上有人要证明那只壳子是空的、接插件断过电，这一份可以直接交出去。”\n伊芙娜把纸翻过去看背面，确认没有漏页，才收进夹子。',
      next: 'c7_48a'
    },
    c7_48a: {
      id: 'c7_48a',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“三份记录，用途不一样。”伊芙娜把纸角对齐，一份夹进自己的夹子，一份推回给薇拉，“你交上来的这份我放进附件；柜子里那份留给船；你自己那份随身带着——真要有一天当面对质，手上得有一份。”\n她写日期的时候按得很重，纸背透出字痕。',
      next: 'c7_49'
    },
    c7_49: {
      id: 'c7_49',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“条款第二条，编号先走，人不必离舰。”伊芙娜把袖口放下来扣好，“纸面上我照常值勤；实际上从调取令生效那天起，我的日程表就归别人排。”\n“我不打算把这件事说成只有好处或者只有坏处。”她看着你，“我只要求一件事：谈的时候我在场。你替我说的话，签的是你的名字，写进册子的是我的编号。”',
      next: 'c7_50'
    },
    c7_50: {
      id: 'c7_50',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "医务舱的送风口一直在响。墙上的港区时钟走到十三点二十，秒针一格一格往前挪，走廊上的脚步声经过门口，又渐渐远去。检查床上的表格纸边翘着，签字栏还是空的。\n伊芙娜站起来，把两份表叠在一起，站在检查床边，等你落笔。",
      next: 'c7_choice_ivna'
    },
    c7_choice_ivna: {
      id: 'c7_choice_ivna',
      kind: 'choice',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '表格右下角空着一格签字栏。伊芙娜的笔搁在旁边，笔尖朝着你这一侧。港区时钟的分针又走了一格。',
      choices: [
        {
          id: 'c7_ivna_herself',
          label: '把笔递回去：这件事由她自己谈，你只做担保人，站在旁边。',
          next: 'c7_ivna_herself_x',
          reaction: '伊芙娜接过笔，在签字栏下面加了一行小字：谈话时在场人员三名。\n她把笔帽扣上，动作比平时慢了半拍。',
          effects: [
            { type: 'flag', key: 'ivna_speaks', value: true },
            { type: 'trust', who: 'ivna', amount: 2 }
          ]
        },
        {
          id: 'c7_ivna_you',
          label: '不递笔：这件事你去谈，让她留在舱里等结果。',
          next: 'c7_ivna_you_x',
          reaction: '两份表被你收进夹子。伊芙娜看着你收，没有伸手去拦。\n她把袖标往上推了推，像是有话要说，最后只报了一个时间：十四点四十分，会议室。',
          effects: [
            { type: 'flag', key: 'player_speaks', value: true },
            { type: 'trust', who: 'ivna', amount: -1 },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c7_ivna_record',
          label: '答应由她谈，但加一个条件：全程有记录，谈成的条件写成正式附件。',
          next: 'c7_ivna_record_x',
          reaction: '记录员的名字报给了港区，附件格式从档案口要了一份。\n伊芙娜把自己的名字填进签字栏，把“附件”两个字写在页脚。',
          effects: [
            { type: 'flag', key: 'ivna_speaks', value: true },
            { type: 'flag', key: 'ivna_record', value: true },
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'trust', who: 'nova', amount: 1 }
          ]
        }
      ]
    },
    c7_ivna_herself_x: {
      id: 'c7_ivna_herself_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“好。”伊芙娜把表收进夹子，动作没有停，“我会说三件事：编号不动、值勤不动、调取要写日期和理由。谈崩了也不关你的事。”\n她走到门口，把夹子在胸前压了一下：“进门以后站我旁边，我来先说。”",
      next: 'c7_med_note'
    },
    c7_ivna_you_x: {
      id: 'c7_ivna_you_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“你答了。”伊芙娜的声音没有变，“那我就按你答的走。会议记录上要写清楚：这次答复由你作出，我的意见单列。哪天有人拿着调取令来找我，我要能当场指出那一页。”\n她把门推开，站在走廊里等你先走。",
      next: 'c7_med_note'
    },
    c7_ivna_record_x: {
      id: 'c7_ivna_record_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '“记录在，条件就在。”伊芙娜把附件格式夹进会议记录，“他们最不喜欢带附件的条款：附件要写日期，要写理由，写错一次就得改第二次。”\n她看向诺瓦：“你写，写完念一遍，我签。”',
      next: 'c7_med_note'
    },
    c7_med_note: {
      id: 'c7_med_note',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      onEnter: [
        { type: 'flag', key: 'vera_refused_trade_once', value: true }
      ],
      text: '薇拉一直站在门边，手搭在门框上。等伊芙娜把夹子扣好，她才开口。\n“基廷说的那份干净档案，是给我的。”她看着你，没有看伊芙娜，“你们谈条件的时候，那一条不能替我答。档案上写什么名字，我自己签；写坏了也算我的。”\n她停了一下，把话说完：“不要替我决定。”',
      next: 'c7_med_after'
    },
    c7_med_after: {
      id: 'c7_med_after',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: '“记下了。”伊芙娜把夹子夹紧，“她自己签自己那一栏。”\n她转头对薇拉说：“接口壳的第三份记录，明天早上交给我，我一起放进附件。你不必等谁来问才交。”\n港区的时钟走到十三点四十。走廊那头有人在喊军官到舰桥。',
      next: 'c7_51'
    },
    c7_51: {
      id: 'c7_51',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舰桥的主屏上，三号坞架被画成一个剖面：锁扣闭着，燃料管线上标着“待批”，备件的申请栏空着。中央战术台上压着会议记录、港区的到货表和一张手写的值班表。\n伊芙娜站在战术台一侧，铎兰的袖口还卷着，诺瓦把观测终端架在扶手边，薇拉在主屏前站定。港区时钟：十三点四十五。',
      next: 'c7_52'
    },
    c7_52: {
      id: 'c7_52',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“按职责站位报告。”伊芙娜把袖标压平，“动力：主泵在线，二号泵限制在四成，不并网。”\n“坞架闭锁，手动释放通道在坞架下沿，二十分钟一趟班车；燃料管线远程可控，阀门在港务值班室；四号泊位两条拖船十七点交接班，第三条停在坞架外侧。”\n她看向主屏：“离港准备按第二套程序，机库加压，两台机二级战备。命令就位就行，不用等人。”',
      next: 'c7_53'
    },
    c7_53: {
      id: 'c7_53',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      onEnter: [
        { type: 'flag', key: 'order_read_to_crew_verbatim', value: true }
      ],
      text: '薇拉把一份夹子放到战术台上，翻开第一页，念得很慢。\n“第七号原型处置令，附件第一件：桥接复位权限，执行条件——样本失控转移。”她念完合上夹子，“这一段我在作战会议室里念过一次，那次在座的人少。今天再念一次，是因为今天人多。”\n她把夹子推到桌子中间，让谁都能翻。',
      next: 'c7_54'
    },
    c7_54: {
      id: 'c7_54',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“我说泵。”铎兰把到货表摊开，压住第四栏，“二号泵按四成跑，一小时查一次轴承温度，能跑二百小时左右；超过二百小时，密封环会先响，响了就得停机。三号库有几段旧管，口径对得上，我拿两段回来自己配，密封圈用我们箱子里那两盒。”\n“这些不签条款也能做。”他把表合上，“签了，就是省事；不签，就是我自己趴下去干。两种我都能干，你们挑。”',
      next: 'c7_55'
    },
    c7_55: {
      id: 'c7_55',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“我说代价。”诺瓦把已经发出去的观测摘要调出来，“摘要发了以后，我的名字在灰塔那边就已经不算船上的了。要是这条船回头挂回联合舰籍，观测局会把我从观察员名册上划掉——我不打算装成这件事跟我无关。”\n“但数字还是那几个：不签，七座能补给的港里我们只剩两座，航线只剩一段。签，我们能补满，然后用别人的日程表过日子。”',
      next: 'c7_56'
    },
    c7_56: {
      id: 'c7_56',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“我说我自己那一条。”伊芙娜把双手平放在战术台上，“编号是我的。船是你的。两件事要分别确认——你把船押上去，我要在场；你把我押上去，我要签字。”\n“如果只能换一个，我建议你换船。换下去，我照常值勤；换出去，我照常值勤，只是得看着别人的日期表。”",
      next: 'c7_57'
    },
    c7_57: {
      id: 'c7_57',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "“夜枭的燃料和冷却是满的，接口壳是空的，探测臂能用。”薇拉报的还是她那一串固定项目，报完才加上一句别的，“如果答复是拒绝，港区第二班在十八点换班；换班前后二十分钟，坞架的班车是空的。”\n她看着主屏上的坞架剖面：“换班时刻我核过了，供你们安排。”",
      next: 'c7_57a'
    },
    c7_57a: {
      id: 'c7_57a',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“两条出路。”诺瓦把港区外围图放大，“一号是主航道：直、宽，沿途三个检查站；二号是外侧的废料通道：窄，尽头有一段弯，平时只走垃圾驳。”\n“主航道快，检查站会拦；废料通道慢，弯道对我们这条四百二十米的船不客气。”',
      next: 'c7_57b'
    },
    c7_57b: {
      id: 'c7_57b',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“走主航道。”伊芙娜在图上看了一眼就定了，“按港务的污染规程，让拖船带我们出去。走废料通道，等于自己承认在躲。”\n她把弯道那一段从图上划掉：“真被拦下来，我拿规程原文跟他们谈。他们有回执系统，我们有规程编号。”",
      next: 'c7_58'
    },
    c7_58: {
      id: 'c7_58',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '港区回执系统在战术台的角落一格一格闪：待答复，截止十五点。三页条款摊在桌面上，第二页的折角还在原来的位置。\n主屏的一角，七号泊位的交通艇亮着系泊灯，一动不动。距离十五点还有一小时十分钟。',
      next: 'c7_choice_deal'
    },
    c7_choice_deal: {
      id: 'c7_choice_deal',
      kind: 'choice',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '战术台的输入栏亮着，光标一格一格跳。港区的频道里，值班员按规程报了一遍时间；四个人的目光都在你这一侧。',
      choices: [
        {
          id: 'c7_deal_sign',
          label: '签：三页纸上都落名字，工单从这一刻生效。',
          next: 'c7_deal_sign_x',
          reaction: '你在三页纸上分别签了名，记录员盖了船上的小圆章。\n港区回执系统在两分钟后变成绿色：坞位已排、备件申请已受理、二号泵排在十九点。十七点以后，三号坞架的锁扣图标会跟着变成打开。',
          effects: [
            { type: 'flag', key: 'deal_accepted', value: true },
            { type: 'flag', key: 'ivna_holds_lever', value: false },
            { type: 'standing', who: 'concord', amount: 2 },
            { type: 'trust', who: 'ivna', amount: -1 },
            { type: 'trust', who: 'vera', amount: -1 }
          ]
        },
        {
          id: 'c7_deal_public',
          label: '拒签，并且退件退在明面上：走港务记录口，要一张退件回执。',
          next: 'c7_deal_public_x',
          reaction: '三页纸被逐页扫描、盖章、退回，港务记录口给出一个退件编号。明码频道没有加密，十一个泊位都能听见这一次退件。\n战术台上，港区回执系统的颜色从灰色变成一种没见过的橙色。',
          effects: [
            { type: 'flag', key: 'deal_refused_public', value: true },
            { type: 'flag', key: 'ivna_holds_lever', value: true },
            { type: 'standing', who: 'concord', amount: -2 },
            { type: 'standing', who: 'scarlet', amount: 2 },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c7_deal_spire',
          label: '拒签，但留一份给观测局：让灰塔先给这条船加一个观测编号。',
          next: 'c7_deal_spire_x',
          reaction: '已经发出去的摘要副本此时生效。灰塔的回执在两分钟内到达，观测编号挂在船的登记号下面；港区回执系统随即把这条船的状态改成“观测中”。\n安全处的扣押流程停在第一步：它需要船籍栏有一个可以扣押的主体，而那一栏现在写着观测局。',
          effects: [
            { type: 'flag', key: 'deal_refused_spire', value: true },
            { type: 'flag', key: 'ivna_holds_lever', value: true },
            { type: 'standing', who: 'spire', amount: 2 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        },
        {
          id: 'c7_deal_alone',
          label: '不签，也不给任何一家：原件退回，船上只留一份拍照件。',
          next: 'c7_deal_alone_x',
          reaction: "三页纸扫描存档，原件按退件流程退回；港务回执系统给出第三种状态：未答复。值班员在频道里把这个状态念了两遍，像是没念过这个词。\n战术台上那个橙色的小方块一直在闪，值班员把它转入待处理栏。",
          effects: [
            { type: 'flag', key: 'deal_refused_alone', value: true },
            { type: 'flag', key: 'ivna_holds_lever', value: true },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'doran', amount: -1 }
          ]
        }
      ]
    },
    c7_deal_sign_x: {
      id: 'c7_deal_sign_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '专线的声音很清楚，连翻纸的声音都能听见。\n“签得很好。工单号已经生成，坞位排在三号，备件走应急科目。”基廷停了一下，“接下来不需要你做什么。调取令什么时候来、写什么内容，由我通知你。你只需要看日期。”\n通话断开前，那头的纸又翻过一页。',
      next: 'c7_59'
    },
    c7_deal_public_x: {
      id: 'c7_deal_public_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“退件编号抄在记录板上了。”铎兰把港务的回执又描了一遍，贴到舰桥的记录板上，“往后谁想改口，得先找着这张纸。”\n他把袖子重新卷起来：“泵的事我自己来。三号库那两段旧管我去量，量完就下去干——坞位已经取消，只能自己修。”",
      next: 'c7_59'
    },
    c7_deal_spire_x: {
      id: 'c7_deal_spire_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“观测编号挂上了，跟在我们登记号下面。”诺瓦把回执放大到主屏上让所有人看，“意思变成：这条船归观测局看着。谁要动它，先跟观测局解释。”\n她关掉终端，又补了一句：“我知道这等于把我们的位置写进公开栏。我算过，比被人追着跑划算。”',
      next: 'c7_59'
    },
    c7_deal_alone_x: {
      id: 'c7_deal_alone_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“原件退回，拍照件留船，编号不进任何人的册子。”伊芙娜把回执夹进会议记录，“从现在起，谁都没有我的签字——包括你。”\n她看了你两秒，把话说完整：“下一次有人要我签，我自己答。”',
      next: 'c7_59'
    },
    c7_59: {
      id: 'c7_59',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '港区回执系统的颜色一变，坞架上的灯也跟着变。十九点那一班的班长在频道里问了一句要不要开工，港务值班员回了一句什么，两边都没再说第二句。\n主屏上，三号坞架的锁扣图标还是闭着的。距离十五点还有四十分钟，战术台上摊着四张纸：会议记录、到货表、值班表、退件或受理的回执。',
      next: 'c7_60'
    },
    c7_60: {
      id: 'c7_60',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“拖船排班表在我这里。”诺瓦把三条船的位置标到主屏上，“四号泊位两条十七点交接班，第三条停在坞架外侧待命；坞架的液压夹归港务中央系统管，手动释放要人到夹子边上，班车二十分钟一趟。”\n“还有：燃料管线的阀门是远程的。他们那边值班员按一下，我们的加注就断；按不按，不看我们脸色。”',
      next: 'c7_61'
    },
    c7_61: {
      id: 'c7_61',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“都记下来。”伊芙娜把值班表上的名字一个一个念过去，“离港准备按第二套程序：主泵走应急线，二号泵不并网；机库加压，两台机二级战备；港区问起来，就说我们在做自检。”\n她看向你：“去机库看钥匙。钥匙的事你定，定完回来告诉我。”',
      next: 'c7_62'
    },
    c7_62: {
      id: 'c7_62',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你从舰桥下来的时候，港区的广播正在报当天的第二次风况。升降梯经过机库上沿，能看见三号坞架把船体抱得很紧，坞壁上的液压夹一排一排亮着指示灯。\n机库的闸门开了一半，里面的维护灯已经切到工作档。',
      next: 'c7_63'
    },
    c7_63: {
      id: 'c7_63',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '铎兰把两段旧管拖到了泵舱口，正拿卡尺量内径；夜枭的右腿外壳开着第二道检查口，接插件断着电，插座上挂着封条。\n钥匙盒锁在机库的钥匙柜里，柜门上贴着登记条：谁开盒、什么时候开、为什么开，三栏空着等人写。',
      next: 'c7_64'
    },
    c7_64: {
      id: 'c7_64',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“管子内径差半毫米，磨一磨就能用。”铎兰把手套摘下来夹在腋下，“钥匙的事我说清楚：盒子是我们自己封的，封条上的呼号也是我们自己写的。你要交出去，我去拆封条；你要留下，我把它挪到泵舱的暗格；你要拆，切割台就在那边。”\n他把卡尺别回腰上：“三种我都能干。差别是第三条干了以后，桥就写不进航点了——救命的活儿少一半。”',
      next: 'c7_65'
    },
    c7_65: {
      id: 'c7_65',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“写入钥匙里最要紧的是一块授权芯片。”薇拉从工具箱里取出一只托盘，托盘上摆着钥匙壳、接插件和一块指甲盖大的电路板，“桥接数据要靠它才能写进锚点。芯片取掉以后，桥还能读：读航道、读锚点当前的值都可以，写不进去。”\n她把托盘放上工具台，退开半步，把手放在身侧。',
      next: 'c7_66'
    },
    c7_66: {
      id: 'c7_66',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      variants: [
        { requires: ['deal_accepted'], text: '签字的条款摊在工具台上，第三条被折了一个角：写入钥匙的保管权一并移交，不得复制、不得转运。港区的回执系统已经把这一项列进交接清单，栏位空着，等一个签字。\n工具台另一边是钥匙盒和零件托盘，旁边搁着那把切薄板的锯。' }
      ],
      text: '条款没有生效，钥匙按船上的老规矩办：谁封的谁开，登记条写在同一本册子里。\n工具台上摊着三样东西：钥匙盒、零件托盘、还有那把切薄板的锯。机库外，坞壁上的液压夹一排一排亮着指示灯。',
      next: 'c7_choice_wreck'
    },
    c7_choice_wreck: {
      id: 'c7_choice_wreck',
      kind: 'choice',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '登记条摊在钥匙柜门上，三栏都空着。铎兰站在泵舱口，手里还捏着卡尺；薇拉守着那只托盘，两个人都没有伸手。',
      choices: [
        {
          id: 'c7_key_return',
          label: '交还：按清单把钥匙移交出去，封条换成港区的。',
          next: 'c7_key_return_x',
          reaction: '钥匙盒从舱壁上取下来。登记条写了两行：移交人、接收人，呼号都签全。港区的人在上面贴了新封条，回执一联钉回机库的舱壁。\n港区回执系统给这一项打了一个勾，绿色的。',
          effects: [
            { type: 'flag', key: 'key_returned', value: true },
            { type: 'standing', who: 'concord', amount: 1 }
          ]
        },
        {
          id: 'c7_key_keep',
          label: '带走：钥匙留在船上，保管链不动，只把封条重贴一遍。',
          next: 'c7_key_keep_r',
          reaction: '托盘被收走，钥匙盒重新贴上封条，保管人的呼号还写在原来的位置。\n登记条的备注栏里添了一行：按船内保管链继续执行。',
          effects: [
            { type: 'flag', key: 'key_kept', value: true },
            { type: 'trust', who: 'doran', amount: 1 }
          ]
        },
        {
          id: 'c7_key_destroy',
          label: '拆掉授权芯片：切开，谁都别想再用桥去写航点。',
          next: 'c7_key_destroy_x',
          reaction: '芯片被取出来放在切割台上，薄锯下去三刀，电路板断成三块。碎块扫进回收盒，编号写进回收记录。\n钥匙壳与接插件重新封存：能读，写不进去。',
          effects: [
            { type: 'flag', key: 'key_destroyed', value: true },
            { type: 'flag', key: 'bridge_write_disabled', value: true },
            { type: 'standing', who: 'concord', amount: -2 },
            { type: 'standing', who: 'spire', amount: -1 },
            { type: 'trust', who: 'ivna', amount: 1 }
          ]
        }
      ]
    },
    c7_key_return_x: {
      id: 'c7_key_return_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '“收到。”专线那头只剩翻纸的声音，“钥匙不会上船，也不会出海——它进港区封存库，编号登记在安全处的移交册上。”\n基廷报了库房编号，又把尾数念了第二遍：“你们手上那张回执留着。哪天有人问钥匙在哪，上面写着答案。”\n通话断开，机库的舱壁上多了一张钉得很整齐的回执。',
      next: 'c7_key_note'
    },
    c7_key_keep_r: {
      id: 'c7_key_keep_r',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      nextIf: [
        { requires: ['deal_accepted'], next: 'c7_key_breach_x' }
      ],
      text: '钥匙盒回到舱壁上的原位，登记条压回柜门内侧。机库另一头，第一段旧管已经挂上吊钩，铎兰把卡尺别在腰上，开始拆泵室的盖板。',
      next: 'c7_key_note'
    },
    c7_key_breach_x: {
      id: 'c7_key_breach_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      onEnter: [
        { type: 'flag', key: 'key_kept_against_clause', value: true }
      ],
      text: "“钥匙的交接清单还空着。”专线那头有一页纸翻过去，“第三条要求移交原件的保管权。现在只收到副本，这一栏仍记未完成。”\n“未完成的东西我这边按未完成处理。”他报了港区封存库的编号，“清单我留着，什么时候填，等通知。”\n通话断开以前，那页纸又翻了一下。",
      next: 'c7_key_note'
    },
    c7_key_destroy_x: {
      id: 'c7_key_destroy_x',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“供电正常，读取通道正常，写入通道断开。”薇拉把钥匙壳装回托盘，逐项报了一遍，“以后要再写锚点，得重新做一块授权芯片。港区做不了，得回去找原来那种工装。”\n她把托盘推进封存柜锁好，钥匙交给记录员登记，登记条上写明：芯片已销毁，碎块编号随回收记录归档。',
      next: 'c7_key_note'
    },
    c7_key_note: {
      id: 'c7_key_note',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '机库的挂钟走到十六点二十。泵室的盖板拆下来了，旧管切掉一段，新的那一段正用卡箍试装；夜枭腿上的封条换成了新的一张，编号连号。\n坞壁外面，港区的吊车换了一班人，落地的声音隔着船壳传进来。',
      next: 'c7_67'
    },
    c7_67: {
      id: 'c7_67',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'narration',
      text: '等新管的卡箍压到位，铎兰从泵室里爬出来，先找了块抹布擦手，再把他那包饼拿出来分成三份。饼已经凉了，硬得能敲出声音。\n“凉的也能吃。”他把其中一份放在工具台的扳手旁边，“以前在外环跑船，凉的饼是常态。热的才稀罕。”',
      next: 'c7_68'
    },
    c7_68: {
      id: 'c7_68',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“热的不稀罕，稀罕的是你把饼放在扳手旁边。”诺瓦从梯子上探下半个身子，“上一次你把吃的放在图纸上，图纸粘了三天。”\n她把一只小盒子扔下来，里面是两包糖：“港区小卖部买的，我数过找零。谁先到谁先挑。”',
      next: 'c7_69'
    },
    c7_69: {
      id: 'c7_69',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: "薇拉把手里的记录板放在地上，蹲下来挑了一包糖，挑得很慢。\n“这一包的封口是压过的，那一包的封口是平的。”她抬头问诺瓦，“两包是一样的吗？”\n“一样。”\n“那我挑压过的。这个压痕和箱角对得上，看着像是运输时挤的。”",
      next: 'c7_70'
    },
    c7_70: {
      id: 'c7_70',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“这套判断在港区不太成立。”诺瓦把剩下那包拆开，倒了两颗在掌心，“退回来的货他们重新压封口，比新的还平。你要分得出哪个是退回来的，得看箱子上的胶带——运过的箱子胶带边上会起毛。”\n她把两颗糖分给铎兰一颗：“下次我教你。学费是半包。”',
      next: 'c7_70b'
    },
    c7_70b: {
      id: 'c7_70b',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“听一个。”诺瓦把终端凑过来，放了两秒又掐掉，“拖船，还是货驳。”\n她问完就去拿糖，问得像是这件事跟钱没关系。外面坞架上的吊车正好落了一趟，落地的闷响隔着船壳传进来。',
      next: 'c7_70c'
    },
    c7_70c: {
      id: 'c7_70c',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“拖船。”薇拉答得像在报数，答完自己停了一下，“不对。货驳的声音更钝，刚才那两秒里有两次低频，应该带着载重。”\n“声纹判读我学过，合格线是六成。”她把糖纸叠成小方块捏在手里，“刚才那一次，我只有六成。”',
      next: 'c7_70d'
    },
    c7_70d: {
      id: 'c7_70d',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“六成就是能答。”铎兰把泵室的盖板扣回去，顺手把扳手挂到墙上，“我以前听发动机的外壳声认轴承，认了十四年才敢说到八成。你说六成就去挑糖，比我强。”\n他拍了拍手心：“糖纸放这个桶里。明天早上验封条，今晚顺手把机库收一下。”",
      next: 'c7_70e'
    },
    c7_70e: {
      id: 'c7_70e',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '糖纸收进回收桶，机库又安静下来。吊车在外面挪了一趟，落地的声音比刚才那趟轻；泵室里新管的热胀声一阵一阵，间隔比昨天长。\n薇拉把记录板夹在腋下，站在夜枭的支撑架旁边，跟着泵室那点声音数了一会儿。',
      next: 'c7_71'
    },
    c7_71: {
      id: 'c7_71',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“别教了，再教下去我们就得给港区当验货员。”铎兰把糖塞进嘴里，含糊地数落了一句，然后拍了拍泵室的盖板，“新管压住了，声音也顺了。你们要听的话，夜里它响的调子会比昨天低半档。”\n他把工具一件一件归位，挂钩碰在一起，叮当响。',
      next: 'c7_72'
    },
    c7_72: {
      id: 'c7_72',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "十六点五十，港区的广播开始报夜班的岗位编号。机库开始收工具。扳手碰在架子上，泵室的新管也传来轻轻的热胀声。\n薇拉把记录板捡起来拍了拍灰，站在夜枭的支撑架旁边，手里那支笔一直没有收进兜里。",
      next: 'c7_73'
    },
    c7_73: {
      id: 'c7_73',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '十七点整，港区回执系统弹出一行新消息，红色的：渡鸦号，你舰的冷却回路样本检出污染，按港务污染处置规程，须由拖船带至外环待命环，人员不得离舰，坞架液压夹自动释放。\n下一行是一串规程编号，编号后面跟着签发的值班员工号。',
      next: 'c7_74'
    },
    c7_74: {
      id: 'c7_74',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“样本是我们自己的，读数是真的。”诺瓦从梯子上跳下来，手里还捏着那半包糖，“二号泵的回油口有铁屑，港区的取样口就开在它旁边——我把上周的读数填进了污染申报栏，填得规规矩矩。”\n“港务的规程我读过三遍：污染样本一旦申报，坞架必须在四十分钟内把船挪出去，不然责任归港务。这条规程写在他们自己的手册里，第六条。”',
      next: 'c7_75'
    },
    c7_75: {
      id: 'c7_75',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'system',
      text: '港务广播：渡鸦号，按污染处置规程第六条，坞架液压夹四分钟内释放，由拖船带往七号待命环。\n港务广播：人员不得离舰，主机关闭，姿控交由拖船。主机关闭指令已下达。\n港务广播：待命环内禁止作业。',
      next: 'c7_76'
    },
    c7_76: {
      id: 'c7_76',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '“主机不下线，切到热备。”伊芙娜一手按住战术台的边缘，“机库加压，两台机整备完成就出库；二号泵不并网，主泵留四成。拖船要带就让它带，出了坞区再说。”\n“火力准则：不先开火。谁先打第一发，谁就把港务的责任接到自己身上。”她的手指在待命环的边界线上点了一下，“所有人记住这条线：过了这一条，港务的手就伸不出来了。”',
      next: 'c7_77'
    },
    c7_77: {
      id: 'c7_77',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“二号机出库，位置坞架内侧，距船体四十米。”薇拉的频道里有液压泵的声音，“探测臂三通道在线，读数正常；左臂空置；燃料满载；没有任何挂点。”\n她停了半秒，把这句放在后面：“我跟在你右后方，不越线。”',
      next: 'c7_78'
    },
    c7_78: {
      id: 'c7_78',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '机库减压的白雾从侧门两侧冒出来，灰鸢先出，夜枭跟后半拍。两台机贴着船体滑过三个侧面开口，坞壁上的维护灯一盏一盏往后退。\n拖船的两条索已经挂上船头，主机没关，船被两条索拽着往待命环走，速度像是被人捏在手里。',
      next: 'c7_79'
    },
    c7_79: {
      id: 'c7_79',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: "“闸门关上了，机库二次加压完成。”铎兰的声音从机库的送话口里出来，背景里是泵室的风声，“泵室盖板我扣回去了，卡箍压住了，温度上到六十七度，能撑。封存柜我锁了，钥匙在我身上。”\n“下面交给我。舱里两名作业员留在内侧安全区。”",
      next: 'c7_80'
    },
    c7_80: {
      id: 'c7_80',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '待命环是港区外侧的一圈空泊位，几根标杆上挂着灯，环里没有结构，只有空。两条回收艇从环内侧的位置上抬起来，一左一右，艏向对着拖船的方向。\n它们没有开探照灯，只在频道上发了一组呼号。',
      next: 'c7_81'
    },
    c7_81: {
      id: 'c7_81',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'keating',
      variants: [
        { requires: ['deal_accepted'], text: '“渡鸦号，你们签字的条款第三条还在我手里。”频道里的声音很平，“现在配合一下：把钥匙清单收尾，把 XR-03 的调取回执交上来。两件事都办完，回收艇让路。”\n“你们也可以不配合。那我就按未完成处理。”' },
        { requires: ['deal_refused_public'], text: '“渡鸦号，退件回执我收到了，编号我念一遍，念给你们频道上那些听众。”基廷把编号念完，“退件是你们的权利。回收还是我的流程——两条回收艇在你们船头，你们现在的状态是未答复。”' },
        { requires: ['deal_refused_spire'], text: '“渡鸦号，你们把自己挂到观测局名下了。”频道里有一点杂音，“挂上去的意思，我这一边要重新走一遍流程，走流程要时间。回收艇的任务不变：在流程走完以前，别让你们离开待命环。”' },
        { requires: ['deal_refused_alone'], text: '“渡鸦号，未答复这个状态在我这里只能挂四十八小时。”基廷的声音没有起伏，“四十八小时以后按脱管处理，处置令自动转追回。你们现在配合，还能省掉以后的一段路。”' }
      ],
      text: '“渡鸦号，回收艇的任务是拦下你们，或者陪你们走完移交。”频道里的声音很平，“两条艇，四个执行员。你们可以试着冲出去，冲出去以前想一想港区里有几个泊位愿意接一条被追的船。”',
      next: 'c7_82'
    },
    c7_82: {
      id: 'c7_82',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: "“回收艇，渡鸦号。”伊芙娜没有关频道，“我们正在按港务规程执行污染处置：拖船带离，人员不离舰。你们要登船，拿港务的扣押令；核实扣押令之前，请保持安全距离。”\n她关掉外部频道，对操舵位报了一串数字：“主泵六成，航向取待命环外侧切线，出环以后转向第二段。等我的口令。”",
      next: 'c7_83'
    },
    c7_83: {
      id: 'c7_83',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '左边的回收艇先动，斜切到船头前方，抛出一条磁力索；右边的艇贴着船尾走位，索头砸在船壳第三圈装甲上，弹了两下，吸住了。\n拖船看见索，先松了一根线，把自己的索往回收。',
      next: 'c7_84'
    },
    c7_84: {
      id: 'c7_84',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“右后索，第三圈装甲，吸点在推进器上游。”薇拉报完位置，机器已经贴过去，“用左手，不碰探测臂。”\n夜枭的左臂压住索头，抓着索身往外掰；探测臂只做测距，光源打在索头上，把吸点的位置照给所有人看。索头松了半圈，弹开。',
      next: 'c7_85'
    },
    c7_85: {
      id: 'c7_85',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '左边那条索收不住，回收艇换成近身纠缠，艇艏的抓钩往船头三号开口的位置去。灰鸢横插进去，用左肩那一片颜色不一样的替换板顶住抓钩，把撞击面留给自己。\n抓钩在肩板上刮过去，装甲凹进去一块，机器被推得偏了半个身位，随即用背包的三段推进把姿态掰了回来。',
      next: 'c7_86'
    },
    c7_86: {
      id: 'c7_86',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'hangar',
      expression: 'serious',
      tone: 'combat',
      speaker: 'doran',
      text: "“左肩板凹了两指深，卡箍没断，挂钩还在。”铎兰把读数念得很快，“舱里没事，泵室温度七十，撑得住。下一次用机械手推开艇艏，推到索具松开就撤。”\n他补了一句：“回港我给你把肩板敲回来。手工锤，不换件。”",
      next: 'c7_86a'
    },
    c7_86a: {
      id: 'c7_86a',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第二钩从左舷来，挂点在二号开口的上缘。主泵六成，船身开始转向，钩索被拉直，受力全压在装甲环上。\n机库里有两只周转箱滑到墙边，撞出一声响；固定索绷紧，缆绳上的指示块一格一格往后走。',
      next: 'c7_86b'
    },
    c7_86b: {
      id: 'c7_86b',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '“照铎兰说的推。”伊芙娜的句子短得只剩下动词，“灰鸢从内侧顶回收艇的艇艏，别碰它的舷侧推进器；二号机保持测距，不要靠近。十秒。”\n“十秒以后我们出环，环里的规矩就管不到我们了。”',
      next: 'c7_87'
    },
    c7_87: {
      id: 'c7_87',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: '“回收艇，明码。”诺瓦把频道切到港区的公用频段，“请报你们的扣押令编号，落款单位是港务还是安全处。港务的扣押令按规程只在本港环内有效，安全处的令不经过港务的回执系统，不能指挥港务的回收艇。”\n她报得一字一句，报完把规程条目念了一遍，念到“越界无效”的时候，把那四个字又念了一遍。',
      next: 'c7_88'
    },
    c7_88: {
      id: 'c7_88',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'keating',
      variants: [
        { requires: ['deal_refused_public'], text: '“我的令不过港务的系统。”频道里的声音还是平的，“但港务的回收艇不越界，这是他们自己的规矩。渡鸦号，你们把一条规则背得很熟。”\n“规则我也熟。你们出了环，我这边换一种方式办——不在海上办，在纸上办。”' },
        { requires: ['deal_refused_spire'], text: '“观测中。”基廷把这两个字念得很慢，“流程走到这一步，我这边得等总部序列科复文。复文要多久我不知道。”\n“渡鸦号，你们赢了一阵。待命环外我不追——追了要写报告，报告要写理由，理由现在不成立。”' },
        { requires: ['deal_refused_alone'], text: '“未答复，四十八小时。”基廷的声音停了一拍才接上，“你们选的是最费事的一种。行，那我把时间花在文件上。”\n两条回收艇的呼号在频道里报了一次，然后改成保持距离。' },
        { requires: ['deal_accepted'], text: '“清单没填完，你们的签字还在第二页。”基廷那边有一页纸翻过去，“我提醒一句：条款第三条的保管权移交没有期限，你们的签字也没有期限。”\n“回收艇撤回环内。让他们走。”' }
      ],
      text: "“两条艇，别越界。”频道里的声音很平，“外侧属于另一辖区，继续追击需要重新申请。原地待命。”\n两条回收艇的呼号在频道里报了一次，随后改了航向，退到待命环内侧的标杆边。",
      next: 'c7_89'
    },
    c7_89: {
      id: 'c7_89',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '拖船在待命环边上解了索，掉头回港。渡鸦号把主机推到六成，船体沿着环外侧的切线出去，两条回收艇的轮廓很快退到船尾指示灯后面。\n夜枭收到灰鸢右后方，两台机在回舰航线上并住，距离一百二十米，速度一样。扫描上没有新的目标。',
      next: 'c7_90'
    },
    c7_90: {
      id: 'c7_90',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '“按站位报损。”伊芙娜的手离开战术台，把值班板翻到空的一页。',
      next: 'c7_90a'
    },
    c7_90a: {
      id: 'c7_90a',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '报损条目一条一条汇总到值班板上，一行一条，没有称呼，也不署名：动力——主泵六成，二号泵离线，温度回落；结构——左肩板凹损一处，无贯穿；人员——全员在舰，无伤。伊芙娜把最后一条听完，才在值班板上写下离港时间，字写得很小：「回收两台机，机库加压。」',
      next: 'c7_91'
    },
    c7_91: {
      id: 'c7_91',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '二十分钟以后，沧澜的弧线从主屏下缘升起来，港区变成了弧线上一小片发亮的结构。通信频道安静下来，只剩下航道播报的例行数字。\n渡鸦号脱离港区的控制圈，转入静静转动的轨道。',
      next: 'c7_92'
    },
    c7_92: {
      id: 'c7_92',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舰桥的主屏切回航道图，港区被缩成一个点，航道图上是熟悉的空白：霜环方向那一段还没有亮。\n会议记录、到货表、值班表、港区的回执，四份纸叠在战术台上。伊芙娜把最上面那份翻到最后一页，留了一行空着——那是给航行日志的最后一行留的位置。',
      next: 'c7_92a'
    },
    c7_92a: {
      id: 'c7_92a',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“补给按三天备：水、滤网、干粮、密封圈。”铎兰把清单报了一遍，“密封圈少一盒——那一盒在港区没领出来。三号库不欠我们，算我欠了那枚代币。”\n他把扳手从腰上摘下来挂回工具架：“旧管两段、密封圈一盒，这两笔记在册子上。哪天回到联合港，我自己去要。”',
      next: 'c7_93'
    },
    c7_93: {
      id: 'c7_93',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      variants: [
        { requires: ['meal_fix'], text: '“左肩板我明天敲。”铎兰把凹损的那一块画进检修单，“厨房那个定时器今天修好了，走时准；机库的活儿比它好修，敲三下的事。”\n“二号泵按四成跑，两小时查一次。新管的卡箍再过一轮热胀就稳了。”' }
      ],
      text: '“左肩板我明天敲。”铎兰把凹损画进检修单，“二号泵按四成跑，两小时查一次温度；新管卡箍压住了，过一轮热胀就稳。工具箱第一格那本册子还在船上，上面写着：旧管两段、密封圈一盒，从三号库拿的。”\n他把册子合上：“欠三号库的这两笔，往后我自己去补。”',
      next: 'c7_94'
    },
    c7_94: {
      id: 'c7_94',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      variants: [
        { requires: ['meal_game'], text: '“日志的附件我写了三行：离港时间、港区状态、艇的呼号。”诺瓦把终端转过来，“另外那张泊位表我也留着，压在观测记录下面。表上的空格我填了三个，三个都对——这条不算证据，算我自己的记录。”' },
        { requires: ['archive_shared_spire'], text: '“摘要那一栏现在是公开的，条款原文在里面。”诺瓦把索引号念了一遍，“我的名字挂在观测编号下面，不挂船名。要撤也撤得掉，撤掉要写理由——理由我还没想好怎么写。”' }
      ],
      text: '“日志的附件我写好了：离港时间、港区状态、回收艇呼号，三行。观测记录我另外存了一份，不放进船的档案。”诺瓦把终端盖上，“那份是我自己的，署名也是我自己。”',
      next: 'c7_95'
    },
    c7_95: {
      id: 'c7_95',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      variants: [
        { requires: ['key_destroyed'], text: '“写入芯片的回收记录在这里。”薇拉把回执放在战术台上，编号朝上，“碎块三件，编号连号。要重新做一块，得回原来那种工装；在此之前，桥只能读。”\n她把回执推到你面前：“这一条我建议写进航行日志，写清是谁拆的、什么时候拆的。”' },
        { requires: ['meal_vera'], text: "“夜枭的状态我报完了，写在记录板第三页。”薇拉把记录板递过来，翻到第三页，“右腿外壳封条新换，接插件断电；左臂空置；探测臂三通道正常。”\n她想了想，又补了一句：“那罐糖水梨的空罐我收在柜子里了。柜子里正好有位置，洗干净以后可以装些小零件。”" }
      ],
      text: '“夜枭的状态报完了：外壳封条新换，接插件断电，左臂空置，探测臂三通道正常。”薇拉把记录板放在战术台上，没有走，“航行日志最后那一行，你要是写完了，我想先看一遍再交记录员。我学得慢，但我想自己看。”',
      next: 'c7_96'
    },
    c7_96: {
      id: 'c7_96',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      variants: [
        { requires: ['ivna_holds_lever'], text: '“我的编号还在我自己的记录里。”伊芙娜把会议记录合上，“调取令没来，来了我自己答；这条写进日志，署我的编号，不署你的名字。”\n她看了你一眼，把话说得很平：“这是今天唯一一件我要求写进纸里的事。”' },
        { requires: ['deal_accepted'], text: '“编号在调取册上了。”伊芙娜把回执的一角抚平，“值勤照常，状态确认按港区的周期做。日志上写清楚：答复人是你，条款文本三页，附件一份。”\n她把袖子拉正：“我不在日志里写意见。意见我当面说。”' }
      ],
      text: "“日志的最后一行你写。”伊芙娜把笔放在桌上，“写离港时间、港区状态、还在我们手里的东西。按现场事实逐项记录。”\n她把值班表收起来：“写完念一遍，四个人都听着。”",
      next: 'c7_98'
    },
    c7_97: {
      id: 'c7_97',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舷外的景象安静下来。沧澜的弧线占了半个视野，蓝色从边缘的亮处一路压到暗侧；云带薄，岩石大陆的边缘能看清；一颗苍白的小卫星从画面右上角慢慢挪进来。\n远处几枚锚点浮标的冷光排成一列。船体没有新的爆闪，只有三台推进器尾部固定的光。',
      next: 'c7_99'
    },
    c7_98: {
      id: 'c7_98',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vester',
      onEnter: [
        { type: 'flag', key: 'met_vester', value: true }
      ],
      variants: [
        { requires: ['know_vester_method'], text: "“你们从三号坞架出去的那一段，我这边全程有记录。”频道里的声音不急，“记录里有两处很有意思：坞架按港务自己的规程放船；回收艇在边界上停住。两处都受规程约束，回放里很清楚。”\n“航道数据我只缺一段：霜环那一段最近亮得不太一样。观测台的人正在换算它下一次变暗的时刻。”" }
      ],
      text: '“渡鸦号，阿德里安·维斯特。”频道里的声音很干，不带杂音，“你们在港口闹出的这一页已经归档了；归档的东西不进观测样本。”\n“提醒一句：霜环那一段航道，最近几次校准的间隔在缩短。观测台在等它下一次变暗的时刻。”',
      next: 'c7_98b'
    },
    c7_98b: {
      id: 'c7_98b',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '“霜环那一段的校准记录我调出来了。”诺瓦把三组数字并排放在主屏上，“间隔在缩短：上一次十九天，再上一次二十六天。按这条线往下推，下一次大概在三天到五天之间。”\n“还有一件事：今天往霜环方向的航道上多了六条不报船名的信号。三条走联合的航线，两条走外环的旧路，还有一条什么都没走，停在原地。”',
      next: 'c7_98c'
    },
    c7_98c: {
      id: 'c7_98c',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“按三天准备。”伊芙娜在值班板上写了一个日期，写完把日期圈起来，“补给按三天备，二号泵按四成用，夜枭和灰鸢的整备提前一天做完。”\n她看向主屏上那六条信号：“那条停在原地的信号，先不用管。它要动的时候会动。”',
      next: 'c7_97'
    },
    c7_99: {
      id: 'c7_99',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '航行日志的最后一行在这一段安静里写完：离港时间、港区状态、留在船上的东西——钥匙柜里的登记条、走廊告示栏下的那张卡、记录柜第三个抽屉里的复查件，还有工具箱第一格那本册子。\n写完以后，记录员把日志念了一遍，念到“钥匙”两个字时停了一下，等保管人点头，才继续往下念。',
      next: 'c7_100'
    },
    c7_100: {
      id: 'c7_100',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'kill_order_deferred_to_finale', value: true }
      ],
      nextIf: [
        { requires: ['deal_accepted'], next: 'c7_land_concord' },
        { requires: ['deal_refused_public'], next: 'c7_land_scarlet' },
        { requires: ['deal_refused_spire'], next: 'c7_land_spire' },
        { requires: ['deal_refused_alone'], next: 'c7_land_neutral' }
      ],
      text: '航向定下来，渡鸦号把船头转向霜环方向。港区的灯在船尾一点点缩成一小片，最后混进沧澜弧线的光里。',
      next: 'c7_land_neutral'
    },
    c7_land_concord: {
      id: 'c7_land_concord',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      onEnter: [
        { type: 'flag', key: 'keating_resolved', value: true }
      ],
      variants: [
        { requires: ['key_returned'], text: '船出港的时候，港区的交接清单上大部分栏目都打了勾：坞位、备件、钥匙。清单上的每一个勾，往后都能被翻出来对一遍。\n航道图上，从港区到霜环的那一段亮起来，亮得比平时规矩。' },
        { requires: ['key_destroyed'], text: '港区的交接清单上第三栏是空的，旁边附着一张回收记录：写入芯片已销毁，编号三件。清单上空的这一栏，往后会有人来问。\n航道图上，从港区到霜环的那一段亮起来。船带着能读不能写的桥往外走。' }
      ],
      text: '船出港的时候，港区的交接清单上大部分栏目都打了勾：坞位、备件、调取册。每打一个勾，船就少欠港区一笔。\n航道图上，从港区到霜环的那一段亮起来，亮得比平时规矩。',
      next: 'out_ch7_concord'
    },
    c7_land_scarlet: {
      id: 'c7_land_scarlet',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      onEnter: [
        { type: 'flag', key: 'keating_resolved', value: true }
      ],
      variants: [
        { requires: ['dock_thirdparty'], text: "“验船师那份清单复印了一份，跟着外环的货单走了。”铎兰把三号库的收条折起来，“货单以矿站仓库为收货方。货单在两边都能看见，谁想改，得两边一起改。”\n“管子是旧的，撑得住。回程路上我盯温度。”" }
      ],
      text: '“退件回执贴好了，外环那两段旧管我记在册子上，件记在赤垣名下。”铎兰把工具台的灯关掉一半，“我不替他们讲话，也不替他们决定什么。我只知道这条船现在是没籍的，没籍的船在外环反而走得动。”\n“泵我盯着。你盯着上面的航道。”',
      next: 'out_ch7_scarlet'
    },
    c7_land_spire: {
      id: 'c7_land_spire',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      onEnter: [
        { type: 'flag', key: 'keating_resolved', value: true }
      ],
      variants: [
        { requires: ['archive_shared_spire'], text: '“条款原文挂在公开摘要里，观测编号在我们的登记号下面。”诺瓦把终端收进包里，“从今天起我写的东西，先过我自己的编号，再进船的档案。顺序我改了，改回来要写理由。”\n“霜环那一段的校准间隔在缩短，这句话我记下来了，明天开始逐日对。”' }
      ],
      text: '“观测编号挂在我们登记号下面。”诺瓦把回执的编号抄在值班板上，“从今天起，谁要动这条船，先跟观测局解释；反过来也一样——我们动到哪儿，观测局都看得见。”\n“我不喜欢被看。但我更不喜欢被追。”',
      next: 'out_ch7_spire'
    },
    c7_land_neutral: {
      id: 'c7_land_neutral',
      kind: 'dialogue',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      variants: [
        { requires: ['key_destroyed'], text: "“原件退了，钥匙拆了，编号没进任何人的册子。”伊芙娜把值班板上的名字一个一个看过，“船留下了自主权，接下来也得自己凑维修物资。”\n“二号泵按四成，两小时一次。日志先记离港时间，坐标栏暂空。”" },
        { requires: ['key_kept'], text: '“原件退了，钥匙在我们手里，编号没进任何人的册子。”伊芙娜把钥匙柜的封条确认了一遍，“三方都会来问。来问的时候，你不用替他们答：‘没有’这个字就够。”\n“二号泵按四成，两小时一次。”' }
      ],
      text: "“原件退了，编号没进任何人的册子。”伊芙娜把值班板上的名字一个一个看过，“签字栏留给我。接下来有人再问条件，由我本人答复。”\n“二号泵按四成，两小时一次。日志最后一行写离港时间，坐标暂时不必写。”",
      next: 'out_ch7_neutral'
    },
    out_ch7_concord: {
      id: 'out_ch7_concord',
      kind: 'chapterOutcome',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch7_concord',
      continuesTo: 'ch08',
      onEnter: [
        { type: 'flag', key: 'out_ch7_concord', value: true }
      ],
      text: "渡鸦号带着一份已经生效的条款离开联合港：船拿到了坞位、备件与配额，XR-03 的编号进了安全处的调取册，条款第三条的交接清单还留着一个空格。\n伊芙娜照常值勤，只是从下一次靠港起，她要按别人的周期做状态确认；铎兰的检修单上，二号泵那一条写着“按港区单据更换”。\n下次靠港时，这份归档文件会先于你们抵达检查台。前面是霜环航道，值班表按新的周期排。",
    },
    out_ch7_scarlet: {
      id: 'out_ch7_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch7_scarlet',
      continuesTo: 'ch08',
      onEnter: [
        { type: 'flag', key: 'out_ch7_scarlet', value: true }
      ],
      text: '渡鸦号把条款原封退回，退件走的是港务的公开流程：港区档案里有回执，明码频道上有编号，外环那边多了一份可以调阅的副本。\n二号泵的备件是外环先垫的，件记在赤垣名下；铎兰把这两笔都写进了工具箱第一格的册子。渡鸦号在联合的舰籍被挂起，它现在是一条有名字、没有籍的船。\n前面是霜环航道，出了港区的管制范围以后，频道里就只剩自己人。',
    },
    out_ch7_spire: {
      id: 'out_ch7_spire',
      kind: 'chapterOutcome',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch7_spire',
      continuesTo: 'ch08',
      onEnter: [
        { type: 'flag', key: 'out_ch7_spire', value: true }
      ],
      text: '条款没有签，副本进了灰塔的公开摘要。港务回执系统把渡鸦号的状态改成“观测中”，安全处的扣押流程在第一步停住，调取令被压进流程里，没有被撤销。\n观测编号挂在船的登记号下面：这条船从今天起走到哪里都被记录，包括不愿意被记录的那几段。维斯特的频道在离港以后只说了两句话，第二句提到的是一段正在变暗的航道。\n前面是霜环航道，观测编号跟着这条船，一路写进摘要里。',
    },
    out_ch7_neutral: {
      id: 'out_ch7_neutral',
      kind: 'chapterOutcome',
      chapter: 'ch07',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch7_neutral',
      continuesTo: 'ch08',
      onEnter: [
        { type: 'flag', key: 'out_ch7_neutral', value: true }
      ],
      text: "条款原件退回，副本一份也没交出去。渡鸦号出了港，修不了的地方就那样：二号泵按四成跑，两小时查一次温度，左肩板上的凹坑等回港再敲。\n伊芙娜的编号仍留在原有档案中，安全处的文件继续有效，执行暂缓。三方都在观望：一条不收任何人条件的船，在霜环航道里比一条有归属的船更麻烦。\n前面是霜环航道，值班表上仍是熟悉的那些名字。",
    },
  }
};

export default CHAPTER;
