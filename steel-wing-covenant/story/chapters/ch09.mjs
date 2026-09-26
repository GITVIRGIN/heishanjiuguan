// 钢翼盟约 / STEEL-WING COVENANT — 终章「盟约」章节模块（纯数据，无 DOM 依赖）
//
// 章节模块契约见 candidate/production/contracts-g1/CHAPTER_MODULE_CONTRACT.md。
// 本章是终章：nextChapter = null；五个 kind='ending' 结局各自写完整，带 closure 字段。
// 节点 id 前缀 fx_，入口 fx_01；选择节点使用 choices（不是 options）；
// 章节、场景、表情、语气四项在每个节点上显式声明。
//
// 本轮写入范围：只写 candidate/production/drafts/ch09.mjs（本文件）。
// 没有读写其它章节草稿、运行时、清单、测试或计划。

/** 五个结局的 closure：机制结果 / 船 / 四名同伴 / 主角位置（节点与 endings 表共用同一份数据） */
const CLOSURES = {
  ending_concord_final: {
    mechanism: '锚链交回联合序列：写入授权、三段校样与校准队列原件按收据移交；写入权封存留档，第七段按收据亮到冬季末，外环三个站的配给表按月公开。',
    ship: '渡鸦号编入联合护航序列，进坞大修，编制保留；二号泵的旧管换成新的，最大加速度补回一档。',
    companions: [
      '伊芙娜：留舰，编号进入正式序列，维护人一栏由她自己签；担保人一栏写着主角的呼号。',
      '铎兰：继续做机修长，影子线路挂上“储备配件”的名目写进船上清单，工具箱第二格照旧开着。',
      '诺瓦：被召回灰塔，仍保留私人频道；观测卡留下一部分在船上的档案柜里。',
      '薇拉：编制内、有编号、有担保人；她在登记说明上自己签领了那个名字，并开始照着表提要求。'
    ],
    protagonist: '正式的联合军官，第三小队在册，档案里写着担保人一栏；呼号照旧被舰上的人叫。'
  },
  ending_scarlet_final: {
    mechanism: '外环矿站共管锚点：第七段的读权限与维护名单交回外环，二十一个锚标由矿站自己的维护队点亮；联合失去这一段的独家路权，死航线上出现第一条公开航路。',
    ship: '渡鸦号船籍注销，挂矿站的船牌，在外环跑补给与运输，靠运单结账。',
    companions: [
      '伊芙娜：脱离联合编制，做矿站的航道教官；编号留着，但只是一个编号。',
      '铎兰：回三〇九号站，做外环矿站的联络员；修理册子留在船上的工具箱第一格。',
      '诺瓦：公开半数观测数据，被灰塔除名；署名的后面不带单位。',
      '薇拉：没有编制，自己签领了“薇拉·厄兰”这个名字；面板上填的姓名由她自己写。'
    ],
    protagonist: '不再是军官，只是渡鸦号上那个有呼号的人；军籍证件交回，名册上只留班次。'
  },
  ending_spire_final: {
    mechanism: '数据公开一半：第七段的原始记录半公开，塔只保留校准权，写入权整条划掉；维斯特的实验被写成失败的案例，由塔自己的公开栏署名。',
    ship: '渡鸦号成为灰塔的合同船，拿到合法航权，代价是每季度一次船体与记录检查，范围写死在附件三。',
    companions: [
      '伊芙娜：拿到干净的合法身份，档案上的“样本”被划掉，代价是每季度一次复核。',
      '铎兰：第一次用自己的全名签维修合同，合同里保住了“旧件可留用”那一条。',
      '诺瓦：升任观测员，第一份独立报告的结论栏写的是“不确定”。',
      '薇拉：用两段校验值换到合法身份，签了长期观察条款；条款末尾是她自己的签名。'
    ],
    protagonist: '灰塔档案里的长期观察对象，档案内容可查；舰上的人仍然照着呼号叫你。'
  },
  ending_together: {
    mechanism: '写入口按桥的实际状态处理：用掉一次之后作废封存，或者按工单拆成零件、分开保管；第七段的锚点交回矿站自己维护，三边谁都没有拿到独家控制权；第五条的原件留在船上。',
    ship: '渡鸦号没有船籍、没有归属港，靠维修与运输活着；船上十一条规矩写在会议室记录本第一页。',
    companions: [
      '伊芙娜：把袖标收进储物格，编制不交也不填表，留在船上做副手。',
      '铎兰：熔掉工具箱第二格的钥匙，把抽屉里的清单抄到抽屉外面。',
      '诺瓦：报告写在私人数据卡里不上交，被灰塔除名；记录不归档，但也没有消失。',
      '薇拉：拒绝复位口令、拒绝编制；名字写在自己的维护日志第一页第一行。'
    ],
    protagonist: '没有编制、没有军衔，只有一个呼号和一条船；军籍档最后一页写着离职。'
  },
  ending_reset: {
    mechanism: '锚链被联合收回，第七段恢复配给表运行；写入授权按桥上已经发生的状态分批上缴，接驳座的线束整根抽走并按联合规格封板；维斯特的实验在官方归档里被记成一次普通的校准事故，已经公开的记录留在公开栏里。',
    ship: '渡鸦号回到联合序列，进坞大修，编制一个不少，四个人都在各自的岗位上。',
    companions: [
      '伊芙娜：执行完最后一个命令，命令照流程交，不再跟主角多说一句。',
      '铎兰：换掉工具箱的锁，钥匙挂在腰间，不再动手修主角的机。',
      '诺瓦：报告里把呼号换成舰号，结论栏写的是“执行到位”。',
      '薇拉：答复只剩两个字；维护日志的备注栏空了一个月，没有再问过为什么。'
    ],
    protagonist: "档案干净、评价优秀；登舰名册上只有编号和班次，呼号栏被留空。"
  }
};

const NODES = {

  // ==========================================================================
  // 第一幕 · 锚地对峙（battle / combat）
  // ==========================================================================

  fx_01: {
    id: 'fx_01',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '霜环锚地的灯是一串冷白的点，从舷窗左侧一直排到看不见的地方。环带联合的护航群占了外圈，赤垣的矿砂船挤在中间航道，灰塔的四条校准补给艇卡在咽喉位上。渡鸦号停在三种涂装中间，四百二十米船身把三段推进环对着三方，谁都没有先开火。',
    next: 'fx_01a'
  },

  fx_01a: {
    id: 'fx_01a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '联合来了三艘护航舰，炮口盖着；赤垣十四条矿砂船，货架上焊了临时的支架；灰塔四条校准艇，一条炮都没有，只有天线。三边都清楚同一件事：明天这一段航道亮不亮，不取决于谁的炮大，取决于谁能让锚标按自己的写法记数。',
    next: 'fx_01b'
  },

  fx_01b: {
    id: 'fx_01b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: "三边都没有先开火的意思，但三边都记住了昨天夜里的那一场：渡鸦号做过什么，各自心里都有一份，各方把回复留在了正式通话里。锚标阵列的灯在中间那一串上亮得最整齐。",
    variants: [
      {
        requires: ['out_ch8_concord'],
        text: "联合的护航群里有人认得渡鸦号舷侧那个褪色的旧编号，队列给这条船留的位置比别的外包船靠里半格。矿砂船队和校准艇都停在外圈，等待着联合频道的下一次点名。"
      },
      {
        requires: ['out_ch8_scarlet'],
        text: "矿砂船队把渡鸦号的呼号写进了他们自己的名单，这份登记比舰上的答复先了一步。联合的护航群停在外圈，灰塔的校准艇停在咽喉位，三边隔着一段空档对着看。"
      },
      {
        requires: ['out_ch8_spire'],
        text: "校准阵列给渡鸦号留了一个只读的观测位，位置在阵列外缘；联合的护航群和矿砂船队各占一边，中间空出了那一个观测位。三边的灯都压得很低。"
      },
      {
        requires: ['out_ch8_neutral'],
        text: "三边都记住了昨天夜里的那一场，各自避开了阵列轴线。渡鸦号停在阵列西南侧，三条频道同时安静了半分钟，然后是一串很轻的报位声。"
      }
    ],
    next: 'fx_02'
  },

  fx_02: {
    id: 'fx_02',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'ivna',
    text: '全舰注意，战斗岗位。重力降到零点三，束带扣好。炮位解锁要第二个人授权，授权在我手里。灰鸢十二分钟内挂上弹射位，夜枭在二号位等。',
    next: 'fx_02a'
  },

  fx_02a: {
    id: 'fx_02a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: "渡鸦号停在阵列西南侧，船身横着，三段推进环只有两段在低速上转，二号泵打着摆。三边的船都在射程边缘，炮口维持着原有朝向。锚标阵列的灯在船身侧面排过去，把装甲上的旧补丁照得很清楚。",
    next: 'fx_03'
  },

  fx_03: {
    id: 'fx_03',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'vera',
    text: '夜枭报告：三号锚标的记忆区正在被重写，写入源是灰塔补给艇尾部的校准阵列。序列特征和静默壁那一次一致，这一次功率高了三档。测距已经标好，探测臂只做记录。',
    next: 'fx_04'
  },

  fx_04: {
    id: 'fx_04',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'nova',
    text: '校准队列十九分钟后进下一个窗口。过境船我数出来了：四十一条，其中十七条挂外环的货牌，最后一条是去三〇七号站送滤网和泵件的老船。它现在正在往那一段里走。',
    next: 'fx_04a'
  },

  fx_04a: {
    id: 'fx_04a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '走在最后的那条老货船挂着三〇七号站的货牌，货架上绑着两台泵和九箱滤网。按矿站自己的排程，这批货晚九天到，泵房就得停一台；停一台，每天少四百吨水，出水会带渣。',
    next: 'fx_04b'
  },

  fx_04b: {
    id: 'fx_04b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'nova',
    text: '我不替矿站说话，我只报数。这一段要是暗四十分钟，四十一条船得在黑里排队，那条老货船最坏会错过冻结线，两台泵要到明年春天。维斯特要的就是这四十分钟里没有一条船走完。',
    next: 'fx_04c'
  },

  fx_04c: {
    id: 'fx_04c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '公共频段上跳出两行书面指令。第一行来自联合护航群：写入授权属联合资产，按序列指令原位待机，重复，原位待机。第二行来自矿砂船队：外环船队按既有航路继续前进，请各舰保持射界净空。两行字并排挂在同一个屏幕上，方向正好相反。',
    next: 'fx_04d'
  },

  fx_04d: {
    id: 'fx_04d',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'ivna',
    text: "两条指令：本舰待机，过境船继续通行。我们夹在中间，动与不动都得有人解释。舰桥上现在开始记时间：每一条指令的到达时间、每一艘过境船的位置，全部写进日志。",
    next: 'fx_05'
  },

  fx_05: {
    id: 'fx_05',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'vester',
    text: "这里是灰塔观测局校准序列，首席观测员维斯特。渡鸦号，请原位停留四十分钟，保持无线电静默。我需要完整记录这次失效，会将交战排除在观测条件之外。四十分钟之后，这一段航道归你们谁都可以。",
    next: 'fx_06'
  },

  fx_06: {
    id: 'fx_06',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'player',
    text: '他在等对照组少一份记录。我们动，这段数据就作废；我们不动，那条送泵件的老船就得在没有路标的航道里开四十分钟。',
    next: 'fx_06b'
  },

  fx_06b: {
    id: 'fx_06b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: "主屏上换了一行来自联合护航群的书面指令：写入授权属联合资产，渡鸦号原位待机四十分钟，不得写入、不得公开记录。落款只登记到签发序列。",
    next: 'fx_06c'
  },

  fx_06c: {
    id: 'fx_06c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'ivna',
    text: '这一条我照原文抄进航海日志。我们照它做，或者不照它做，两种都要留下理由。你说哪一种，我就写哪一种，然后替这条船签字。',
    next: 'fx_07'
  },

  fx_07: {
    id: 'fx_07',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'doran',
    text: '灰鸢的挂架在拉了，左肩那块替换件我敲平了，能用。弹射位三号，气闸还有八分钟。要打就打快点，这条甲板经不起第二次超压。',
    next: 'fx_07a'
  },

  fx_07a: {
    id: 'fx_07a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '三号机库在减压。灰鸢从挂架上走下来，站到三号弹射位，左肩那块颜色不一样的替换板在维护灯下看着比别处旧。气闸的倒计时牌从八分钟开始走，地勤把最后两辆管车推进固定架。',
    next: 'fx_07b'
  },

  fx_07b: {
    id: 'fx_07b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'vera',
    text: '夜枭的侦测翼收着，挂点在清单上是空的，这一趟不带。探测臂的护罩我拆了，它要对着校准阵列录满全场。左机械手只做系索和回收，不碰别的。',
    next: 'fx_08'
  },

  fx_08: {
    id: 'fx_08',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '钥匙盒压在伊芙娜的战术台下面。盒子里没有驾驶舱，只有一块写入授权芯片、三段校样记录和一张签收单，呼号那一行还是签收那天写下的。',
    variants: [
      {
        requires: ['bridge_write_disabled'],
        text: "钥匙盒压在伊芙娜的战术台下面。盒盖敞着，芯片上那道切口还在：归港那次切开之后，桥只能读，不能写。要重开写入，得先重做一块，工期还得等铎兰拆开插座后才能确定。"
      },
      {
        requires: ['key_returned'],
        text: '钥匙盒压在伊芙娜的战术台下面。第三格空着，签收单在盒盖里侧：写入授权已经回到联合序列，渡鸦号手上只剩读的权限和三段校样记录。'
      },
      {
        requires: ['key_kept'],
        text: '钥匙盒压在伊芙娜的战术台下面。签收单没有签，第三格还塞着那块芯片，条款第三条在纸上仍然是未完成。'
      }
    ],
    next: 'fx_09'
  },

  fx_09: {
    id: 'fx_09',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '赤垣的一艘矿砂船先动了。它把船头横到联合射界和货船之间，姿态很难看，但确实挡住了。联合的拦截屏立刻亮起推进器；与此同时，三号锚标的记忆区开始接收第一段写入。',
    next: 'fx_10'
  },

  fx_10: {
    id: 'fx_10',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'serious',
    tone: 'combat',
    speaker: 'vera',
    text: '夜枭看见测距了：他们把这一段锚标改成一个空值，等于把这段路从图上抹掉。抹掉以后，还在里头的船要自己找路。探测臂在录，只录不发。',
    next: 'fx_11'
  },

  fx_11: {
    id: 'fx_11',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'ivna',
    text: '渡鸦号，位置给你了。站进联合的队列，就是替联合把锚标收回去；站到矿站那边，我们的舷侧要挨打；给灰塔让窗口，就得先给他们东西；退出去，三边一起得罪。你要哪个。',
    next: 'fx_choice_side'
  },

  fx_choice_side: {
    id: 'fx_choice_side',
    kind: 'choice',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '三条航道的灯都亮着。谁先动，谁就先承认自己想要哪一条。',
    choices: [
      {
        id: 'fx_side_concord',
        label: '把渡鸦号拉回联合队列，替联合守住主锚线。',
        next: 'fx_12',
        reaction: '渡鸦号重新编进联合的护航序列，舷侧还留着褪色的旧编号，队列里的人认得它。作为交换，拦截屏给矿砂船让出一条六分钟宽的缝——六分钟之后，舰队按自己的表走。伊芙娜把这条缝的起止时间抄在战术台的便签上。',
        effects: [
          { type: 'flag', key: 'fx_side_concord', value: true },
          { type: 'standing', who: 'concord', amount: 1 },
          { type: 'trust', who: 'ivna', amount: 1 }
        ]
      },
      {
        id: 'fx_side_scarlet',
        label: '把船横在联合射界和矿站货船之间。',
        next: 'fx_12',
        reaction: "渡鸦号抢在矿砂船前面占住那段空档。联合的拦截屏把测距打在你身上，三号舷侧装甲的温度开始往上走。矿砂船立即转发渡鸦号的位置，后面的船一条条跟了上来。",
        effects: [
          { type: 'flag', key: 'fx_side_scarlet', value: true },
          { type: 'standing', who: 'scarlet', amount: 1 },
          { type: 'trust', who: 'doran', amount: 1 }
        ]
      },
      {
        id: 'fx_side_spire',
        label: '给灰塔让出观测窗口，先把他手里的账本摊开。',
        next: 'fx_12',
        reaction: '诺瓦把校准队列的拷贝推上公共信道，补给艇停了一拍才回应。观测窗口开了四十秒，够阵列把这一段的校验值重算一遍，也够三边都看清他们要抹掉的是哪一段。',
        effects: [
          { type: 'flag', key: 'fx_side_spire', value: true },
          { type: 'standing', who: 'spire', amount: 1 },
          { type: 'trust', who: 'nova', amount: 1 }
        ]
      },
      {
        id: 'fx_side_ship',
        label: "退到锚地外侧，保持独立航位，先听三边说明条件。",
        next: 'fx_12',
        reaction: "渡鸦号把船退到锚标阵列外侧，三段推进环熄到怠速。三边的频道同时安静了几秒，然后是三个不同的声音一起要求解释。薇拉在二号位把探测臂转过来，对着三边各扫了一遍，把三组距离依次送到主屏上。",
        effects: [
          { type: 'flag', key: 'fx_side_ship', value: true },
          { type: 'trust', who: 'vera', amount: 1 }
        ]
      }
    ]
  },

  fx_12: {
    id: 'fx_12',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: "三边的距离都拉开了半格，锚标阵列表面的灯还亮着。过境的船一条一条往前走，队列只保留简短的过点信号。",
    variants: [
      {
        requires: ['fx_side_concord'],
        text: '联合的队列排在你前面，矿砂船从那条六分钟的缝里一条一条挤过来，第三艘的货架上绑着泵件。灰塔的补给艇把校准功率压回原档，但没有停。'
      },
      {
        requires: ['fx_side_scarlet'],
        text: '矿砂船跟着渡鸦号的船尾走，联合的拦截屏把距离保持在射程边缘。灰塔把校准功率降了一档，序列没有停——他们在等你先犯错。'
      },
      {
        requires: ['fx_side_spire'],
        text: '观测窗口的四十秒用完，三边都拿到了同一份校验值。联合的队列往前压了半格，矿砂船开始往航道外侧挪。灰塔把校准序列挂起，没有取消。'
      },
      {
        requires: ['fx_side_ship'],
        text: "三边都退了半格，谁都不愿意在渡鸦号的记录仪前面先开火。锚标阵列外侧出现一段暂时开放的空档，过境的船一条一条从里面过去。"
      }
    ],
    next: 'fx_12a'
  },

  fx_12a: {
    id: 'fx_12a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '三边各回了一行字，都是写给记录仪的：联合要求渡鸦号报出当前站位与授权状态；矿站要求各舰保持射界净空，船队继续走；灰塔要求一个明确的对接时间。三条字的到达时间被舰桥记在同一页上。',
    next: 'fx_13'
  },

  fx_13: {
    id: 'fx_13',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '三边都在看渡鸦号，那就把会开起来。十二分钟后，作战会议室，请三方各派一个能签字的人。谁要动，先跟我们说一声。',
    next: 'fx_14'
  },

  fx_14: {
    id: 'fx_14',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '三条回执在七分钟内到齐，措辞各不相同，意思一样：他们都会来，但都不会空手来。会议室长桌上的导航图被摆成三色，航道图上有一段是灰的。',
    next: 'fx_15'
  },

  // ==========================================================================
  // 第二幕 · 桥与锚点的处置方案（commandroom / duty）
  // ==========================================================================

  fx_15: {
    id: 'fx_15',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: "你拉开椅子坐下。长桌固定在地板上，桌边能感觉到泵机的震动。投影上三条频道各留了一行要求：联合要渡鸦号交出写入授权与记录，由序列保管，航道恢复配给表；赤垣要锚点的维护权回矿站，外环自己出人守；灰塔要一个继续校准的窗口，用维斯特的原始数据换。三边都同意先不打，时间是四十分钟。",
    next: 'fx_15b'
  },

  fx_15b: {
    id: 'fx_15b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '桌上摊开的东西一共四样：过境队列一份、矿站排程一份、三段校样的校验值一份，还有钥匙盒。投影把第七段标成灰色，旁边两行备注：写入已挂起、接管方未定。',
    next: 'fx_15e'
  },

  fx_15e: {
    id: 'fx_15e',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '改写一段锚点的做法不复杂，难的是谁有资格按下去：接上接驳座，读完整段校验值，再把新的值写回去，全程四十分钟，链上的每一格都记一次。写完之后，那一段航道的数据在路径审计里会多出一行经手记录，抹不掉。',
    next: 'fx_16'
  },

  fx_16: {
    id: 'fx_16',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'ivna',
    text: "驾驶舱已经按清单移交。今天讨论的范围，我先核一遍。我们现在真正拿着的东西只有三样：钥匙盒里的写入授权和记录、三段校样、还有诺瓦那份校准队列的拷贝。三边的要价都是冲着这三样来的。",
    variants: [
      {
        requires: ['out_ch1_concord'],
        text: '那口驾驶舱在霜环锚地就封存归档了，舱体不在我们手上，清单和封条都在档案处。我们拿得出手的只有写入授权、三段校样和校准队列的拷贝。'
      },
      {
        requires: ['out_ch1_spire'],
        text: '那口驾驶舱的数据链当时交给了灰塔，舱体按霜环锚地那份清单走，不在我们手上。眼下能办事的只有钥匙盒、三段校样和诺瓦那份队列拷贝。'
      },
      {
        requires: ['out_ch1_neutral'],
        text: '那口驾驶舱在霜环锚地就封在渡鸦号自己的货舱里，封条没动过，清单跟那天一样。我们现在拿着的还有三样：钥匙盒里的写入授权和记录、三段校样、还有诺瓦那份校准队列的拷贝。'
      },
      {
        requires: ['out_ch1_scarlet'],
        text: "那口驾驶舱按霜环锚地那次的处置留在船上，封条完好，保管清单也核对过了。我们现在真正拿来办事的是另外三样：钥匙盒里的写入授权和记录、三段校样、还有诺瓦那份校准队列的拷贝。"
      }
    ],
    next: 'fx_16a'
  },

  fx_16a: {
    id: 'fx_16a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'doran',
    text: '盒子我开过了，三格：第一格写入授权芯片，第二格三段校样，第三格空着。芯脚没锈，插座也是好的。上次拆掉的是外面那只接收机，夜枭右腿上的壳子还是原壳，这一点别记错。',
    next: 'fx_16b'
  },

  fx_16b: {
    id: 'fx_16b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'nova',
    text: '碎片只有一段，是从死航线那次抄下来的。少了的两段得在窗口里现补，代价是多花十二分钟，而且要用掉一块别人替不上的备件。',
    variants: [
      {
        requires: ['anchor_key_fragment_1', 'anchor_key_fragment_2', 'anchor_key_fragment_3'],
        text: '三段碎片齐了：死航线一段、行星地表一段、静默壁一段。三段的校验值能对上，谁想改口，得先改这三段里的两段。'
      },
      {
        requires: ['anchor_key_fragment_2', 'anchor_key_fragment_3'],
        text: '碎片有两段：行星地表一段、静默壁一段。缺的那一段在死航线里，窗口里现补要多花十二分钟，备件也要多算一件。'
      },
      {
        requires: ['anchor_key_fragment_1', 'anchor_key_fragment_2'],
        text: '碎片有两段：死航线一段、行星地表一段。缺的是静默壁那一段，逐字对表能把缺口缩到六分钟，剩下的要靠阵列自己报。'
      }
    ],
    next: 'fx_17'
  },

  fx_17: {
    id: 'fx_17',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'doran',
    text: '芯片是好的，插座也是好的。写一次，链上就留一次痕，联合的路径审计三天之内能追到这条船；要重开写入，先得看那一道切口。夜枭右腿那只外壳还是原壳，里面早就空了，这一层不用再动。',
    variants: [
      {
        requires: ['bridge_write_disabled'],
        text: '芯片切开了，针脚断在里面，谁按都没用。要重开写入，得重做一块：四十分钟，拆二号泵的备用控制板，做完这条船的最大加速度掉一档，还得有人在接驳座上坐满整段测试。夜枭右腿那只外壳是空的，不用再动。'
      }
    ],
    next: 'fx_17a'
  },

  fx_17a: {
    id: 'fx_17a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "接驳座我坐过。接通以后，航道数据直接从后颈接口进入：四十分钟里你会知道每一段航线的水温、每一个锚标的电量，然后手会抖一刻钟，耳朵里嗡一路。这些反应我都经历过，先告诉你们，好安排后面的看护。",
    next: 'fx_18'
  },

  fx_18: {
    id: 'fx_18',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'nova',
    text: "三种处置我都算过。公开最便宜也最慢：数据发出去，三边都拿到，能相互核对原文。封存最快，但钥匙不在我们手里，以后这艘船每一次过锚点都要报备。拆解最干净，代价是这条航道以后出了事，我们连解释的工具都没有。",
    next: 'fx_18a'
  },

  fx_18a: {
    id: 'fx_18a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'doran',
    text: '材料我报一遍：一块控制板、一个封座、两把切割钳、一组备用针。用掉控制板，二号泵就少一层保险；用掉备用针，这一年里我们不能再修第三次。清单我签，谁要改，自己来跟我说。',
    next: 'fx_18b'
  },

  fx_18b: {
    id: 'fx_18b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: '被写过的那一段，在别人的表上会显示成一次维护，不显示是谁写的。这就是维斯特要的东西：他不需要署名，他需要那一段按他的值亮一整个冬天。我们把经手记录留在审计里，他那一套就不成立了。',
    next: 'fx_19'
  },

  fx_19: {
    id: 'fx_19',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'vera',
    text: "夜枭右腿那只外壳我复查过三次，里面是空的，插座断着，这一层不会有人再拿它当通道。我不确定该选哪一种。我要说的是另一件事：请在执行前告诉我具体方案，我要参与确认。",
    next: 'fx_20'
  },

  fx_20: {
    id: 'fx_20',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "如果要写，我坐进去，这一段我来跟。条件两条：条款的事在这间屋子里答完，由我本人签执行栏，她的意见另外记。你们同意，我就去换衣服；有异议就先谈妥，盒子等谈完再开。",
    next: 'fx_20a'
  },

  fx_20a: {
    id: 'fx_20a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: "口头答复以后，还得落实到三份签字文件上。移交单我按三份做：他们各拿一份，船上留一份。谁不签，谁就不算答复，这一条写在我们自己的记录里。",
    next: 'fx_20b'
  },

  fx_20b: {
    id: 'fx_20b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '第七段要是就这么灰着，三〇七号站的泵房就得停一台，水要按吨省着用。这件事最后得有人去跟矿站说清楚，说明是哪一个决定让他们少四百吨水。谁去说。',
    next: 'fx_20c'
  },

  fx_20c: {
    id: 'fx_20c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'warm',
    tone: 'duty',
    speaker: 'doran',
    text: '真要是灰着，我就走影子线路，把两台泵自己拖过去，慢是慢一点，晚九天就晚九天。线路我熟，货架我问矿站借，回来的时候箱子空着。这一趟我不问舰上要工钱。',
    next: 'fx_20d'
  },

  fx_20d: {
    id: 'fx_20d',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'nova',
    text: '你拖过去，明年还有人改这一段。记录留在外面，下一次有人想动第七段，得先改三份公开的校验值——那个比拖两台泵难。我不反对你送货，我只反对把记录压回船上当私事。',
    next: 'fx_20e'
  },

  fx_20e: {
    id: 'fx_20e',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'vera',
    text: "我问一件具体的事：如果把写入口封住，锚标以后坏了，谁来修。修的人要不要会读那三段校样。要是维护队还读不懂，这一段迟早还得交回给塔。",
    next: 'fx_20f'
  },

  fx_20f: {
    id: 'fx_20f',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "封存以后的维护也得安排。矿站的维护队可以学读，读的权限我们能写进移交单。真要有人学，我教；教不完的班次从我的休息里扣。这一条你写进去，诺瓦。",
    next: 'fx_20g'
  },

  fx_20g: {
    id: 'fx_20g',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'warm',
    tone: 'duty',
    speaker: 'doran',
    text: '外环的站都一样，冬天靠这一段运水、运滤网、运煤。我算过，停一台泵，一个站一天少四百吨水，九天以后就要按人头发。我认得几个管泵的，真出事他们不会写信，他们只会把出水阀关小一半。',
    next: 'fx_21'
  },

  fx_21: {
    id: 'fx_21',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'player',
    text: '钥匙盒在桌上开着。写入权限只有一次机会：用掉就没有第二次，封存就是交给别人，拆了就是永远不用。三条路都要有人签字，签字的人得坐在这间屋子里。',
    next: 'fx_choice_bridge'
  },

  fx_choice_bridge: {
    id: 'fx_choice_bridge',
    kind: 'choice',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '投影上那一段灰色的航道还在闪。三边的回执都挂着同一个问题：你们打算怎么处置桥。',
    choices: [
      {
        id: 'fx_bridge_onewrite',
        label: '用一次：把这一段锚标改回原值，然后再谈归属。',
        next: 'fx_22',
        reaction: '伊芙娜把钥匙盒拉到桌子中间，报出开始时间。铎兰的工单写到第二行：先做写入，再做封存，顺序不许颠倒。诺瓦在队列里加了一条校验，写完之后三边都能看见这一段被改回来过。',
        effects: [
          { type: 'flag', key: 'fx_bridge_onewrite', value: true },
          // 一次写入在这里被真正用掉：授权烧毁、写入口封上，之后只剩只读与记录。
          // 这个后果一路带到终章的结局文字（ending_concord_final / ending_together /
          // ending_reset 的变体都按它分流），不靠静默清旗标把代价抹平。
          { type: 'flag', key: 'bridge_write_consumed', value: true },
          { type: 'flag', key: 'fx_ivna_seat', value: true }
        ]
      },
      {
        id: 'fx_bridge_seal',
        label: '封存：写入口封死，只留读的权限和完整的记录。',
        next: 'fx_22',
        reaction: '铎兰把封座的尺寸量了两遍，写进工单。伊芙娜在记录上签了第一栏，写明授权封存、钥匙随记录移交。会议室的投影上，那一段灰色暂时还是灰的，但至少不再有人能随手改它。',
        effects: [
          { type: 'flag', key: 'fx_bridge_seal', value: true },
          { type: 'standing', who: 'concord', amount: 1 }
        ]
      },
      {
        id: 'fx_bridge_public',
        label: '公开：把校准方法和全部原始记录发给三方和矿站。',
        next: 'fx_22',
        reaction: '诺瓦把数据包拆成三份，一份给联合的路径审计，一份给矿站的登记处，一份挂在灰塔自己的公开摘要上。她做完以后才说，这样一来渡鸦号的每一次读数也都在别人眼里了。',
        effects: [
          { type: 'flag', key: 'fx_bridge_public', value: true },
          { type: 'flag', key: 'fx_records_public', value: true }
        ]
      },
      {
        id: 'fx_bridge_dismantle',
        label: '拆解：把写入口物理拆掉，零件分开保管。',
        next: 'fx_22',
        reaction: '铎兰在工单第一行写的是切割位置，第二行写的是不许动二号泵。他写完抬头看了一眼钥匙盒，说这条船以后只能读，谁想改航道就得去找别人。',
        effects: [
          { type: 'flag', key: 'fx_bridge_dismantle', value: true }
        ]
      }
    ]
  },

  fx_22: {
    id: 'fx_22',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '四十分钟的窗口从这一分钟开始算。会议室里的人各自去做自己那一份：铎兰下机库取工具，诺瓦拆数据包，伊芙娜去换接驳用的衣服。',
    variants: [
      {
        requires: ['fx_bridge_onewrite'],
        text: '四十分钟的窗口从这一分钟开始算。铎兰去机库取切割和封座两套工具，顺便看二号泵的备用控制板；诺瓦拆数据包；伊芙娜去换接驳用的衣服。'
      },
      {
        requires: ['fx_bridge_public'],
        text: '四十分钟的窗口从这一分钟开始算。诺瓦坐在投影前拆数据包，先把三段校样的校验值对齐；铎兰在旁边等着封装，他说发出去的东西得先有一份留在船上。'
      },
      {
        requires: ['fx_bridge_dismantle'],
        text: '四十分钟的窗口从这一分钟开始算。铎兰先去反应堆舱断电，再下机库取切割钳；伊芙娜在记录上写明这一段写入口由船方自行拆除。'
      }
    ],
    next: 'fx_23'
  },

  fx_23: {
    id: 'fx_23',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'doran',
    text: "工具我分两堆：一堆切割，一堆封座，按标记分别取用，用完放回原处。二号泵的备用控制板在第三格，拆下来以后这条船上就没有第二块了，我不打算偷偷留一份。",
    next: 'fx_24'
  },

  fx_24: {
    id: 'fx_24',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: '记录按三份走：船上留原始件，联合的路径审计拿校验值，矿站拿能读懂的那一份。灰塔那边只给已经被他们自己采过的读数，别的一行都不多给。谁想在记录里加话，先写名字。',
    next: 'fx_25'
  },

  fx_25: {
    id: 'fx_25',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'vera',
    text: '我申请飞一次测距。执行之前录一遍，执行之后再录一遍，两段校验值放在同一张卡上。这样不管最后是谁拿着航道，这一段被改回来过、或者被封死过，都是能查的。',
    next: 'fx_26'
  },

  fx_26: {
    id: 'fx_26',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '批准。夜枭在二号位待命，灰鸢在弹射位压着。执行窗口之前还有一件事：安全处的封包在外面等着，先把它开完，我们不带着这个问题去动桥。',
    next: 'fx_26a'
  },

  fx_26a: {
    id: 'fx_26a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '记录本翻到新的一页，四行标题空着。铎兰把工具盒挪到桌子底下，免得挡住投影；诺瓦把三条信原样贴进记录；薇拉把自己的维护日志放在桌角，没有翻开。',
    next: 'fx_27'
  },

  // --------------------------------------------------------------------------
  // 基廷与第五条：击杀令的最终答复（commandroom / duty）
  // --------------------------------------------------------------------------

  fx_27: {
    id: 'fx_27',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '安全处的交通艇从联合补给舰那侧过来，靠上渡鸦号的三号泊位。来的人只有一个，随身的只有一只灰色硬壳夹。',
    variants: [
      {
        requires: ['keating_resolved'],
        text: '交通艇靠在三号泊位，上来的人拎着同一只灰色硬壳夹；上一次在归港，文件上已经有了一栏答复，他这次是来做完那一栏。'
      },
      {
        requires: ['met_keating'],
        text: '来的人只有一个：穆尔·基廷，深蓝高领的制服，黑手套，手里那只灰色硬壳夹上一次摆在归港的会议室里。交通艇靠上三号泊位以后没有熄火。'
      }
    ],
    next: 'fx_27a'
  },

  fx_27a: {
    id: 'fx_27a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '文件夹里一共四页：条款第五条、第七号原型处置令、一张调阅记录、一张空白答复页。调阅记录上写着这条令过去六个月被谁调过：三次是安全处自己，一次是联合的路径审计，还有一次没有署名。',
    next: 'fx_28'
  },

  fx_28: {
    id: 'fx_28',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '他没有坐。文件夹放在桌上，翻开的那一页是条款第五条和第七号原型处置令，落款日期是第一年之前，执行人一栏写着辅机序列二期 AU-11，后面盖着一个没有作废的章。',
    next: 'fx_28b'
  },

  fx_28b: {
    id: 'fx_28b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '空白答复页上有两栏：接受、拒绝，下面一行是执行时间，最下面一行是执行人签名。纸的右下角有复写痕，上一张表写过什么看不出来，只能看出这张表在别处已经被用过很多次。',
    next: 'fx_29'
  },

  fx_29: {
    id: 'fx_29',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'keating',
    text: '我不需要你们现在交人，也不需要你们开枪。我需要一条记录：接受，或者拒绝。两条都会被归档。执行时间写在封包上，零点之前没有答复，系统按原条款走，执行人签名栏会自动落在 AU-11 名下。',
    next: 'fx_30'
  },

  fx_30: {
    id: 'fx_30',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'keating',
    text: '这一笔你们在归港看过一遍：回收一台样本，从应急科目里换一笔维修配额，按吨位算，够这条船进一次大修。你们把编号留下，这一笔就成立；你们把编号拿走，责任要挂在我的名字下面。两种我都做过。',
    next: 'fx_30a'
  },

  fx_30a: {
    id: 'fx_30a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'keating',
    text: '你们觉得这是在做买卖，条例管这个叫程序。条例第十二条：样本编号随舰编制变更时由原单位处置。程序只认两样东西——签字和日期。你们给我其中一个，我就有东西带回去交差。',
    next: 'fx_31'
  },

  fx_31: {
    id: 'fx_31',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '编号是我的。要写，写在这张桌子上，当着四个人的面写。它不是货物，我也不是样本。',
    next: 'fx_31a'
  },

  fx_31a: {
    id: 'fx_31a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: "这句话落下后，记录员抬手示意稍等，补完了最后几个字。基廷的手指在文件夹边缘停了半秒，然后移开。投影上第七段的灰色还在闪，两位记录员的笔都在纸上，谁说了什么、谁没有说，都写在同一个时间轴上。",
    next: 'fx_32'
  },

  fx_32: {
    id: 'fx_32',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'vera',
    text: '执行人那一栏写的是 AU-11。上一次你们把这张纸推给我的时候，我没有签。这一次换我自己说：我不签。',
    variants: [
      {
        requires: ['vera_word_refused'],
        text: '执行人那一栏写的是 AU-11。校准舱里那一次我等了很久，才说出一个不要，你们也听见了。这一次不用等：我不签。'
      },
      {
        requires: ['vera_word_used'],
        text: '执行人那一栏写的是 AU-11。那一次你们念过口令，我答了收到。口令还在我这儿管用，签名不管用——我不签。'
      }
    ],
    next: 'fx_33'
  },

  fx_33: {
    id: 'fx_33',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'keating',
    text: '拒绝也是答复，而且比接受值钱：接受只需要一个编号，拒绝要有人负责。你们有三条路。第一条，让我当场把第五条作废，代价是我回到安全处替这艘船解释到明年。第二条，把条款全文和签署链公开，我不会拦。第三条，编号进册，条款无限期挂起，代价还在，只是不再落刀。',
    next: 'fx_33a'
  },

  fx_33a: {
    id: 'fx_33a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "编号我留着。这是我在联合里唯一留下的记录，由我自己保管。维修配额另谈。条款怎么结，你们在这张桌子上谈；编号的事我自己答，答完写在我的那一栏。",
    next: 'fx_34'
  },

  fx_34: {
    id: 'fx_34',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'player',
    text: '三边都在看这一段航道，纸上的事也要在这间屋子里完。我们答完最后一条，才去动钥匙盒。',
    next: 'fx_choice_clause'
  },

  fx_choice_clause: {
    id: 'fx_choice_clause',
    kind: 'choice',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'narration',
    text: '灰色硬壳夹摊在桌上，第五条那一页没有翻过去。窗外三边的锚标灯隔着舷窗，在纸上排成一串冷白点。',
    choices: [
      {
        id: 'fx_clause_revoke',
        label: '当场作废：让基廷在桌上把第五条划掉，编号留在册上。',
        next: 'fx_35',
        reaction: '基廷把笔从口袋里取出来，在那一条上划了两道，写上当天的日期和自己的编号。伊芙娜在旁边看着他写完，然后把那一页翻过来朝上放好。走廊里的广播正好报了三号泊位的潮汐表。',
        effects: [
          { type: 'flag', key: 'fx_clause_revoke', value: true },
          { type: 'flag', key: 'keating_resolved', value: true },
          { type: 'standing', who: 'concord', amount: 1 }
        ]
      },
      {
        id: 'fx_clause_publish',
        label: '公开：把条款全文、签署链和档案操作发给三方与矿站。',
        next: 'fx_35',
        reaction: '诺瓦把那一页拆成三段扫描，标注了每一栏的日期和经手人。基廷没有伸手拦，只把空了的文件夹合上。数据发出后九分钟，联合的路径审计回了一条收条，矿站那边也回了。',
        effects: [
          { type: 'flag', key: 'fx_clause_publish', value: true },
          { type: 'flag', key: 'keating_resolved', value: true },
          { type: 'standing', who: 'spire', amount: 1 }
        ]
      },
      {
        id: 'fx_clause_trade',
        label: '交易：编号进册，条款无限期挂起，代价不再落刀。',
        next: 'fx_35',
        reaction: '基廷在登记页上写了编号、吨位和一句挂起，写得很慢。他写完把笔收回去，说这一条会跟着这艘船，直到有人愿意再翻出来。伊芙娜没有看那一页，她把编号念了一遍，确认写着的是她自己。',
        effects: [
          { type: 'flag', key: 'fx_clause_trade', value: true },
          { type: 'flag', key: 'keating_resolved', value: true },
          { type: 'flag', key: 'ivna_reported', value: true }
        ]
      }
    ]
  },

  fx_35: {
    id: 'fx_35',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'keating',
    text: '记录做完了。执行时间栏那边我会去改，改完以后按编号归档，谁要查都得写申请。'
    ,
    variants: [
      {
        requires: ['fx_clause_revoke'],
        text: '第五条作废，我签的字，回安全处要写的说明我自己写。执行时间栏那边我现在就去改，改完按编号归档。'
      },
      {
        requires: ['fx_clause_publish'],
        text: '你们公开，我就照着公开的规矩办：那一页我已经交了，谁要查都行。执行时间栏那边天亮之前会清空，清空记录也会一起公开。'
      },
      {
        requires: ['fx_clause_trade'],
        text: '编号进册，条款挂起，这一页今天到此为止。以后什么时候翻出来，翻的人要自己负责。'
      }
    ],
    next: 'fx_36'
  },

  fx_36: {
    id: 'fx_36',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'ivna',
    text: '记录我收下了。基廷少校，回去的路上把封包改了，零点那一条不许留在任何一个人的名字后面。',
    next: 'fx_37'
  },

  fx_37: {
    id: 'fx_37',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '他把文件夹合上，扣扣很轻。走出会议室之前，他在门口停了一下，看了一眼投影上那段灰色的航道，没有评。交通艇离开三号泊位的时候，走廊里的钟走过一刻钟。',
    variants: [
      {
        requires: ['keating_resolved'],
        text: "他把文件夹合上，扣扣很轻。走出会议室之前，他在门口停了一下，看了一眼投影上那段灰色的航道，随后压下门把，离开了。交通艇离开三号泊位的时候，走廊里的钟走过一刻钟。"
      }
    ],
    next: 'fx_37a'
  },

  fx_37a: {
    id: 'fx_37a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '安全处的回执是一张复写纸，一式两份，一份钉进渡鸦号的航次档案，一份他带走。交通艇解开缆绳的时候，联合的护航群正在把队形收拢，三号泊位的指示灯从绿转黄。',
    next: 'fx_38'
  },

  fx_38: {
    id: 'fx_38',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'vera',
    text: "那张纸收起来了。我记下来了：第五条今天在这间屋子里结束，签字栏记着这次答复人的名字。",
    next: 'fx_39'
  },

  fx_39: {
    id: 'fx_39',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: '校准阵列还没有停。维斯特的队列刚才又往前挂了十九秒，他等的是我们会不会因为这条纸停手。窗口还剩二十九分钟，这是最后一次提醒。',
    next: 'fx_39a'
  },

  fx_39a: {
    id: 'fx_39a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '伊芙娜把记录本翻到新的一页，四行标题写好，笔递到桌子中间。她说这一页要跟着航次档案走：执行之前谁站在哪里，谁说过什么，都写下来。',
    next: 'fx_39b'
  },

  fx_39b: {
    id: 'fx_39b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '从右边开始。铎兰先说硬件，诺瓦说记录，薇拉说飞行，我说执行。谁有不同意见现在讲，讲完我合本子，之后就按本子办。',
    next: 'fx_39c'
  },

  fx_39c: {
    id: 'fx_39c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'doran',
    text: "硬件归我：断电、断针、封座，顺序不换。工具箱第二格我还是自己开，里头的东西这趟全在船上，卖不卖由舰上决定，我不私留。条件一条——夜枭原壳保留完整，取料前先向我确认位置。",
    next: 'fx_39d'
  },

  fx_39d: {
    id: 'fx_39d',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'nova',
    text: '记录归我：三份移交单、一份封条、一份附录，结论栏我自己写。如果会议决定压着不发，我要在本子上写清楚我不同意压，押日期和编号。这一点你们现在就可以反驳我。',
    next: 'fx_39e'
  },

  fx_39e: {
    id: 'fx_39e',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'vera',
    text: '飞行归我：夜枭飞测距那一趟，全程只录不发，回来把两段校验值交给诺瓦。条件一条——执行之前告诉我一次，执行之后别再替我解释。要解释的我自己说。',
    next: 'fx_39f'
  },

  fx_39f: {
    id: 'fx_39f',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '执行归我。记录本合上了，谁改主意，先来划掉自己那一行，再当面说。现在各就位，窗口还剩二十七分钟。',
    next: 'fx_39g'
  },

  fx_39g: {
    id: 'fx_39g',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'commandroom',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '四行字写完，本子合上，压在镇纸下面。投影上的灰色航道照旧在闪，桌子另一头有人把工具盒提起来，椅子在地板上挪了半格。门外走廊里，机库的作业灯已经亮到第三排。',
    next: 'fx_40'
  },

  // ==========================================================================
  // 第三幕 · 对照组被当场拆穿（battle / combat）
  // ==========================================================================

  fx_40: {
    id: 'fx_40',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '校准阵列提前十一分钟动了。补给艇尾部那圈天线转到正面，三号锚标的记忆区开始接收整段写入。过境船还在段里，最前面的一条已经走到一半。',
    next: 'fx_40a'
  },

  fx_40a: {
    id: 'fx_40a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '写入队列在屏幕上往下走，第一格的进度已经到七成。那条送泵件的老船在第七段里走了大半，船尾的航行灯在测距里一明一暗。阵列的放电功率读数从一千八跳到两千四。',
    next: 'fx_41'
  },

  fx_41: {
    id: 'fx_41',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'serious',
    tone: 'combat',
    speaker: 'nova',
    text: '我不发公共信道，我发给阵列自己的值班台。队列表、四十四号令的印章编号、还有死航线残页上那两个号码，我一起发。你们问一问你们的首席观测员，对照组缺的那一条到底是哪一条船。',
    variants: [
      {
        requires: ['nova_report_public'],
        text: '我发公共信道，也发阵列自己的值班台。公开摘要已经出去两天了，队列表、四十四号令的印章编号、死航线残页上那两个号码都在里面。你们值班台现在可以自己核一遍。'
      },
      {
        requires: ['vester_control_group_exposed'],
        text: '静默壁带回来的那几张纸我全在手上：四十四号令的印章编号、死航线残页上的两个号码，还有缺的那一条对照组。我不发公共信道，我发给阵列自己的值班台，让他们自己核。'
      }
    ],
    next: 'fx_41a'
  },

  fx_41a: {
    id: 'fx_41a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '阵列的值班台把这条广播重放了两遍。补给艇的艇艏转过来对着渡鸦号，主桅上的校准灯改成常亮。队列表往前走，那条老货船已经过了第七段的三分之二，货架上的绑带在测距里一条一条数得清。',
    next: 'fx_42'
  },

  fx_42: {
    id: 'fx_42',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'serious',
    tone: 'combat',
    speaker: 'vester',
    text: '渡鸦号，你把我整份数据都毁了。对照组少一段，实验组就没有意义，我三十七个月的窗口只剩这一条路。我给你最后一次机会：撤销那条广播，让序列走完。',
    next: 'fx_43'
  },

  fx_43: {
    id: 'fx_43',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '阵列值班台沉默了几十秒。然后值班观测员在同一个频段上把过境名单念了一遍，四十一艘船，念到那条送泵件的老船时停了一下。他报了自己的编号，按观测局的规程改了第二道签名：段内有船，序列不成立。',
    next: 'fx_43a'
  },

  fx_43a: {
    id: 'fx_43a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '序列灯刚灭一半，补给艇上又亮起一道比值班观测员更高的指令灯。联合的拦截屏把测距打在补给艇身上，没有开火。三边的频道里同时有人报出同一个坐标：三号锚标。',
    next: 'fx_44'
  },

  fx_44: {
    id: 'fx_44',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '补给艇的序列灯灭了一半，又在三秒后亮回来——有人从艇上直接给阵列下了第二条指令，用的是首席观测员的权限。紧接着，沿着锚标牵引索的走向，一道切割装药的点火被记录在两台机体的测距里。',
    next: 'fx_44a'
  },

  fx_44a: {
    id: 'fx_44a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '灰鸢从三号弹射位出去，夜枭跟在一百二十米后面。两台机贴着锚标阵列的外缘绕过去，主缆在测距里像一根绷紧的线。阵列的放电功率还在往上走，索上的电荷读数是两千七百。',
    next: 'fx_45'
  },

  fx_45: {
    id: 'fx_45',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'ivna',
    text: '灰鸢去挡那根索，夜枭录全过程。武器授权两个人：我，和舰桥上第二个签名字的人。只许打装药，不许打人。三号舷侧装甲别去蹭牵引索。',
    next: 'fx_45a'
  },

  fx_45a: {
    id: 'fx_45a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'ivna',
    text: '灰鸢，三号弹射位，放。夜枭跟在灰鸢后面一百二十米，别进射界。炮位别用主炮，用近防。授权：我，和第二个人。',
    next: 'fx_46'
  },

  fx_46: {
    id: 'fx_46',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'combat',
    speaker: 'player',
    text: '灰鸢挡第一下，挡不住就退；夜枭不许进射界，只许绕到索的背后录。分段指挥，谁先把人打下来谁负责。',
    next: 'fx_46a'
  },

  fx_46a: {
    id: 'fx_46a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'vera',
    text: '夜枭在灰鸢右侧后方，距离一百二十米，探测臂对着阵列。再近就会被碎片打到，我不进。灰鸢要是转了身，我跟着转，保持在他背光那一侧。',
    next: 'fx_47'
  },

  fx_47: {
    id: 'fx_47',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'serious',
    tone: 'combat',
    speaker: 'doran',
    text: "左肩那块是撞击面，我知道它要挨什么。挂钩我锁了两道，回来的时候自己开。回收索走三号舷侧外缘，和装甲拉开距离，那一片上个月刚补过漆。",
    next: 'fx_47a'
  },

  fx_47a: {
    id: 'fx_47a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '第一段装药在灰鸢的左前方起爆，碎片打在机体的护板上，溅出一片白点。灰鸢没有减速，他把左肩转到牵引索和阵列之间，给夜枭留出能看清全场的角度。',
    next: 'fx_48'
  },

  fx_48: {
    id: 'fx_48',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '装药在牵引索上炸开，灰鸢把左肩横过去，整台机被推得转了半圈，那块颜色不一样的替换板凹进去一个手掌深。副索断了，主缆还在。夜枭从索的背后贴过去，探测臂把点火到断裂的全部读数录了下来。',
    next: 'fx_48a'
  },

  fx_48a: {
    id: 'fx_48a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '第二段装药在半秒后炸开，灰鸢把左肩顶上去，整台机被推开十几米，左肩的替换板凹进去一个手掌深，气密没破。副索断了，主缆还挂着，缆上的张力把两台机拉成一条斜线。',
    next: 'fx_48b'
  },

  fx_48b: {
    id: 'fx_48b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'serious',
    tone: 'combat',
    speaker: 'doran',
    text: "左肩那块本来就是替换件，凹下去的地方还能敲回来。挂钩锁还有一道没开，回收时沿索退回来，等锁完全打开再收缆。你要是把主缆拽断了，我拿工资赔都赔不起。",
    next: 'fx_49'
  },

  fx_49: {
    id: 'fx_49',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'serious',
    tone: 'combat',
    speaker: 'vera',
    text: '夜枭报告：副索断裂，主缆完好，三号锚标的记忆区没有掉。点火到断裂的读数录了三份，时间戳对得上。那条送泵件的老船已经走出这一段了，船尾的货架上绑的东西没掉。',
    next: 'fx_49a'
  },

  fx_49a: {
    id: 'fx_49a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '三号锚标的记忆区在两次放电之间稳住了，校验值回到队列开始前的那一档。阵列的值班台把这一段的状态标成挂起，挂起记录里附上了夜枭录下的两段读数。',
    next: 'fx_50'
  },

  fx_50: {
    id: 'fx_50',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '校准补给艇的序列灯全部熄了。值班观测员在公开频段上报出一条：序列中止，权限冻结，首席观测员随艇回塔复核。三条舰队频道里，只有联合的路径审计回了一个编号。',
    next: 'fx_51'
  },

  fx_51: {
    id: 'fx_51',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'vester',
    text: '你们以为这样就完了。对照组少一段，我还是会把整份数据写完，换一个仪器，换一条航道，换一个冬天。你们留着那份记录，等它哪天被人拿去当样本。',
    variants: [
      {
        requires: ['nova_report_public'],
        text: '你们已经把这一份发出去了。那我就照公开的规矩收尾：仪器归塔，方法归塔，这条失败记录我会亲自写完，署我的名字。'
      }
    ],
    next: 'fx_51a'
  },

  fx_52: {
    id: 'fx_52',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '补给艇把艇艏调回塔向，维斯特的名字在阵列名册上被改成待复核，值班观测员接了这一段的全部权限。灰鸢跟着回收索回到三号机库，左肩的替换板用手掌按了一下，弹回来一点。',
    next: 'fx_53'
  },

  fx_51a: {
    id: 'fx_51a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'battle',
    expression: 'neutral',
    tone: 'combat',
    speaker: 'narration',
    text: '补给艇解缆离位的时候，甲板上没有一个观测员出来送他。阵列名册上，维斯特那一栏后面多了两个字：待核。值班观测员把这一段权限接到自己名下，签了两个名字，一个是他的，一个是规程。',
    next: 'fx_52'
  },

  // ==========================================================================
  // 第四幕 · 桥的执行（reactor / duty）
  // ==========================================================================

  fx_53: {
    id: 'fx_53',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '反应堆舱的检修走道只够一个人侧身过，冷蓝的主回路在脚下嗡嗡响。接驳座在第三段干管旁边，坐垫还是旧的，扶手上有上一任使用者磨出来的亮痕。',
    next: 'fx_53a'
  },

  fx_53a: {
    id: 'fx_53a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '医疗包放在走道扶手边上，血压带和两支镇静剂摆在最上面。铎兰把工单第一行写死：现补缺失的那一段要多花十二分钟，时间从窗口里扣，不从别处借。',
    variants: [
      {
        requires: ['anchor_key_fragment_3'],
        text: "工具摆开以后，铎兰在工单第一行写死：三段碎片齐，写入按整段走，四十分钟里不留补段的时间。医疗包挂在走道扶手上，拉链朝外，随时可以取用。"
      }
    ],
    next: 'fx_54'
  },

  fx_54: {
    id: 'fx_54',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'doran',
    text: '顺序我定死：先断电，再断针，再压封座。中间谁都不许按第二下。这一段的干管上个月刚封过一遍，我认得每一颗螺丝的位置。',
    variants: [
      {
        requires: ['fx_bridge_onewrite'],
        text: '顺序我定死：先拆二号泵的备用控制板，再做芯片，再上接驳座测试，最后才写。中间谁都不许按第二下。写完封座，一样不少。'
      },
      {
        requires: ['fx_bridge_dismantle'],
        text: '顺序我定死：先断电，再断针，然后切割。切下来的零件按三份分，一份留船，两份交出去。中间谁都不许按第二下。'
      }
    ],
    next: 'fx_55'
  },

  fx_55: {
    id: 'fx_55',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '束带我扣两道。薇拉，你到走道外面去，别在这儿数数，也别看我。铎兰留在这儿。四十分钟里谁要找我，让他等。',
    next: 'fx_56'
  },

  fx_56: {
    id: 'fx_56',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'serious',
    tone: 'duty',
    speaker: 'vera',
    text: "我守在走道外面，负责把读数报给舰桥。你安心操作，这边交给我。",
    next: 'fx_56a'
  },

  fx_56a: {
    id: 'fx_56a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'vera',
    text: '读数我报给舰桥：主回路断到只剩照明，接驳座供电稳定，舱内温度十四度。医疗包在我手边，我站在走道外面，不进去。',
    next: 'fx_57'
  },

  fx_57: {
    id: 'fx_57',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '主回路断到只剩照明。铎兰把工具按顺序摆开，诺瓦在干管那头读校验值，伊芙娜坐进接驳座，扣上束带。第四十分钟的钟声从舱壁上传过来的时候，写入的进度条开始往前走。',
    variants: [
      {
        requires: ['fx_bridge_onewrite'],
        text: '主回路断到只剩照明。铎兰拆下二号泵的备用控制板，照着旧芯片的针脚位置重做了一块新的，第一次测试跳闸，第二次才通。伊芙娜坐进接驳座，扣上束带，写入的进度条往前走的时候，舱里的灯跟着抖了两下。'
      },
      {
        requires: ['fx_bridge_seal'],
        text: '主回路断到只剩照明。铎兰拆掉通电线，把封座压进写入口，一圈螺丝按对角顺序上紧。诺瓦把三段校样的校验值抄在封条背面，伊芙娜在封条正面签了名，钥匙随记录一起装箱。'
      },
      {
        requires: ['fx_bridge_public'],
        text: '主回路断到只剩照明。诺瓦把数据包从三条信道同时推出去，先发校验值，再发原始记录，最后发方法说明。铎兰在旁边守着封座，他说出去的东西得先有一份留在船上，谁要改口，先改这一份。'
      },
      {
        requires: ['fx_bridge_dismantle'],
        text: '主回路断到只剩照明。铎兰按对角顺序松开盖板，用切割钳把写入针一整排剪断，剪下来的金属件装进三个袋子。伊芙娜站在旁边看着，直到最后一颗针落地才把工作灯关掉一半。'
      }
    ],
    next: 'fx_57a'
  },

  fx_57a: {
    id: 'fx_57a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '写入走到一半的时候，舱里的灯抖了两下，伊芙娜的肩膀跟着一下一下抬起来。薇拉在走道外面报出三条读数，声音一次比一次平。铎兰的手一直放在断路器上，没有离开。',
    next: 'fx_57b'
  },

  fx_57b: {
    id: 'fx_57b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: '校验值对上了：三段校样的余数、第七段的新值、阵列自己刚才的读数，三样都在同一档。写入完成以后这一段会显示成一次维护，经手记录挂在渡鸦号名下，挂一年。',
    next: 'fx_58'
  },

  fx_58: {
    id: 'fx_58',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'doran',
    text: '做完了。二号泵的备用控制板没了，这条船的最大加速度从今天起掉一档，回港的路上我补不回来。我把这一条写进工单，谁要骂就骂我。',
    variants: [
      {
        requires: ['fx_bridge_onewrite'],
        text: '做完了。控制板用掉了，这条船的加速度从今天起掉一档，回港以前补不回来。写入只走了一次，链上那一笔改不回来，这一点我也写在工单上。'
      },
      {
        requires: ['fx_bridge_seal'],
        text: "做完了。封座压到位，钥匙装箱，三条记录一份不少。写入口已机械封闭，重新打开需要回港台架作业。"
      },
      {
        requires: ['fx_bridge_public'],
        text: '做完了。数据发出去，封座也压上了。从今天起，谁想改这一段航道，都得先在公开记录里写清楚是谁改的。'
      },
      {
        requires: ['fx_bridge_dismantle'],
        text: '做完了。针脚全断，零件分了三袋。这条船以后只能读，不能写——不管对面是谁来当舰长，这一点都不会变。'
      }
    ],
    next: 'fx_59'
  },

  fx_59: {
    id: 'fx_59',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'serious',
    tone: 'duty',
    speaker: 'nova',
    text: '三号锚标那一段的灯恢复了，过境队列剩最后两条。记录我按三份发出去了：船上一份，联合一份，矿站一份。灰塔那边只拿到他们自己采过的读数，一行不多。',
    next: 'fx_59a'
  },

  fx_59a: {
    id: 'fx_59a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: '每一份我都附了一张封面：给联合的写清接管范围，给矿站的写清维护时段，留在船上的写清来源和经手人。灰塔那一份只到今天为止的读数，后面的事他们得自己派人来看。',
    next: 'fx_60'
  },

  fx_60: {
    id: 'fx_60',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'warm',
    tone: 'duty',
    speaker: 'ivna',
    text: '手套给我。手还是抖，过一刻钟就好，别叫人。你去把灰鸢的左肩板卸下来，铎兰一个人搬不动。',
    next: 'fx_60a'
  },

  fx_61: {
    id: 'fx_61',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '接驳座的风扇停了。干管上的温度慢慢降回来，走道尽头有人在收工具，金属件一件一件落进箱子里。舰桥那边报出下一件事：三边要求在今天之内得到同一个答复，答复的期限没有写在任何一张纸上。',
    next: 'fx_61a'
  },

  fx_61a: {
    id: 'fx_61a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '机库重新加压。灰鸢停在二号维修架上，左肩那块替换板已经卸下来，凹痕敲回去了大半，漆没补。夜枭在两排维护灯之间，探测臂的护罩回装，侦测翼重新折好，右腿外侧的旧壳子上落了一层灰。',
    next: 'fx_61b'
  },

  fx_61b: {
    id: 'fx_61b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'warm',
    tone: 'duty',
    speaker: 'doran',
    text: '板子敲回来了，纹路没裂，明天补漆。这块本来就是替换件，替人挨打是它的活，这一回它算干了本行。挂钩两道锁都开了，回收索绕得比我自己绕的还整齐。',
    next: 'fx_61c'
  },

  fx_61c: {
    id: 'fx_61c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'vera',
    text: '两段校验值都在这张卡上，标签写的是执行前和执行后，抄了两份：一份交给诺瓦进档案，一份夹在我自己的维护日志里。机体的状态我照实填了，没有多写。',
    next: 'fx_61d'
  },

  fx_61d: {
    id: 'fx_61d',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "二号泵的保险少了，最大加速度掉一档，返程的航时要重算。接驳座今天的记录我签了名，写的是本人执行。下一班先照原表值守，额外休整统一报我排班。",
    next: 'fx_61e'
  },

  fx_61e: {
    id: 'fx_61e',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: '阵列那边又来要一次读数，值班观测员要的是公开的那一份。我给了他公开的那一份，多的一行没给。他回了一条收条，开头写的是"观测局值班台"，没有写首席观测员。',
    next: 'fx_62'
  },

  fx_60a: {
    id: 'fx_60a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '十五分钟以后，伊芙娜的手不再抖。她喝掉半杯温水，把接驳座的风扇关掉，站起来试了两步。铎兰收工具，诺瓦封数据，薇拉把医疗包里用过的那一条绷带卷好扔进回收箱。',
    // 纯运行时派生（见 dist/engine.mjs 的 applyDerivedFlags）：离开反应堆舱之前，
    // 按真实累积信任判定"这段关系是不是她自己要答的那一档"。
    // 这是终章里的第一次派生，服务于 fx_60b→fx_60c「她要不要自己开口」那一段；
    // 同一个阈值在最终选择（fx_choice_stay）之前会按同一份真实信任再算一次，
    // 因为从那之后还有一道会动信任的相关选择（fx_choice_word 里的口令处置）。
    // 故事数据里没有数值表达式；低信任不会锁任何路线，只是没有人替她承诺亲近。
    deriveFlags: {
      vera_bond_close: { who: 'vera', min: 4 }
    },
    next: 'fx_60b'
  },

  fx_60b: {
    id: 'fx_60b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'vera',
    text: '两段校验值都在卡上：执行前一段、执行后一段，时间戳隔了三十九分钟。我抄了第二份，一份交诺瓦进档案，一份夹进我的维护日志。机体的读数照实写，没有多写一个字。',
    nextIf: [{ requires: ['vera_bond_close'], next: 'fx_60c' }],
    next: 'fx_61'
  },

  /**
   * 关系资格判定节点（纯运行时规则，数据不携带数值表达式）：
   * 只有真的和薇拉把这段共事处到 trust.vera ≥ 4 的存档才会进入这里，
   * 在她于 fx_60b 自己交出校验值、写完维护日志之后、在最终选择之前，
   * 把"她自己决定这段关系算什么"写成一句她自己的话。
   * 低信任的存档不经过这个节点：既不锁任何结局，也不会有人替她承诺亲近。
   */
  fx_60c: {
    id: 'fx_60c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'reactor',
    expression: 'warm',
    tone: 'duty',
    speaker: 'vera',
    text: '还有一句我自己要说的：这段日子怎么算，我自己答，不由编制也不由记录替我填。你问过的那些事我都记着，该写进日志的我写，该留在我这儿的一行，我也自己留。\n顺序按班次来。出了这间舱，我把手洗干净，去二号位待命。',
    onEnter: [{ type: 'flag', key: 'vera_bond_close', value: true }],
    next: 'fx_61'
  },

  // ==========================================================================
  // 第五幕 · 复位口令的最后处置（bridge / duty）
  // ==========================================================================

  fx_62: {
    id: 'fx_62',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '舰桥上只剩下值班的人。三号锚标那一带的灯从灰变回白，航道上最后两条过境船各自报了一次位置。伊芙娜把薇拉叫了上来，让她带着自己的维护日志，站在战术台侧面。',
    next: 'fx_63'
  },

  fx_63: {
    id: 'fx_63',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "口令的来路我说明白：它是安全处的东西，接收机拆掉以后，外部控制通道也一起断了。现在还能用它的人只有一个——站在这间舱里、记得那几个字的人。",
    next: 'fx_64'
  },

  fx_64: {
    id: 'fx_64',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'vera',
    text: '日志里有它，报告里有它，诺瓦的卡里也有它。我不要求你现在撕掉。我要求你现在说清楚：这条东西以后算什么。说清楚了，我才知道该怎么把它记下去。',
    next: 'fx_65'
  },

  fx_65: {
    id: 'fx_65',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'nova',
    text: '船上的三份我能处理：划掉、封存，或者交给本人。安全处自己那一份我碰不到，划掉不等于它不存在。我能保证的是，从这一分钟起，谁再引用它，得引用我们写下的那一行。',
    next: 'fx_66'
  },

  fx_66: {
    id: 'fx_66',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'player',
    text: '这一条不该挂在她的档案里当一条备注。你来定：删掉、封存，还是把处置权交给她自己，我们三个今天把那一行写完。',
    next: 'fx_choice_word'
  },

  fx_choice_word: {
    id: 'fx_choice_word',
    kind: 'choice',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'narration',
    text: '战术台的屏幕上并排着三份记录，同一句话出现在三处。薇拉站在旁边，等着这一行被写完。',
    choices: [
      {
        id: 'fx_word_erase',
        label: '抹掉船上的三份，只留一行：该条款已停止执行。',
        next: 'fx_67',
        reaction: "诺瓦在三个文件里把那一行划掉，结尾补上日期和一句停止执行。她在备注里保留了一句：安全处仍持有原始封包。",
        effects: [
          { type: 'flag', key: 'fx_word_erased', value: true },
          { type: 'flag', key: 'fx_word_settled', value: true },
          { type: 'trust', who: 'vera', amount: 1 }
        ]
      },
      {
        id: 'fx_word_seal',
        label: '写进正式记录、封存，谁要调都得走申请。',
        next: 'fx_67',
        reaction: '伊芙娜把口径写成三行：来源、权限、处理方式，然后签了名。诺瓦把这一页加进航次档案的附录，标注了调阅要走的流程。',
        effects: [
          { type: 'flag', key: 'fx_word_sealed', value: true },
          { type: 'flag', key: 'fx_word_settled', value: true }
        ]
      },
      {
        id: 'fx_word_hand',
        label: '把那一页和口令的处置权一起交给薇拉自己。',
        next: 'fx_67',
        reaction: "诺瓦把三个文件调出来放在她的终端上，权限改成她的编号。战术台上只剩她一个人对着屏幕，其余人回到各自岗位，给她留出写完的时间。",
        effects: [
          { type: 'flag', key: 'fx_word_handed', value: true },
          { type: 'flag', key: 'fx_word_settled', value: true },
          { type: 'trust', who: 'vera', amount: 1 }
        ]
      }
    ]
  },

  fx_67: {
    id: 'fx_67',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'vera',
    text: '写好了。我把它记在维护日志的最后一行，不写在别的地方。',
    variants: [
      {
        requires: ['fx_word_erased'],
        text: "写好了。我把停止执行那一行抄了一遍，签名栏留着，最后由我本人签。"
      },
      {
        requires: ['fx_word_sealed'],
        text: '写好了。封存那一页我核对过三遍，调阅流程也抄了一份给档案柜。以后有人要问，我把这份拿出来。'
      },
      {
        requires: ['fx_word_handed'],
        text: '写好了。权限在我这儿，我先不动它。哪一天我想动了，我自己改，自己签字，自己承担。'
      }
    ],
    next: 'fx_67a'
  },

  fx_67a: {
    id: 'fx_67a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '记录写完以后，诺瓦把三份文件的时间戳对齐，盖上船上的章。舰桥的时钟走到下一个整点，走廊里有人推着工具车经过，轮子在门槛上颠了一下。',
    next: 'fx_68'
  },

  fx_68: {
    id: 'fx_68',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'ivna',
    text: '三边的正式答复九十分钟以后到。这段时间除了值班的人，都去吃饭，把手洗干净。谁要在这九十分钟里再跟我谈航道，我把他安排到泵舱去数螺丝。',
    next: 'fx_68a'
  },

  fx_68a: {
    id: 'fx_68a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '交班的人在舰桥门口和接班的人点了点头。诺瓦把数据卡收进胸前口袋，铎兰往机库去收最后一批工具，薇拉把维护日志夹在腋下，走到走廊拐角才把步子放慢。',
    next: 'fx_69'
  },

  // ==========================================================================
  // 第六幕 · 等答复的九十分钟（ship_rail / messhall · off_duty）
  // ==========================================================================

  fx_69: {
    id: 'fx_69',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '左舷观察廊的舷窗上结了一层薄霜。有人用手指在霜上画了三个方框，写了自己呼号的头两个字母，又用手背抹掉一半。窗外的锚标灯排成一串，中间那一段刚恢复的灯比别的亮一点。',
    next: 'fx_70'
  },

  fx_70: {
    id: 'fx_70',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '水壶的密封圈又漏了，我拿二号位的旧件顶一下，能撑到进港。谁最后倒了水不擦台面，我就把那人的杯子锁进工具箱第二格。',
    next: 'fx_70a'
  },

  fx_70a: {
    id: 'fx_70a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: '诺瓦从口袋里摸出一副缺了两张的牌，摊在长椅上教薇拉玩一种可以三个人打的记分游戏。薇拉听了一遍，先问两张牌一样大的时候怎么算，再问输了要做什么。',
    next: 'fx_70b'
  },

  fx_70b: {
    id: 'fx_70b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '这一局我输了。记分纸上写的是我欠两壶水，我认。你刚才那一手我不明白——两张牌一样大的时候，先出的那一家算不算赢。如果算赢，我下一局可以把出牌顺序换过来。',
    next: 'fx_70c'
  },

  fx_70c: {
    id: 'fx_70c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '观察廊里只有长椅、水壶和那副缺了角的牌。记分纸压在壶盖下面，边角被水汽泡软了；舷窗上那层霜被人擦出一块，又慢慢结回去。走廊另一头有人推着工具车过去，轮子在门槛上颠了一下。',
    next: 'fx_71'
  },

  fx_74c: {
    id: 'fx_74c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '信我写了两页半，第一页写船上的事，第二页写配给和新袜子，剩下半页是赌局。靴子是我的，滴下来的水我擦过了。壶里剩的水归加水的人，这句是规矩，规矩是我今天定的，谁反对谁加水。',
    next: 'fx_74d'
  },

  fx_74d: {
    id: 'fx_74d',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '换班以后，观察廊的人少了一半。舷窗上的霜被手掌擦出几块干净的地方，外面的三边还停在原来的航位上。水壶重新灌满，壶底垫了一块抹布，免得在加速的时候滑下去。',
    next: 'fx_75'
  },

  fx_71: {
    id: 'fx_71',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'vera',
    text: '借我标签笔。切割下来的三袋零件都要贴，写清楚哪一袋是给船上的。轮休表上那个"周末"栏我一直不知道怎么填，是填值班还是填空。',
    next: 'fx_72'
  },

  fx_72: {
    id: 'fx_72',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: "周末填你想干什么，不填也行。写\"睡到交接班\"的人最多，写\"补袜子\"的也不少，写\"看舷窗外\"就只有诺瓦一个。你也写一个吧，周末找人搭伴时翻这张表就行。",
    next: 'fx_72a'
  },

  fx_72a: {
    id: 'fx_72a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '我填了：值完班去机库看夜枭。不算检查项，也不算任务，就是想去看看它。写完了要不要给你过目一遍，还是直接交上去。',
    next: 'fx_73'
  },

  fx_73: {
    id: 'fx_73',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: "留言板上的赌局今天要结一个：有六个人赌补给船先到，三个人赌我们先被叫回去开会，还有一个人赌三边都会拖到明天。我押的那一条已经输了，认输。手套我挂在加强肋上烘，等会儿我自己来拿。",
    next: 'fx_73a'
  },

  fx_73a: {
    id: 'fx_73a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '牌我先收起来，明天再教。想赌就赌一点办得到的：谁去把三号更衣室的灯修了，谁就抵一次值夜。那盏灯我修过两回，扳手尺寸不对，这事得找铎兰，他工具箱里有一套小的。',
    next: 'fx_74'
  },

  fx_74: {
    id: 'fx_74',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "舷窗外面，三边的船各自把航行灯调成待机色，锚标阵列的灯一个接一个暗下去，只留下航道中线那一串。观察廊里有人晾手套，有人把杯子挪近热水壶，话题慢慢转到晚饭。广播报了下一班的值守名单。",
    next: 'fx_74a'
  },

  fx_74a: {
    id: 'fx_74a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "加强肋上挂着一双湿靴子，鞋底对着通风口，水在下面滴成一小滩。公用热水壶放在长椅边上，壶嘴堵着一层白垢。留言板最下面钉着一张等人接手的报修便签：谁把三号更衣室的灯修一下。",
    next: 'fx_74b'
  },

  fx_74b: {
    id: 'fx_74b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '壶嘴那层垢我明天用醋泡一遍，今天先将就喝。靴子是谁的我不管，滴下来的水自己擦。修灯那张便签我认得笔迹，是值班员写的，他上个月也这么写，灯他到现在没修。',
    next: 'fx_74c'
  },

  fx_75: {
    id: 'fx_75',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '袖子湿了，甩水甩到你了，抱歉。餐厅还有半锅面，据说盐放多了。我先坐一刻钟，你要是去餐厅就顺便帮我带一杯水，不要热的。',
    next: 'fx_75a'
  },

  fx_75a: {
    id: 'fx_75a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "她把手套摊在膝盖上晾着。窗外三边的船都熄了推进，锚标灯在窗框之间一格一格排过去。她把手套换了一面，让掌心对着风。广播报过时间，送风口又轻轻响起来。",
    next: 'fx_75b'
  },

  fx_75b: {
    id: 'fx_75b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'ivna',
    text: "这条船的泵声我听了七年，今天听着比平时沉一点，二号泵换了负荷，声音跟着沉了。面要凉了，你先去，我坐一会儿再过去。",
    next: 'fx_76'
  },

  fx_76: {
    id: 'fx_76',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '餐厅的加热台关了，锅盖边上还冒着气。留言板上钉着那张赌局，下面压着半张补给清单。角落有人把汤碗摞成三摞，最上面那只碗底下垫着一张便签，写着面条留给夜班。',
    next: 'fx_76b'
  },

  fx_76b: {
    id: 'fx_76b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "腌菜的罐子和昨天一样只剩半罐，几双筷子搁在罐边，罐盖被当成了小碟子。台上两个水壶，一个是刚烧的，一个是昨天剩下的温水。补给单上用铅笔画了三道，写着盐、醋、还有一套新螺丝刀。",
    next: 'fx_76c'
  },

  fx_76c: {
    id: 'fx_76c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '厨房门上贴着一张纸条，写着今天的两件事：腌菜剩半罐，谁吃谁记；第二锅面留给夜班，锅盖盖上。桌上摆着三副筷子，有一副是给晚来的人的，筷子头朝外放着。',
    next: 'fx_76a'
  },

  fx_76a: {
    id: 'fx_76a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '赌局在开饭前结了：押补给船先到的那六个人输了，押三边都会拖到明天的那个赢了，赢家的名字后面被画了一个圈。水壶旁边贴了一张新的排班纸条，是输家自己写的，字很难看。',
    next: 'fx_77'
  },

  fx_77: {
    id: 'fx_77',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '面是我下的，盐是诺瓦放的，这一点她自己承认。锅我刷，碗你收，桌角别用锅铲敲，那把铲子今天已经当过扳手了。',
    next: 'fx_77b'
  },

  fx_77b: {
    id: 'fx_77b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'ivna',
    text: "我今天不吃面，吃带来的那两份罐头，再放下去要过期了。泵舱那边的管子声我听着不对，明天早上第一件事让人去紧一遍，今晚先休息，检修排到明早。薇拉，你那半碗要是不够，我的罐头匀你一半。",
    next: 'fx_77c'
  },

  fx_77c: {
    id: 'fx_77c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '第二锅面端上来的时候，蒸汽把留言板上的纸页熏得卷了边。有人把信纸摊在膝盖上写回信，写到一半被喊去接班，笔就插在盐罐旁边。那只缺口的碗被换下去了，新的摆在原来的位置上，边上多放了一双干净筷子。',
    next: 'fx_77a'
  },

  fx_77a: {
    id: 'fx_77a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '桌上的碗筷收了一半，醋瓶和盐罐换到桌子中间。留言板那边的灯比昨天暗一点，纸页被钉得整整齐齐。窗外的锚标灯一格一格排过去，和昨天同一个地方亮着。',
    next: 'fx_78'
  },

  fx_78: {
    id: 'fx_78',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '我承认盐是我放的，我改天再认一次别的。说好的：赢我的人明天负责给水壶加水，输我的人后天加。还有，你那半碗面里如果捞到姜片，那是我的，还我。',
    next: 'fx_78a'
  },

  fx_78a: {
    id: 'fx_78a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '诺瓦从胸前口袋里抽出一张纸，写了两行，划掉一行。桌上摊着从留言板抄下来的赌局名单，每个人名字后面跟着一个数目，最多的那一栏写着十七。',
    next: 'fx_78b'
  },

  fx_78b: {
    id: 'fx_78b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: "锅铲洗好了，挂回架子上。你那只碗有豁口，我给你换一个。汤还剩半勺，放灶边温着，晚班回来可以拌饭。",
    next: 'fx_79'
  },

  fx_79: {
    id: 'fx_79',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'vera',
    text: "面还能吃。手指上贴着胶布，筷子握得慢一点，不会掉。我再要半碗可以吗——今天这锅挺合口味。",
    next: 'fx_79b'
  },

  fx_79b: {
    id: 'fx_79b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '牌我留在桌上，明天教你们打四人的，缺的那两张我拿空白卡补，用铅笔写上一和七。我拿两包盐换你那张备用的数据卡壳，你要是舍不得，我就用糖换。',
    next: 'fx_79c'
  },

  fx_79c: {
    id: 'fx_79c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '半碗够了。手套我洗过一次，胶布换了两处，手指不碍事。桌子收完我想把今天的读数抄完再走，抄完就回去；明天交班之前我把夜枭右腿那只外壳再复查一次，复查的记录我自己写。',
    next: 'fx_79a'
  },

  fx_79a: {
    id: 'fx_79a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '观测对象这个叫法我用了很久，一时改不掉，你听着别扭就提醒我一声。你的呼号我念得比编号顺，这一点我不否认，也不用你谢我。',
    next: 'fx_80'
  },

  fx_80: {
    id: 'fx_80',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '锅里的都是你的，谁问就说我批的。捞面的时候轻一点，那一片姜我真不想再看见它浮上来了。',
    next: 'fx_80a'
  },

  fx_80a: {
    id: 'fx_80a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '碗我洗了，抹布挂回原来的钩子上。那半碗面我没吃完，姜片挑出来放在小碟里了，谁要谁拿。诺瓦，碟子是你的，我把碟子放在你左手边。',
    next: 'fx_80b'
  },

  fx_80b: {
    id: 'fx_80b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '标签笔递我一下，这把凳子的腿松了，我先垫一颗螺丝。你今天说的话最少，吃的东西最多，这一条我不写进单子，我只是当面说出来，省得你以后赖。',
    next: 'fx_80c'
  },

  fx_80c: {
    id: 'fx_80c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '罐头是去年配给里最耐放的那一种，味道一般，管饱。泵舱的声音我听了一晚上，明天一早第一件事就是让人去看。你们吃完把桌子收一下，我去舰桥看一眼值班表，顺便把明天用的表领回来。',
    next: 'fx_81'
  },

  fx_81: {
    id: 'fx_81',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'ivna',
    text: "值守名单我改一行：今天在舰桥上站了四个小时的人，下一班休息。按连续值守时长排的。有漏记的，明天拿记录来补。",
    next: 'fx_81a'
  },

  fx_81a: {
    id: 'fx_81a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '家里问我这半年在干什么，我写的是在船上做记录。锚标那一段要不要写进去，我还没想好，反正信要等补给船来了才寄得出去，我明天再决定。',
    next: 'fx_82'
  },

  fx_82: {
    id: 'fx_82',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "锅端到水池边，热水一开，蒸汽在暖光灯下面往上升。外面三边的正式答复还有四十分钟才到，你们先把餐具收齐，等通讯台来通知。有人把最后半碗面倒进自己碗里，有人拿抹布擦了三遍桌子。",
    next: 'fx_82a'
  },

  fx_82a: {
    id: 'fx_82a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "锅底的汤倒掉，水池的滤网捞了一遍，最后留了一盏台面灯没关，给下一班的人照路。餐厅门口的时钟走得很稳，四十分钟一格一格往下走，大家趁这段时间各自回舱洗漱。",
    next: 'fx_82b'
  },

  fx_82b: {
    id: 'fx_82b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: '有人把湿袜子从通风口上取下来，换上刚洗的那一双，旧的那双搭在椅背上。水壶里重新灌满，壶嘴上的垢被刮掉一层。留言板上的纸页被风从通风口那边吹起一角，又落回去。',
    next: 'fx_82c'
  },

  fx_82c: {
    id: 'fx_82c',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '收完桌子，椅子被推回桌子下面，留下一盏灯给夜班。走廊里的脚步慢慢散开，机库那边还有响动，通风口的风把留言板上的纸吹起一角，又贴回去。',
    next: 'fx_83'
  },

  // ==========================================================================
  // 第七幕 · 最后一句（bridge / duty → 五个结局）
  // ==========================================================================

  fx_83: {
    id: 'fx_83',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '三边的正式答复在四十分钟内到齐，都是写好的信。联合说写入授权与记录按序列接管，航道恢复配给表；矿站说锚点的维护权要回外环，名单上写得下每一个站；灰塔说校准权归塔，数据先公开一半，让三方都能核。三封信的结尾问的是同一句话。',
    next: 'fx_83a'
  },

  fx_83a: {
    id: 'fx_83a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: "中央战术台上，三边的航位各占一角：联合的护航群在外圈，矿砂船排成两列，灰塔的一条补给艇停在第七段入口外侧。三封信的收条压在战术台边缘，用同一只镇纸压着，最上面一张露出收件时间，墨迹还泛着光。",
    next: 'fx_84'
  },

  fx_84: {
    id: 'fx_84',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "渡鸦号现在的位置，够得着三条路里的任何一条。铎兰在机库，诺瓦在战术台，薇拉在二号位，四个人已经各就各位。你说话，我照着执行。",
    next: 'fx_84a'
  },

  fx_84a: {
    id: 'fx_84a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '渡鸦号的三段推进环只剩两段能用，二号泵在低速上打着摆，左肩那块替换板刚敲平又补了漆。船身横在三边的灯中间，四百二十米的长度，在这片锚地上一眼看得到头。',
    next: 'fx_85'
  },

  fx_85: {
    id: 'fx_85',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'nova',
    text: '补一句实际的：不管你选哪个，记录已经发出去了，那一段被改回来过、被封住过，都查得到。区别只在这条航道明天归谁签字，还有矿站下一次报表递给谁。',
    next: 'fx_85a'
  },

  fx_85a: {
    id: 'fx_85a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "三条路的实际开销我报一遍：走联合，坞位和药品有保证，配给表按季度送到；走矿站，燃料按外环的价，零件得靠商船捎，医疗要提前确认站上的值班医生；走灰塔，航权合法，每一季过一次检查，检查范围写死在合同里。",
    next: 'fx_86'
  },

  fx_86: {
    id: 'fx_86',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'vera',
    text: "个人维护日志请另外复制一份给我，我自己保存。名字的事等航道定了我再答，那一次我自己写。现在你说哪一个，我就去二号位待命。",
    next: 'fx_86a'
  },

  fx_86a: {
    id: 'fx_86a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '舰桥的门开着，走廊那头能听见餐厅收桌子的声音。四个人都在自己的位置上：铎兰在机库，诺瓦在战术台，薇拉在二号位，伊芙娜站在中央战术台侧面。三边的船一盏灯都没有多亮，等你把最后一个字说出去。',
    next: 'fx_86b'
  },

  fx_86b: {
    id: 'fx_86b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: "值班员把三条信的位置又核了一遍，收条按顺序压好。锚标阵列的灯一格一格亮到第七段的中线，三边的船停在各自的航位上，推进器熄着。舰桥的时钟又走过一格，值班员把回复键切到待发。",
    next: 'fx_87'
  },

  fx_87: {
    id: 'fx_87',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'player',
    text: '锚标阵列的灯在我们侧窗外排成一条线，三边的船都熄了推进。谁先说话，这一段航道就跟着谁走。我说最后一次：上一条命令——全舰听我口令。',
    next: 'fx_87a'
  },

  fx_87a: {
    id: 'fx_87a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: "舰桥安静下来，只剩下通风和仪表的声音。三边各留一盏航行灯对着渡鸦号，维持着已经报过的航位。中央战术台上的三封信摊开着，等着被念出其中一封的编号。",
    next: 'fx_choice_stay'
  },

  fx_choice_stay: {
    id: 'fx_choice_stay',
    kind: 'choice',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'narration',
    text: '三条信都在屏幕上，四个人都在各自的岗位上。锚标阵列的灯从舷窗外照进来，落在中央战术台上，把三种颜色照成一样亮。',
    // 终章最后一次按真实累积信任收口：fx_choice_word 里"划掉 / 交给她自己"那一步
    // 还会再加 1 点 trust.vera，所以 fx_60a 算出来的结果不能直接当作最终关系。
    // 规则与 fx_60a 完全相同（{ who: 'vera', min: 4 }），只是写得晚一步：
    // 成立写 true、不成立写 false，早先的 true 不会被当成 stale flag 留下来。
    deriveFlags: {
      vera_bond_close: { who: 'vera', min: 4 }
    },
    choices: [
      {
        id: 'fx_stay_concord',
        label: '归档：记录与维护辖区交联合序列，锚链恢复配给表，渡鸦号回队列。',
        next: 'fx_c_01',
        reaction: '伊芙娜把三封信里联合那一封推到屏幕中央，开始逐条执行。移交清单第一栏写的是记录与维护辖区，写入口那一栏按它在船上的现状照实填；诺瓦把清单打开，铎兰在机库待命。',
        requires: ['fx_side_concord'],
        effects: [
          { type: 'flag', key: 'fx_final_concord', value: true },
          { type: 'standing', who: 'concord', amount: 1 }
        ]
      },
      {
        id: 'fx_stay_scarlet',
        label: '通航：锚点维护权交回矿站，渡鸦号留在外环跑补给。',
        next: 'fx_s_01',
        reaction: '诺瓦把矿站那一封推到中央，同时把船籍注销的申请表调了出来。伊芙娜看了一眼那张表，没有立刻说话。',
        requires: ['fx_side_scarlet'],
        effects: [
          { type: 'flag', key: 'fx_final_scarlet', value: true },
          { type: 'standing', who: 'scarlet', amount: 1 }
        ]
      },
      {
        id: 'fx_stay_spire',
        label: '校准报告：数据公开一半，塔只留校准权，船换合法航权。',
        next: 'fx_p_01',
        reaction: '诺瓦把灰塔那一封推到中央，附加的条件是她自己写的那三条。伊芙娜把三条念了一遍，问到是不是每一季都要来一次，然后站在战术台旁边等你确认。',
        requires: ['fx_side_spire'],
        effects: [
          { type: 'flag', key: 'fx_final_spire', value: true },
          { type: 'standing', who: 'spire', amount: 1 }
        ]
      },
      {
        id: 'fx_stay_together',
        label: '不写进任何档案：桥不再有写入这条出路，锚点交回矿站自己维护，船谁的都不归。',
        next: 'fx_t_01',
        reaction: '伊芙娜把三封信一起推到屏幕边上，没有选任何一封。诺瓦在记录里写下第一条：本舰不签署三方中任何一方的接管文本。',
        effects: [
          { type: 'flag', key: 'fx_final_together', value: true }
        ]
      },
      {
        id: 'fx_stay_reset',
        label: '服从：把复位口令念出去，让联合接管这一段。',
        next: 'fx_r_01',
        reaction: '你把那几句话说出口。薇拉在二号位上答了一声收到，声音很平，和报到那天一样。伊芙娜看了你一眼，然后转回战术台，把执行栏打开。',
        effects: [
          { type: 'flag', key: 'fx_final_reset', value: true },
          { type: 'flag', key: 'fx_word_spoken_final', value: true },
          { type: 'trust', who: 'vera', amount: -2 }
        ]
      }
    ]
  },

  // ==========================================================================
  // 结局一 · 归档（ending_concord_final）
  // ==========================================================================

  fx_c_01: {
    id: 'fx_c_01',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '半个小时内，渡鸦号重新编进联合的护航序列。移交在舰桥上做：写入授权、三段校样、校准队列的原始件，一件一件对着清单点。最后一栏是渡鸦号自己的条件，伊芙娜一条一条念出来，联合的接收军官在那三条后面各签了字。',
    next: 'fx_c_01a'
  },

  fx_c_01a: {
    id: 'fx_c_01a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '护航序列的排布当场发下来：渡鸦号走在配给队中段，前后各一艘护航舰，第七段的灯每天按配给表检查一次。接收军官把值班表贴在舰桥门口，纸张的边角用磁条压住，字迹是打出来的。',
    next: 'fx_c_02'
  },

  fx_c_02: {
    id: 'fx_c_02',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '三条我念一遍，写进收据里：第七段航道保持点亮到冬季末；外环三个站的配给表按月公开；每季度公布一次航道状态，公布之前先通知矿站。最后一条是我加的，你签了字。',
    next: 'fx_c_02a'
  },

  fx_c_02a: {
    id: 'fx_c_02a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '外环三个站的回执在第三天到齐，每一张都只有两行字：收到配给表，泵件已签收。三〇七号站那张后面多写了一句，说泵房的第二台机重新开起来了，出水不带渣。',
    next: 'fx_c_03'
  },

  fx_c_03: {
    id: 'fx_c_03',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '维斯特的名字在第六天从校准名册上移到复核栏。灰塔对外只发了一行：静默壁外的序列中止，首席观测员回塔复核，相关数据列入未完成项。他的权限没有恢复，他的方法被人从操作手册里抽出来，单独钉在一份失败案例的附录上。',
    next: 'fx_c_03a'
  },

  fx_c_03a: {
    id: 'fx_c_03a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '阵列值班台在公开摘要上挂了最后一条：序列中止，段内船只有序通过，无损伤。签名是两个观测员，都是当晚值班的人。维斯特没有在上面留字。',
    next: 'fx_c_04'
  },

  fx_c_04: {
    id: 'fx_c_04',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '第五条那一页的结果写在渡鸦号的航次档案里：条款停止执行，执行人一栏空着。',
    variants: [
      {
        requires: ['fx_clause_revoke'],
        text: '第五条那一页的结果写在渡鸦号的航次档案里：条款当场作废，作废人穆尔·基廷，日期在锚地会合的那一天。安全处的回函在两个月后才到，只有一页，说说明已收。'
      },
      {
        requires: ['fx_clause_publish'],
        text: '第五条那一页的结果写在渡鸦号的航次档案里：条款全文与签署链对外公开，执行人一栏空着。联合的路径审计把它编进公共档案，编号是 P-9-14，谁都能查。'
      },
      {
        requires: ['fx_clause_trade'],
        text: '第五条那一页的结果写在渡鸦号的航次档案里：编号进入正式序列，条款无限期挂起，挂起日期在锚地会合的那一天。挂起期满要重新审议，审议人一栏空着。'
      }
    ],
    next: 'fx_c_04a'
  },

  fx_c_04a: {
    id: 'fx_c_04a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '登记表第二页要填维护人，我填的是本人，签的是我自己的名字。以前这类格子我留给别人写，今天不留了。这一页你要是想看，航行结束以后自己调，我不专门拿给你。',
    next: 'fx_c_05'
  },

  fx_c_05: {
    id: 'fx_c_05',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '回港以后的第一个休息日，观察廊的霜化了一半。伊芙娜把洗过的一条备用带队袖标晾在加强肋上，自己在那儿填一份编号登记表，维护人那一栏写的是她自己的名字。',
    next: 'fx_c_05a'
  },

  fx_c_05a: {
    id: 'fx_c_05a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '观察廊里多了两样东西：一只修好的公用热水壶，壶嘴的垢被泡掉了；一张贴在留言板上的新纸条，写着谁的名字谁自己划。窗外的港区在下小雨，锚标灯隔着水痕排成一条模糊的线。',
    next: 'fx_c_06'
  },

  fx_c_06: {
    id: 'fx_c_06',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '我在培训名单上加了一个名字，二号位的。她飞得比我稳，缺的只是班次，班次我可以排。以前这类表格我不填，今天我填。',
    next: 'fx_c_06a'
  },

  fx_c_06a: {
    id: 'fx_c_06a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '担保人那一栏要写呼号，我留给你填。你要是嫌麻烦，我就写舰长，效果差一点。填完把表交到档案柜第二格，别压在工具箱上，铎兰会拿去垫东西。',
    next: 'fx_c_07'
  },

  fx_c_07: {
    id: 'fx_c_07',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '影子线路我不藏了，两条箱子直接在船上清单里挂成"储备配件"，谁来查都看得见，来路写着外环三个站的联合采购。工具箱第二格我还留着，钥匙挂在工作台边上，谁要拿谁拿。',
    next: 'fx_c_08'
  },

  fx_c_08: {
    id: 'fx_c_08',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '诺瓦的召回令在第三周到的，一张薄纸，落款是灰塔观测局的调度处。她把观测卡按顺序清了一遍，只抽走两张，其余留在船上的档案柜里。',
    next: 'fx_c_08a'
  },

  fx_c_08a: {
    id: 'fx_c_08a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '餐厅那天摆了两副牌，一副缺两张，一副是新的。有人把诺瓦留下的观测卡套子当成赌局的记分板，写满了小字。补给船当天到了，捎来两箱信和一箱盐。',
    next: 'fx_c_08b'
  },

  fx_c_08b: {
    id: 'fx_c_08b',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "收拾行李那天，餐桌上摆着两摞信：一摞是这一季寄进来的，另一摞是等着下一趟补给船带走的。有人把空掉的观测卡套子当记分板，背面写满了小字，谁赢谁输都记着。锅里照旧留着半勺面，锅盖上压了张写着『晚班』的纸。",
    next: 'fx_c_09'
  },

  fx_c_09: {
    id: 'fx_c_09',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '召回令我接了，回去还是做观测，工资照发，报告照写。私人频道我留着，谁给我寄信别写船名，写港口编号就行，那个我熟。留言板上我押一条：谁先收到我从塔里寄出来的东西。',
    next: 'fx_c_10'
  },

  fx_c_10: {
    id: 'fx_c_10',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '名字我留下了。档案科要我签一份说明，我写的是：这个名字由我本人签领，随本舰编制。签完我还问了一件事——轮休表上那个"周末"栏，我填的是"值完班去机库看夜枭"。他们说可以。',
    next: 'fx_c_10a'
  },

  fx_c_10a: {
    id: 'fx_c_10a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '这一季我提了两件事，都批了：一是探测臂的零点校准从每季度改成每月一次，二是二号位的备用头盔换一副小一号的。第二件是我自己用的，我先提，批不批看舰上。',
    next: 'fx_c_11'
  },

  fx_c_11: {
    id: 'fx_c_11',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'player',
    text: '你的档案里多了一行：第三小队，担保人一栏写着你的呼号。例行值班表照排，下一次出航是护送配给船走第七段，队长是伊芙娜，二号位是薇拉，灰鸢在你的机位上。',
    next: 'fx_c_11a'
  },

  fx_c_11a: {
    id: 'fx_c_11a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '例行值班表贴在舰桥门口，四个名字按班次排开。机库的工单上写的是灰鸢左肩补漆和二号泵的季度检查，诺瓦的名字从战术台的名册上划掉，换成了新的观察员。',
    next: 'fx_c_12'
  },

  fx_c_12: {
    id: 'fx_c_12',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'planet_approach',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "三个月后，渡鸦号带着十四条配给船从第七段穿过来，回到沧澜的港区。这一段航道的灯全部亮着，中间那一串比别处新，是当月换的。矿站的人在报表上把这条航道叫作大路，这个名字渐渐用开了，后来也印上了配给表。",
    next: 'fx_c_12a'
  },

  fx_c_12a: {
    id: 'fx_c_12a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'planet_approach',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '蓝色的行星在队列前方慢慢转过来，大陆的边线从云带下面露出来，一颗苍白色的卫星停在画面右上角。十四条配给船排成两列减速，渡鸦号走在中间，尾部的三个推进环压到最低一档。',
    next: 'fx_c_13'
  },

  fx_c_13: {
    id: 'fx_c_13',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: "当天的晚饭还是面。盐放多了这件事，诺瓦在信里也认了一次。留言板上的赌局结了，水位线画得比上一次高了一格，新的水位线旁又添了下一轮的名字。",
    next: 'fx_c_13a'
  },

  fx_c_13a: {
    id: 'fx_c_13a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: '收拾完桌子，有人把灯留了一盏，锅里的面汤盛出来放凉。第二天要交的表格压在盐罐下面，最上面那一张写的是下一季度的值守安排。走廊尽头的机库还亮着半排维护灯，有人在做夜里的复查。',
    next: 'ending_concord_final'
  },

  ending_concord_final: {
    id: 'ending_concord_final',
    kind: 'ending',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '归档。锚链回到联合序列，第七段的灯按收据上写的那样亮到冬季末，外环三个站的配给表按月公开。船上签收的是记录与维护辖区，写入口按处置当时的实际状态照实登记。渡鸦号编在护航序列里，旧编号重新刷了一遍，还是那几个字。',
    variants: [
      {
        requires: ['bridge_write_consumed'],
        text: '归档。灯按收据上写的那样亮到冬季末，外环三个站的配给表按月公开；交付清单第一栏填的是记录与维护辖区，船上交出去的是一次写入留下的记录、三段校样和航道维护的签字权。写入口本身在两次写入之后已经作废，烧掉的那一块留在工具箱里当凭据。渡鸦号编在护航序列里，船身上的旧编号重新刷了一遍，还是那几个字。'
      }
    ],
    closure: CLOSURES.ending_concord_final,
    onEnter: [{ type: 'flag', key: 'ending_concord_final_reached', value: true }]
  },

  // ==========================================================================
  // 结局二 · 通航（ending_scarlet_final）
  // ==========================================================================

  fx_s_01: {
    id: 'fx_s_01',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '答复在二十分钟内做完：渡鸦号不在任何一方的接管文本上签字，只签一份移交——第七段的读权限、三段校样，和一份今后由外环矿站自己维护的锚标名单。联合的接收军官把那一页翻了两遍，问船籍在哪，伊芙娜把注销申请表推了过去。',
    next: 'fx_s_02'
  },

  fx_s_02: {
    id: 'fx_s_02',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '注销的连带我念一遍：在册人员的抚恤与配给户头从联合转出，转到矿站的运单下面；三个月内的工钱按运单结，多出来的部分进船上的公共柜。谁要下船，今天报名字，我办手续，不扣人。',
    next: 'fx_s_03'
  },

  fx_s_03: {
    id: 'fx_s_03',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '联合的护航群在夜里撤回外圈，走之前把第七段的配给表按季度发给了所有在册的矿站。注销回执上写的是退出联合护航序列、保留航道记录调阅权。路径审计把渡鸦号从护航名册上划掉，换了一串新的编号。',
    next: 'fx_s_04'
  },

  fx_s_04: {
    id: 'fx_s_04',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '维斯特的失败案例在第九天贴上了矿站自己的公告板：标题是《一段被中止的校准序列》，正文里没有他的名字，只有阵列值班台的记录和夜枭的两段读数。公告板最下面多了一行：此人不得进入第七段作业区。',
    next: 'fx_s_05'
  },

  fx_s_05: {
    id: 'fx_s_05',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '第五条那一页在矿站的登记处留了一份存底：编号归本人，条款不再执行，执行人一栏空着。',
    variants: [
      {
        requires: ['fx_clause_revoke'],
        text: '第五条那一页在矿站的登记处留了一份存底：作废人穆尔·基廷，日期留在锚地会合那天。登记处的人在复印件背面写了四个字：收到，照办。'
      },
      {
        requires: ['fx_clause_publish'],
        text: '第五条那一页的全文进了矿站的公共登记册，编号、日期和签署链都在，谁都能翻。基廷的交通艇离开锚地以后，安全处没有再来过人。'
      },
      {
        requires: ['fx_clause_trade'],
        text: '第五条那一页在矿站的登记处留了一份存底：编号进册，条款挂起，挂起期三年。登记处的人在旁边加了一行：到期之前，这一段由我们自己守着。'
      }
    ],
    next: 'fx_s_06'
  },

  fx_s_06: {
    id: 'fx_s_06',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '铎兰在机库里收拾自己的两格箱子：一格工具，一格旧零件。修理册子他留在工具箱第一格，写明旧管两段、密封圈一盒是从哪儿拿的，字比工单上好看。灰鸢的左肩板补完了漆，颜色和旁边那块还是不一样。',
    next: 'fx_s_07'
  },

  fx_s_07: {
    id: 'fx_s_07',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: "我回外环，那边还有我一个铺位，床板下还留着我九年前塞的工具。矿站缺一个联络员，管货单、管借条、管谁家孩子上哪个班，这些我熟。船来我签字，别人要替我们签，先过我这一关。",
    next: 'fx_s_08'
  },

  fx_s_08: {
    id: 'fx_s_08',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '伊芙娜把带队袖标折成三折，放进储物格最底层，标签上写了日期。矿站的聘用页摊在旁边，职位那一栏是航道教官，聘期一年，可以续。窗外锚标灯排成一线，比一个月前亮得整齐。',
    onEnter: [
      // 从这一刻起她真的换成了民用装束：同一个伊芙娜、同一套表情档位，
      // 只是立绘走 assets/fullgame/portrait-ivna-civilian-*.png；后面这一段
      // 到她离开舰队为止都保持这一套，不再穿带袖标的作训服。
      { type: 'flag', key: 'ivna_costume_civilian', value: true }
    ],
    next: 'fx_s_08a'
  },

  fx_s_08a: {
    id: 'fx_s_08a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '离船前的两天，走廊上堆着四只周转箱，谁的箱子谁自己写标签。铎兰把自己那两格空出一半留给船上，剩下的装工具和旧零件；有人把公共水壶擦了一遍，重新写了一张加水排班，署的是三个名字。舷窗外港区的吊车一直在动。',
    next: 'fx_s_09'
  },

  fx_s_09: {
    id: 'fx_s_09',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'serious',
    tone: 'off_duty',
    speaker: 'ivna',
    text: "编号我留着，它现在只用于核对我的旧档案，处置权已写明归我本人。课下个月开，头一批是十四条矿砂船的副手。我教他们读锚标灯，也教他们什么时候该停船——上面那一条比下面那一条难教。",
    next: 'fx_s_10'
  },

  fx_s_10: {
    id: 'fx_s_10',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '我把观测数据发了半数出去，署名写的是观测员，后面不带单位。灰塔的除名通知比我的信到得还早，我把它贴在数据卡套子背面，当书签用。空出来的那一半数据我没扔，锁在船上的柜子里。',
    next: 'fx_s_11'
  },

  fx_s_11: {
    id: 'fx_s_11',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'vera',
    text: '矿站的登记处给我一张表，姓名那一栏是自填的。我写了薇拉·厄兰，下面补了一行：此名由本人签领。填表的人问我以后要不要改，我说不改，这是我唯一一个自己签过的名字。',
    next: 'fx_s_12'
  },

  fx_s_12: {
    id: 'fx_s_12',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'player',
    text: '你把军籍证件交上去的时候，办事的人问要不要留一份副本，你说不用。渡鸦号的名册上还写着你的呼号，后面没有军衔，只有班次和值班时间。',
    next: 'fx_s_13'
  },

  fx_s_13: {
    id: 'fx_s_13',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '船籍注销以后，渡鸦号挂的是矿站自己的船牌，跑的是死航线上第一条公开航路。三处侧面开口里堆着矿砂船的备件，尾部三个推进环照旧转着，二号泵还是那个低速上打摆的老毛病。',
    next: 'fx_s_13a'
  },

  fx_s_13a: {
    id: 'fx_s_13a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: "我现在每天写两行日志：一行是机体的状态，一行是当天做过什么。第二行以前是空的，现在有内容——昨天写的是在沧澜港区买了一副手套，价钱比标价高两成。这些日常另写一行，翻回去看，能想起当天去了哪里。",
    next: 'fx_s_14'
  },

  fx_s_14: {
    id: 'fx_s_14',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'planet_approach',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '第一次跑这条航路，第七段的灯是新换的：矿站自己的维护队把二十一个锚标逐个点亮，亮一盏报一盏。渡鸦号走在队列最后，前面是十四条矿砂船，货架上绑着今年冬天的泵件和滤网。蓝色的行星和那颗苍白的卫星在舷窗右侧慢慢转过去。',
    next: 'fx_s_15'
  },

  fx_s_15: {
    id: 'fx_s_15',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'city',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '沧澜港区的街上刚下过雨，地面的水把招牌照成两半。薇拉在五金铺前站了很久，最后买了一副手套和一把小手钻，价钱没砍下来，铺子里的人笑她，她也跟着笑了一下。',
    next: 'fx_s_16'
  },

  fx_s_16: {
    id: 'fx_s_16',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'city',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '手套大了一号，正好，里面还能垫一层。手钻是给船上工具箱的，铎兰那一把用了十一年。老板要价比标价高两成，我没谈下来——他说下回带船来可以便宜，先记着。',
    next: 'fx_s_17'
  },

  fx_s_17: {
    id: 'fx_s_17',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'city',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '两个人拎着纸袋走回泊位，路上经过堆场的装卸轨，轨上停着一列空货架车。港区的灯一盏一盏亮起来，防波堤那边的潮水拍上来又退下去，声音很稳。街角的小店把当天的货单贴在门框上，纸边被雨打卷了。',
    next: 'ending_scarlet_final'
  },

  ending_scarlet_final: {
    id: 'ending_scarlet_final',
    kind: 'ending',
    chapter: 'ch09',
    scene: 'city',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '通航。第七段的读权限和维护名单交回外环，二十一个锚标由矿站自己的维护队点亮，联合在这一段不再有独家路权。渡鸦号的船籍注销了，挂矿站的船牌，跑死航线上第一条公开航路。名字是我自己签的，编制我没有，班次照排。',
    closure: CLOSURES.ending_scarlet_final,
    onEnter: [{ type: 'flag', key: 'ending_scarlet_final_reached', value: true }]
  },

  // ==========================================================================
  // 结局三 · 校准报告（ending_spire_final）
  // ==========================================================================

  fx_p_01: {
    id: 'fx_p_01',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '合同一共十一页：塔保留校准权，写入权整条划掉；第七段的原始数据公开一半，另一半留在塔里备核；渡鸦号拿到合法航权，条件是每季度一次船体与记录的检查，检查范围写在附件三，附件三是诺瓦自己写的。',
    next: 'fx_p_02'
  },

  fx_p_02: {
    id: 'fx_p_02',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'nova',
    text: '附件三就三条：结论栏由观测员本人写，塔不能代笔；检查只查设备和记录，不查人；我有权在场，也有权提前退出合同。第三条他们改了两遍，最后还是签了字。',
    next: 'fx_p_03'
  },

  fx_p_03: {
    id: 'fx_p_03',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '维斯特的失败案例由塔自己写，公开的是前半部分：序列中止、对照组缺失、方法不成立。他的名字在正文里，权限栏写着暂停。第四个月，塔把他从校准名册上彻底划掉，调去整理旧档案。',
    next: 'fx_p_04'
  },

  fx_p_04: {
    id: 'fx_p_04',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '第五条那一页的结果写在渡鸦号的航次档案里，抄件同时进了塔的备核栏和执行人一栏空着。',
    variants: [
      {
        requires: ['fx_clause_revoke'],
        text: '第五条那一页写进了航次档案：条款当场作废，作废人穆尔·基廷。抄件同时进了塔的备核栏，那一栏的备注写的是"已终结，无需复核"。'
      },
      {
        requires: ['fx_clause_publish'],
        text: '第五条那一页写进了航次档案：条款全文与签署链对外公开，编号 P-9-14。塔的备核栏收到的是公开版本，附了一行说明：本栏不再受理与该条相关的调阅。'
      },
      {
        requires: ['fx_clause_trade'],
        text: '第五条那一页写进了航次档案：编号进册，条款无限期挂起。塔的备核栏把这一条标成"暂停事项"，每一季度的检查单上会多出一格，格子里写的是"无变化"。'
      }
    ],
    next: 'fx_p_05'
  },

  fx_p_05: {
    id: 'fx_p_05',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '伊芙娜档案上"样本"那几个字被划掉了，换成留舰人员、季度复核。她把那张纸夹进储物格，旁边贴了一张便签，写着下一次检查的日期和检查员的名字。',
    next: 'fx_p_06'
  },

  fx_p_06: {
    id: 'fx_p_06',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'serious',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '干净身份是有价钱的，价钱写在附件三第一行：每季度一次检查，检查员上船，我陪着。我不喜欢有人翻我的记录，可这个价我知道怎么算，比藏在角落里便宜，我认。',
    next: 'fx_p_07'
  },

  fx_p_07: {
    id: 'fx_p_07',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: '维修合同上，签名那一栏他写了自己的全名：铎兰·阿吉斯。写完他对着纸看了一会儿，说这是他第一次用自己的名字签东西，以前签的都是船号加日期。',
    next: 'fx_p_08'
  },

  fx_p_08: {
    id: 'fx_p_08',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '三份复写纸太厚，一笔要按两次，手都按酸了。合同里我最喜欢第十八行：船上的旧件可以继续留用，不必更换。那一行是我请诺瓦加的，加完我还请她喝了半杯茶。',
    next: 'fx_p_09'
  },

  fx_p_09: {
    id: 'fx_p_09',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '升任观测员的批文和季度检查通知同一天到。诺瓦的第一份独立报告写的是第七段的冬季状态，结论栏三个字：不确定。依据栏后面附了三页读数，每一页都签了日期。',
    next: 'fx_p_09a'
  },

  fx_p_09a: {
    id: 'fx_p_09a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '批文到的那天晚上，餐厅煮了一锅面，盐放得正好。有人把检查员留下的空白表格裁成卡片，写上船位和班次钉在留言板上；锅底剩下的一点汤被倒进值班员那只大碗里，碗底还压着一张昨天的排班条。',
    next: 'fx_p_10'
  },

  fx_p_10: {
    id: 'fx_p_10',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'nova',
    text: '不确定这三个字我改了四遍才交。塔回了一句：结论可接受。以前我会把这种回复抄下来当例句，现在不用了。你要看原文吗，原文就在柜子里，第一格。',
    next: 'fx_p_11'
  },

  fx_p_11: {
    id: 'fx_p_11',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '薇拉的身份是拿数据换的：第七段的两段校验值换一张合法登记，代价写在一张观察条款上——她的编号进入长期观察名单，每季度报告一次行踪，条款末尾是她自己的签名。',
    next: 'fx_p_12'
  },

  fx_p_12: {
    id: 'fx_p_12',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '条款我逐行看过，一共十七行。签完我留了一份在维护日志里。往后每季度他们问我在哪儿，我报船位；不想说的那一栏，我写无可奉告。诺瓦说这样写合规，我就这么写。',
    next: 'fx_p_12a'
  },

  fx_p_12a: {
    id: 'fx_p_12a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'vera',
    text: '观察条款我抄在维护日志第二页，下面空着两行，留着以后填。日志每天交一次，备注照实写：昨天写的是探测臂擦洗，前天写的是换了左脚的一颗固定螺栓。轮休表上这个月的周末我填了两天，一天值班，一天去机库。',
    next: 'fx_p_13'
  },

  fx_p_13: {
    id: 'fx_p_13',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '你的名字进了灰塔的观察名单，编号后面写着长期。档案比一年前厚了三倍，内容你都能查，包括你自己写的那几页。舰上的人还是叫你呼号，检查员来了也照着呼号叫你。',
    next: 'fx_p_14'
  },

  fx_p_14: {
    id: 'fx_p_14',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'orbit',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '沧澜的安静轨道上，渡鸦号按合同的航路停着。行星的弧线横在舷窗下半部，一颗苍白色的卫星在画面一角，远处几枚锚标浮标排成一线冷光。船身外面没有爆闪，只有反照出来的蓝白。',
    next: 'fx_p_14a'
  },

  fx_p_14a: {
    id: 'fx_p_14a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'orbit',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '轨道上的日子很规律：早上核对两次锚标读数，中午把仪器拆开擦一遍，晚上把当天的记录抄进档案。检查员留下的表格被裁成卡片，写满班次和船位钉在留言板上；舷窗外的蓝和白一整天没有变过。',
    next: 'fx_p_15'
  },

  fx_p_15: {
    id: 'fx_p_15',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'orbit',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '季度检查的交通艇从船尾方向离开，检查员留下的空白表格被人裁成小卡片，写上船位和班次，钉在留言板上。有人在最下面添了一行：下一次检查前后谁值夜班，请自觉报名。',
    next: 'fx_p_16'
  },

  fx_p_16: {
    id: 'fx_p_16',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: '餐厅里有人在补给单上比价，把两家矿站的报价抄到同一张纸上。赌局又开了一轮，押得最准的那个人管一个月的热水壶。表格卡片被翻过来当便签使，背面还留着检查员的编号。',
    next: 'ending_spire_final'
  },

  ending_spire_final: {
    id: 'ending_spire_final',
    kind: 'ending',
    chapter: 'ch09',
    scene: 'orbit',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'nova',
    text: '校准报告。第七段的数据公开一半，塔只保留校准权，写入权整条划掉。维斯特的实验被写成失败的案例，署在塔自己的公开栏里。渡鸦号拿到合法航权，每季度过一次检查；薇拉用两段校验值换到一张合法身份，条款她自己签的字。',
    variants: [
      {
        // fx_bridge_public 已经把三段校样与原始记录整份发出去过：公开不能撤回，
        // 这一条路能谈的只剩校准权、航权与季度检查，不再说"只公开一半"。
        requires: ['fx_records_public'],
        text: '校准报告。第七段的原始记录在桥上那一次已经整份发出去了，收不回来；这一条路能谈的是权利：塔保留校准权，写入权整条划掉。维斯特的实验被写成失败的案例，署在塔自己的公开栏里，和公开记录里那一份对得上。渡鸦号拿到合法航权，每季度过一次检查；薇拉用两段校验值换到一张合法身份，条款她自己签的字。'
      }
    ],
    closure: CLOSURES.ending_spire_final,
    onEnter: [{ type: 'flag', key: 'ending_spire_final_reached', value: true }]
  },

  // ==========================================================================
  // 结局四 · 不写进任何档案（ending_together）
  // ==========================================================================

  fx_t_01: {
    id: 'fx_t_01',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '三封信被推到屏幕边上，一封也没有念。诺瓦在记录第一行写下：本舰不签署三方中任何一方的接管文本。联合的接收军官在频道里等了两分钟，然后把自己的要求改成一条口头询问：你们打算怎么办。',
    next: 'fx_t_02'
  },

  fx_t_02: {
    id: 'fx_t_02',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "三份条件全部退回，后面的开销要重新安排：联合坞位改为自费，药品和配给按市价买；灰塔检查需要另找认可方；矿站运单继续谈，眼下工钱先从公共柜里出。都听清楚，再定下来。",
    next: 'fx_t_03'
  },

  fx_t_03: {
    id: 'fx_t_03',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: "袖标我收起来，编制我留着不交，以后有关编制的表格交我本人填。副手我接着做，船上的活照排，工钱最后发。四个人我一个个问过了：铎兰留下，诺瓦留下，薇拉留下。这一条写进记录，谁改主意谁来划。",
    next: 'fx_t_04'
  },

  fx_t_04: {
    id: 'fx_t_04',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: '铎兰把工具箱第二格那把钥匙拿到焊台上，用割炬烧到变形，再夹进台钳压平。抽屉从此锁不上，他索性把里面的清单一页一页抄到抽屉外面，写完拿袖子把台面上的灰擦干净。',
    next: 'fx_t_04a'
  },

  fx_t_04a: {
    id: 'fx_t_04a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'doran',
    text: '抽屉锁不上以后，谁来借东西都在外面那张清单上划一笔，写谁借的、什么时候还。昨天有人借走两枚长螺丝，还回来的时候多塞了一枚短的，我没去找他，短的那枚留着也能用。清单我一周核一次，少了东西我自己补。',
    next: 'fx_t_05'
  },

  fx_t_05: {
    id: 'fx_t_05',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'nova',
    text: "报告我写在私人数据卡里，不交上去，也不发出去。塔在两周后把我从名册上划掉，通知寄到船上，我签收了。原始记录都保存在这张卡里，哪一天要拿出来，得由我们四个人一起决定。",
    next: 'fx_t_06'
  },

  fx_t_06: {
    id: 'fx_t_06',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '维斯特的整份数据最终没有写完。对照组那一段在公开记录里被标成中止，塔把这一条挂进未完成项，没有编案例号。第四个月他被调离校准序列，改去整理旧档案，实验名册上留着一个空格。',
    next: 'fx_t_07'
  },

  fx_t_07: {
    id: 'fx_t_07',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '第五条那一页没有进任何一方的册子，它被夹进渡鸦号自己的航次档案，编号留在船上。',
    variants: [
      {
        requires: ['fx_clause_revoke'],
        text: '第五条那一页当场作废，作废人穆尔·基廷。原件夹进渡鸦号自己的航次档案，联合那边只留下一张作废复写纸，编号留在船上。'
      },
      {
        requires: ['fx_clause_publish'],
        text: "第五条那一页的全文早就发出去了，公共端已经留存了副本。渡鸦号留的是原件，背面写了四个字：到此为止。"
      },
      {
        requires: ['fx_clause_trade'],
        text: '第五条那一页挂着，编号进过联合的册子，挂起期三年。原件夹在船上，挂起期满那一天，翻它的人得先找到这条船。'
      }
    ],
    next: 'fx_t_08'
  },

  fx_t_08: {
    id: 'fx_t_08',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'vera',
    text: "矿站的登记表寄来了，我没有填。我想先以自己的身份过一阵子。名字写在维护日志首页，第一行。以后谁来问我的名字，我就把那一页给他看，那是我亲手写下的。",
    next: 'fx_t_09'
  },

  fx_t_09: {
    id: 'fx_t_09',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'player',
    text: '你的军籍档从联合那边封存，最后一页写的是离职，理由栏空着。渡鸦号的名册上，你的名字后面只有呼号和班次，没有军衔，也没有担保人这一栏。',
    next: 'fx_t_10'
  },

  fx_t_10: {
    id: 'fx_t_10',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '渡鸦号没有归属港，也没有船籍，靠维修和运输活着：给矿站拖货架，给港区送零件，偶尔替两条商船跑一段护航。船上的规矩自己写，写在会议室的记录本第一页，一共十一条。',
    next: 'fx_t_11'
  },

  fx_t_11: {
    id: 'fx_t_11',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'coast',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '沧澜的海岸上，浪线一层一层推上来。伊芙娜穿的是普通的工作衫，袖标没带；她把靴子放在防潮堤上，赤脚踩进浅水，水冷得她皱了一下脸。薇拉站在旁边，先看了一会儿，也把靴子脱了。',
    onEnter: [
      // 文字已经写明她穿普通工作衫、没有袖标：立绘从这一句起换成民用那一套，不再穿作训服。
      { type: 'flag', key: 'ivna_costume_civilian', value: true }
    ],
    next: 'fx_t_11a'
  },

  fx_t_11a: {
    id: 'fx_t_11a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'coast',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '水比我想的冷。退潮以后石头露出来，走的时候看着脚下，踩深了靴子就干不了。回去把靴子晾在通风口上，明天早上再穿。船上今天的活排到下午，上午不用起早，你要是想再来一趟，我把防潮堤那边那条路记下来。',
    next: 'fx_t_12'
  },

  fx_t_12: {
    id: 'fx_t_12',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'coast',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'vera',
    text: '水比我想的冷。潮汐表上说这个月退潮在傍晚，一天推后四十多分钟，我想看一次差多少。水底下有石头，走的时候看着脚下，别踩到那片绿色的东西。',
    next: 'fx_t_13'
  },

  fx_t_13: {
    id: 'fx_t_13',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'coast',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '这一趟活是给三〇七号站拖两台泵，回来顺路带一船过滤网。货主按吨付钱，够发这个月的工钱，剩下的进公共柜。船修到下个月中，铎兰说灰鸢的左肩还得再补一遍漆。',
    next: 'fx_t_14'
  },

  fx_t_14: {
    id: 'fx_t_14',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'coast',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '两个人把靴子穿回去的时候，袜口都湿了半圈。伊芙娜把湿袜子拧了一把，准备回船上挂到通风口上烘；薇拉把这件事当成一条生活记录，抄进自己的维护日志。岸上的风把晾在防潮堤上的衣服吹得平直。',
    next: 'fx_t_14a'
  },

  fx_t_14a: {
    id: 'fx_t_14a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'coast',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '潮水又推上来一层，湿沙把脚印糊掉。两个人拎着靴子走上防潮堤，风把晾在栏杆上的衣服吹得平直，远处的港区亮起第一排灯，装卸轨那边有人在收工，货架车一辆一辆往库里推。',
    next: 'fx_t_15'
  },

  fx_t_15: {
    id: 'fx_t_15',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'planet_approach',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '渡鸦号离开沧澜那天，走的是没有编号的一条航线。蓝色的行星和那颗苍白色的卫星在船尾慢慢缩小，前方是外环的暗处，矿站自己的维护队正在那一段里换灯。船身外面只有反照的蓝白光，引擎的输出压在一档上。',
    next: 'fx_t_16'
  },

  fx_t_16: {
    id: 'fx_t_16',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'narration',
    text: '餐厅的抽屉敞着，里面的东西按大小排好，清单抄在抽屉外面。有人把湿袜子挂在通风口上，旁边贴了一张纸条写着谁的。锅里的面照旧下了，盐这一次放得刚好，诺瓦在纸上记了一笔。',
    next: 'ending_together'
  },

  ending_together: {
    id: 'ending_together',
    kind: 'ending',
    chapter: 'ch09',
    scene: 'coast',
    expression: 'warm',
    tone: 'off_duty',
    speaker: 'ivna',
    text: '不写进任何档案。写入口在上一次使用之后已经作废，封座按工单压上，烧断的芯片和余件分开放着。第七段归矿站维护，三家都没有拿到独家控制权；渡鸦号挂不上任何一面船旗，靠接活糊口，十一条规矩写在会议室记录本的第一页。袖标收在箱子里，名字写在自己的日志上。',
    variants: [
      {
        // trust.vera ≥ 4 且写入口在终章里被拆解：关系由她自己说出口，不由任何人代答。
        requires: ['vera_bond_close', 'fx_bridge_dismantle'],
        text: "不写进任何档案。桥的零件按三份分开保管，原来的写入口已经不存在；第七段归矿站维护，三家都没有拿到独家控制权。渡鸦号没有一条能报出去的船籍，修船和顺路带货运就是全部生计，十一条规矩一条不加一条不减。我的带队袖标收进箱底，名字只写在自己那份维护日志的首页。回程排班的时候薇拉把自己的名字写在我相邻的一格，她说这一格是自己挑的，落笔前还特地问了我一句，要不要同班。"
      },
      // 关系变体：只有 trust.vera ≥ 4 的存档会让薇拉自己把这段关系说出口；
      // 低信任的存档读基础文本，没有人替她承诺亲近，也不逼她回到复位口令那一条路。
      {
        requires: ['vera_bond_close', 'fx_bridge_seal'],
        text: '不写进任何档案。写入口封死并留了记录，钥匙随记录装箱；第七段归矿站维护，三家都没有拿到独家控制权。渡鸦号挂不上任何一面船旗，靠接活糊口，船上十一条规矩一条不加一条不减。袖标压了箱底，名字只留在自己那份日志上。回程的班次表上，薇拉把自己写进了我旁边那一格，她说这一格是她自己挑的。'
      },
      {
        requires: ['vera_bond_close', 'bridge_write_consumed'],
        text: '不写进任何档案。烧断的芯片留在工具箱里当凭据，写入口在用过一次之后就没有第二次；第七段归矿站维护，三家都没有拿到独家控制权。渡鸦号没有船籍，靠给矿站拖货架和替商船跑护航过日子，规矩自己写，写在会议室记录本的第一页上。袖标收好了，名字放进了自己的维护日志。有些话是薇拉自己挑的日子说的，我没有替她记下来。'
      },
      {
        requires: ['fx_bridge_dismantle'],
        text: '不写进任何档案。桥被拆成零件，零件按三份分开保管，写入口不再存在；第七段由矿站接手，三边谁都没有拿到独家控制权。渡鸦号没有归属港，也没有船籍，靠维修和运输过日子，十一条规矩写在会议室的记录本第一页。袖标收起来，名字自己留着。'
      },
      {
        requires: ['fx_bridge_seal'],
        text: '不写进任何档案。写入口封死并留了记录，钥匙随记录装箱；第七段的维护落在矿站名下，三家都没有拿到独家控制权。渡鸦号没有归属港，也没有船籍，靠维修加运货糊口，十一条规矩写在会议室的记录本上。袖标收起来，名字自己留着。'
      }
    ],
    closure: CLOSURES.ending_together,
    onEnter: [{ type: 'flag', key: 'ending_together_reached', value: true }]
  },

  // ==========================================================================
  // 结局五 · 服从（ending_reset）
  // ==========================================================================

  fx_r_01: {
    id: 'fx_r_01',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '移交在二十六分钟后完成。联合的接收军官带着两名记录员上船，清单当场念完：写入授权、三段校样、校准队列原件、航海日志副本。念到执行人一栏时，写的是本舰呼号，没有写名字。',
    next: 'fx_r_02'
  },

  fx_r_02: {
    id: 'fx_r_02',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'serious',
    tone: 'duty',
    speaker: 'ivna',
    text: '命令我执行完了，执行记录我签了名，放在战术台上，你自己看。接驳座今天的读数、封条号、钥匙移交单，三样都齐。以后这类单子我会照流程交，你不用再跟我解释什么。',
    next: 'fx_r_03'
  },

  fx_r_03: {
    id: 'fx_r_03',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '写入授权被拆成零件，分三批上缴；接驳座的线束整根抽走，干管上按联合的规格压了一块封板。第七段的锚标回到配给表的写法，一天一亮，按季度公布状态。航道上下一次出现突变值，要写申请调阅原始记录。',
    next: 'fx_r_04'
  },

  fx_r_04: {
    id: 'fx_r_04',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '校准序列中止这件事，官方归档里写成了一次普通的校准事故：设备故障，序列中断，无人员损伤。维斯特的名字不在官方正文里，他的权限栏在半年后恢复了，调到另一条航道上继续做校准；这一页要写申请才能查。外头传过的那些记录收不回来，半年后有人援引它的时候，公开栏里指向的还是同一段校验值——归档能改写法，改不了已经发出去的那一份。',
    next: 'fx_r_05'
  },

  fx_r_05: {
    id: 'fx_r_05',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '第五条那一页跟着档案一起归档，最后一行写的是已处理，没有附说明。',
    variants: [
      {
        requires: ['fx_clause_revoke'],
        text: '当天作废的那一页跟着档案一起走了。半个月后补来的版本里，作废记录被换成一行"已处理"，作废人的签名栏空着，日期也空着。'
      },
      {
        requires: ['fx_clause_publish'],
        text: '公开出去的那一页在两周后被另一个版本盖住：新的归档件上写的是"已处理，不再受理"。编号还在册上，执行人一栏仍然是那个编号。'
      },
      {
        requires: ['fx_clause_trade'],
        text: '挂起的那一条在归档时被改成"已处理"。编号进了册子，挂在下面的备注是一行小字：后续由原单位处置。原单位不会再来问你了。'
      }
    ],
    next: 'fx_r_06'
  },

  fx_r_06: {
    id: 'fx_r_06',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '铎兰把工具箱的锁换了一把新的，钥匙挂在腰间。灰鸢的例行维护排在第二天上午，工单上签名的是他，动手的是地勤里最年轻的那一个。左肩那块替换板补好了漆，颜色还是和旁边不一样。',
    next: 'fx_r_06a'
  },

  fx_r_06a: {
    id: 'fx_r_06a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'hangar',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '机库的早晨照旧从维护灯亮起开始。地勤把工具车推到位，按工单上的顺序做例行检查，最年轻的那一个负责灰鸢，先查左肩，再查挂钩。铎兰在旁边的台子上写工单，写完签上名字，走开的时候把灯关了一半。',
    next: 'fx_r_07'
  },

  fx_r_07: {
    id: 'fx_r_07',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '诺瓦的报告按时交上去，结论栏写的是本舰执行到位，建议保持现有编制。全文里没有出现你的名字，前后两版她改的都是同一处：把呼号换成了舰号。',
    next: 'fx_r_08'
  },

  fx_r_08: {
    id: 'fx_r_08',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'vera',
    text: '本月维护日志我已经交了，备注栏空着。夜枭的探测臂零点校准没有偏差，右腿外壳复查一次，插座断着。二号位值守按表走，下一次轮到我是在二十七日，需要我提前到位请通知。',
    next: 'fx_r_08a'
  },

  fx_r_08a: {
    id: 'fx_r_08a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '观察廊的霜化了一半，窗框上那道用手指写出来的方框还在。薇拉每天这个时候经过一次，手里夹着维护日志，步子不快也不停。日志的封面按顺序贴着标签，三次复查的日期排得整整齐齐。',
    next: 'fx_r_09'
  },

  fx_r_09: {
    id: 'fx_r_09',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: "你的档案干净了：这一次处置的评价是优秀，备注栏写着服从命令、处置得当。登舰名册上你的那一行只有编号和班次，新的值班员照着编号点名，念完就翻到了下一页。",
    next: 'fx_r_10'
  },

  fx_r_10: {
    id: 'fx_r_10',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '渡鸦号回到联合的护航序列，进坞大修，二号泵换了新的，最大加速度补回来一档。船上的编制一个没少，四个人都还在各自的岗位上。三处侧面开口刷了新漆，尾部的三个推进环换了衬垫。',
    next: 'fx_r_10a'
  },

  fx_r_10a: {
    id: 'fx_r_10a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '大修以后的头一个星期，值班表照旧按班次走，交接的时候各报编号。餐厅按点开饭，机库按工单开工，医务舱每周开一次常例检查。舰桥门口的告示板上贴的是维修后的复查安排，纸角用磁条压着。',
    next: 'fx_r_11'
  },

  fx_r_11: {
    id: 'fx_r_11',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '舰桥的值班表上，你的班次排在第二列。交接的时候，接班的军官报的是编号，你答的也是编号。主屏上的航道图恢复成配给表的样子，第七段那一行的状态灯是绿的。',
    next: 'fx_r_12'
  },

  fx_r_12: {
    id: 'fx_r_12',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "餐厅的留言板上，那张赌局还钉着，几个人的名字挤在同一行。桌子却分开了，四个人各自端着碗。诺瓦尝了一口面，放下筷子去接水；另外几个人低头吃完，依次离开。",
    next: 'fx_r_12a'
  },

  fx_r_12a: {
    id: 'fx_r_12a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "餐厅的钟走得很准，饭点一到就开饭。四个人分坐在两张桌子边，谁先来谁先吃，吃完各收各的碗。留言板上的赌局名单被重新钉整齐，赢家的名字后面画了一个圈，那一注一直夹在名单后面，纸角慢慢卷了起来。",
    next: 'fx_r_13'
  },

  fx_r_13: {
    id: 'fx_r_13',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'ship_rail',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '薇拉拿着维护日志从走廊经过，看见你，点了下头，步子没有停。她的日志夹在腋下，封面按顺序贴着三次复查的标签，标签边角被翻得起了毛。窗框上那道用手指写出来的方框还在。',
    next: 'fx_r_14'
  },

  fx_r_14: {
    id: 'fx_r_14',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'planet_approach',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '下一次出航是护送配给船回沧澜。渡鸦号走在队列中间，蓝色的行星在前面慢慢转过来，一颗苍白色的卫星从晨昏线后面升起来。舰上广播报了一次编队位置，之后就没有别的声音了。',
    next: 'fx_r_14a'
  },

  fx_r_14a: {
    id: 'fx_r_14a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'planet_approach',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '编队里的日子没有什么可说的：早上核对配给清单，中午按顺序轮换值守，晚上把当天的记录整理成一份交上去。饭点照旧是面，菜是罐头，值夜的人多拿一块饼干。检查单填到第三栏，都是同样的几行字。',
    next: 'fx_r_15'
  },

  fx_r_15: {
    id: 'fx_r_15',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'planet_approach',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'narration',
    text: '第七段重新按配给表运行，外环三个站的报表统一递到联合的路径审计，按季度公布。矿站的泵件照常送到，三〇七号站的泵房没有停过。这些事都写在舰桥的航行日志里，一天一行，没有空白。',
    next: 'fx_r_16'
  },

  fx_r_16: {
    id: 'fx_r_16',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: '餐厅的灯关得比平时早，桌面擦得很干净，留言板上的纸页被重新钉整齐。有人把你的杯子收到柜子里，和别的杯子摆成一排，杯底朝上，看不出哪一只是谁的。',
    next: 'fx_r_16a'
  },

  fx_r_16a: {
    id: 'fx_r_16a',
    kind: 'dialogue',
    chapter: 'ch09',
    scene: 'messhall',
    expression: 'neutral',
    tone: 'off_duty',
    speaker: 'narration',
    text: "收桌以后，杯子按顺序摆回柜子里，杯底朝上，看不出哪一只是谁的。最后一盏台面灯留着给夜班照路，通风口那边挂着几双洗过的袜子，标签上的名字都还在，随着送风轻轻晃动。",
    next: 'ending_reset'
  },

  ending_reset: {
    id: 'ending_reset',
    kind: 'ending',
    chapter: 'ch09',
    scene: 'bridge',
    expression: 'neutral',
    tone: 'duty',
    speaker: 'vera',
    text: '服从。复位口令念出去了，答复是收到。锚链被联合收回，第七段恢复配给表，桥拆成零件分批上缴，维斯特的实验被记成一次普通的校准事故。渡鸦号回到护航序列，编号进了册，值守按表走。备注栏空着。',
    variants: [
      {
        // 已经公开的记录不能被追认成没发生过：官方归档可以写成一次普通事故，
        // 但公开栏与公开版第五条留在外面，援引时仍然指向同一份记录。
        requires: ['fx_records_public'],
        text: '服从。复位口令念出去了，答复是收到。锚链被联合收回，第七段恢复配给表，桥拆成零件分批上缴。维斯特的实验在官方归档里被记成一次普通的校准事故；发出去的那份公开记录收不回来，半年后有人援引它的时候，指向的还是同一段校验值。渡鸦号回到护航序列，编号进了册，值守按表走。备注栏空着。'
      },
      {
        requires: ['fx_clause_publish'],
        text: "服从。复位口令念出去了，答复是收到。锚链被联合收回，第七段恢复配给表，桥拆成零件分批上缴。第五条的新归档件写的是\"已处理\"，已经公开的那一页留在公共档案里，带着原来的发布日期和联署名；维斯特的实验被记成一次普通的校准事故。渡鸦号回到护航序列，编号进了册，值守按表走。备注栏空着。"
      }
    ],
    closure: CLOSURES.ending_reset,
    onEnter: [{ type: 'flag', key: 'ending_reset_reached', value: true }]
  }
};

/**
 * 终章结局表：每条都必须带 closure（机制 / 船 / 四名同伴 / 主角位置）。
 * `id` / `kind` 与节点同源：聚合器按 outcomeId 把终章结局登记进 STORY.finalEndings，
 * 并据此把结算节点的 kind='ending' 认成整体结局（而不是章末继续点）。终章没有章末结果，
 * 所以 CHAPTER.outcomes 留空表，不把同一批 id 同时登记成章末结果和终章结局。
 */
const FINALE_ENDINGS = {
  ending_concord_final: {
    id: 'ending_concord_final',
    kind: 'ending',
    chapter: 'ch09',
    title: '结局 · 归档',
    route: 'concord',
    routeName: '环带联合',
    summary: '记录与维护辖区按收据交回联合序列（写入口如果在终章里被用掉一次，交出去的是作废的硬件与完整记录），第七段的灯按纸面亮到冬季末，渡鸦号回到护航编制。',
    consequences: [
      '第七段与外环三个站的配给表绑在一起，按月公开；矿站那张回执上写着泵房第二台机重新开起来了。',
      '维斯特被从校准名册移到复核栏，权限没有恢复；他写的那套方法被钉在失败案例的附录上。',
      '基廷在会议室里把第五条处理完，回安全处写说明；档案里那一页执行人栏是空的。'
    ],
    closure: CLOSURES.ending_concord_final
  },
  ending_scarlet_final: {
    id: 'ending_scarlet_final',
    kind: 'ending',
    chapter: 'ch09',
    title: '结局 · 通航',
    route: 'scarlet',
    routeName: '赤垣解放阵线',
    summary: '锚点的读权限与维护名单交回外环，渡鸦号的船籍注销，死航线上出现第一条公开航路。',
    consequences: [
      '二十一个锚标由矿站自己的维护队逐个点亮，亮一盏报一盏，维护班次写进矿站的表。',
      '维斯特的失败案例贴在矿站公告板上，正文没有他的名字；那一行写着不得进入第七段作业区。',
      '联合保留配给表的发放权，失去这一段的独家路权；路径审计把渡鸦号从护航名册上划掉。'
    ],
    closure: CLOSURES.ending_scarlet_final
  },
  ending_spire_final: {
    id: 'ending_spire_final',
    kind: 'ending',
    chapter: 'ch09',
    title: '结局 · 校准报告',
    route: 'spire',
    routeName: '灰塔观测局',
    summary: '第七段的记录状态按桥上那一次处置照实收尾（整份公开过就不再说"公开一半"），塔保留校准权、失去写入权；渡鸦号拿合法航权，每季度过一次检查。',
    consequences: [
      '维斯特的案例由塔自己写成失败的案例公开，第四个月他被调去整理旧档案。',
      '附件三的三条由诺瓦自己写：结论栏归观测员本人、检查不查人、她可以随时退出合同。',
      '船员各自的档案同时变干净：代价写成一张季度检查表，贴在储物格旁边。'
    ],
    closure: CLOSURES.ending_spire_final
  },
  ending_together: {
    id: 'ending_together',
    kind: 'ending',
    chapter: 'ch09',
    title: '结局 · 不写进任何档案',
    route: 'together',
    routeName: '渡鸦号自己',
    summary: '三方接管文本一封没有签，写入口失去可写入状态（拆解或作废封存），锚点交回矿站自己维护，渡鸦号谁的都不归。',
    consequences: [
      '第七段不再有独家控制权；维护队由矿站出人，读的权限写进他们自己的表。',
      '维斯特的整份数据没有写完，塔把这一段挂进未完成项，没有编案例号。',
      '第五条的原件留在船上；渡鸦号的规矩自己写，写在会议室记录本第一页。'
    ],
    closure: CLOSURES.ending_together
  },
  ending_reset: {
    id: 'ending_reset',
    kind: 'ending',
    chapter: 'ch09',
    title: '结局 · 服从',
    route: 'reset',
    routeName: '无（代价结局）',
    summary: '复位口令念了出去，锚链被联合收回，写入授权按已有状态分批上缴，第七段回到配给表；已经公开过的记录不能被追认成不存在，所有人活着。',
    consequences: [
      '写入授权分三批上缴，接驳座的线束抽走并按联合规格封板；装备记录一天一行，没有空白。',
      '维斯特的实验被记成一次普通的校准事故，半年后他在另一条航道上继续做校准。',
      '档案干净、评价优秀；名册上你的那一行只有编号和班次，呼号那一栏空着。'
    ],
    closure: CLOSURES.ending_reset
  }
};

// 终章结局节点与结局表共用同一份 outcomeId / kind：只写一处，避免两边漂移。
for (const [endingId, meta] of Object.entries(FINALE_ENDINGS)) {
  if (NODES[endingId]) {
    NODES[endingId].outcomeId = endingId;
    NODES[endingId].kind = meta.kind;
  }
}

export const CHAPTER = {
  number: 9,
  id: 'ch09',
  nodeIdPrefix: 'fx_',
  title: '终章 · 盟约',
  badge: '终章',
  status: 'complete',
  entry: 'fx_01',
  nextChapter: null,
  contentTarget: {
    mainPathCjk: 14000,
    minMainPathCjk: 14000,
    maxPreferredMainPathCjk: 15000,
    note: '本轮用户口径：经由五个结局中任何一个的一条正常主干路径都要 ≥14,000 中文可读字符，目标区间 14,000–15,000。FULL_GAME_PLAN.json 登记的 13,000 是旧值，整合时以 contentActual 的实测量为准。'
  },
  contentActual: {
    mainPathCjk: 14615,
    corpusCjk: 25181,
    nodes: 301,
    choices: 5,
    choiceOptions: 19,
    endings: 5,
    mainPathByEnding: {
      ending_concord_final: 14615,
      ending_scarlet_final: 14311,
      ending_spire_final: 14204,
      ending_together: 14287,
      ending_reset: 14466
    },
    boundedPathRange: [14121, 14615],
    measuredAt: '2026-09-12',
    method:
      'drafts/ch09-selfcheck.mjs：按引擎语义（requires / nextIf / variants / choices / effects）从 fx_01 推进；主干路径只统计该路径真正显示过的文本（节点文本或命中变体 + 被选项 label 与 reaction），不把互斥分支相加；语料总量统计全章节点文本、变体、选项文案与 reaction 之和。CJK = /[\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFAFF]/，不含标点、空白、数字与拉丁字母。'
      + 'G26 文案修复（fx_08 / fx_16 / fx_16a / fx_63 / fx_c_05 去掉元叙述式的章节指代、袖标写成备用条）与资格旗标收口点后，按引擎口径复算的数字以 FULL_GAME_PLAN.json 与 FULL_GAME_READY.json 的登记为准；本条自检记录按当时的字节原样保留。'
  },
  decisions: [
    'fx_choice_side',
    'fx_choice_bridge',
    'fx_choice_clause',
    'fx_choice_word',
    'fx_choice_stay'
  ],
  outcomeNodeIds: [
    'ending_concord_final',
    'ending_scarlet_final',
    'ending_spire_final',
    'ending_together',
    'ending_reset'
  ],
  scenes: [
    'battle',
    'bridge',
    'commandroom',
    'reactor',
    'hangar',
    'ship_rail',
    'messhall',
    'orbit',
    'planet_approach',
    'city',
    'coast'
  ],
  companionMilestones: {
    ivna: [
      '编号与第五条在会议室里当面答完：她拒绝被当成一笔账，编号自己留着（fx_31、fx_33a、fx_choice_clause）',
      '接驳座由她执行，代价在反应堆舱里当场写清（fx_17a、fx_55、fx_60、fx_60a）',
      '五个结局里她的位置各自写完整：留舰进册、脱离编制做航道教官、干净身份与季度复核、留在船上做副手、只剩编号'
    ],
    doran: [
      '桥的硬件由他执行，材料清单与用量用在他自己的嘴上写在桌上（fx_18a、fx_54、fx_58）',
      '工具箱第二格的处置在每个结局里都有明确落点（挂进清单、留在船上、熔掉钥匙、换锁）',
      '出港战斗里灰鸢的左肩替换板是他自己交出去的撞击面（fx_47、fx_47a、fx_48a、fx_48b）'
    ],
    nova: [
      '校准队列、四十四号令与死航线残页在阵列自己的值班台上摊开，方式取决于她报告是否已经公开（fx_41）',
      '报告的结论栏与去留由她自己写、自己签；公开与否的后果在每个结局里各写一次（fx_39d、fx_59、fx_p_10、fx_t_05）',
      '她把自己写的那一条念给全舰听（fx_39d、fx_41、fx_50）'
    ],
    vera: [
      '自己提出并执行测距记录：执行之前与执行之后两段校验值，由她自己署名（fx_25、fx_39e、fx_46a、fx_61c）',
      '在会议室里自己说出不签：执行人那一栏写的是 AU-11（fx_32）',
      '复位口令的最终处置由她当面听完并用自己的一行字收尾（fx_64、fx_66、fx_choice_word、fx_67）',
      '名字的结局由她自己签领：留名、签领、换身份、写在自己的日志上、只剩收到（五个结局各一段）'
    ]
  },
  endings: FINALE_ENDINGS,
  // 终章没有章末继续点：五个 id 只登记一次（endings / story.finalEndings）
  outcomes: {},
  nodes: NODES
};

export default CHAPTER;
