// Original O8 action packet. Root alone integrates the Site.
const nodes={}; const directions={};
const id=s=>`v6_returned_${s}`;
const flag=key=>({type:'flag',key,value:true});
function chain(rows,next){rows.forEach(([key,speaker,scene,tone,expression,text],i)=>{
 nodes[id(key)]={id:id(key),kind:'dialogue',chapter:'ch09',speaker,scene,tone,expression,text,next:i+1<rows.length?id(rows[i+1][0]):next};
 if(!['narration','system','player'].includes(speaker))directions[id(key)]=[{framing:tone==='combat'?'head':tone==='off_duty'?'close':'half'}];
});}
function decision(key,scene,text,choices){nodes[id(key)]={id:id(key),kind:'choice',chapter:'ch09',speaker:'narration',scene,tone:scene==='spacebattle'?'combat':'duty',expression:'neutral',text,choices};}

chain([
 ["001","narration","commandroom","duty","neutral","阿肆的消息没有走军用呼叫。她把一页新的转运单拍过来，纸角压着一把换门用的小铰链。单上有五个待转送位置，目的栏仍然写着旧的处置站。主战场已经停火，那条运输船却正按此前发出的整批转运指令离开泊位。"],
 ["002","au09","commandroom","duty","pensive","这是今天的单，我在封样处核过时间。我认识一位随船做看护的人，她愿意让你们接通里面。旧事我今天不想再讲了，你们拿去用的是这页运输安排，不是把我那一次拿出来，证明今天的人应该听谁的。"],
 ["003","vera","commandroom","duty","serious","我想先听里面的人说。阿肆，你把愿意接话的方式留给我就好。有人想走，有人想先见自己的家人，也可能有人现在只想停下来。我要知道他们各自的意思，再去排救援的位置。"],
 ["004","narration","commandroom","duty","neutral","画面里，阿肆用左手稳住拐杖，右手把拍到的单据移开一点，露出下面单独写的回话时间。她没有再翻到个人经历那一页。诺瓦按她确认的范围复制新单，把看护的私人住址从要送进公共频道的版本里裁掉。"],
 ["005","nova","commandroom","duty","serious","我把船号、出发时间和收货站对过了，三处能合上。里面的个人资料只发给得到同意的接收者；拦截时要公开的是有人仍在表达意愿，运输却准备替他们把程序继续走完。"],
 ["006","narration","commandroom","duty","neutral","第一段回话只有敲击声。看护把终端轮流递过去，有人愿意露出脸，有人只让你们听声音。靠门的两个人想离开；第三个人躺着，听清问题以后举了一下手。第四个人指名想去自己认识的民用诊所。第五个人请你们先等，他还没收到家里的答复。"],
 ["007","vera","commandroom","duty","worried","我听见了。想离开的三位，我们准备能坐和能躺的位置；要去诊所的，我们先找到你认识的人核实。还在等答复的那位，我不会替你选上哪条船。先让他们停止继续转运，你在能安全停下的地方等。"],
 ["008","ivna","bridge","duty","serious","前方两台护送机、一条运输船。运输方接受查验请求，却不肯停下牵引，说所有人的去向已经在旧单上。我会再给它一次明确的通知，机库同时准备。等候不是任由它把人拖出能救到的范围。"],
 ["009","doran","hangar_duo","duty","serious","医务间能接三位，最里面那张临时床得从备用工具位让出来。我把大件移开，担架路线先走一遍。别再往机库深处加床，灰鸢和夜枭回来时还要检修，咱们确实只有这么大一条船。"],
 ["010","narration","hangar_duo","duty","neutral","地勤抬走一台备用台钳，把原来堆在地上的软管挂回墙面。医护推着空担架转了一遍，停在最窄的地方让铎兰再挪开一个箱角。你走向灰鸢时，薇拉把看护最后发来的座位图放大，逐个记住刚才回应的位置。"],
 ["011","player","hangar_duo","duty","serious","三个位先准备好，民用诊所和家属的联络继续做。对方若停止牵引，我们就在安全位置查验；若继续拖走，就拆船外的拖曳装置。没有任何一项授权允许向有人坐着的舱室开火。"],
 ["012","narration","spacebattle","combat","neutral","渡鸦号截到运输船时，它刚离开大港的掩护范围。两台护送机散在货舱两侧，一台抬起武器示意你停下，另一台先转向母舰，要求出示任务来源。伊芙娜把五段不同的回话依次放出来，让对方听见它们不能合成同一个同意。"],
 ["013","ivna","spacebattle","combat","angry","旧单只能证明有人下过指令。船里的人正在回答，他们没有授权把自己整批交过去。解除拖曳锁定，让民用接收方过来确认。渡鸦号已经在现场，这一次谁继续推进，记录里会有他的动作。"],
 ["014","narration","spacebattle","combat","neutral","抬着武器的护送机没有收手，运输船外部拖曳架反而收紧了一截。另一台机体却把枪口压向空处，给侧舱门让出一个角度。它的驾驶员只说自己看见了还在回应的人，随后把这一段加入了本机的事故记录。"],
 ["015","vera","spacebattle","combat","serious","有人给出通道了。我走他让开的角度，先让看护知道我们真的到了。夜枭的左手能接住舱门外那根扶手，主担架由运输船自己的舱内滑轨送到过渡台，别把整间舱室的重量压到机体上。"],
 ["016","narration","spacebattle","combat","neutral","夜枭停在侧门附近，感应单元先确认门边没有正在移动的外部机械。你看见它的负重左手抓住固定扶手，另一侧三组传感器仍朝外张着。舱内有人把遮住窗的板拉开一小格，一只手在缝后面停住，等薇拉先报出自己的名字。"],
 ["017","vera","spacebattle","combat","serious","我是薇拉，刚才和你们通话的人。我现在在门外。开门前再确认一次，外面的扶手已经稳住，过渡台还没接好，谁都先别跨出来。你们说准备好了，我再接下一步。"],
 ["018","nova","bridge","combat","worried","运输船外部识别中继正在把我们的停靠方向发回收货站。先开侧门能更快接出三位，但追踪会跟着这段航迹；先切中继和拖架的外部控制线，可以少掉这一层追索，可原转运链的实时记录也会中断，舱门联络要改用短距备用机。"]
],id('choice_1'));
chain([
 ["evac01","narration","spacebattle","combat","neutral","灰鸢守在侧舱前方，让过渡平台沿母舰牵引缆靠上去。夜枭等两端的固定灯都亮起才松开半个身位，看护推来第一副担架。躺着的人经过舱门时又抬了一次手，薇拉朝他点头，把接人的动作留给已经站好的医护。"],
 ["evac02","nova","bridge","combat","worried","三位的通道打开了，中继也把渡鸦号的舷侧号码传出去了。我能留下原转运记录，不能把已经发出的坐标收回来。接收区已开始问我们的去向，后面停哪一站都会多一层查验。"],
 ["evac03","narration","spacebattle","combat","neutral","侧舱门前空出了一段位置，灰鸢随即切断外部中继的馈线。新信号停了，先前送出的航迹仍留在远处。诺瓦保存了完整的实时转运段，连同那三个人自己选择登舰的回话一起封进记录；里面没有第四个人的诊所地址。"]
],id('101'));
chain([
 ["relay01","narration","spacebattle","combat","neutral","灰鸢绕到运输船背面，按夜枭刚刚重测的外部线路位置切断中继馈线。它与舱内生命维持各有独立走向，供电指示逐个核清后才动手。信号灯灭下去，运输船的门边通话也跟着断了一瞬；薇拉把备用机贴近观察窗，等里面重新回话。"],
 ["relay02","vera","spacebattle","combat","serious","备用机接通了。我再问一次刚才的问题，不沿用中断前的最后一句。侧门里的三位现在仍想离开吗？听清了。过渡台还要靠近一点，医护已经在另一端，不会让你们自己跨过这道空隙。"],
 ["relay03","narration","spacebattle","combat","neutral","几分钟以后，第一副担架移过舱门。医护把额外一包保温用品裹在乘客身上，告诉看护接驳比原来迟了一段。原转运链的实时画面已经断掉，诺瓦只能保留断开前的单据、各人的回话和船外实拍，少了一份能够直接追到下一站的活记录。"]
],id('101'));
chain([
 ["101","narration","spacebattle","combat","neutral","三位愿意登舰的人都移过过渡台以后，运输船里还留着两位和看护。那位想去诊所的人说自己叫阿棠，希望新的接收者用这个名字叫她。另一人仍在等家里的回话，他请看护把终端放到能看见的位置，不愿为了赶上你们的出发时间匆忙改变主意。"],
 ["102","vera","spacebattle","combat","serious","阿棠，诊所已经回话，你说的那个人今天确实当班，接你的民用艇正在过来。还在等消息的那位，我们先把这条船停稳。侧门由你们里面决定开合，运输方不能再把你们拖往处置站。"],
 ["103","narration","spacebattle","combat","neutral","一直抬着武器的护送机突然向拖架侧面开了一枪。它打的是灰鸢准备接近的外部踏板，碎片沿船壳弹开。为你们让过路的那台机体移到侧舱前面，挡住了第二次瞄准。它没有加入渡鸦号的频道，只反复报出舱内还有人。"],
 ["104","ivna","bridge","combat","angry","别向那台挡在舱门前的机体开火，它正在保护人。近防炮只压无人拖架外侧，射界由我确认。灰鸢，切开对方还在收紧的外索，给侧舱留出距离。我们要的是里面的人能自己离开，不是把整条船打散。"],
 ["105","narration","spacebattle","combat","neutral","你将灰鸢压到运输船腹面，用切割器断开最外一条回收索。绳头弹向空处，另一条索却从背后兜过来，擦住机体左肩的挂钩。灰鸢被带得半转，视野里一瞬间只剩船底的暗面。你松开被卡住的工具，让机体先脱出拉扯。"],
 ["106","player","spacebattle","combat","serious","工具脱钩，灰鸢还能活动。别把夜枭拉过来解我这根索，侧门仍需要它看住。母舰绞盘给我一段反向拉力，我从索头下面退出来。"],
 ["107","narration","spacebattle","combat","neutral","渡鸦号的回收缆在腰侧绷紧，灰鸢借着慢慢改变的受力退了半个机身。那台保护舱门的护送机抬手挡开一块弹回来的踏板，随后向上离开射界，给你留出了一条回到外侧的路。它的驾驶员报出自己即将返港，愿意保留本机看到的一切。"],
 ["108","vera","spacebattle","combat","worried","侧舱压力保持，里面的人都回应了。那位还在等的人听见刚才的炮声，问是不是必须马上跟我们走。我告诉他先把身体固定好，我们正在让船停下；他可以在安全以后再决定，这句话请大家一起做到。"],
 ["109","narration","spacebattle","combat","neutral","运输船的外拖架开始向远处的处置航线转动。船内驾驶员回答说自己已经松开操纵，旧的牵引指令仍由外挂驱动箱执行。铎兰把外壳上的检修图放大，指出驱动箱与载人舱的隔离位置。它没有驾驶舱，里面只有牵引电机和记录部件。"],
 ["110","doran","bridge","combat","serious","完整接住它，能留住拖架自己的动作记录，可本舰得多烧一段姿态油，灰鸢还要上去把机械锁卸掉。直接切掉无人驱动箱也能停，碎件要清到远处，那份原始动作记录就跟着毁。别碰船内的生命维持线，图上这两条不走同一个口。"],
 ["111","nova","bridge","combat","serious","留下驱动箱，可以对照谁在收到反对后还继续收索；它能补现场证据，补不回已经中断的全部转运链。毁掉它，我们仍有人的回话和船外影像，争议会多一层。无论选哪一个，先让驾驶员确认舱内已经转入自己的独立供电。"],
 ["112","narration","spacebattle","combat","neutral","船内先后亮起三个独立状态灯，看护从舱窗后比出稳定的手势。运输船仍在慢慢偏离安全航线，另一台护送机远远盯着你们，没有敢再把枪口越过载人舱。灰鸢的回收缆和渡鸦号的近防炮都等着你给出同一个目标。"]
],id('choice_2'));
chain([
 ["capture01","narration","spacebattle","combat","neutral","渡鸦号先接住拖架，灰鸢沿固定点一点点靠近机械锁。你把尚能使用的工具插进外部卸压口，转过卡住的那半圈。拖架终于停止收索，主缆把整个驱动箱带离载人舱。母舰为维持这一段相对姿态，多烧掉一格预留燃料。箱体固定以后，灰鸢先回库卸下受扭挂钩，夜枭继续守住载人舱。"],
 ["capture02","doran","hangar","duty","pensive","箱子能读，先放在隔离架，接头别碰本舰系统。灰鸢那条挂钩也得拆下来测，刚才受过扭，不能肉眼看直了就继续吊东西。少掉的燃料和这一项检修都进下次出动前的实际缺口。"],
 ["capture03","narration","hangar","duty","neutral","驱动箱被绑在独立架上。诺瓦用它自己的只读输出抄下最后几次收索动作，时间恰好落在那些拒绝转运的回话之后。记录还没有替任何人赢得判决，却让那台保护舱门的护送机驾驶员回港陈述时，多了一件能与自己影像对照的实物。"]
],id('121'));
chain([
 ["drive01","narration","spacebattle","combat","neutral","近防炮把无人驱动箱外侧的武装警戒压回去，你从载人舱背面切断驱动箱的固定支座。它脱离船壳以后，渡鸦号沿空出的射界将其打停。灰鸢把剩下的松索推离侧舱，夜枭报出舱门已无外部牵引，里面的人终于不用跟着整条船继续转向。"],
 ["drive02","nova","bridge","combat","pensive","外部牵引停止，原始驱动箱记录丢了。人的回话、船外影像、独立供电确认都在，我按各自来源留，不写成我们拿到了完整机载日志。那位返港驾驶员也会单独保存他看到的版本。"],
 ["drive03","narration","spacebattle","combat","neutral","破碎的驱动箱被清到载人舱外侧的安全距离。护送机最后看了一眼已经停住的运输船，收起武器退向远处。渡鸦号消耗的那一段弹药不多，却已经不能再算成完整的一箱；诺瓦在现场记录里留下缺失原件的位置。"]
],id('121'));
chain([
 ["121","narration","medbay","duty","neutral","最先登舰的人躺在医务间，听见门外普通的脚步声才慢慢松开拳头。另两人坐在靠墙的椅子上，一人想先给家里写信，另一人只想喝点水。医护没有让他们排队说经过，先问各自哪一种帮助最急，按回应把杯子和终端分开递过去。"],
 ["122","vera","medbay","duty","warm","已经停下来了。你想写信就先写，想等一会儿也行。我们准备的三个位是让你们休息，不会到晚上又变成谁应该去接接口、谁应该帮忙值勤的名单。你们现在可以什么工作都不答应。"],
 ["123","narration","spacebattle","duty","neutral","民用接收艇从另一侧靠近运输船。阿棠认出视频里的诊所值班员，自己提起包，走向给她留着的门。还在等的人终于收到家里的回话，读完以后请看护陪他去同一条艇上，先在那里等亲属接下一段。他没有登上渡鸦号，仍然是这次被救回去的人。"],
 ["124","nova","bridge","duty","serious","五个人都有自己确认的下一处，三位在本舰，两位上民用艇。那位看护也完成了她愿意陪的这一段。阿肆要收的是平安到达的回话，我们按各人同意告诉她，不把新的住处汇成另一张可以整批带走的单。"],
 ["125","narration","bridge","duty","neutral","返港申请很快被退回来。原补给泊位要求先交接三位乘客的处置权，才肯放行本舰补给；港外轨道的一处民用救护锚位愿意派医护过来，却没有权力让渡鸦号长期停下。伊芙娜把被划掉的航图位置留下，让所有人看清这次救援究竟失去了什么。"],
 ["126","ivna","bridge","duty","serious","三位乘客的意愿没有改变，我们不交人换泊位。民用救护锚位能给一次及时检查，但本舰要停在外圈接受船舶问询，供给也按日付。另一处外环站愿意接我们，人可以继续治疗，只是少一些检查设备，要多走一段。"],
 ["127","doran","bridge","duty","worried","刚才医护已经看过，三位现在能承受后面这段航行，哪一位情况变了就就近停，不能拿今天这句话包以后。留下等问询，泊费吃储备；往外环走，航行和基础医疗吃储备。两边都不能再把机库空位算成可继续接人的床。"],
 ["128","vera","bridge","duty","pensive","我把两种去处都讲给他们了。要紧的检查他们都想做，也同意按本舰真正能承担的安排走。我会陪每一位把需要的东西交给接手的人，等他们知道下一次该找谁，再离开那一间屋子。"],
 ["129","player","bridge","duty","serious","先保住已经答应的照护，不再接新的转运请求。这次靠哪一处停下来，由船方承担相应成本；任何人随后想去别处，我们再替他找确实能接上的一段，不把今天的选择锁成长期归属。"]
],id('choice_3'));
chain([
 ["port01","narration","orbit","duty","neutral","渡鸦号停进港外轨道锚位。民用医护带着设备过来，在船上完成三位乘客需要的检查；港务问询则留在另一条频道，核对的是船舶停靠和现场处置。伊芙娜坐在那一边，门合上以后，医务间没有被叫去重复讲述刚才的炮声。"],
 ["port02","ivna","commandroom","duty","serious","船的问询由我接，医务那边按自己的时间做。港方暂时不恢复旧补给待遇，这一点我已经听见了。我们按日付现在能付的费用，不以任何一个乘客签回原处置单作为退一步的条件。"],
 ["port03","narration","medbay","duty","neutral","等候持续了四天。检查做完，结果由本人交给接手的医护；渡鸦号却因为每日泊费推迟了原定的大修。铎兰把新的停机日期贴到灰鸢挂架旁，让下一次求援先看见还没有修完的那几项。准许临时靠泊，离能够随时再出发仍差一段真实距离。"]
],id('201'));
chain([
 ["outer01","narration","orbit","duty","neutral","渡鸦号离开原补给港，驶向愿意接收的外环站。民用医护先把必要的过渡照护安排交给船上，药和耗材逐项点清，后面的设备检查要等转诊窗口。三位乘客知道这一段会长一些，各自把需要联系的人告诉了接手者。"],
 ["outer02","doran","medbay","duty","serious","这几天的基础照护照安排做，有变化马上叫人。补上来的材料先给这里，灰鸢检修能等的继续等。我已经把下一趟护送回绝了，不能一边说床位满着，一边再为了那点报酬接一个满编任务。"],
 ["outer03","narration","medbay","duty","neutral","到站以后，一位乘客选择暂住熟人家，两位继续接受照护。薇拉陪他们认识接手的人，等对方把下次能来检查的时间说清才离开。更远处的设备仍要预约，船上用掉的医疗耗材也得补齐；外环的欢迎没有替这些等待变出一份现成答案。"]
],id('201'));
chain([
 ["201","narration","commandroom","duty","neutral","阿肆收到平安回话时，正在第四工棚试新门。画面里那扇门仍有一点歪，她站在旁边，用左手的拐杖挡住门下沿，再让旁边的人慢慢合上。听见第五个人已经等到家属，她放下手里的螺钉，等诺瓦把每一份获准转告的消息念完。"],
 ["202","au09","commandroom","duty","warm","知道他们到了就好。阿棠如果愿意，下次让她自己给我说一句。剩下的不用替她讲。我这边门还差两下，装好晚上能少进点风；今天那张转运单我留原件，谁想查程序，过来问这一张。"],
 ["203","narration","commandroom","duty","neutral","通话结束前，阿肆向你们展示了一次门的开合。铰链响了一声，门终于合到框里。她看了看，满意地点头，没有等谁把她称作这次救援的象征。新单旁边的那把小铰链不再压纸，已经成为第四工棚会用到的一部分。"],
 ["204","nova","commandroom","duty","serious","现场记录已经送到愿意接件的审查者手里，个人住址按同意范围交给接收医护。那台让出舱门的护送机驾驶员被暂停了一次出勤，他选择递交自己的影像。我们能替他证明自己看见的动作，不能答应他以后不再受追问。"],
 ["205","narration","commandroom","duty","neutral","三方的反应各不相同。联合内部有人接下这一起运输争议，也有人坚持原来的移交清单；赤垣的矿站愿意借医疗位置，物资仍按批筹集；灰塔要求取得完整病例，诺瓦把可以公开的程序记录送去，把没有得到同意的那一栏关在原处。"],
 ["206","ivna","commandroom","duty","serious","这条救援通道先只接能核实的人和去处。谁愿意给床、谁能陪转诊，都按这一次实际做得到的来。我们失掉的旧港和配额还没回来，不能把一艘船写成足以接下所有人的机构。"],
 ["207","narration","hold","duty","neutral","备用工具位没有立刻装回去，那里放着清洗后的折叠床，给已经接下的后续复查留位置。一名恢复得较好的乘客提出想学修理，铎兰请他先把休息日过完，再来谈学几天。另一个人只想回家，船上没有因此少给他准备路上的水和食物。"],
 ["208","doran","hold","duty","warm","想学就从你喜欢的东西开始，不必挑我最缺人的那项。先回去看看家里也行，过一个月还想来，我们再排。你欠自己的休息比欠我一双帮忙的手多，今天把这句听进去就够了。"],
 ["209","narration","quarters","off_duty","neutral","出发的前一晚，薇拉把一只旅行包摊在床上。里面没有维护手册，放的是两套换洗衣服、一条不太新的围巾和从港区借来的书。秒表被放在床边，她把围巾绕了一次，发现太长，又拆开重新折。你到门口时，她正在和那个绳结较劲。"],
 ["210","vera","quarters","off_duty","pensive","看护下周要去两个转诊点，我想跟她一起走。先陪已经认识的人把后面的检查接上，也去听新的求助。夜枭留在架上完成检修，我坐普通交通艇过去。这一次我能做的事，并不都要从驾驶舱里开始。"],
 ["211","player","quarters","off_duty","warm","你准备的这两段时间，我已经从夜枭出动班上空出来了。本舰按自己的能力工作，不用等你回来补掉所有空缺。交通艇到下一个点，给我们留一声平安；想讲这一路的事，再慢慢写。"],
 ["212","narration","quarters","off_duty","neutral","薇拉把包侧面的小口袋拉开，让你看那本书。书里夹着一张海边旧街的手绘图，某一页有人画过一只胖得不像样的猫。她不知道前一个借书的人为什么画它，觉得有趣，又不舍得把页角折坏，便找了一张干净纸当书签。"],
 ["213","vera","quarters","off_duty","happy","我想看完以后问问借书给我的人，这只猫是不是真的长成这样。要是是，等有空我想去见一下。今天我学会的第一件跟出发有关的事，是围巾不能只照图片绕，得看自己的脖子。你能帮我把这一边递过来吗？"],
 ["214","narration","quarters","off_duty","neutral","你把围巾的一端递给她，手停在她伸手能够接到的位置。薇拉接过去，这次终于绕得松紧合适。她对着柜门上模糊的倒影看了一会儿，没有急着问任何人像不像一位合格的带队者，只把多出来的一截藏进衣领。"],
 ["215","vera","quarters","off_duty","warm","这样舒服多了。包我还要自己再收一遍，等会儿想去餐厅买最后那杯热饮。明早不用所有人都来送，我会先找伊芙娜交代下一次通话，再跟愿意见我的人说再见。"],
 ["216","narration","hangar_duo","duty","neutral","第二天，夜枭稳稳停在检修架里。薇拉从它旁边走过，没有登上驾驶舱，而是沿标好的普通通道去接驳口。铎兰把要返还给看护的一小袋工具交给她，诺瓦替她拉住差一点碰到门边的书包。伊芙娜问下一次有空通话的日子，记下后便让开道路。"],
 ["217","vera","hangar_duo","duty","serious","我会按说好的时候回话。遇到新的人，我先听他们自己说，再问本舰能不能接。有人拒绝我们，也要把那句原样带回来。等这两段走完，我会告诉你们下一步是回来，还是还想再陪一段。"],
 ["218","narration","ship_rail","off_duty","neutral","你隔着观察廊的窗，看见普通交通艇离开渡鸦号。它没有夜枭那样醒目的轮廓，转过母舰侧面便融进了港区来往的灯。几天以后，船上收到她第一封回信：先说平安，后面是一段关于围巾和那只画在页角的猫的话。新的求助另放一封，由值班的人按能力接。"],
 ["219","narration","orbit","duty","neutral","渡鸦号重新启程时，可用的安全港少了一些，机库的空位也少了一处。它带着已经承诺的复查与下一段有限救援继续航行，没有把五个人的获救写成一支新队伍诞生。有人回家，有人去看病，有人暂时愿意同行；他们离开这条船以后，仍然属于这次故事的后来。"]
],'ending_returned_final');

decision('choice_1','spacebattle','侧舱的接驳角度已经让开，三位明确请求登舰，另外两位的不同去向也已记住。外部识别中继持续发送，先处理哪一端会影响后面的追索与证据。',[
 {id:'v6_returned_evac_first',label:'先开侧门接出请求登舰的三位，再断中继；保住实时记录，接受本舰航迹已经暴露。',next:id('evac01'),reaction:'你让过渡平台先靠门，医护开始按刚才逐人的回应接人。诺瓦保留实时记录，也确认远处已收到本舰方向。',effects:[]},
 {id:'v6_returned_relay_first',label:'先切外部中继并重建短距通话，再接人；少一层追踪，但失去连续转运记录并多用保温医疗物资。',next:id('relay01'),reaction:'灰鸢先去外壳背面，夜枭将备用机贴近观察窗。生命维持线路独立保留，回应必须重新确认后才开门。',effects:[]}
]);
decision('choice_2','spacebattle','外挂拖架仍在把载人运输船带离安全位置。舱内已确认独立供电，载人舱与无人驱动箱的隔离位置清楚。先让拖曳停下，才能兑现另外两位的选择。',[
 {id:'v6_returned_capture_drive',label:'完整接住无人驱动箱并卸锁；保留动作原件，承担母舰姿态燃料与灰鸢挂钩检修。',next:id('capture01'),reaction:'渡鸦号主缆接住拖架，灰鸢准备卸开机械锁。现场只读记录随后单独取出，不接入本舰控制。',effects:[]},
 {id:'v6_returned_disable_drive',label:'切离无人驱动箱再从安全射界打停；付弹药代价，放弃原始动作部件。',next:id('drive01'),reaction:'你再次确认载人舱没有进入射界。近防炮等待无人箱体完全脱离，人的回话与外部影像继续保存。',effects:[]}
]);
decision('choice_3','bridge','原补给港把重新开放泊位与交人捆在一起，渡鸦号已拒绝。三位乘客听过两种实际照护安排，同意船方选择可承担的一种；他们以后仍能另选去处。',[
 {id:'v6_returned_wait_medical',label:'留在港外轨道接受船舶问询，取得及时设备检查；支付四天泊费并推迟本舰大修。',next:id('port01'),reaction:'伊芙娜接下船方问询，民用医护从另一条通道登舰。乘客不被交回原处置程序。',effects:[]},
 {id:'v6_returned_outer_refuge',label:'接受外环站的有限照护，离开旧补给港；承担更长航程、医疗耗材与设备转诊等待。',next:id('outer01'),reaction:'船上医护完成转运确认，民用接收点按各人意愿准备。你停止承接新任务，先把已经上船的这三段照护接好。',effects:[]}
]);
nodes[id('007')].onEnter=[flag('ev6_returned_contact_consented')];
nodes[id('evac03')].onEnter=[flag('ev6_returned_early_rescue'),flag('ev6_returned_route_exposed'),flag('ev6_returned_transfer_record_preserved'),flag('ev6_returned_tracking_cut')];
nodes[id('relay03')].onEnter=[flag('ev6_returned_early_relay_cut'),flag('ev6_returned_transfer_record_incomplete'),flag('ev6_returned_extra_medical_used'),flag('ev6_returned_tracking_cut')];
nodes[id('101')].onEnter=[flag('ev6_returned_escape_opened')];
nodes[id('capture03')].onEnter=[flag('ev6_returned_drive_captured'),flag('ev6_returned_pose_fuel_spent'),flag('ev6_returned_hook_service_needed')];
nodes[id('drive03')].onEnter=[flag('ev6_returned_drive_destroyed'),flag('ev6_returned_ammo_spent')];
nodes[id('124')].onEnter=[flag('ev6_returned_choices_honored')];
nodes[id('port03')].onEnter=[flag('ev6_returned_port_fees_spent'),flag('ev6_returned_early_diagnostics')];
nodes[id('outer03')].onEnter=[flag('ev6_returned_outer_station'),flag('ev6_returned_referral_wait'),flag('ev6_returned_transit_care_spent')];
nodes[id('218')].onEnter=[flag('ev6_returned_vera_independent_trip')];
nodes[id('002')].variants=[
 {requires:['aux_full_testimony'],text:'上次我讲过那一段，今天不想再讲。这是今天的转运单，我在封样处核过时间，随船看护愿意让你们接通里面。你们用新单和本人现在的回话做事，旧经历留在它原来的地方。'},
 {requires:['aux_procedure_recorded'],text:'上次只记程序的那一页，我还留着。今天多出来的是这一页新单和愿意接话的看护，不需要补齐我的旧经历才开始救人。时间我在封样处核过，你们先听里面的人怎么说。'}
];
nodes[id('003')].variants=[{requires:['c3_vt_step'],text:'在石师傅面前，我有过自己把问题问完的一刻。这次我也想让里面的人各自说完。阿肆，你只留下愿意联络的方式就好。谁想走，谁要先见家人，谁现在只想停下，我听清以后再排位置。'}];
nodes[id('005')].variants=[{requires:['archive_crosschecked'],text:'上次原件里那条空着的生效日期，我记着。这次船号、发出时间和实际收货站要重新对，不能让旧指令一直替今天的人作答。三处已核合；个人住址只给获准的接收方，公共部分保留程序与人的即时反对。'}];
nodes[id('110')].variants=[{requires:['ev6_w9_material_paid'],text:'二号泵备用板早已付给那次重建，本舰姿态燃料按降档后的实际能力算。完整接箱会多耗一段油，灰鸢还得上去卸锁；切掉无人驱动箱也能停，只是毁掉原始记录。载人舱的生命维持线独立，动手范围停在船外。'}];
nodes[id('211')].variants=[
 {requires:['vera_word_used'],text:'这两段时间我会从出动班上空出来。以前我用过那句口令，不能靠这一次支持你离舰就把它抵掉。你说何时回来、是否再陪一段，都按自己的决定；本舰安排能做到的事，不把空缺再压回你身上。'},
 {requires:['vera_bond_close'],text:'我把那两段时间空出来，不让任何人的出动表替你许下一定回来的日子。下一站留一声平安就好。你愿意写给我的那一封，我会慢慢读；要是这次回来有空，我们再挑一天只去逛旧街。'}
];
nodes[id('215')].variants=[
 {requires:['vera_word_used'],text:'我会记着你刚才说的。包我还要自己收一遍，今天就先到这里。明早我先找伊芙娜交代通话，想跟谁说再见也自己去。以后我说停的时候，你继续像今天这样听见就好。'},
 {requires:['vera_bond_close'],text:'那就等我知道自己的归期，再约那一天。你不用把整条街都安排好，我想看看走到哪里会想停。包我自己收，今晚那杯热饮你有空可以一起去；过了明早，我会想念在门口看见你的时候。'}
];
directions[id('013')]=[{pose:'ivna-command-full',framing:'full'}];
for(const k of ['002','004','202','203'])directions[id(k)]=[{framing:'half'}];
for(const k of ['015','017','102','104','106','108'])directions[id(k)]=[{framing:'head'}];
for(const k of ['210','211','213','214','215'])directions[id(k)]=[{framing:'close'}];
nodes[id('123')].scene='bridge';
nodes[id('123')].text='主屏上，民用接收艇从另一侧靠近运输船。阿棠认出视频里的诊所值班员，自己提起包，走向给她留着的门。还在等的人终于收到家里的回话，读完以后请看护陪他去同一条艇上，先在那里等亲属接下一段。他没有登上渡鸦号，仍然是这次被救回去的人。';
const closure={
 mechanism:'在第七段形成可核实的个案救援与转诊联络，原补给港的部分待遇丧失，三方未一夜放弃各自权力。公开程序证据不包含未经同意的藏身地址；航道和桥接保持此前实际处置，无额外神经写入。',
 ship:'渡鸦号继续作为原来的机动母舰，划出有限临时床位和复查空间，先补维修、燃料及医疗缺口才接下一次求援；部分安全港和配额不再可用。',
 companions:[
 '伊芙娜：在载人舱前确认停打边界，接下船舶问询，拒绝用获救者处置权换回泊位。',
 '铎兰：实做三张床的空间与担架路线，承担机体和医疗物资缺口；学习修理是获救者的新选择，不是偿还救命之债。',
 '诺瓦：保存可公开的运输程序、动作和不同证言，分开处理本人批准的医疗资料；原件失去多少就承认多少。',
 '薇拉：主持逐人联络，尊重阿棠和另一人不登渡鸦号的选择；她随后独自乘普通交通艇陪同转诊，夜枭留舰检修，下一步由她决定。'
 ],
 protagonist:'继续协调渡鸦号的有限救援，允许获救者离开，也支持Vera离舰完成她自己的计划；亲近通过回信和具体见面延续，不以谁留在船上衡量。'
};
const ending={id:'ending_returned_final',kind:'ending',chapter:'ch09',title:'结局 · 归来者',route:'returned',routeName:'个案救援与转诊通道',classification:'ordinary',
 summary:'阿肆带来的新运输单引出五个不同的回答。渡鸦号截停回收运输，接下三人的照护，也把两人送往他们自己选的去处。薇拉随后带着自己的计划离舰，获救没有成为新的编制。',consequences:[],closure,variants:[]};
const a=[['ev6_returned_early_rescue','先接人再断中继，保住连续实时记录，本舰最初的航迹已被接收区获知。'],['ev6_returned_early_relay_cut','先断外部中继，减少追踪，转运实录不再连续，接驳多用保温与医疗物资。']];
const b=[['ev6_returned_drive_captured','完整接住无人驱动箱，保留收索原件；本舰多耗姿态燃料，灰鸢挂钩须检修。'],['ev6_returned_drive_destroyed','切离并打停无人驱动箱，消耗弹药并失去该原件；人的回话与外部影像仍在。']];
const c=[['ev6_returned_port_fees_spent','民用医护及时完成设备检查；四天泊费消耗储备，本舰大修推迟。'],['ev6_returned_outer_station','外环站接手有限照护，船上付出更长航行与耗材；进一步设备检查仍须转诊等待。']];
for(const [af,at]of a)for(const [bf,bt]of b)for(const [cf,ct]of c)ending.variants.push({requires:[af,bf,cf],consequences:[at,bt,ct,'五位当事人分别确认去向；三位登舰、两位选择民用接收，不同意加入任何队伍也得到照护。','Vera自行陪同转诊，夜枭留舰检修；关系与任务的以后均需继续由当事人作答。']});
nodes.ending_returned_final={id:'ending_returned_final',kind:'ending',chapter:'ch09',scene:'orbit',speaker:'narration',tone:'duty',expression:'neutral',text:'归来者。有人回到家里，有人仍在病房，有人第一次没有登上别人替他指定的船。渡鸦号继续航行，空位、药和燃料都有上限；它接下的是下一次能实际做到的救援。薇拉的回信留在你的柜边，关于新求助的那一封交给值班，关于她自己的那一封，等你有空慢慢读。',outcomeId:'ending_returned_final',onEnter:[flag('ev6_returned_complete'),flag('ending_returned_final_reached')]};
export const REVISION={
 id:'v6-o8-returned-action-draft',nodes,patches:{},finalEndings:{ending_returned_final:ending},directions,
 links:[
 {action:'add-choice',nodeId:'fx_choice_stay',choice:{id:'v6_choose_returned',label:'接下阿肆的新运输线索，先听当事人意愿，再拦截仍在执行旧处置令的船；接受持续救援与失去部分安全港的责任。',next:id('001'),reaction:'你请阿肆只交她愿意提供的新资料，薇拉开始逐人联络。伊芙娜让机库先算真实床位和接驳空间。',effects:[flag('ev6_returned_rescue_promised')]},note:'Append without changing legacy choice IDs, requirements or routes. Prior full testimony and procedure-only choices both support this route.'},
 {action:'register-final-ending',endingId:'ending_returned_final',chapter:'ch09',note:'Ordinary O8; independent ending, no legacy tail.'},
 {action:'bridge-accounting-precondition',note:'No bridge effects. Cutting external transport tracking/drive circuits is physical ship rescue, never neural write, XR authority or universal removal of a person’s interface.'}
 ],
 prerequisites:[
 {sourceNode:'c5_choice_aux',optionalFlags:['aux_full_testimony','aux_procedure_recorded'],purpose:'Both prior handling modes get a new voluntary contact and distinct callback. No forced retelling, no gate.'},
 {sourceNode:'c3_choice_veteran',choiceId:'c3_vt_step',optionalFlags:['c3_vt_step'],purpose:'Remembers Vera having space to ask for herself, now carried to survivors.'},
 {sourceNode:'c7_choice_archive',choiceId:'c7_arc_read',optionalFlags:['archive_crosschecked'],purpose:'Checks live order timing rather than treating an earlier document as permanent consent.'},
 {sourceNode:'fx_choice_stay',optionalFlags:['vera_bond_close','vera_word_used'],purpose:'Changes private promise and boundaries only; independent trip and ordinary ending never gated.'}
 ]
};
