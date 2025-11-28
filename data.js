// data.js - 油气与固井行业专属知识库
// 包含：固井技术、中东市场(科威特/伊拉克)、石油历史、商务投标、HSE

const industryTrivia = [
    // === 1. 固井核心技术 (Cementing Tech) ===
    {
        category: "固井 / Cementing",
        title: "糖是水泥的“毒药”",
        detail: "蔗糖是强效缓凝剂。在处理卡钻或需要长时间保持流动的极端事故中，工程师有时会泵入糖水来阻止水泥凝固。"
    },
    {
        category: "固井 / Cementing",
        title: "API 水泥分类",
        detail: "API 10A 标准将油井水泥分为 A 到 H 八个等级。其中 G 级和 H 级是专为深井固井设计的基础水泥，可以通过添加剂调整性能。"
    },
    {
        category: "固井 / Cementing",
        title: "G 级与 H 级的区别",
        detail: "G 级和 H 级化学成分几乎一样，主要区别在于颗粒细度和表面积。G 级通常研磨得更细，而 H 级颗粒稍粗，这影响了它们的需水量和稠化时间。"
    },
    {
        category: "固井 / Cementing",
        title: "微珠 (Microspheres)",
        detail: "在科威特等易漏失地层，为了将水泥浆密度降至 1.0 g/cm³ 以下，会加入空心玻璃微珠。这些微珠耐压极高，不会在井底高压下破碎。"
    },
    {
        category: "固井 / Cementing",
        title: "双凝水泥 (Thixotropic)",
        detail: "触变水泥在流动时像液体，停止时像胶冻。这种特性使其非常适合用于堵漏作业，因为它能迅速在漏失层驻留。"
    },
    {
        category: "固井 / Cementing",
        title: "泡沫水泥 (Foam Cement)",
        detail: "通过向水泥浆中注入氮气 (N2)，可以制造出极低密度且具有韧性的泡沫水泥。它就像海绵一样，在套管受热膨胀或受压变形时，能保持完整不破裂。"
    },
    {
        category: "固井 / Cementing",
        title: "自愈合水泥 (Self-Healing)",
        detail: "这种水泥里含有特殊的“休眠”材料。当水泥环产生裂缝并遇到油气泄漏时，这些材料会“醒来”并膨胀，自动把裂缝堵死。"
    },
    {
        category: "固井 / Cementing",
        title: "前置液 (Spacer) 的流变性",
        detail: "为了有效顶替泥浆，前置液的流变性能通常设计为“中间状态”：比泥浆稍稠，但比水泥浆稍稀，以实现最佳的清洗效率。"
    },
    {
        category: "固井 / Cementing",
        title: "游离液 (Free Fluid) 的危害",
        detail: "如果水泥浆在静止时出现游离液，会在套管高侧形成水槽（Water Channel），这不仅破坏层间封隔，还会导致气窜。"
    },
    {
        category: "固井 / Cementing",
        title: "防气窜 (Gas Migration)",
        detail: "气窜是固井的噩梦。气体会在水泥浆像果冻一样还没硬（胶凝过渡期）的时候钻出通道。使用“直角稠化”的水泥浆体系可以缩短这个危险窗口期。"
    },
    {
        category: "固井 / Cementing",
        title: "尾管固井 (Liner Cementing)",
        detail: "这是风险最高的固井作业之一。因为环空极其狭窄，水泥浆上返阻力大，极易压漏地层。而且尾管悬挂器的密封性也是一大挑战。"
    },
    {
        category: "固井 / Cementing",
        title: "挤水泥 (Squeeze Cementing)",
        detail: "当第一遍固井失败或套管破损时，需要进行补救。这不是靠重力，而是靠高压把水泥浆硬“挤”进裂缝或射孔眼里，就像牙医补牙一样。"
    },
    {
        category: "固井 / Cementing",
        title: "候凝时间 (WOC) 的底线",
        detail: "WOC 并不总是越长越好。通常标准是等待水泥抗压强度达到 500 psi，这就足以支撑套管并在井口进行后续作业了。"
    },
    {
        category: "固井 / Cementing",
        title: "套管扶正器的偏心问题",
        detail: "如果套管偏心（Standoff < 67%），水泥浆会走“宽路”而不走“窄路”，导致窄边留有泥浆，这是固井质量差的最常见原因之一。"
    },
    {
        category: "固井 / Cementing",
        title: "胶塞 (Plug) 的刮壁作用",
        detail: "固井胶塞不仅用于隔离水泥浆和钻井液，还有一个关键作用是“刮壁”——它能刮除套管内壁残留的水泥膜。"
    },

    // === 2. 科威特市场 (Kuwait Market) ===
    {
        category: "科威特 / Kuwait",
        title: "大布尔干 (Burgan) 的自喷能力",
        detail: "世界第二大油田 Burgan Field，其主力油层深度仅 3500-4500 英尺。早期的井自喷压力极大，是典型的“浅层高产”奇迹。"
    },
    {
        category: "科威特 / Kuwait",
        title: "大风 (Big Wind) 灭火坦克",
        detail: "1991年为了扑灭油井大火，匈牙利工程师将米格-21战斗机的喷气引擎装在坦克底盘上，制造了“大风”灭火车，以此吹灭火焰。"
    },
    {
        category: "科威特 / Kuwait",
        title: "拉特加 (Ratqa) 油田争议",
        detail: "Ratqa 油田位于科威特北部边境，实际上是伊拉克 Rumaila 油田向南延伸的部分。这也曾是 1990 年海湾危机的导火索之一。"
    },
    {
        category: "科威特 / Kuwait",
        title: "侏罗纪气田 (Jurassic Gas)",
        detail: "科威特北部的侏罗纪深层气井是世界上最具挑战性的钻井项目之一，面临着极高的高温高压 (HPHT) 和高含硫 (H2S) 挑战。"
    },
    {
        category: "科威特 / Kuwait",
        title: "KOC 的成立",
        detail: "科威特石油公司 (KOC) 成立于 1934 年，最初是由英国石油公司 (BP) 和海湾石油公司 (Gulf Oil) 合资组建的。"
    },
    {
        category: "科威特 / Kuwait",
        title: "原油湖 (Oil Lakes)",
        detail: "KOC 至今仍在处理 1991 年留下的原油湖。这些硬化的油砂层像沥青一样硬，清理它们是目前科威特最大的环境修复项目 (KETRP)。"
    },

    // === 3. 伊拉克市场 (Iraq Market) ===
    {
        category: "伊拉克 / Iraq",
        title: "鲁迈拉 (Rumaila) 的地位",
        detail: "鲁迈拉油田的产量约占伊拉克总产量的 40%。它大到被分为“北鲁迈拉”和“南鲁迈拉”两个独立的管理区块。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "西古尔纳 (West Qurna)",
        detail: "西古尔纳油田拥有惊人的储量，但因为地雷遗留问题和基础设施落后，其开发进度曾长期受阻，是各大油服公司争夺的焦点。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "米桑 (Missan) 的高粘油",
        detail: "米桑油田群（如 Buzurgan）的原油粘度较高，且含盐量大，这对固井时的防腐蚀设计和后续的举升工艺（如螺杆泵）提出了特殊要求。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "马季努 (Majnoon) 的意思",
        detail: "Majnoon 在阿拉伯语中是“疯狂”的意思。这个油田之所以得名，是因为当初发现它的储量大得令人疯狂。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "哈法亚 (Halfaya) 的多层系",
        detail: "哈法亚油田拥有多个主力产层（如 Mishrif, Nahr Umr, Zubair），这要求固井方案必须兼顾不同压力层系的封隔，防止层间互窜。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "基尔库克的永恒之火",
        detail: "Baba Gurgur 油田的天然气火已经燃烧了 4000 年，被认为是《圣经》中“烈火窑”的原型，古巴比伦人就在这里开采沥青。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "祖拜尔 (Zubair) 油田",
        detail: "位于巴士拉西南，主力产层是白垩系的砂岩。这里由意大利埃尼 (Eni) 公司主导开发，对 HSE 标准的要求极高。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "巴士拉轻油 (Basrah Light)",
        detail: "这是伊拉克出口的基准原油。虽然叫“轻油”，但其实比布伦特原油重。如果你在巴士拉港口 (ABOT) 看到巨大的油轮，装的大多是这个。"
    },

    // === 4. 商务与投标 (Commercial) ===
    {
        category: "商务 / Business",
        title: "投标保函 (Bid Bond)",
        detail: "在中东石油投标中，通常要求提交投标总价 1% 的银行保函。这是为了防止中标后反悔。如果你赢了标却不签合同，这笔钱就会被甲方没收。"
    },
    {
        category: "商务 / Business",
        title: "履约保函 (Performance Bond)",
        detail: "合同签订后，通常需要将投标保函转为履约保函，金额通常是合同总价值的 5% 到 10%，直到项目完工验收后才会退还。"
    },
    {
        category: "商务 / Business",
        title: "Incoterms: DDP vs CIF",
        detail: "在科威特做生意，甲方常要求 DDP (完税后交货)。这意味着除了海运保险 (CIF)，你还得搞定极其繁琐的本地清关和关税，这是很多外国服务商亏损的隐形深坑。"
    },
    {
        category: "商务 / Business",
        title: "ICV / IKTVA (本地化价值)",
        detail: "现在中东国家极度看重 ICV (In-Country Value)。有时候你的价格不是最低的，但因为你在当地雇佣了更多人或采购了更多本地设备，你依然能中标。"
    },
    {
        category: "商务 / Business",
        title: "不可抗力 (Force Majeure)",
        detail: "在伊拉克等高风险地区，合同里的“不可抗力”条款至关重要。必须明确界定战争、恐怖袭击、甚至沙尘暴导致停工时，谁来承担待机费 (Standby Rate)。"
    },

    // === 5. 历史与基础 (History & Basics) ===
    {
        category: "历史 / History",
        title: "为什么一桶石油是 42 加仑？",
        detail: "1866年，宾夕法尼亚石油商采用 42 加仑的威士忌木桶作为标准，为了弥补运输途中的溢出损耗（比传统的 40 加仑多了 2 加仑）。"
    },
    {
        category: "钻井 / Drilling",
        title: "第一口现代化油井",
        detail: "1859年，Drake 上校在宾夕法尼亚打了第一口商业油井，深度只有 69.5 英尺（约 21 米），但这开启了现代石油工业。"
    },
    {
        category: "历史 / History",
        title: "标准石油的解体",
        detail: "1911年，洛克菲勒的标准石油公司被美国最高法院判决垄断并拆分。今天的 ExxonMobil, Chevron 等巨头其实都是当年“分家”出来的兄弟。"
    },
    {
        category: "历史 / History",
        title: "OPEC 的诞生",
        detail: "1960年，为了对抗西方石油公司的定价权，伊拉克邀请沙特、伊朗、科威特和委内瑞拉在巴格达开会，OPEC 由此诞生。"
    },
    {
        category: "历史 / History",
        title: "第一艘油轮",
        detail: "世界上第一艘专门设计的蒸汽机油轮是“琐罗亚斯德号”，由诺贝尔兄弟（也就是诺贝尔奖创始人的家族）在里海运营。"
    },
    {
        category: "历史 / History",
        title: "红色管线协定",
        detail: "1928年，几大石油巨头在地图上用红笔圈出了原来奥斯曼帝国的疆域，约定在圈内共同行动，互不竞争。"
    },
    {
        category: "技术史 / Tech History",
        title: "牙轮钻头的发明",
        detail: "1909年，霍华德·休斯发明了双牙轮钻头，这让钻穿坚硬岩石成为可能。他的儿子后来用这笔财富去拍电影和造飞机了。"
    },

    // === 6. 设备、材料与 HSE ===
    {
        category: "设备 / Equipment",
        title: "PCP 泵的独特声音",
        detail: "在伊拉克米桑油田等含有高粘度原油的区块，螺杆泵（PCP）被广泛使用。它工作时没有磕头机那种节奏感，而是一种持续的嗡嗡声。"
    },
    {
        category: "设备 / Equipment",
        title: "顶驱系统 (Top Drive)",
        detail: "现在的现代化钻机都用顶驱（从上面旋转钻杆），而不是老式的转盘。这让倒划眼和处理卡钻变得更容易，极大地提高了效率。"
    },
    {
        category: "HSE / Safety",
        title: "硫化氢 (H2S) 的嗅觉陷阱",
        detail: "低浓度的 H2S 有臭鸡蛋味，但高浓度（>100ppm）会迅速麻痹嗅觉神经。如果你闻着闻着突然没味了，那可能意味着极度危险。"
    },
    {
        category: "HSE / Safety",
        title: "BOP (防喷器) 的压力等级",
        detail: "深水或高压气井的 BOP 组通常重达数百吨，压力等级可达 15,000 psi 甚至 20,000 psi，相当于海底一万米压力的两倍。"
    },
    {
        category: "HSE / Safety",
        title: "固井候凝期间的井控",
        detail: "水泥在从液态向固态转变的过程中（失重期），静液柱压力会降低。这是井喷发生的高危窗口期，必须严密监测环空压力。"
    },
    {
        category: "材料 / Materials",
        title: "重晶石 (Barite) 的比重",
        detail: "为了压稳高压地层，我们需要加重泥浆或水泥。最常用的加重剂重晶石，其比重通常要求达到 4.2 以上。"
    },
    {
        category: "地质 / Geology",
        title: "盐膏层 (Salt Formation)",
        detail: "在中东钻井常遇到巨厚的盐层。盐在高温高压下会像牙膏一样流动（蠕变），如果钻开后不马上下一层套管并固井，井眼就会被“挤”扁。"
    },
    // === 1. 固井技术（Cementing） 25条 ===
    {
        category: "固井 / Cementing",
        title: "API G 级水泥可稳定到 350°C",
        detail: "通过添加热稳定缓凝剂和硅粉，G级水泥在超高温 HPHT 井可稳定到 BHST 350°C 以上。"
    },
    {
        category: "固井 / Cementing",
        title: "硅粉的主要作用",
        detail: "硅粉可提升抗压强度、提升抗气窜能力，并在高温井防止水泥石强度回落。"
    },
    {
        category: "固井 / Cementing",
        title: "尾管固井的“瞬时漏失”现象",
        detail: "尾管悬挂器密封不良会导致瞬时漏失，是尾管返高不足的最常见原因。"
    },
    {
        category: "固井 / Cementing",
        title: "低密度水泥浆的破碎压力",
        detail: "微珠体系水泥浆在 2000–3500 psi 的压力下易破碎，因此井下压力设计需格外谨慎。"
    },
    {
        category: "固井 / Cementing",
        title: "泥浆转换效率的 60% 法则",
        detail: "大多数水平井或高偏井，泥浆转换效率平均约在 55–65% 范围。"
    },
    {
        category: "固井 / Cementing",
        title: "深井需考虑“水泥浆收缩”",
        detail: "深井温高压大，水泥石收缩更明显，必须加入微膨胀剂来补偿。"
    },
    {
        category: "固井 / Cementing",
        title: "10ppg 以下水泥浆的常见风险",
        detail: "密度低容易出现离析、微珠破碎和抗压强度发展慢的问题。"
    },
    {
        category: "固井 / Cementing",
        title: "环空压力上升 (A-Annulus Pressure)",
        detail: "气窜、热膨胀、水泥收缩均可能导致 A 环空压力上升，是井完整性诊断的关键指标。"
    },
    {
        category: "固井 / Cementing",
        title: "水泥浆的“凝胶强度发展曲线”",
        detail: "0–100 lbf/100ft² 的过渡阶段最危险，此时最容易发生气窜。"
    },
    {
        category: "固井 / Cementing",
        title: "抗硫水泥体系",
        detail: "含 H2S 的井常加入铁盐或亚硫酸盐以防止硫化物造成水泥石脆化。"
    },
    {
        category: "固井 / Cementing",
        title: "前置液黏度越高越好吗？",
        detail: "错误。黏度过高会造成压耗大和井眼扰动，导致漏失。"
    },
    {
        category: "固井 / Cementing",
        title: "冲洗液与泥浆界面的“滑移层”",
        detail: "滑移层厚度通常 <0.5mm，但对泥浆去除效率起决定性作用。"
    },
    {
        category: "固井 / Cementing",
        title: "膨胀剂的两种膨胀期",
        detail: "早期膨胀（几小时内）与后期膨胀（7–14天），两者作用不同。"
    },
    {
        category: "固井 / Cementing",
        title: "盐水固井体系",
        detail: "在盐膏层中使用盐饱和固井体系可避免盐层溶蚀而引起井壁坍塌。"
    },
    {
        category: "固井 / Cementing",
        title: "气窜指数 (Gas Migration Index, GMI)",
        detail: "用于评价体系防气窜能力，通常 <0.1 psi/hr 为优。"
    },
    {
        category: "固井 / Cementing",
        title: "固井胶塞的耐压能力",
        detail: "常规胶塞耐压可达 10,000–15,000 psi。"
    },
    {
        category: "固井 / Cementing",
        title: "双降滤失机制",
        detail: "物理堵漏 + 化学交联双重体系常用于 HPHT 井以降低滤失。"
    },
    {
        category: "固井 / Cementing",
        title: "压裂井固井特殊挑战",
        detail: "套管必须承受高达 12,000 psi 的压裂压力，因此水泥石韧性比抗压更重要。"
    },
    {
        category: "固井 / Cementing",
        title: "堵漏水泥浆的渗透压原理",
        detail: "利用高固含与快速凝胶时间堵住裂缝，是快速止漏关键。"
    },
    {
        category: "固井 / Cementing",
        title: "立管压力回弹 (SICP Rebound)",
        detail: "在凝固过程中压力回弹是早期气窜的重要表现之一。"
    },
    {
        category: "固井 / Cementing",
        title: "水泥石抗压强度的温度敏感性",
        detail: "温度每升高 30°C，水泥石抗压强度平均提升 15–20%。"
    },
    {
        category: "固井 / Cementing",
        title: "膨胀水泥石的抗挤压性能",
        detail: "膨胀水泥石在套管收缩/地层移动时表现出更高韧性。"
    },
    {
        category: "固井 / Cementing",
        title: "深水固井的温差难题",
        detail: "海水温度仅 4°C，井底温度 150°C，极端温差导致稠化难以预测。"
    },
    {
        category: "固井 / Cementing",
        title: "超长立管摩阻控制",
        detail: "深水浮式平台立管长度大，常需在前置液加入摩阻减剂降低压耗。"
    },
    {
        category: "固井 / Cementing",
        title: "外加剂的“兼容性”问题",
        detail: "不同服务商的外加剂常存在电荷/聚合物反应不兼容，需实验验证。"
    },

    // === 2. 钻井 (Drilling) — 15条 ===
    {
        category: "钻井 / Drilling",
        title: "ECD 的真实意义",
        detail: "等效循环密度决定井下真实受压环境，是判断压漏/井喷的核心参数。"
    },
    {
        category: "钻井 / Drilling",
        title: "高偏井的滑转摩阻",
        detail: "高偏角井摩阻可占总泵压的 20–40%，对固井返高影响巨大。"
    },
    {
        category: "钻井 / Drilling",
        title: "盐膏层井径变形",
        detail: "盐层流变性强，如果钻后 24 小时不下套管，井径可能缩小 10%。"
    },
    {
        category: "钻井 / Drilling",
        title: "井口温度与井底温度差异",
        detail: "井底温度常是井口的 4–8 倍，是稠化时间变化的主因之一。"
    },
    {
        category: "钻井 / Drilling",
        title: "高硫井的钻井液设计",
        detail: "需使用高 pH 泥浆抑制 H2S 逸散，避免人员中毒。"
    },
    {
        category: "钻井 / Drilling",
        title: "井壁不稳定来自哪里",
        detail: "80% 来源于页岩吸水膨胀与裂缝扩张。"
    },
    {
        category: "钻井 / Drilling",
        title: "循环压耗的三个组成部分",
        detail: "套管摩阻、井眼摩阻、地层摩阻共同组成总压耗。"
    },
    {
        category: "钻井 / Drilling",
        title: "卡钻的三大类型",
        detail: "差压卡钻、机械卡钻、固相堆积卡钻。"
    },
    {
        category: "钻井 / Drilling",
        title: "气侵的三阶段",
        detail: "初侵 → 气体膨胀 → 气体返出井口，是井控监测重点。"
    },
    {
        category: "钻井 / Drilling",
        title: "高压井的“Kick Tolerance”",
        detail: "每口井设计 Kick 容忍度，用于测算允许的气侵体积。"
    },
    {
        category: "钻井 / Drilling",
        title: "井斜控制的三个关键",
        detail: "钻头类型、钻具组合、井眼摩阻是控制井斜的三大因素。"
    },
    {
        category: "钻井 / Drilling",
        title: "HPHT 井的“压力反演”风险",
        detail: "极高温度会导致泥浆降黏，引起压力骤降，可能触发井涌。"
    },
    {
        category: "钻井 / Drilling",
        title: "欠平衡钻井的优势",
        detail: "可提高钻速并降低井壁损害，但风险系数大。"
    },
    {
        category: "钻井 / Drilling",
        title: "高密度泥浆的极限",
        detail: "当泥浆密度>2.5 sg 时，固相含量极高，井眼携屑效率迅速下降。"
    },
    {
        category: "钻井 / Drilling",
        title: "MPD（可控压钻井）",
        detail: "可通过节流阀实时控制环压，适用于窄密度窗口的地层。"
    },

    // === 3. 科威特市场（Kuwait） 15条 ===
    {
        category: "科威特 / Kuwait",
        title: "Mutriba 的水敏性",
        detail: "Mutriba 区块地层极度水敏，需要使用盐水或油基体系钻井。"
    },
    {
        category: "科威特 / Kuwait",
        title: "KOC 的 HSE 要求",
        detail: "所有承包商必须拥有 KOC 认可的 HSE 管理体系，否则无法进入招标。"
    },
    {
        category: "科威特 / Kuwait",
        title: "三大国家级油田",
        detail: "Burgan、Sabriya、Raudhatain 是科威特的三大核心产区。"
    },
    {
        category: "科威特 / Kuwait",
        title: "Jurassic 深气井的极端高温",
        detail: "深气井 BHST 可达 180–220°C，是全球最难固井区域之一。"
    },
    {
        category: "科威特 / Kuwait",
        title: "KOC 的“本地化分值”",
        detail: "ICV 占投标总分的 10–20%，影响巨大。"
    },
    {
        category: "科威特 / Kuwait",
        title: "科威特的“沙尘停工”",
        detail: "风速超过一定值或能见度过低，KOC 会强制停工。"
    },
    {
        category: "科威特 / Kuwait",
        title: "材料进口的“Arabization”要求",
        detail: "部分 KOC 项目要求包装标签与说明书必须含阿语。"
    },
    {
        category: "科威特 / Kuwait",
        title: "KPC 生态体系",
        detail: "KOC、KNPC、KIPIC 均属于 KPC 集团，每个负责不同业务线。"
    },
    {
        category: "科威特 / Kuwait",
        title: "科威特井常见漏失类型",
        detail: "以裂缝漏失为主，因此轻质浆与泡沫水泥较常见。"
    },
    {
        category: "科威特 / Kuwait",
        title: "沙地井场基础薄弱",
        detail: "Rig Move 受限，设备下陷时需使用临时钢板。"
    },
    {
        category: "科威特 / Kuwait",
        title: "冬夏温差的固井影响",
        detail: "冬季 BHCT 低导致稠化时间急剧变长。"
    },
    {
        category: "科威特 / Kuwait",
        title: "油基泥浆固井难题",
        detail: "OBM 膜层会抑制粘结，需要强表面活性剂清洗体系。"
    },
    {
        category: "科威特 / Kuwait",
        title: "阿布哈迪油田的产能潜力",
        detail: "Abdali Field 是科威特下一步重点扩建区域。"
    },
    {
        category: "科威特 / Kuwait",
        title: "科威特井深较浅",
        detail: "多数井深 <4000m，因此固井以大尺寸套管为主。"
    },
    {
        category: "科威特 / Kuwait",
        title: "KOC 对服务商的 KPIs",
        detail: "包括 NPT、固井返高、WOC 时间与安全事件计分。"
    },

    // === 4. 伊拉克市场（Iraq） 15 条 ===
    {
        category: "伊拉克 / Iraq",
        title: "WQ2 的复杂性",
        detail: "西古尔纳地层非均质性强，钻速变化大，对前置液要求更高。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "鲁迈拉的泥岩敏感性",
        detail: "Rumaila 页岩极易水化，易导致井壁坍塌。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "Zubair 的高温高压特点",
        detail: "Zubair 地层含有 H2S 与 CO₂，对固井材料有腐蚀要求。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "巴士拉地区井控要求高",
        detail: "多为高压井，常见井口压力 3000–6000 psi。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "米桑油田渗透率高",
        detail: "Buzurgan 等油田渗透率高，易漏失。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "Block 9 的地层压力窗口窄",
        detail: "钻井液密度难以刚好落在窗口内，固井风险大。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "Lukoil 的投标周期",
        detail: "投标至授标常需要 6–8 个月。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "井场进出需 VRF",
        detail: "所有外国服务商必须提前申请 VRF 才能进出。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "伊拉克常见 Casings",
        detail: "13-3/8'' 与 9-5/8'' 是南部油田的主流套管组合。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "Nahr Umr 的裂缝性强",
        detail: "裂缝性砂岩导致返高常不足 30%。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "Majnoon 的湿地挑战",
        detail: "井场位于湿地，Rig Move 极慢，设备需浮桥运输。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "Basrah Light 的 API 值",
        detail: "API 30–34，是中质偏轻的原油。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "Block 10 的高温挑战",
        detail: "井底温度可达 160–180°C。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "甲方施工审计严格",
        detail: "Lukoil、CNOOC、ENI 均会进行随机审计，固井记录不可造假。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "油田安保限制",
        detail: "不同油田区块之间不得自由穿越，必须提前申请指令单。"
    },

    // === 5. 商务投标（Commercial） 15条 ===
    {
        category: "商务 / Business",
        title: "中东投标的“三袋模型”",
        detail: "技术袋、商务袋、价格袋分别独立评分，是常见评标方式。"
    },
    {
        category: "商务 / Business",
        title: "变更的“顺序性”",
        detail: "所有变更必须先技术认可，再商务确认，最后才能执行。"
    },
    {
        category: "商务 / Business",
        title: "本地化采购的最低比例",
        detail: "KOC、PDO 等要求部分物资 >30% 需由本地采购。"
    },
    {
        category: "商务 / Business",
        title: "技术符合性 (TBE)",
        detail: "只要有一条关键项未满足即被判“技术不合格”，直接出局。"
    },
    {
        category: "商务 / Business",
        title: "隐藏成本：材料存储费",
        detail: "科威特、伊拉克仓储费高，长期滞留材料会吞噬利润。"
    },
    {
        category: "商务 / Business",
        title: "招标澄清的重要性",
        detail: "澄清阶段往往决定技术评分高低，也是调整方案的关键。"
    },
    {
        category: "商务 / Business",
        title: "设备替代需提供技术偏差表",
        detail: "任何偏离 SOR 的设备必须写 Deviation List。"
    },
    {
        category: "商务 / Business",
        title: "服务费的计算方式",
        detail: "常为日费率（Daily Rate）、计次费（Per Job）、按吨计费等。"
    },
    {
        category: "商务 / Business",
        title: "招标中的“死条款”",
        detail: "如要求 10,000 psi 泵压能力，不达标将直接被取消资格。"
    },
    {
        category: "商务 / Business",
        title: "投标中的“Risk Allocation Matrix”",
        detail: "用于界定甲乙双方的风险边界，是价格策略制定依据。"
    },
    {
        category: "商务 / Business",
        title: "不可抗力条款必须写明时限",
        detail: "例如“超过 30 天后双方重新协商”，否则容易纠纷。"
    },
    {
        category: "商务 / Business",
        title: "付款条款决定现金流安全",
        detail: "中东项目常见支付周期 60–90 天，一旦延迟会造成严重现金流压力。"
    },
    {
        category: "商务 / Business",
        title: "Price Breakdown 必须透明",
        detail: "隐瞒成本结构的报价一般会被甲方降分或质疑。"
    },
    {
        category: "商务 / Business",
        title: "招标文件的 RACI 模型",
        detail: "明确 Responsible/Accountable/Consulted/Informed 的责任人。"
    },
    {
        category: "商务 / Business",
        title: "合同中的 LD（违约罚金）",
        detail: "一般按合同金额 0.1–0.2%/天 计算，有封顶值。"
    },

    // === 6. HSE — 15条 ===
    {
        category: "HSE / Safety",
        title: "H2S 分级",
        detail: "10–20 ppm 需警戒；50 ppm 以上需全封闭防护；100 ppm 以上可致命。"
    },
    {
        category: "HSE / Safety",
        title: "JSA 的三项原则",
        detail: "识别危险、控制风险、记录执行。"
    },
    {
        category: "HSE / Safety",
        title: "Permit to Work 的六大类",
        detail: "动火、高处、密闭空间、吊装、挖掘、临时用电。"
    },
    {
        category: "HSE / Safety",
        title: "压井操作中的三压力",
        detail: "套压、立压、井口压力必须实时监控。"
    },
    {
        category: "HSE / Safety",
        title: "井喷的三条件",
        detail: "压力源、通道、点火源（引发火灾）。"
    },
    {
        category: "HSE / Safety",
        title: "吊装作业的“排除区”",
        detail: "吊装半径 +10% 为排除区，禁止无关人员进入。"
    },
    {
        category: "HSE / Safety",
        title: "热应激风险",
        detail: "中东夏季井场环境温度可达 55°C，是高发风险。"
    },
    {
        category: "HSE / Safety",
        title: "挤水泥压力监控",
        detail: "挤压压力突然下降通常意味着材料进入裂缝。"
    },
    {
        category: "HSE / Safety",
        title: "固井车防逆火装置",
        detail: "防止高压泵回火造成设备损坏。"
    },
    {
        category: "HSE / Safety",
        title: "井控设备红区",
        detail: "BOP 周围区域必须设立红区限制人员进入。"
    },
    {
        category: "HSE / Safety",
        title: "KOC 对 PPE 的强制要求",
        detail: "FR 阻燃服 + 安全鞋 + 护目镜 + 耳塞 + 手套为最低标准。"
    },
    {
        category: "HSE / Safety",
        title: "LOTO 程序",
        detail: "Lock Out Tag Out 必须同时上锁与挂牌。"
    },
    {
        category: "HSE / Safety",
        title: "停工令权力",
        detail: "任何人都可因不安全因素发起 Stop Work Authority。"
    },
    {
        category: "HSE / Safety",
        title: "吊装钢丝绳检查周期",
        detail: "每日视觉检查，30 天一次详细检查。"
    },
    {
        category: "HSE / Safety",
        title: "挤水泥设备的泄压要求",
        detail: "作业结束后必须确认完全泄压，避免滞留高压导致事故。"
    }
];