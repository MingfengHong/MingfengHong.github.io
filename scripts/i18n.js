(() => {
    const STORAGE_KEY = 'mingfeng-site-language';
    const supportedLanguages = ['zh', 'en'];

    const translations = {
        // Shared navigation and interface
        '跳到主要内容': 'Skip to main content',
        '首页': 'Home',
        '研究成果': 'Publications',
        '研究项目': 'Research Projects',
        '实践经历': 'Experience',
        '社区作品': 'Community Work',
        '下载简历': 'Download CV',
        '打开导航菜单': 'Open navigation menu',
        '关闭导航菜单': 'Close navigation menu',
        '主导航': 'Main navigation',
        '洪铭锋首页': "Mingfeng Hong's homepage",
        '洪铭锋的个人照片': 'Portrait of Mingfeng Hong',
        '语言选择': 'Language selection',
        '中文': '中文',

        // Home
        '现为中国科学院大学管理科学与工程硕士研究生，关注科技政策与创新管理、开源创新与开源战略，以及开源社区治理。': 'I am a master’s student in Management Science and Engineering at the University of Chinese Academy of Sciences. My research focuses on science and technology policy, innovation management, open-source innovation and strategy, and open-source community governance.',
        '开源 AI 生态': 'Open-source AI ecosystems',
        '创新组织': 'Innovation organization',
        '计算社会科学': 'Computational social science',
        '查看研究成果': 'View publications',
        '小红书': 'Xiaohongshu',
        '魔搭社区': 'ModelScope',
        'ModelScope · 魔搭社区': 'ModelScope Community',
        '联系与社区主页': 'Contact and community profiles',
        '研究关键词': 'Research keywords',
        '开放研究 · 共享方法': 'Open research · Shared methods',
        '科技政策 × 开源创新': 'Science policy × Open-source innovation',
        '核心成果概览': 'Research at a glance',
        '聚焦研究、写作与社区共建，用公开成果呈现正在推进的工作。': 'Research, writing, and community building—made visible through work shared in the open.',
        '篇': 'papers',
        '部': 'books',
        '项': 'projects',
        '已发表论文': 'Published papers',
        '会议论文／工作论文': 'Conference & working papers',
        '参与编写的理论专著与书稿': 'Books and manuscripts co-authored',
        '参与的科研／政府委托项目': 'Research & commissioned projects',
        '我关心的问题': 'Research interests',
        '科技政策与创新管理': 'Science & technology policy and innovation management',
        '关注前沿技术演进、创新平台网络与科研组织方式，连接技术趋势研判、组织机制分析和政策研究。': 'I study emerging technologies, innovation-platform networks, and the organization of research, connecting technology foresight with organizational analysis and policy research.',
        '开源创新与开源战略': 'Open-source innovation and strategy',
        '研究大模型开放策略、数字公共品与开放式创新，讨论企业战略选择与生态价值创造之间的关系。': 'I examine open strategies for large language models, digital public goods, and open innovation, with a focus on how firm strategy shapes ecosystem value creation.',
        '开源社区治理': 'Open-source community governance',
        '从多中心治理、数字劳动分工与社会信号出发，理解社区协作、贡献网络和生态韧性的形成机制。': 'Drawing on polycentric governance, digital division of labor, and social signaling, I explore how collaboration, contribution networks, and ecosystem resilience emerge.',
        '学习与研究经历': 'Education and research',
        '中国科学院大学 · 中国科学院科技战略咨询研究院': 'University of Chinese Academy of Sciences · Institutes of Science and Development, CAS',
        '管理科学与工程硕士研究生。平均学分绩 3.95/4.00，获校级三好学生。': 'M.S. student in Management Science and Engineering. GPA: 3.95/4.00; recipient of the university-level Merit Student award.',
        '西安电子科技大学 · 经济与管理学院': 'Xidian University · School of Economics and Management',
        '市场营销本科，专业排名第 1；获国家奖学金、优秀毕业生标兵、优秀毕业设计等奖项。': 'B.M. in Marketing, ranked 1st in the major; recipient of the National Scholarship, Outstanding Graduate distinction, and Outstanding Thesis award.',
        'ModelScope 与 GitHub 开源社区': 'ModelScope and GitHub open-source communities',
        '共建计算社会科学板块，持续发布方法教程，并维护智能文献检索与社会科学研究 Skills 等开源工具。': 'Co-building a computational social science community, publishing methodological tutorials, and maintaining open tools for literature discovery and social science research.',
        '多段研究、咨询与社区实践': 'Research, consulting, and community practice',
        '曾在上海人工智能实验室、艾瑞咨询与和君咨询参与研究和咨询项目，也持续参与 ModelScope 社区共建与创新创业竞赛。': 'I have contributed to research and consulting projects at Shanghai AI Laboratory, iResearch, and Hejun Consulting, while remaining active in the ModelScope community and innovation competitions.',
        '查看实践经历': 'View experience',
        '近期代表工作': 'Selected recent work',
        '浏览全部成果': 'Browse all publications',
        '从多中心治理、数字劳动分工与社会信号出发，研究开源 AI 生态中的组织代理机制。论文已完成 Technological Forecasting and Social Change 大修修回。': 'A study of organizational proxy mechanisms in an open-source AI ecosystem through polycentric governance, digital labor division, and social signaling. The major revision for Technological Forecasting and Social Change has been resubmitted.',
        '查看论文状态': 'View paper status',
        '面向科研工作流的开源智能文献检索引擎，简历记录项目在社区获得 200+ Stars。': 'An open-source intelligent literature discovery engine for research workflows, with 200+ community stars recorded in the current CV.',
        '前往 GitHub': 'Visit GitHub',

        // Publications
        '围绕开源创新、科技政策、数字技术生态与组织治理展开的论文和政策研究。作者列表中的 * 代表通讯作者，投稿状态依据当前简历更新。': 'Papers and policy research on open-source innovation, science and technology policy, digital technology ecosystems, and organizational governance. An asterisk (*) marks the corresponding author; submission status reflects the current CV.',
        '成果统计': 'Publication statistics',
        '2 篇已发表论文': '2 published papers',
        '2 项政策研究': '2 policy studies',
        '6 篇会议／工作论文': '6 conference & working papers',
        '成果筛选': 'Filter publications',
        '全部成果': 'All work',
        '政策研究': 'Policy research',
        '会议／工作论文': 'Conference & working papers',
        '上报信息与政策建议': 'Policy briefs and recommendations',
        '会议论文与工作论文': 'Conference and working papers',
        '《东北财经大学学报》，2025（3）：14-29': 'Journal of Dongbei University of Finance and Economics, 2025 (3): 14–29',
        '《清华管理评论》，2024（11）：81-89': 'Tsinghua Business Review, 2024 (11): 81–89',
        '刊登于农业农村部内部刊物《乡村振兴文稿》，2025': 'Published in Rural Revitalization Papers, an internal publication of the Ministry of Agriculture and Rural Affairs, 2025',
        '政策建议，2026': 'Policy recommendation, 2026',
        'Technological Forecasting and Social Change · Revise & Resubmit (Major Revision) 已修回': 'Technological Forecasting and Social Change · Revise & Resubmit (Major Revision), resubmitted',
        '2025 中国技术未来分析论坛 TFSC Workshop；第九届清华大学公共管理青年学者论坛': '2025 China Technology Foresight Forum TFSC Workshop; 9th Tsinghua University Young Scholars Forum on Public Administration',
        '中国系统工程学会信息系统工程专业委员会 2025 学术年会': '2025 Annual Conference of the Information Systems Engineering Committee, Systems Engineering Society of China',
        'Preparing for submission to《公共管理评论》': 'Preparing for submission to Public Administration and Policy Review',
        '2026 年中国科学院大学“智能经济新形态与科研新范式”经济学暑期学校': '2026 UCAS Summer School on New Forms of the Intelligent Economy and New Paradigms of Scientific Research',
        'Preparing for submission to《科学学研究》': 'Preparing for submission to Studies in Science of Science',
        '中国“双法”研究会网络科学分会第七届学术年会': '7th Annual Conference of the Network Science Branch, Chinese Society of Optimization, Overall Planning and Economic Mathematics',
        '《科技进步与对策》外审': 'Under external review at Science & Technology Progress and Policy',
        '2025 中国创新与企业成长学术年会': '2025 Annual Conference on Innovation and Firm Growth in China',
        '已发表 · 2025': 'Published · 2025',
        '已发表 · 2024': 'Published · 2024',
        '导师一作': 'Advisor first author',
        '通讯作者': 'Corresponding author',
        '获部长批示': 'Ministerial endorsement',
        'Best Paper · 前 1%': 'Best Paper · Top 1%',
        '一作': 'First author',
        '准备投稿': 'In preparation',
        '外审': 'External review',
        '案例研究': 'Case study',
        '优秀论文': 'Outstanding Paper',
        '系统动力学': 'System dynamics',
        '研究成果与投稿状态更新于 2026 年 7 月简历。': 'Publication and submission status updated from the July 2026 CV.',

        // Projects and books
        '在国家社科基金、高端智库与政府委托课题中，围绕用户创新、创新平台网络、技术趋势和公共服务开展研究。': 'Research on user innovation, innovation-platform networks, technology trends, and public services through projects funded by the National Social Science Fund, a national high-level think tank, and government agencies.',
        '项目统计': 'Project statistics',
        '1 项国家社科基金项目': '1 National Social Science Fund project',
        '1 项国家高端智库重点课题': '1 national high-level think tank project',
        '2 项政府委托研究': '2 government-commissioned studies',
        '项目经历': 'Project experience',
        '以下职责与时间均依据当前两页简历整理。': 'Roles and dates below are based on the current two-page CV.',
        '数智技术赋能下用户创新的协作模式、组织变革与公共价值研究': 'Collaborative Models, Organizational Transformation, and Public Value in User Innovation Enabled by Digital Intelligence',
        '国家社会科学基金一般项目 · 参与者 · 2025 — 预计 2028': 'National Social Science Fund General Project · Research team member · 2025–2028 (expected)',
        '协助撰写课题申请书，重点负责网络创新社区场景下的用户参与与组织变革板块。': 'Contributed to the grant proposal, focusing on user participation and organizational transformation in online innovation communities.',
        '设计普通用户与领先用户协作模式及组织边界重构的研究框架。': 'Designed a research framework for collaboration between ordinary and lead users and for the reconfiguration of organizational boundaries.',
        '参与构建数智技术赋能用户创新的三类场景分析体系。': 'Helped develop a three-scenario analytical framework for user innovation enabled by digital intelligence.',
        '优化创新平台网络、促进科技创新与产业创新深度融合': 'Optimizing Innovation-Platform Networks to Deepen the Integration of Technological and Industrial Innovation',
        '2025 年度国家高端智库重点课题 · 参与者 · 2025.04 — 2025.11': '2025 Key Project of a National High-Level Think Tank · Research team member · Apr–Nov 2025',
        '梳理 33 家国家制造业创新中心的发展现状与战略布局。': 'Mapped the development and strategic positioning of 33 national manufacturing innovation centers.',
        '分析“公司 + 联盟”运行机制和中试验证平台建设的成效与结构性瓶颈。': 'Analyzed the “company + alliance” operating model and the achievements and structural bottlenecks of pilot-testing platforms.',
        '围绕平台网络布局、治理机制改革与跨平台协同生态参与撰写政策建议。': 'Contributed policy recommendations on platform-network configuration, governance reform, and cross-platform collaboration.',
        '新一轮科技革命和产业变革趋势及对我国农业农村发展影响研究': 'Impacts of the New Round of Scientific and Technological Revolution and Industrial Transformation on China’s Agricultural and Rural Development',
        '农业农村部发展规划司“十五五”规划前期研究 · 参与者 · 2024.07 — 2025.03': 'Preliminary research for the 15th Five-Year Plan, Department of Development Planning, Ministry of Agriculture and Rural Affairs · Research team member · Jul 2024–Mar 2025',
        '梳理人工智能、合成生物学、新能源等前沿技术与未来产业趋势。': 'Reviewed emerging technologies and future-industry trends in AI, synthetic biology, renewable energy, and related fields.',
        '研判“十五五”主要技术方向及其向农业农村领域的渗透机制。': 'Assessed priority technology directions for the 15th Five-Year Plan and how they could diffuse into agriculture and rural development.',
        '从颠覆性、移植性与扩散性三条路径分析技术诱发机制与潜在领域。': 'Analyzed technology-induced change and potential application areas through disruptive, transferable, and diffusion pathways.',
        '新时期人口发展背景下西藏自治区养老服务模式与政策研究': 'Elder-Care Service Models and Policies in the Tibet Autonomous Region amid New Demographic Trends',
        '西藏自治区发展和改革委员会委托课题 · 参与者 · 2024.07 — 2025.03': 'Commissioned by the Development and Reform Commission of the Tibet Autonomous Region · Research team member · Jul 2024–Mar 2025',
        '研究西藏养老服务模式创新与政策建议。': 'Studied innovations in elder-care service models in Tibet and developed policy recommendations.',
        '构建“政府—市场—社会”多主体协同养老服务供给模式。': 'Developed a multi-actor elder-care provision model spanning government, market, and society.',
        '提出差异化群体分层分类服务方案与“十五五”期间体系优化路径。': 'Proposed differentiated services for population segments and an optimization path for the 15th Five-Year Plan period.',
        '理论专著与书稿': 'Books and manuscripts',
        '广东人民出版社系列丛书': 'Guangdong People’s Publishing House series',
        '现代化新征程与科技创新': 'A New Journey toward Modernization and Technological Innovation',
        '负责“历次科技革命下发达国家的现代化进程”与“科技创新与公共服务”两章。': 'Authored chapters on modernization in developed countries across technological revolutions and on technological innovation and public services.',
        '战略 · 理论 · 实践': 'Strategy · Theory · Practice',
        '创新驱动引领高质量发展：新质生产力战略、理论与实践': 'Innovation-Driven High-Quality Development: Strategy, Theory, and Practice of New Quality Productive Forces',
        '负责“新型工业化与现代化产业体系”章节。': 'Authored the chapter on new industrialization and the modern industrial system.',
        '开放的力量：大模型开源创新范式变革': 'The Power of Openness: The Paradigm Shift of Open-Source Innovation in the LLM Era',
        '负责理论篇第 4-6 章与实践篇第 14-17 章，讨论开放式创新、数字公共品、社区治理与我国开源大模型生态。': 'Authored Chapters 4–6 in the theory section and Chapters 14–17 in the practice section, covering open innovation, digital public goods, community governance, and China’s open-source LLM ecosystem.',
        'AGI for Science：开启科学发现的智能时代': 'AGI for Science: Opening an Intelligent Era of Scientific Discovery',
        '负责框架篇章写作，梳理 AI 基础设施在数据表征、计算架构与人机交互层面的技术瓶颈及演进路径。': 'Authored a framework chapter mapping bottlenecks and development paths in AI infrastructure across data representation, computing architecture, and human–computer interaction.',

        // Experience
        '从产业园区与数字化咨询，到人工智能战略研究、开源社区共建与创新创业竞赛，持续把调研、分析与工具实践放到真实问题中。': 'From industrial-park and digital-transformation consulting to AI strategy research, open-source community building, and innovation competitions, I apply research, analysis, and tools to real-world problems.',
        '实习经历': 'Internships',
        '上海人工智能实验室 · 战略研究中心': 'Shanghai AI Laboratory · Center for Strategic Research',
        '科研类实习生': 'Research Intern',
        '开源创新与 AGI for Science 书稿': 'Open-source innovation and AGI for Science manuscripts',
        '参与《开放的力量：大模型时代的开源创新范式》《AGI for Science 的基础能力建设》等书稿撰写，围绕开源大模型架构、组织与产业生态，以及 AGI4S 的数据—计算—创新者基础能力梳理研究框架。': 'Contributed to manuscripts on open-source innovation in the LLM era and the foundational capabilities of AGI for Science, developing frameworks for open-source LLM architectures, organizations, industrial ecosystems, and AGI4S capabilities across data, computing, and innovators.',
        '虚拟科研组织仿真系统': 'Virtual research organization simulation system',
        '参与设计基于 Mesa、TinyTroupe 与 LangGraph 的虚拟科研组织仿真系统，模拟文献阅读、选题、实验设计、数据验证、写作与同行评审等环节，对比有组织科研与自由探索模式的科研组织绩效差异。': 'Helped design a virtual research organization simulator using Mesa, TinyTroupe, and LangGraph. It models literature review, topic selection, experiment design, data validation, writing, and peer review to compare organized research with free exploration.',
        '战略研判 Agent 与开源情报分析': 'Strategic intelligence agent and open-source intelligence analysis',
        '参与战略研判 Agent 开发，设计数据同步、弱信号筛选、语义关联与报告生成流程，接入 RSS/API、GitHub、arXiv 与新闻等来源，开展大模型前沿技术开源情报分析并参与科技竞争相关政策建议撰写。': 'Contributed to a strategic intelligence agent by designing workflows for data synchronization, weak-signal filtering, semantic linking, and report generation across RSS/API feeds, GitHub, arXiv, and news sources; also conducted open-source intelligence analysis on frontier LLM technologies and contributed to policy recommendations on technology competition.',
        '艾瑞咨询 · 数字化咨询业务部': 'iResearch Consulting · Digital Consulting Division',
        '专业咨询实习生': 'Consulting Intern',
        '中国电信研究院产数业务调研': 'Research on China Telecom Research Institute’s industrial digitalization business',
        '参与重点企业产数业务规模化发展策略路径调研，参与专家访谈，梳理数字经济发展脉络、政策规划、市场规模、供需驱动与投融资趋势；参与或独立完成数字化发展策略分析、产数市场发展趋势及重点企业调查报告的撰写，将公开资料、专家访谈与企业案例整理为市场判断、竞争分析和策略建议。': 'Researched strategies for scaling industrial digitalization businesses at leading firms, joined expert interviews, and analyzed the digital economy’s evolution, policy plans, market size, supply-and-demand drivers, and investment trends. Contributed to reports on digitalization strategy, market trends, and key companies, translating public sources, interviews, and cases into market assessments, competitive analysis, and strategic recommendations.',
        '云服务与数字能力厂商研究': 'Research on cloud-service and digital-capability vendors',
        '围绕基础云服务、数字能力、系统集成、工业互联网与运营商 ICT 标品等方向开展案头研究，分析阿里云、华为云、海康威视、科大讯飞、太极股份、数字政通、平安科技等企业的产品、组织、生态与行业策略。': 'Conducted desk research on foundational cloud services, digital capabilities, systems integration, the industrial internet, and standardized carrier ICT offerings, analyzing the products, organizations, ecosystems, and industry strategies of leading Chinese technology firms.',
        '北京和君咨询有限公司 · 产业园区事业部': 'Beijing Hejun Consulting · Industrial Parks Division',
        '咨询助理': 'Consulting Assistant',
        '中关村 IC PARK 园区发展项目': 'Zhongguancun IC PARK development project',
        '通过问卷、访谈与工商登记信息查询了解 112 家企业的基本情况，调查园区 58 家企业在融资、人才、产能等 9 个方面的需求，并研究园区内 5 个产业集群的发展状况。结合期刊论文、峰会记录和新闻采访等公开资料研究集成电路政策趋势，梳理 15 个省级行政区的产业链布局及地方产业支持政策，参与撰写《中关村集成电路设计产业园发展状况调查报告》。': 'Profiled 112 firms through surveys, interviews, and business-registration records; studied the needs of 58 tenant firms across nine areas including finance, talent, and capacity; and assessed five industrial clusters. Analyzed semiconductor policy trends and industrial-chain layouts across 15 provincial-level regions and contributed to a development report on Zhongguancun IC PARK.',
        '兆丰产业基地细胞基因工程产业定位与招商咨询项目': 'Zhaofeng Industrial Base: cell and gene engineering positioning and investment-promotion project',
        '通过专家访谈研究药品上市与医疗器械注册等新政策对产业引进的影响，对生物医疗 9 个细分领域、38 类产业按照园区匹配度与发展前景进行排序；调研顺义周边 3 个生物医药产业园区，并为园区招商制定品牌推广方案。': 'Used expert interviews to assess how new drug-market and medical-device registration policies affect industry attraction; ranked 38 industry categories across nine biomedical segments by park fit and prospects; benchmarked three nearby biomedical parks and developed a branding plan for investment promotion.',
        '社区实践': 'Community practice',
        '持续参与': 'Ongoing',
        '开源社区共建者': 'Open-source community contributor',
        '社区内容共建': 'Community content development',
        '参与计算社会科学板块共建，整理 AI 辅助科研、方法教程与工具资源，持续把研究方法转化为社区可复用的实践内容。': 'Co-building the computational social science section by curating AI-assisted research resources, methods tutorials, and tools, and turning research methods into reusable community practices.',
        '科研工作流开放': 'Open research workflows',
        '围绕 PaperSeek、Claude Skill 与 BERT 等主题分享科研工作流，连接开源工具、方法教学与研究者社区反馈。': 'Sharing research workflows around PaperSeek, Claude Skills, and BERT, connecting open-source tools, methods education, and researcher feedback.',
        '竞赛经历': 'Competitions and ventures',
        '以调研、产品设计、数字化转型与技术方案为主线的项目实践。': 'Project experience spanning research, product design, digital transformation, and technology solutions.',
        '2021.10 — 至今': 'Oct 2021 — Present',
        '国家级大学生创新创业训练项目 · 项目负责人': 'National Undergraduate Innovation and Entrepreneurship Training Program · Project Lead',
        '基于区块链的文创设计策展社区和版权确权流通平台': 'A Blockchain-Based Curatorial Community and Copyright Registration and Exchange Platform for Cultural and Creative Design',
        '通过问卷与访谈梳理文创 IP 设计方、运营方与消费者需求，使用 KANO 模型完成需求分类与优先级排序，设计基于 NFT、智能合约的产品架构。': 'Mapped the needs of cultural IP designers, operators, and consumers through surveys and interviews; prioritized requirements with the KANO model; and designed an NFT- and smart-contract-based product architecture.',
        '参与华为云、零数科技等校企资源对接，获陕西微软创新中心投资意向与入驻邀请；与开发人员申请软件著作权一项（登记号：2022SR0774251），中期答辩推荐位次第一。': 'Coordinated university–industry resources including Huawei Cloud and Lingshu Technology, received investment interest and an incubation invitation from Microsoft Innovation Center Shaanxi, and co-filed a software copyright (No. 2022SR0774251); ranked first in the midterm review.',
        '国家级大学生创新创业训练项目 · 第二作者': 'National Undergraduate Innovation and Entrepreneurship Training Program · Second Author',
        '区块链可信农业融资与经营交易平台': 'Blockchain-Based Trusted Agricultural Finance and Operations Platform',
        '利用金融融量理论与 ARIMA 时间序列分析测算农村信贷需求缺口，提出区块链、实时云计算与人工智能结合的涉农贷款增信方案。': 'Estimated rural credit-demand gaps using financial capacity theory and ARIMA time-series analysis, and proposed an agricultural loan credit-enhancement model combining blockchain, real-time cloud computing, and AI.',
        '结合陕西三原等地田野调查，将“区块链 + 增信”模式延伸至绿色信贷，探索 ESG 投资与绿色信贷尽职调查的数据服务方案。': 'Extended the “blockchain + credit enhancement” model to green credit based on fieldwork in Sanyuan, Shaanxi, and explored data services for ESG investing and green-credit due diligence.',
        '2022 微软 Youth-Storm 商业分析挑战赛 · 全国季军': '2022 Microsoft Youth-Storm Business Analytics Challenge · National Third Place',
        '微软产品用户增长与整合营销方案': 'Microsoft Product User Growth and Integrated Marketing Plan',
        '通过问卷调查与案头分析完成产品与市场定位，细分目标用户并分析用户特征，构建“寻找需求—引导需求—引导购买”的路径。': 'Developed product and market positioning through surveys and desk research, segmented target users, and designed a journey from discovering demand to shaping demand and guiding purchase.',
        '围绕产品属性与用户需求构建传播话语体系，分别设计线上、线下广告创意与整合营销传播方案。': 'Built a communications framework around product attributes and user needs, with online and offline creative concepts and an integrated marketing plan.',
        '第 8 届全国大学生能源经济学术创意大赛全国优秀奖 · 组长': '8th National Undergraduate Energy Economics Academic Creativity Competition · National Excellence Award · Team Lead',
        '油气行业数字化转型设计': 'Digital Transformation Design for the Oil and Gas Industry',
        '围绕勘探、炼化、储运与销售业务制定数字化建设目标，协助设计基于物联网、数据中台与低代码的整体方案，借鉴 Gartner 与德勤 DOT 模型构建成熟度评估指标。': 'Set digitalization goals across exploration, refining, storage, transport, and sales; helped design an integrated solution based on IoT, data platforms, and low-code tools; and built maturity indicators drawing on Gartner and Deloitte’s DOT model.',
        '以中兵华锦为例分析客户、库存、原料与生产排程问题，运用组织结构、业务流程和数据流程分析方法完成总体架构设计，并基于 BSC-AHP 法分析转型效益。': 'Analyzed customer, inventory, feedstock, and production-scheduling challenges at North Huajin, designed an overall architecture using organizational, business-process, and data-flow analysis, and evaluated transformation benefits with BSC-AHP.',
        '2022 年奥纬咨询案例分析大赛': '2022 Oliver Wyman Case Competition',
        '小鹏汽车市场进入与品牌传播策略': 'XPeng Market Entry and Brand Communication Strategy',
        '分析汽车消费趋势与 OEM 经销商、代理商、直营商渠道差异，研判新能源汽车与智能驾驶汽车的用户需求和购买趋势。': 'Analyzed automotive consumption trends and differences among OEM dealer, agency, and direct-sales channels, assessing user demand and purchase trends for new-energy and intelligent vehicles.',
        '梳理小鹏汽车技术、制造与充电网络优势，结合用户价值、产业价值与社会价值构建市场定位和传播话语体系。': 'Mapped XPeng’s strengths in technology, manufacturing, and charging networks and developed market positioning and communications around customer, industry, and social value.',
        '第 8 届“互联网+”大赛陕西省金奖 · 第三完成人': '8th “Internet+” Competition · Shaanxi Gold Award · Third Contributor',
        '智慧工地安防一体化赋能者': 'Integrated Safety and Security Solution for Smart Construction Sites',
        '负责工地消防安全、塔吊监测、裂纹检测与生产排程等方向的访谈提纲设计和市场调研，研究数字孪生等概念的应用前景。': 'Designed interview guides and conducted market research on construction-site fire safety, crane monitoring, crack detection, and production scheduling, including the application potential of digital twins.',
        '从人因工程角度阐述系统建设目标，研究目标检测算法与物联网技术并参与功能设计。': 'Framed system goals through human-factors engineering, researched object-detection algorithms and IoT technologies, and contributed to feature design.',
        '第 8 届“互联网+”大赛陕西省铜奖 · 第二完成人': '8th “Internet+” Competition · Shaanxi Bronze Award · Second Contributor',
        '区块链碳排放权数据要素流通方案': 'Blockchain-Based Data Exchange for Carbon Emission Allowances',
        '研究 DeFi、NFT 与跨链通信，搭建碳权资产数字化交易的应用、业务与数据架构，并梳理 24 个行业温室气体排放核算方法。': 'Researched DeFi, NFTs, and cross-chain communication; designed application, business, and data architectures for digital carbon-asset trading; and reviewed greenhouse-gas accounting methods across 24 industries.',
        '调研多方安全计算、同态加密等隐私计算技术，设计第三方碳审计思路；对比 5 款竞品并撰写产业命题解决方案。': 'Researched privacy-preserving computation including secure multiparty computation and homomorphic encryption, designed a third-party carbon-audit approach, benchmarked five competitors, and drafted an industry solution.',

        // Community work and portfolio
        '把科研工具、开源项目与跨平台内容放在同一张作品地图里，点击卡片即可访问项目仓库或平台原文。': 'A single map of research tools, open-source projects, and cross-platform writing. Select a card to visit the repository or original post.',
        '社区作品概览': 'Community work overview',
        '4 个开源科研项目': '4 open-source research projects',
        '4 个其他开源项目': '4 other open-source projects',
        '13 篇平台作品': '13 platform posts',
        '开源科研项目': 'Open-source research projects',
        '面向文献发现、计算社会科学与 AI 辅助科研的开放工具。': 'Open tools for literature discovery, computational social science, and AI-assisted research.',
        '访问官网 ↗': 'Visit website ↗',
        '访问文档站 ↗': 'Read the docs ↗',
        '旗舰开源科研项目 · MingfengHong/paperseek': 'Flagship open-source research project · MingfengHong/paperseek',
        '基于大模型意图识别与检索式扩展的智能文献发现工具': 'Intelligent Literature Discovery through LLM-Based Intent Recognition and Query Expansion',
        'PaperSeek 是面向研究者的 AI 文献检索与发现工具。输入自然语言研究问题后，它会自动生成并迭代检索式、扩展引用网络、排序候选论文，最终导出可复查的结果。': 'PaperSeek is an AI literature search and discovery tool for researchers. Given a research question in natural language, it automatically generates and iterates search queries, expands citation networks, ranks candidate papers, and exports reviewable results.',
        '它适用于开题、文献综述、跨学科选题与日常文献追踪，让检索过程中的生成、调整与排序都清晰可见。': 'It supports topic exploration, literature reviews, interdisciplinary research, and everyday paper tracking, making query generation, refinement, and ranking transparent.',
        'PaperSeek 核心能力': 'PaperSeek core capabilities',
        '多源检索': 'Multi-source search',
        '自适应迭代': 'Adaptive iteration',
        '引用扩展': 'Citation expansion',
        '可复核导出': 'Reviewable export',
        '访问 GitHub · 220+ Stars ↗': 'Visit GitHub · 220+ Stars ↗',
        '社区推荐 ↗': 'Community feature ↗',
        '开源科研工具合集': 'Open Research Tools Collection',
        '作为贡献者参与汇集 AI 辅助科研的工作流、工具与实践资源。': 'Contributed to a collection of AI-assisted research workflows, tools, and practical resources.',
        '社会科学研究 Skills': 'Social Science Research Skills',
        '面向计算社会科学研究流程的可复用 Skills 与方法实践。': 'Reusable Skills and methodological practices for computational social science workflows.',
        '研究主题驱动的每日论文雷达，结合文献库与可选 LLM 分析，自动筛选并推送值得阅读的论文。': 'A topic-driven daily paper radar that combines literature databases with optional LLM analysis to select and deliver worthwhile papers.',
        '文献订阅 · 自动推送 ↗': 'Paper tracking · Automated delivery ↗',
        '其他开源项目': 'Other open-source projects',
        '从公开仓库中选出的桌面应用、内容创作与轻量工具。': 'Desktop apps, content-creation tools, and lightweight utilities selected from public repositories.',
        '让 Codex / Petdex 宠物走出 Codex：导入宠物包、预览动作，并打包为跨平台独立桌宠。': 'Bring Codex / Petdex pets beyond Codex: import pet packs, preview animations, and package them as standalone cross-platform desktop pets.',
        'Markdown 图文海报生成器': 'Markdown Poster Generator',
        '面向科研与学习分享的轻量海报工具，支持 Markdown、数学公式、代码高亮及图片或 PDF 导出。': 'A lightweight poster tool for research and learning content, with Markdown, math, syntax highlighting, and image or PDF export.',
        '在线创作 · 多格式导出 ↗': 'Create online · Multi-format export ↗',
        'Markdown 极简 PDF': 'Minimal Markdown PDF',
        '基于 HTML、CSS 与 Paged.js，把技术教程转换为带目录、页眉页脚和跨页代码块的瑞士风格 PDF。': 'Converts technical tutorials into Swiss-style PDFs with a table of contents, headers, footers, and cross-page code blocks using HTML, CSS, and Paged.js.',
        '学术资源分享小组件': 'Academic Resource Sharing Widget',
        '无需后端的数据驱动小组件，支持热更新、实时搜索、多维筛选与深色模式。': 'A backend-free, data-driven widget with hot updates, real-time search, multidimensional filters, and dark mode.',
        'JavaScript · 零后端 ↗': 'JavaScript · No backend ↗',
        '小红书精选': 'Xiaohongshu highlights',
        '更多小红书内容': 'More on Xiaohongshu',
        '小红书 · 运筹学': 'Xiaohongshu · Operations research',
        '圣诞老人的物流管理': 'Santa Claus’s Logistics Management',
        '平安夜运筹学：圣诞老人的旅行商问题与启发式算法': 'Christmas Eve operations research: Santa’s traveling salesperson problem and heuristic algorithms',
        '小红书 · AI 与社会': 'Xiaohongshu · AI and society',
        '爱只是一场梯度下降吗': 'Is Love Just Gradient Descent?',
        '这届学术圈为什么开始用 AI 自比亲密关系中的自己？': 'Why are researchers using AI as a metaphor for themselves in intimate relationships?',
        '小红书 · 文本分析': 'Xiaohongshu · Text analysis',
        '社交媒体文本数据预处理': 'Preprocessing Social Media Text Data',
        '如何在处理数据时保留 emoji 与 hashtag 的非语言特征': 'How to preserve the nonverbal features of emoji and hashtags during preprocessing',
        '小红书 · ABM': 'Xiaohongshu · ABM',
        '为什么模拟社会是可能的': 'Why Simulating Society Is Possible',
        '从谢林实验讲起，聊聊涌现、仿真与 ABM 建模': 'From Schelling’s experiment to emergence, simulation, and agent-based modeling',
        '小红书 · 质性研究': 'Xiaohongshu · Qualitative research',
        '质性分析工具 NVivo 入门指南': 'A Beginner’s Guide to NVivo',
        '一个强大的质性数据分析软件': 'A powerful qualitative data analysis tool',
        '小红书 · 随笔': 'Xiaohongshu · Essay',
        '2026，愿你拥有马尔可夫性质的勇气': 'In 2026, May You Have the Courage of the Markov Property',
        '写在除夕夜：汤圆的 2026 新年寄语': 'Written on Lunar New Year’s Eve: Tangyuan’s message for 2026',
        '魔搭精选': 'ModelScope highlights',
        '更多魔搭内容': 'More on ModelScope',
        '魔搭 · 开源工作流': 'ModelScope · Open-source workflow',
        '我开源了自己的文献检索工作流：PaperSeek': 'I Open-Sourced My Literature Search Workflow: PaperSeek',
        '魔搭 · Claude Skill': 'ModelScope · Claude Skill',
        '手把手教你构建计算社会科学科研工作流：从零打造 Claude Skill 完整指南': 'Build a Computational Social Science Workflow: A Complete Guide to Creating a Claude Skill from Scratch',
        '魔搭 · BERT': 'ModelScope · BERT',
        'BERT for Computational Social Scientists：从文本表示到社会科学测量': 'BERT for Computational Social Scientists: From Text Representation to Social Science Measurement',
        'AI 学术沙龙活动回顾': 'AI Academic Salon Recap',
        '活动回顾 · 公众号': 'Event recap · WeChat',
        'AI 学术沙龙：六个不同学科的人，怎么用 Agent 做科研': 'AI Academic Salon: How Researchers from Six Disciplines Use Agents',
        '跨学科研究者共同分享与 Agent 协作开展科研的实践经验。': 'Researchers across disciplines share practical experience collaborating with agents in their research.',
        '知乎精选': 'Zhihu highlight',
        '知乎 · 创新经济学': 'Zhihu · Economics of innovation',
        '2025 年诺贝尔经济学奖授予创新驱动型经济增长，技术进步如何帮助经济成长？': 'The 2025 Nobel Prize in Economics Recognizes Innovation-Driven Growth—How Does Technological Progress Help Economies Grow?',
        '公众号精选': 'WeChat highlights',
        'Management Science 论文解读': 'Management Science paper review',
        '技术追赶中的交换：微软以自研换开源，得到了什么？': 'The Trade-Off in Technological Catch-Up: What Did Microsoft Gain by Trading Proprietary R&D for Open Source?',
        'MISQ 论文解读': 'MISQ paper review',
        '拥抱开放还是制造壁垒？竞争动态如何重塑软件企业的开源策略': 'Embrace Openness or Build Barriers? How Competitive Dynamics Reshape Software Firms’ Open-Source Strategies',
        '科技政策 · 开源创新 · 社区治理': 'Science policy · Open-source innovation · Community governance'
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

    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();

    const getPageName = () => {
        const name = window.location.pathname.split('/').pop();
        return name || 'index.html';
    };

    const getStoredLanguage = () => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (supportedLanguages.includes(stored)) return stored;
        } catch (error) {
            // The site remains usable when storage is unavailable.
        }
        return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    };

    const translateTextNodes = (language) => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                if (parent.closest('script, style, [data-no-i18n], [data-paper-title], .pub-title, .pub-authors')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach((node) => {
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            const source = originalText.get(node);
            if (language === 'zh') {
                node.nodeValue = source;
                return;
            }

            const match = source.match(/^(\s*)([\s\S]*?)(\s*)$/);
            const translated = translations[match[2]];
            node.nodeValue = translated ? `${match[1]}${translated}${match[3]}` : source;
        });
    };

    const translateAttributes = (language) => {
        document.querySelectorAll('[aria-label], [alt]').forEach((element) => {
            if (!originalAttributes.has(element)) {
                originalAttributes.set(element, {
                    ariaLabel: element.getAttribute('aria-label'),
                    alt: element.getAttribute('alt')
                });
            }

            const source = originalAttributes.get(element);
            ['ariaLabel', 'alt'].forEach((property) => {
                const attribute = property === 'ariaLabel' ? 'aria-label' : 'alt';
                const value = source[property];
                if (value === null) return;
                element.setAttribute(attribute, language === 'en' && translations[value] ? translations[value] : value);
            });
        });
    };

    const updateMetadata = (language) => {
        const metadata = pageMetadata[getPageName()]?.[language];
        if (!metadata) return;

        document.title = metadata.title;
        const description = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (description) description.setAttribute('content', metadata.description);
        if (ogTitle) ogTitle.setAttribute('content', metadata.title);
        if (ogDescription) ogDescription.setAttribute('content', metadata.ogDescription);
    };

    const updatePaperTitles = (language) => {
        document.querySelectorAll('[data-paper-title]').forEach((title) => {
            title.querySelector('.pub-title-translation')?.remove();
            const originalLanguage = title.dataset.paperLang;
            if (originalLanguage === language) return;

            const translation = title.dataset[`title${language === 'zh' ? 'Zh' : 'En'}`];
            if (!translation) return;

            const translatedTitle = document.createElement('small');
            translatedTitle.className = 'pub-title-translation';
            translatedTitle.lang = language === 'zh' ? 'zh-CN' : 'en';
            translatedTitle.textContent = translation;
            title.appendChild(translatedTitle);
        });
    };

    const updateSwitcher = (language) => {
        document.querySelectorAll('.language-option').forEach((button) => {
            const isActive = button.dataset.lang === language;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    };

    const setLanguage = (language, persist = true) => {
        const nextLanguage = supportedLanguages.includes(language) ? language : 'zh';
        document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';
        document.documentElement.dataset.language = nextLanguage;
        translateTextNodes(nextLanguage);
        translateAttributes(nextLanguage);
        updateMetadata(nextLanguage);
        updatePaperTitles(nextLanguage);
        updateSwitcher(nextLanguage);

        if (persist) {
            try {
                window.localStorage.setItem(STORAGE_KEY, nextLanguage);
            } catch (error) {
                // Language switching still works for the current page.
            }
        }

        window.dispatchEvent(new CustomEvent('site:languagechange', { detail: { language: nextLanguage } }));
    };

    const createSwitcher = () => {
        const nav = document.querySelector('.nav-shell');
        if (!nav || nav.querySelector('.language-switcher')) return;

        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.setAttribute('role', 'group');
        switcher.setAttribute('aria-label', '语言选择');
        switcher.innerHTML = `
            <button class="language-option" type="button" data-lang="zh" aria-pressed="false">中文</button>
            <span class="language-divider" aria-hidden="true">/</span>
            <button class="language-option" type="button" data-lang="en" aria-pressed="false">EN</button>
        `;
        nav.appendChild(switcher);

        switcher.querySelectorAll('.language-option').forEach((button) => {
            button.addEventListener('click', () => setLanguage(button.dataset.lang));
        });
    };

    window.siteI18n = {
        get language() {
            return document.documentElement.dataset.language || 'zh';
        },
        setLanguage,
        t(key, language = document.documentElement.dataset.language || 'zh') {
            return language === 'en' ? translations[key] || key : key;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        createSwitcher();
        setLanguage(getStoredLanguage(), false);
    });
})();
