// Original O7 action packet. Root alone integrates the Site.
const nodes={}; const directions={};
const id=s=>`v6_lightship_${s}`;
const flag=key=>({type:'flag',key,value:true});
function chain(rows,next){rows.forEach(([key,speaker,scene,tone,expression,text],i)=>{
 nodes[id(key)]={id:id(key),kind:'dialogue',chapter:'ch09',speaker,scene,tone,expression,text,next:i+1<rows.length?id(rows[i+1][0]):next};
 if(!['narration','system','player'].includes(speaker))directions[id(key)]=[{framing:tone==='combat'?'head':tone==='off_duty'?'close':'half'}];
});}
function decision(key,scene,text,choices){nodes[id(key)]={id:id(key),kind:'choice',chapter:'ch09',speaker:'narration',scene,tone:scene==='spacebattle'?'combat':'duty',expression:'neutral',text,choices};}

chain([
 ["001","narration","bridge","duty","neutral","第七段的主标已经回到航图上，靠外侧的维修支路却仍有一个小小的空圈。那里原本停着供巡检艇换电的服务浮标，战斗把它的系缆打断了。标芯还在发报，壳体在另一处反光，二者的距离正缓慢拉大。三条满载的矿船停在空圈外，等谁先去看一眼。"],
 ["002","nova","bridge","duty","serious","主干线能走，外侧这一口还没有人签实际检验。矿船可以绕到大港换电，排队和燃料都得重新付。它们问的不是谁拥有第七段，是今天能不能在附近补一次电，明天还有没有人给浮标换坏件。"],
 ["003","ivna","bridge","duty","pensive","大舰队不会为了三条慢船一直留在这里。我们愿意接，就得留下一个有工坊、有住舱、能让巡检艇回来休息的地方。渡鸦号可以做，但要先把付出的航行能力说清，再让船上的人决定自己的班。"],
 ["004","narration","commandroom","duty","neutral","铎兰在台上摆了三块拆下来的旧铭牌，分别指向主推进、航行散热和工坊的长时供电。它们没有指向桥接座。原先用来撑住短时高负荷的回路若改为每天稳定给检修台供电，船就不能随时进入长程追赶。"],
 ["005","doran","commandroom","duty","serious","我能留住姿态调整和近处转泊。要恢复以前的远航准备，得进船坞把这几段重新接，按周算。服务标不是新发动机，渡鸦号也发不出一条凭空通往远处的路。我们能给它换电、修外壳，再一趟一趟去量。"],
 ["006","vera","commandroom","duty","serious","我想先出去看看。若回收的东西根本不能让普通巡检艇接近，我们就得换一种摆法。我不愿意把每次工作都设计成只有夜枭能做，等我想下班的时候，才发现外面只剩我一个人知道怎么走。"],
 ["007","player","commandroom","duty","serious","同意。先把这一枚回收，现场试过，再决定把设备装到哪里。长期值班至少要有两班能独立完成；在那以前，我们只报临时服务，不让后面的船把它当成已经稳定的补给点。"],
 ["008","narration","hangar_duo","duty","neutral","机库里多出一辆很小的拖车，载着矿船借来的接头和一卷旧的保温毯。送东西的人指着自己的巡检艇，把舱门高度报给铎兰。灰鸢旁边的地勤于是把试验支架压低一格，让普通人穿着舱外服也能摸到最里面的卡扣。"],
 ["009","doran","hangar_duo","duty","warm","这个位置合适。先别给它焊死，等人真的伸手拆过再固定。大机体顺手，不等于穿着厚手套的人也顺手。你们带来的接头留一个在这儿，试完我们一起拿回去。"],
 ["010","narration","spacebattle","combat","neutral","灰鸢先离开机库，夜枭隔一段距离跟上。服务浮标躺在残件群里，反光外壳转到某个角度才看得见。旁边一截断裂的起重臂正向它缓缓压近，臂端挂着两只废弃工具箱，每转一圈便把周围的小碎片拨向不同的方向。"],
 ["011","vera","spacebattle","combat","serious","右侧三个感应单元读到的边缘在轮流遮挡。看得见的壳体没裂，但下面有没有贯穿伤，还要转过去确认。左边的标芯拖着电线，先别拉线，我看见绝缘层露出了金属。"],
 ["012","narration","spacebattle","combat","neutral","你把灰鸢贴到较大的残片后面，让肩甲接住一小团飞散的碎屑。夜枭停在标芯附近，负重左手抓住原有提环，没有去扯那根露铜的线。标芯停止翻滚以后，一盏很弱的检修灯从裂开的接口罩内亮出来。"],
 ["013","player","spacebattle","combat","serious","标芯稳住了。渡鸦号送主缆，灰鸢只负责把挂钩摆正。我们不能趁起重臂还没碰上来，把壳体从它下面拉出来吗？"],
 ["014","doran","bridge","combat","worried","直接拉会让那根臂弹过来。想保住壳，就得用本舰外侧空架挡一下，让它从旁边滑过去，外板免不了挨碰。只保标芯的话，现在就能回收，壳会被压坏，往后得用开放检修架，换电更慢、更吃人工。"],
 ["015","narration","spacebattle","combat","neutral","渡鸦号的主缆到了灰鸢手边。你让钩环穿过浮标的旧承力眼，试拉时外壳里面没有传来新的断裂声。起重臂还在转，末端那两只工具箱已经越过标芯。薇拉报出下一次可能接触的位置，把是否继续保壳的决定留给母舰。"],
 ["016","ivna","bridge","combat","serious","本舰能承受一段受控擦碰，不能把整根起重臂接在船身上。要保壳，按测出的斜面让它滑开；要撤芯，现在就收缆。把损失放在哪一边，我们当场记住，后面的装法跟着改。"]
],id('choice_1'));
chain([
 ["shell01","narration","spacebattle","combat","neutral","渡鸦号外侧空架迎上起重臂的侧面，主缆在你手边慢慢拉直。大船没有去撞它，只让斜架把接触点一点点送开。断臂擦过空架，扯走一片薄板；灰鸢在这段短短的空隙里把壳体挂正，母舰绞盘将它拉出了残件群。"],
 ["shell02","doran","hangar","duty","pensive","壳保住了，本舰少了一截好用的空架。先拆掉毛边，封住外板检修口；不能下次出机才看见这里还挂着半块铁。浮标壳的保温层能留，让普通巡检艇在外面工作的时间短一点。"],
 ["shell03","narration","hangar","duty","neutral","两名地勤把扯坏的架角抬回机库。借接头的人站在旁边，看铎兰把完整壳体转到检修面朝外的位置。他试着伸手取下卡扣，第一次没够到，第二次顺利卸下。渡鸦号付出的那块外板，被钉在待修架的最上层。"]
],id('101'));
chain([
 ["core01","narration","spacebattle","combat","neutral","你收回通向外壳的挂钩，让主缆接住夜枭稳着的标芯。两台机体沿来路后撤，起重臂的末端随后撞上浮标壳，把它压出一道深折。保温碎片在标芯身后散开，夜枭的左手一直停在提环旁，等绞盘真正吃住重量才松开。"],
 ["core02","doran","hangar","duty","serious","标芯能用，外壳救不回来了。把开放检修架装到有遮蔽的位置，每次换电先让巡检艇靠稳。以后这一项要多算一趟人出去，不能用一个更短的工时把今天省下的船伤藏起来。"],
 ["core03","narration","hangar","duty","neutral","矿船的人把带来的保温毯铺开，和地勤一起试着包住标芯的非散热部分。第一种绑法会挡住卡扣，他们又拆掉重来。新的架子比原壳更难照料，几个人蹲在旁边，把最容易摸错的一处接头刷成了明亮的黄色。"]
],id('101'));
chain([
 ["101","narration","workshop","duty","neutral","回收件在工坊里亮了半晚。巡检艇带来的接头插上去，电池终于能稳定充电，旁边的计时器走完一整格。铎兰没有关上护罩，而是把椅子让给送接头的人，请他从最开始再做一遍。那人停在第三步问了一句，铎兰当场改了标记。"],
 ["102","vera","workshop","duty","pensive","外面的位置也得让他们亲自走。我可以带第一圈，第二圈由他们报角度。我留在旁边，只在危险真的出现时叫停。练的时候能问清楚，总比某天换班以后只好猜我们的意思。"],
 ["103","narration","commandroom","duty","neutral","愿意参与的人从各条矿船上过来，会议室没有坐满。一个人只能排五天，另一人需要先带孩子回站，半个月后才能接班。伊芙娜把两段空白留在班表里，没有用任何人的沉默补上它们。空白暂时意味着少开两个服务时段。"],
 ["104","ivna","commandroom","duty","serious","五天就写五天，半个月以后再确认。没有人接的班先关掉，那时想过来的船提前知道。我们的任务是让这件事有人做得下去；谁休息，谁回家，不能到最后都变成欠着渡鸦号的情。"],
 ["105","doran","commandroom","duty","serious","我先带两班安装，第三班做交接测试。试过的人才能独立拆电池，没轮到的人也可以先学别的。取暖、医务和住舱通风都有底线，下面让大家选的是空机库的热和充电台的班次，不拿人在冷里硬撑来省电。"],
 ["106","narration","reactor","duty","neutral","主推进配电间的隔离灯依次变暗。铎兰用仪表确认每段真的失电，再让地勤把远航功率调节柜的馈线移到固定检修负载。两个航行散热支路也改了阀位，旁边挂上了新的流向牌。桥接座保持此前的实际状态，没有人把手伸进它的接缝。"],
 ["107","narration","reactor","duty","neutral","第一批待充电池推到测试台时，渡鸦号轻轻晃了一下。推进席照旧能调整姿态，却无法再调用原先那段持续高档。操舵员把旧的远航预备程序退出，在旁边画了一个等待船坞复接的圈。改造发生在船上，也发生在下一次能否说走就走的答案里。"],
 ["108","player","reactor","duty","serious","把这个结果报给所有人。渡鸦号留下做维修灯船，保留转泊和安全避让；恢复远航要有船坞和接替设备。我们今天交出的能力，不能明天又写进一份随时出动的承诺里。"],
 ["109","narration","workshop","duty","neutral","接下来的试验并不顺利。第二组电池接入时，工坊的灯低了一瞬，自动保护切断了充电台。铎兰没有再次按启动，而是沿发热的接头摸到隔热边缘，找到一处压得不紧的旧端子。刚学完的人取来量表，按自己的记录把那一项重测。"],
 ["110","doran","workshop","duty","worried","这里不是多拧半圈就算好了，金属已经热过。换掉这一段，再跑满一次。明天想多开几个窗口，就得让空机库在无人作业时降温，把电给充电台；想让检修间一直暖着，台子就轮流开，外面的船多等一班。"],
 ["111","nova","workshop","duty","serious","矿船带的货能等多久，我已经逐条问了。轮流充电会少一批服务，我们要提前报满；连续充电也只有现在测出的上限，不能把外面所有预约都接进来。那几段无人时的降温，等人回舱工作以前要重新暖够。"],
 ["112","narration","commandroom","duty","neutral","有人在班表边上画了一个热水杯，提醒从舱外回来要先在住舱缓一缓。带孩子回站的人表示自己更愿意等一个暖好的工位，赶着送货的人则愿意换取更早的一班。两边都把自己的理由说清，最后等你确认灯船第一周怎样运转。"]
],id('choice_2'));
chain([
 ["power01","narration","workshop","duty","neutral","充电台保持连续运转，空机库在没有人工作时降低了温度。回收班进舱以前，铎兰先把暖风开足，再放人越过隔离线。地勤开始习惯把工具收得更早，想临时加做一项检修的人得等下一个已经暖好的时段。"],
 ["power02","nova","bridge","duty","serious","这一周能多接一批换电，预约已经发满。有人临时想过来，我给他报下一班，没有往工位里再塞。最后一条船走以前，空机库也要先恢复温度，让下一班能按自己排好的时间开工。"],
 ["power03","narration","hold","duty","neutral","灯船的热量跟着新的班次流动。住舱照常有人喝水、晾衣服，空下来的机库则安静一阵。第一次被推迟的额外检修落到了次日上午，铎兰把那项真的留在表上，没有趁大家休息时独自做完。"]
],id('121'));
chain([
 ["warm01","narration","workshop","duty","neutral","充电台开始轮流工作，检修间保持原来的温度。第一次关掉台子时，外面一条矿船还在等待，驾驶员问能不能再多接一块电池。伊芙娜让他看已经占满的工位，答应把等候的取暖和口粮送到船边，没有让他在冷舱里熬过去。"],
 ["warm02","nova","bridge","duty","pensive","少掉的那一班已经通知到每条预约船。愿意绕去大港的可以走，留下等的我们按说好的供给。公用储备会用得快一些，下一趟补给先把这部分带来，别让守班的人到了饭点才发现被扣了。"],
 ["warm03","narration","workshop","duty","neutral","巡检班回到暖好的工位，把冻硬的手套放到架上。一个学徒在这里完整拆开了人生中第一块航标电池，做得比计划慢，旁边的人给他留着时间。外面的队列延长了一格，灯船为这个慢下来的下午付出了真实的一顿晚饭。"]
],id('121'));
chain([
 ["121","narration","orbit","duty","neutral","第三天，渡鸦号把回收的服务标拖到维修支路边缘。母舰绞盘承担重量，灰鸢在前方修正挂点，夜枭保持能看见浮标和两台机体的距离。标放稳以后，还需要沿不同角度重新测一圈，才知道来船会看到怎样的入口。"],
 ["122","vera","spacebattle","combat","serious","我报的只是这一侧。巡检艇从另一边过来，把你看到的距离独立报出来，先别看我的数字。差得多也不用凑成一样，我们一起找是哪里遮住了。"],
 ["123","narration","spacebattle","combat","neutral","巡检艇发来第一次测距，比夜枭的结果偏出一截。驾驶员本能地想重报，薇拉请他保留原数。诺瓦把两个视角拼在一起，发现系留架的一条长梁恰好挡住了标面。灰鸢把梁转过几度，巡检艇再次经过，这回看见的是完整的反光边缘。"],
 ["124","player","spacebattle","combat","serious","就按他第二次看见的角度固定。第一份偏差也留着，换班的人知道这根梁曾经挡在哪里。灰鸢收工具，母舰主缆缓慢减力，先看标自己能不能保持住。"],
 ["125","narration","orbit","duty","neutral","临时系留终于稳定下来。渡鸦号的灯落在浮标新固定的反光面上，又从那里回到巡检艇的舷窗；充电靠实物电池和往返船艇完成，没有一束光替人搬走负荷。第一批矿船收到临时开放的通知，按自己的航速在远处排起队。"]
],id('201'));
chain([
 ["201","narration","bridge","duty","neutral","第一班临时服务开始时，来的船比预计少一条。那条船选择绕去大港，留在队里的驾驶员知道自己可能要多等，却想试试这处离矿站近得多的补给点。诺瓦把实际到场的船数重新报过，给每一条船留出能停下来的间隔。"],
 ["202","ivna","bridge","duty","serious","按最慢那条船的加速量排。前两条过标以后也别收紧间距，后面的人还没有走过。渡鸦号只保证这一段完成过的测量；哪一个报位对不上，我们就停在它前面。"],
 ["203","narration","spacebattle","combat","neutral","灰鸢和夜枭各在队列一侧。第一条矿船把空电池交给巡检艇，新的电池从服务架送过去，两个驾驶员隔着舷窗举起同样的确认灯。船尾离开维修支路时，旁边的第三枚旧标突然闪了一下，导航屏上的距离跟着跳出半格。"],
 ["204","vera","spacebattle","combat","worried","第二圈停止。夜枭这一侧看到的间隔在变，巡检艇先别按刚才的数接近。第一条已经经过的船可以保持现有航向，后面还没有转向的留在原位。我去看闪灯的那一枚。"],
 ["205","narration","spacebattle","combat","neutral","你让灰鸢在队尾刹住。矿船的制动比机体迟了一拍，长长的货列还在向前滑，最前面的船长将转向器推到尽头，硬生生把货列带回旧的方向。两只外置冷箱碰在一起，报警声透过公共频道短促地响了几次。"],
 ["206","player","spacebattle","combat","serious","稳住当前角度，别再追新距离。灰鸢在你外侧，能看见你船尾的灯。冷箱受损先让货主知道，轮到通过时也不能假装这一下没发生。薇拉，你按能确认的位置往前。"],
 ["207","narration","spacebattle","combat","neutral","夜枭的右侧感应单元对准旧标，只接收它外露的形状和信号。薇拉绕到能看清背面的角度，看见供电尾线压在一块翘起的护片下，震动时便接通一瞬。每一次短接都让标灯亮起来，像一个还在认真工作的假回话。"],
 ["208","vera","spacebattle","combat","serious","供电尾线磨破了，时断时续。我要先让巡检艇断开它的独立电池，确认灯灭，再拆护片。灰鸢守住来船的方向，不用过来替我把旧标抓死。这里的操作普通巡检艇也能完成，让他们把刚学的停机做一遍。"],
 ["209","narration","spacebattle","combat","neutral","巡检艇第一次伸出短臂时，被自己拖着的工具袋挡住了视线。驾驶员说了一声等一下，收回短臂，把工具袋移到另一边。薇拉让夜枭停在旁边，没有替他按下去。主屏上，失准的标灯终于彻底暗了，整条队列也随之安静下来。"],
 ["210","nova","bridge","combat","worried","还没通过的冷箱里有一批菌种，等太久会超过允许温度。可以把它们接到灯船电源，一起等维修；也能先让已经核过前一段的两条小船离开，灰鸢护它们到下一个确认点，剩下的在这里停。分开走要多用一趟机体燃料和护送时间。"],
 ["211","ivna","bridge","combat","serious","一批等，供电和货损由我们接住；分批走，前面得有人真护到下一个点。不能因为纸上写着两条路线，就把灰鸢同时算在两处。夜枭留在维修点，渡鸦号的近防只守住这里的警戒圈。"],
 ["212","narration","spacebattle","combat","neutral","队列中间的货主打开冷箱外侧的温度窗，读数仍在上升。前面两条小船的驾驶员则发来自己已经核对过的航迹，等候是否先行的答复。你看看灰鸢的剩余燃料，再看夜枭旁边那个刚刚完成停机的小小巡检艇。两处都需要有人把接下来的那一段做完。"]
],id('choice_3'));
chain([
 ["wait01","narration","spacebattle","combat","neutral","船队依次靠近灯船的临时接电位，冷箱先接上公用电源。最热的那一只已经有一部分菌种失活，货主把受损格取出来，单独贴上标签。其余船没有急着向前挤，灰鸢沿队列外侧停住，给维修点留出了一条完整的退路。"],
 ["wait02","nova","bridge","combat","pensive","受损一格，其余还在范围里。我把这次停航和本舰供电的记录交给货主，灯船按承诺承担这一格的补货。今天所有人会一起迟到，下一班预约顺延，先把情况送到接货那边。"],
 ["wait03","narration","hold","duty","neutral","一小时后，来取热食的巡检艇带回一张写歪的谢条，下面附着受损货物的实数。舱里的人把它放在同一块磁板上，没有把感谢盖住损失。渡鸦号公用电表又走过一格，工坊里的备用电池少充了一批。"]
],id('221'));
chain([
 ["split01","narration","spacebattle","combat","neutral","两条已核过前段的轻船先离开队列。灰鸢跟在它们后方，一直飞到下一处确认点，重新看见双方报位吻合才让它们独自行驶。远处渡鸦号的灯缩成一个小点，夜枭和巡检艇仍守着那个已经断电的旧标。"],
 ["split02","player","spacebattle","combat","serious","前两条已经到确认点，灰鸢返航。余油只够回灯船，下一班我不出动，改由巡检艇完成近处工作。留下的船照原位等，不因为我回程的航迹从你们旁边经过就跟着移动。"],
 ["split03","narration","bridge","duty","neutral","先行的轻船保住了最急的一批冷箱，留在灯船边的货物仍接上公用电源。灰鸢回到机库时，燃料余量低得不能接下一班。伊芙娜把那段空位从服务表上划掉，等待的船又多了一条，补给船必须提前赶来。"]
],id('221'));
chain([
 ["221","narration","spacebattle","combat","neutral","巡检艇的人取下护片，看见一段已经烧黑的绝缘层。他没有直接把新的电池接上去，而是把破线完整卸下，拿到艇灯底下让薇拉看清两端。更换后，标灯从第一下亮起到最后一次测试，始终保持在同一位置。"],
 ["222","vera","spacebattle","combat","warm","这一轮由你报完成。你亲手停了电，也换了那段线，知道哪一处原先磨破。把工具带回艇里，先离开工作半径，再告诉后来的人可以从哪里接近。我听你的回话。"],
 ["223","narration","spacebattle","combat","neutral","巡检艇退到安全距离，自己发出第一份作业完成通知。薇拉又沿第二圈测过一次，确认数据没有漂，才让夜枭离开标边。矿船的灯一盏一盏动起来，经过失准过的那一枚时，每条船都主动报了一遍自己看见的距离。"],
 ["224","ivna","bridge","duty","serious","第一班最后一条已经通过。临时开放到这里结束，按原定时间交班。新来的班先看现场，不用急着给我们报一个好消息。我们还在旁边，能陪你们把第一轮做完。"],
 ["225","narration","hangar","duty","neutral","夜枭回到机库，薇拉解开束带以后没有立刻去找下一件工具。新的巡检班站在舱口等她，她把前一班真的遇到过的问题讲完，请对方自己说准备先检查哪里。听完答复，她交出借来的接头，回到自己的更衣柜前。"],
 ["226","vera","hangar","duty","pensive","今天第二圈我叫停了，后面是他们自己修完的。明天我上晚班，白天去那条补给船待一会儿。他们请我带一个空饭盒，说教我做一种能装着带走的点心。我想先去学，回来的时候再看看你们有没有睡够。"],
 ["227","narration","bridge","duty","neutral","你从机库回到舰桥时，轮值席上已经换了人。他报出了外面实际停着的船数，也说了一项暂时没有把握的读数。你坐在旁边听他重新量过，没有把椅子拉回自己面前。渡鸦号完成第一次交班，远处的服务标仍在原位慢慢转着。"]
],id('301'));
chain([
 ["301","narration","orbit","duty","neutral","一个月后，渡鸦号还在维修支路旁边。外板上新补的漆与旧色差了一点，服务标却已经经历过几次完整换电。船表上没有写全年通航，每次开放只列下一段确实有人、有电池的时间。想赶更快班次的人照旧去主干大港，外环慢船则开始在这里认得几个交接声音。"],
 ["302","nova","bridge","duty","pensive","联合保留上游的放行权，赤垣送来的备件按件收钱，灰塔愿意拿我们公开的实测误差做对照，但没有替这里担保。谁的测量有问题，就在这里重测；别把那几家愿意回话，写成它们以后会一直替我们值班。"],
 ["303","narration","bridge","duty","neutral","主屏上有一艘船取消了明日预约，说准备改走大港。伊芙娜确认收到，让它自行选择新的时间，没有追问为什么不留下。空出的那一格后来被一条更小的巡检艇接走，它只需要两块电池，报到时却紧张得把船名说了两次。"],
 ["304","ivna","bridge","duty","warm","听清了，就你这一条。明天带旧电池过来，接头也一起带；要是路上晚了，提前报一声，我们看当时剩下多少工位。今晚先休息，值班频道有人听，不用一直盯着屏。"],
 ["305","narration","messhall","off_duty","neutral","这天晚上，薇拉带回一个压得太紧的饭盒，盖子很久才掀开。里面的点心粘成了两排，她沿着中间的缝轻轻掰开，一块先断成两截。诺瓦拿起断得比较整齐的那半块，问能不能先吃边角，替大家看看是什么味道。"],
 ["306","vera","messhall","off_duty","happy","当然可以。我第一次做的时候面皮太薄，里面的馅全露出来了。教我的人说，等回船以后谁先拿到破的，就让谁替我保守这个秘密。你已经拿到了，现在来不及换。"],
 ["307","nova","messhall","off_duty","happy","那这个秘密有点好吃。我能再负责一块吗？别急着把我写成可靠的人，等他们教你做甜的，我可能会把消息告诉整个餐厅，让大家一起去。"],
 ["308","narration","messhall","off_duty","neutral","伊芙娜从盘边拿起最小的一块，掰给铎兰一半。铎兰用右手接住，另一只手把桌边的杯子移远一些，免得碎屑掉进去。几个人等他尝过，他嚼了很久，最后却先问起补给船上那位厨师平常几点起床。"],
 ["309","doran","messhall","off_duty","warm","我小时候吃过差不多的，包得比这个粗，没这么香。要是对方愿意教，给我留一个休息班。工具我不带过去，空手学。别到时候一看见坏炉门，我又蹲在旁边修到吃完饭。"],
 ["310","ivna","messhall","off_duty","happy","我替你记着空手这句。那天我跟你一起去，看看你能撑到第几分钟。要是真的忍不住，先把饭吃完，再问人家要不要修；没准他们早就习惯那扇门，不急着让你改变。"],
 ["311","narration","messhall","off_duty","neutral","饭盒底下剩了两块，薇拉把它们分开，一块留给夜班，另一块放进自己小碟里。她没有边吃边翻维护记录，吃到一半还站起来去找热水。餐厅门口有人经过，顺手说下一班已到位，她点点头，继续把那半块点心吃完。"],
 ["312","vera","messhall","off_duty","pensive","灯船真的有人接班以后，我才敢把明天安排在别的地方。我还想去补给船的另一边看看，他们说窗下有一小格种过菜。这次先不想学什么，坐一会儿也行。我会在自己的班以前回来。"],
 ["313","player","messhall","off_duty","warm","照你想的去。夜班那块我替你放在能看见的地方。回来要是愿意讲，我想听你在那边坐着时看见了什么，不一定非得带一件能派上用场的东西。"],
 ["314","narration","ship_rail","off_duty","neutral","夜里，观察廊里只亮着地面引导灯。你站到旧舷窗前，看见一艘慢船在服务标旁停了很久，等巡检艇把两块电池搬过去。薇拉从餐厅方向走来，隔着窗指给你看补给船的位置。它还要多停半天，明早那一小段空闲确实存在。"],
 ["315","narration","ship_rail","off_duty","neutral","她离开以后，玻璃里留下你和身后的空椅子。过去这里最常见的是出航前的倒数，如今你等的是另一班人把工作做完，好轮到自己歇一阵。灯船没有把所有远处都照亮，只在看得见的这一小段，让来的人知道能在哪里停。"],
 ["316","narration","orbit","duty","neutral","翌日的交接由矿船来的值班员发出。他先报一项检查通过，再报一项还在等零件，语气没有你们那么短，却把两件事都说清了。渡鸦号留在原位，主推进保持低档，工坊亮起灯。那条昨天说了两遍船名的小巡检艇，正按约定的时间驶过来。"]
],'ending_lightship_final');

decision('choice_1','spacebattle','标芯已经稳住，起重臂仍在逼近完整壳体。渡鸦号可以让断臂沿斜架擦过，或者现在只收回标芯。两种做法都会改变灯船后面的实际工作。',[
 {id:'v6_lightship_save_shell',label:'用母舰外侧空架挡开断臂，保住壳体；承担外板与空架损伤。',next:id('shell01'),reaction:'渡鸦号按刚测出的斜面接近，灰鸢保留主缆的退出角度。地勤开始准备受损架角的拆除工具。',effects:[]},
 {id:'v6_lightship_save_core',label:'立即回收标芯，放弃壳体；改做开放检修架，增加每班舱外工时。',next:id('core01'),reaction:'你把主缆换到标芯提环，两台机体准备沿原路撤回。铎兰开始重排普通巡检艇的接近位置。',effects:[]}
]);
decision('choice_2','commandroom','远航馈线和散热支路已经按承诺改接。取暖、通风与医务安全负荷保留，现在决定第一周的充电能力怎样分配。',[
 {id:'v6_lightship_power_windows',label:'充电台连续开工，空机库仅在无人时降温；限制临时检修和下一班预约。',next:id('power01'),reaction:'你确认每次人员进场前必须暖够工位。额外维修要排到正式时段，船不再暗中接无限预约。',effects:[]},
 {id:'v6_lightship_warm_workshop',label:'检修间保持温暖，充电台轮流开启；少一批服务，并承担等待者的基本供给。',next:id('warm01'),reaction:'你把少开的窗口直接从预约上撤下，给等候船送去真实的取暖和口粮安排。',effects:[]}
]);
decision('choice_3','spacebattle','旧标已经断电，维修人员正在拆护片。尚未通过的船仍在安全位置，冷箱的温度持续上升。灰鸢只能在一个方向上承担护送。',[
 {id:'v6_lightship_hold_convoy',label:'全队留下等修好，灯船给冷箱供电；承担当日延误、部分货损与少充一批电池。',next:id('wait01'),reaction:'所有船保持队列，灰鸢守住来向。灯船把可接电的位置依次报给货主，诺瓦开始核对已经受损的那一格。',effects:[]},
 {id:'v6_lightship_split_convoy',label:'护送已核过前段的两条轻船先走；耗去灰鸢余油，关闭下一班出动和相应服务。',next:id('split01'),reaction:'灰鸢随前两条轻船出发，夜枭和渡鸦号留在维修点。下一班的空位现在就从预约上撤掉。',effects:[]}
]);
for(const k of ['shell03','core03'])nodes[id(k)].onEnter=[flag('ev6_lightship_buoy_recovered'),flag(k==='shell03'?'ev6_lightship_shell_saved':'ev6_lightship_open_frame')];
nodes[id('shell03')].onEnter.push(flag('ev6_lightship_hull_scraped'));
nodes[id('108')].onEnter=[flag('ev6_lightship_propulsion_committed')];
nodes[id('power03')].onEnter=[flag('ev6_lightship_continuous_charge')];
nodes[id('warm03')].onEnter=[flag('ev6_lightship_warm_workshop'),flag('ev6_lightship_waiting_supply_spent')];
nodes[id('wait03')].onEnter=[flag('ev6_lightship_convoy_held'),flag('ev6_lightship_cargo_loss_shared')];
nodes[id('split03')].onEnter=[flag('ev6_lightship_convoy_split'),flag('ev6_lightship_mecha_fuel_spent')];
nodes[id('223')].onEnter=[flag('ev6_lightship_first_convoy_passed')];
nodes[id('227')].onEnter=[flag('ev6_lightship_relief_drill')];
nodes[id('005')].variants=[{requires:['c2_hd_dark'],text:'以前拿旧电池点的那盏临时灯，只撑过约定的一段时间。现在要让普通巡检艇天天回来换电，就得把住舱、工坊和散热都留在这里。主推进保留姿态和近处转泊，要恢复长程准备，得进船坞按周复接。'}];
nodes[id('008')].variants=[{requires:['c6_entry_labor'],text:'机库里多出一辆很小的拖车，载着矿船借来的接头和保温毯。以前用工时换通行时，你们知道两台机体能做多少；这回送接头的人报的是普通巡检艇的舱门高度。地勤把试验支架压低一格，让穿厚手套的人也能摸到卡扣。'}];
nodes[id('012')].variants=[{requires:['c8_chain_cut_clean'],text:'灰鸢躲到较大的残片后面，肩甲上的旧缆桥擦痕还在。你没有把先前切得干净当成这一次的保险，等夜枭重新报过遮挡角度，才接近标芯。薇拉用负重左手抓住原有提环，露铜的尾线留在一旁，没有受拉。'}];
nodes[id('225')].scene='hangar_duo';
nodes[id('226')].scene='hangar_duo';
nodes[id('312')].variants=[
 {requires:['vera_word_used'],text:'我明早自己去。今天我在第二圈说停，你真的停了，这件事我记得；以前那次口令我也还记得。我想慢慢看这样的日子能过多久，不急着替我们说一切都好了。下一班按原时间接，我休息的这段也按自己的意思过。'},
 {requires:['vera_bond_close'],text:'我明早还想去补给船的另一边看看，他们说窗下有一小格种过菜。我问过了，可以带一位朋友。你有空的话一起去，先把你的班交完。我想跟你在那边坐一会儿，什么也不修。'}
];
nodes[id('313')].variants=[
 {requires:['vera_word_used'],text:'好，你按自己的安排去。夜班那块我替你放好，过去的记录也保留。等你愿意再讲在另一边看见了什么，我会听，今天就不替你约下一次。'},
 {requires:['vera_bond_close'],text:'我把自己的班交完再过去，你先上船，不用在舱口等着。饭盒带你喜欢的那只，我想看看那一小格菜到底能长成什么样。'}
];
directions[id('016')]=[{pose:'ivna-command-full',framing:'full'}];
for(const k of ['204','206','208','210','211'])directions[id(k)]=[{framing:'head'}];
for(const k of ['306','307','309','310','312','313'])directions[id(k)]=[{framing:'close'}];
for(const k of ['split01','split02','221','222','223'])nodes[id(k)].scene='bridge';
nodes[id('split01')].text='主屏的护航视图里，两条已核过前段的轻船先离开队列。灰鸢跟在它们后方，一直飞到下一处确认点，重新看见双方报位吻合才让它们独自行驶。远处渡鸦号的灯缩成一个小点，夜枭和巡检艇仍守着那个已经断电的旧标。';
nodes[id('221')].text='巡检艇的作业影像回到主屏。艇上的人取下护片，看见一段已经烧黑的绝缘层。他没有直接把新电池接上去，而是把破线完整卸下，拿到艇灯底下让薇拉看清两端。更换后，标灯从第一下亮起到最后一次测试，始终保持在同一位置。';
nodes[id('223')].text='主屏中，巡检艇退到安全距离，自己发出第一份作业完成通知。薇拉又沿第二圈测过一次，确认数据没有漂，才让夜枭离开标边。矿船的灯一盏一盏动起来，经过失准过的那一枚时，每条船都主动报了一遍自己看见的距离。';
const closure={
 mechanism:'第七段主干按此前已完成的处置运行，灯船只在外侧维修支路提供换电、修复和逐次测距。慢线容量取决于真实工位和轮值，不替代三方主干权力，不增加神经写入或超光速能力。',
 ship:'渡鸦号保留原轮廓、姿态控制与短距转泊，将远航功率调节和散热支路改接长期检修负荷；恢复远航须进船坞按周复接，并先找齐服务接替。',
 companions:[
 '伊芙娜：把临时服务做成能够关闭、轮换和交接的实际班次；对外报真实上限，也保留每人的休息和退出。',
 '铎兰：退役旧的随时远航准备，培训普通巡检人员；损件、低温工位和停机都占真实工时，第三班由别人接手。',
 '诺瓦：公开每次误差、停航与服务容量，接受后来者用自己的实测纠正结果；不替三方作无限保证。',
 '薇拉：叫停第二圈失准并让普通巡检艇独立修完；她自己选择值班和去补给船学点心的休息，亲密与岗位各自成立。'
 ],
 protagonist:'成为能把椅子交给下一班的灯船协调者，承担货损、出动和等待的真实代价，选择一种固定但能休息、能由人接替的生活。'
};
const ending={id:'ending_lightship_final',kind:'ending',chapter:'ch09',title:'结局 · 灯船',route:'lightship',routeName:'外环维修灯船',classification:'ordinary',
 summary:'渡鸦号把远航准备交给了一段慢船会经过的路。它回收航标、改接供电，陪普通巡检班修过第一次失准，再把值班椅真正交出去。灯光照到的范围有限，却有人回来接下一班。',consequences:[],closure,variants:[]};
const a=[['ev6_lightship_shell_saved','保住服务标壳体，母舰外板和空架受损，后续巡检的保温与工时较稳定。'],['ev6_lightship_open_frame','只收回标芯，开放检修架多占一趟舱外工时，普通巡检艇需在遮蔽位置靠稳。']];
const b=[['ev6_lightship_continuous_charge','充电台连续运行，空机库无人时降温，临时检修须等待暖好的正式工位。'],['ev6_lightship_warm_workshop','检修间维持温暖，充电班次减少，灯船为等候船承担基本取暖与口粮。']];
const c=[['ev6_lightship_convoy_held','第一批全队停等，灯船共同补偿失活菌种，额外供电挤掉一批电池充电。'],['ev6_lightship_convoy_split','先行轻船保住急货，灰鸢耗去返航以外余油，下一班出动与相应服务关闭。']];
for(const [af,at]of a)for(const [bf,bt]of b)for(const [cf,ct]of c)ending.variants.push({requires:[af,bf,cf],consequences:[at,bt,ct,'普通巡检人员独立完成停机、更换和回报，Vera离岗休息后服务仍可交接。','灯船仅提供有限局部服务；桥的原处置保留，没有额外写入。']});
nodes.ending_lightship_final={id:'ending_lightship_final',kind:'ending',chapter:'ch09',scene:'orbit',speaker:'narration',tone:'duty',expression:'neutral',text:'灯船。渡鸦号留在维修支路边上，给一条条慢船换电，给一个个新值班员留下能坐稳的椅子。它不能随时追向远处，也没有替所有人点亮整片星域。有人从这里出发，有人在休息之后回来；今天的值班结束时，另一双手已经接住了工具。',outcomeId:'ending_lightship_final',onEnter:[flag('ev6_lightship_complete'),flag('ending_lightship_final_reached')]};
export const REVISION={
 id:'v6-o7-lightship-action-draft',nodes,patches:{},finalEndings:{ending_lightship_final:ending},directions,
 links:[
 {action:'add-choice',nodeId:'fx_choice_stay',choice:{id:'v6_choose_lightship',label:'回收外侧服务标，把渡鸦号留下作为维修灯船；交出随时远航的准备，承担有限而长期的轮值。',next:id('001'),reaction:'你向等待的矿船报出临时服务范围，说明必须先回收、试验和安排接班。铎兰开始核对可改接的航行支路。',effects:[flag('ev6_lightship_stay_promised')]},note:'Append to fx_choice_stay, preserving every original choice and condition.'},
 {action:'register-final-ending',endingId:'ending_lightship_final',chapter:'ch09',note:'Ordinary O7, no ship_damage_high gate and no legacy tail.'},
 {action:'bridge-accounting-precondition',note:'No bridge mutations. Fixed service uses physical battery exchange, repair and measured local navigation. Rewired propulsion feeds are distinct from the unique W9 pump board and actual prior interface disposition.'}
 ],
 prerequisites:[
 {sourceNode:'c2_choice_handler',choiceId:'c2_hd_dark',optionalFlags:['c2_hd_dark'],purpose:'Recalls temporary battery light and its finite duration; no free reused battery or route gate.'},
 {sourceNode:'c6_choice_entry',choiceId:'c6_entry_labor',optionalFlags:['c6_entry_labor'],purpose:'Hands-on capacity callback while adapting this work to ordinary crews.'},
 {sourceNode:'c8_choice_chain',choiceId:'c8_chain_clean',optionalFlags:['c8_chain_cut_clean'],purpose:'Physical cutting memory, all new angles still measured.'},
 {sourceNode:'fx_choice_stay',optionalFlags:['vera_bond_close','vera_word_used'],purpose:'Personal invitation or remembered harm only; no ordinary ending gate.'}
 ]
};
