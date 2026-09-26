// 钢翼盟约 — 场景登记表（每个 sceneId 一个精确文件路径 + 位置 / 环境 / 时间光线 / 可见实体）
//
// 规则（与 ART_BRIEFS_FULL.json 一致）：
//   - 节点只能使用这里登记过的 sceneId；不得临时自造，也不得把卧室或医务舱映射到机库改色。
//   - file 是相对 dist/ 的精确路径；运行时按这个路径加载，加载失败就显示可恢复的缺图状态，
//     绝不拿别的图顶替，也不把缺图标成已加载。
//   - status: 'delivered' = 文件已经在候选人目录里（本轮的 fullgame 图与两张双机位衍生图由宿主
//     复核并复制，见 ART_DELIVERY_ACCEPTED.json）；'awaiting-art' = 契约已登记、文件尚未交付。
//     status 只是记录，运行时以真实加载结果为准。
//   - visibleEntities 只能引用 world.mjs 的 ENTITIES id。
//   - 两条实体清单必须分清（宿主 G1 复核要求）：
//       narrativeEntities：这一幕里**剧情上在场**的人/机体/船（旧字段 visibleEntities 保留为它的别名）；
//       depicted：背景图里**真正画出来**的东西。只有用真实文件核实过才允许写 verified:true。
//     例如原 hangar.png 里只有灰鸢，没有夜枭、也没有可辨认的驾驶员脸——那就不能写成"已描绘"。
//   - upgradeCandidates：这一幕的"双主角机体"专用衍生图；候选图 status 是 'delivered' 且这一幕
//     的在场清单里两台机体都在时，运行时才改用它的文件（否则退回已交付的基础图，
//     绝不拿别的场景或"只有一台机体"的画面顶替）。

import {STORY_SHOTS_V7} from './scene-shots-v7.mjs';
export const SCENES = {
  hangar: {
    id: 'hangar',
    file: 'assets/hangar.png',
    status: 'delivered',
    upgradeCandidates: ['hangar_duo'],
    location: '渡鸦号 · 三号机库 / 三号起飞位',
    environment: '大型工业舱：吊挂的挂梯、液压管车、成排维护灯、地勤喷涂的停机位编号',
    timeLight: '舰内无昼夜，冷白维护灯 + 琥珀警示灯',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'mecha-graykite', 'mecha-nightowl', 'character-doran', 'character-ivna'],
    constraints: ['不得画成卧室或医务空间', '不得出现现实国家标识'],
    plotUse: ['第一章开场、改装单与薇拉报到', '第一章章末封存', '第二、四章的机库修理与拆接口箱']
  },
  hold: {
    id: 'hold',
    file: 'assets/hangar.png',
    status: 'delivered',
    location: '渡鸦号 · 三号货舱',
    environment: '与三号机库同尺度的工业舱：压力门、吊索、货架与封存区（美术契约允许与机库共用同一张图）',
    timeLight: '舰内恒定；封存区只开一半工作灯',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'prop-xr07', 'character-doran', 'character-nova', 'character-ivna'],
    constraints: ['不得画出行星地表或海面', '封存区不得画成起居空间'],
    plotUse: ['第一章善后：XR-07 落地与四个章末结果']
  },
  workshop: {
    id: 'workshop',
    file: 'assets/hangar.png',
    status: 'delivered',
    location: '渡鸦号 · 三号机库（机修长工作区）',
    environment: '机库靠里的一段：工具箱、台钳、拆下来的装甲板与铺开的零件（与机库共用同一张图）',
    timeLight: '舰内恒定；工作灯只留一半，台面上单独一盏',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'mecha-graykite', 'character-doran'],
    constraints: ['不得替换成起居舱或医务舱', '不得出现武器特写'],
    plotUse: ['第一章铎兰的两个小时', '第二、四章的检修与临时改装']
  },
  battle: {
    id: 'battle',
    file: 'assets/battle.png',
    status: 'delivered',
    upgradeCandidates: ['spacebattle'],
    location: '霜环锚地 / 轨道会战空域',
    environment: '真正的轨道会战：锚点浮标、被削开的货舱、曳光与碎片',
    timeLight: '恒星侧光',
    gravity: '0 g',
    visibleEntities: ['ship-raven', 'ship-egret', 'drone-mothership', 'mecha-graykite', 'mecha-nightowl', 'station-anchor-buoy'],
    constraints: ['只用于真正的机库外会战与轨道战斗', '不得拿来当行星地表或海面背景'],
    plotUse: ['第一章锚地会战', '第二、四章的轨道遭遇', '终章舰队对峙']
  },
  messhall: {
    id: 'messhall',
    file: 'assets/fullgame/bg-messhall.webp',
    status: 'delivered',
    location: '渡鸦号 · 餐厅 / 休息室',
    environment: '温暖安静的舰内用餐与休息空间：固定长桌、加热台、公共水壶、贴满便签的留言板；灯光比别处暖',
    timeLight: '舰内恒定，暖色顶灯 + 桌上小灯；交接班后只留台面灯',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'character-doran', 'character-nova', 'character-ivna', 'character-vera'],
    constraints: ['不得画成酒吧或豪华餐厅', '不得出现战斗或残骸', '不得用来当秘密审讯室'],
    plotUse: ['第五章与第七章的饭点、玩笑与日常摩擦', '终章前的最后一顿普通饭']
  },
  ship_rail: {
    id: 'ship_rail',
    file: 'assets/fullgame/bg-ship-rail.webp',
    status: 'delivered',
    location: '渡鸦号 · 左舷全景观察廊（封闭式）',
    environment: '封闭的加压走廊：全场落地舷窗、窗框间的加强肋、靠窗的长椅与观察记录台；窗面有细密划痕与一层薄霜',
    timeLight: '舰内恒定照明，窗外为深空',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'station-anchor-buoy', 'character-vera', 'character-ivna', 'character-nova'],
    constraints: ['必须是封闭加压舱廊，不是露天甲板或舰外视角', '不得出现行星地表或海洋'],
    plotUse: ['第一章章末与第二章的私下谈话', '第三章行星接近前的观景与沉默', '第四章出发前的告别长谈']
  },
  bridge: {
    id: 'bridge',
    file: 'assets/fullgame/bg-bridge.webp',
    status: 'delivered',
    location: '渡鸦号 · 舰桥',
    environment: '半环形操纵台、中央战术台、主屏与两侧站位；老式按键与手写便签共存',
    timeLight: '舰内恒定；战斗中主屏转红',
    gravity: '0.8 g（战斗中 0.3 g，操作者需要系安全束带）',
    visibleEntities: ['ship-raven', 'station-anchor-buoy', 'character-ivna', 'character-vera'],
    constraints: ['不得画成没有按键的纯玻璃舱', '座位数要和固定编制对得上'],
    plotUse: ['第一、二章的航道决策', '第三章的行星接近与海况播报', '终章的舰队对峙']
  },
  quarters: {
    id: 'quarters',
    file: 'assets/fullgame/bg-quarters.webp',
    status: 'delivered',
    location: '渡鸦号 · 船员住舱（单人舱 / 双人舱走道）',
    environment: '窄长舱室：折叠床铺、壁挂式私人储物格、贴满胶带的舱壁、共用的小桌与磁扣水杯',
    timeLight: '夜间照明：半暗，床头小灯',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'character-vera', 'character-nova'],
    constraints: ['不得画成医务舱（不要病床、输液架、监护仪）', '不得画成豪华宿舍'],
    plotUse: ['第二章薇拉第一次被问「你想要什么」', '第三章关于假身份的私下对话', '终章前把东西装进箱子']
  },
  medbay: {
    id: 'medbay',
    file: 'assets/fullgame/bg-medbay.webp',
    status: 'delivered',
    location: '渡鸦号 · 医务舱',
    environment: '两床位的舰内医务舱：固定式检查床、墙上的耗材柜、老式监护仪、可拉的隔帘；灯比别处亮',
    timeLight: '舰内恒定，检查灯可单独打亮',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'character-ivna', 'character-vera'],
    constraints: ['不得复用机库素材改色', '不得出现无菌外科大厅式的未来感'],
    plotUse: ['第一章伊芙娜的处置与手套', '第二章薇拉接受检查并被念出复位口令', '第四章伤口处理与关系落点']
  },
  orbit: {
    id: 'orbit',
    file: 'assets/fullgame/bg-orbit.webp',
    status: 'delivered',
    location: '沧澜星 · 安静轨道',
    environment: '无战斗的轨道：渡鸦号的轮廓边缘、行星弧线与薄云带、远处几枚锚点浮标的冷光',
    timeLight: '行星白昼侧（柔和的蓝白反照）',
    gravity: '0 g（允许磁靴与牵引索）',
    visibleEntities: ['ship-raven', 'station-anchor-buoy'],
    constraints: ['不得出现行星环', '必须有且只有一颗苍白卫星', '不得有爆炸或火光'],
    plotUse: ['第二章章末（赤垣线）：出槽之后的安静轨道', '第三章开场：安静轨道与等待指令', '第四章章末：最后一次校准前的静止时刻']
  },
  planet_approach: {
    id: 'planet_approach',
    file: 'assets/fullgame/bg-planet.webp',
    status: 'delivered',
    location: '沧澜星 · 接近视图',
    environment: '从浅轨道接近行星：蓝色海洋、岩石大陆、群岛、云带与晨昏线；单颗苍白卫星在画面一角',
    timeLight: '晨昏线，一半受光',
    gravity: '接近段 0.4 g（编队内减速）',
    visibleEntities: ['ship-raven'],
    constraints: ['没有行星环、没有第二颗卫星', '大陆形状必须原创', '不得出现轨道残骸或火光'],
    plotUse: ['第三章：行星接近与第一眼沧澜', '终章结尾：离开或留下的远景']
  },
  city: {
    id: 'city',
    file: 'assets/fullgame/bg-city.webp',
    status: 'delivered',
    location: '沧澜星 · 港区殖民地街道（黄昏、湿地面）',
    environment: '海港城市的外围街道：低层建筑、外挂式管线、晾晒的衣物、装卸轨与堆场的集装箱、临街的小店与招牌',
    timeLight: '近黄昏，街灯与店内灯同时亮着；雨后的湿痕与积水反光',
    gravity: '1.05 g',
    visibleEntities: ['character-vera', 'character-player'],
    constraints: ['不得画成现实城市（无现实地标、无现实文字）', '不得出现悬浮车堵成长龙的赛博都市'],
    plotUse: ['第三章：上街买东西的尴尬场景', '第三章：找到真正的薇拉·厄兰的旧同伴', '终章：港区在冲突中的样子']
  },
  coast: {
    id: 'coast',
    file: 'assets/fullgame/bg-coast.webp',
    status: 'delivered',
    location: '沧澜星 · 平静海岸线',
    environment: '安静的海岸：浪线、湿沙与礁石、防潮堤与远处的港区轮廓；浅水处能看见底部的石头',
    timeLight: '清晨或傍晚的斜光',
    gravity: '1.05 g',
    visibleEntities: ['character-vera', 'character-ivna'],
    constraints: ['不得出现战斗、残骸、油污或火光', '不得出现舰船或机甲', '不得画成热带度假海滩'],
    plotUse: ['第三章：薇拉第一次独立选一件事（安静海岸）', '终章：结局后的短暂停留']
  },
  surface: {
    id: 'surface',
    file: 'assets/fullgame/bg-surface.webp',
    status: 'delivered',
    location: '沧澜星 · 非战斗高地（岩石台地）',
    environment: '风化的岩石台地：层状岩面、稀疏的贴地植被、几座废弃的锚点基站（不是武器）',
    timeLight: '午后的硬光；云影从台地上掠过',
    gravity: '1.05 g',
    visibleEntities: ['station-anchor-buoy', 'character-vera', 'character-player'],
    constraints: ['不得出现战斗痕迹：无弹坑、无残骸、无硝烟', '不得出现机甲正脸或武器特写'],
    plotUse: ['第三章：安静的攀登与对话（关系落点）', '第四章：无线电静默时的等待']
  },
  landbattle: {
    id: 'landbattle',
    file: 'assets/fullgame/bg-landbattle.webp',
    status: 'delivered',
    location: '沧澜星 · 台地与港区之间的地面战场',
    environment: '仰角机位：机甲腿部与扬起的尘土、被掀翻的货运轨、破损的防潮堤；空中是低空的无人机与曳光弹',
    timeLight: '白昼，烟尘压暗光线',
    gravity: '1.05 g',
    visibleEntities: ['mecha-graykite', 'drone-mothership'],
    constraints: ['不得出现太空或星空', '地面必须有尘、有水、有重力感', '不要把平民画进战斗中心'],
    plotUse: ['第三章：地面遭遇战', '终章：港区防线']
  },
  seabattle: {
    id: 'seabattle',
    file: 'assets/fullgame/bg-seabattle.webp',
    status: 'delivered',
    location: '沧澜星 · 近海海战',
    environment: '海面视角：被掀起的巨浪、正在下沉的无人机残片、掠海而过的机体与低空火线；远处港区灯火',
    timeLight: '黄昏入夜',
    gravity: '1.05 g',
    visibleEntities: ['mecha-graykite', 'drone-mothership', 'ship-raven'],
    constraints: ['不得画成太空战（必须有海、有雨、有水花）', '不得出现巨型海怪或超自然元素'],
    plotUse: ['第三章：掩护撤离的海战', '终章：赤垣/联合航线分歧时的海上对峙']
  },
  commandroom: {
    id: 'commandroom',
    file: 'assets/fullgame/bg-commandroom.webp',
    status: 'delivered',
    location: '渡鸦号 · 作战会议室（指挥舱）',
    environment: '封闭会议室：固定在地板上的长桌、投影式航道图、墙面上的三方标记、角落里被擦掉又写上的旧编号',
    timeLight: '舰内恒定，投影为主要光源（蓝/琥珀）',
    gravity: '0.8 g',
    visibleEntities: ['ship-raven', 'station-anchor-buoy', 'character-ivna', 'character-vera', 'character-nova'],
    constraints: ['不得画成舰桥（没有操舵台与舷窗一排）', '不得出现现实国家旗帜'],
    plotUse: ['第二章：审问与三方第一次摊牌', '第四章：击杀令公开', '终章：出发前的最后一次表决']
  },
  reactor: {
    id: 'reactor',
    file: 'assets/fullgame/bg-reactor.webp',
    status: 'delivered',
    location: '渡鸦号 · 反应堆舱 / 泵机段',
    environment: '高噪声的机械空间：冷蓝的主回路、琥珀色的警示栅栏、狭窄的检修走道与扶手、垂挂的检修灯',
    timeLight: '舰内恒定；故障时切到红色应急灯',
    gravity: '0.8 g（故障时短暂 0.2 g，需要抓扶手）',
    visibleEntities: ['ship-raven', 'character-doran', 'character-vera'],
    constraints: ['不得画成医务舱或机库', '不得出现熔毁、熔岩、爆燃等夸张灾难画面'],
    plotUse: ['第四章：拆接口箱 / 断电对峙', '终章：抢修与逃生路线']
  },
  // 两张"双主角机体"专用背景：宿主已复核并原样复制进目录（ART_DELIVERY_ACCEPTED.json）。
  // 这两张图只在**这一幕确实需要灰鸢 + 夜枭同时在场**时使用；在场清单对不上时退回基础图。
  spacebattle: {
    id: 'spacebattle',
    file: 'assets/fullgame/bg-spacebattle.webp',
    status: 'delivered',
    servesAs: 'battle',
    location: '霜环锚地 / 轨道会战空域（灰鸢与夜枭同时在场的战位）',
    environment: '轨道会战里两机同框的机位：锚点浮标、被削开的货舱、曳光与碎片，灰鸢与夜枭各占一侧',
    timeLight: '恒星侧光，背光侧只有仪表与警示灯',
    gravity: '0 g',
    narrativeEntities: ['ship-raven', 'mecha-graykite', 'mecha-nightowl', 'drone-mothership', 'station-anchor-buoy'],
    requiresMachines: ['mecha-graykite', 'mecha-nightowl'],
    constraints: [
      '灰鸢 18m、夜枭 14.5m：夜枭必须更矮更宽，不得同高同轮廓',
      '不得镜像灰鸢的替换肩甲（主体左侧），也不得把夜枭的三镜探头臂改成枪或人手',
      '不得画成行星地表或海面战场'
    ],
    plotUse: ['第一、二、四章的轨道遭遇里两机同框的机位', '终章舰队对峙']
  },
  hangar_duo: {
    id: 'hangar_duo',
    file: 'assets/fullgame/bg-hangar-duo.webp',
    status: 'delivered',
    servesAs: 'hangar',
    location: '渡鸦号 · 三号机库（灰鸢与夜枭同框的停机位）',
    environment: '机库里灰鸢与夜枭并排停在各自停机位：挂梯、液压管车、维护灯与地勤喷涂的编号',
    timeLight: '舰内无昼夜，冷白维护灯 + 琥珀警示灯',
    gravity: '0.8 g',
    narrativeEntities: ['ship-raven', 'mecha-graykite', 'mecha-nightowl', 'character-doran'],
    requiresMachines: ['mecha-graykite', 'mecha-nightowl'],
    constraints: [
      '两台机体比例固定：灰鸢 18m 高于夜枭 14.5m',
      '不得镜像替换肩甲 / 探头臂，不得给夜枭加上人脸',
      '不得出现可辨认的驾驶员脸；不得画成起居舱或医务舱'
    ],
    plotUse: ['第二、四章两台机体同时在库里的检修段落', '终章出发前的最后检查']
  }
};

SCENES.quarters_closed = {
  ...SCENES.quarters, id:'quarters_closed', file:'assets/fullgame/bg-quarters-closed.webp',
  location:'渡鸦号 · 闭帘住舱',
  environment:'同一间船员住舱：折叠床、写字桌、磁扣杯和旧柜子；舷窗内侧拉上深色遮光帘。',
  timeLight:'夜间床头灯与低位指示灯；舷窗遮光，可用于地面停泊。',
  plotUse:['地面停泊的夜间休息与次日转场']
};
SCENES.ground_workshop = {
 id:'ground_workshop',file:'assets/fullgame/bg-ground_workshop.webp',status:'delivered',
 location:'岸上 · 港区工坊',environment:'普通岸上工坊：工作台、虎钳、借用的小型机具、工具架与高处磨砂窗。',
 timeLight:'暖色工作灯，外部时刻不显露',gravity:'行星地表重力',
 visibleEntities:['character-doran','character-vera'],
 constraints:['普通工作台的尺度，不出现大型机甲或飞船舱壁'],plotUse:['迁航之后的岸上修理、机具借用与交接']
};
SCENES.shoreside_room = {
 id:'shoreside_room',file:'assets/fullgame/bg-shoreside_room.webp',status:'delivered',
 location:'岸上 · 租住的小房间',environment:'旧木桌、单人床、普通柜子和一扇望向港口窄巷的窗。',
 timeLight:'夜间台灯与巷中路灯',gravity:'行星地表重力',
 visibleEntities:['character-vera'],
 constraints:['民用地面房间，不出现舷窗或太空景'],plotUse:['薇拉自选岸居后的个人生活与告别']
};

SCENES.hangar_docked = {
 ...SCENES.hangar_duo, id:'hangar_docked',file:'assets/fullgame/bg-hangar_docked.webp',upgradeCandidates:[],
 location:'渡鸦号 · 闭门机库',environment:'同一双机维修舱，外侧压力门完全关闭，灰鸢与夜枭停在原来的两个机位。',
 timeLight:'琥珀维护灯；闭门后不显示外部时刻与位置',
 constraints:['同一灰鸢与夜枭，机体身份、尺寸及停位不变','闭门图本身不代表已经落地'],
 plotUse:['靠港加注与维修','无外景要求的舰内收工']
};
SCENES.bridge_harbor = {
 ...SCENES.bridge,id:'bridge_harbor',file:'assets/fullgame/bg-bridge_harbor.webp',
 location:'渡鸦号 · 港内舰桥',environment:'原舰桥控制台与座椅，舷窗外为沧澜港的吊车、仓库、山岸及水面。',
 timeLight:'入夜后的蓝色天光与港区工作灯',gravity:'行星地表重力',
 visibleEntities:['ship-raven','character-ivna','character-vera'],
 constraints:['原舰桥内饰','地面海港窗景，不出现巨大行星或太空曲面'],plotUse:['靠港后的航线与船籍交接']
};
SCENES.ship_rail_harbor = {
 ...SCENES.ship_rail,id:'ship_rail_harbor',file:'assets/fullgame/bg-ship_rail_harbor.webp',
 location:'渡鸦号 · 港内左舷观察廊',environment:'同一封闭加压观察廊；窗外为沧澜港山岸、吊车和映着灯光的水面。',
 timeLight:'港区夜景，舰内低位暖灯',gravity:'行星地表重力',
 visibleEntities:['ship-raven','character-vera','character-ivna','character-nova'],
 constraints:['封闭舱廊，栏杆位于玻璃内侧','窗外是地面海港，不出现轨道行星弧线'],plotUse:['靠港时的晚间谈话']
};
SCENES.messhall_closed = {
 ...SCENES.messhall,id:'messhall_closed',file:'assets/fullgame/bg-messhall_closed.webp',
 location:'渡鸦号 · 闭帘餐厅',environment:'同一餐厅，两扇舷窗拉下遮光卷帘；保留原桌椅、取餐台与杯具。',
 timeLight:'舰内暖灯，窗帘完全遮住外景',plotUse:['停港或位置未限定的船上用餐']
};
SCENES.coast_night = {
 ...SCENES.coast,id:'coast_night',file:'assets/fullgame/bg-coast_night.webp',
 location:'沧澜星 · 夜间海堤',timeLight:'太阳落下后的月光、港灯和堤岸工作灯',
 plotUse:['独立路线当晚的近岸拖架作业']
};
SCENES.shore_receiver = {
 ...SCENES.ground_workshop,id:'shore_receiver',location:'沧澜港 · 岸端接收间工作台',
 environment:'岸上仪器工作台的近处：台钳、机具和高处磨砂窗；接收指示器与交接板在画外。',
 visibleEntities:['character-vera','character-nova','character-doran'],plotUse:['岸端轮值与指示器校对']
};

/**
 * 背景图里"真正画出来"的实体（只有核实过的才写 verified:true）。
 * 旧 hangar.png：有灰鸢，没有夜枭，也没有可辨认的驾驶员脸——这三条事实来自宿主 G1 复核。
 * 其余图片本轮没有做过像素级核实，因此一律 verified:false：剧情上在场 ≠ 图上已描绘。
 */
const DEPICTED_FACTS = {
  hangar_docked:{verified:true,entities:['mecha-graykite','mecha-nightowl'],note:'实图保留两机及停位，原太空门关闭。'},
  bridge_harbor:{verified:true,entities:[],note:'原舰桥，无人，窗外港区夜景。'},
  ship_rail_harbor:{verified:true,entities:[],note:'原封闭舱廊，无人，窗外山岸港灯和水面。'},
  messhall_closed:{verified:true,entities:[],note:'原餐厅，无人，两扇舷窗完全闭帘。'},
  coast_night:{verified:true,entities:[],note:'原海堤、山岸及吊车夜景，一颗月亮，无太阳、无人。'},
  shore_receiver:{verified:true,entities:[],note:'复用已目视核对的普通工坊近工作台，接收仪器留在画外。'},
  ground_workshop:{verified:true,entities:[],note:'已看实际图：普通工作台与机具、磨砂高窗，无人、无机甲、无太空视图。'},
  shoreside_room:{verified:true,entities:[],note:'已看实际图：普通地面单人房与夜间港巷，无人、无飞船舷窗。'},
  quarters_closed: {verified:true,entities:[],note:'按原住舱背景只改闭帘；床、桌、杯、椅、门和灯光保持原布局，图中无人且不展示舷窗外环境。'},
  hangar: {
    verified: true,
    entities: ['mecha-graykite'],
    note: '原 hangar.png 只画出灰鸢；夜枭与驾驶员脸都没有出现在这张图里。'
  },
  hangar_duo: {
    verified: true,
    entities: ['mecha-graykite', 'mecha-nightowl'],
    note: '宿主复核：bg-hangar-duo.png 里灰鸢与夜枭并排停在各自停机位（灰鸢 18m 高于夜枭 14.5m，夜枭更矮更宽），两台机体的替换肩甲 / 三合一探测臂朝向与身份锁一致；图上没有可辨认的驾驶员脸。'
  },
  spacebattle: {
    verified: true,
    entities: ['mecha-graykite', 'mecha-nightowl'],
    note: '宿主复核：bg-spacebattle.png 里灰鸢与夜枭同框（灰鸢左肩深色替换件、夜枭右臂三镜探头与更低轮廓），战斗图里的尺寸差是机位与姿势造成的透视，不是换了一台机体；图上没有可辨认的驾驶员脸。'
  },
  hold: {
    verified: true,
    entities: [],
    note: 'hold 复用 hangar.png：图上没有 XR-07、没有夜枭，也没有可辨认的驾驶员脸；这些人/物只是剧情上在场。'
  },
  workshop: {
    verified: true,
    entities: ['mecha-graykite'],
    note: 'workshop 复用 hangar.png：图上只有灰鸢；铎兰与夜枭都只是剧情上在场。'
  }
};

for (const [id,scene] of Object.entries(STORY_SHOTS_V7)) {
  if (SCENES[id]) throw new Error('Duplicate story shot: '+id);
  SCENES[id]={id,...scene};
}
for (const scene of Object.values(SCENES)) {
  const narrative = Array.isArray(scene.narrativeEntities)
    ? [...scene.narrativeEntities]
    : [...scene.visibleEntities];
  scene.visibleEntities = [...narrative];
  scene.narrativeEntities = [...narrative];
  const depicted = DEPICTED_FACTS[scene.id] || scene.depicted;
  scene.depicted = depicted
    ? { ...depicted, entities: [...depicted.entities] }
    : {
        verified: false,
        entities: null,
        note: '本轮没有用真实文件核实这张图里已经画出了谁：剧情上在场不等于图上已描绘。'
      };
}

export const SCENE_IDS = Object.keys(SCENES);

export const getScene = (sceneId) => SCENES[sceneId] || null;

/**
 * Ship/mecha identity references remain unchanged. Character identity follows
 * the reviewed v5 masters; the superseded Vera face is not a current reference.
 */
export const MASTER_REFERENCES = {
  note: '舰船与机体沿用 assets/fullgame/references 内的主参考；人物以本轮立绘的中性表情为身份依据。',
  files: [
    { file: 'ref-raven.png', subject: '渡鸦号', kind: 'ship', readyState: 'accepted-and-copied-in-candidate' },
    { file: 'ref-graykite.png', subject: '灰鸢（基于原 hangar.png 中的机体）', kind: 'mecha', readyState: 'accepted-and-copied-in-candidate' },
    { file: 'ref-nightowl.png', subject: '夜枭', kind: 'mecha', readyState: 'accepted-and-copied-in-candidate' }
  ],
  portraitMasters: ['ivna', 'vera', 'doran', 'nova', 'au09', 'keating', 'vester'].map(id => ({
    character: id, file: `assets/portraits-v7/portrait-${id}-neutral.webp`
  }))
};

export default { SCENES, SCENE_IDS, MASTER_REFERENCES, getScene };
