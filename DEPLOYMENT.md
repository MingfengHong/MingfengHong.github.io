# GitHub Pages 部署指南

## 🚀 快速部署步骤

### 1. 准备GitHub仓库

1. 在GitHub上创建新仓库，命名为 `yourusername.github.io`（推荐）或其他名称
2. 将本项目代码上传到仓库

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
# 复制所有项目文件到此目录
git add .
git commit -m "Initial commit: Academic homepage"
git push origin main
```

### 2. 启用GitHub Pages

1. 进入仓库的 **Settings** 页面
2. 滚动到 **Pages** 部分
3. 在 **Source** 下选择 **GitHub Actions**
4. 系统会自动检测到 `.github/workflows/deploy.yml` 文件

### 3. 配置个人信息

#### 更新 `_config.yml`
```yaml
title: "您的姓名 - 学术主页"
description: "硕士研究生 - 生态学与环境科学"
author: "您的姓名"
email: "your.email@example.com"
url: "https://yourusername.github.io"  # 替换为您的实际URL

social:
  github: yourusername
  orcid: 0000-0000-0000-0000
  google_scholar: your-scholar-id
```

#### 更新 `sitemap.xml`
将所有 `https://yourusername.github.io/` 替换为您的实际域名。

### 4. 个性化内容

#### 首页信息 (`index.html`)
- 第50行：更新姓名
- 第70-73行：更新教育背景
- 第77-80行：更新联系方式
- 第94-97行：更新研究成果统计

#### 添加个人照片
1. 将个人照片命名为 `profile.jpg`
2. 放置在 `images/` 目录下
3. 推荐尺寸：300x400像素，文件大小 < 500KB

#### 更新出版物 (`publications.html`)
- 替换示例论文为您的实际发表论文
- 更新引用统计和H指数
- 修改学术服务信息

#### 更新项目 (`projects.html`)
- 添加您的GitHub项目
- 更新编程语言统计
- 修改项目描述和链接

### 5. 自动部署验证

推送代码后：
1. 在仓库的 **Actions** 标签页查看部署状态
2. 部署成功后，访问 `https://yourusername.github.io` 查看网站
3. 首次部署可能需要5-10分钟

## 🔧 高级配置

### 自定义域名

如果您有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件：
```
yourdomain.com
```

2. 在域名提供商处设置DNS记录：
```
Type: CNAME
Name: www (或 @)
Value: yourusername.github.io
```

3. 在GitHub Pages设置中启用 **Enforce HTTPS**

### SEO优化

#### Google Analytics
在 `_config.yml` 中添加：
```yaml
google_analytics: UA-XXXXXXXXX-X
```

#### 网站验证
```yaml
google_site_verification: "your-verification-code"
bing_site_verification: "your-verification-code"
```

### 性能优化

1. **图片优化**：
   - 使用WebP格式
   - 压缩图片文件大小
   - 添加适当的alt属性

2. **代码优化**：
   - 压缩CSS和JavaScript（可选）
   - 使用CDN加载字体（已配置）

## 🐛 常见问题

### 部署失败
1. 检查 `.github/workflows/deploy.yml` 文件是否存在
2. 确认仓库有 **Actions** 权限
3. 查看 Actions 日志中的错误信息

### 页面无法访问
1. 确认GitHub Pages已启用
2. 检查仓库是否为公开状态
3. 等待DNS传播（最多24小时）

### 样式显示异常
1. 检查CSS文件路径是否正确
2. 清除浏览器缓存
3. 确认所有文件都已正确上传

### 图片无法显示
1. 检查图片文件路径和名称
2. 确认图片文件已上传到正确目录
3. 检查图片格式是否支持（JPG、PNG、WebP）

## 📱 移动端优化

网站已针对移动设备进行优化：
- 响应式布局
- 触摸友好的导航
- 优化的字体大小和间距

## 🔄 更新维护

### 定期更新内容
- 新发表的论文
- 最新的项目进展
- 博客文章
- 学术活动参与

### 备份重要数据
- 定期备份个人照片
- 保存重要的配置文件
- 记录自定义的CSS修改

## 📞 技术支持

如遇到技术问题：
1. 查看GitHub Pages官方文档
2. 检查仓库的Issues页面
3. 联系项目维护者

---

🎉 祝您部署成功！如果这个模板对您有帮助，请给项目一个⭐星标支持！
