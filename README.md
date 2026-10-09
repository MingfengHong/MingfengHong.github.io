# 洪铭锋 · Mingfeng Hong

个人学术主页，主要展示科技政策与创新管理、开源创新与开源战略、开源社区治理相关的研究成果与实践。

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-377CF6?logo=github)](https://mingfenghong.github.io/)
[![Deploy to GitHub Pages](https://github.com/MingfengHong/MingfengHong.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/MingfengHong/MingfengHong.github.io/actions/workflows/deploy.yml)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0009--1199--4702-A6CE39?logo=orcid)](https://orcid.org/0009-0009-1199-4702)

访问地址：[https://mingfenghong.github.io/](https://mingfenghong.github.io/)

## 网站内容

网站采用独立分页结构，当前包含五个主要内容页面（另保留旧博客地址的跳转页）：

- [首页](https://mingfenghong.github.io/)：个人简介、研究方向、核心成果概览、教育背景与社区入口。
- [研究成果](https://mingfenghong.github.io/publications.html)：已发表论文、政策研究、会议论文与工作论文。
- [研究项目](https://mingfenghong.github.io/projects.html)：科研项目、政府委托项目，以及参与编写的理论专著与书稿。
- [实践经历](https://mingfenghong.github.io/internships.html)：上海人工智能实验室、艾瑞咨询、和君咨询、ModelScope 社区与竞赛项目实践。
- [社区作品](https://mingfenghong.github.io/portfolio.html)：开源科研项目、其他开源项目，以及发布于小红书、魔搭社区、知乎和公众号的作品精选。

网站内容依据当前简历整理，主要包括：

- 2 篇已发表论文与 6 篇会议论文／工作论文；
- 4 项参与的科研或政府委托项目；
- 4 部参与编写的理论专著与书稿；
- 3 段实习经历、1 段社区实践与 7 项竞赛／创新创业项目；
- PaperSeek、CSS Research Skills、PetPack 等开源项目；
- 13 篇跨平台社区作品精选。

最新版简历可在网站首页下载，也可直接查看 [`files/Hong_Mingfeng_CV.pdf`](files/Hong_Mingfeng_CV.pdf)。

## 视觉与交互

网站使用 Notion 风格的黑白笔记式视觉语言：白色画布、紧凑排版、细描边卡片、轻阴影、单色小图标和下划线分类导航。低对比度边缘刻度与黑白人物线稿提供辅助视觉细节。五个独立分页共享响应式布局，并支持键盘焦点、移动端菜单、成果筛选与减少动画偏好。

插图依据 [anthropic-art](https://github.com/HalfAI1102/anthropic-art) 的手绘线条规范、结合本人照片生成；按页面参考将默认彩色背景调整为黑白透明背景。生成提示词与素材说明见 [`images/illustrations/README.md`](images/illustrations/README.md)。

## 技术实现

- 纯 HTML、CSS 与原生 JavaScript，无前端框架和运行时依赖；
- 主要样式集中在 [`styles/main.css`](styles/main.css)；
- 通用导航逻辑位于 [`scripts/main.js`](scripts/main.js)；
- 中英文内容与切换逻辑位于 [`scripts/i18n.js`](scripts/i18n.js)，首次访问默认英文，手动切换的语言选择会保存在浏览器本地；论文、书稿标题与作者列表保留原文，论文语言与界面语言不同时在原标题下显示小字号译名；
- 研究成果筛选逻辑位于 [`scripts/publications.js`](scripts/publications.js)；
- 使用 Jekyll 构建，并由 GitHub Pages 托管；
- 推送到 `main` 后，通过 [GitHub Actions](.github/workflows/deploy.yml) 自动部署。

“社区作品”页面直接链接各平台原文，不再维护本地 Markdown 文章与动态加载服务；旧的 `blog.html` 地址会跳转到合并后的页面。

## 目录结构

```text
.
├── index.html                 # 首页
├── publications.html          # 研究成果
├── projects.html              # 研究项目与专著书稿
├── internships.html           # 实践经历（实习、社区实践与竞赛）
├── portfolio.html             # 社区作品（开源项目与平台作品）
├── blog.html                  # 旧研究笔记地址的跳转页
├── styles/
│   └── main.css               # 当前视觉系统与响应式样式
├── scripts/
│   ├── main.js                # 通用导航交互
│   ├── i18n.js                # 全站中英文切换与译文
│   └── publications.js        # 成果筛选
├── images/
│   ├── profile.jpg            # 个人照片
│   └── og.png                 # 社交分享图
├── files/
│   └── Hong_Mingfeng_CV.pdf   # 可下载简历
├── _config.yml                # Jekyll 与站点元数据
├── sitemap.xml                # 站点地图
└── .github/workflows/
    └── deploy.yml             # GitHub Pages 部署流程
```

## 本地预览

该网站无需安装依赖。在项目根目录启动一个静态文件服务器：

```bash
python -m http.server 8000
```

然后访问 [http://localhost:8000](http://localhost:8000)。使用静态服务器预览可确保页面跳转、简历下载和资源路径与线上环境一致。

## 内容维护

- 更新个人简介与首页内容：编辑 [`index.html`](index.html)。
- 更新论文与政策研究：编辑 [`publications.html`](publications.html)。
- 更新科研项目和专著：编辑 [`projects.html`](projects.html)。
- 更新实践经历：编辑 [`internships.html`](internships.html)。
- 更新开源项目与社区作品外链：编辑 [`portfolio.html`](portfolio.html)。
- 更新简历：替换 [`files/Hong_Mingfeng_CV.pdf`](files/Hong_Mingfeng_CV.pdf)，并保持文件名不变。
- 更新页面中文文案时，同步维护 [`scripts/i18n.js`](scripts/i18n.js) 中对应的英文译文。
- 新增论文使用 `data-paper-title`、`data-paper-lang` 及 `data-title-zh` 或 `data-title-en` 标注原文与译名。

## 联系方式

- Email：[hongmingfeng@outlook.com](mailto:hongmingfeng@outlook.com)
- GitHub：[@MingfengHong](https://github.com/MingfengHong)
- ORCID：[0009-0009-1199-4702](https://orcid.org/0009-0009-1199-4702)
- 魔搭社区：[HongMingfeng](https://modelscope.cn/profile/HongMingfeng)
- 小红书：[汤圆键盘坏了不能写论文](https://www.xiaohongshu.com/user/profile/5f58cb96000000000101ebdc)

---

**Le vent se lève, il faut tenter de vivre.**
