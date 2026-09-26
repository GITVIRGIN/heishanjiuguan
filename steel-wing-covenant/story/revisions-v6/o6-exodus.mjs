// Original O6 action packet. Root alone integrates the Site.
const nodes={}; const directions={};
const id=s=>`v6_exodus_${s}`;
const flag=key=>({type:'flag',key,value:true});
function chain(rows,next){rows.forEach(([key,speaker,scene,tone,expression,text],i)=>{
 nodes[id(key)]={id:id(key),kind:'dialogue',chapter:'ch09',speaker,scene,tone,expression,text,next:i+1<rows.length?id(rows[i+1][0]):next};
 if(!['narration','system','player'].includes(speaker))directions[id(key)]=[{framing:tone==='combat'?'head':tone==='off_duty'?'close':'half'}];
});}
function decision(key,scene,text,choices){nodes[id(key)]={id:id(key),kind:'choice',chapter:'ch09',speaker:'narration',scene,tone:['spacebattle','seabattle'].includes(scene)?'combat':'duty',expression:'neutral',text,choices};}

chain([
 ["001","narration","bridge","duty","neutral","矿站的回信比三方的答复短得多。第三〇七号站有人想走，有人只想把孩子和病人先送出去，也有人准备留到下一季。信末没有把他们合成一个总数，而是留下了几个能接话的名字。屏幕边上附着一张井口的照片，积水已经漫过最下面一层台阶。"],
 ["002","doran","bridge","duty","pensive","航道亮了，井里的水也不会自己变干净。那边要问的是，愿意出来的人到了沧澜以后住在哪里，靠什么吃饭。还有留下的人，不能看见最后一条船走了，才发现滤网也都带走了。"],
 ["003","nova","bridge","duty","serious","接收点可以用澜港旧转运区，有屋顶，有公用净水，床位得自己安排。我问过港务，这一批按自愿迁居登记，医疗资料交给本人带着。我们不能替所有人签一个同意。"],
 ["004","ivna","bridge","duty","serious","先接通每个小组的联系人。谁走、谁等下一班、谁留，三种安排分开说。渡鸦号可以带人，但我们的远航储备和战备空间也得交出来，不能让他们以为上船以后什么都不用再做。"],
 ["005","narration","commandroom","duty","neutral","第一段通话接通时，镜头对着矿站的公共水槽。一个女人把水瓶提起来，先让你们看清底部的沉渣，再把瓶子递给身边的人。她想带父亲离开，哥哥却准备留下照看值夜的泵。两个人在同一个镜头里，没有替对方回答。"],
 ["006","vera","commandroom","duty","serious","我想再问留下的人一次。你们要的是一套能继续用的滤网，还是先把泵停一晚、清掉下面的积泥？我们能带来的东西不一样，做完以前也不能直接把哪一项记成已经解决。"],
 ["007","narration","commandroom","duty","neutral","镜头被递到另一个人手里。他挽起裤脚站进水槽旁边，给薇拉看泵的进水口。屏上看不清的地方，他用一根细杆慢慢拨开，让积下来的砂显出来。铎兰把工具卷放到桌上，一边看一边挑出要留在站上的东西。"],
 ["008","doran","commandroom","duty","serious","这套滤网留给他们，密封圈也留两包。我再教一遍怎么卸下面那截，教完让他们自己装一次。人愿意留下守站，总得有自己能修的东西，不能以后每次漏水都等我们的船影。"],
 ["009","player","commandroom","duty","serious","按他们刚才说的办。愿意走的人先知道接收点是什么样，再报这一趟的安排。愿意留下的人把滤网装好、出水看清以后，我们才关这边的通讯。"],
 ["010","narration","hold","duty","neutral","转运驳靠上来时，舱门边已经挤满了软包。有人带着一只搪瓷盆，盆里包着半捧土；有人只带换洗衣服，手却一直扶在旁边那个旧木箱上。箱子属于准备留站的人，他想把里面的几件工具托给去沧澜的妹妹，等她安顿好再寄回一封信。"],
 ["011","nova","hold","duty","pensive","第一批的取暖和氧气都算进去了。重设备要另吊，不能塞进住人的地方。还有两条矿站小驳愿意随行，它们自己的驾驶员已经到舱口了，要跟我们一起看去沧澜的那段路。"],
 ["012","vera","hold","duty","warm","我带他们去看主屏。先把最慢那条船的位置定下来，再看哪里能停。有人不习惯听机组的短报，我会让他们把同一句话用自己的方式说回来，听清了再出发。"],
 ["013","narration","hold","duty","neutral","一座小型加工机架被吊进货舱，下面还留着矿站的水印。它能补制常用的阀套和轴衬，转到沧澜就能让几户人先有活干。可吊架刚吃住重量，旁边留给担架转弯的地方便窄了一半。地勤停下吊车，等着你们重新排位置。"],
 ["014","doran","hold","duty","serious","大机床我们带不走，这一套小的能用。要带它，就拆掉本舰那排远航检修架，把料和零件另作安排。留在原站也有用，只是到了新地方，得先借别人的机具开工。"],
 ["015","ivna","hold","duty","serious","转运区给的是一块能安顿的地方，没有现成的一整座工厂。把这个差别讲给带家的人听。大家想靠自己的手吃饭，我们得让他们知道第一周要向谁借工具、谁能帮忙。"],
 ["016","narration","hold","duty","neutral","几个人围着机架蹲下来，轮流转过已经停下的手轮。一个准备迁走的青年愿意先去码头做装卸，另一个想把这套机器带去，替自己也替别人接修理活。他们商量了很久，最后同意由船方选安全的装法；两种开头都有人愿意做。"],
 ["017","player","hold","duty","serious","人员去留已经分别确认。现在只决定怎么装货，不重排谁有资格上船。重设备留下，给他们留下能继续用的方法；设备带走，我们就把本舰那一段余量真正让出来。"],
 ["018","narration","hold","duty","neutral","灰鸢和夜枭留在机库，没有给住舱挪出一个含糊的“以后再说”的位置。铎兰量过担架的转弯半径，地勤重新挪开了两只箱子。通过舱门时，那个抱着搪瓷盆的人把包布掀开一点，摸了摸里面还是潮的土。"]
],id('choice_1'));
chain([
 ["leave01","narration","hold","duty","neutral","加工机架被重新吊回矿站驳船。愿意留下的师傅接住吊钩，在机架边上等铎兰把最后一遍拆装讲完。他们把能在沧澜借到工具的几个人叫到一起，逐项说清第一周先做什么。失去的是一套随船开工的便利，不是离开的资格。"],
 ["leave02","doran","hold","duty","warm","我到了岸上先去找合口的机具，借多少、借几天，当面跟人谈。这里这套别空着，能修的还得修。等你们有新东西做出来，让下一班船捎一件来，我也想看看。"],
 ["leave03","narration","hold","duty","neutral","吊车退开以后，担架能完整转过舱门。居民把自己的包放在床位旁，矿站小驳上的人则保留了自己的船。主屏上两条随行航迹慢慢贴近渡鸦号，最慢的一条先报出了准备好的信号。"]
],id('101'));
chain([
 ["carry01","narration","hangar","duty","neutral","远航检修架的固定螺栓被一颗颗卸下来。它跟着渡鸦号去过许多地方，拆开后却只是几根沾着油的钢梁。地勤把还用得上的工具另装进小箱，让住人的通道先空出来。新的机架低低落在货舱支座上，绑带从它下面穿过。"],
 ["carry02","doran","hangar","duty","serious","这排架子以后不跟船跑远路了。机架留在货舱里，到了接收点先给他们用。咱们自己的大检修只能依靠岸上的工坊，借件得排队，不会像过去那样半夜就能开吊车。"],
 ["carry03","narration","hold","duty","neutral","第一批登舰的人给随行小驳留了两条能通行的过道。愿意继续驾船的居民亲手把货包系回自己的舱里，没有被催着挤进母舰。加工机架占了原先储备的位置，队列的转向也因此得慢一些；图上那条进场线被重新画宽。"]
],id('101'));
chain([
 ["101","narration","orbit","duty","neutral","矿站在后方慢慢缩成一块亮斑。起航前，留下的人把新滤网前后两杯水举到镜头边，积砂少了，杯底仍有一点颜色。铎兰没有答应下一次就能变得清澈，只把最后一包密封圈的位置说了一遍。通话结束时，那只拿着水杯的手还朝你们挥了挥。"],
 ["102","nova","bridge","duty","serious","两条随行小驳都过了第一次转向。前方锚点发来的状态跟观察员的测距相合，可以按现在的标记走。这是这一趟测出来的结果，我会沿路接着收，不把旧坐标当成今天的保证。"],
 ["103","narration","bridge","duty","neutral","队列接近货运岔口时，三条警戒艇从废弃装卸圈外转出来。先亮的是停止灯，随后才是要求返航的通话。它们盯住小驳原属矿站的登记号，声称设备和合同债务没有清结，连同驾驶员也必须停下等候。"],
 ["104","ivna","bridge","combat","angry","把载人的舱位标给它们看。登记号可以核查，人已经分别表达了去留。渡鸦号进入队尾，让两条小驳保持原方向。谁朝住人的地方锁定，我会把整段瞄准信号送到它自己的上级桌上。"],
 ["105","narration","spacebattle","combat","neutral","警戒艇没有立即开炮。它们先放出一条拖索，想钩住末尾小驳的外部货篮。索头擦过货篮，带下一片薄铝皮。小驳的尾灯猛地偏向一侧，驾驶员松开过载的转向器，船又朝着拖索摆回去。"],
 ["106","vera","spacebattle","combat","serious","我去它外侧。请那条小驳把手从转向器上松一下，先看我的位置，再一点一点推回来。你不需要跟夜枭一样快，只要别追着拖索转。我会等你把这一小段走稳。"],
 ["107","narration","spacebattle","combat","neutral","夜枭在小驳侧前方减速，未武装的三组感应单元转向同一条绳索。薇拉让负重左手托住索头附近的固定环，把拉力从薄弱的货篮边上挪开。灰鸢沿着渡鸦号的牵引缆滑过去，在安全角度切断索头。断索抽离时，母舰绞盘吞进了余下的松缆。"],
 ["108","player","spacebattle","combat","serious","绳索已经断开，别抢着加速。两条小驳先把人固定好。灰鸢留在后方，把那三条艇和你们隔开。我们只要一段能让队尾完整转过去的距离。"],
 ["109","narration","spacebattle","combat","neutral","第一发警告炮落在灰鸢侧上方。碎屑敲过肩甲，你把机体横过来，借装卸圈的残架挡住后面的视线。警戒艇不敢直接轰穿残架，却开始向两翼散开。它们能比满载的船队更快绕过这段障碍。"],
 ["110","doran","bridge","combat","worried","渡鸦号能用现有推进器挡一次侧向追赶，持续不了很久。另一条办法是把货篮里那批旧矿料留给它们，货篮的登记还在原站名下，它们得派艇接，追人的数量就会少一条。先问驾船的人，那是他们这一季的报酬。"],
 ["111","narration","bridge","combat","neutral","小驳驾驶员把摄像机转到身后。几个人用绑带固定在椅子上，彼此说话要贴近耳边。一个人先看着自己的手，随后点头，另一个则抬起手掌，问渡鸦号挡住追赶会损失什么。诺瓦把本舰的燃料余量和那批矿料的估价放到同一张屏上。"],
 ["112","nova","bridge","combat","serious","矿料是他们准备在岸上换第一批生活费的。愿意放下的人已经说了，代价也不能只算在他们头上。若采用这个办法，船上公用储备先垫接收点的床铺和炊具；若用推进挡追，我们在下一站就得停下来补给，赶不上最早的接驳潮。"],
 ["113","ivna","bridge","combat","serious","两种都能把人带出去，差别是把损失留在哪里。我要一项能立刻执行的决定。炮组压住两翼，别把火力送进小驳前方。等队尾转完，所有机体随它一起撤。"]
],id('choice_2'));
chain([
 ["fuel01","narration","spacebattle","combat","neutral","渡鸦号侧向推进器同时亮起。大船横过残架边缘，把警戒艇的捷径压到自己的舷侧。你沿着母舰遮住的方向后撤，灰鸢的肩甲擦过一片悬浮的护栏。追来的炮火打中外部空箱，碎屑从队尾后面散开。"],
 ["fuel02","ivna","bridge","combat","serious","队尾通过，推进减到保位。不要追出去。刚才这一下已经拿走了我们的赶路余量，下一站补给排到什么时候就等到什么时候，不能把该停的船再催快。"],
 ["fuel03","narration","bridge","duty","neutral","油量线停在新位置。诺瓦取消最早那班接驳，港区回报把渡鸦号排进后面的空位。小驳上的人保住了准备换钱的矿料，母舰却要多付一夜的取暖和泊位。铎兰走到发热的管线上，先挂起了不能再强推的牌子。"]
],id('121'));
chain([
 ["ore01","narration","spacebattle","combat","neutral","矿料篮从小驳底下脱开，轻轻撞了一下原来的支架。驾驶员亲手按住释放杆，直到锁灯全灭。三条警戒艇里的一条转向去接货，另外两条被它挤开的航迹迫得减速。你把灰鸢留在那片正在变宽的缝隙里，等最后一条小驳转过去。"],
 ["ore02","player","spacebattle","combat","serious","灰鸢开始撤回。诺瓦，按刚才答应的做，公用储备先交接收点，别从他们以后挣的钱里扣。货篮留下的影像也给当事人一份，他们要不要追这笔账，由他们安顿后再决定。"],
 ["ore03","narration","bridge","duty","neutral","船队离开岔口，货篮在后方变成一个暗点。少掉的那笔钱原本可以租一间小店；渡鸦号补上的床铺和炊具只能让第一周好过一些。小驳上的几个人把尚未拆开的价目单折起来，开始商量抵岸后谁先去找活做。"]
],id('121'));
chain([
 ["121","narration","hold","duty","neutral","脱离警戒艇的视野以后，舱里没有马上热闹起来。人们先检查身边的绑带，再找刚才散落的小东西。一个孩子的鞋滑到座椅下面，坐在最里面的人伸不进去，便脱下自己的鞋带，把它从座脚后慢慢钩出来。"],
 ["122","vera","hold","duty","worried","刚才小驳偏转的时候，我听见有人说自己没按对。那不是你们造成的。外面有人拖住了船，之后你们跟着我把它稳住了。下次见面，我们可以再练一遍，不用在有炮火的时候练。"],
 ["123","narration","hold","duty","neutral","小驳驾驶员坐到舱口边，听薇拉把刚才那段航迹逐格往回拨。他伸手指了两次，终于在没有催促的安静里把自己慌乱的那个转弯说清。旁边的人给他留了一杯温水，水面晃动的时候，船已经开始按港口的速度下降。"],
 ["124","nova","planet_approach","duty","pensive","澜港允许按原来的转运方式进场。母舰停在既有泊位，再由当地接驳船送到岸上。海面阵风正在变大，最外侧的堤口先关了；接收点的人已经把靠内的那段铺上防滑垫。"],
 ["125","narration","planet_approach","duty","neutral","沧澜从屏幕边缘升上来。云层的开口里有一段深色海岸，转运区的灯正沿旧泊位逐盏亮起。两条矿站小驳在领航信号前减速，愿意自行靠泊的驾驶员把确认键按在自己掌下。渡鸦号收起远行时展开的警戒队形，驶向现成的港区。"]
],id('201'));
chain([
 ["201","narration","coast","duty","neutral","靠泊后的第一个早晨，海风把人的说话声吹到另一边。母舰停在旧锚位，岸上的大车沿既有坡道往返；住得靠内湾的一组人坐港方接驳艇去转运区。伊芙娜站在舷梯口，一只手按着名单，让人自己看见下一班的位置。"],
 ["202","ivna","coast","duty","serious","上岸不用一次挤完。天气窗口缩了，剩下的人就多住一晚，铺位还在。随身带的药留在身边，别跟重箱一起吊走。谁想暂时留在船上照顾家人，过来告诉我。"],
 ["203","narration","coast","duty","neutral","接收点把潮湿的木床抬到墙边，空下中间铺行李的位置。铎兰带着几个人去试公用水龙头，水流有点小，但足够慢慢接满一壶。你走出棚门时，听见内湾方向传来三次短促汽笛，随后是港务频道突然抬高的呼叫。"],
 ["204","nova","bridge","combat","worried","第二班接驳艇碰上横浪，船头的货吊带卡在堤边旧桩上。驾驶员已经停机，艇尾还在往外摆。屋顶上四个人都能回应，舱内还有一个腿脚不便的老人。附近工作艇已经过去，它从外侧兜不了那么近。"],
 ["205","narration","seabattle","combat","neutral","海水越过矮堤，落在灰鸢脚边。你沿港区硬地接近旧桩，没有让机体踏进看不见深浅的水里。夜枭在堤的另一端落稳，右侧感应单元跟着浮出浪尖的船顶移动。每当接驳艇被浪遮住，薇拉便停一下，等它再次露出来。"],
 ["206","vera","seabattle","combat","serious","屋顶四人还在，舱内靠无线电回答。我看不穿下面的海水，要等船头抬起来才有下一次距离。灰鸢别往前迈，石缝正在掉渣。我把绳送过去，主拉力交给岸上的绞盘。"],
 ["207","narration","seabattle","combat","neutral","夜枭的负重左手把救生绳递到接驳艇顶缘，港务工作艇上的人用长钩接住，绕回岸绞盘的缆头。灰鸢伸手挡住绳子会磨到的缺口。你隔着座舱玻璃看见一个乘客挪到舱门旁边，把自己的围巾系在门把上，好让里面的人看清出口。"],
 ["208","doran","seabattle","combat","worried","卡住的是装工具的吊篮，水进去了，重量在往下沉。割开吊带，船头会回正，可那些工具要落进深槽。保住它就得先把篮子的重量接到岸上，多等几轮浪，机体也得一直抵着这块破口。"],
 ["209","narration","seabattle","combat","neutral","老人从艇内伸出一只手，扶住了围巾系着的门把。离岸最近的那个人告诉你，吊篮里有他父亲留下的工具，也有几户人攒出来的量具。他能接受把它们放下；说完以后，他又看了一眼水里，等你给出能让大家一起离开的办法。"],
 ["210","player","seabattle","combat","serious","先把屋顶的人挂上救生绳，岸边准备保温毯。接驳艇的驾驶员继续报舱内情况，任何人失去回应就立即割带。现在看这一轮浪，决定怎样把船头从桩边放开。"]
],id('choice_3'));
chain([
 ["cut01","narration","seabattle","combat","neutral","灰鸢的切割器贴着吊带落下。吊篮沉下去时，艇首猛地一轻，薇拉让岸绞盘跟着收了半圈，再停住等浪。工作艇把老人接到安全一侧，屋顶的人依次滑到岸边。最后一个人离开前，伸手摸了一下空了的吊钩。"],
 ["cut02","vera","seabattle","combat","worried","五个人都回来了。先把毯子给里面那位，能走的人也别马上回去搬行李。有人想捞工具，我听见了；今天浪还在，先让身体暖起来，我们再一起看能做什么。"],
 ["cut03","narration","medbay","duty","neutral","那只旧工具箱没有浮上来。它的主人坐在医务间，把还挂在腰边的一把小锉刀放在膝上，指尖来回拨着锉柄。铎兰把自己的工具卷解开，请他挑两件这周先用。借来的东西能开工，替不了水底那一箱陪过家人的旧物。"]
],id('221'));
chain([
 ["rig01","narration","seabattle","combat","neutral","灰鸢抵住缺口，夜枭把第二条缆送到吊篮的主环。岸绞盘缓慢吃力，第一轮浪过去时，旧桩下又掉下一块石头。你把膝部再压低一点，听见肩部关节发出短促的异响。绳子终于绷稳，篮子的重量离开了船头。"],
 ["rig02","vera","seabattle","combat","worried","船头抬起来了，现在收人。岸绞盘只收半圈，停住。再半圈。屋顶最后那个人把头抬一下，让我看见你还在回应。我们接到了，船上的人已经全部上岸。"],
 ["rig03","narration","medbay","duty","neutral","浸了水的工具篮吊上堤岸，里面一半东西要拆开除盐。几个人在风里多熬了几轮浪，老人留在医务间吸氧，其他人裹着毯子喝热水。灰鸢的肩部护盖已经卸下，铎兰看见里面新的擦伤，决定取消下一周的出动。"]
],id('221'));
chain([
 ["221","narration","city","duty","neutral","到了晚饭时间，转运棚的地面上还有没干的脚印。港务把剩下的接驳全部停到次日，渡鸦号多留了一夜住舱，岸上也腾出一角给接人的家属。有人把被雨打歪的晾衣绳重新拉紧，第一件挂上去的衣服滴了很久的水。"],
 ["222","doran","workshop","duty","pensive","我跟岸上的师傅谈好了，空闲那台机具先借三天，按实际工时算。今天能用的工具先分出去，湿的慢慢拆。接收点不是一天盖成的；我明早也只排一个班，下午轮到别人教我这里的电路。"],
 ["223","narration","workshop","duty","neutral","工坊的桌面很矮，铎兰坐下时把膝盖挪了两次。他没有抢着把所有工具收到自己面前，而是让矿站来的青年先挑自己熟悉的活。那人把一只旧阀拆成几小堆，放下螺丝刀后，指着最薄的垫片说了第一句有把握的话。"],
 ["224","nova","city","duty","warm","第一批寄回矿站的消息已经接上了。留站的人问的是到了没有，吃过什么，没有催谁回来。每家自己挑了照片；病例放在本人手里，只把这里用到的联络方式互相留了一份。"],
 ["225","narration","city","duty","neutral","你在公用通讯台旁听见那位女人同留站的哥哥说话。她把父亲的床头转给他看，又举起棚外那条还没干的衣服。哥哥把水槽里的滤网拍给她，问这边的水是什么味道。两个人都笑了一下，随后谈起下一封信要怎么送。"],
 ["226","ivna","bridge","duty","serious","大家已经看见岸上缺什么了。现在谈渡鸦号的去向：远航舱位继续留着，接收点就得另找长期电热；把一部分辅助设备转为岸用，我们的起航准备会按周算，不能再收到召集就出港。"],
 ["227","narration","bridge","duty","neutral","主屏没有战术箭头，只有几段已经丈量过的管路。铎兰指的是住舱供暖和净水辅助设备，与锚链写入口隔着各自的舱壁。他把哪些能接到岸上、哪些必须保持舰内安全逐一画清，再把准备拆下的部件放在桌面照片里。"],
 ["228","vera","bridge","duty","serious","我愿意留一段时间，教小驳上的人靠岸，也跟港方轮一次近岸救援。夜枭需要停机检修的时候，我会去岸上上课。渡鸦号停在这里，不等于每个人往后都只能守着这一处。"],
 ["229","player","bridge","duty","pensive","我们接下这一批迁航，就把已经答应的生活条件做完。按实测的管路施工，渡鸦号转作这里的救护和安置支援。远航任务从今天起停止承接，未来要再走，先让岸上有接替的人和设备。"],
 ["230","narration","reactor","duty","neutral","几天后，船边多了两道醒目的软管。住舱辅助机按新的负荷慢慢转起来，岸上水桶里升起很薄的热气。拆下来的远航备件没有被丢进海里，能移交的交到工坊，必须留存的原样锁好。母舰仍是原来那条船，离港检查表却从一晚变成了几页。"]
],id('301'));
chain([
 ["301","narration","coast","off_duty","neutral","一个月后，堤口的木牌换过一次。最上面写的是当地潮时，下面才是接收点的值班姓名。海风仍会把小字磨花，值夜的人于是拿来一块透明旧板盖在上面。有人第一次把自己的名字写进排班，写得歪了一点，也没有擦掉重来。"],
 ["302","nova","coast","off_duty","pensive","联合那边还在追问矿料和船号，赤垣商行愿意给三趟送货，但要按趟付钱。灰塔收到的航道资料照原来的处置保留，这里的每日潮报则由测过的人逐次发。我们有一处能生活的地方，还没有把海和那些争执一起管起来。"],
 ["303","narration","coast","off_duty","neutral","诺瓦给你看新画的潮位格。她手边那杯水里泡着两片切得太厚的果皮，说是街口的小店教她这样喝。有人沿堤喊她去看一处量尺，她朝那边答应了一声，却先把杯子里的果皮捞出来，皱着脸尝了一小口。"],
 ["304","nova","coast","off_duty","happy","酸得很有精神。明天我去问问他们是不是漏教了一步。你要去的话替我记住，先买小份，别又按船上一整队人的量提回来。现在街就这么长，忘买了再走一趟也来得及。"],
 ["305","narration","city","off_duty","neutral","伊芙娜的第一堂课开在转运棚旁边，课后孩子们把演练用的空桶当成了鼓。她没有留在桶阵中间继续点名，而是走到摊前排队买热食。收钱的人问她要几个，她回头数了数身后真正留下的人，才报出数量。"],
 ["306","ivna","city","off_duty","warm","我上午带一班靠岸演练，下午空出来。有几个人想沿海堤走远一点，我答应陪到下一座桥。过去总觉得不赶路会浪费时间，今天他们走到哪一块石头上停，我也可以跟着看一会儿。"],
 ["307","narration","workshop","off_duty","neutral","铎兰把工坊的窗推开一条缝，盐味从缝里钻进来。最年轻的学徒给他端来一小碟做坏的点心，说烤炉温度跟刻度不一样。他把点心掰开，先咬没有焦的那边，再指给学徒看里面还软着的地方。桌上那只修到一半的阀门暂时没人碰。"],
 ["308","doran","workshop","off_duty","happy","至少这一边能吃。下次别把一整炉都押上，先放两个试一试。还有，你真要谢我，今晚把自己那份饭吃完，明天准时来接班。我已经答应别人去看海，不想再拿加班推掉。"],
 ["309","narration","quarters","off_duty","neutral","薇拉搬到岸上的房间朝着一条窄巷。她把停摆的秒表放在窗台边，旁边是一只从旧货摊挑来的收音盒，开关转到某个位置会沙沙作响。你到门口的时候，她正在照着说明给天线换方向，桌上摆着两副还没拆纸套的筷子。"],
 ["310","vera","quarters","off_duty","pensive","我自己挑了这间。开窗有点吵，可早上能听见推车经过，知道街上的人已经开始做饭。小驳驾驶员下一周要独自带一趟，我会在岸上等他，不坐进他的驾驶位。我也想试一试这样等一个人回来。"],
 ["311","narration","quarters","off_duty","neutral","她把天线转回靠窗的一边。收音盒里有人唱了一句，尾音被杂声盖住，她却没有急着关掉。外面的脚步从窗下经过，锅盖相碰的声响夹在歌里。薇拉侧耳听了一会儿，把其中一副筷子从纸套里抽出来。"],
 ["312","vera","quarters","off_duty","warm","今晚想试这里的面。店里会放一种我还叫不出名字的叶子，我昨天忘了问，今天准备再问一次。你如果还要回船上忙，就先去；我等开锅的时候再决定要不要多加一份。"],
 ["313","narration","coast","off_duty","neutral","暮色下，渡鸦号的舷灯照在近处的水里。有人用小推车把干净的被褥送回船上，另一辆车带着修好的阀套驶向新开的工坊。远处一条准备继续远行的货船鸣笛出港，母舰没有跟着松缆。明天还有下一批自愿来的人，也有一封要寄回矿站的家信。"]
],'ending_exodus_final');
chain([
 ["bond01","vera","quarters","off_duty","warm","我已经买了两人份的碗，不过不打算每天替你算好回来时间。今晚你来得正好。坐靠窗这边吧，收音盒有一边听得清楚一点，我刚试出来，想先让你听。"]
],id('312'));
chain([
 ["harm01","vera","quarters","off_duty","serious","有一件事我还记得：你曾经用过那句话。现在我愿意请你进来，也会在想独处的时候关门。这两件事都由我自己决定。你听见我说今天到这里，就到这里，不要替我补一句其实没关系。"]
],id('312'));

decision('choice_1','hold','吊车已经停住，人员去留已分别确认。接下来决定一套加工机架的位置，以及迁居者和母舰各自放下什么。',[
 {id:'v6_exodus_leave_machine',label:'把加工机架留给守站的人，保住担架通道；到岸上先借机具开工。',next:id('leave01'),reaction:'你让吊车按原路退回，矿站和接收点各有一组人开始清点自己能用的工具。',effects:[]},
 {id:'v6_exodus_carry_machine',label:'拆掉渡鸦号的远航检修架，运走加工机架；接受以后大检修依赖岸上工坊。',next:id('carry01'),reaction:'你确认船方让出长期检修空间，地勤开始拆卸钢梁。居民仍由原先安排的母舰和自愿随行小驳运送。',effects:[]}
]);
decision('choice_2','spacebattle','警戒艇正在两翼散开。载人的船必须一起离开；能付出的，是母舰的赶路燃料，或居民已经同意割舍的这季矿料。',[
 {id:'v6_exodus_burn_cover',label:'渡鸦号侧推挡住追赶，保住矿料；接受补给停航和错过最早接驳潮。',next:id('fuel01'),reaction:'你把赶路余量换成队尾的距离。伊芙娜确认推进只维持到小驳完成转向。',effects:[]},
 {id:'v6_exodus_release_ore',label:'按居民同意释放矿料篮，让追兵分艇接货；母舰储备垫付接收点首周起居。',next:id('ore01'),reaction:'小驳驾驶员收到你的确认，握住自己船上的释放杆。诺瓦将本舰垫付的床铺与炊具另记到公用储备。',effects:[]}
]);
decision('choice_3','seabattle','屋顶的人已经接上救生绳，舱内还有持续回应。吊篮压住船首，下一轮浪正在堤外隆起。任何人失去回应，都必须立即改为放弃货物。',[
 {id:'v6_exodus_cut_basket',label:'立即割开吊带，优先让人离艇；接受几户人旧工具和量具沉入深槽。',next:id('cut01'),reaction:'你通知岸绞盘准备收人，灰鸢切向承重吊带。货物损失留给大家共同补位，不拿获救者的以后收入抵账。',effects:[]},
 {id:'v6_exodus_rig_basket',label:'用岸绞盘接住吊篮再撤人；承担灰鸢关节磨损、冷暴露与额外医疗停留。',next:id('rig01'),reaction:'薇拉取得驾驶员仍能回应的确认，夜枭送去第二条缆。岸上医护先把保温和氧气准备好。',effects:[]}
]);
for(const k of ['204','226','227','228','229'])nodes[id(k)].scene='commandroom';
for(const k of ['222','223','307','308'])nodes[id(k)].scene='ground_workshop';
for(const k of ['309','310','311','312','bond01','harm01'])nodes[id(k)].scene='shoreside_room';
nodes[id('009')].onEnter=[flag('ev6_exodus_consent_checked')];
nodes[id('leave03')].onEnter=[flag('ev6_exodus_heavy_cargo_left')];
nodes[id('carry03')].onEnter=[flag('ev6_exodus_machine_carried'),flag('ev6_exodus_repair_rack_removed')];
nodes[id('fuel03')].onEnter=[flag('ev6_exodus_fuel_spent'),flag('ev6_exodus_tide_delayed')];
nodes[id('ore03')].onEnter=[flag('ev6_exodus_ore_released'),flag('ev6_exodus_public_stores_spent')];
nodes[id('cut03')].onEnter=[flag('ev6_exodus_tools_lost')];
nodes[id('rig03')].onEnter=[flag('ev6_exodus_tools_recovered'),flag('ev6_exodus_mecha_strained'),flag('ev6_exodus_cold_care_needed')];
nodes[id('221')].onEnter=[flag('ev6_exodus_last_boat_saved')];
nodes[id('229')].onEnter=[flag('ev6_exodus_port_conversion_committed')];
nodes[id('110')].variants=[{requires:['ev6_w9_material_paid'],text:'二号泵备用板已经付给上一次重建，渡鸦号按降档的实际推力算，只能挡一小段。另一条办法是把货篮里的旧矿料留下，它们得分艇去接。先问驾船的人，那是他们这一季的报酬，不能替他们一句话就丢了。'}];
nodes[id('005')].variants=[
 {requires:['cargo_recount'],text:'第一段通话接通时，你们从先前重数过的联系人里找到了这户人。一位女人想带父亲离开，哥哥却准备留下照看值夜的泵。诺瓦没有沿用旧名单里的总数，等两人在同一个镜头里分别说完，再问这一次有没有新的安排。'},
 {requires:['cargo_extra'],text:'第一段通话接通时，对面认出了先前多留药品的船。那些药已经用到人身上，桌边一位长者说起当时的发热。女儿想带他离开，儿子准备留站守泵；他们感谢过那一批药，仍各自回答这一次想去哪里。'}
];
nodes[id('203')].variants=[{requires:['c3_dt_coast'],text:'你还认得从前走过的那一段海堤，旧摊位换了顶棚，曾经干燥的石缝里塞满水草。接收点把潮湿的木床抬到墙边。你没有照记忆指挥靠泊，沿新的量尺看过当日水位；走出棚门时，内湾传来三次短促汽笛。'}];
nodes[id('222')].variants=[{requires:['ev6_exodus_machine_carried'],text:'船上带来的机架已经移到棚里，今天先验电，再试一只最简单的阀套。湿的工具另外拆，不混着开机。我明早只排一个班，下午轮到岸上的师傅教我这里的电路；这座工坊得有别人也能开门。'}];
nodes[id('311')].nextIf=[{requires:['vera_word_used'],next:id('harm01')},{requires:['vera_bond_close'],next:id('bond01')}];
directions[id('104')]=[{pose:'ivna-command-full',framing:'full'}];
for(const k of ['206','208','210'])directions[id(k)]=[{framing:'head'}];
for(const k of ['302','304','306','308','310','312','bond01','harm01'])directions[id(k)]=[{framing:'close'}];
const closure={
 mechanism:'迁居者离开不安全的矿站生活区，守站者保留滤网、工具与补给联络。澜港提供有限安置空间；矿权和航道的旧争执仍须逐项处理。既有锚点按真实测距与维护使用，本路线不增加神经写入。',
 ship:'渡鸦号退出远航战备，停在既有港区成为救护、临时住宿与安置支援船；部分辅助设备实际接到岸上，再次远航需要按周准备并有岸上接替。',
 companions:[
 '伊芙娜：自行选择在港区带领靠岸演练，工作之外陪居民走海堤，有可支配的下午。',
 '铎兰：在岸上工坊教修理也向当地师傅学电路；设备和工具的损失由真实借用、工时与接班承担。',
 '诺瓦：承担当地潮报与必要联络，保留各方原有技术资料的实际处置，私人病例由迁居者自己持有。',
 '薇拉：选择近岸救援和小驳教学，自己租住岸上的房间；能独处、出门、邀请玩家吃饭，亲近不构成必须继续执勤的承诺。'
 ],
 protagonist:'由前线驾驶员转为迁居与救援的协调者，接下有限安置义务；居民的去留、Vera的生活和下一次亲近均由当事人决定。'
};
const ending={id:'ending_exodus_final',kind:'ending',chapter:'ch09',title:'结局 · 迁航',route:'exodus',routeName:'沧澜自愿迁航',classification:'ordinary',
 summary:'渡鸦号把愿意离开的人送过追赶与风浪，也给守站者留下继续生活的工具。它停进澜港，放下随时远航的战备，换来一处仍需每天修补的新生活。',consequences:[],closure,variants:[]};
const a=[['ev6_exodus_heavy_cargo_left','加工机架留在矿站，迁居者先借岸上机具开工。'],['ev6_exodus_machine_carried','加工机架抵岸，渡鸦号已拆去远航检修架，大检修依赖岸上工坊。']];
const b=[['ev6_exodus_fuel_spent','居民保住矿料；母舰耗去赶路燃料，多停一夜并错过最早接驳潮。'],['ev6_exodus_ore_released','居民割舍这季矿料，母舰垫付首周起居；开店的本钱仍须重新积攒。']];
const c=[['ev6_exodus_tools_lost','海难中先救人，旧工具和量具沉入深槽；借来的工具可开工，替不了家中旧物。'],['ev6_exodus_tools_recovered','人与工具一起上岸，灰鸢停机检修，冷暴露者接受额外医护；除盐修复需要真实工时。']];
for(const [af,at]of a)for(const [bf,bt]of b)for(const [cf,ct]of c)ending.variants.push({requires:[af,bf,cf],consequences:[at,bt,ct,'迁居和留站均逐人确认，渡鸦号的长期港用改造已经实际开始。','桥的实际处置完整继承，本线不重建或重开写入口。']});
nodes.ending_exodus_final={id:'ending_exodus_final',kind:'ending',chapter:'ch09',scene:'coast',speaker:'narration',tone:'off_duty',expression:'neutral',text:'迁航。渡鸦号的下一张工作表没有进攻坐标，写着送药、接人和一条还没修好的热水管。海风从新开的窗里吹进去，有人在工坊等接班，有人在屋里等面开锅，也有人把留在矿站的家人写进下一封信。',outcomeId:'ending_exodus_final',onEnter:[flag('ev6_exodus_complete'),flag('ending_exodus_final_reached')]};
export const REVISION={
 id:'v6-o6-exodus-action-draft',nodes,patches:{},finalEndings:{ending_exodus_final:ending},directions,
 links:[
 {action:'add-choice',nodeId:'fx_choice_stay',choice:{id:'v6_choose_exodus',label:'回应矿站的自愿迁居请求，把愿意走的人送往沧澜，并接受渡鸦号退出远航战备的代价。',next:id('001'),reaction:'你请矿站分别接通想走、暂留与守站的联系人。伊芙娜让各部门报出真正能让出的住舱和储备。',effects:[flag('ev6_exodus_migration_promised')]},note:'Append this route commitment without replacing old choice IDs or conditions.'},
 {action:'register-final-ending',endingId:'ending_exodus_final',chapter:'ch09',note:'New ordinary O6. Independent terminal, no legacy tail.'},
 {action:'bridge-accounting-precondition',note:'Root actual-event W8/W9 ledger remains authoritative. O6 never rebuilds, writes, seals or dismantles the bridge; port conversion affects living-support auxiliary equipment only.'}
 ],
 prerequisites:[
 {sourceNode:'c3_choice_detour',choiceId:'c3_dt_coast',optionalFlags:['c3_dt_coast'],purpose:'A lived coastline callback; fresh measurements still required, no access gate.'},
 {sourceNode:'c5_choice_cargo',optionalFlags:['cargo_extra','cargo_recount'],purpose:'Beneficiary or contact callback; spent medicine does not respawn and prior lists do not replace current consent.'},
 {sourceNode:'fx_choice_stay',optionalFlags:['vera_bond_close','vera_word_used'],purpose:'Only personal invitation/boundary changes; Vera and ordinary ending access remain independent.'}
 ]
};
