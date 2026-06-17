    const image = {
      d1: "assets/images/user-src/day-travel-qingdao.jpeg",
      d2: "assets/images/user-src/qingdao-beer-museum.jpeg",
      d3: "assets/images/user-src/sight-taishan-peak.jpeg",
      d4: "assets/images/user-src/sight-daming-chaoran.jpeg",
      d5: "assets/images/user-src/hotel-jinan-meiyue.jpeg",
      d6: "assets/images/user-src/shop-rsun-plaza.jpeg",
      d7: "assets/images/user-src/shop-parc66.jpeg",
      d8: "assets/images/user-src/airport-travel.jpeg",
      hQingdao: "assets/images/user-src/hotel-qingdao-crowne.jpeg",
      hJinan: "assets/images/user-src/hotel-jinan-meiyue.jpeg",
      huifeng: "assets/images/user-src/food-huifengyuan.jpeg",
      taishanFood: "assets/images/user-src/food-shenqi-hotel.jpeg",
      minghuFood: "assets/images/user-src/food-minghu-ju.jpeg",
      night: "assets/images/user-src/food-huanlian-night-market.jpeg",
      weijing: "assets/images/user-src/food-grand-metro.jpeg",
      beer: "assets/images/user-src/qingdao-beer-museum.jpeg",
      taishan: "assets/images/user-src/sight-taishan.jpeg",
      taishanGate: "assets/images/user-src/sight-taishan-gates.jpeg",
      taishanPeak: "assets/images/user-src/sight-taishan-peak.jpeg",
      baotu: "assets/images/user-src/sight-baotu-spring.jpeg",
      wulong: "assets/images/user-src/sight-wulongtan.jpeg",
      furong: "assets/images/user-src/sight-furong-street.jpeg",
      qushui: "assets/images/user-src/sight-qushuiting.jpeg",
      daming: "assets/images/user-src/sight-daming-chaoran.jpeg",
      hongyang: "assets/images/user-src/shop-rsun-plaza.jpeg",
      henglong: "assets/images/user-src/shop-parc66.jpeg"
    };

    const tripStart = new Date(2026, 6, 14);
    const tripEnd = new Date(2026, 6, 21);

    const days = [
      { id: "d1", no: "DAY 1", date: "2026.07.14（二）", key: "2026-07-14", title: "台北 → 青島", tone: "抵達青島，入住飯店。", img: image.d1, tags: ["move"], items: [
        ["16:45-19:15", "山東航空 SC4086 台北 → 青島", "桃園 T2 出發，抵達青島膠東機場。"],
        ["傍晚", "接駁入住青島金水皇冠假日飯店", "專車接駁。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d2", no: "DAY 2", date: "2026.07.15（三）", key: "2026-07-15", title: "青島 → 濟南", tone: "青島啤酒博物館、高鐵前往濟南。", img: image.d2, tags: ["move", "tour", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["上午", "青島啤酒博物館", "1903 年舊啤酒廠原址。"],
        ["午餐", "匯豐苑（中山路大鮑島店）", "膠東海鮮與經典魯菜。"],
        ["14:37-17:20", "高鐵 G1074 青島 → 濟南", "抵達濟南，入住飯店。"],
        ["晚餐", "環聯夜市自理", "小吃、燒烤。"]
      ]},
      { id: "d3", no: "DAY 3", date: "2026.07.16（四）", key: "2026-07-16", title: "泰山", tone: "中天門、南天門、天街、玉皇頂。", img: image.d3, tags: ["tour", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["上午", "泰山風景區、中天門", "泰山半山腰重要節點。"],
        ["午餐", "神憩賓館餐廳", "玉皇頂附近用餐。"],
        ["下午", "南天門、天街、碧霞祠、玉皇頂", "泰山山頂路線。"],
        ["晚餐", "晚餐自理", ""]
      ]},
      { id: "d4", no: "DAY 4", date: "2026.07.17（五）", key: "2026-07-17", title: "濟南市區", tone: "趵突泉、大明湖、超然樓。", img: image.d4, tags: ["tour", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["上午", "趵突泉、五龍潭公園、芙蓉街", "泉城代表景點。"],
        ["午餐", "明湖居魯菜館", "魯菜。"],
        ["下午", "曲水亭街、大明湖、超然樓", "老城、水巷、夜景。"],
        ["晚宴", "山東維景大酒店 CMF 晚宴", ""]
      ]},
      { id: "d5", no: "DAY 5", date: "2026.07.18（六）", key: "2026-07-18", title: "CMF DAY 1", tone: "開幕式、頒獎、全日課程。", img: image.d5, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:30-18:00", "山東國際博覽會議中心 CMF 課程", "開幕式、頒獎、課程。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d6", no: "DAY 6", date: "2026.07.19（日）", key: "2026-07-19", title: "CMF DAY 2", tone: "個人行銷、組織發展。", img: image.d6, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:30-17:00", "山東國際博覽會議中心 CMF 課程", "全日課程。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d7", no: "DAY 7", date: "2026.07.20（一）", key: "2026-07-20", title: "CMF DAY 3", tone: "AI、通膨、財稅、閉幕式。", img: image.d7, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:30-17:30", "山東國際博覽會議中心 CMF 課程", "課程與閉幕式。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d8", no: "DAY 8", date: "2026.07.21（二）", key: "2026-07-21", title: "濟南 → 青島 → 台北", tone: "高鐵至青島機場，返台。", img: image.d8, tags: ["move"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["07:56-09:27", "高鐵 G5577 濟南東 → 青島機場", "回程第一段移動。"],
        ["13:25-15:45", "山東航空 SC4085 青島 → 台北", "返航，回台作戰。"]
      ]}
    ];

    const courses = [
      { id: "d5", title: "DAY 5｜7/18 開幕式與 CMF 課程", rows: [
        ["08:30-09:00", "CMF22 屆主禮嘉賓及冠軍聯盟入場儀式（開幕式）", ""],
        ["09:00-09:20", "主禮嘉賓致辭", ""],
        ["09:20-09:40", "2025 新浪保險年度經理人頒獎典禮", ""],
        ["09:40-10:00", "CMF 國際十大保險明星頒獎典禮", ""],
        ["10:00-10:30", "TMC 國際千萬圓桌大獎頒獎典禮", ""],
        ["10:30-11:30", "傳統文化在現代市場和生活中的應用", "金海鋒（中國文化網絡傳播研究院院長）"],
        ["11:30-12:00", "頂級客戶的經營與破圈", "張麗莎（單一客戶保費 1 億，全國最高紀錄）"],
        ["12:00-13:30", "午餐休息", ""],
        ["13:30-14:20", "企業家客戶（高淨值客戶）的銷售邏輯", "曹紀平（TMC 千萬圓桌會員，連續 22 年中國人壽山東省銷售冠軍）"],
        ["14:20-15:10", "AI 時代下保險人如何破局", "葉雲燕（CMF 冠軍聯盟主席，大會常務副主席）"],
        ["15:10-16:00", "中高端客戶的深度服務解析", "郭旦梅（國壽名人堂終身會員，中國人壽總部精英俱樂部會長）"],
        ["16:00-16:15", "休息", ""],
        ["16:15-17:10", "低利率時代下年金銷售突圍的策略", "程智雄（平安全國百強導師，羅輯思維-得到精品設計師）"],
        ["17:10-18:00", "信念的力量——提升「信」質生產", ""]
      ]},
      { id: "d6", title: "DAY 6｜7/19 個人創新行銷與組織發展", rows: [
        ["08:30-09:20", "創新活動經營，加速大保單拓展", "王堯（上海平安第一名）"],
        ["09:20-10:10", "升級經營模式，持續開拓高客", "鄭海兵（中國人壽連續多年全國第一，TMC 千萬圓桌會員）"],
        ["10:10-10:20", "休息", ""],
        ["10:20-11:00", "健康險銷售賦能", "易容（健康風險管理行業創始人，「健康險女王」）"],
        ["11:10-12:00", "直播獲客 2 千萬的邏輯", "馬曉芳（直播達人，互聯網獲客總保費 2 千萬）"],
        ["12:00-13:30", "午餐休息", ""],
        ["13:30-14:20", "浙江優秀團隊長論壇", "王國良（CMF 冠軍聯盟會員，平安人壽資深總監）／王利忠（中國人壽高級區域總監）"],
        ["14:20-15:00", "新生代團隊自主經營的關鍵要素", "李鋒（瑞眾人壽總公司資政委員，2024-2025 連續兩年達成億元總監）"],
        ["15:00-15:10", "休息", ""],
        ["15:10-15:40", "十連冠團隊的打造與精進", "拿督斯里・彭建偉（連續 15 年榮登全馬壽險組織及個人總冠軍）"],
        ["15:40-16:30", "如何增新增優", "李子豪（中國人壽廣東最年輕的區域總監）"],
        ["16:30-17:00", "以科學管理，增強團隊的凝聚力", "鄭美懿（富邦人壽資深總監）"]
      ]},
      { id: "d7", title: "DAY 7｜7/20 壓軸課程與閉幕式", rows: [
        ["08:30-09:10", "AI 時代，智行合一", "肖利華（阿里巴巴集團原副總裁）"],
        ["09:10-10:10", "通膨時代，構建財富新秩序", "林海川（CMF 大會創始人之一）"],
        ["10:10-10:20", "休息", ""],
        ["10:20-11:05", "如何打造高績效優質團隊", "羅淞元（CMF 終身會員，TMC 至尊會員）"],
        ["11:05-12:00", "以「人民的名義」，創「蠻好的人生」", "盧小美（CMF 國際保險精英圈奧委會主席，太平洋總公司累計 100 次全國銷售冠軍）"],
        ["12:00-13:30", "午餐休息", ""],
        ["13:30-14:20", "冠軍團隊的規劃與策略-隨處可見", "于忠濱（連續二十年區、直轄部全省第一）"],
        ["14:20-15:00", "100% 全線上管理助力團隊業績十倍增長", "張海燕（明亞全國連續多年雙冠軍）"],
        ["15:00-15:10", "休息", ""],
        ["15:10-16:00", "經「贏」有道，財稅無憂", "范敏逸（北京大學稅務碩士導師）"],
        ["16:00-17:00", "尋找壽險業的新質生產力", "CMF 主席團（盧小美、李江紅、葉雲燕、魏建宏、呂啟彪、吳征宇、王妮、韓綱等）"],
        ["17:00-17:30", "精彩再現，再見杭州，相約濟南——閉幕式", ""]
      ]}
    ];

    const places = [
      { type: "stay", img: image.hQingdao, name: "青島金水皇冠假日飯店", meta: "7/14-7/15 · 青島", addr: "中國山東省青島市李滄區巨峰路175-2號", desc: "第一晚住宿，近李滄商圈。" },
      { type: "stay", img: image.hJinan, name: "美悅雲禧飯店", meta: "7/15-7/21 · 濟南", addr: "山東省濟南市槐蔭區興福寺路2660號", desc: "CMF 期間住宿，近濟南西站與會展中心。" },
      { type: "food", img: image.huifeng, name: "匯豐苑（中山路大鮑島店）", meta: "DAY 2 午餐 · 青島", addr: "青島市市南區大鮑島商圈", desc: "膠東海鮮與經典魯菜。", feat: ["明檔海鮮", "蔥燒海參", "大蝦水煎包"] },
      { type: "food", img: image.taishanFood, name: "神憩賓館餐廳", meta: "DAY 3 午餐 · 泰山", addr: "泰山玉皇頂", desc: "玉皇頂附近用餐，登頂後補給。" },
      { type: "food", img: image.minghuFood, name: "明湖居魯菜館", meta: "DAY 4 午餐 · 濟南", addr: "濟南市大明湖畔", desc: "湖畔魯菜，午餐安排。" },
      { type: "food", img: image.night, name: "環聯夜市", meta: "DAY 2 晚餐自理 · 濟南", addr: "濟南市環聯夜市", desc: "夜市小吃、燒烤與飲品。", feat: ["晚餐自理", "備少量現金"] },
      { type: "food", img: image.weijing, name: "山東維景大酒店", meta: "DAY 4 晚宴 · 濟南", addr: "中國山東省濟南市歷下區縣西巷10號", desc: "CMF 晚宴地點。" },
      { type: "sight", img: image.beer, name: "青島啤酒博物館", meta: "DAY 2 · 青島", addr: "青島啤酒博物館", desc: "1903 年舊啤酒廠原址。" },
      { type: "sight", img: image.taishan, name: "泰山風景區", meta: "DAY 3 · 泰安", addr: "泰山風景區", desc: "五嶽之首，當日主行程。" },
      { type: "sight", img: image.taishanGate, name: "中天門 / 南天門", meta: "DAY 3 · 泰山", addr: "泰山中天門", desc: "泰山登山與索道重要節點。" },
      { type: "sight", img: image.taishanPeak, name: "天街 / 玉皇頂", meta: "DAY 3 · 泰山", addr: "泰山玉皇頂", desc: "山頂路線與最高點。" },
      { type: "sight", img: image.baotu, name: "趵突泉", meta: "DAY 4 · 濟南", addr: "趵突泉", desc: "濟南代表名泉。" },
      { type: "sight", img: image.wulong, name: "五龍潭公園", meta: "DAY 4 · 濟南", addr: "五龍潭公園", desc: "趵突泉旁的泉水公園。" },
      { type: "sight", img: image.furong, name: "芙蓉街", meta: "DAY 4 · 濟南", addr: "芙蓉街 濟南", desc: "老城小吃街。" },
      { type: "sight", img: image.qushui, name: "曲水亭街", meta: "DAY 4 · 濟南", addr: "曲水亭街 濟南", desc: "泉水穿街的老城巷弄。" },
      { type: "sight", img: image.daming, name: "大明湖與超然樓", meta: "DAY 4 · 濟南", addr: "大明湖超然樓", desc: "湖區與夜景地標。" },
      { type: "shop", img: image.hongyang, name: "弘陽廣場", meta: "近飯店", addr: "濟南弘陽廣場", desc: "餐飲與生活補給，步行可達。" },
      { type: "shop", img: image.henglong, name: "恆隆廣場", meta: "泉城路商圈", addr: "濟南恆隆廣場", desc: "購物、餐飲。車程約 20-30 分鐘。" }
    ];

    const checklist = [
      ["護照 / 台胞證", "效期六個月以上，影本或照片離線備份。"],
      ["行動支付", "支付寶或微信支付提前開通，綁卡前先向銀行報備。"],
      ["網路 / 漫遊 SIM", "確認可用地圖、通訊軟體與必要服務。"],
      ["人民幣現金", "夜市小攤、零錢與備用情境。"],
      ["泰山裝備", "好走鞋、薄外套、雨具，山頂溫差大。"],
      ["常備藥品", "腸胃藥、暈車藥、防曬與個人用藥。"],
      ["CMF 課程用品", "名片、筆記工具、輕便包與可充電設備。"],
      ["充電器 / 行動電源", "中國多為兩腳扁插，可備轉接頭。"]
    ];

    const roster = [
      [1,"許智雄","高天通訊處"],[2,"謝政男","高天通訊處"],[3,"何宜家","高天通訊處"],[4,"蕭宇晴","高天通訊處"],
      [5,"蕭如菁","高天通訊處"],[6,"何宜庭","高天通訊處"],[7,"戴東志","高天通訊處"],[8,"詹政杰","高天通訊處"],
      [9,"吳睿綝","高天通訊處"],[10,"陳懷柔","高天通訊處"],[11,"黃柏瑞","高貴通訊處"],[12,"陳其呈","高貴通訊處"],
      [13,"陳武均","富予二通訊處"],[14,"陳尚禾","富予二通訊處"],[15,"陳昶聿","富予二通訊處"],[16,"宋里安","富予二通訊處"],
      [17,"賴芯甯","富予二通訊處"],[18,"高泰琳","富予二通訊處"],[19,"許瓊云","富予二通訊處"],[20,"王姵慈","富吳通訊處"],
      [21,"賴含怡","富則通訊處"],[22,"吳佩姗","富吳通訊處"],[23,"王鄆郅","富吳通訊處"],[24,"廖冠傑","富吳通訊處"],
      [25,"王騌捷","富吳通訊處"],[26,"黃金隆","富吳通訊處"],[27,"呂顏伃","富吳通訊處"],[28,"陳怡諳","富吳通訊處"],
      [29,"彭莉柔","富吳通訊處"],[30,"陳盈蓁","富吳通訊處"],[31,"周易慶","富吳通訊處"],[32,"林建璋","富吳通訊處"],
      [33,"李奕寬","富吳通訊處"],[34,"黃彥融","富吳通訊處"],[35,"吳修毅","富吳通訊處"],[36,"李孟珊","富則通訊處"],
      [37,"鄭丞哲","富吳通訊處"],[38,"謝宇軒","富吳通訊處"],[39,"戴孜安","富吳通訊處"],[40,"徐瀚","富吳通訊處"],
      [41,"許嘉晉","富則通訊處"],[42,"侯宏詣","富則通訊處"],[43,"簡宏鈞","富能通訊處"],[44,"王昱文","富則通訊處"],
      [45,"管卓鈞","富能通訊處"],[46,"林桂安","富則通訊處"],[47,"簡姵萱","富能通訊處"],[48,"潘韻竹","富則通訊處"],
      [49,"傅佳旻","富占通訊處"],[50,"徐維鈴","富占通訊處"],[51,"鍾怡婷","富占通訊處"],[52,"林宜潔","富占通訊處"],
      [53,"顏明儀","富則通訊處"],[54,"王思嵐","富則通訊處"],[55,"吳品萱","富則通訊處"],[56,"林芳誼","富則通訊處"],
      [57,"余妏珊","富則通訊處"],[58,"余若馨","富則通訊處"],[59,"吳沛錞","富則通訊處"],[60,"李婕詠","富則通訊處"],
      [61,"張芫菁","富則通訊處"],[62,"黃馨葦","富則通訊處"],[63,"蔡承遠","富則通訊處"],[64,"張國興","富則通訊處"],
      [65,"高智源","富則通訊處"],[66,"王銘宏","富則通訊處"],[67,"洪敬忠","富則六通訊處"],[68,"廖宇翔","富則六通訊處"],
      [69,"張祐珮","富后通訊處"],[70,"施昕余","中銘通訊處"],[71,"吳皓誠","富亨通訊處"],[72,"張家瑋","富亨通訊處"],
      [73,"馬英傑","富亨通訊處"],[74,"林宏威","富亨通訊處"],[75,"陳怡萍","富亨通訊處"],[76,"廖家慧","富亨通訊處"],
      [77,"陳龍生","富鑽通訊處"],[78,"葉金玲","富鑽通訊處"],[79,"吳士侃","富北通訊處"],[80,"林瑋","富北通訊處"],
      [81,"曾翊雯","中沐通訊處"],[82,"王原軍","中沐通訊處"],[83,"鄭占禮","富占通訊處"],[84,"孫振文","富北通訊處"],
      [85,"邱仲恩","富吳通訊處"],[86,"范毓斌","富占通訊處"]
    ];

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => [...document.querySelectorAll(selector)];
    const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
    const appPages = ["overview", "itinerary", "places", "course", "room", "prep"];

    function normalized(text) {
      return String(text).toLowerCase().replace(/\s+/g, "");
    }

    function showToast(text) {
      const toast = $("#toast");
      toast.textContent = text;
      toast.classList.add("show");
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove("show"), 1500);
    }

    function copyText(text) {
      const done = () => showToast("已複製地址");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
      } else {
        fallback();
      }
      function fallback() {
        const area = document.createElement("textarea");
        area.value = text;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        done();
      }
    }

    function mapUrl(query) {
      return `https://uri.amap.com/search?keyword=${encodeURIComponent(query)}`;
    }

    function updateCountdown() {
      const now = new Date();
      const dayMs = 86400000;
      const toStart = Math.ceil((tripStart - now) / dayMs);
      const fromStart = Math.floor((now - tripStart) / dayMs) + 1;
      if (toStart > 0) {
        $("#countdown").textContent = `${toStart} 天`;
        $("#todayHint").textContent = `距離出發 ${toStart} 天。`;
      } else if (now <= tripEnd) {
        $("#countdown").textContent = `第 ${fromStart} 天`;
        $("#todayHint").textContent = `今日第 ${fromStart} 天。`;
      } else {
        $("#countdown").textContent = "已完成";
        $("#todayHint").textContent = "查看行程與課程資料。";
      }
    }

    function renderDays() {
      $("#dayList").innerHTML = days.map((day) => {
        const search = normalized([day.no, day.date, day.title, day.tone, ...day.tags, ...day.items.flat()].join(" "));
        const items = day.items.map(([time, title, desc]) => `
          <div class="segment">
            <time>${esc(time)}</time>
            <div><b>${esc(title)}</b><span>${esc(desc)}</span></div>
          </div>
        `).join("");
        const tagText = day.tags.includes("course") ? "課程日" : day.tags.includes("move") ? "移動日" : "城市日";
        return `
          <article class="day-card reveal" data-tags="${esc(day.tags.join(" "))}" data-search="${esc(search)}">
            <div class="day-media">
              <img src="${esc(day.img)}" alt="${esc(day.title)}" width="1200" height="700" loading="lazy" decoding="async">
              <div class="day-stamp"><b>${esc(day.no)} · ${esc(day.date)}</b><span>${esc(tagText)}</span></div>
            </div>
            <div class="day-body">
              <div class="day-title-row">
                <div><h3>${esc(day.title)}</h3><p>${esc(day.tone)}</p></div>
                <span class="chip">${esc(day.date.slice(5))}</span>
              </div>
              <div class="segments">${items}</div>
            </div>
          </article>
        `;
      }).join("");
    }

    function filterDays() {
      const query = normalized($("#daySearch").value);
      const active = $("#dayFilters .active").dataset.filter;
      let visible = 0;
      $$(".day-card").forEach((card) => {
        const tagHit = active === "all" || card.dataset.tags.includes(active);
        const queryHit = !query || card.dataset.search.includes(query);
        const show = tagHit && queryHit;
        card.classList.toggle("hidden", !show);
        if (show) visible += 1;
      });
      $("#dayEmpty").hidden = visible > 0;
    }

    function renderCourses() {
      $("#courseList").innerHTML = courses.map((day, index) => {
        const open = index === 0;
        const rows = day.rows.map((row) => {
          const search = normalized(row.join(" "));
          return `
            <div class="course-row" data-search="${esc(search)}">
              <div class="course-time">${esc(row[0])}</div>
              <div>
                <div class="course-topic">${esc(row[1])}</div>
                ${row[2] ? `<div class="course-speaker">${esc(row[2])}</div>` : ""}
              </div>
            </div>
          `;
        }).join("");
        return `
          <article class="course-day reveal" data-course="${esc(day.id)}">
            <button class="course-head" type="button" aria-expanded="${open ? "true" : "false"}">
              <span>${esc(day.title)}</span><span>${open ? "收合" : "展開"}</span>
            </button>
            <div class="course-rows" ${open ? "" : 'style="display:none"'}>${rows}</div>
          </article>
        `;
      }).join("");
      $$(".course-head").forEach((button) => {
        button.addEventListener("click", () => {
          const rows = button.nextElementSibling;
          const open = rows.style.display !== "none";
          rows.style.display = open ? "none" : "block";
          button.setAttribute("aria-expanded", String(!open));
          button.lastElementChild.textContent = open ? "展開" : "收合";
        });
      });
    }

    function filterCourses() {
      const query = normalized($("#courseSearch").value);
      const active = $("#courseFilters .active").dataset.course;
      let visible = 0;
      $$(".course-day").forEach((day) => {
        const dateHit = active === "all" || day.dataset.course === active;
        let hasRow = false;
        day.querySelectorAll(".course-row").forEach((row) => {
          const rowHit = !query || row.dataset.search.includes(query);
          row.classList.toggle("hidden", !rowHit);
          if (rowHit) hasRow = true;
        });
        const show = dateHit && hasRow;
        day.classList.toggle("hidden", !show);
        if (show) visible += 1;
        if (query) {
          const head = day.querySelector(".course-head");
          day.querySelector(".course-rows").style.display = "block";
          head.setAttribute("aria-expanded", "true");
          head.lastElementChild.textContent = "收合";
        }
      });
      $("#courseEmpty").hidden = visible > 0;
    }

    function renderPlaces() {
      const destinationPlaces = places.filter((place) => place.type !== "stay");
      $("#placeList").innerHTML = destinationPlaces.map((place) => {
        const search = normalized([place.type, place.name, place.meta, place.addr, place.desc, ...(place.feat || [])].join(" "));
        const features = place.feat ? `<div class="features">${place.feat.map((item) => `<span>${esc(item)}</span>`).join("")}</div>` : "";
        return `
          <article class="data-card reveal" data-place="${esc(place.type)}" data-search="${esc(search)}">
            <img src="${esc(place.img)}" alt="${esc(place.name)}" width="1200" height="700" loading="lazy" decoding="async">
            <div class="data-card-body">
              <h3>${esc(place.name)}</h3>
              <div class="meta">${esc(place.meta)}</div>
              <p>${esc(place.desc)}</p>
              ${features}
              <div class="addr">
                <span>${esc(place.addr)}</span>
                <button class="btn small jade" type="button" data-copy="${esc(place.addr)}">複製</button>
                <a class="btn small ghost" href="${esc(mapUrl(`${place.name} ${place.addr}`))}" target="_blank" rel="noopener">地圖</a>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function renderHotels() {
      const hotels = places.filter((place) => place.type === "stay");
      $("#hotelList").innerHTML = hotels.map((place) => {
        const search = normalized([place.name, place.meta, place.addr, place.desc].join(" "));
        return `
          <article class="data-card reveal" data-search="${esc(search)}">
            <img src="${esc(place.img)}" alt="${esc(place.name)}" width="1200" height="700" loading="lazy" decoding="async">
            <div class="data-card-body">
              <h3>${esc(place.name)}</h3>
              <div class="meta">${esc(place.meta)}</div>
              <p>${esc(place.desc)}</p>
              <div class="addr">
                <span>${esc(place.addr)}</span>
                <button class="btn small jade" type="button" data-copy="${esc(place.addr)}">複製</button>
                <a class="btn small ghost" href="${esc(mapUrl(`${place.name} ${place.addr}`))}" target="_blank" rel="noopener">地圖</a>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function bindCopyButtons() {
      $$("[data-copy]").forEach((button) => button.addEventListener("click", () => copyText(button.dataset.copy)));
    }

    function filterPlaces() {
      const query = normalized($("#placeSearch").value);
      const active = $("#placeFilters .active").dataset.place;
      let visible = 0;
      $$("#placeList .data-card").forEach((card) => {
        const typeHit = active === "all" || card.dataset.place === active;
        const queryHit = !query || card.dataset.search.includes(query);
        const show = typeHit && queryHit;
        card.classList.toggle("hidden", !show);
        if (show) visible += 1;
      });
      $("#placeEmpty").hidden = visible > 0;
    }

    function renderChecklist() {
      $("#checkList").innerHTML = checklist.map(([title, desc], index) => `
        <label class="check-item">
          <input type="checkbox" data-key="cmf-check-${index}">
          <div><b>${esc(title)}</b><span>${esc(desc)}</span></div>
        </label>
      `).join("");
      $$("#checkList input").forEach((input) => {
        try {
          input.checked = localStorage.getItem(input.dataset.key) === "1";
        } catch (error) {}
        input.addEventListener("change", () => {
          try {
            localStorage.setItem(input.dataset.key, input.checked ? "1" : "0");
          } catch (error) {}
        });
      });
    }

    function renderRosterResult(person) {
      if (!person) {
        $("#rosterResult").innerHTML = `<div class="result-name">找不到資料</div><div>請確認姓名是否與名單一致，或只輸入其中一個字查詢。</div>`;
        return;
      }
      $("#rosterResult").innerHTML = `
        <div class="result-name">${esc(person[1])}</div>
        <div>${esc(person[2])} · 編號 ${esc(person[0])}</div>
        <div class="result-line"><span>青島</span><span>青島金水皇冠假日飯店</span></div>
        <div class="result-line"><span>濟南</span><span>美悅雲禧飯店</span></div>
      `;
    }

    function updateRoster() {
      const query = $("#nameSearch").value.trim();
      const matches = query ? roster.filter((person) => person[1].includes(query) || person[2].includes(query)).slice(0, 8) : [];
      $("#suggestions").innerHTML = matches.map((person) => `<button type="button" data-name="${esc(person[1])}">${esc(person[1])}<span> · ${esc(person[2].slice(0, 2))}</span></button>`).join("");
      $$("#suggestions button").forEach((button) => {
        button.addEventListener("click", () => {
          $("#nameSearch").value = button.dataset.name;
          $("#suggestions").innerHTML = "";
          renderRosterResult(roster.find((person) => person[1] === button.dataset.name));
        });
      });
      const exact = roster.find((person) => person[1] === query);
      if (exact) renderRosterResult(exact);
      if (!query) {
        $("#rosterResult").innerHTML = `<div class="result-name">尚未查詢</div><div>輸入姓名查編號、單位、飯店。</div>`;
      }
    }

    function bindSegmented(containerId, callback) {
      $$(containerId + " button").forEach((button) => {
        button.addEventListener("click", () => {
          $$(containerId + " button").forEach((item) => item.classList.remove("active"));
          button.classList.add("active");
          callback();
          animateActivePage();
        });
      });
    }

    function setupScrollEffects() {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      }, { threshold: 0.12 });
      $$(".reveal").forEach((node) => revealObserver.observe(node));
    }

    function pageForHash(hash) {
      const id = String(hash || "").replace("#", "");
      if (appPages.includes(id)) return id;
      if (id === "top") return "overview";
      return "overview";
    }

    function updateTopbar(active) {
      $("#prepShortcut").classList.toggle("is-active", active === "prep");
    }

    function animateActivePage() {
      const page = $(".app-page.active:not(.hero)") || $(".app-page.active");
      if (!page) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const nodes = [...page.querySelectorAll(".reveal")];
      nodes.forEach((node, index) => {
        node.style.transitionDelay = reduceMotion ? "0ms" : `${Math.min(index * 35, 210)}ms`;
        node.classList.remove("show");
        requestAnimationFrame(() => node.classList.add("show"));
      });
    }

    function setActivePage(page, updateHash = true) {
      const active = pageForHash("#" + page);
      $$("[data-page]").forEach((node) => node.classList.toggle("active", node.dataset.page === active));
      $$("#bottomTabs .app-tab").forEach((button) => {
        const selected = button.dataset.tab === active;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-selected", String(selected));
      });
      updateTopbar(active);
      animateActivePage();
      window.scrollTo({ top: 0, behavior: "auto" });
      if (updateHash && location.hash !== "#" + active) history.replaceState(null, "", "#" + active);
    }

    function setupTabs() {
      $$("#bottomTabs .app-tab").forEach((button) => {
        button.addEventListener("click", () => setActivePage(button.dataset.tab));
      });
      $("#prepShortcut").addEventListener("click", () => setActivePage("prep"));
      document.addEventListener("click", (event) => {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const page = pageForHash(link.getAttribute("href"));
        if (!page) return;
        event.preventDefault();
        setActivePage(page);
      });
      window.addEventListener("hashchange", () => setActivePage(pageForHash(location.hash), false));
      setActivePage(pageForHash(location.hash || "#overview"), false);
    }

    updateCountdown();
    renderDays();
    renderCourses();
    renderPlaces();
    renderHotels();
    bindCopyButtons();
    renderChecklist();
    setupScrollEffects();
    setupTabs();

    $("#daySearch").addEventListener("input", filterDays);
    $("#courseSearch").addEventListener("input", filterCourses);
    $("#placeSearch").addEventListener("input", filterPlaces);
    $("#nameSearch").addEventListener("input", updateRoster);
    bindSegmented("#dayFilters", filterDays);
    bindSegmented("#courseFilters", filterCourses);
    bindSegmented("#placeFilters", filterPlaces);
