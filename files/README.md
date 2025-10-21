# 文件存放目录

本目录用于存放网站的所有附件和下载文件。

## 📁 目录结构

```
files/
├── portfolio/          # 作品集文件
│   ├── xicha-report.pdf              # 喜茶网络品牌传播报告
│   ├── blockchain-project-report.pdf # 区块链项目结题报告
│   ├── popmart-analysis.pdf          # 泡泡玛特调研报告
│   └── microsoft-marketing-plan.pdf  # 微软营销策划案
│
├── publications/       # 学术论文PDF
│   ├── 2024-innovation-management.pdf    # 创新管理与AI协同论文
│   └── 2024-computational-communication.pdf # 计算传播论文
│
└── phd-proposal/       # 博士研究计划
    └── phd-research-proposal.pdf
```

## 📝 文件命名规范

### 作品集文件（portfolio/）
- `xicha-report.pdf` - 喜茶报告
- `blockchain-project-report.pdf` - 区块链项目结题报告
- `popmart-analysis.pdf` - 泡泡玛特调研报告
- `microsoft-marketing-plan.pdf` - 微软营销策划案

### 学术论文（publications/）
- `YYYY-short-title.pdf` - 年份-简短英文标题
- 例如：`2024-innovation-management.pdf`

### 博士研究计划（phd-proposal/）
- `phd-research-proposal.pdf` - 博士研究计划

## 🔗 如何链接文件

### 作品集页面按钮链接
```html
<!-- 喜茶报告 -->
<a href="files/portfolio/xicha-report.pdf" class="btn btn-primary" download>📥 下载</a>

<!-- 区块链项目 -->
<a href="files/portfolio/blockchain-project-report.pdf" class="btn btn-primary" download>📥 结题报告</a>

<!-- 泡泡玛特报告 -->
<a href="files/portfolio/popmart-analysis.pdf" class="btn btn-primary" download>📥 下载</a>

<!-- 微软营销方案 -->
<a href="files/portfolio/microsoft-marketing-plan.pdf" class="btn btn-primary" download>📥 策划案</a>
```

### 出版物页面论文链接
```html
<a href="files/publications/2024-innovation-management.pdf" class="btn btn-primary" target="_blank">📄 PDF</a>
```

### 首页博士研究计划链接
```html
<a href="files/phd-proposal/phd-research-proposal.pdf" class="btn btn-primary" download>📥 下载完整研究计划 (PDF)</a>
```

## 📤 上传步骤

1. **准备文件**：将PDF文件按照上述命名规范重命名
2. **放入对应目录**：
   - 作品集文件 → `files/portfolio/`
   - 学术论文 → `files/publications/`
   - 博士研究计划 → `files/phd-proposal/`
3. **更新HTML链接**：将按钮的 `href="#"` 替换为实际文件路径
4. **Git提交**：
   ```bash
   git add files/
   git commit -m "添加作品集和论文PDF文件"
   git push
   ```

## ⚠️ 注意事项

1. **文件大小**：建议单个PDF文件不超过20MB，以保证加载速度
2. **文件格式**：统一使用PDF格式，确保跨平台兼容性
3. **隐私保护**：确保上传的文件不包含敏感信息
4. **版权问题**：确保有权公开分享这些文件

## 🌐 GitHub Pages注意事项

- GitHub Pages支持静态文件托管，PDF可以直接通过相对路径访问
- 文件会随着网站一起托管在 `https://mingfenghong.github.io/files/`
- 确保文件大小合理，避免影响仓库和网站加载速度

