// 钢翼盟约 / STEEL-WING COVENANT — 第四章「校准」章节模块（纯数据，无 DOM 依赖、无 import、无运行时 I/O）
//
// 章节契约见 candidate/production/contracts-g1/CHAPTER_MODULE_CONTRACT.md。
// 入口 c4_01，前缀 c4_，五个选择节点，四个章末结果（continuesTo: 'ch05'）。
// 本轮只写这一章：不读也不改别的草稿、引擎、清单、计划或运行中的章节文件。

export const CHAPTER = {
  number: 4,
  id: 'ch04',
  nodeIdPrefix: 'c4_',
  title: '第四章 · 校准',
  badge: '第四章',
  status: 'complete',
  entry: 'c4_01',
  nextChapter: 'ch05',
  contentTarget: {
    mainPathCjk: 14000,
    note: '本轮口径：一条正常完整主干路径 ≥14,000 中文可读字符，目标区间 14,000–15,000（catalog.mjs 里 ch04 登记的 13,000 是旧目标，真实值以 contentActual 为准，由宿主整合时同步）。'
  },
  contentActual: null,
  decisions: [
    'c4_choice_box',
    'c4_choice_killorder',
    'c4_choice_trade',
    'c4_choice_word',
    'c4_choice_crew'
  ],
  outcomeNodeIds: [
    'out_ch4_concord',
    'out_ch4_scarlet',
    'out_ch4_spire',
    'out_ch4_neutral'
  ],
  scenes: ['orbit', 'reactor', 'hangar', 'quarters', 'commandroom', 'medbay', 'bridge', 'battle'],
  companionMilestones: {
    ivna: [
      '她是击杀令的目标，且是当众从薇拉嘴里听到原文的',
      '她要求薇拉不要替她决定，也要求主角不要把那张报价单签成她的名字',
      '接收机离机的值班记录由她签字，责任链写在明面上'
    ],
    doran: [
      '指令接收机是他亲手拆下来的：手工锉过的卡箍、两颗非标螺栓；外部防护壳原样回装，壳里补了一块现裁的内盖',
      '他第一次为一个零件道歉——为一个他骂过的卡箍，因为那是有人为了护着那条腿磨出来的'
    ],
    nova: [
      '把三边的开价写成一张两列的表，最后自己划掉灰塔那一行',
      '坚持先读队列，也坚持把绕过防拆电路的风险写进自己那一栏'
    ],
    vera: [
      '主动要求把指令接收机从自己机体上拆掉、外部防护壳留在原地，并说清代价（失去空中诊断通道、安全处会少一个回执）',
      '在会议室当众念出击杀令原文，而不是让别人念',
      '说不清自己要什么，但明确说出不要什么，并且把「不要拿她换零件」说给伊芙娜听',
      '复位口令有了确定状态位：vera_word_used 或 vera_word_refused'
    ]
  },
  outcomes: {
    out_ch4_concord: {
      chapter: 'ch04',
      title: '章末结果 · 值班链',
      route: 'concord',
      routeName: '环带联合',
      summary: '桥的钥匙进了渡鸦号的值班链，钥匙由伊芙娜保管，摘要在船上留底；那张击杀令的原文被写进正式记录，署名是四个人的呼号。',
      consequences: [
        '安全处的回收条款第一次出现在一份由舰上联署的记录里——它不再只是一张纸，但也有了一个可以拿来核对的对象。',
        '联合的护航艇没有开火，也没有离开。它只是把渡鸦号的舷号在管制频道里念了一遍，然后跟到了下一个航段。',
        '第五枚浮标活着，霜环航道剩下半条线；矿站的补给单在接收队列里排到了第一位。'
      ],
      nextHook: '轴上的维修配额、半条航道和十四个矿站的存量，会在第五章碰头。',
      continuesTo: 'ch05',
      continueHint: '第五章从「这条船还在联合序列里、纪录干净但有编号、必须替外环矿站跑一趟配给」继续。'
    },
    out_ch4_scarlet: {
      chapter: 'ch04',
      title: '章末结果 · 手抄的航线',
      route: 'scarlet',
      routeName: '赤垣解放阵线',
      summary: '桥的钥匙跟着铎兰的零件船下到地面，矿站自己抄一份，线由他们自己守；击杀令的抄件走老频道送到了外环。',
      consequences: [
        '外环矿站第一次拿到一份带编号的回收条款，他们把它抄在食堂墙上，也抄进了下个月的公告。',
        '渡鸦号在联合的值班记录里留下了一次未回复的定向呼叫，安全处的收件栏空着。',
        '半条航线上多了一段没有编号的路标，是矿站用旧货舱门改的，只亮给认识的人看。'
      ],
      nextHook: '把线交给矿站自己守之后，这条船下一次要往哪儿补给，答案不在图上了。',
      continuesTo: 'ch05',
      continueHint: '第五章从「联合序列还在，但补给与航线都开始依赖外环矿站自己的办法」继续。'
    },
    out_ch4_spire: {
      chapter: 'ch04',
      title: '章末结果 · 公开的摘要',
      route: 'spire',
      routeName: '灰塔观测局',
      summary: '桥的钥匙交给诺瓦，全份进灰塔的封存档案，摘要在三条频道上同时公开；维斯特的实验被迫从一个没有证人的记录变成一份有人核对的记录。',
      consequences: [
        '灰塔的记录里，渡鸦号从一个变量变成了一个有问号的名字；观测艇不再贴近，但每隔一段时间会重新校准一次距离。',
        "那四枚失效浮标的数据进了一条可供各方引用的公共索引，维斯特不能再声称那是无人观测的失败。",
        '渡鸦号自己的记录器里只剩摘要与一条备注：全份不在船上。'
      ],
      nextHook: '公开了一半的锚链数据，会有人来对账，也会有人来销毁另一半。',
      continuesTo: 'ch05',
      continueHint: '第五章从「数据已经公开一半、灰塔开始按自己的方式记录这条船」继续。'
    },
    out_ch4_neutral: {
      chapter: 'ch04',
      title: '章末结果 · 四份',
      route: 'neutral',
      routeName: '渡鸦号自己',
      summary: '桥的钥匙拆成四份，四名同伴各持一份，凑齐才算数；三名外人都没有拿到，船上也没有多一份完整的备份。',
      consequences: [
        '三方同时收到了同一条回绝：数据在船上，摘要在船上，谁要全份就上船来谈。',
        '击杀令的原文封在记录器里，四个人的呼号写在封条上；船上的人知道它在那儿，外面的人只知道它不存在。',
        '半条航道的账，这条船第一次是完全用自己的补给去还的。'
      ],
      nextHook: '钥匙拆开容易，四份凑齐就得有人在同一个时间站在同一个房间里。',
      continuesTo: 'ch05',
      continueHint: '第五章从「三方都被回绝、钥匙分成四份、船只能用自己的补给跑这趟配给」继续。'
    }
  },
  nodes: {
    // ── 第一节拍：轨道（orbit / duty，三边追踪下的静止时刻）────────────────
    c4_01: {
      id: 'c4_01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '渡鸦号在沧澜的晨昏线外侧绕了第九圈。\n舰桥主屏上的轨道线很干净，干净得有点不对劲：左前方四十公里，联合的护航艇保持着固定间距，既不切入射界，也不让出航路；右下方十一公里，灰塔的观测无人艇停在一个不动的点上，像谁在图板上钉了一枚钉子；更远一点，赤垣的地面电台隔一阵发一次短促呼叫，用的是三年前就该作废的旧代号。\n三个方向没有一个是来开火的。也没有一个打算先走。\n船上把主循环压到了最低，走道里只剩下泵机与空气循环的声音。',
      next: 'c4_02'
    },
    c4_02: {
      id: 'c4_02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“三方接触，无一方进入射程。”伊芙娜把战术台转到你面前，左手按住台沿，把袖标压在下面，“护航艇四十公里，观测艇十一公里，地面电台不报距离，只报时间。”\n她推过来一张纸：九个小时，霜环航道的锚点浮标暗了四枚。\n“值班表照旧，两人一班。谁都不许先动。”',
      next: 'c4_03'
    },
    c4_03: {
      id: 'c4_03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“四枚浮标，全是自己灭的。”你把那张纸转正，“那我们在这儿等什么？”',
      next: 'c4_04'
    },
    c4_04: {
      id: 'c4_04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“等第五枚。”诺瓦把她的屏幕转过来。三列编号：第一列是三个跟踪者的方位，第二列是失效间隔——一小时四十一分、一小时三十八分、一小时四十四分、一小时四十；第三列空着，只有一行字：完整外壳，解算失效。\n“灰塔的人管这个叫校准。他们向浮标输入错误数据，让解算逐渐偏移。同一条线上喂七遍同一个错误，第八遍它就不亮了。”\n她指尖点在第三列：“按这个速度，第五枚还有六个小时。再过六个小时，沧澜到外环就只剩半条线。”",
      next: 'c4_05'
    },
    c4_05: {
      id: 'c4_05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "交火前的管制通话先接了进来。礼貌的问候过后，频道空了两拍，跟踪器挪动一格，又停下。",
      variants: [
        {
          requires: ['out_ch3_concord'],
          text: '先开口的是联合的护航艇。它报了一遍自己的舷号，然后送来一份航道通告：建议渡鸦号在四十八小时内进入沧澜港区接受补给与检修，通告末尾盖着安全处的收件章，编号排在签收栏里，空着等你填。'
        },
        {
          requires: ['out_ch3_scarlet'],
          text: '地面电台先换了个人。他报了一串矿站的存量数字，念得又干又快，最后交代了一句：半条线也是线，别让它断在他们头顶上。\n他念完就关了机，管制频道里只剩下那两个跟踪器的载波声。'
        },
        {
          requires: ['out_ch3_spire'],
          text: '观测艇先动了。它挪了一格，把一枚时刻表推进你的接收队列：一行一行的校准窗口，末尾附着一句——渡鸦号可自行选择是否留在窗口内。\n落款是灰塔观测局的编号，没有名字。'
        },
        {
          requires: ['out_ch3_neutral'],
          text: "三边都保持着跟踪距离，航路依然被堵住。\n频道里持续传来低低的载波声，诺瓦伸手调小了音量。"
        }
      ],
      next: 'c4_06'
    },
    c4_06: {
      id: 'c4_06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“右舷三合一探测臂报三组主动扫描，来源与舰桥跟踪表一致。”薇拉站在战术台侧后，两只手都背在身后。\n隔了两秒，她补了第二句：“还有一条不在表上。”\n她把一条时间线推到主屏中央：十一次单向信号，间隔最短十九分钟，最长两小时零六分。\n“接收方是夜枭右腿外侧那只接收机，挂在原来的防护壳里。它不回答，只收。”',
      next: 'c4_07'
    },
    c4_07: {
      id: 'c4_07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“那只接收机是从什么时候开始收的？第一枚浮标灭之前，还是之后？”',
      next: 'c4_08'
    },
    c4_08: {
      id: 'c4_08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“第一枚灭的时候，我以为那是干扰。”她说得很慢，像在核对自己的记录，“十一次，我一次都没有上报。这一条我会补进事故报告，写清楚是我压下来的，不写别人。”',
      next: 'c4_09'
    },
    c4_09: {
      id: 'c4_09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'orbit',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“报告押后。”伊芙娜的声音从舰桥频道切进来，短得像一条口令，“接收机经过加装，交接单上写着无需检查——那张单子现在要重新问一遍。”\n“五分钟以后，反应堆舱。你、铎兰、薇拉下去看那条支路的电怎么断。机器在三号机库，别通电。”",
      next: 'c4_r01'
    },

    // ── 第二节拍：反应堆舱（reactor / duty，她第一次要求处置自己身上的东西）──
    c4_r01: {
      id: 'c4_r01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '反应堆舱的噪声是从脚底爬上来的。主回路在栅栏后面走一圈冷蓝，检修走道只有一人宽，扶手上一层薄油，摸上去黏手。\n甲板中段那截加厚的线缆干管是全船唯一能把无线电关死的地方，盖子敞着，里面已经铺好了两层屏蔽套。\n夜枭不在这一层：它的右腿还架在三号机库的固定架上，中间隔着两层甲板。他们要在这头把电断干净，再去那头上手。\n薇拉站在干管三步远，手背在身后，没有坐到工具箱上去。',
      next: 'c4_r02'
    },
    c4_r02: {
      id: 'c4_r02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“我要求把右腿外侧那只接收机拆下来，外面的防护壳留在原地。”\n她望着干管，指尖点了点接收机所在的位置。\n“它收到十一次信号，我一次都没有权限看内容。这台接收机属于安全处，用来向我发送指令。我带着它上船的时候，交接单上写着无需检查——我当时照单签收了，舰队却连检查权限都没拿到。”",
      next: 'c4_r03'
    },
    c4_r03: {
      id: 'c4_r03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“拆了以后，你腿上那块地方怎么算？夜枭那条腿还能不能照原样查？”',
      next: 'c4_r04'
    },
    c4_r04: {
      id: 'c4_r04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“壳里的线缆口要补一块内盖，夜枭就再没有空中诊断通道。”她答得很快，显然早就量过，“以后要查那条腿，得停机、开壳、拉硬线、有人站在外面接。战备状态下，这等于把那条腿交出去。”\n“第二个后果是对方会知道。接收机一断，安全处的值守就少一个回执。”\n她把手从背后拿出来，在护栏上敲了一下，很轻：“这两条我都算过。还是拆。”',
      next: 'c4_r05'
    },
    c4_r05: {
      id: 'c4_r05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“行，那就说手艺。”铎兰在干管边上蹲下来，用内六角点了点侧面那排法兰螺栓，“这条支路从这截干管分出去，走到三号机库的右腿挂点，中间没有第二个接点。要断得干净，先得在这头把它做成死头。”\n“冷拆要停主循环，卸压加切割四十分钟，加起来整条船得漂够四十分钟。机库那头才动刀，液压管离刀口八厘米，切错一刀那条腿就得整条换。带电拆我不干——接收机里带着防拆电路，谁的手抖一下，它先发一封回执，再把自己烧了。”\n他把内六角插回工具卷：“还有第三条路。让登记人自己走交接流程，按章程把它解锁。”',
      next: 'c4_r06'
    },
    c4_r06: {
      id: 'c4_r06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“第三条路的代价写在流程里。”诺瓦的声音从舱内频道进来，“安全处的交接记录会进薇拉的档案，而且按队列优先级，解锁后会先弹出待执行指令，再显示目录。”\n她停了一拍：“也就是说，先读到的会是她。”\n又停了一拍：“我想先读。”",
      next: 'c4_r07'
    },
    c4_r07: {
      id: 'c4_r07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“先读的权利不在诺瓦手上，也不在我手上。”伊芙娜的话从舱内频道进来，每个字都咬得很整齐，“接收机挂在谁身上，登录人就是谁。薇拉，你自己定。”\n频道静了一下，她又补了一句：“定完通知我。这条值守记录由我签字。”',
      next: 'c4_r08'
    },
    c4_r08: {
      id: 'c4_r08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“哪一条都行。”薇拉说，“别让它再收到信号。”\n她把手放回护栏上，指节压得发白——那几根手指上还缠着白胶布，胶布边缘已经起了毛。',
      next: 'c4_choice_box'
    },
    c4_choice_box: {
      id: 'c4_choice_box',
      kind: 'choice',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三条路都摆在那截干管的盖子上。断主循环冷拆，最稳妥，也最慢；带电硬读，几分钟出结果，代价是那封回执；走章程交给她自己解锁，干净、合规，而她会第一个读到里面的东西。\n接收机还挂在夜枭腿上，随着舱里的震动轻轻碰着壳里的底板，一下，又一下。',
      choices: [
        {
          id: 'c4_box_coldcut',
          label: '停主循环冷拆。宁可让三个跟踪者看着这条船漂四十分钟，也不给那只接收机说话的机会。',
          next: 'c4_r09',
          reaction: '配电盘一格一格暗下去，泵机声停了，整条船安静得能听见扶手被手汗粘住的动静。\n主循环一直停到切割结束才重新升起来，跟踪表上，渡鸦号漂了四十分钟。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'c4_box_coldcut', value: true }
          ]
        },
        {
          id: 'c4_box_live',
          label: '带电硬读。让诺瓦先动，把队列读出来，回执的事以后再说。',
          next: 'c4_r09',
          reaction: '旁路夹子咬上接口的第三秒，走道里的灯闪了一下——船上的通信阵列收到了一条七毫秒的回复，发信人不在三个跟踪者里面。\n诺瓦没有抬头，只把那个时间记在屏幕角落，又往下翻了一页。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'c4_box_live', value: true },
            { type: 'flag', key: 'c4_box_receipt_sent', value: true }
          ]
        },
        {
          id: 'c4_box_procedure',
          label: '按章程来。把登录权限交回给薇拉，让她自己解锁。',
          next: 'c4_r09',
          reaction: '薇拉把手按在读取器上，指纹核过，屏幕转成她档案的底色。解锁用了十一秒。\n授权通过的那一刻，还挂在夜枭腿上的接收机响了一声，像有人从里面按了一下开关。腿部总线随后被断掉，队列要看，得等接收机装进屏蔽箱、搬进干管、屏蔽套合上以后。',
          effects: [
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'c4_box_procedure', value: true }
          ]
        }
      ]
    },
    c4_r09: {
      id: 'c4_r09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '决定记在值班板上，三个人从泵机段的检修梯上去，穿过中甲板回到三号机库。\n夜枭的右腿还架在固定架上，右腿外侧那只旧防护壳在维护灯下面泛着一层冷光，壳盖已经打开。里面的接收机离机身只剩一根线缆和两颗螺栓。',
      next: 'c4_h01'
    },
    c4_h01b: {
      id: 'c4_h01b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“黄线里面只留三个人，别多一个。”诺瓦把读取器的封条按在接收机的箱盖上，自己退到线外，把屏幕抱在身前。',
      variants: [
        {
          requires: ['c4_box_live'],
          text: '“它发出去了。时间两点十七分，回执长度七毫秒。”诺瓦把旁路夹子收进口袋，“这个数先记住——以后有人问接收机是什么时候断的，就报这个时间，别报我们进机库的时间。”'
        }
      ],
      next: 'c4_h02'
    },

    // ── 第三节拍：机库（hangar / duty，接收机离机；代价与手艺）──────────────
    c4_h01: {
      id: 'c4_h01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '三号机库封掉了一半，黄色警戒线从卷帘门拉到工具墙。吊挂的挂梯收了上去，液压管车推到墙边，成排维护灯只开了对着三号位的那一排。\n夜枭站在三号位，右腿架在三个固定架上。右腿外侧那只旧防护壳照旧挂在原来的挂点上，壳盖已经打开，里面的接收机露了出来。灰鸢停在隔壁位，左肩那块颜色不一样的替换件正对着走道，牵引挂钩空着。\n场里的空气比走廊冷，能闻到液压油和金属屑的味道。',
      next: 'c4_h01b'
    },
    c4_h02: {
      id: 'c4_h02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“三号位封场。液压卸压，主电断到腿部总线，动手之前把卸压读数报给我。”伊芙娜站在黄线外，手套没戴，手里夹着值班板，“铎兰动手，其他人退到线外。”\n她朝你看了一眼：“夜枭归你管。术前检查由你完成并签字。”",
      next: 'c4_h03'
    },
    c4_h03: {
      id: 'c4_h03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“右腿总线已断，液压零压，三点支撑，第三架有一点点浮。”薇拉自己爬上了检修台，膝盖跪在装甲板上，用手掌按住支架底座，“架底座垫片薄了半毫米，我垫。”\n她把一块薄垫片塞进去，又用缠着胶布的手指把它按平，然后抬头报数：“读数到了。可以切。”',
      next: 'c4_h04'
    },
    c4_h04: {
      id: 'c4_h04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“壳扣上两颗非标螺栓，牙距比标称小半档，上一个人拧的时候留了余量。”铎兰把割枪挂在支架侧面，先用手把那颗螺栓退了一圈，“他怕震松，也怕拧死。这人修过机器。”\n“我切卡箍、开壳扣，不碰线。谁要是在我切的时候按了总线开关，我今晚就把他那份汤倒进循环水箱。”',
      next: 'c4_h05'
    },
    c4_h05: {
      id: 'c4_h05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '割枪走过的声音在机库里被放大成一串闷响。卡箍断口翻出一线橙红，铎兰用铜臂侧面挡了一下飞屑，右手拿钳子把断口掰开。\n壳盖卸下来，接收机离了腿。吊挂勾把它吊起来的时候，整只机箱的重量压了一下钢丝绳——四十一公斤，比看上去沉。\n壳里腾出来的位置上是一块被磨得发亮的底板，板脚有一圈旧油渍，形状跟接收机的底面严丝合缝。',
      onEnter: [{ type: 'flag', key: 'interface_box_removed', value: true }],
      next: 'c4_h06'
    },
    c4_h06: {
      id: 'c4_h06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“壳不换，原样回装，那半截接口留在壳里。”铎兰先把接收机的接线一根根退出来，数到第三十四根，抽掉通电的两根，在针脚上扣了一个封座，“剩下那半截针留着接地面硬线——以后还能用硬线读数。”\n他按原尺寸裁了一块内盖，合进壳里比了比，又取出来打磨边缘。“壳盖等它凉下来再合。以后谁来查这条腿，得先停机、开壳、拉硬线，全程用手工工具。”",
      next: 'c4_h07'
    },
    c4_h07: {
      id: 'c4_h07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“比我想的轻。”薇拉从检修台上跳下来，站在夜枭右腿外侧那只旧防护壳前面看了几秒，把手探进壳里，在底板那圈旧油渍上按了一下，掌心留下一个浅印。\n她把掌心在裤缝上擦掉，然后问了一句：“内盖多久复查一次？”',
      next: 'c4_h07b'
    },
    c4_h07b: {
      id: 'c4_h07b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“三百小时，或者进大气层之前，哪个先到算哪个。”铎兰把内盖扣回壳里，用铜臂的指节在四角各敲了一下，再把壳盖合上、换了一对标准螺栓，“计时从今天开始算，不从她出库那天算。外罩还是原来那只，挂点一个没动。回头我把这一条写在腿上。”',
      next: 'c4_h07c'
    },
    c4_h07c: {
      id: 'c4_h07c',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“记下来了。”薇拉说，“三百小时从今天算，进大气层之前也要查。两条我都记。”',
      next: 'c4_h08'
    },
    c4_h08: {
      id: 'c4_h08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“接收机离机时间零点四十一分，动手人阿吉斯，监督人卡列尔。”伊芙娜在值班板上写完，把笔帽按回去，抬头看你，“接收机的处置决定是你签的。签了就跟着你走，出了事不会落在机库头上。”\n她把值班板合上：“接收机装箱，抬到反应堆舱中段的干管里。中段归铎兰，封条归诺瓦。”',
      next: 'c4_h09'
    },
    c4_h09: {
      id: 'c4_h09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“装箱。别让它在机库里过夜。”你把手套摘下来夹在腋下，“铎兰，抬的时候我抬前角。”',
      next: 'c4_q01'
    },

    // ── 第四节拍：住舱（quarters / off_duty，纯生活：交接班后的那顿加班饭）──
    c4_q01: {
      id: 'c4_q01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '交接班之后，船员住舱的顶灯只留一半，走道尽头那张共用小桌上亮着一盏小灯。两个保温桶蹲在桌边，一个装汤，一个装热水；磁扣水杯在桌上排成一排，杯底都写着呼号。\n舱壁上的洗衣表换了一张新纸，第三行的名字被人用铅笔涂掉，又在旁边重写了一遍，字比别的都小。\n暖气垫歪在长凳下面，插头没插。',
      next: 'c4_q02'
    },
    c4_q02: {
      id: 'c4_q02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“两个小时以内不许提浮标。”诺瓦把一副牌摔在桌上，抽出三张扣着，“谁提了谁洗这周的保温桶。牌少两张，用口粮券顶，红的算十。”\n她把桌上一个杯子推到薇拉面前：“先用这个。杯底写的是 AU-09，上一任的。他在你之前用这个铺。”',
      next: 'c4_q03'
    },
    c4_q03: {
      id: 'c4_q03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“AU-09。”薇拉把杯子翻过来，用指腹把那层旧胶印刮平，“一期结业名单里有他，外环补员名单里也有他。两份名单差了四个月。”\n她把杯子转回正面，摆回原位，杯把朝着桌子中央——那是别人放杯子的方向。',
      next: 'c4_q04'
    },
    c4_q04: {
      id: 'c4_q04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“你连别人的杯子都记。”诺瓦发了三张牌，自己留一张，“那记一下我的：我不喝热水兑的汤。汤就是要咸。”\n她把保温桶的盖子撬开，白汽冒出来，往自己杯里先倒了半杯。',
      next: 'c4_q05'
    },
    c4_q05: {
      id: 'c4_q05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“记下来了。”薇拉说得像在回一条回执，“记在诺瓦·岑这个名字后面。第二行。”',
      next: 'c4_q06'
    },
    c4_q06: {
      id: 'c4_q06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“别真记。”诺瓦把牌翻起来看了一眼，又扣回去，“记下来我就得请你吃饭，请吃饭就得排班，排班就得跟伊芙娜报备——你得为我的周末负责。”\n她把脚从凳子上放下来，往桌子中间推了一张券：“红的算十，你先出。”',
      next: 'c4_q07'
    },
    c4_q07: {
      id: 'c4_q07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "桌角摆着两个没开封的罐头，一个标签是咸鱼汤，一个是糖渍豆。第三罐放在柜子最里面，纸标签上印着一行旧批号。\n小灯下面摊着一块暖气垫，插头垂在凳子腿上；走道另一头的热水器每隔十几秒响一声，像有人在敲铁皮。",
      next: 'c4_q15'
    },
    c4_q15: {
      id: 'c4_q15',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '走道另一头的热水器又响了，这一次是连续三声，像有人拿铁片在机器里面敲。接水口只出来半杯，剩下的全是气泡。\n机器侧面贴着一张维护贴纸，最后一栏的日期是三年前，旁边有人用铅笔加了四个字：不要摇它。',
      next: 'c4_q16'
    },
    c4_q16: {
      id: 'c4_q16',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: "“不要摇它。”你把贴纸上的铅笔字念了一遍，把桶放到接水口下面，一只手扶住机器侧面的把手，“你帮我看着杯子，到八分满就喊一声。”",
      next: 'c4_q17'
    },
    c4_q17: {
      id: 'c4_q17',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉把杯子端到出水口下面，用另一只手压住桶沿。\n你摇到第三下，机器里闷响了一声，出水口开始正常出水，热水在杯壁上留下一圈白汽。\n“除垢周期二百小时，现在超了三百四十。”她看了一眼那张贴纸，“我在名单上写一张条，贴到今天看得到的地方。摇了它会出水，但积垢还在里面。”',
      next: 'c4_q08'
    },
    c4_q08: {
      id: 'c4_q08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“罐子你挑。”你把两个罐头推到薇拉面前，“挑错了不许换，这是规矩。”',
      next: 'c4_q09'
    },
    c4_q09: {
      id: 'c4_q09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉先拿了前面那个，掀开尝了一勺糖渍豆，腮帮子停了一下，把勺子从嘴里拿出来，很认真地把罐头推了回去。\n“太甜。”她说，“这个我不行。”\n然后她自己去柜子最里面把那罐旧批号抱了出来，掀开盖子，闻了一下咸鱼汤的味道，点了点头：“这个可以。”',
      next: 'c4_q10'
    },
    c4_q10: {
      id: 'c4_q10',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“行，有意见了。”诺瓦把糖渍豆拖到自己面前，用勺子敲了敲罐口，“新来的第一周就挑食，我以前还担心你什么都吃。”\n她把两张牌摊开比了比大小，输了半张券，“洗桶的活儿我认了。第三行的名字是谁写的，你也认一下。”',
      next: 'c4_q11'
    },
    c4_q11: {
      id: 'c4_q11',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“我写的。”薇拉把空杯子转了半圈，“三点到四点那格空着，我把名字填了。洗衣房的滚筒锁过一次，我知道怎么开，比排队快。”\n你们点头之后，她拿回自己的牌，重新排了一遍。",
      next: 'c4_q18'
    },
    c4_q18: {
      id: 'c4_q18',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“牌规说清楚。”诺瓦把三张牌摊平，旁边压着两张红口粮券，“红的算十，黑的是本身点数。谁小谁洗这周的保温桶，洗的时候不许用热水——热水是留给汤的。”\n她拿勺子在桌上敲了两下，算作发牌。',
      next: 'c4_q19'
    },
    c4_q19: {
      id: 'c4_q19',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "薇拉把自己那张牌翻起来看了一眼，又扣回去，然后伸手指了指旁边那两张红券：“这两张券算几？刚才说规则时，只讲了牌上的数字。”\n她把券推回诺瓦面前，把自己那张黑七摆到桌子中央。\n诺瓦翻开手里的红三，看了两秒，动作停在半空。",
      next: 'c4_q20'
    },
    c4_q20: {
      id: 'c4_q20',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: "“你记规则倒是一字不漏。”诺瓦把红三扔进牌堆，认输认得很快，“行，桶我洗。下次先把换券这条加上。”\n她拿勺子点了点薇拉的方向：“说好，新规则你来记，我负责找牌。”",
      next: 'c4_q21'
    },
    c4_q21: {
      id: 'c4_q21',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '头顶那块松掉的检修板还在响，风从缝里出来，一下一下吹在长凳靠背上。\n你从桌上拿了一张用过的口粮券，折两折，塞进板缝，响声停了。\n诺瓦抬头看了一眼那张券，没说什么，低头把牌收齐。小灯下面，杯子里的热水慢慢凉下去，杯壁上的白汽退成一圈水痕。',
      next: 'c4_q22'
    },
    c4_q22: {
      id: 'c4_q22',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '小灯照得到的舱壁上有一块留言板，上面钉着十几张便签：有人找袜子，有人借充电线，最上面那张字最大——三号洗衣机的滚筒卡了一次，别硬开门，等值班的人来。\n薇拉站在板子前面看了一会儿，扯下一张空白便签，用铅笔在上面写了三行，写完拿图钉钉在倒数第二排的位置。',
      next: 'c4_q23'
    },
    c4_q23: {
      id: 'c4_q23',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“我写的是：滚筒夹层里有一只灰袜子，卡在靠门那一侧的缝里。”她退开半步，让自己那张便签和别人的对齐，“写清楚了位置，谁去找都不用再拆一次滚筒。”',
      next: 'c4_q24'
    },
    c4_q24: {
      id: 'c4_q24',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: "“别人写一行，你写三行，还带位置。”诺瓦走过去看了一眼那张便签，伸手把图钉按紧，“行，从今天起这板子归你。零零碎碎的报修也都往这儿贴，找起来方便。”",
      next: 'c4_q12'
    },
    c4_q12: {
      id: 'c4_q12',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“这船上谁要是敢笑话你写小字，我就把他的名字也写上去。”诺瓦把牌收进盒子，站起来收桶，“睡觉去。二点整我在反应堆舱等你们，接收机不会自己开口。”',
      next: 'c4_q13'
    },
    c4_q13: {
      id: 'c4_q13',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '薇拉把杯子放进回收格，又转回来把长凳下面的暖气垫拖出来，插头插上，试了一下热度。她没说什么，只是把垫子推到桌子靠墙的那一侧——那是你平时坐的位置。\n她还顺手把桌上两个杯子的杯把转到同一个方向，又把靠里那个往旁边挪了半指，才拿上自己的手套往门口走。',
      next: 'c4_q14'
    },
    c4_q14: {
      id: 'c4_q14',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '走道里的灯又灭掉一排，只剩小灯那一圈。有人从远处舱室出来接水，拖着一只空桶走过去，鞋底在格栅上响了一路。\n桌角那罐糖渍豆还剩一半，盖子没盖严，糖水在灯下亮着一小圈。',
      next: 'c4_x01'
    },

    // ── 第五节拍：反应堆舱（reactor / duty，拆机箱；队列与两处烧伤）──────────
    c4_x01: {
      id: 'c4_x01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '一点五十六分，干管中段已经封好。接收机装进屏蔽箱，卡在两层屏蔽套中间，接缝上贴着诺瓦的封条，表面还是温的，摸上去像刚关掉的暖气片。\n铎兰把检修灯挂在扶手上，光只够照亮机箱和三双鞋。',
      variants: [
        {
          requires: ['c4_box_coldcut'],
          text: '主循环还没重新升起来，舱里安静得不像这条船。跟踪表上，渡鸦号现在是一件慢慢自转的漂流物，跟着它转的还有三个方位的观测点。\n盖子上那卷屏蔽套的胶带边被按出了两个指印，是诺瓦断电前贴上去的。'
        },
        {
          requires: ['c4_box_live'],
          text: '旁路夹子还咬在接口上，夹子上的红漆在检修灯下很显眼。\n四十分钟前那封回执发出去以后，三方都没有改变航向，只是把最近的观测艇往回收了两公里，然后把距离重新核对了一遍。'
        },
        {
          requires: ['c4_box_procedure'],
          text: '读取器上还留着薇拉档案的底色。她解锁那十一秒的访问记录，此刻应该已经躺在安全处的收件队列里，排在很多条记录后面。\n干管盖子上有一小片被蹭掉的灰，形状正好是一只手按下去的样子。'
        }
      ],
      next: 'c4_x02'
    },
    c4_x02: {
      id: 'c4_x02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“电压我给它少三成。”诺瓦蹲在机箱背面，用两支夹子把旁路固定在针脚上，“它自检的时候会以为自己还挂在夜枭腿上，待机模式，一切正常。自检过了，我给它放队列。”\n“中间不要碰机箱，不要踩屏蔽套，不要跟我说话。”\n她把屏幕摆到自己膝盖上，手指悬在键盘上方两厘米的地方。',
      next: 'c4_x03'
    },
    c4_x03: {
      id: 'c4_x03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“少三成它可能直接烧。”铎兰用牙齿把手套咬下来一只，塞进腰后，“它自检不过，就会走防拆流程：放电、擦除、回执，一口气做完。我们三个离它都得有个退路。”\n他退到走道拐角，用铜臂的肘部顶住扶手，把身体压在那个拐角里。',
      next: 'c4_x04'
    },
    c4_x04: {
      id: 'c4_x04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“那就烧。”诺瓦没有抬头，“烧了也是我们自己烧的。总比让它坐在那儿，替别人一条一条记我们的事强。”\n她敲下第一行。机箱里传来一声轻响，像有人在里面按了一下开关。',
      next: 'c4_x05'
    },
    c4_x05: {
      id: 'c4_x05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: '自检走到第四步的时候，机箱右侧的封板弹开半寸，一道蓝白的电弧从针脚跳到干管管壁上，整个走道亮了一下。\n铎兰的右手正搭在管壁上，被甩开两步撞到栅栏，手套冒起一股焦味；薇拉半跪在机箱左侧，右腿小腿贴着管壁，电弧顺着屏蔽套的边缘掠过去，把她飞行服裤脚烤掉一小块布。\n红色应急灯亮了六秒。等泵机的声音重新压下来，屏幕停在第一页：队列目录，十九行。',
      next: 'c4_x06'
    },
    c4_x06: {
      id: 'c4_x06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“反应堆舱，报损。”伊芙娜的声音从舱内频道压着噪声挤进来，“人有没有事，接收机还剩几条队列。”',
      next: 'c4_x07'
    },
    c4_x07: {
      id: 'c4_x07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“手背两块，小臂蹭掉一层。”铎兰把右手抬起来看了一眼，又放下，“机箱开了，封板弹到位，针脚没断——它把队列吐出来了。”\n他用左手把屏蔽套的边角重新压回管壁：“薇拉裤脚糊了一块，比我轻。先别叫舰医，先看队列。”',
      next: 'c4_x08'
    },
    c4_x08: {
      id: 'c4_x08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "“我没事。”薇拉把裤脚上那圈焦边捏了捏，捏碎了，碎屑掉在格栅上，“接收机的封条是双层的，它记了时间，记的是两点零三分。这条要写进值班记录，下次拆开时就能核对这次的记录。”",
      next: 'c4_x09'
    },
    c4_x09: {
      id: 'c4_x09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“记录我补。机箱保持断电，人员在下层等候。”伊芙娜说，“目录读出来以后报给我，内容到会议室详谈。”",
      next: 'c4_x10'
    },
    c4_x10: {
      id: 'c4_x10',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: "“十九行。前十六行是标准回执、位置同步、例行应答。”诺瓦的手指在屏幕上往下滑，滑到第十七行停住，又滑回来，然后把手从键盘上拿开了。\n“这里还有一页指令附件。等级 A，收件人：长机。附件两件。”",
      next: 'c4_x11'
    },
    c4_x11: {
      id: 'c4_x11',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“给我。”薇拉把手伸出来。\n她没有看诺瓦，也没有看你，手就那样停在半空，掌心朝上，上面还缠着两圈起了毛的白胶布。',
      next: 'c4_x12'
    },
    c4_x12: {
      id: 'c4_x12',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "屏幕转到她手里。她站着读完，一只手攥住屏幕边缘，拇指压得发白。\n读完以后她停留了几秒，把屏幕按灭，抬手把耳后那绺长发别回去，别了两次才别住。\n她看了一眼走道，又看了一眼那截还开着的干管。",
      onEnter: [{ type: 'flag', key: 'vera_knows_kill_order', value: true }],
      next: 'c4_x12b'
    },
    c4_x12b: {
      id: 'c4_x12b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“我读完了。”她的声音和平时没有区别，“回会议室。”\n说完她把屏幕夹在腋下，先往走道那头走了一步，又停下来等你和铎兰跟上。',
      next: 'c4_x13'
    },
    c4_x13: {
      id: 'c4_x13',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“先给伊芙娜看一遍，还是直接念？”',
      next: 'c4_x14'
    },
    c4_x14: {
      id: 'c4_x14',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'reactor',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“到会议室再念。”她说，“叫上大家，我要当着他们的面读。”",
      next: 'c4_m01'
    },

    // ── 第六节拍：作战会议室（commandroom / duty，击杀令当众公开）──────────
    c4_m01: {
      id: 'c4_m01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '作战会议室在舰桥下面一层。长桌固定在地板上，投影把航道图打在白墙上，蓝的航路，琥珀色的三方标记。墙角那块被人擦掉又写上的旧编号还在，投影的光扫过去时，能看出一圈浅浅的印子。\n桌上摊着两张值班板和一副耳机，第四个人在机库那边听着。\n薇拉把屏幕立在桌子正中，站着。',
      next: 'c4_m02'
    },
    c4_m02: {
      id: 'c4_m02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“念之前先说清楚。”伊芙娜把值班板翻到空白页，“这一段念完就是正式记录的一部分。你要是不想让它进记录，现在说，我会把它写成一段口头汇报，附件留在封存件里。”\n她把笔放在纸边，笔尖朝着薇拉那一边。',
      next: 'c4_m03'
    },
    c4_m03: {
      id: 'c4_m03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“进记录。”\n薇拉把字号调大，然后念了出来，一句一句，中间没有停。\n“附加条款，第三项。样本 XR-03，代号伊芙娜·卡列尔，随舰期间列为可回收资产。”',
      next: 'c4_m04'
    },
    c4_m04: {
      id: 'c4_m04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“若该样本出现失控转移倾向，或经长机判定不可控，即执行回收。回收优先于护航任务，无需二次授权。执行方式由现场判断。”\n她把屏幕转了半圈，让桌上所有人都能看见那三行编号，然后坐下，两只手放在膝盖上。\n“下面是附件。第一件是权限说明，第二件在我们手上。”',
      next: 'c4_m05'
    },
    c4_m05: {
      id: 'c4_m05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“记下了。”伊芙娜说。她把手从桌沿上收回去，放到膝盖上，指节压出四个白点。\n“判定权交给长机。”她朝你抬了一下下巴，“责任也一起推过来了。这一条我看清楚了。”",
      next: 'c4_m06'
    },
    c4_m06: {
      id: 'c4_m06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“还有你。”她转向薇拉，语速没有变，“这条令是你带上船的。你的意见我会听。涉及我的处置，让我自己作答。”\n她说完把值班板往前推了一寸，推到薇拉伸手够得到的地方。",
      next: 'c4_m07'
    },
    c4_m07: {
      id: 'c4_m07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "“你的那一份由你决定。”薇拉说，“我先宣读涉及自己的条款。”\n她拿起值班板，在空白页上写了三个字，写完把板子推回去，字朝着伊芙娜那边。那一行写的是：已宣读。",
      next: 'c4_m08'
    },
    c4_m08: {
      id: 'c4_m08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“签发栏只填了队列编号。”诺瓦把屏幕上的三个字段圈出来，“安全处的规矩：这一栏写编号，出了事只追到队列，不追到人。”\n“还有一处更值得看。触发条件是‘经长机判定’——条款把执行权放在这条船上。写它的人算过，这条船上会有人替他们按。”",
      next: 'c4_m09'
    },
    c4_m09: {
      id: 'c4_m09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: '“我说句外行的。”铎兰的声音从机库频道进来，背景里有工具落地的动静，“这十几年我给卡列尔那台机换过四次液压管、两次座舱盖。回收这两个字，我平时只用在一根坏掉的连杆上。”\n“这一页你们怎么放，我不插手。但它别进我工具箱第二格——那一格我锁着，是给别人留的。”',
      next: 'c4_m10'
    },
    c4_m10: {
      id: 'c4_m10',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: "“先把它定成一个能查的东西。”你说，“把原文和签发信息一起留档，下次追查才有依据。”",
      next: 'c4_choice_killorder'
    },
    c4_choice_killorder: {
      id: 'c4_choice_killorder',
      kind: 'choice',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "条款原文在屏幕上，四个呼号等着落在它下面。\n一边是把它变成这条船自己的记录——由全舰联署留档；一边是把它封回记录器，等有正式的申诉渠道再说；还有一条路，把它送到制度管不到的地方去。\n投影把白墙照得很亮，三个阵营的标记在墙上并排挂着，没有一个亮起来。",
      choices: [
        {
          id: 'c4_order_log',
          label: '写进渡鸦号的值班记录，四个呼号联署，谁都不许删。',
          next: 'c4_t01',
          reaction: '诺瓦把条款原文拷进值班记录主表，四个呼号挨着签上去，签名顺序按值班表排，不按军衔排。\n终端回执弹回来的时间是一分四十七秒，比平时慢——安全处的收件口大概从来没见这条船主动发过东西。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'flag', key: 'c4_order_log', value: true }
          ]
        },
        {
          id: 'c4_order_seal',
          label: '不进公共记录。原件封进记录器，只留两行摘要。',
          next: 'c4_t01',
          reaction: '原件被封进记录器，摘要只剩两行，写得干巴巴的：某日某时收到一份关于本舰舰员的附加条款，编号如下。\n四个人的呼号写在封条背面，字迹很小。封条是薇拉自己按上去的，按完她把手指在裤缝上擦了擦。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'flag', key: 'c4_order_seal', value: true }
          ]
        },
        {
          id: 'c4_order_send',
          label: '抄一份，走矿站的老频率送到外环去。',
          next: 'c4_t01',
          reaction: '抄件走矿站的老频率发了三次，第三次才有人应答。对面只回了四个字：收到了，谢。\n发信记录里，发信人一栏是空的，时间戳是两点三十一分。\n诺瓦盯着那个空栏看了两秒，把窗口关了。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'standing', who: 'concord', amount: -2 },
            { type: 'flag', key: 'c4_order_send', value: true }
          ]
        }
      ]
    },

    // ── 第七节拍：作战会议室（commandroom / duty，三边各自开价与真正的争吵）──
    c4_t01: {
      id: 'c4_t01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '接收机安静下来以后，船上的三个跟踪者开始一个个说话：先是安全处的窄带专线，然后是一枚从观测艇转过来的干净信号，最后是赤垣那个三年前就该作废的旧频率。\n三次呼叫间隔不到二十分钟，值班记录上写成一行：三方同时接触。',
      next: 'c4_t02'
    },
    c4_t02: {
      id: 'c4_t02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: "“渡鸦号，这里是联合安全处，基廷。”专线是窄带的，声音里压掉了高频，“两点零三分，你们那只接收机断了回执。我在收件队列里看到这条记录，先核对了你们的舰位，然后才决定打这通电话。”\n他停了半拍：“把话说在前头：那条附加条款是我签发的。我按流程签发，也会按流程解释每一条。”",
      variants: [
        {
          requires: ['keating_onboard'],
          text: "门先开了。基廷自己走进来，手里夹着那只没有花纹的灰色文件夹，制服领口扣到最上面一颗。\n“两点零三分，你们那只接收机断了回执。”他把文件夹平放在桌上，没有坐下，“我在舰上，所以这次不用专线。把话说在前头：那条附加条款是我签发的。我按流程签发，也会按流程解释每一条。”"
        }
      ],
      next: 'c4_t03'
    },
    c4_t03: {
      id: 'c4_t03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“判定人写的是长机。”伊芙娜把耳机戴上，另一只耳朵留空，“少校，你要什么，一次说完整。我这边记着。”',
      next: 'c4_t04'
    },
    c4_t04: {
      id: 'c4_t04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'keating',
      text: '“三件事。”基廷说得很快，像在念清单，“第一，你们那台主换热器的配额我批，型号按渡鸦号的接口改，四十八小时到港提货。第二，卡列尔中尉的档案从‘待评估样本’回到‘留舰观察’，白鹭那次事故的措辞由我修。第三，辅机序列二期的编制保留，编号不动。”\n“交换三条：接收机原件、桥上那两段坐标、桥的钥匙归联合保管。”\n“你们把条款留在了自己船上，我不介意。可它留在你们那儿，就得有人替它负责——现在那个负责的人，是你们。”',
      next: 'c4_t05'
    },
    c4_t05: {
      id: 'c4_t05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vester',
      text: '“渡鸦号。我是灰塔观测局的维斯特。”信号是从观测艇转过来的，干净、清楚，语速不快，“你们刚刚打开了一只盒子，我知道里面有几页。”\n“我给你们三样东西：前四枚浮标失效过程的完整原始数据——你们缺的就是这四份；第五枚窗口内一条不受干扰的离开走廊；还有那位辅机序列二期右腿外壳的备用封座，型号和拆下来的那半截接口对得上。”\n“我要的是一件很小的事：四点十分到五点四十，你们不要进入第五枚浮标的五十公里。”',
      next: 'c4_t06'
    },
    c4_t06: {
      id: 'c4_t06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“第五枚灭掉，那条线上十四个矿站这个冬天怎么过？”',
      next: 'c4_t07'
    },
    c4_t07: {
      id: 'c4_t07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vester',
      text: '“我算过。”他说，“十四座矿站现存的东西够撑四个月零十一天，前提是外环共管仓按去年的调拨走。这条线彻底失效以后，我拿到的是完整的失败模型；明年春天，同一条线可以按我的图重新点亮，误差会小很多。”\n“如果你们今晚救下第五枚，它会在四十天之内自己坏掉——你们留下的东西，也只够一个冬天。”\n说完这一句，频道里静了两秒，像在等你们反驳。',
      next: 'c4_t08'
    },
    c4_t08: {
      id: 'c4_t08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“他给的数据是真的。”诺瓦的手指在屏幕上敲了两下，“前四枚浮标的原始数据我们确实缺，他连那只壳的型号都报得出来。”\n她把观测艇的方位标在图上：“问题不在这儿。刚才那一句里最要紧的是他知道接收机里存着什么——谈这笔交换，还能给他的观测补上最后一组数据。”",
      next: 'c4_t09'
    },
    c4_t09: {
      id: 'c4_t09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'scarlet_voice',
      text: '“渡鸦号，霜环老频率。”那边背景里有风机声，还有人喊了一句什么，“长话短说：油料三十吨，随船走；干货仓让你们补到满；从沧澜到外环这一段，我们用手工路标——旧货舱门改的，只亮给认识的人看。”\n“我们要两样：桥上那段坐标给我们抄一份，条款的抄件也给我们一份。我们要把它钉在食堂墙上，让下个月来的人自己看。”\n“还有，你们那位新来的报编号太长了，我们这边记不住。”',
      next: 'c4_t10'
    },
    c4_t10: {
      id: 'c4_t10',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“我说一句不合时宜的。”铎兰的声音从机库频道进来，慢了下来，“主换热器漏了三周，我用三种密封胶糊的。安全处批的那台配额，型号是对得上的。”\n“拒绝交换以后，零件得另找地方。这船还要跑一千多公里，出发前总得把泵机修好。给我一点时间，我再翻翻库存。”",
      next: 'c4_t11'
    },
    c4_t11: {
      id: 'c4_t11',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“四点十分，灰塔的窗口打开。在那之前，我们要么进窗口，要么离开。”伊芙娜把三家的标记并排摆在图上，“三家给的东西，都是这条船这个冬天要用的东西。回绝之前，要把过冬的物资另找出路。”\n她把自己的值班板翻过来，背面朝上推给你：“我不同意用我的名字做任何一家的报价。这一条先写进去。”",
      next: 'c4_t12'
    },
    c4_t12: {
      id: 'c4_t12',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: "“去哪里，我还要想想。”薇拉把三块屏幕在桌上并排摆开，“材料先留在这里，我会继续看。”\n她停了一下，声音压得很平：“有两件事，我现在就能答复。”\n“我拒绝复原。以后接什么任务、用什么名字，我要自己决定。”\n“还有一条。”她看着伊芙娜，“伊芙娜也得留在船上。如果拿她交换，我会把夜枭停进三号位，退出任务。”",
      next: 'c4_t13'
    },
    c4_t13: {
      id: 'c4_t13',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "诺瓦在一张便签上写了三行，抬头是联合、赤垣、灰塔，后面两列分别是“他们给什么”和“他们要什么”。写到第三行的时候她停了很久，然后回笔把灰塔那一行整个划掉。\n“他那条路是真的。前四枚的数据我们确实缺。”她把笔帽盖上，“可这笔交换要占掉十四个矿站的冬季配额，归还日期还空着。矿站等不起。”",
      next: 'c4_t14'
    },
    c4_t14: {
      id: 'c4_t14',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: "“那台换热器我继续糊。”铎兰说，声音恢复成平时那样，“先撑过这个冬天。你们排班时，记得给我留检修时间。到时候真炸了，我就把这周的汤全倒进循环水箱，你们四个一起喝。”\n频道里传来两声敲击，像是他用铜臂的指节在工具箱上磕了两下。",
      next: 'c4_t15'
    },
    c4_t15: {
      id: 'c4_t15',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“先把不要的东西定下来。”你说，“定了，再谈给什么、拿什么。”',
      next: 'c4_choice_trade'
    },
    c4_choice_trade: {
      id: 'c4_choice_trade',
      kind: 'choice',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: "三个频道都开着，三个频道的对方都在等一句话。值班记录摊在桌上，空白页只剩最后一段。\n第五枚浮标还有一小时零九分钟。桌上那杯水放凉了，杯底留下一圈湿印。",
      choices: [
        {
          id: 'c4_trade_concord',
          label: '回联合：维修配额和档案的事可以谈，条款要当着记录撤回，锚点数据一步不出船。',
          next: 'c4_med01',
          reaction: '回信写得像一份值班记录：条目、时间、甲乙双方，末尾一行写明数据不随船离港。\n四十七分钟以后，港区发来一个提货窗口的编号，编号后面跟着一串型号，收件人一栏写的是渡鸦号。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'c4_trade_concord', value: true }
          ]
        },
        {
          id: 'c4_trade_scarlet',
          label: '回赤垣：油料和手工路标要，条款抄件再送一份；锚点数据等他们把线守过这个冬天再谈。',
          next: 'c4_med01',
          reaction: '回复只有三行字：一个坐标、一个时间，以及一条催他们别迟到的备注。\n半小时以后，矿站的老频率换成连续载波——他们挂了东西在航线上，等船经过的时候自己取。发信记录里，发信人一栏仍然是空的。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'flag', key: 'c4_trade_scarlet', value: true }
          ]
        },
        {
          id: 'c4_trade_spire',
          label: '回灰塔：前四枚浮标的原始数据我们要，用数据换数据；第五枚不用他让，我们自己进。',
          next: 'c4_med01',
          reaction: '数据包在规定时间到达，十一个文件，校验码全对得上，末尾附着一行字：进了窗口他们不拦，记录照写。\n诺瓦把附件逐个验完，把末尾那行打印出来贴在值班板背面，正面还是你们自己的四条底线。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'c4_trade_spire', value: true }
          ]
        },
        {
          id: 'c4_trade_none',
          label: '三家都先不答复。把四条底线写进值班记录，谁先动谁先暴露。',
          next: 'c4_med01',
          reaction: "四条底线抄在值班记录最后一页：原始数据留舰；保全舰员；协议须有撤回条款；守住第五枚浮标。\n三个频道保持接通，跟踪器停在原位。船就那么停在轨道上，一直到四点零七分。",
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'flag', key: 'c4_trade_none', value: true }
          ]
        }
      ]
    },

    // ── 第八节拍：医务舱（medbay / duty，伤口处理与关系落点）──────────────
    c4_med01: {
      id: 'c4_med01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '医务舱的检查灯比走廊亮得多。两张固定床上，一张空着，另一张的隔帘拉到一半。墙上的耗材柜开着，最上面那格里放着烧伤敷料和一卷没拆封的白胶带。\n铎兰把右小臂搭在托盘边，手心朝上，右手背两块焦痕，小臂外侧蹭掉一层皮。\n角柜上放着那只被切下来的卡箍，断口还带着割枪的橙灰色。',
      next: 'c4_med02'
    },
    c4_med02: {
      id: 'c4_med02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“小腿外侧，十一厘米长，起了水泡。”薇拉自己把裤脚卷到膝盖上面，坐在检查床边，脚悬在地上没踩凳，“不疼，碰到才疼。”\n她说完自己也停了一下，像是在核对这句话有没有说错。',
      next: 'c4_med03'
    },
    c4_med03: {
      id: 'c4_med03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“灯我压低一点。”你把检查灯压到膝盖高度，先把敷料剪开，“凉水冲十一分钟，别省。你说停我就停。”',
      next: 'c4_med04'
    },
    c4_med04: {
      id: 'c4_med04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '水冲上去的时候她的脚趾抓紧了地面。\n“等一下。”她说，然后把声音放平，“水压低一档。”',
      next: 'c4_med05'
    },
    c4_med05: {
      id: 'c4_med05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '水压调下去，她就不动了，看着敷料一层一层盖上去。她自己把胶带撕成四段，递了两段给你，剩下两段贴在膝盖上方——贴之前先用指腹把毛边的白胶布压平。\n隔帘外面，铎兰把手背伸到冷风下面吹，铜臂的手指一根一根屈伸，校准抓握。',
      next: 'c4_med06'
    },
    c4_med06: {
      id: 'c4_med06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: "“对不住啊。”铎兰说。他转身看着角柜上那个断口发白的卡箍。\n“这卡箍是手工磨的，倒角磨了一整圈，边上留了一道浅槽，怕磨到腿上的线。我上午还在机库里骂它不伦不类。”他把卡箍放进零件盒，扣上盖子，“东西有主。我骂错了。”\n“卡列尔，你听见了，我不道歉第二次。”",
      next: 'c4_med07'
    },
    c4_med07: {
      id: 'c4_med07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'ivna',
      text: "伊芙娜站在门口，没进来。她等敷料贴完了才开口：“下次那条腿报警，先叫我。停机以后我们一起检查。”\n后半句她看了一眼薇拉，又看了一眼你。\n“还有，四点零七分起飞。腿上有伤不耽误踩舵，但你得先坐下，把束带扣好再动。”",
      next: 'c4_med08'
    },
    c4_med08: {
      id: 'c4_med08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'medbay',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“收到。”薇拉把裤脚放下来，试着踩了一下地面，“束带我会扣到第三格，第三格是我自己试出来的，不夹腿。”\n她把检查床让出来，顺手把用剩的白胶带卷好放回最上面那一格。',
      next: 'c4_br01'
    },

    // ── 第九节拍：舰桥（bridge / duty，锚点数据的归属定调）────────────────
    c4_br01: {
      id: 'c4_br01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '舰桥的半环形操纵台上，主屏切成两半：左边是霜环航道的锚点图，五枚浮标里四枚是暗的；右边是记录器的两份碎片索引，编号从死航线那一段一路排到沧澜地表的接收站。\n中央战术台上压着一张手写的便签，是诺瓦的字：全份＝两段碎片，摘要＝校验码加时间戳。\n舱外，行星的云带从舷侧的加强肋后面慢慢过去。',
      next: 'c4_br02'
    },
    c4_br02: {
      id: 'c4_br02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“这两段碎片现在在记录器里。”伊芙娜把手按在索引上，“它们下船之前得有个说法：谁的记录、谁能调、谁能作废。三家都在等着看我们怎么处理它们，处理错了，今晚救下的浮标明年就不属于我们管。”',
      next: 'c4_br03'
    },
    c4_br03: {
      id: 'c4_br03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“摘要我已经压好了，九个校验块，三家一人一份。”诺瓦的声音从电子战位那边过来，中间夹着键盘声，“摘要保留了来源校验，三家都能验证真实性。全份我建议不动——谁手上拿着全份，谁早晚要拿第二份。”",
      next: 'c4_br04'
    },
    c4_br04: {
      id: 'c4_br04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“摘要发出去以后，灰塔会拿它去对账，赤垣会拿它去抄墙，联合会把它夹在值班记录后面。”薇拉站在战术台另一侧，手指点在那两条碎片索引上，“三种用法都不影响航道本身。影响航道的是谁拿着原件——原件决定下一枚浮标往哪边亮。”',
      next: 'c4_br05'
    },
    c4_br05: {
      id: 'c4_br05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“摘要三家都发，原件不离船。”你说，“谁要全份，拿这条航道一整个冬天的维护记录来换。换不出来的，就继续拿摘要。”',
      next: 'c4_br06'
    },
    c4_br06: {
      id: 'c4_br06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“写成三条。”伊芙娜把便签翻过来，在背面写，“一，摘要对三家同时公开，发信人写渡鸦号，时间写这一班；二，原件留在记录器，取用要两个呼号联署，其中一个是舰务官；三，任何一次调阅都写进值班记录，包括我们自己的。”\n她写完把笔递给你：“签字。你签第一行。”',
      next: 'c4_br07'
    },
    c4_br07: {
      id: 'c4_br07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '你签了第一行，伊芙娜签第二行，薇拉在第三行写下自己的呼号，字比另外两行小一点点，但每个笔画都压得很实。\n校验块分成三份发了出去：一份进了港区管制队列，一份落在观测艇的收件口，一份被矿站的老频率收走，回信还是四个字。\n四点零七分，起飞命令下来了。',
      next: 'c4_qz01'
    },

    // ── 第十节拍：住舱（quarters / off_duty，念不念口令之前的那段安静）────
    c4_qz01: {
      id: 'c4_qz01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '起飞前二十分钟，住舱走道里已经没什么人了。值夜班的那批在机库，轮休的那批在自己的铺上。洗衣表第三行的小字还在，旁边多了一个铅笔画的对勾。\n小桌上有两个杯子，其中一个已经倒了热水，水汽在小灯的光柱里升得很慢。\n薇拉坐在长凳上，飞行服穿了一半，袖子挂在腰上，手里捏着一个冷掉的面团，正在把手指上的旧胶布一圈一圈拆下来。',
      next: 'c4_qz02'
    },
    c4_qz02: {
      id: 'c4_qz02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“杯子里是热水。”她说。\n她把拆下来的旧胶布卷成一个小球，放到桌角，然后把新的一段胶布撕开，从食指转到中指，一圈一圈绕上去。\n绕完最后一圈，她把两只手摊在膝盖上，等着。',
      next: 'c4_qz03'
    },
    c4_qz03: {
      id: 'c4_qz03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她没有问你任何事。\n她只是把杯子往你那边推了半寸，然后把面团掰成两半，一半放回纸袋里，一半拿在手上，等着你开口。小灯照着她的侧脸，颈绳上那只停在零点的秒表贴在外套上面，随着呼吸轻轻碰上扣子，响一下，停一下。',
      next: 'c4_qz04'
    },
    c4_qz04: {
      id: 'c4_qz04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“面团太甜。”你说，“你昨天挑的那个罐头也是。”',
      next: 'c4_qz05'
    },
    c4_qz05: {
      id: 'c4_qz05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“这个还行。”她咬了一口，腮帮子动了两下，又补了一句，“比昨天的行。”\n她把杯子拿起来，用自己的手背试了一下杯壁的温度，然后递过来——递到一半她又收回去，把杯子转了个方向，让杯把朝着你的手。',
      next: 'c4_qz06'
    },
    c4_qz06: {
      id: 'c4_qz06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '接杯子的时候你的手指碰到了她的指节，那上面还留着刚换上的胶布，黏的一面有点凉。她没有把手抽回去，也没有说话，只把面团换到另一只手里。\n走道那头的舱室门响了一下，有人翻了个身，铺板跟着吱了一声。',
      next: 'c4_qz07'
    },
    c4_qz07: {
      id: 'c4_qz07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“口令在我这儿。”你把杯子放在桌上，没有喝，“附件里那一条写着，判定人是我。”',
      next: 'c4_qz08'
    },
    c4_qz08: {
      id: 'c4_qz08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'serious',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“我知道。”薇拉把手上的面团放下，把两只手在膝盖上摊平，“那条我读了。权限那一行写得比条款细，连使用记录归到哪个队列都写好了。”\n她望着桌面上的面粉印：“是否使用，由你决定。”\n“我只说一件事：念了它，接下来那一段时间里我会完全听你的。这个效果在说明书里写得很清楚。”",
      next: 'c4_qz10'
    },
    c4_qz10: {
      id: 'c4_qz10',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“落地以后壳盖我自己检查，螺栓我自己拧。”薇拉把杯子往桌里推了推，把靠墙那一侧让出来，“机修长那只手今晚已经烫过一次，我不想让它再碰那条腿上的东西。”\n她把手掌翻过来看了一眼，右臂内侧那两道旧接口疤在灯光下是浅白色的，一直连到手肘。',
      next: 'c4_qz11'
    },
    c4_qz11: {
      id: 'c4_qz11',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“可以。扭矩扳手在机库三号抽屉，钥匙在铎兰那儿，你自己去要。”你把杯子挪到让出来的位置，“他要是不给，你就说是我让你去拿的。”',
      next: 'c4_qz12'
    },
    c4_qz12: {
      id: 'c4_qz12',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“你那台灰鸢，左肩那块替换件的颜色和别的地方不一样。”薇拉说，问得很自然，像在问一个字段属于哪张表，“是坏了换下来的，还是本来就不成套的？”',
      next: 'c4_qz13'
    },
    c4_qz13: {
      id: 'c4_qz13',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“不知道。我接手的时候它就在那儿，档案里那一栏也是空的。”你用指节在桌上敲了一下，“你要是哪天真查出来了，回来告诉我一声。”',
      next: 'c4_qz14'
    },
    c4_qz14: {
      id: 'c4_qz14',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“那我记成‘不明’。”薇拉说，“我那只接收机的序列号是磨掉的，登记表上写的是‘待补’。表上两种写法都有，得回头查原始记录。”\n她说完停了一下，自己把刚才那句改了：“等等，我刚才混在一起了。来源可以写不明，编号被磨掉这件事得单独记一笔。”",
      next: 'c4_qz15'
    },
    c4_qz15: {
      id: 'c4_qz15',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“靠港的时候你们下船做什么？”薇拉把纸袋上的折痕压平，“上次上街是跟着队伍走的，走到哪儿都有人报时间。我想自己去一次，买不买都行。”',
      next: 'c4_qz16'
    },
    c4_qz16: {
      id: 'c4_qz16',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'player',
      text: '“不怎么下船。”你把杯子握在手里，没有喝，“港区招待所的房间要排队，船上的铺位是自己的，洗手池也是自己的。下船也就是去找零件和吃一顿热的。”',
      next: 'c4_qz17'
    },
    c4_qz17: {
      id: 'c4_qz17',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“那我下次自己走一次。”她把纸袋塞进外套口袋，认真补了一句，“不带时间表的那种。回来的时候给你们带一罐不甜的。”',
      next: 'c4_qz09'
    },
    c4_qz09: {
      id: 'c4_qz09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '她把冷掉的那半个面团用纸袋包好，塞进外套口袋，站起来把袖子穿好，从领口一直扣到最下面那一颗。\n走到舱门口她停了一下，回头看了一眼桌上那杯还没喝的水。',
      next: 'c4_qz09b'
    },
    c4_qz09b: {
      id: 'c4_qz09b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'quarters',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“四分钟。水你带走，走道里的灯马上要灭一排，杯子放在桌上会被别人收走。”\n她说完扶着门框等了两秒，确认你站起来，才转身往机库那头走。',
      next: 'c4_w01'
    },

    // ── 第十一节拍：作战会议室（commandroom / duty，念出或拒绝复位口令）────
    c4_w01: {
      id: 'c4_w01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'nova',
      text: '“附件第一件，桥接复位权限。”诺瓦把那一页投在墙上，只有五行字，“使用条件：长机判定接驳失控。使用方式：口头。使用记录：自动归档，归档对象是安全处。”\n“说白了，你念一遍，它就永远留在他们的队列里，证明这条船上有人用过它。”\n她把手从投影上拿开：“作战里有一条：如果她被人拉走，这是我们唯一能立刻把她拉回来的东西。”',
      next: 'c4_w02'
    },
    c4_w02: {
      id: 'c4_w02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: "“这张授权跟我的名字写在同一份文件里。”伊芙娜站着，没有戴耳机的那只手垂在身侧，“他们把我的编号写成可回收资产，把你的嘴写成开关，这是同一份流程。”\n她看着你，语气没有起伏：“如果决定使用，理由必须是你认可的任务需要。我自己能应付。”",
      next: 'c4_w03'
    },
    c4_w03: {
      id: 'c4_w03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“这是你的决定。”薇拉站在投影下面，飞行服扣好了，头盔夹在左臂弯里，“我只补充执行部分：念了以后，接下来那段时间我的桥接只认你一条指令源，包括我自己想做的事。”\n“你自己选。选完我去三号位。”',
      next: 'c4_choice_word'
    },
    c4_choice_word: {
      id: 'c4_choice_word',
      kind: 'choice',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      text: "投影上的五行字照着桌面，光落在薇拉摊开的手旁。\n念出来，接下来的十几分钟里她会绝对可靠，而那份自动归档会替安全处证明她的桥接曾经被使用过一次。\n不念，今晚她只能靠自己的判断，而她的判断里有一样东西是别人没教过的：她自己想做什么。",
      choices: [
        {
          id: 'c4_word_use',
          label: '念出来。至少接下来的十几分钟里，她不会不听你的话。',
          next: 'c4_w04',
          reaction: '你念的时候声音很稳，一共不到两秒。\n投影右下角跳出一行小字：使用记录已归档。\n薇拉站直了，把头盔夹紧，肩膀往后收了一下。',
          effects: [
            { type: 'trust', who: 'vera', amount: -2 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'vera_word_used', value: true }
          ]
        },
        {
          id: 'c4_word_refuse',
          label: '不念。把授权行连同归档说明一起从队列里删掉。',
          next: 'c4_bt01',
          reaction: '删除用了三秒，队列末尾留下一行灰色的痕迹：条目已移除，操作人已记录。\n诺瓦看着那行灰字看了两秒，没有说话，只把窗口关了。\n薇拉把头盔换到右手，先出了门。',
          effects: [
            { type: 'trust', who: 'vera', amount: 2 },
            { type: 'standing', who: 'concord', amount: -1 },
            { type: 'flag', key: 'vera_word_refused', value: true }
          ]
        },
        {
          id: 'c4_word_keep',
          label: '现在不念，但把那一页抄在便签上，锁进工具箱第二格，等真要用的那天再说。',
          next: 'c4_w05',
          reaction: '你把五行字抄在便签上，折成三角，交给铎兰。他把它放进工具箱第二格，钥匙转了两圈，放回口袋。\n薇拉看着那个动作，点了一下头，没说别的。',
          effects: [
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'flag', key: 'vera_word_refused', value: true },
            { type: 'flag', key: 'c4_word_kept', value: true }
          ]
        }
      ]
    },
    c4_w04: {
      id: 'c4_w04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'serious',
      tone: 'duty',
      speaker: 'vera',
      text: '“收到。二号位就位。”薇拉把头盔夹紧，回答的方式和其他所有标准回报一样，短，干净，没有一个多余的词。\n她转身出门，脚步落在格栅上的节奏也没有变。',
      next: 'c4_bt01'
    },
    c4_w05: {
      id: 'c4_w05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'commandroom',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“留着吧。”铎兰在机库频道里说，“锁我那格，丢不了。你慢慢考虑，想清楚以后来找我。”\n频道里接着传来他把工具箱合上的声音，搭扣按了两遍。",
      next: 'c4_bt01'
    },

    // ── 第十二节拍：轨道（battle / combat，校准实验的第一次正面碰撞）──────
    c4_bt01: {
      id: 'c4_bt01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '四点零七分，三号机库减压到零，卷帘门升起来，门框上结着一层薄霜。\n灰鸢先出，夜枭跟在你右后。两具机体出去以后机库重新加压，舰内重力切回三成，走道里所有没固定的东西都往一侧滑了一寸。\n前方三百二十公里，第五枚浮标在暗背景里只是一个亮点。',
      next: 'c4_bt02'
    },
    c4_bt02: {
      id: 'c4_bt02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '“灰鸢、夜枭，听清任务。”伊芙娜的频道很干净，“第五枚浮标的桅杆朝我们这一侧。灰塔的平台会从外侧把错误序列灌进去，两轮自检就够它灭。”\n“你们的活只有一件：序列进不了桅杆。”\n“护航艇四十公里外看着。谁都不许先对它开火。”',
      next: 'c4_bt03'
    },
    c4_bt03: {
      id: 'c4_bt03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'nova',
      text: '“平台上没有乘员。”诺瓦的声音压着键声，“它放出来的分两批：三架探路，四架带缆。带缆的要往桅杆上挂线，线一挂住，序列就顺着线走。”\n“浮标每九十秒自检一次，连着两次读到同一个错误，它就按设计关灯。你们只有一次机会把它挡在桅杆外面。”',
      next: 'c4_bt04'
    },
    c4_bt04: {
      id: 'c4_bt04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“探测臂锁定三架，方位右前上，距离一百七十公里。后面四架在平台腹侧，缆线收着。”薇拉的报数又平又快，“相对速度每秒二点一，十九秒后交错。”',
      next: 'c4_bt05'
    },
    c4_bt05: {
      id: 'c4_bt05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'player',
      text: "“我先进。薇拉右后半位，专挑缆线，不跟机身纠缠。缆线切不开就报告，两机配合处理。”",
      next: 'c4_bt06'
    },
    c4_bt06: {
      id: 'c4_bt06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '第一架探路机从上方压下来。你侧身让过它的前缘，用左肩那块颜色不一样的替换件顶在它翼根上，两具机身擦出一串碎屑，探路机在你左侧散成两段。\n右腿外板被碎屑刮掉一块，警报响了一声就停。远处，四架带缆机贴着平台腹侧往下滑。',
      next: 'c4_bt07'
    },
    c4_bt07: {
      id: 'c4_bt07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'doran',
      text: '“灰鸢，右腿外板掉了，回程别用那个角度踩舵。”铎兰的话很短，后面接着金属敲击声，“夜枭那只壳我上过手，螺栓到位。你们打你们的。”',
      next: 'c4_bt08'
    },
    c4_bt08: {
      id: 'c4_bt08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '夜枭从左下方插上去。第一根缆被左机械手抓住，腕关节一扣，缆线在离桅杆十四米的地方断了；第二根被她横过机身，用前臂压断。\n第三根绕过了她，直接搭上桅杆中段。线头咬住，指示灯由琥珀色变成红色。',
      next: 'c4_bt09'
    },
    c4_bt09: {
      id: 'c4_bt09',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“第三根挂上了，桅杆中段，离自检还有四十一秒。”薇拉报得很快，“我手上没有工具，抓不干净这截线。”',
      next: 'c4_bt10'
    },
    c4_bt10: {
      id: 'c4_bt10',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'ivna',
      text: '“渡鸦号对缆线开火，避开桅杆，留出夜枭的位置。”伊芙娜的指令切进来，“灰鸢退出三公里，别把自己留在弹道上。”',
      next: 'c4_bt11'
    },
    c4_bt11: {
      id: 'c4_bt11',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '舰炮的曳光从你左侧掠过去，线在桅杆外侧断成两截，线头弹开时在桅杆上留下一道白痕。\n自检倒计时归零。浮标的指示灯暗了一下，又亮起来——序列没有进去。\n平台腹侧的四架带缆机同时拉起，其中一架转向了你们。',
      next: 'c4_bt11a'
    },
    c4_bt11a: {
      id: 'c4_bt11a',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: "“护航艇在动，往我们这边压了两公里。”伊芙娜的第二个指令紧跟着进来，“它的火控还关着。灰鸢，保持航向，武器锁定解除。”",
      next: 'c4_bt11b'
    },
    c4_bt11b: {
      id: 'c4_bt11b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“序列卡在平台的中继器里，没有进桅杆。”薇拉把探测臂的读数推到频道上，“中继器挂在它自己那根缆上，在腹侧，我够得到。”',
      next: 'c4_bt11c'
    },
    c4_bt11c: {
      id: 'c4_bt11c',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '夜枭把探测臂收平，贴着浮标的太阳能板外侧切过去。第一根缆从她的肩甲上擦过，第二根被她左机械手抓住。\n中继器在离那只手两米的地方炸开，碎片打在浮标板上，声音闷得像有人在里面敲铁皮。\n平台的推进器亮了一次，转向观测艇那一侧。',
      next: 'c4_bt12'
    },
    c4_bt12: {
      id: 'c4_bt12',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'nova',
      text: "“采集脉冲，锁定夜枭桥接。”诺瓦的声音第一次快了半拍，“平台开始采样了，目标是接入航道的神经读数。它还在找夜枭右腿那个旧端口，用的还是拆箱子之前那张图。那只接收机已经不在船上了，它不知道。”",
      next: 'c4_bt13'
    },
    c4_bt13: {
      id: 'c4_bt13',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'narration',
      text: '脉冲落下时，夜枭的机身在光里白了一瞬。\n灰鸢在旁边被冲击波推得横了半米，操纵杆在手里磕了一下。',
      variants: [
        {
          requires: ['vera_word_used'],
          text: '脉冲落下时，夜枭的机身在光里白了一瞬。\n她没有躲。她按着二十秒前定下的位置钉在那儿，把右臂探测臂抬起来挡住朝桅杆方向的溢出，机身被推得横了半米，也没有离开自己的位。'
        },
        {
          requires: ['vera_word_refused'],
          text: "脉冲落下时，夜枭的机身在光里白了一瞬。\n她自己拐了出去——沿侧面横切过来，把灰鸢的左后侧挡在脉冲和她自己的机身之间。灰鸢被冲击波推得横了半米，操纵杆在手里磕了一下。"
        }
      ],
      next: 'c4_bt13b'
    },
    c4_bt13b: {
      id: 'c4_bt13b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“右腿读数有偏移，姿态和目视差了半度，行走可以，跑绊。”薇拉的回报很短，句子之间没有停顿。',
      variants: [
        {
          requires: ['vera_word_used'],
          text: '“二号位在位。”她的回报只有四个字，声调和刚才在会议室里复述授权时一模一样。'
        },
        {
          requires: ['vera_word_refused'],
          text: '“是我拐的。”她的回报紧跟着进来，中间没有喘气，“壳盖被打掀了，内盖还在，腿没事，还能动。”'
        }
      ],
      next: 'c4_bt14'
    },
    c4_bt14: {
      id: 'c4_bt14',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'player',
      text: '“收到。能自己回来吗？回不来就停在原地，我过去接，别硬撑。”',
      next: 'c4_bt15'
    },
    c4_bt15: {
      id: 'c4_bt15',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'vera',
      text: '“能。”薇拉报完停了一拍，补了半句，“我自己回得来，不用你过来。”',
      next: 'c4_bt16'
    },
    c4_bt16: {
      id: 'c4_bt16',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '平台腹侧最后一架带缆机转头回撤，缆线拖着从桅杆旁边扫过去，在浮标的太阳能板上刮出一串火星。\n第五枚浮标还亮着，中途断过一秒。桅杆中段那道白痕在灯下面很清楚。\n平台开始加速，往观测艇的方向退。',
      next: 'c4_bt17'
    },
    c4_bt17: {
      id: 'c4_bt17',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'vester',
      text: '“四点四十一分，第五枚的自检过了。”维斯特的声音又切进来，还是那个速度，“你们赢了这一格。”\n“四份完整的失效曲线我已经拿到了，外加一份有人干预的记录——这份记录本身就够写一个冬天。”\n“记录我会照写。你们的名字会出现在里面。”',
      next: 'c4_bt18'
    },
    c4_bt18: {
      id: 'c4_bt18',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'serious',
      tone: 'combat',
      speaker: 'ivna',
      text: '“返航。护航艇又挪了一次，还在射程外，别给它插进回收航线的机会。”伊芙娜说，“夜枭先入，灰鸢在门口等一个身位。”',
      next: 'c4_bt19'
    },
    c4_bt19: {
      id: 'c4_bt19',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'nova',
      text: '“护航艇发了三次识别询问，都是标准句。”诺瓦的键声很快，“观测艇在收平台残片，平台上没有乘员——这是它今晚唯一让人放心的地方。”',
      next: 'c4_bt20'
    },
    c4_bt20: {
      id: 'c4_bt20',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'battle',
      expression: 'neutral',
      tone: 'combat',
      speaker: 'narration',
      text: '夜枭先回。她在机库上空悬了两秒，左机械手扶住舱门框，右臂的三镜头探测臂贴着机身收进锁定位，靠左腿关节和三次短促的姿控喷流把右腿一格一格收进来，落地时右腿先着地，机身往右沉了一下，又被她自己撑住。\n灰鸢跟在后面进。卷帘门落下，机库重新加压，霜从门框上化下来，沿着地面格栅流成一条细线。\n墙上的计时器停在五点零二分。',
      next: 'c4_bt21'
    },
    c4_bt21: {
      id: 'c4_bt21',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'doran',
      text: "“夜枭，留在架上，我来接你。”铎兰爬到检修台上，先看那条腿，再看壳盖，“壳盖被打掀了，锁扣断了一个，内盖还卡在槽里。再飞一次，壳盖就可能整块脱落。”\n他从口袋里摸出那个装卡箍的零件盒，看了一眼，又塞回去：“灰鸢右腿外板排在明早修，今晚先处理这条腿。”",
      next: 'c4_h21'
    },

    // ── 第十二节拍之二：机库（hangar / off_duty，打完这一场的加餐）──────────
    c4_h21: {
      id: 'c4_h21',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '机库的维护灯关了一半。灰鸢和夜枭都停在架上，机体还带着外面的冷气，装甲板边缘往下滴水，落在格栅上一滴一滴。\n工具车被推到墙边当了桌子，保温桶盖开着，汤的热气在冷空气里看得很清楚。检修台上摊着一块被打掀的壳盖，锁扣上还挂着断口。',
      next: 'c4_h22'
    },
    c4_h22: {
      id: 'c4_h22',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: "“这碗你拿着。”铎兰把碗塞到薇拉手里，自己端着剩下那碗站着喝，“检修台上油多，坐工具箱吧，盖子结实，我十年没换过。”\n他自己先坐了上去，铜臂的肘部在铁盖子上磕了一声。",
      next: 'c4_h23'
    },
    c4_h23: {
      id: 'c4_h23',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'nova',
      text: '“我说个正经的。”诺瓦蹲在货箱上，用勺子敲了敲碗边，“这汤咸了三天。明天谁去跟做饭的人说一声，说完我就不提了。”',
      next: 'c4_h24'
    },
    c4_h24: {
      id: 'c4_h24',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'doran',
      text: '“我去。”铎兰说，“我说得委婉点——就说咸得刚好，下次少放半勺。你说话太直，别人会以为船上要造反。”\n他把碗底剩的那点汤倒进嘴里，用袖子擦了一下碗沿。',
      next: 'c4_h24b'
    },
    c4_h24b: {
      id: 'c4_h24b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "诺瓦把碗里剩的汤倒掉一半，勺子插回桶里，顺手把工具车上那排扳手按尺寸归位——那是铎兰的规矩，她照做，一边归位一边找笔，准备在架子上标出尺寸。\n薇拉把四个人的空碗摞到一起，自己那只放在最下面，摞的时候把每个碗的把手都转朝同一边，摞完用手背压了一下，确认不会倒。\n换班的人从走道那头经过，朝机库里看了一眼，没有进来。",
      next: 'c4_h25'
    },
    c4_h25: {
      id: 'c4_h25',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: "伊芙娜把最后一块面饼掰成四份，一份一份递过去，递到薇拉手上时停了半秒——那只手还缠着胶布，指节上沾着一点干掉的液压油。\n你们捧着分好的面饼，各自吃了起来。远处是泵机的声音，近处是机体冷却时的轻响，还有勺子碰到碗沿的声音。",
      next: 'c4_h25b'
    },
    c4_h25b: {
      id: 'c4_h25b',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'warm',
      tone: 'off_duty',
      speaker: 'vera',
      text: '“汤还有半碗。”薇拉站起来，把勺子从桶里捞出来，先给伊芙娜那碗添满，再给自己添了半碗，“这次是真的咸，咸得刚好。”\n她坐回工具箱的时候，腿是慢慢放下去的，没让贴敷料的那条小腿先着地。',
      next: 'c4_h26'
    },
    c4_h26: {
      id: 'c4_h26',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'vera',
      text: "“明天上午修壳盖，我在场。”薇拉把空碗放在膝盖上，没有立刻站起来，“以后我想自己参与维护，你教我拆一次。”",
      next: 'c4_h27'
    },
    c4_h27: {
      id: 'c4_h27',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'hangar',
      expression: 'neutral',
      tone: 'off_duty',
      speaker: 'narration',
      text: '伊芙娜点了下头，把四个碗收进桶里，用袖子擦了擦桶盖。\n五点十八分，走道那头的灯一盏一盏亮过来，换班的时间到了。',
      next: 'c4_f01'
    },

    // ── 第十三节拍：舰桥（bridge / duty，章末：桥的钥匙在谁手里）───────────
    c4_f01: {
      id: 'c4_f01',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '五点二十一分，舰桥。\n第五枚浮标连着过了两次自检；另外四枚仍旧暗着，霜环航道还是半条。护航艇跟着转了半个轨道，保持在四十公里。\n损伤清单摊在战术台上，一共十四行，第三行是主换热器，第七行是夜枭右腿的壳盖。',
      next: 'c4_f02'
    },
    c4_f02: {
      id: 'c4_f02',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'ivna',
      text: '“走之前只剩一件事：那两段碎片放在谁手里。”伊芙娜把记录器的索引推到桌子中央，“我们今晚回绝了三家，回绝可以，但要有个明确的说法放在哪儿。没有说法的东西，下一次会被人拿着替我们说话。”\n她把三张外交通道放在索引旁边：“选完就执行，不写草稿。”',
      next: 'c4_f03'
    },
    c4_f03: {
      id: 'c4_f03',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: "“四条路，代价我都写在这儿。”诺瓦把一张便签贴在索引上方，一条一条念，“进值班链，钥匙归舰务官，档案干净，但以后每一步调阅都跟着联合的编号；给铎兰带走，矿站自己抄，线自己守，但下次我们缺零件就只能靠他们送；进灰塔封存，摘要公开、无法抵赖，但那等于承认我们接受过他们的保管；拆成四份，四个人各拿一份，调阅时要四个人到齐，保管起来最麻烦。”",
      next: 'c4_f04'
    },
    c4_f04: {
      id: 'c4_f04',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: "“这件事我不投票。”薇拉站在索引的另一侧，“钥匙关系到整条船，由你们共同保管。”\n她把手放在那两段碎片的编号上，只补了一句：“不管放哪儿，摘要留一份在船上，全份给谁都要写清楚哪天、谁签。写不清楚的地方，下一个人会自己补。”",
      next: 'c4_f05'
    },
    c4_f05: {
      id: 'c4_f05',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'player',
      text: '“那就今天定。”你说，“定完写进值班记录，谁签的名字谁认。”',
      next: 'c4_choice_crew'
    },
    c4_choice_crew: {
      id: 'c4_choice_crew',
      kind: 'choice',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      text: '记录器索引停在桌子中央，两份碎片加起来只有一个巴掌大的读取头。\n半条航道、十四个矿站、三家的收件口，还有这船上四个人的名字，都在等这把钥匙落进谁的口袋。',
      choices: [
        {
          id: 'c4_key_ivna',
          label: '交给伊芙娜：钥匙进渡鸦号的值班链，摘要留船上，调阅留记录。',
          next: 'out_ch4_concord',
          reaction: '伊芙娜接过读取头，登记到舰务官的柜子里，取了两次指纹，写了三个字段：时间、位置、调阅人。\n做完她在值班记录末尾补了一行：本舰回绝三方报价，原因见上。写完全船广播了一遍：离开轨道，航向霜环外环。',
          effects: [
            { type: 'trust', who: 'ivna', amount: 1 },
            { type: 'standing', who: 'concord', amount: 1 },
            { type: 'flag', key: 'bridge_key_holder', value: 'ivna' },
            { type: 'flag', key: 'bridge_key_ivna', value: true }
          ]
        },
        {
          id: 'c4_key_doran',
          label: '交给铎兰：副本下船到矿站，线由他们自己抄、自己守。',
          next: 'c4_f06',
          reaction: '铎兰把读取头裹了三层防静电布，塞进工具箱第二格，钥匙挂在脖子上。\n临走之前他把那块断口发白的卡箍从零件盒里拿出来，放进了口袋。',
          effects: [
            { type: 'trust', who: 'doran', amount: 1 },
            { type: 'standing', who: 'scarlet', amount: 1 },
            { type: 'flag', key: 'bridge_key_holder', value: 'doran' },
            { type: 'flag', key: 'bridge_key_doran', value: true }
          ]
        },
        {
          id: 'c4_key_nova',
          label: '交给诺瓦：全份进灰塔的封存档案，摘要在三条频道同时公开。',
          next: 'c4_f07',
          reaction: '诺瓦把全份打包，附上九个校验块，收件口写灰塔观测局公共索引，抄送另外两家。\n上传之前她把文件列表截了一张图，贴在值班板背面，正面是你们自己的四条底线。',
          effects: [
            { type: 'trust', who: 'nova', amount: 1 },
            { type: 'standing', who: 'spire', amount: 1 },
            { type: 'flag', key: 'bridge_key_holder', value: 'nova' },
            { type: 'flag', key: 'bridge_key_nova', value: true }
          ]
        },
        {
          id: 'c4_key_ship',
          label: '谁也不给：读取头拆成四份，四个人各拿一份，凑齐了才算数。',
          next: 'c4_f08',
          reaction: "读取头拆成四片，一片进封印袋，一片跟着工具箱，一片挂进颈绳里面，一片压在记录器底座下面。\n四个人的呼号写在四个袋子上，袋号各自独立，只有四份合在一起才构成完整的读取头。",
          effects: [
            { type: 'trust', who: 'vera', amount: 1 },
            { type: 'flag', key: 'bridge_key_holder', value: 'crew' },
            { type: 'flag', key: 'bridge_key_ship', value: true }
          ]
        }
      ]
    },
    c4_f06: {
      id: 'c4_f06',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'warm',
      tone: 'duty',
      speaker: 'doran',
      text: '“我先飞一趟零件船，把抄本送到矿站。”铎兰说，“路标他们自己挂，抄完他们自己关灯。要是他们非要留我吃饭，我就说船上还有人等着喝汤。”\n他走之前把工具箱的搭扣按了两遍，那是他每次离船的固定动作。',
      next: 'out_ch4_scarlet'
    },
    c4_f07: {
      id: 'c4_f07',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'nova',
      text: '“这样以后谁想改数据，得先改他们自己的索引。”诺瓦把上传回执截了图，贴在值班板背面，“他们记账的方式我熟，这回换他们对着别人的表说话。”',
      next: 'out_ch4_spire'
    },
    c4_f08: {
      id: 'c4_f08',
      kind: 'dialogue',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'vera',
      text: '“下次凑齐，要四个人站在同一个房间里。”薇拉把自己那一片放进救生背心的内衬，先给缝合处贴了一圈白胶布，“最好别是有人出事的那一天。”\n她把背心扣好，压了压那片硬的地方，确认从外面看不出来。',
      next: 'out_ch4_neutral'
    },
    // ── 章末结果：四个继续点（全部 continuesTo: 'ch05'）────────────────────
    out_ch4_concord: {
      id: 'out_ch4_concord',
      kind: 'chapterOutcome',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'serious',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch4_concord',
      continuesTo: 'ch05',
      onEnter: [{ type: 'flag', key: 'out_ch4_concord', value: true }],
      text: "六点十分，渡鸦号离开沧澜轨道。护航艇跟到巡逻区边界就停下，把舷号在管制频道里念了一遍，没有做别的事。\n击杀令的原文留在值班记录里，四个呼号联署，抄送栏写的是联合安全处收件口。港区回了一封格式回执：收件已登记，编号待复核——那条维修窗口还压在安全处的桌角上，没有落到这条船上。\n读取头进了舰务官的柜子，两次指纹，三个字段，摘要留了一份在记录器底座下面。\n外环矿站的接收队列排到了第一位，三个数字跟着一条补给单过来：干货、油料、冬装，各按十四座矿站的存量分。能拿到和拿不到的都写在单子上，主换热器那一栏是空的。\n内盖复查登记在三百小时以后，登记者一栏写着她的呼号；下面还用小字补了一句：当天不要排飞行班。",
      variants: [
        {
          requires: ['c4_trade_concord'],
          text: "六点十分，渡鸦号离开沧澜轨道。护航艇跟着送到巡逻区边界就停下，把舷号在管制频道里念了一遍，然后掉头。\n击杀令的原文留在值班记录里，四个呼号联署，抄送栏写的是联合安全处收件口。四十八小时的维修窗口编号贴在战术台侧面，型号后面跟着一行小字：需携舰接受核查。\n读取头进了舰务官的柜子，两次指纹，三个字段。摘要留了一份在记录器底座下面。\n外环矿站的接收队列排到了第一位，三个数字跟着一条补给单过来：干货、油料、冬装，各按十四座矿站的存量分。\n薇拉的内盖复查写在三百小时以后，登记人一栏她自己填的，一笔一画填上了自己的呼号。她在下面又写了一行小字：第三百小时当天不要排飞行班。"
        }
      ]
    },
    out_ch4_scarlet: {
      id: 'out_ch4_scarlet',
      kind: 'chapterOutcome',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch4_scarlet',
      continuesTo: 'ch05',
      onEnter: [{ type: 'flag', key: 'out_ch4_scarlet', value: true }],
      text: '清晨，渡鸦号把自己的零件船放进轨道。铎兰随船下去，工具箱第二格跟着他，钥匙挂在脖子上，卡箍在口袋里——他下船是去送抄本，也去问一句矿站那边还剩多少油。\n联合的值班记录里多了两行：一次未回复的定向呼叫，和一次没有署名的转发。护航艇跟着转了两圈，最后停在港区上空没有动。\n抄件在老频率上发了两次，第二次才有人应答，回过来的字很短，署名一栏空着。\n半条航道上，十四个点开始按自己的排班收货。渡鸦号的补给这次不靠任何一家的配额：干货按矿站的存量表分，油料按他们的余量分，先紧着最远的那两个点。\n矿站的人在旧舱门上裁了一块临时内盖，比原来厚两毫米。薇拉自己把它装进右腿外侧那只旧壳里，外罩没动，颜色和挂点还是原来那样，然后照旧报了三百小时的复查。',
      variants: [
        {
          requires: ['c4_trade_scarlet'],
          text: '清晨，渡鸦号把自己的零件船放进轨道。铎兰随船下去，工具箱第二格跟着他，钥匙挂在脖子上，卡箍在口袋里。\n半小时以后，从沧澜到外环的第一段手工路标亮了——旧货舱门改的，只亮给认识的人看。矿站的油料从这一天起记在渡鸦号的账上。\n击杀令的抄件走了老频率。回复只有四个字：收到了，谢。发信人一栏仍然是空的。\n联合的值班记录里多了一条未回复的定向呼叫，收件栏空着。护航艇跟着转了两圈，最后停在港区上空没有动。\n半条航道上，十四座矿站开始按自己的排班卸货。渡鸦号的补给第一次不靠任何一家的配额：干货和油料都从矿站的仓库里出，账记在矿站食堂的墙上。\n薇拉把矿站用旧舱门边角料裁的临时内盖装进了夜枭右腿外侧那只旧壳里，比原来厚两毫米；外罩还是原来那只，挂点和颜色都没动。她报了一次复查时间，还是三百小时。'
        }
      ]
    },
    out_ch4_spire: {
      id: 'out_ch4_spire',
      kind: 'chapterOutcome',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch4_spire',
      continuesTo: 'ch05',
      onEnter: [{ type: 'flag', key: 'out_ch4_spire', value: true }],
      text: '全份数据上传用了十九分钟，索引地址发回三份回执：港区一份，矿站老频率一份，观测艇一份。\n维斯特的观测艇没有再靠近，只把距离重新校准了一次，停在你们离开航向的侧后方。他照他说的做了：记录照写，写的是渡鸦号对第五枚浮标的干预过程，附了四份失效曲线。\n渡鸦号自己的记录器里只留摘要与一条备注：全份不在船上。诺瓦把那张贴在值班板背面的文件列表截图收进了私人柜子，和她的空白数据卡放在一起。\n外环的十四座矿站同一天收到了公开摘要，其中五座回了信，问的都是同一件事：这条线上的驳船什么时候能来。\n补给单排在接收队列里，第一条是干货，第二条是冬装。诺瓦把索引地址抄在值班板正面，字写得比平时小一号，抄完把笔递给薇拉，让她把呼号签在下面。'
    },
    out_ch4_neutral: {
      id: 'out_ch4_neutral',
      kind: 'chapterOutcome',
      chapter: 'ch04',
      scene: 'bridge',
      expression: 'neutral',
      tone: 'duty',
      speaker: 'narration',
      outcomeId: 'out_ch4_neutral',
      continuesTo: 'ch05',
      onEnter: [{ type: 'flag', key: 'out_ch4_neutral', value: true }],
      text: '三方收到的回绝是同一条：数据在船上，摘要在船上，要全份就上船来谈。\n读取头拆成四片之前，伊芙娜在值班记录上写了最后一行：本舰即日离开沧澜轨道，前往霜环外环执行配给输送。护航艇跟到巡逻区边界，观测艇留在原地收它的平台残片，矿站的老频率开始每隔四小时报一次天气。\n补给单是按矿站的存量表排的：干货、油料、冬装，一共十四个点，最近的一个在三天航程之外。主换热器还是那台用三种密封胶糊起来的机器，铎兰打算一直糊到冬天结束。\n薇拉把四片读取头里属于她的那一片缝进了救生背心的内衬，缝之前先给缝合处贴了一圈白胶布。\n起飞前她去洗衣房开了那台滚筒锁死的机器，把四个人的工装一起洗了。'
    }
  }
};

export default CHAPTER;
