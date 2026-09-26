// Original O4 action draft. Physical disposition reads canonical current state;
// W8/W9 tickets, material costs and legacy choices are never reset or rewritten.
const nodes={},directions={},id=s=>`v6_together_${s}`;
function chain(rows,next){rows.forEach(([k,speaker,scene,tone,expression,text],i)=>{nodes[id(k)]={id:id(k),kind:'dialogue',chapter:'ch09',speaker,scene,tone,expression,text,next:i+1<rows.length?id(rows[i+1][0]):next};if(!['narration','system'].includes(speaker))directions[id(k)]=[{framing:tone==='combat'?'head':tone==='off_duty'?'close':'half'}];});}
function decision(k,scene,text,choices){nodes[id(k)]={id:id(k),kind:'choice',chapter:'ch09',speaker:'narration',scene,tone:scene==='battle'?'combat':'duty',expression:'neutral',text,choices};}
const flag=(key,value=true)=>({type:'flag',key,value});

chain([
 ['001','narration','bridge','duty','neutral','三方都收到了渡鸦号暂不入列的答复。原本留给本舰的通道开始收窄，联合的护航舰往内侧移，灰塔的接收艇停在另一边，赤垣的拖船仍守着外缘。每一边都想先知道你会往哪里去。'],
 ['002','nova','bridge','duty','serious','公开过的资料都已经在外面了，他们现在追问的是谁来保管设备和维护权限。我们不选保护人，这几份请求也不会自己消失。'],
 ['003','ivna','bridge','duty','serious','先离开中间这块位置，走外侧低速通道。两机留在本舰两边，各自看住一段。谁靠近就报，别把他们每一次改位都当成准备开火。'],
 ['004','player','bridge','duty','serious','保持能停下来的速度。铎兰，报现有可用牵引点，后面的动作只用它们，已经封停的地方不再加负荷。'],
 ['005','doran','bridge','duty','serious','船尾两个点还能用，左右分开。灰鸢的回收架复查过，能挂短索。夜枭左手只送接头，它的右臂留着看路，今天谁也没有多余的机体可以换。'],
 ['006','narration','battle','combat','neutral','渡鸦号退到外缘，舰背从三组不同的测距光下慢慢移开。灰鸢在前侧，夜枭在后侧。两台机之间有一段很宽的空处，足够别的船看见它们正在怎样离开。'],
 ['007','vera','battle','combat','worried','外侧通道里有一条补给船，被旧货架卡住了。推进还在亮，船首动不了。它的呼叫没进三方主频道，我从民用短频里听到的。'],
 ['008','nova','bridge','duty','worried','那条船不在今天的三份接收清单里，是临时改道的补给船。刚才大家都围着我们，它自己试了几次脱离，货架越卡越紧。'],
 ['009','narration','battle','combat','neutral','补给船的尾部喷口在旧架之间忽明忽暗，折断的梁卡进它侧面的装卸口。舱里有人用布挡住一处漏光，另一个人把手伸出观察窗，反复朝同一个方向指。'],
 ['010','player','battle','combat','serious','灰鸢靠过去看卡点，夜枭继续看住回收路线。渡鸦号先停在外侧，我们把它带出这堆东西再走。'],
 ['011','ivna','bridge','duty','serious','收到。把救援位置原样给三方，告诉他们这条船里还有人。我们不让它替本舰挡住追索，也不让新来的船把回收路围上。'],
 ['012','keating','battle','combat','serious','救援位置收到。我让联合那两条留在内线，先把补给船的识别发来。你们要离开，至少把这一次怎样离开留在现场。'],
 ['013','narration','battle','combat','neutral','内线的护航舰减速以后，灰鸢终于能从断梁下方靠近。你看见装卸口里堆着三只被挤坏的周转箱，外面的梁没有刺进舱内，只要沿原来卡住的方向慢慢拉开，还有办法保住船体。'],
 ['014','vera','battle','combat','serious','回收路有两段窄口。我给灰鸢标了近处那段，远处由本舰的外摄像机看。补给船如果自己乱加推力，尾部会扫到第二段，先让它只保姿态。'],
 ['015','doran','battle','combat','serious','梁一旦卸力，补给船就会往外滑。灰鸢亲自牵，机体的腿部制动要一直吃力；本舰牵，船尾索座要受一回斜拉。选定一种，剩下的人就按那一种看住路。'],
 ['016','player','battle','combat','serious','补给船已经听到了，姿态喷口压住了。现在定谁牵，先把这一步做稳，后面三家的动静交给另一个人报。'],
 ['017','narration','battle','combat','neutral','补给船的内灯换成长亮，表示舱内的人已经找到能固定自己的地方。灰鸢与渡鸦号各有一条索可以接过去，夜枭停在两条路线之间，等你报出要看的那一条。']
],id('018'));
decision('018','battle','这条船可以被带出断架。由灰鸢牵引，需要机体连续制动；由渡鸦号牵引，需要母舰承受斜向负荷。另一方负责护住已经标出的回收路线。',[
 {id:'v6_o4_mecha_tow',label:'灰鸢接短索牵引，本舰守住外侧，夜枭逐段报角度。',next:id('a01'),effects:[flag('v6_o4_mecha_towed')],reaction:'灰鸢把短索扣到补给船原有的承力框，夜枭左手扶索头，等你确认卸力才退开。渡鸦号停在外侧，给回收路留出整段船身的遮挡。'},
 {id:'v6_o4_carrier_tow',label:'渡鸦号接主索牵引，灰鸢先开回收路线，夜枭盯住船尾。',next:id('a11'),effects:[flag('v6_o4_carrier_towed')],reaction:'夜枭把主索送到承力框，渡鸦号慢慢拉直。灰鸢沿回收路先走一遍，挪开会擦到补给船尾部的碎架。'}
]);
chain([
 ['a01','narration','battle','combat','neutral','灰鸢向后收推力，短索绷直，卡进装卸口的那根梁先松了一点。你停住让船上的人确认舱内有没有变化，收到长灯以后，才继续沿夜枭报出的角度拉。'],
 ['a02','vera','battle','combat','serious','梁出来一半了，船尾在摆，先等一下。我把下一段窄口标出来。好，沿左边这条线，距离够，慢慢带过去。'],
 ['a03','narration','battle','combat','neutral','断梁终于从装卸口滑出来，补给船猛地向前漂了一截。灰鸢两腿的制动同时吃力，机体在索后面偏了半个角度。你松开一点索，把那一截多出来的速度交给更长的回收距离去消化。'],
 ['a04','doran','battle','combat','worried','腿部制动温度到限了，按刚才那种松法继续。到窄口外面就把索交给本舰，今天机体这套衬片得换，不能再接第二条船。'],
 ['a05','narration','battle','combat','neutral','补给船穿过第二段窄口，渡鸦号接住它逐渐稳下来的航向。灰鸢卸下短索，腿部告警仍亮着。你让机体沿原路慢慢回收，没有再用一次急刹证明自己还能飞。']
],id('019'));
chain([
 ['a11','narration','battle','combat','neutral','渡鸦号主索拉直的时候，灰鸢已经把近处那段碎架推到外侧。补给船沿着主索一点点滑出，装卸口里那根梁仍在摩擦，落下的碎屑被夜枭的镜头逐块看住。'],
 ['a12','vera','battle','combat','serious','补给船尾部向右偏了。本舰收左侧姿态，先把它拉到两道索中间。我看着后面，窄口还没到，现在还有地方修。'],
 ['a13','narration','battle','combat','neutral','船尾的牵引座发出一次整齐的震动，支撑肋向内让了几毫米。补给船的角度随之扶正，旧梁从装卸口里退出来，载荷却全部落到了渡鸦号那一处索座上。'],
 ['a14','ivna','battle','combat','serious','本舰保持，等它过窄口再卸。地勤撤出船尾检修格，索座现在只准从隔断外面看。灰鸢把最后一块碎架带开，我们收尾。'],
 ['a15','narration','battle','combat','neutral','补给船完整地滑出旧架，渡鸦号缓缓卸力。船尾检修格里有一条新裂开的涂层线，铎兰没有当场宣称没事，只把这个牵引点封停，安排到港以后拆开内侧支撑看一遍。']
],id('019'));
chain([
 ['019','narration','battle','combat','neutral','补给船恢复了自己的低速推进，舱里的人把堵漏的布撤下来，检查过一遍又塞回原处。船长在民用频道里说愿意交出一部分货作为报酬，声音沙哑，仍旧怕渡鸦号现在就把它留在这里。'],
 ['020','player','battle','combat','serious','报酬到安全处再谈，先报你自己还能走多远。你们现在跟本舰去港外，速度按补给船的来。'],
 ['021','nova','bridge','duty','serious','三边已经把我们的位置记全，外侧通道还开着。他们没有停止追问保管权，不过再跟进来，就会和这条补给船挤在同一条回收路上。'],
 ['022','ivna','bridge','duty','serious','把补给船的低速航路原样广播，给他们看清。灰鸢回收，夜枭留到最后一段结束，随后两机都停出动。后面的事回舰上谈。'],
 ['023','vera','battle','combat','serious','最后一段到头了，补给船自己报过两次位置。我留了两枚临时反光标，给后面来的船看，这次借的是民用标记，回收位置也一起报了。'],
 ['024','narration','orbit','duty','neutral','渡鸦号带着补给船进入较远的安全航位，三家的舰艇各自停在通道外侧。没有一边给本舰发来保护承诺，也没有哪一边立即追上来开火。刚才那条回收路变成了大家都看得见的一段距离。'],
 ['025','doran','hangar','duty','serious','两机都停稳再下舱。今天用坏的地方先绑红条，谁也别偷偷撕掉。我把能自己修的和要到港借设备的分开，靠这几样东西继续挣钱，总得知道它们还剩多少本事。'],
 ['026','narration','hangar','duty','neutral','地勤把借出的索一段段收回来，补给船的船员也过来帮忙。有人以为这就算交了工钱，铎兰摆了摆手，让他先去检查自己船上的漏点，随后把最后那一圈沉重的索提上架。'],
 ['027','vera','hangar','duty','pensive','我在外缘听见呼救的时候，已经把回去的路量好了。改过去以后，要重算的其实只有两段。我想先救它，再回到原来的问题上。'],
 ['028','player','hangar','duty','warm','你把新路线报得很清楚。我们以后还会遇到这种时候，先把眼前能做的说全，别以为答了三封信，后面的每一步就已经替我们选好了。'],
 ['029','narration','hangar','duty','neutral','她把回收架上最后一道保险扣按回去，手没有立刻抽开。铎兰在另一边叫人把检修灯送进去，薇拉等那盏灯亮稳，才拿起自己的头盔，和你一起离开机库。'],
 ['030','nova','commandroom','duty','serious','我们救人的这一段已经公开，三方对设备保管的请求仍在。接下来得把本舰打算保留什么、放弃什么说到实物上，不能只靠“不入列”的那封答复。'],
 ['031','ivna','commandroom','duty','serious','生活上的代价也一起确认。没有哪一家替本舰兜底，坞位、药品、配给都得重新找。谁愿意继续做什么，由本人说，不能把今天一起救过人当成往后都必须留下的理由。'],
 ['032','doran','commandroom','duty','serious','我接机修，但只能答应我这双手做得到的活。公共柜要留最低一层备件，借出去了就追回来。欠人家的工时大家一起排，我一个人干到明年也还不清整条船。'],
 ['033','nova','commandroom','duty','serious','我留现有的记录副本。已经公开的那些照旧在外面，个人记录单独看权限。后面谁来问工作，我能帮着说；问到本人怎么生活，还是得把问题交回本人手里。'],
 ['034','vera','commandroom','duty','serious','我想继续飞夜枭，也想有能自己排的轮休。我的那条口令按刚才确认过的办法保管。船上的写入针座属于另一件设备，今天把两件事分开做。'],
 ['035','player','commandroom','duty','serious','轮休和岗位分别排，想走的时候当面商量。眼前的设备先去看一遍，我要在现场决定，不能再把写过几次当成已经拆掉了什么。'],
 ['036','narration','reactor','duty','neutral','检修灯在原来的干管旁亮起，反应堆主回路隔在栅栏后面。铎兰把已经停用的操作座和存放拆下件的托盘一起推到灯下，将磨旧的编号转向你们。'],
 ['037','doran','reactor','duty','serious','这次不准备写入。上次用了什么、付了什么，原记录留着。我先指给你们看原来的断面，再看座上哪些位置还连着。已经移出来的件在旁边，编号一个个对。'],
 ['038','nova','reactor','duty','serious','只读显示和航道记录保留。我把现场影像开到这一页，原件上的受热痕迹、针座还连着的位置都照清楚，再和各自的原编号对。'],
 ['039','vera','reactor','duty','pensive','我想站在能看见接口的这一边。标记在哪儿、还有没有连接，我都要看清楚。做完以后让我自己读一次，确认读数还在，写入那一边是真的停着。'],
 ['040','narration','reactor','duty','neutral','伊芙娜把检修台周围清出来，给每个人留了一个能看清零件的位置。铎兰指过操作座，又指旁边的托盘，诺瓦拿着旧记录逐项核对。'],
 ['041','doran','reactor','duty','serious','操作座在这儿，拆下的件在旁边。我把还接着的位置指给你们看，旧作业记录也放在手边。今天不接新控制板，只做停机处置。'],
 ['042','ivna','reactor','duty','serious','保留封座，就把机械解除的权限一起交出去，往后需要谁到场，在这里说清楚。选择拆除，就把实际拆下的针和连接分置，谁也不把它们悄悄装回同一个箱子。'],
 ['043','nova','reactor','duty','serious','开箱检查可以，重新建立写入能力是另一项决定。我们会把今天的处置交给矿站保管人一份，船上留一份。只读接口仍要留给值班的人使用。'],
 ['044','vera','reactor','duty','serious','我希望以后谁想改这件事，都先把要做的步骤摆到大家眼前。我的岗位可以换，名字可以自己签，不能再让一只锁着的箱子替我留下新的任务。'],
 ['045','player','reactor','duty','serious','先把灯照到座里面。我站在这儿看，做完再请外面的保管人过来，让他也从同一个角度看一遍。'],
 ['046','narration','reactor','duty','neutral','铎兰把工具放在你能看见的位置。桌边的托盘垫着厚布，另一边摆着封存盒和保管确认页，两个盒盖都朝外打开。']
],id('047'));

decision('047','reactor','操作座和托盘里的零件都摆好了。选拆，核对针路与授权连接后分开放；选封，保持只读口在外，把封座或零件盒的解除工具交给保管人。',[
 {id:'v6_o4_choose_disassembly',label:'拆除写入针路和授权连接，部件分置；原先已拆下的逐件核对。',next:id('b01'),effects:[flag('v6_o4_chose_disassembly')],reaction:'铎兰把分置托盘拉近，让你和薇拉都能看见操作座。诺瓦继续记录，先按现状逐件点名，再开始处理还连着的部分。'},
 {id:'v6_o4_choose_seal',label:'保留只读与记录，封座或封存原有散件，交出解除工具共同保管。',next:id('b11'),effects:[flag('v6_o4_chose_seal_custody')],reaction:'伊芙娜把封存盒放到台面另一侧，先空着封签。铎兰核对机械封座和只读口，诺瓦把开封必须同时通知的两处保管人写在盒外。'}
]);
chain([
 ['b01','narration','reactor','duty','neutral','铎兰先确认供电隔离，才揭开现有防护。还在座上的针路从连接端逐段退出，每退开一处，就让你们看一遍空出来的位置。薇拉站在灯旁，把遮住视线的一角布翻到外侧。'],
 ['b02','doran','reactor','duty','serious','现在这两处都空了。拆下的件照原位置放，外观和编号先留着，谁想查这一航次用过什么，都能找到它。它们不会在这个台上重新拼回去。'],
 ['b03','narration','reactor','duty','neutral','最后一段授权连接离开操作座，铎兰把它放进另一只托盘。针路、连接件和外壳分开，没有给它们补上任何新的替代件。写入一侧的孔位清楚地露在灯下，只读显示仍在另一边。'],
 ['b04','vera','reactor','duty','serious','我看见空位了。现在只读口可以用，现有那条写入连接已经不在座上。记录和校样还在，我要从只读这一侧再核一次。'],
 ['b05','narration','reactor','duty','neutral','她从只读口调出刚才救补给船的航迹，没有出现写入使能。诺瓦把同一页对到独立记录器上，伊芙娜再指着拆下件确认一遍去向，才让铎兰把两个托盘分别盖好。'],
 ['b06','ivna','reactor','duty','serious','座上已经空了，两组部件分开保管。调阅和开箱都留下来人记录。以后谁提重建，必须另行公开讨论，今天没有这项授权。']
],id('048'));
chain([
 ['b11','narration','reactor','duty','neutral','铎兰把只读口留在外侧，沿写入一边检查机械封座。需要补齐的外封套扣到位后，他用停机状态下的机械指示确认封座锁住，再把解除工具退出台面。'],
 ['b12','doran','reactor','duty','serious','这边封住了，只读口在外面。封座和外封套各留了检查位置，下次看这两处标记，就知道有没有人动过。'],
 ['b13','narration','reactor','duty','neutral','机械解除工具装进单独的小盒，交给随后登舰的矿站保管人。船方留下同一封座的核验件，两边都确认：开封先通知对方，重建写入能力另行讨论，不能拿一次开箱检查代替同意。'],
 ['b14','vera','reactor','duty','serious','我从只读口能调出航迹，写入使能没有开。保管盒已经离开这张台，船方的核验件在伊芙娜那里。下次有人要动它，先把这两处人叫齐。'],
 ['b15','narration','reactor','duty','neutral','诺瓦把解除工具的去向与现场读数放进同一条记录，原封座上的旧标记仍能看清。铎兰把无需更换的部件逐个放回原位，收起工具，反应堆那边的主回路照常运行。'],
 ['b16','ivna','reactor','duty','serious','封存与保管移交完成。只读和原记录留在本舰，机械解除工具已交外部保管人共同核验。旧的完成日期保留，今天的来人和签收时间添在后面。']
],id('048'));

chain([
 ['048','narration','reactor','duty','neutral','检修灯被收起一盏，操作座、保管盒和拆下件各自归位，桌边空出了一条过道。薇拉最后看了一眼只读显示，自己关掉调阅页，跟你们走出检修区。'],
 ['049','nova','reactor','duty','serious','三方会收到同一份处置记录，矿站保管人留下现场核验副本。公开过的原始资料继续公开，个人文件还是原来的权限。这次只增加今天亲眼做完的那一项。'],
 ['050','doran','reactor','duty','pensive','台子空出来了，我能把检修箱搬回去了。以后这条船最值钱的大概就是还能干活的设备和一群会用它们的人，欠的修理得一点点还，谁也变不出免单。'],
 ['051','player','reactor','duty','serious','先把要修的列清楚，接做得到的活。今天救那条补给船的费用，也按双方看得见的工价谈，不能拿它求救的时候答应的话去要价。'],
 ['052','ivna','commandroom','duty','serious','补给船的货主同意在港外见面，它先修自己的漏点，本舰先检查今天受力的部位。三方暂时不再要求本舰进入指定接收位，但也没有给我们留下免费坞位。'],
 ['053','narration','commandroom','duty','neutral','墙上的航路图只剩几条仍能实际到达的线，旁边没有保护人的标记。铎兰先圈了一处有旧式船坞的港口，又把圈改成了问号，要等对方确认尺寸和空位，才算真正有地方去。'],
 ['054','vera','commandroom','duty','pensive','我以前拿到任务，就能知道到哪里停。现在得先问，也可能问完没有位置。我想把这一段学会，下一次换我去联络，不用总让诺瓦替我转。'],
 ['055','nova','commandroom','duty','warm','那就从这次开始。收件人我写给你，哪些是必须报的船况、哪些可以等当面再说，我先和你过一遍，之后由你自己发。'],
 ['056','narration','bridge','duty','neutral','薇拉在临时联络席坐下，先读了一遍港口要的船长、吃水与停泊条件。看见“吃水”时她停了一下，问诺瓦这份表是不是从海面泊位直接沿用来的，得到确认后，自己补上载舰使用的着陆平台尺寸。'],
 ['057','vera','bridge','duty','serious','他们要的是能不能停，不用把每个空格都填成同一种答案。我把四百二十米的舰长、实际可用的落地支撑位置和船况都给了，等他们说平台哪一处能接。'],
 ['058','narration','bridge','duty','neutral','回话没有直接批准，先传来一张平台的旧照片，角上标了两处正在修的地面。薇拉让铎兰一起看，圈出会碰到支撑的位置，再把问得更具体的一封信发回去。'],
 ['059','doran','bridge','duty','serious','现在这张才对得上。停南边那一格，外侧留给人走，磨破的支撑面让港里先垫平。答复过来以后我们再下降，不能到了头顶再找地方落。'],
 ['060','ivna','bridge','duty','serious','泊位可以接，临时自费。全舰照实际状态下降，两机锁回挂架。到港先卸救援器材，热的部位继续隔离检查，工作衫等有空了再换。'],
 ['061','narration','planet_approach','duty','neutral','沧澜的蓝海从云下露出来，一颗苍白的卫星留在远处。渡鸦号沿确认过的路线下降，三枚尾喷依次收低。港口的平台有一半仍泛着水光，南边那格铺好了临时垫面，地勤的灯沿着边缘排开。'],
 ['062','narration','city','duty','neutral','补给船的货主站在平台外的雨棚下，裤脚湿到膝边，手里拿着自己那份漏点清单。他先请你们看船修得怎样，才把救援费用摊开，一项项对用了多少索、多少人手和哪段牵引。'],
 ['063','player','city','duty','serious','你们求救时答应的那部分货不算在报价里，先照实际救援结。我们也要修自己的东西，能抵工时的就说具体，需要现钱的写明，双方都看得懂再定。'],
 ['064','narration','city','duty','neutral','货主把原来写在旁边的一大笔“额外谢礼”划掉，改成能提供的泊位工具和几班装卸人手。铎兰用手摸过那些工具，确认够用，才把本舰真正缺的那几项圈出来。'],
 ['065','doran','city','duty','serious','这些能抵一部分，剩下的还得接活。港里有两份短工：一份近岸拆旧拖架，一份送商船过短航段。修船和吃饭都要钱，哪份先接，就按现有船况算。'],
 ['066','nova','city','duty','serious','近岸工钱少，今晚就能开，几个人轮着去；短程护航钱多一点，要占三天，夜班分开。两份都按公开工价，不拿这段航道收过路费。'],
 ['067','ivna','city','duty','serious','先看今天的损伤能不能让本舰接那份活。需要进坞的大修延期可以，基本防护和可用牵引必须先恢复，不能用一张新运单把故障盖过去。'],
 ['068','narration','city','duty','neutral','港里的检修工带着灯上了渡鸦号，和铎兰一起进到受力位置里面。看不到的地方拆开看，能修到哪一步就在工单上停到哪一步。傍晚过去，最后一处临时防护才固定好。']
],id('069'));

chain([
 ['069','doran','city','duty','serious','基本防护恢复了，重活还有限制。近岸拆架可以做；短航段只接领航与轻载护送，不接受再拖一整条大船。对方已经同意这个范围，钱也按这个范围算。'],
 ['070','vera','coast','duty','serious','我想接自己能做的那一班。近岸的话我和地勤一起量旧架，轮到别人就让他们接；去护航的话，我按夜枭的余量飞，超过的部分提前换班。'],
 ['071','narration','coast','duty','neutral','海风把两份工作说明的纸角吹起来，伊芙娜用手套压住。你们站在防潮堤的干处，靴子底下还有港区细碎的砂，眼前这一次讨论，关系到的是今晚谁先领到工钱、谁能先去睡一会儿。'],
 ['072','player','coast','duty','serious','两份都能做，但先接哪份会占掉接下来的几班。先把各自能去的时间报出来，谁要休整就留休整，不能再靠一个人把所有空格顶上。'],
 ['073','ivna','coast','duty','serious','我接第一班，之后要留半天处理自己的编制事项。副手的工作我继续做，新的生活也要给每个人一点自己安排的空处。'],
 ['074','doran','coast','duty','serious','我先守修理，头一班外面的活不去。旧架要用什么工具我能准备，领航那边的设备也能核，但甲板下面这些检修不能离人。'],
 ['075','nova','coast','duty','serious','我接对外联系和第二班。报酬怎么算、工时到哪儿结束都已经问过，剩下的只要我们说实际能到的人，不用把谁的整个名字押进去。'],
 ['076','vera','coast','duty','warm','我的时间也报完了。轮到我休息的时候，我想沿这条堤走到尽头，今天先把靴子穿着。下一次是来干活还是来玩，我想在出门前自己分清楚。']
],id('077'));
decision('077','coast','基本防护已经恢复，两份工作都在可做范围内。你要先换来少一些但当晚能结的工钱，还是接三天的轻载护送，为后面的修理留更多余量？',[
 {id:'v6_o4_take_shore_work',label:'先接近岸拆旧拖架。报酬较少，轮班做，当晚先给缺钱的船员结一部分工钱。',next:id('c01'),effects:[flag('v6_o4_shore_work')],reaction:'诺瓦确认近岸那一份，伊芙娜带第一班去卸工具。铎兰留在船上指认旧架尺寸，薇拉把量尺交给地勤，跟着走向有灯的作业区。'},
 {id:'v6_o4_take_escort_work',label:'接三天限定护送，只做领航和轻载护送；分班值守，留够休整，不接受额外重拖。',next:id('c11'),effects:[flag('v6_o4_escort_work')],reaction:'诺瓦把本舰能够承接的范围回给货主，载荷限制和交班时间一起确认。两机按轻载出动准备，第一班由伊芙娜领航，下一班按已经报出的时间替换。'}
]);
chain([
 ['c01','narration','coast','duty','neutral','旧拖架半埋在潮线以上，几个固定点被盐锈粘住。薇拉先把尺寸报给留在船上的铎兰，照他指出的位置让港区绞车接力。她和地勤只负责量、挂、松，重物始终交给额定的绞车。'],
 ['c02','vera','coast','duty','serious','这一个卸下来了，下一个交给第二班。我把锈死的位置画在木板上，先让他们自己找，找对了我再退。今天我也得学会按时把活交出去。'],
 ['c03','narration','city','duty','neutral','工钱在收工后结了一半，数目不大，却能让几个人先买齐欠着的日用品。剩下的一半要等第二班验完。渡鸦号的大修费仍缺一截，铎兰把暂时用不了的设备保留在红条下面。'],
 ['c04','ivna','city','duty','serious','已做完的工钱先发，没验完的留到明天。缺的大修费继续攒，不预支谁下个月的工资来装成已经修好。第一份活能按时收尾，就从这一步开始。']
],id('078'));
chain([
 ['c11','narration','orbit','duty','neutral','轻载商船跟着渡鸦号离开港外的短段，夜枭在前面核参照，灰鸢留在后面看住船距。到交班位置，两台机同时收回一部分工作，把已经核实的航迹交给下一班驾驶员。'],
 ['c12','vera','orbit','duty','serious','这一班结束，后面那条船自己的接收已经稳住。交班记录给下一班，我去把夜枭停好，按说定的时间休息。临时多出的护送先问轮值的人，不能直接加在刚回来的人身上。'],
 ['c13','narration','hangar','duty','neutral','三天里，睡觉的时间常常对不上。你回机库时薇拉刚去值班，她下来时你已经睡着；两个人在交班栏旁边各留过一次简单的问候。护送结束，货主照约定结清，本舰没有接后来追加的重拖。'],
 ['c14','doran','hangar','duty','warm','这次的钱够补一部分大修件，还能留一点进公共柜。大家先把三天的觉补回来，我把新件装到能装的地方。没修完的还贴红条，工钱多一笔也不能让铁自己长好。']
],id('078'));
chain([
 ['078','narration','ship_rail','off_duty','neutral','收工后的观察廊只留着靠窗的灯。新一班的人还没来，长椅上放着两只没打开的小纸袋，是有人从港区顺手捎回的晚点心。薇拉把其中一只移到你常坐的那段旁边，没有拆开替你挑。'],
 ['079','vera','ship_rail','off_duty','warm','这个给你。我只买了两种口味，哪一种也没写名字，等你自己开。昨天在店里我想了很久，最后觉得有一只留着不知道也可以。'],
 ['080','player','ship_rail','off_duty','warm','我现在开，还是留到下一班回来？你要是还没吃，就先一起分一点。'],
 ['081','vera','ship_rail','off_duty','warm','现在。我就是想等你来坐一会儿。下一班的事到下一班再说，今天这袋不会用来垫任何一份表。'],
 ['082','narration','ship_rail','off_duty','neutral','纸袋里面是烤得有点过头的面饼，边缘很脆，掰开时掉下一小块。她接住了那一块，先尝，再抬头看你的表情。你被烫得停了一下，她跟着慢下来，没有催你判断好不好吃。'],
 ['083','player','ship_rail','off_duty','warm','下次轮休，我想走今天那条防潮堤。你要一起就到舱门口叫我，要是想自己走，也给我留一句回来吃什么。'],
 ['084','vera','ship_rail','off_duty','warm','我想一起去。也想另挑一天自己走，把店认熟。你那天要是值班，我就先去，回来的时候把你那一袋带上。两件事都能排进去。'],
 ['085','narration','ship_rail','off_duty','neutral','她说完继续吃面饼。你们坐到走廊另一头有脚步声，才把剩下的边角收进纸袋。薇拉站起来时先让你起身，等你们都站稳，再一起把长椅上的碎屑扫掉。'],
 ['086','nova','ship_rail','off_duty','happy','我来拿杯子。饼还剩多少？明早换班的那几个肯定要找吃的，给他们留一点吧。'],
 ['087','vera','ship_rail','off_duty','warm','留了半袋，你现在也能拿一块。杯子在第二格，我给你挪过去了，刚才挡着纸袋。'],
 ['088','narration','ship_rail','off_duty','neutral','诺瓦笑着取了杯子，也取了一小块饼。廊道又安静下来，你和薇拉沿着同一条走道回去，到了各自舱门才分开。她朝你抬了一下手。'],
 ['089','ivna','bridge','duty','serious','今天的实际处置、救援和第一笔工作都已经点清。三份保护条件按原决定退回，后面的船籍、岗位和生活安排还要正式办完。你们回来以后，最后一次把各自那一页确认。'],
 ['090','narration','bridge','duty','neutral','几份文件换了位置，给战术台空出一块桌面。补给船留下一张靠妥的短报，检修台的现场照片夹在旁边，第一笔工钱也按到账数记好了。你走到台前，把剩下的事接着办完。']
],'fx_t_01');

nodes[id('041')].onEnterIf=[
 {requires:['ev6_terminal_dismantled'],forbids:['v6_o4_inspection_done'],effects:[flag('v6_o4_found_dismantled'),flag('v6_o4_inspection_done')]},
 {requires:['ev6_terminal_sealed'],forbids:['v6_o4_inspection_done','ev6_terminal_dismantled'],effects:[flag('v6_o4_found_sealed'),flag('v6_o4_inspection_done')]},
 {forbids:['v6_o4_inspection_done'],effects:[flag('v6_o4_found_unsealed'),flag('v6_o4_inspection_done')]}
];
nodes[id('041')].variants=[
 {requires:['v6_o4_found_dismantled'],text:'针路和授权连接已经拆掉，座上的空位在这里，散件在托盘里。选拆就核验后分开点交；选封就盖盒、换保管人。只读口留在这边。'},
 {requires:['v6_o4_found_sealed'],text:'机械封座已经压上，只读口留在外侧。今天可以拆开外封，实际移走里面残存的写入针路；也可以保留这道封座，把机械解除的权限交出去。封住和烧毁是两件不同的实物状态。'}
];
nodes[id('b01')].variants=[
 {requires:['v6_o4_found_dismantled'],text:'铎兰指过原座上的空位，再打开托盘，逐件核对针路和授权连接的旧编号。他把两组零件分别交给保管人，两只盒子各占桌面一边。'},
 {requires:['v6_o4_found_sealed'],text:'铎兰确认供电隔离，剪开原封签，取下外封套，让你们看见停用座内的针路。随后他把仍在座上的连接从机械端逐段退出，每退开一处，就让你们看一遍空位。没有通电，也没有加入任何替代件。'}
];
nodes[id('b02')].variants=[{requires:['v6_o4_found_dismantled'],text:'空位、原断面和记录都能对上，拆下件也齐。今天添新的保管去处和调阅方式，原完成日期按它原来的留。两只盒子的旧封签也一起收好。'}];
nodes[id('b03')].variants=[{requires:['v6_o4_found_dismantled'],text:'针路与授权连接分别移到两只独立保管盒。铎兰把原操作座转到灯下，给空位拍下一张完整照片，随后扣好防尘盖。'}];
nodes[id('b06')].onEnter=[flag('v6_o4_disassembly_confirmed'),flag('v6_o4_disposition_done'),flag('ev6_terminal_sealed',false)];
nodes[id('b06')].onEnterIf=[
 {forbids:['ev6_terminal_dismantled'],effects:[flag('ev6_terminal_dismantled'),flag('ev6_terminal_sealed',false),flag('bridge_write_disabled')]},
 {requires:['ev6_terminal_dismantled'],effects:[flag('bridge_write_disabled')]}
];
nodes[id('b11')].variants=[{requires:['v6_o4_found_dismantled'],text:'铎兰核对原操作座的空位，扣好防尘盖，再把托盘中的两组散件分别封进保管盒。只读显示留在原处，盒外各贴上对应的旧编号。'},
 {requires:['v6_o4_found_sealed'],text:'铎兰沿原机械封座检查一遍，保留旧封签和完成日期，再补齐共同核验用的外封套。只读口仍在外侧，他把机械解除工具收进小盒。'}];
nodes[id('b12')].variants=[{requires:['v6_o4_found_dismantled'],text:'封的是这些散件，座上仍是空的。开箱可以查原件，不能把开箱确认当成允许复装。两组东西分别放，去向都写在盒外，让后来的人一眼能找到。'}];
nodes[id('b13')].variants=[{requires:['v6_o4_found_dismantled'],text:'两组散件的开箱工具分别交到船方与矿站保管人手里。双方核过旧编号，约定调阅时通知彼此。原座没有增加任何新连接，只读口仍可由船上值班人员使用。'}];
nodes[id('b14')].variants=[{requires:['v6_o4_found_dismantled'],text:'只读口能调出航迹，座上还是原来的空位。两组散件都封好了，开箱的人先通知对方，到场再一起核编号。'}];
nodes[id('b15')].variants=[{requires:['v6_o4_found_dismantled'],text:'诺瓦把散件去向和空座照片放进同一条记录，原拆除页夹在旁边。铎兰收走工具，保管人接过封好的两只盒子。'}];
nodes[id('b16')].variants=[{requires:['v6_o4_found_dismantled'],text:'散件封好了，两处保管人都点过。只读和历史记录留在本舰，原拆除日期照旧，今天的点交另添一页。'}];
nodes[id('b16')].onEnter=[flag('v6_o4_seal_custody_confirmed'),flag('v6_o4_disposition_done')];
nodes[id('b16')].onEnterIf=[
 {requires:['ev6_terminal_dismantled'],effects:[flag('ev6_terminal_sealed',false),flag('bridge_write_disabled')]},
 {forbids:['ev6_terminal_dismantled'],effects:[flag('ev6_terminal_sealed'),flag('bridge_write_disabled')]}
];
nodes[id('024')].variants=[{requires:['c2_hd_dark'],text:'渡鸦号带着补给船进入较远的安全航位。灰鸢回收架上的反光标被薇拉逐个点过，她说这次比死航线那只罐头灯亮得久。三家的舰艇各停在通道外侧，谁也没有替本舰承诺后面的路，你们又一次沿自己看得见的参照走出去。'}];
nodes[id('051')].variants=[{requires:['deal_refused_alone'],text:'归港那次我们也拒过保护条件，这次更得把要修的列清楚，只接做得到的活。今天救补给船的费用按实际工价谈，不能拿它求救时答应的话去要价。'}];
nodes[id('067')].variants=[
 {requires:['v6_o4_mecha_towed'],text:'灰鸢的制动衬片先换，台架检查过了才接新的护送。需要进坞的大修可以排后面，基本防护和可用牵引必须恢复，不能用新运单把故障盖过去。'},
 {requires:['v6_o4_carrier_towed'],text:'船尾索座先做内部检查，修不到可用就继续封停。轻载工作只能用还合格的另一处，不接重拖；船况与工作范围都得让货主知道。'}
];
nodes[id('068')].variants=[
 {requires:['v6_o4_mecha_towed'],text:'港里的检修工和铎兰一起卸下灰鸢的制动衬片，从救援费用里先付了同规格替换件。台架检查通过，基本防护才重新放回可用栏。傍晚过去，最后一只保险扣落到位，你们仍欠着更大一笔整修费。'},
 {requires:['v6_o4_carrier_towed'],text:'港里的检修工拆开船尾支撑，确认受斜拉的索座暂时不能修回额定范围。铎兰把它继续封停，补好外侧临时防护，只保留另一处轻载牵引。傍晚过去，货主亲眼看过红条，同意把工作限定在本舰实际能做的范围。'}
];
nodes[id('089')].variants=[
 {requires:['v6_o4_shore_work'],text:'近岸第一班的工钱已经结了一部分，大修费还要继续攒。今天的处置和救援也点清了。三份保护条件按原决定退回，剩下的船籍、岗位与生活安排，各自回来把本人那一页确认。'},
 {requires:['v6_o4_escort_work'],text:'三天的限定护送结清，追加重拖没有接。本舰仍有封停的地方，修理按实际进度排。今天回到原来的选择，把三份保护条件退回，船籍、岗位和生活安排分别由本人确认。'}
];
for(const k of ['025','027','032','036','037','039','040','041','042','045','b02','b04','b06','b12','b14','b16','050','054','057','058','062','063','064','065','067','069','070','071','072','073','074','075','076','079','080','081','083','084','087'])if(directions[id(k)])directions[id(k)]=[{framing:nodes[id(k)].tone==='combat'?'head':'close'}];
directions[id('c12')]=[{framing:'head'}];

export const REVISION={id:'v6-o4-together-action-draft',nodes,patches:{},finalEndings:{},directions,
 links:[
  {action:'replace-choice-next',nodeId:'fx_choice_stay',choiceId:'fx_stay_together',expectedNext:'fx_t_01 or root legacy fx_v6_together_remove guard',next:id('001'),note:'Keep old choice ID/requires/effects. Insert O4 before any legacy direct-tail physical-disposition fallback.'},
  {action:'return-to-existing-tail',from:id('090'),next:'fx_t_01',note:'If root redirects this edge through fx_v6_together_remove, v6_o4_disposition_done must cause verification only for BOTH chosen disassembly and chosen seal/custody, not force a second cut.'},
  {action:'canonical-terminal-state',completionNodes:[id('b06'),id('b16')],note:'Only ev6_terminal_dismantled/ev6_terminal_sealed/bridge_write_disabled are updated after visible physical action. found_* is captured from canonical actual hardware at 041. W8/W9 counters, cost and old choice flags remain untouched.'},
  {action:'ending-display-guard',endingId:'ending_together',note:'Resolve node/metadata hardware wording from canonical terminal state (root bridge_status), not legacy fx_bridge_* intent or generic consumed. Already dismantled + seal/custody remains dismantled, with parts newly sealed; public remains public.'},
  {action:'old-tail-compatibility',note:'Old saves already inside fx_t_* continue directly and are governed by root migration/legacy fallback. This module does not rewind or re-author their history.'}
 ],
 prerequisites:[
  {sourceNode:'fx_choice_stay',choiceId:'fx_stay_together',existingFlag:'fx_final_together'},
  {source:'root bridge-state ledger and shared physical-operation nodes',fields:['ev6_terminal_dismantled','ev6_terminal_sealed'],purpose:'Inspect actual hardware; never derive destruction from public or W8 consumption.'},
  {source:'root tested node.onEnterIf support',purpose:'Positive requires and explicit forbids are used only in onEnterIf, not invented in choice.requires.'},
  {sourceNode:'c2_choice_handler',choiceId:'c2_hd_dark',optionalFlag:'c2_hd_dark',purpose:'Remember former self-navigation without gating the ordinary ending.'},
  {sourceNode:'c7_choice_deal',choiceId:'c7_deal_alone',optionalFlag:'deal_refused_alone',purpose:'Carry refusal of patronage into concrete paid work, not a free independence reward.'}
 ]};
