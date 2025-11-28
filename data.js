// data.js - 你的专属油气知识库
const industryTrivia = [
    // === 历史与基础 ===
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
    // === 固井技术 / Cementing ===
    {
        category: "固井 / Cementing",
        title: "糖是水泥的“毒药”",
        detail: "蔗糖是强效缓凝剂。在处理卡钻或需要长时间保持流动的极端事故中，工程师有时会泵入糖水来阻止水泥凝固。"
    },
    {
        category: "固井 / Cementing",
        title: "G 级水泥的身世",
        detail: "API G 级水泥其实源自波特兰水泥（Portland Cement），1824年发明时因颜色像英国波特兰岛的石头而得名。"
    },
    {
        category: "固井 / Cementing",
        title: "微珠（Microspheres）的作用",
        detail: "在低压地层固井时，为了降低水泥浆密度防止漏失，我们会加入空心的玻璃微珠，这能让水泥浆密度降到 1.0 g/cm3 以下。"
    },
    {
        category: "固井 / Cementing",
        title: "候凝时间 (WOC) 的底线",
        detail: "WOC (Waiting on Cement) 并不总是越长越好。通常标准是等待水泥抗压强度达到 500 psi，这就足以支撑套管并在井口进行后续作业了。"
    },
    {
        category: "固井 / Cementing",
        title: "套管扶正器的偏心问题",
        detail: "如果没有扶正器，套管会贴在井壁一侧，导致水泥环一边厚一边薄（窄边效应），这不仅影响封隔，还会导致测井曲线极其难看。"
    },
    // === 中东市场 / Middle East ===
    {
        category: "科威特 / Kuwait",
        title: "大布尔干 (Burgan) 的自喷能力",
        detail: "世界第二大油田 Burgan Field，其主力油层深度仅 3500-4500 英尺。早期的井自喷压力极大，是典型的“浅层高产”奇迹。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "鲁迈拉 (Rumaila) 的规模",
        detail: "伊拉克鲁迈拉油田是世界第三大油田。如果你在北鲁迈拉开车到南鲁迈拉，可能需要跑上一个多小时，它的面积比很多城市都要大。"
    },
    {
        category: "伊拉克 / Iraq",
        title: "基尔库克的永恒之火",
        detail: "Baba Gurgur 油田的天然气火已经燃烧了 4000 年，被认为是《圣经》中“烈火窑”的原型，古巴比伦人就在这里开采沥青。"
    },
    {
        category: "科威特 / Kuwait",
        title: "最大的环境灾难",
        detail: "1991年海湾战争撤退时，约 700 口油井被点燃。为了灭火，甚至使用了喷气式发动机改装的灭火坦克（Big Wind），这是固井和修井史上的极限操作。"
    },
    // === 设备与作业 ===
    {
        category: "设备 / Equipment",
        title: "PCP 泵的独特声音",
        detail: "在伊拉克米桑油田等含有高粘度原油的区块，螺杆泵（PCP）被广泛使用。它工作时没有磕头机那种节奏感，而是一种持续的嗡嗡声。"
    },
    {
        category: "HSE / Safety",
        title: "硫化氢 (H2S) 的嗅觉陷阱",
        detail: "低浓度的 H2S 有臭鸡蛋味，但高浓度（>100ppm）会迅速麻痹嗅觉神经。如果你闻着闻着突然没味了，那可能意味着极度危险，必须立刻撤离。"
    },
    {
        category: "材料 / Materials",
        title: "重晶石 (Barite) 的比重",
        detail: "为了压稳高压地层，我们需要加重泥浆或水泥。最常用的加重剂重晶石，其比重通常要求达到 4.2 以上。"
    },
    {
        category: "固井 / Cementing",
        title: "双凝水泥 (Dual-Set)",
        detail: "在某些漏失严重的井，我们会设计“触变水泥”。它在泵送时是流体，一旦停止流动就迅速变成胶冻状堵漏，再次施压又能流动。"
    },
    // ... 预留位置，后续可以继续加到 1000 条 ...
];