# 博客使用说明

## 📝 如何添加新文章

### 方法一：自动生成配置（推荐）

1. 在 `blog/` 目录下创建分类文件夹（如果还没有的话），例如：
   - `理论分享/`
   - `技术分享/`
   - `学术观点/`
   - `教程指南/`
   - `生活感悟/`

2. 在对应的分类文件夹中创建 `.md` 文件，文件内容格式：
   ```markdown
   # 文章标题
   
   > 简短的引言或摘要（可选）
   
   正文内容...
   ```

3. 运行自动生成脚本：
   ```bash
   python scripts/generate-blog-config.py
   ```

4. 脚本会自动：
   - 扫描 `blog/` 目录下的所有分类文件夹
   - 读取每个 `.md` 文件的标题和摘要
   - 生成 `blog/blog-config.json` 配置文件

### 方法二：手动编辑配置

直接编辑 `blog/blog-config.json` 文件，添加新文章：

```json
{
  "categories": [
    {
      "name": "分类名称",
      "slug": "category-slug",
      "articles": [
        {
          "title": "文章标题",
          "file": "blog/分类名称/文件名.md",
          "date": "2025-01-16",
          "excerpt": "文章摘要...",
          "tags": ["标签1", "标签2"]
        }
      ]
    }
  ]
}
```

## 🎨 Markdown 格式建议

```markdown
# 一级标题（文章标题）

> 引言或核心观点（可选，会被自动提取为摘要）

正文第一段...

## 二级标题

内容...

### 三级标题

- 列表项1
- 列表项2

**加粗文字**
*斜体文字*

> 引用文字

\`\`\`python
# 代码块
print("Hello World")
\`\`\`
```

## 📂 目录结构

```
blog/
├── README.md                 # 本说明文件
├── blog-config.json          # 博客配置文件（自动生成）
├── 理论分享/
│   ├── 文章1.md
│   └── 文章2.md
├── 技术分享/
│   └── 文章.md
└── ...
```

## 🚀 部署

1. 添加或修改文章后，运行生成脚本
2. 提交并推送到 GitHub
3. GitHub Pages 会自动部署更新

```bash
python scripts/generate-blog-config.py
git add .
git commit -m "添加新博客文章"
git push
```

## 💡 提示

- 文件名建议使用中文，便于识别
- 一级标题 `#` 会被自动识别为文章标题
- 第一个引用块 `>` 或第一段文字会被提取为摘要
- 支持所有标准 Markdown 语法
- 支持代码高亮显示

