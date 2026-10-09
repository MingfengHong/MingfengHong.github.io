// Original-language publication titles, book titles, and author lists stay intact.
(() => {
    const translations = {
        "跳到主要内容": "Skip to content",
        "主导航": "Main navigation",
        "本页目录": "On this page",
        "洪铭锋首页": "Mingfeng Hong — home",
        "打开导航菜单": "Open navigation menu",
        "关闭导航菜单": "Close navigation menu",
        "个人主页": "Portfolio",
        "首页": "Home",
        "研究成果": "Publications",
        "研究项目": "Research projects",
        "实践经历": "Experience",
        "社区作品": "Community",
        "你好，我是洪铭锋。": "Hello, I'm Mingfeng Hong.",
        "现为中国科学院大学管理科学与工程硕士研究生。": "I'm a master's student in Management Science and Engineering at the University of Chinese Academy of Sciences.",
        "关注科技政策与创新管理、开源创新与开源战略，以及开源社区治理。": "My research focuses on science and technology policy, innovation management, open-source strategy, and community governance.",
        "开源 AI 生态": "Open-source AI",
        "创新组织": "Innovation & organizations",
        "计算社会科学": "Computational social science",
        "查看研究成果": "View publications",
        "下载简历": "Download CV",
        "小红书": "Xiaohongshu",
        "魔搭社区": "ModelScope",
        "研究关键词": "Research interests",
        "联系与社区主页": "Contact and community profiles",
        "黑发、戴眼镜、手持电脑的简笔人物插图": "A simple cartoon character with black hair, glasses, and a laptop",
        "我关心的问题": "Research interests",
        "研究方向": "Areas of interest",
        "相关项目": "Related projects",
        "研究相关页面": "Explore my research",
        "科技政策与创新管理": "Science policy & innovation",
        "关注前沿技术演进、创新平台网络与科研组织方式，连接技术趋势研判、组织机制分析和政策研究。": "I study emerging technologies, innovation networks, and research organizations, connecting technology foresight with organizational analysis and policy research.",
        "开源创新与开源战略": "Open innovation & strategy",
        "研究大模型开放策略、数字公共品与开放式创新，讨论企业战略选择与生态价值创造之间的关系。": "I examine open-source strategies for large language models, digital public goods, and the relationship between firms' strategic choices and ecosystem value creation.",
        "开源社区治理": "Community governance",
        "从多中心治理、数字劳动分工与社会信号出发，理解社区协作、贡献网络和生态韧性的形成机制。": "I explore how polycentric governance, digital labor, and social signals shape collaboration, contributor networks, and ecosystem resilience.",
        "核心成果概览": "Research at a glance",
        "篇": "papers",
        "部": "books",
        "项": "projects",
        "已发表论文": "Published papers",
        "会议论文／工作论文": "Conference & working papers",
        "参与编写的理论专著与书稿": "Co-authored books & manuscripts",
        "参与的科研／政府委托项目": "Research & commissioned projects",
        "近期代表工作": "Selected work",
        "浏览全部成果": "View all publications",
        "精选": "Featured",
        "论文": "Papers",
        "开源项目": "Open source",
        "代表工作分类": "Selected work categories",
        "从多中心治理、数字劳动分工与社会信号出发，研究开源 AI 生态中的组织代理机制。论文已完成 Technological Forecasting and Social Change 大修修回。": "Research on organizational proxies in open-source AI ecosystems through polycentric governance, digital labor, and social signaling. A major revision has been resubmitted to Technological Forecasting and Social Change.",
        "查看论文状态": "View paper status",
        "前往 GitHub": "View on GitHub",
        "学习与研究经历": "Education & background",
        "教育与实践": "Education & experience",
        "中国科学院大学 · 中国科学院科技战略咨询研究院": "University of Chinese Academy of Sciences · Institutes of Science and Development, CAS",
        "管理科学与工程硕士研究生。平均学分绩 3.95/4.00，获校级三好学生。": "Master's student in Management Science and Engineering. GPA: 3.95/4.00; university-level merit student award.",
        "西安电子科技大学 · 经济与管理学院": "Xidian University · School of Economics and Management",
        "市场营销本科，专业排名第 1；获国家奖学金、优秀毕业生标兵、优秀毕业设计等奖项。": "Bachelor's degree in Marketing, ranked first in the program. Awards include the National Scholarship, outstanding graduate honors, and an outstanding graduation thesis award.",
        "ModelScope 与 GitHub 开源社区": "ModelScope & GitHub communities",
        "共建计算社会科学板块，持续发布方法教程，并维护智能文献检索与社会科学研究 Skills 等开源工具。": "I contribute to the computational social science community, publish methods tutorials, and maintain open-source tools for literature discovery and social science research.",
        "多段研究、咨询与社区实践": "Research, consulting & community work",
        "曾在上海人工智能实验室、艾瑞咨询与和君咨询参与研究和咨询项目，也持续参与 ModelScope 社区共建与创新创业竞赛。": "My experience spans Shanghai AI Laboratory, iResearch, and Hejun Consulting, alongside ModelScope community contributions and innovation competitions.",
        "查看实践经历": "Explore my experience",
        "洪铭锋 · Mingfeng Hong": "Mingfeng Hong",
        "2 篇已发表论文": "2 published papers",
        "2 项政策研究": "2 policy studies",
        "6 篇会议／工作论文": "6 conference / working papers",
        "成果统计": "Publication overview",
        "成果筛选": "Filter publications",
        "全部成果": "All work",
        "政策研究": "Policy research",
        "会议／工作论文": "Conference / working papers",
        "已发表 · 2025": "Published · 2025",
        "导师一作": "Supervisor as first author",
        "已发表 · 2024": "Published · 2024",
        "通讯作者": "Corresponding author",
        "上报信息与政策建议": "Policy reports & recommendations",
        "刊登于农业农村部内部刊物《乡村振兴文稿》，2025": "Published in the Ministry of Agriculture and Rural Affairs' internal publication 《乡村振兴文稿》, 2025",
        "获部长批示": "Received ministerial comments",
        "政策建议，2026": "Policy recommendations, 2026",
        "会议论文与工作论文": "Conference & working papers",
        "Technological Forecasting and Social Change · Revise & Resubmit (Major Revision) 已修回": "Technological Forecasting and Social Change · Major revision resubmitted",
        "2025 中国技术未来分析论坛 TFSC Workshop；第九届清华大学公共管理青年学者论坛": "2025 China Technology Foresight Forum, TFSC Workshop; 9th Tsinghua University Young Scholars Forum in Public Administration",
        "Best Paper · 前 1%": "Best Paper · Top 1%",
        "一作": "First author",
        "中国系统工程学会信息系统工程专业委员会 2025 学术年会": "2025 Annual Conference of the Information Systems Engineering Committee, Systems Engineering Society of China",
        "准备投稿": "Preparing for submission",
        "2026 年中国科学院大学“智能经济新形态与科研新范式”经济学暑期学校": "2026 UCAS Economics Summer School on the Intelligent Economy and New Research Paradigms",
        "中国“双法”研究会网络科学分会第七届学术年会": "7th Annual Conference of the Network Science Branch, Chinese Society of Optimization, Overall Planning and Economic Mathematics",
        "《科技进步与对策》外审": "《科技进步与对策》 · Under external review",
        "外审": "Under review",
        "案例研究": "Case study",
        "2025 中国创新与企业成长学术年会": "2025 China Conference on Innovation and Enterprise Growth",
        "优秀论文": "Outstanding paper",
        "系统动力学": "System dynamics",
        "在国家社科基金、高端智库与政府委托课题中，围绕用户创新、创新平台网络、技术趋势和公共服务开展研究。": "Research on user innovation, innovation networks, technology trends, and public services through national research grants, think-tank studies, and government commissions.",
        "1 项国家社科基金项目": "1 National Social Science Fund project",
        "1 项国家高端智库重点课题": "1 national think-tank study",
        "2 项政府委托研究": "2 government-commissioned studies",
        "项目统计": "Project overview",
        "科研与委托项目": "Research & commissions",
        "理论专著与书稿": "Books & manuscripts",
        "项目经历": "Research engagements",
        "项目 01": "PROJECT 01",
        "项目 02": "PROJECT 02",
        "项目 03": "PROJECT 03",
        "项目 04": "PROJECT 04",
        "数智技术赋能下用户创新的协作模式、组织变革与公共价值研究": "Digital technologies, user innovation, and public value",
        "国家社会科学基金一般项目 · 参与者 · 2025 — 预计 2028": "National Social Science Fund general project · Contributor · 2025–2028 (expected)",
        "协助撰写课题申请书，重点负责网络创新社区场景下的用户参与与组织变革板块。": "Contributed to the grant proposal, focusing on user participation and organizational change in online innovation communities.",
        "设计普通用户与领先用户协作模式及组织边界重构的研究框架。": "Designed a research framework for collaboration between ordinary and lead users and the reconfiguration of organizational boundaries.",
        "参与构建数智技术赋能用户创新的三类场景分析体系。": "Helped develop a three-scenario framework for digitally enabled user innovation.",
        "优化创新平台网络、促进科技创新与产业创新深度融合": "Innovation platform networks and research–industry integration",
        "2025 年度国家高端智库重点课题 · 参与者 · 2025.04 — 2025.11": "2025 national high-end think-tank key study · Contributor · Apr–Nov 2025",
        "梳理 33 家国家制造业创新中心的发展现状与战略布局。": "Mapped the development and strategic positioning of 33 national manufacturing innovation centers.",
        "分析“公司 + 联盟”运行机制和中试验证平台建设的成效与结构性瓶颈。": "Analyzed company–alliance operating models and the achievements and structural bottlenecks of pilot-scale validation platforms.",
        "围绕平台网络布局、治理机制改革与跨平台协同生态参与撰写政策建议。": "Contributed policy recommendations on network design, governance reform, and cross-platform collaboration.",
        "新一轮科技革命和产业变革趋势及对我国农业农村发展影响研究": "Emerging technology and industrial transformation: implications for agriculture and rural development",
        "农业农村部发展规划司“十五五”规划前期研究 · 参与者 · 2024.07 — 2025.03": "Preparatory study for the 15th Five-Year Plan, Ministry of Agriculture and Rural Affairs · Contributor · Jul 2024–Mar 2025",
        "梳理人工智能、合成生物学、新能源等前沿技术与未来产业趋势。": "Reviewed emerging technologies and future industries, including AI, synthetic biology, and new energy.",
        "研判“十五五”主要技术方向及其向农业农村领域的渗透机制。": "Assessed technology priorities for the 15th Five-Year Plan and their pathways into agriculture and rural development.",
        "从颠覆性、移植性与扩散性三条路径分析技术诱发机制与潜在领域。": "Analyzed technology-driven change through disruption, transfer, and diffusion pathways.",
        "新时期人口发展背景下西藏自治区养老服务模式与政策研究": "Elderly care models and policies in Tibet amid demographic change",
        "西藏自治区发展和改革委员会委托课题 · 参与者 · 2024.07 — 2025.03": "Commissioned by the Tibet Development and Reform Commission · Contributor · Jul 2024–Mar 2025",
        "研究西藏养老服务模式创新与政策建议。": "Studied innovations in elderly care provision in Tibet and developed policy recommendations.",
        "构建“政府—市场—社会”多主体协同养老服务供给模式。": "Developed a collaborative service model involving government, market actors, and civil society.",
        "提出差异化群体分层分类服务方案与“十五五”期间体系优化路径。": "Proposed differentiated service models for population groups and system improvements for the 15th Five-Year Plan.",
        "广东人民出版社系列丛书": "Guangdong People's Publishing House series",
        "战略 · 理论 · 实践": "Strategy · Theory · Practice",
        "负责“历次科技革命下发达国家的现代化进程”与“科技创新与公共服务”两章。": "Wrote chapters on modernization in developed countries across technological revolutions, and on technological innovation and public services.",
        "负责“新型工业化与现代化产业体系”章节。": "Wrote the chapter on new industrialization and modern industrial systems.",
        "负责理论篇第 4-6 章与实践篇第 14-17 章，讨论开放式创新、数字公共品、社区治理与我国开源大模型生态。": "Wrote theoretical chapters 4–6 and practice chapters 14–17 on open innovation, digital public goods, community governance, and China's open-source LLM ecosystem.",
        "负责框架篇章写作，梳理 AI 基础设施在数据表征、计算架构与人机交互层面的技术瓶颈及演进路径。": "Contributed the framework chapter, examining AI infrastructure bottlenecks and development pathways in data representation, computing architectures, and human–computer interaction.",
        "科技政策 · 开源创新 · 社区治理": "Science policy · Open innovation · Community governance",
        "从产业园区与数字化咨询，到人工智能战略研究、开源社区共建与创新创业竞赛，持续把调研、分析与工具实践放到真实问题中。": "From industrial-park and digital consulting to AI strategy, open-source communities, and entrepreneurship, I apply research, analysis, and tools to real-world problems.",
        "实习经历": "Internships",
        "社区实践": "Community work",
        "竞赛经历": "Competitions & ventures",
        "上海人工智能实验室 · 战略研究中心": "Shanghai AI Laboratory · Strategic Research Center",
        "科研类实习生": "Research Intern",
        "开源创新与 AGI for Science 书稿": "Open innovation & AGI for Science manuscripts",
        "参与《开放的力量：大模型时代的开源创新范式》《AGI for Science 的基础能力建设》等书稿撰写，围绕开源大模型架构、组织与产业生态，以及 AGI4S 的数据—计算—创新者基础能力梳理研究框架。": "Contributed to manuscripts on open innovation in the LLM era and foundational capabilities for AGI for Science. Developed research frameworks around open-source model architectures, organizational and industrial ecosystems, and AGI4S capabilities in data, computing, and innovators.",
        "虚拟科研组织仿真系统": "Virtual research organization simulation",
        "参与设计基于 Mesa、TinyTroupe 与 LangGraph 的虚拟科研组织仿真系统，模拟文献阅读、选题、实验设计、数据验证、写作与同行评审等环节，对比有组织科研与自由探索模式的科研组织绩效差异。": "Helped design a simulation system using Mesa, TinyTroupe, and LangGraph. It models literature review, topic selection, experimental design, data validation, writing, and peer review to compare organized research with independent exploration.",
        "战略研判 Agent 与开源情报分析": "Strategic foresight agents & open-source intelligence",
        "参与战略研判 Agent 开发，设计数据同步、弱信号筛选、语义关联与报告生成流程，接入 RSS/API、GitHub、arXiv 与新闻等来源，开展大模型前沿技术开源情报分析并参与科技竞争相关政策建议撰写。": "Contributed to a strategic foresight agent, designing data synchronization, weak-signal screening, semantic linking, and report generation across RSS/API feeds, GitHub, arXiv, and news. Analyzed emerging LLM technologies and contributed policy recommendations on technological competition.",
        "艾瑞咨询 · 数字化咨询业务部": "iResearch · Digital Consulting",
        "专业咨询实习生": "Consulting Intern",
        "中国电信研究院产数业务调研": "Industrial digitalization research for China Telecom Research Institute",
        "参与重点企业产数业务规模化发展策略路径调研，参与专家访谈，梳理数字经济发展脉络、政策规划、市场规模、供需驱动与投融资趋势；参与或独立完成数字化发展策略分析、产数市场发展趋势及重点企业调查报告的撰写，将公开资料、专家访谈与企业案例整理为市场判断、竞争分析和策略建议。": "Researched strategies for scaling enterprise industrial digitalization businesses and participated in expert interviews. Examined digital-economy development, policy, market size, supply and demand, and investment trends. Co-authored or independently prepared strategy, market-trend, and company reports, turning desk research, interviews, and cases into market assessments and recommendations.",
        "云服务与数字能力厂商研究": "Cloud services & digital capability providers",
        "围绕基础云服务、数字能力、系统集成、工业互联网与运营商 ICT 标品等方向开展案头研究，分析阿里云、华为云、海康威视、科大讯飞、太极股份、数字政通、平安科技等企业的产品、组织、生态与行业策略。": "Conducted desk research on cloud infrastructure, digital capabilities, systems integration, industrial internet, and standardized telecom ICT products. Analyzed the products, organizations, ecosystems, and industry strategies of Alibaba Cloud, Huawei Cloud, Hikvision, iFLYTEK, Taiji, eGOVA, and Ping An Technology.",
        "北京和君咨询有限公司 · 产业园区事业部": "Hejun Consulting · Industrial Parks Division",
        "咨询助理": "Consulting Assistant",
        "中关村 IC PARK 园区发展项目": "Zhongguancun IC PARK development study",
        "通过问卷、访谈与工商登记信息查询了解 112 家企业的基本情况，调查园区 58 家企业在融资、人才、产能等 9 个方面的需求，并研究园区内 5 个产业集群的发展状况。结合期刊论文、峰会记录和新闻采访等公开资料研究集成电路政策趋势，梳理 15 个省级行政区的产业链布局及地方产业支持政策，参与撰写《中关村集成电路设计产业园发展状况调查报告》。": "Profiled 112 companies through surveys, interviews, and registration records. Assessed 58 firms' needs across nine areas and reviewed five industrial clusters. Mapped integrated-circuit value chains and support policies in 15 provincial-level regions, contributing to a development report for Zhongguancun IC PARK.",
        "兆丰产业基地细胞基因工程产业定位与招商咨询项目": "Cell and gene industry positioning for Zhaofeng Industrial Base",
        "通过专家访谈研究药品上市与医疗器械注册等新政策对产业引进的影响，对生物医疗 9 个细分领域、38 类产业按照园区匹配度与发展前景进行排序；调研顺义周边 3 个生物医药产业园区，并为园区招商制定品牌推广方案。": "Used expert interviews to assess how pharmaceutical and medical-device registration policies affect investment attraction. Ranked 38 industry categories across nine biomedical segments by fit and prospects, studied three nearby biomedical parks, and developed a branding plan.",
        "持续参与": "Ongoing",
        "ModelScope · 魔搭社区": "ModelScope Community",
        "开源社区共建者": "Open-source Community Contributor",
        "社区内容共建": "Community resources & tutorials",
        "参与计算社会科学板块共建，整理 AI 辅助科研、方法教程与工具资源，持续把研究方法转化为社区可复用的实践内容。": "Contribute to ModelScope's computational social science section, curating AI-assisted research resources, methods tutorials, and tools that make research practices reusable.",
        "科研工作流开放": "Open research workflows",
        "围绕 PaperSeek、Claude Skill 与 BERT 等主题分享科研工作流，连接开源工具、方法教学与研究者社区反馈。": "Share workflows around PaperSeek, Claude Skills, and BERT, connecting open-source tools, methods teaching, and researcher feedback.",
        "以调研、产品设计、数字化转型与技术方案为主线的项目实践。": "Projects spanning market research, product design, digital transformation, and technical solutions.",
        "2021.10 — 至今": "Oct 2021 — present",
        "国家级大学生创新创业训练项目 · 项目负责人": "National Undergraduate Innovation & Entrepreneurship Program · Project Lead",
        "基于区块链的文创设计策展社区和版权确权流通平台": "Blockchain platform for creative-IP curation and rights exchange",
        "通过问卷与访谈梳理文创 IP 设计方、运营方与消费者需求，使用 KANO 模型完成需求分类与优先级排序，设计基于 NFT、智能合约的产品架构。": "Surveyed and interviewed creative-IP designers, operators, and consumers. Applied the KANO model to prioritize needs and designed a product architecture using NFTs and smart contracts.",
        "参与华为云、零数科技等校企资源对接，获陕西微软创新中心投资意向与入驻邀请；与开发人员申请软件著作权一项（登记号：2022SR0774251），中期答辩推荐位次第一。": "Engaged with Huawei Cloud and LingShu Technology; received investment interest and an incubation invitation from the Shaanxi Microsoft Innovation Center. Applied for software copyright with developers (2022SR0774251); ranked first in the midterm review recommendation order.",
        "国家级大学生创新创业训练项目 · 第二作者": "National Undergraduate Innovation & Entrepreneurship Program · Second Author",
        "区块链可信农业融资与经营交易平台": "Blockchain-enabled agricultural financing and trading",
        "利用金融融量理论与 ARIMA 时间序列分析测算农村信贷需求缺口，提出区块链、实时云计算与人工智能结合的涉农贷款增信方案。": "Estimated unmet rural credit demand using financial intermediation theory and ARIMA time-series analysis, proposing a credit-enhancement solution combining blockchain, real-time cloud computing, and AI.",
        "结合陕西三原等地田野调查，将“区块链 + 增信”模式延伸至绿色信贷，探索 ESG 投资与绿色信贷尽职调查的数据服务方案。": "Drawing on fieldwork in Sanyuan, Shaanxi, and other locations, extended the blockchain-based credit-enhancement model to green credit and explored data services for ESG investment and due diligence.",
        "2022 微软 Youth-Storm 商业分析挑战赛 · 全国季军": "2022 Microsoft Youth-Storm Business Analytics Challenge · National Third Place",
        "微软产品用户增长与整合营销方案": "Microsoft product growth & integrated marketing",
        "通过问卷调查与案头分析完成产品与市场定位，细分目标用户并分析用户特征，构建“寻找需求—引导需求—引导购买”的路径。": "Used surveys and desk research to position products, segment target users, and develop a path from identifying needs to guiding demand and purchases.",
        "围绕产品属性与用户需求构建传播话语体系，分别设计线上、线下广告创意与整合营销传播方案。": "Built messaging around product attributes and user needs, developing online and offline creative concepts and an integrated marketing plan.",
        "第 8 届全国大学生能源经济学术创意大赛全国优秀奖 · 组长": "8th National College Student Energy Economics Competition · National Excellence Award · Team Lead",
        "油气行业数字化转型设计": "Digital transformation in oil & gas",
        "围绕勘探、炼化、储运与销售业务制定数字化建设目标，协助设计基于物联网、数据中台与低代码的整体方案，借鉴 Gartner 与德勤 DOT 模型构建成熟度评估指标。": "Set digitalization goals across exploration, refining, logistics, and sales. Helped design an architecture using IoT, data platforms, and low-code tools, with maturity indicators informed by Gartner and Deloitte's DOT model.",
        "以中兵华锦为例分析客户、库存、原料与生产排程问题，运用组织结构、业务流程和数据流程分析方法完成总体架构设计，并基于 BSC-AHP 法分析转型效益。": "Analyzed customer, inventory, raw-material, and scheduling challenges at North Huajin. Designed a system architecture through organizational, business-process, and data-flow analysis, and assessed transformation benefits using BSC–AHP.",
        "2022 年奥纬咨询案例分析大赛": "2022 Oliver Wyman Case Competition",
        "小鹏汽车市场进入与品牌传播策略": "XPeng market entry & brand strategy",
        "分析汽车消费趋势与 OEM 经销商、代理商、直营商渠道差异，研判新能源汽车与智能驾驶汽车的用户需求和购买趋势。": "Analyzed automotive consumption and dealer, agent, and direct-sales channels, assessing demand and purchase trends for new-energy and intelligent vehicles.",
        "梳理小鹏汽车技术、制造与充电网络优势，结合用户价值、产业价值与社会价值构建市场定位和传播话语体系。": "Assessed XPeng's technology, manufacturing, and charging-network strengths, developing positioning and messaging based on user, industry, and societal value.",
        "第 8 届“互联网+”大赛陕西省金奖 · 第三完成人": "8th Internet+ Competition · Shaanxi Gold Award · Third Contributor",
        "智慧工地安防一体化赋能者": "Integrated safety solutions for smart construction sites",
        "负责工地消防安全、塔吊监测、裂纹检测与生产排程等方向的访谈提纲设计和市场调研，研究数字孪生等概念的应用前景。": "Designed interviews and conducted market research on fire safety, tower-crane monitoring, crack detection, and production scheduling, including potential applications of digital twins.",
        "从人因工程角度阐述系统建设目标，研究目标检测算法与物联网技术并参与功能设计。": "Framed system objectives through human-factors engineering, researched object-detection and IoT technologies, and contributed to feature design.",
        "第 8 届“互联网+”大赛陕西省铜奖 · 第二完成人": "8th Internet+ Competition · Shaanxi Bronze Award · Second Contributor",
        "区块链碳排放权数据要素流通方案": "Blockchain-based carbon-asset data exchange",
        "研究 DeFi、NFT 与跨链通信，搭建碳权资产数字化交易的应用、业务与数据架构，并梳理 24 个行业温室气体排放核算方法。": "Researched DeFi, NFTs, and cross-chain communication to design application, business, and data architectures for digital carbon-asset trading. Reviewed greenhouse-gas accounting methods across 24 industries.",
        "调研多方安全计算、同态加密等隐私计算技术，设计第三方碳审计思路；对比 5 款竞品并撰写产业命题解决方案。": "Compared secure multiparty computation and homomorphic encryption for third-party carbon auditing, benchmarked five competing products, and wrote an industry problem-solving proposal.",
        "4 个开源科研项目": "4 open research projects",
        "4 个其他开源项目": "4 other open-source projects",
        "13 篇平台作品": "13 community articles",
        "社区作品概览": "Community work overview",
        "开源科研": "Research tools",
        "其他开源": "Other projects",
        "文章精选": "Selected writing",
        "开源科研项目": "Open-source research projects",
        "面向文献发现、计算社会科学与 AI 辅助科研的开放工具。": "Open tools for literature discovery, computational social science, and AI-assisted research.",
        "访问官网 ↗": "Visit website ↗",
        "访问文档站 ↗": "Read the docs ↗",
        "基于大模型意图识别与检索式扩展的智能文献发现工具": "Intelligent literature discovery powered by LLM intent recognition and query expansion",
        "PaperSeek 是面向研究者的 AI 文献检索与发现工具。输入自然语言研究问题后，它会自动生成并迭代检索式、扩展引用网络、排序候选论文，最终导出可复查的结果。": "PaperSeek is an AI-powered literature discovery tool. Starting from a research question in natural language, it generates and refines search queries, expands citation networks, ranks candidate papers, and exports results for verification.",
        "它适用于开题、文献综述、跨学科选题与日常文献追踪，让检索过程中的生成、调整与排序都清晰可见。": "Built for research proposals, literature reviews, interdisciplinary exploration, and everyday paper tracking, with transparent query generation, refinement, and ranking.",
        "PaperSeek 核心能力": "PaperSeek capabilities",
        "多源检索": "Multi-source search",
        "自适应迭代": "Adaptive iteration",
        "引用扩展": "Citation expansion",
        "可复核导出": "Verifiable exports",
        "访问 GitHub · 220+ Stars ↗": "GitHub · 220+ Stars ↗",
        "社区推荐 ↗": "Community feature ↗",
        "开源科研工具合集": "AI research tools collection",
        "作为贡献者参与汇集 AI 辅助科研的工作流、工具与实践资源。": "Contribute workflows, tools, and practical resources for AI-assisted research.",
        "社会科学研究 Skills": "Social science research Skills",
        "面向计算社会科学研究流程的可复用 Skills 与方法实践。": "Reusable Skills and methods for computational social science research workflows.",
        "研究主题驱动的每日论文雷达，结合文献库与可选 LLM 分析，自动筛选并推送值得阅读的论文。": "A daily, topic-driven paper radar combining literature databases with optional LLM analysis to select and deliver relevant research.",
        "文献订阅 · 自动推送 ↗": "Paper alerts · Automated delivery ↗",
        "其他开源项目": "Other open-source projects",
        "让 Codex / Petdex 宠物走出 Codex：导入宠物包、预览动作，并打包为跨平台独立桌宠。": "Bring Codex / Petdex pets to the desktop: import pet packs, preview animations, and package them as standalone cross-platform desktop companions.",
        "Markdown 图文海报生成器": "Markdown poster generator",
        "面向科研与学习分享的轻量海报工具，支持 Markdown、数学公式、代码高亮及图片或 PDF 导出。": "A lightweight poster tool for research and learning content, supporting Markdown, math, syntax highlighting, and image or PDF export.",
        "在线创作 · 多格式导出 ↗": "Online editor · Multi-format export ↗",
        "Markdown 极简 PDF": "Minimal Markdown to PDF",
        "基于 HTML、CSS 与 Paged.js，把技术教程转换为带目录、页眉页脚和跨页代码块的瑞士风格 PDF。": "Turn technical tutorials into Swiss-style PDFs with tables of contents, headers, footers, and multi-page code blocks using HTML, CSS, and Paged.js.",
        "学术资源分享小组件": "Research resource widget",
        "无需后端的数据驱动小组件，支持热更新、实时搜索、多维筛选与深色模式。": "A backend-free, data-driven widget with live updates, instant search, multi-dimensional filters, and dark mode.",
        "JavaScript · 零后端 ↗": "JavaScript · No backend ↗",
        "小红书精选": "From Xiaohongshu",
        "更多小红书内容": "More on Xiaohongshu",
        "小红书 · 运筹学": "Xiaohongshu · Operations research",
        "圣诞老人的物流管理": "Santa's logistics problem",
        "平安夜运筹学：圣诞老人的旅行商问题与启发式算法": "Christmas Eve operations research: the traveling salesman problem and heuristics",
        "小红书 · AI 与社会": "Xiaohongshu · AI & society",
        "爱只是一场梯度下降吗": "Is love just gradient descent?",
        "这届学术圈为什么开始用 AI 自比亲密关系中的自己？": "Why are researchers using AI metaphors to describe themselves in relationships?",
        "小红书 · 文本分析": "Xiaohongshu · Text analysis",
        "社交媒体文本数据预处理": "Preprocessing social media text",
        "如何在处理数据时保留 emoji 与 hashtag 的非语言特征": "Preserving the non-linguistic features of emoji and hashtags",
        "小红书 · ABM": "Xiaohongshu · ABM",
        "为什么模拟社会是可能的": "Why simulating society is possible",
        "从谢林实验讲起，聊聊涌现、仿真与 ABM 建模": "From Schelling's model to emergence, simulation, and agent-based modeling",
        "小红书 · 质性研究": "Xiaohongshu · Qualitative research",
        "质性分析工具 NVivo 入门指南": "Getting started with NVivo",
        "一个强大的质性数据分析软件": "An introduction to a powerful qualitative data analysis tool",
        "小红书 · 随笔": "Xiaohongshu · Notes",
        "2026，愿你拥有马尔可夫性质的勇气": "2026: wishing you the courage of the Markov property",
        "写在除夕夜：汤圆的 2026 新年寄语": "A Lunar New Year's Eve message from Tangyuan",
        "魔搭精选": "From ModelScope",
        "更多魔搭内容": "More on ModelScope",
        "魔搭 · 开源工作流": "ModelScope · Open workflows",
        "我开源了自己的文献检索工作流：PaperSeek": "I open-sourced my literature search workflow: PaperSeek",
        "魔搭 · Claude Skill": "ModelScope · Claude Skills",
        "手把手教你构建计算社会科学科研工作流：从零打造 Claude Skill 完整指南": "Building computational social science workflows: a complete guide to Claude Skills",
        "魔搭 · BERT": "ModelScope · BERT",
        "BERT for Computational Social Scientists：从文本表示到社会科学测量": "BERT for Computational Social Scientists: from text representations to social science measurement",
        "AI 学术沙龙活动回顾": "AI research salon",
        "活动回顾 · 公众号": "Event recap · WeChat",
        "AI 学术沙龙：六个不同学科的人，怎么用 Agent 做科研": "How researchers from six disciplines use agents in their work",
        "跨学科研究者共同分享与 Agent 协作开展科研的实践经验。": "Researchers from different disciplines share practical experiences of working with AI agents.",
        "知乎精选": "From Zhihu",
        "知乎 · 创新经济学": "Zhihu · Innovation economics",
        "2025 年诺贝尔经济学奖授予创新驱动型经济增长，技术进步如何帮助经济成长？": "The 2025 Nobel Prize in Economics and innovation-driven growth: how does technological progress support economic growth?",
        "公众号精选": "From WeChat",
        "Management Science 论文解读": "Management Science · Paper discussion",
        "技术追赶中的交换：微软以自研换开源，得到了什么？": "Trading in technological catch-up: what did Microsoft gain by exchanging in-house development for open source?",
        "MISQ 论文解读": "MISQ · Paper discussion",
        "拥抱开放还是制造壁垒？竞争动态如何重塑软件企业的开源策略": "Openness or barriers? How competitive dynamics reshape software firms' open-source strategies",
        "面向科研工作流的开源文献发现工具，支持自然语言检索、引用扩展与结果导出。": "An open-source literature discovery tool for research workflows, with natural-language search, citation expansion, and result export.",
        "围绕开源创新、科技政策、数字技术生态与组织治理展开的论文和政策研究。作者列表中的 * 代表通讯作者。": "Papers and policy research on open innovation, science policy, digital ecosystems, and organizational governance. * denotes the corresponding author.",
        "我把研究中用到的方法写成工具，也把探索中的问题与经验分享给社区。": "I turn research methods into open tools and share questions, discoveries, and practical lessons with the community.",
        "关于创作、阅读和日常效率的一些小工具。": "Small tools for creating, reading, and everyday productivity.",
        "PaperSeek · 开源科研工具": "PaperSeek · Open-source research tool"
    };
    const pageMetadata = {
        'index.html': {
            zh: {
                title: '洪铭锋 Mingfeng Hong',
                description: '洪铭锋的个人学术主页，研究科技政策与创新管理、开源创新与开源社区治理。',
                ogDescription: '科技政策、开源创新与开源社区治理研究者。'
            },
            en: {
                title: 'Mingfeng Hong · Researcher in Open-Source Innovation',
                description: 'Mingfeng Hong’s academic homepage: science and technology policy, innovation management, open-source innovation, and community governance.',
                ogDescription: 'Researcher in science and technology policy, open-source innovation, and open-source community governance.'
            }
        },
        'publications.html': {
            zh: { title: '研究成果 · 洪铭锋 Mingfeng Hong', description: '洪铭锋的已发表论文、政策建议、会议论文与工作论文。', ogDescription: '已发表论文、政策建议、会议论文与工作论文。' },
            en: { title: 'Publications · Mingfeng Hong', description: 'Published papers, policy recommendations, conference papers, and working papers by Mingfeng Hong.', ogDescription: 'Published papers, policy recommendations, conference papers, and working papers.' }
        },
        'projects.html': {
            zh: { title: '研究项目 · 洪铭锋 Mingfeng Hong', description: '洪铭锋参与的科研项目与研究经历。', ogDescription: '国家社科基金、高端智库与政府委托课题中的研究经历。' },
            en: { title: 'Research Projects · Mingfeng Hong', description: 'Research projects and project experience of Mingfeng Hong.', ogDescription: 'Research experience across national funding, high-level think tank, and government-commissioned projects.' }
        },
        'internships.html': {
            zh: { title: '实践经历 · 洪铭锋 Mingfeng Hong', description: '洪铭锋在上海人工智能实验室、艾瑞咨询、和君咨询以及开源社区的实践经历。', ogDescription: '人工智能战略研究、数字化咨询、产业园区咨询与开源社区实践。' },
            en: { title: 'Experience · Mingfeng Hong', description: 'Mingfeng Hong’s experience at Shanghai AI Laboratory, iResearch, Hejun Consulting, and open-source communities.', ogDescription: 'AI strategy research, digital consulting, industrial-park consulting, and open-source community practice.' }
        },
        'portfolio.html': {
            zh: { title: '社区作品 · 洪铭锋 Mingfeng Hong', description: '洪铭锋的开源科研工具、其他开源项目与跨平台社区作品精选。', ogDescription: '开源科研项目、其他开源项目，以及发布于小红书、魔搭、知乎与公众号的社区作品。' },
            en: { title: 'Community Work · Mingfeng Hong', description: 'Open-source research tools, side projects, and selected cross-platform work by Mingfeng Hong.', ogDescription: 'Open-source research projects, other open-source projects, and selected work on Xiaohongshu, ModelScope, Zhihu, and WeChat.' }
        }
    };
    const storageKey = 'mingfeng-site-language';
    let locale = 'en';
    try {
        const saved = localStorage.getItem(storageKey) || localStorage.getItem('portfolio-language');
        if (saved === 'zh' || saved === 'en') locale = saved;
    } catch {
        // The switch still works when browser storage is unavailable.
    }

    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('language-toggle');
        const textEntries = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement.closest('script, style, [data-no-i18n], [data-paper-title], .pub-title, .pub-authors, .book-card h3, #language-toggle')) continue;
            const key = node.textContent.trim();
            if (Object.hasOwn(translations, key)) {
                textEntries.push({ node, original: node.textContent, key });
            }
        }

        const attributeEntries = [];
        document.querySelectorAll('[aria-label], [alt]').forEach((element) => {
            if (element.id === 'language-toggle' || element.id === 'nav-toggle') return;
            ['aria-label', 'alt'].forEach((attribute) => {
                const original = element.getAttribute(attribute);
                if (Object.hasOwn(translations, original)) {
                    attributeEntries.push({ element, attribute, original });
                }
            });
        });

        const applyLanguage = () => {
            document.documentElement.lang = locale === 'en' ? 'en' : 'zh-CN';
            document.documentElement.dataset.language = locale;
            textEntries.forEach(({ node, original, key }) => {
                node.textContent = locale === 'en' ? original.replace(key, () => translations[key]) : original;
            });
            attributeEntries.forEach(({ element, attribute, original }) => {
                element.setAttribute(attribute, locale === 'en' ? translations[original] : original);
            });
            const pageName = location.pathname.split('/').pop() || 'index.html';
            const metadata = pageMetadata[pageName]?.[locale];
            if (metadata) {
                document.title = metadata.title;
                const values = [
                    ['meta[name="description"]', metadata.description],
                    ['meta[property="og:title"]', metadata.title],
                    ['meta[property="og:description"]', metadata.ogDescription]
                ];
                values.forEach(([selector, value]) => document.querySelector(selector)?.setAttribute('content', value));
            }
            document.querySelectorAll('[data-paper-title]').forEach((title) => {
                title.querySelector('.pub-title-translation')?.remove();
                if (title.dataset.paperLang === locale) return;
                const translation = title.dataset[locale === 'en' ? 'titleEn' : 'titleZh'];
                if (!translation) return;
                const caption = document.createElement('small');
                caption.className = 'pub-title-translation';
                caption.lang = locale === 'en' ? 'en' : 'zh-CN';
                caption.textContent = translation;
                title.appendChild(caption);
            });
            toggle.dataset.language = locale;
            toggle.setAttribute('aria-label', locale === 'en' ? '切换为中文' : 'Switch to English');
            toggle.setAttribute('title', locale === 'en' ? '切换为中文' : 'Switch to English');
            const menuToggle = document.getElementById('nav-toggle');
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-label', locale === 'en'
                ? (expanded ? 'Close navigation menu' : 'Open navigation menu')
                : (expanded ? '关闭导航菜单' : '打开导航菜单'));
            window.dispatchEvent(new CustomEvent('site:languagechange', { detail: { language: locale } }));
        };

        const setLanguage = (language, persist = true) => {
            locale = language === 'en' ? 'en' : 'zh';
            if (persist) {
                try {
                    localStorage.setItem(storageKey, locale);
                } catch {
                    // Language changes remain available for this page.
                }
            }
            applyLanguage();
        };
        window.siteI18n = {
            get language() { return locale; },
            setLanguage,
            t(key, language = locale) { return language === 'en' ? translations[key] || key : key; }
        };
        toggle.addEventListener('click', () => setLanguage(locale === 'zh' ? 'en' : 'zh'));
        applyLanguage();
    });
})();
