// GPT review after Qwen prose. Original prose batches and previous revision layers stay intact.
import {reviseChapters} from '../revision-runtime.mjs';
export const KNOWLEDGE_REVEALS_V8 = {
  "know_xr03": [
    "c2_31",
    "c2_ord_b2",
    "c3_co07",
    "c4_m03",
    "c7_03",
    "c7_30",
    "out_ch7_concord",
    "c8_57",
    "c8_105"
  ]
};
export const REVIEW = {
  "id": "gpt-review-v8",
  "patches": {
    "c2_31": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c2_ord_b2": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c3_co07": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c4_m03": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c7_03": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c7_30": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "out_ch7_concord": {
      "onEnter": [
        {
          "type": "flag",
          "key": "out_ch7_concord",
          "value": true
        },
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c8_57": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c8_105": {
      "onEnter": [
        {
          "type": "flag",
          "key": "know_xr03",
          "value": true
        }
      ]
    },
    "c3_cy_d6": {
      "text": "铁皮盒子里还有一份复印件，纸已经发脆。死亡登记表，编号一栏写着：霜环外环，失踪，认定死亡，姓名薇拉·厄兰，年龄二十四。认定日期是六年前十一月九日。石师傅抽出复印件，推过柜台，示意薇拉收好。"
    },
    "c3_cy15": {
      "text": "诺瓦在楼梯口等你们，观测板夹在腋下：「六年前霜环外环的失踪备案，这里有十一条。你们看这一条。」\n她把屏幕递近：「薇拉·厄兰，二十四岁。备案的职务栏填的是码头军需栈房资料员。」"
    },
    "c3_br01": {
      "text": "渡鸦号的舰桥在半环形操纵台中间。主屏分了三格：左格是澜湾的风暴云图，右格是两条跟踪线，中间那格挂着舷窗外的行星弧线。船已经在轨道上，机库那两台机体都锁在挂架上。"
    },
    "v6_returned_101": {
      "text": "三位愿意登舰的人都移过过渡台以后，载人舱里还留着两位和看护。那位想去诊所的人说自己叫阿棠，希望新的接收者用这个名字叫她。另一人仍在等家里的回话，他请看护把终端放到能看见的位置，不愿为了赶上你们的出发时间匆忙改变主意。"
    },
    "v6_returned_124": {
      "text": "「五位乘客都确认了去处：三位在舰，两位去民用艇，看护也送完这段了。」诺瓦关闭位置图，「阿肆只要平安回话，我按各人同意转告，不把新住址凑成总名单。」"
    },
    "c7_choice_dock": {
      "choices": [
        {
          "id": "c7_dock_full",
          "label": "全申报：夜枭的接插件、货舱里的结构件、拆下来的接收机残件，一行不落。",
          "next": "c7_dock_full_x",
          "reaction": "稽核员一项一项抄，抄到“接收机残件”的时候抬了下眼睛，停笔核了一遍字符，再把编号抄全。\n回执分成两联。他收走港区那联，把留舰那联钉在舱门口的立柱上。",
          "effects": [
            {
              "type": "flag",
              "key": "dock_declared",
              "value": true
            },
            {
              "type": "trust",
              "who": "ivna",
              "amount": 1
            },
            {
              "type": "standing",
              "who": "concord",
              "amount": 1
            }
          ]
        },
        {
          "id": "c7_dock_slot",
          "label": "按清单报：只写“待鉴定结构件”这一行，细节留给正式问询。",
          "next": "c7_dock_slot_x",
          "reaction": "稽核员照着清单抄，“待鉴定结构件”那一列他画了个圈。凡是被圈上的东西都要排在鉴定队列后面，队列归港务技术科管，不归泊位管。\n工单申请表往下传了一手，二号泵那一行被挪到了第二页。",
          "effects": [
            {
              "type": "flag",
              "key": "dock_slotted",
              "value": true
            },
            {
              "type": "flag",
              "key": "pump_deferred",
              "value": true
            },
            {
              "type": "trust",
              "who": "doran",
              "amount": 1
            },
            {
              "type": "standing",
              "who": "concord",
              "amount": -1
            }
          ]
        },
        {
          "id": "c7_dock_third",
          "label": "请第三方：外环船级社的验船师就在港里，让他把这份清单验一遍。",
          "next": "c7_dock_third_x",
          "reaction": "验船师来得比港务慢，量得比港务细。他在夜枭那条腿旁边蹲了十分钟，把空壳上每一个螺孔都拍了照，最后在清单上写了四个字：与报相符。\n外环船级社的章是圆的，盖在纸角；港区的方章盖在旁边。两个章谁都不挨着谁。",
          "effects": [
            {
              "type": "flag",
              "key": "dock_thirdparty",
              "value": true
            },
            {
              "type": "trust",
              "who": "nova",
              "amount": 1
            }
          ]
        }
      ]
    },
    "c4_choice_crew": {
      "choices": [
        {
          "id": "c4_key_ivna",
          "label": "交给伊芙娜：钥匙进渡鸦号的值班链，摘要留船上，调阅留记录。",
          "next": "out_ch4_concord",
          "reaction": "伊芙娜接过读取头，登记到舰务官的柜子里，取了两次指纹，写了三个字段：时间、位置、调阅人。\n做完她在值班记录末尾补了一行：本舰回绝三方报价，原因见上。写完全船广播了一遍：离开轨道，航向霜环外环。",
          "effects": [
            {
              "type": "trust",
              "who": "ivna",
              "amount": 1
            },
            {
              "type": "standing",
              "who": "concord",
              "amount": 1
            },
            {
              "type": "flag",
              "key": "bridge_key_holder",
              "value": "ivna"
            },
            {
              "type": "flag",
              "key": "bridge_key_ivna",
              "value": true
            }
          ]
        },
        {
          "id": "c4_key_doran",
          "label": "交给铎兰：副本下船到矿站，线由他们自己抄、自己守。",
          "next": "c4_f06",
          "reaction": "铎兰把读取头裹了三层防静电布，塞进工具箱第二格，钥匙挂在脖子上。\n临走之前他把那块断口发白的卡箍从零件盒里拿出来，放进了口袋。",
          "effects": [
            {
              "type": "trust",
              "who": "doran",
              "amount": 1
            },
            {
              "type": "standing",
              "who": "scarlet",
              "amount": 1
            },
            {
              "type": "flag",
              "key": "bridge_key_holder",
              "value": "doran"
            },
            {
              "type": "flag",
              "key": "bridge_key_doran",
              "value": true
            }
          ]
        },
        {
          "id": "c4_key_nova",
          "label": "交给诺瓦：全份进灰塔的封存档案，摘要在三条频道同时公开。",
          "next": "c4_f07",
          "reaction": "诺瓦把全份打包，附上九个校验块，收件口写灰塔观测局公共索引，抄送另外两家。\n上传之前她把文件列表截了一张图，贴在值班板背面，正面是你们自己的四条底线。",
          "effects": [
            {
              "type": "trust",
              "who": "nova",
              "amount": 1
            },
            {
              "type": "standing",
              "who": "spire",
              "amount": 1
            },
            {
              "type": "flag",
              "key": "bridge_key_holder",
              "value": "nova"
            },
            {
              "type": "flag",
              "key": "bridge_key_nova",
              "value": true
            }
          ]
        },
        {
          "id": "c4_key_ship",
          "label": "谁也不给：读取头拆成四份，四个人各拿一份，凑齐了才算数。",
          "next": "c4_f08",
          "reaction": "读取头拆成四片，各装进一个独立封袋。伊芙娜收好自己那份，铎兰放进工具箱，诺瓦挂到颈绳内侧；薇拉拿着最后一袋，准备收入救生背心内衬。\n四个人的呼号写在四个袋子上，只有四份合在一起才构成完整的读取头。",
          "effects": [
            {
              "type": "trust",
              "who": "vera",
              "amount": 1
            },
            {
              "type": "flag",
              "key": "bridge_key_holder",
              "value": "crew"
            },
            {
              "type": "flag",
              "key": "bridge_key_ship",
              "value": true
            }
          ]
        }
      ]
    },
    "c5_rx_14": {
      "variants": [
        {
          "requires": [
            "shaft_doran_first"
          ],
          "text": "检修走道的尽头有一段没有栏杆的斜面，三个人没有马上走。铎兰坐在备件箱上，把湿透的袖口卷到肘上，搓掉手上的油。薇拉在旁边理好安全索，冷蓝的主回路光从栅栏那边照过来。"
        }
      ]
    },
    "c8_309": {
      "text": "货箱和工具箱并在一起，垫平后当桌子。工具箱盖上的漆被擦出一块亮痕，锁着的那一格朝里。"
    },
    "c8_opt_wing_swap": {
      "variants": [
        {
          "requires": [
            "c8_repair_slow_write"
          ],
          "text": "出动表抄送舰桥。伊芙娜批复两机换位，接收机的极化参数也重排了一遍。进段仍按慢速方案走两圈：灰鸢第一圈逐点测距，第二圈跟船写入。"
        }
      ]
    },
    "c8_choice_arrive": {
      "choices": [
        {
          "id": "c8_arrive_concord",
          "label": "按联合登记发出去：校时进管制席的作业序列，回收条款同时归档。",
          "next": "out_ch8_concord",
          "reaction": "你报出联合登记号。诺瓦将它填进发送栏，保留一份本舰回执，等管制席确认。",
          "effects": [
            {
              "type": "standing",
              "who": "concord",
              "amount": 1
            },
            {
              "type": "flag",
              "key": "c8_arrive_concord",
              "value": true
            }
          ]
        },
        {
          "id": "c8_arrive_scarlet",
          "label": "按矿区登记发出去：校时挂到外环调度席，这一段以后由矿站自己维护。",
          "next": "out_ch8_scarlet",
          "reaction": "你确认外环调度席的登记。铎兰接通矿区频道，请那边核对接收机，再报一次站号。",
          "effects": [
            {
              "type": "standing",
              "who": "scarlet",
              "amount": 1
            },
            {
              "type": "flag",
              "key": "c8_arrive_scarlet",
              "value": true
            }
          ],
          "requires": [
            "c8_vote_scarlet"
          ]
        },
        {
          "id": "c8_arrive_spire",
          "label": "按公开登记发出去：整条重写署名\"校准对照\"，让这次失效变成一份公开的记录。",
          "next": "out_ch8_spire",
          "reaction": "你确认公开整条记录。诺瓦核过附件，把自己的编号填进署名栏，按下发送。",
          "effects": [
            {
              "type": "standing",
              "who": "spire",
              "amount": 1
            },
            {
              "type": "flag",
              "key": "c8_arrive_spire",
              "value": true
            }
          ],
          "requires": [
            "c8_vote_spire"
          ]
        },
        {
          "id": "c8_arrive_ship",
          "label": "不进任何登记：校时留在本舰的核心里，只对本舰亮，谁要谈就来船边谈。",
          "next": "out_ch8_neutral",
          "reaction": "你要求保留本舰使用。诺瓦撤下这一轮的对外登记，另存处置记录，原先已经发出的资料仍按原记录留在外面。",
          "effects": [
            {
              "type": "flag",
              "key": "c8_arrive_ship",
              "value": true
            }
          ]
        }
      ]
    },
    "c1_ch_ivna_report_b": {
      "text": "她把扳手收进工具袋，先你一步去开门，走到门口又停下，指了指更正过的第二行。你核对完时间，把已经签好的记录放回台边。"
    },
    "c8_367": {
      "text": "赤垣的拖船横过来，把联合的第二发挡在了自己外面。它的外壳上添了一道白痕，船身晃了一下，仍旧没有还击。"
    },
    "c2_h13": {
      "text": "面吃完以后，铎兰把台面上那把螺栓按长短装回三个盒子，余下这把里最短的一根单独搁在台钳底下。他说这根明天要用，用在哪儿明天再说。"
    },
    "c2_f1": {
      "text": "机库的冷气从三号起飞位那边吹过来，带一点金属味。铎兰把刚卸下的左肩替换件从工具箱边搬到台钳上，边角有一道焊过两次的痕迹，第二次的焊缝比第一次细。"
    },
    "c2_111": {
      "text": "铎兰替你扣紧安全带：「左肩这块，只扛一次满推力，扛完就换。夜枭分力用左手，探测臂不承重，临出舱再对一遍。」\n舱盖落下前，他把接着旧浮标电池的罐头盒灯夹在挂点边，试亮了一下：「灯带着，六成电。」"
    },
    "c2_choice_handler": {
      "choices": [
        {
          "id": "c2_hd_concord",
          "label": "用档案处的航段模板标定航道口：数据按流程进联合的档案。",
          "next": "c2_hd_a1",
          "reaction": "基廷当场把模板推给诺瓦，回执上签了他自己的编号。他没有要求多一条频道。",
          "effects": [
            {
              "type": "flag",
              "key": "c2_hd_concord",
              "value": true
            },
            {
              "type": "standing",
              "who": "concord",
              "amount": 2
            },
            {
              "type": "standing",
              "who": "scarlet",
              "amount": -1
            }
          ]
        },
        {
          "id": "c2_hd_scarlet",
          "label": "接赤垣的临时信标：他们在槽口放了一盏，条件是要过点记录的副本。",
          "next": "c2_hd_b1",
          "reaction": "赤垣的应答只有一句：信标已经在闪，两个短、一个长。铎兰在耳机里低声说他们的东西他认得，然后就把频道让给了诺瓦。",
          "effects": [
            {
              "type": "flag",
              "key": "c2_hd_scarlet",
              "value": true
            },
            {
              "type": "standing",
              "who": "scarlet",
              "amount": 2
            },
            {
              "type": "standing",
              "who": "concord",
              "amount": -1
            },
            {
              "type": "trust",
              "who": "doran",
              "amount": 1
            }
          ]
        },
        {
          "id": "c2_hd_spire",
          "label": "用灰塔的校准槽对准：观测窗口开出去，数据归观测局。",
          "next": "c2_hd_c1",
          "reaction": "诺瓦把观测局的握手请求调出来，按了接受。她按得很干脆，按完把手指从屏幕上抬起来停了一下。",
          "effects": [
            {
              "type": "flag",
              "key": "c2_hd_spire",
              "value": true
            },
            {
              "type": "standing",
              "who": "spire",
              "amount": 2
            },
            {
              "type": "trust",
              "who": "nova",
              "amount": 1
            }
          ]
        },
        {
          "id": "c2_hd_dark",
          "label": "谁的都不接：用旧浮标电池做的临时灯，参照我们自己给。",
          "next": "c2_hd_d1",
          "reaction": "铎兰骂了一句，让你再试挂点边的灯。光亮起来，他隔着频道报出剩余电量，又提醒你用罐头盒的开口对准槽口。",
          "effects": [
            {
              "type": "flag",
              "key": "c2_hd_dark",
              "value": true
            },
            {
              "type": "standing",
              "who": "concord",
              "amount": -1
            },
            {
              "type": "standing",
              "who": "scarlet",
              "amount": -1
            },
            {
              "type": "standing",
              "who": "spire",
              "amount": -1
            },
            {
              "type": "trust",
              "who": "ivna",
              "amount": 1
            }
          ]
        }
      ]
    },
    "c2_g1": {
      "text": "出舱检查按顺序来：第一条索的张力、第二条索的余量、两机之间的十八米间距。薇拉报完这三项，又补了一项她自己的：右后那片侦测翼的锁销旷了，展开位卡不牢。"
    },
    "c2_117": {
      "text": "第二十五秒，一块巴掌大的碎片从夜枭右后方擦过去，正打在背后那片侦测翼的根部。两片翼都还在架子上，没有任何一块飞出去；右后那片被撞得往里咬死，锁销当场剪断，从此折在收位里展不开。"
    },
    "sc_01": {
      "text": "封条没有贴。铎兰把驾驶舱的编号从货单上划掉，在原来那一行补上：报废结构件，灰鸢左肩备件。\n他把新打进去的两颗销子的编号也抄了上去。那两颗是今天下午才装上去的。"
    },
    "out_ch4_neutral": {
      "text": "发给三方的回绝是同一条：数据在船上，摘要在船上，要全份上船来谈。\n读取头拆成四片之前，伊芙娜在值班记录写了最后一行：本舰即日离开沧澜轨道，去霜环外环送配给。护航艇跟到巡逻区边界，观测艇留在原地收平台残片，矿站老频率每隔四小时报一次天气。\n补给单按矿站存量表排：干货、油料、冬装，一共十四个点，最近的一个在三天航程外。主换热器还是那台用三种密封胶糊起来的机器，铎兰要糊到冬天结束。\n薇拉把四片里属于她的那一片缝进救生背心内衬。\n起飞前她去洗衣房开了那台滚筒锁死的机器，四个人的工装一起洗了。"
    },
    "c2_h8": {
      "text": "她把杯子递来：「字这么大，难怪占地方。」\n她说完停了停，低头看了一眼自己的小字。"
    },
    "c3_lb03": {
      "text": "「港区建筑禁射。看清目标再开火，追到浅海线就停，外海有敌方母舰火力。」\n伊芙娜拉上车门：「我守坡下的短波中继，你领两机打。频道一直开着。」"
    },
    "c7_arc_share_x": {
      "text": "“三页都发出去了，回执也收到了。”她把截屏存进数据卡，“公开栏，谁都能调。那位少校现在看不看，外面都有这份条款。”\n她抬头看你：“署的是我的观测编号。舰名没挂上去，记清楚。”"
    },
    "c7_70c": {
      "text": "“拖船。”薇拉话刚出口，自己又摇了头，“等等，货驳。两次低频，声音钝，应该带着载重。”\n她把糖纸叠成小方块：“声纹课我学过，合格线六成。刚才这一下，也就六成把握。”\n她抬头看诺瓦，等她揭答案。"
    },
    "c7_15": {
      "text": "薇拉坐在长桌最里面，用自己的旧勺子慢慢吃面。桌上放着两罐糖水梨，其中一罐在她面前，拉环还扣着。\n“这两罐留给值班的人，还是现在就能开？”罐子推到桌子中间，她看了看你，“我想尝一块。”"
    },
    "c8_61": {
      "text": "伊芙娜把三条航迹合到一起：“动，会碰三家。停着，灰塔拿我们做对照，联合来收，赤垣自己下刀，照样会记我们在场。”\n她抬起眼：“别等谁替我们留空位。先把能做的说清楚。”"
    },
    "c4_f08": {
      "text": "“以后调一次，得把四个人叫进同一间屋。”她给内衬贴好一圈白胶布，把自己的那片放进去，“挑个大家都没出事的日子吧。”\n她扣好背心，掌心压过那块硬处，确认外面看不出来。"
    },
    "c6_a47": {
      "speaker": "doran"
    },
    "c6_h14": {
      "speaker": "doran"
    },
    "c3_cy12": {
      "text": "「这话留给谁？」薇拉问。",
      "next": "c3_cy12_v8_doran"
    },
    "c3_rp04": {
      "text": "「停，第三遍了，再倒就只能兑水。」诺瓦伸手去拿盐罐，「给我吧。」",
      "next": "c3_rp04_v8_vera"
    },
    "c7_34": {
      "text": "“第七号原型处置令。”伊芙娜翻开会议记录，“执行条件在哪一栏？指出来。”",
      "next": "c7_34_v8_keating"
    },
    "c7_35": {
      "text": "“港区登记号。”诺瓦抬起笔尖，等着他报。",
      "next": "c7_35_v8_keating"
    },
    "c7_37": {
      "text": "“泵的备件，签完多久送进坞？”铎兰松开了桌沿。",
      "next": "c7_37_v8_keating"
    },
    "c7_ms_10g": {
      "text": "薇拉听了一会儿曲子：“这一段每周都放吗？”",
      "next": "c7_ms_10g_v8_doran"
    },
    "ending_watch_final": {
      "closure": {
        "mechanism": "联合负责主干登记，矿站报船期，灰塔交校准结果。护航团靠现有锚点和被动测距领航，按班表接送过境船，通行权由各方共同维持。",
        "ship": "渡鸦号成为共同护航团的轮值旗舰。油料、弹药和修理按现有余量安排；交班时，下一班接过指挥。",
        "companions": [
          "伊芙娜：负责当班护航指令，交班时签清责任；自己的值勤和身份手续也由她签。",
          "铎兰：继续做机修长，把修理册和待办工单交给接班人，排好自己的归港假日。",
          "诺瓦：保存各方都能复核的现场记录，医疗资料和私人通信另行保管。",
          "薇拉：留在二号位，轮班教民船观察手。她自己排课和休息，也约了慢船上的人去看日出。"
        ],
        "protagonist": "你继续当班指挥，为自己签下的护航安排负责。值勤结束，把位置交给下一班，才轮到你安排自己的时间。"
      }
    },
    "ending_exodus_final": {
      "closure": {
        "mechanism": "迁居的人到澜港安顿，留守矿站的人收下滤网和工具，补给联络继续。矿权和航道争执仍在谈，船只照实测航迹出入。",
        "ship": "渡鸦号退出远航战备，停在旧港位，腾出住舱和救护床位，接上岸边的生活设施。将来若要远航，先找好岸上接替，再花几周复接设备。",
        "companions": [
          "伊芙娜：在港区教靠岸演练，下课后有自己的下午，可以陪居民走走海堤。",
          "铎兰：在工坊教修理，也跟当地师傅认电路。工具按借用清单归还，下午的活交给接班人。",
          "诺瓦：发当地潮报，接通家信；各方资料照原来的约定保管，病例留给本人。",
          "薇拉：参加近岸救援和小驳教学，在岸上租下一间房。她安排自己的出门和休息，也有了能请同伴吃饭的地方。"
        ],
        "protagonist": "你接下住处、救援和岸上补给的协调工作。每家去哪里、以后怎样过，都由他们自己来告诉你。"
      }
    },
    "ending_lightship_final": {
      "closure": {
        "mechanism": "维修支路提供换电、修复和逐次测距，容量按工位和轮值人数公示。第七段主干仍照此前议定的办法运行，慢船在支路等候、交班、再出发。",
        "ship": "渡鸦号把远航功率和散热支路接到检修负荷上，保留姿态控制与短距转泊。恢复远航需要进坞几周，灯船的活也得先交给别处。",
        "companions": [
          "伊芙娜：排轮值、交接和停航表，对外报能接几条船，也在表上给大家留下休息。",
          "铎兰：带普通巡检人员认接头、换损件。第三班开工时，扳手已经交到别人手里。",
          "诺瓦：公布误差、停航和服务容量；后来的人测出新偏差，就带着记录回来改。",
          "薇拉：让巡检艇自己完成维修，按约定叫停失准作业。下班后，她会去补给船学做点心。"
        ],
        "protagonist": "你守着这段固定的维修支路，安排出动、等待与交接。下一班来时，椅子交出去，余下的时间归你自己。"
      }
    },
    "ending_returned_final": {
      "closure": {
        "mechanism": "求助的人、接诊的医护与有限的床位接成一条联络线。程序证据按约定公开，住址和病例由本人决定交给谁。第七段和桥接装置仍按此前的处置保管。",
        "ship": "渡鸦号保留机动母舰的用途，划出临时床位与复查空间。部分补给港不再接纳它；下一次出航前，船上得先补齐维修、燃料和医疗耗材。",
        "companions": [
          "伊芙娜：接下船舶问询，带船寻找能接受救治条件的泊位。",
          "铎兰：腾出三张床，留好担架通道，再回机库修受扭的挂件。想学修理的人，等歇够了再来找他。",
          "诺瓦：分别保存转运影像、动作记录与各人的证言。缺失的原件单独注明，医疗资料按本人同意交接。",
          "薇拉：逐个听取去留意见，替阿棠联系了民用接收艇。后来她坐普通交通艇陪同转诊，夜枭留舰检修。"
        ],
        "protagonist": "你继续协调这条船能接下的救援。有人留下，有人离舰。你和薇拉在回信里说起近况，也商量下一次见面。"
      }
    },
    "ending_common_clock_hidden": {
      "closure": {
        "mechanism": "东点、外桥、内圈各留原始读数，逐段互校、公开交接；当班人可以叫停自己的操作。渡鸦号这一趟改用现场维护。{bridge_status}",
        "ship": "渡鸦号交出独占的原件与筹码，承担首班维护，以后照共同班表轮值。航行和补给按商定的办法走，后续班次由各方接替。",
        "companions": [
          "伊芙娜：守舰桥、带首班护航，亲自签认军籍和责任调查；以后的操作范围重新核准。",
          "铎兰：带维护班交接夹具和索具，班表上也写好了自己的回港假日。",
          "诺瓦：把原件交给共同保管人，供各方复核；报告保留自己的署名，个人资料另外征询本人。",
          "薇拉：参加测距，教接班人认读数，按自己签下的约定处理检查与口令。她按动了那只一直停在零位的秒表。"
        ],
        "protagonist": "你和其他当班人一起接受公开核对。船上少了独占的筹码，多了能接班的人。以后的航次里，你与薇拉继续商量工作，也慢慢安排工作以外的日子。"
      }
    }
  },
  "nodes": {
    "c3_cy12_v8_doran": {
      "id": "c3_cy12_v8_doran",
      "kind": "dialogue",
      "chapter": "ch03",
      "speaker": "doran",
      "scene": "city",
      "tone": "duty",
      "expression": "neutral",
      "text": "铎兰将工具收回包里，最后扣上袋口：「先放栈房。街上有人听得懂，会沿他们那条线传出去。」",
      "next": "c3_cy13_b"
    },
    "c3_rp04_v8_vera": {
      "id": "c3_rp04_v8_vera",
      "kind": "dialogue",
      "chapter": "ch03",
      "speaker": "vera",
      "scene": "hangar",
      "tone": "off_duty",
      "expression": "neutral",
      "text": "薇拉尝了一小口：「这回刚好。」她将杯子往桌子中间推了半寸，招呼你们也尝尝。",
      "next": "c3_rp05"
    },
    "c7_34_v8_keating": {
      "id": "c7_34_v8_keating",
      "kind": "dialogue",
      "chapter": "ch07",
      "speaker": "keating",
      "scene": "commandroom",
      "tone": "duty",
      "expression": "serious",
      "text": "“附件第二页，现在空着。”基廷说，“需要时由我填。”\n伊芙娜的笔尖没有离开纸面。他又将正页推近一点：“你今天签不签，先答这一页。”",
      "next": "c7_35"
    },
    "c7_35_v8_keating": {
      "id": "c7_35_v8_keating",
      "kind": "dialogue",
      "chapter": "ch07",
      "speaker": "keating",
      "scene": "commandroom",
      "tone": "duty",
      "expression": "neutral",
      "text": "“A-19-0706。六天前，上午九点四十，经办人是我。”基廷报得很快，“入档用不着你们签字，启用时才要。”\n诺瓦将时间写在泊位表旁边，两个日期并排放着。",
      "next": "c7_36"
    },
    "c7_37_v8_keating": {
      "id": "c7_37_v8_keating",
      "kind": "dialogue",
      "chapter": "ch07",
      "speaker": "keating",
      "scene": "commandroom",
      "tone": "duty",
      "expression": "neutral",
      "text": "“四小时。应急科目，跳过常规申购。”基廷翻开到货表，“不签就按这张排。哪天轮到，你自己找。”\n铎兰把表拖到面前，先去看型号那栏。",
      "next": "c7_38"
    },
    "c7_ms_10g_v8_doran": {
      "id": "c7_ms_10g_v8_doran",
      "kind": "dialogue",
      "chapter": "ch07",
      "speaker": "doran",
      "scene": "messhall",
      "tone": "off_duty",
      "expression": "neutral",
      "text": "“周日下午三点，三号库点播台。谁先打电话谁点。”铎兰把最后一只碗扣进架子。",
      "next": "c7_ms_10g_v8_vera"
    },
    "c7_ms_10g_v8_vera": {
      "id": "c7_ms_10g_v8_vera",
      "kind": "dialogue",
      "chapter": "ch07",
      "speaker": "vera",
      "scene": "messhall",
      "tone": "off_duty",
      "expression": "neutral",
      "text": "薇拉翻开自己的小本子，记下台号：“那我下周也能点。就这段。”\n曲子又被广播打断，她的笔停在纸上，等着听后半句。",
      "next": "c7_ms_11"
    }
  },
  "finalEndings": {
    "ending_watch_final": {
      "closure": {
        "mechanism": "联合负责主干登记，矿站报船期，灰塔交校准结果。护航团靠现有锚点和被动测距领航，按班表接送过境船，通行权由各方共同维持。",
        "ship": "渡鸦号成为共同护航团的轮值旗舰。油料、弹药和修理按现有余量安排；交班时，下一班接过指挥。",
        "companions": [
          "伊芙娜：负责当班护航指令，交班时签清责任；自己的值勤和身份手续也由她签。",
          "铎兰：继续做机修长，把修理册和待办工单交给接班人，排好自己的归港假日。",
          "诺瓦：保存各方都能复核的现场记录，医疗资料和私人通信另行保管。",
          "薇拉：留在二号位，轮班教民船观察手。她自己排课和休息，也约了慢船上的人去看日出。"
        ],
        "protagonist": "你继续当班指挥，为自己签下的护航安排负责。值勤结束，把位置交给下一班，才轮到你安排自己的时间。"
      }
    },
    "ending_exodus_final": {
      "closure": {
        "mechanism": "迁居的人到澜港安顿，留守矿站的人收下滤网和工具，补给联络继续。矿权和航道争执仍在谈，船只照实测航迹出入。",
        "ship": "渡鸦号退出远航战备，停在旧港位，腾出住舱和救护床位，接上岸边的生活设施。将来若要远航，先找好岸上接替，再花几周复接设备。",
        "companions": [
          "伊芙娜：在港区教靠岸演练，下课后有自己的下午，可以陪居民走走海堤。",
          "铎兰：在工坊教修理，也跟当地师傅认电路。工具按借用清单归还，下午的活交给接班人。",
          "诺瓦：发当地潮报，接通家信；各方资料照原来的约定保管，病例留给本人。",
          "薇拉：参加近岸救援和小驳教学，在岸上租下一间房。她安排自己的出门和休息，也有了能请同伴吃饭的地方。"
        ],
        "protagonist": "你接下住处、救援和岸上补给的协调工作。每家去哪里、以后怎样过，都由他们自己来告诉你。"
      }
    },
    "ending_lightship_final": {
      "closure": {
        "mechanism": "维修支路提供换电、修复和逐次测距，容量按工位和轮值人数公示。第七段主干仍照此前议定的办法运行，慢船在支路等候、交班、再出发。",
        "ship": "渡鸦号把远航功率和散热支路接到检修负荷上，保留姿态控制与短距转泊。恢复远航需要进坞几周，灯船的活也得先交给别处。",
        "companions": [
          "伊芙娜：排轮值、交接和停航表，对外报能接几条船，也在表上给大家留下休息。",
          "铎兰：带普通巡检人员认接头、换损件。第三班开工时，扳手已经交到别人手里。",
          "诺瓦：公布误差、停航和服务容量；后来的人测出新偏差，就带着记录回来改。",
          "薇拉：让巡检艇自己完成维修，按约定叫停失准作业。下班后，她会去补给船学做点心。"
        ],
        "protagonist": "你守着这段固定的维修支路，安排出动、等待与交接。下一班来时，椅子交出去，余下的时间归你自己。"
      }
    },
    "ending_returned_final": {
      "closure": {
        "mechanism": "求助的人、接诊的医护与有限的床位接成一条联络线。程序证据按约定公开，住址和病例由本人决定交给谁。第七段和桥接装置仍按此前的处置保管。",
        "ship": "渡鸦号保留机动母舰的用途，划出临时床位与复查空间。部分补给港不再接纳它；下一次出航前，船上得先补齐维修、燃料和医疗耗材。",
        "companions": [
          "伊芙娜：接下船舶问询，带船寻找能接受救治条件的泊位。",
          "铎兰：腾出三张床，留好担架通道，再回机库修受扭的挂件。想学修理的人，等歇够了再来找他。",
          "诺瓦：分别保存转运影像、动作记录与各人的证言。缺失的原件单独注明，医疗资料按本人同意交接。",
          "薇拉：逐个听取去留意见，替阿棠联系了民用接收艇。后来她坐普通交通艇陪同转诊，夜枭留舰检修。"
        ],
        "protagonist": "你继续协调这条船能接下的救援。有人留下，有人离舰。你和薇拉在回信里说起近况，也商量下一次见面。"
      }
    },
    "ending_common_clock_hidden": {
      "closure": {
        "mechanism": "东点、外桥、内圈各留原始读数，逐段互校、公开交接；当班人可以叫停自己的操作。渡鸦号这一趟改用现场维护。{bridge_status}",
        "ship": "渡鸦号交出独占的原件与筹码，承担首班维护，以后照共同班表轮值。航行和补给按商定的办法走，后续班次由各方接替。",
        "companions": [
          "伊芙娜：守舰桥、带首班护航，亲自签认军籍和责任调查；以后的操作范围重新核准。",
          "铎兰：带维护班交接夹具和索具，班表上也写好了自己的回港假日。",
          "诺瓦：把原件交给共同保管人，供各方复核；报告保留自己的署名，个人资料另外征询本人。",
          "薇拉：参加测距，教接班人认读数，按自己签下的约定处理检查与口令。她按动了那只一直停在零位的秒表。"
        ],
        "protagonist": "你和其他当班人一起接受公开核对。船上少了独占的筹码，多了能接班的人。以后的航次里，你与薇拉继续商量工作，也慢慢安排工作以外的日子。"
      }
    }
  }
};
export function applyReviewedFixesV8(result){const next=reviseChapters(result.chapters,[REVIEW]);return {...next,issues:[...result.issues,...next.issues],directions:{...result.directions,...next.directions}};}
