// 博客动态加载系统
let blogConfig = null;
let currentCategory = 'all';

// 配置marked.js
if (typeof marked !== 'undefined') {
    marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: true,
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(code, { language: lang }).value;
                } catch (err) {}
            }
            return code;
        }
    });
}

// 加载博客配置
async function loadBlogConfig() {
    try {
        const response = await fetch('blog/blog-config.json');
        blogConfig = await response.json();
        initBlog();
    } catch (error) {
        console.error('加载博客配置失败:', error);
        document.getElementById('blog-posts').innerHTML = '<p class="error">加载失败，请刷新页面重试。</p>';
    }
}

// 初始化博客
function initBlog() {
    renderCategories();
    renderArticleList();
}

// 渲染分类导航
function renderCategories() {
    const nav = document.getElementById('category-nav');
    let html = '<button class="category-btn active" onclick="filterCategory(\'all\')">全部文章</button>';
    
    blogConfig.categories.forEach(cat => {
        html += `<button class="category-btn" onclick="filterCategory('${cat.slug}')">${cat.name}</button>`;
    });
    
    nav.innerHTML = html;
}

// 渲染文章列表
function renderArticleList(categorySlug = 'all') {
    const postsContainer = document.getElementById('blog-posts');
    let articles = [];
    
    // 收集文章
    blogConfig.categories.forEach(cat => {
        if (categorySlug === 'all' || cat.slug === categorySlug) {
            cat.articles.forEach(article => {
                articles.push({
                    ...article,
                    category: cat.name,
                    categorySlug: cat.slug
                });
            });
        }
    });
    
    // 按日期排序
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 渲染
    if (articles.length === 0) {
        postsContainer.innerHTML = '<p class="no-articles">暂无文章</p>';
        return;
    }
    
    let html = '';
    articles.forEach((article, index) => {
        const isFirst = index === 0 && categorySlug === 'all';
        html += `
            <article class="card blog-post ${isFirst ? 'featured-post' : ''}" data-category="${article.categorySlug}">
                ${isFirst ? '<div class="featured-label">最新文章</div>' : ''}
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">${formatDate(article.date)}</span>
                        <span class="post-category">${article.category}</span>
                    </div>
                    <h3 class="post-title">
                        <a href="#" onclick="loadArticle('${article.file}', '${article.title}'); return false;">${article.title}</a>
                    </h3>
                    <div class="post-excerpt">
                        <p>${article.excerpt}</p>
                    </div>
                    <div class="post-tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="post-actions">
                        <button class="btn btn-secondary" onclick="loadArticle('${article.file}', '${article.title}')">阅读全文</button>
                    </div>
                </div>
            </article>
        `;
    });
    
    postsContainer.innerHTML = html;
    
    // 添加动画效果
    setTimeout(() => {
        document.querySelectorAll('.blog-post').forEach((post, index) => {
            setTimeout(() => {
                post.style.opacity = '1';
                post.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 10);
}

// 筛选分类
function filterCategory(slug) {
    currentCategory = slug;
    
    // 更新按钮状态
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 重新渲染文章列表
    renderArticleList(slug);
}

// 加载文章内容
async function loadArticle(filePath, title) {
    try {
        const modal = document.getElementById('article-modal');
        const content = document.getElementById('article-content');
        
        // 显示加载状态
        content.innerHTML = '<div class="loading">加载中...</div>';
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // 获取markdown文件
        const response = await fetch(filePath);
        const markdown = await response.text();
        
        // 渲染markdown
        const html = marked.parse(markdown);
        
        // 显示内容
        content.innerHTML = html;
        
        // 代码高亮
        if (typeof hljs !== 'undefined') {
            content.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        }
        
        // 滚动到顶部
        document.querySelector('.modal-content-wrapper').scrollTop = 0;
        
    } catch (error) {
        console.error('加载文章失败:', error);
        document.getElementById('article-content').innerHTML = '<p class="error">加载失败，请重试。</p>';
    }
}

// 关闭文章
function closeArticle() {
    const modal = document.getElementById('article-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// 监听ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticle();
    }
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    loadBlogConfig();
});

// 添加样式
const style = document.createElement('style');
style.textContent = `
    .category-nav {
        display: flex;
        gap: var(--spacing-sm);
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: var(--spacing-xl);
    }

    .category-btn {
        padding: var(--spacing-sm) var(--spacing-lg);
        background: var(--color-background-light);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius);
        font-family: var(--font-primary);
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-text);
        cursor: pointer;
        transition: var(--transition);
    }

    .category-btn:hover,
    .category-btn.active {
        background: var(--color-accent-blue);
        color: white;
        border-color: var(--color-accent-blue);
    }

    .blog-posts {
        min-height: 400px;
    }

    .blog-post {
        margin-bottom: var(--spacing-lg);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .featured-post {
        border-left: 4px solid var(--color-accent-gold);
        background: linear-gradient(135deg, rgba(243, 156, 18, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .featured-label {
        display: inline-block;
        background: var(--color-accent-gold);
        color: white;
        padding: var(--spacing-xs) var(--spacing-md);
        border-radius: var(--border-radius);
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: var(--spacing-sm);
    }

    .post-content {
        padding: var(--spacing-lg);
    }

    .post-meta {
        display: flex;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-sm);
        font-size: 0.9rem;
        color: var(--color-text-light);
        flex-wrap: wrap;
    }

    .post-category {
        background: var(--color-accent-blue);
        color: white;
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: 15px;
        font-size: 0.8rem;
    }

    .post-title {
        margin-bottom: var(--spacing-sm);
    }

    .post-title a {
        color: var(--color-primary);
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .post-title a:hover {
        color: var(--color-accent-blue);
    }

    .post-excerpt {
        color: var(--color-text-light);
        line-height: 1.6;
        margin-bottom: var(--spacing-md);
    }

    .post-tags {
        margin-bottom: var(--spacing-md);
    }

    .post-actions {
        margin-top: var(--spacing-md);
    }

    .loading, .error, .no-articles {
        text-align: center;
        padding: var(--spacing-xl);
        color: var(--color-text-light);
        font-size: 1.1rem;
    }

    .error {
        color: #e74c3c;
    }

    /* 文章模态框样式 */
    .article-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    }

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    }

    .modal-content-wrapper {
        position: relative;
        width: 90%;
        max-width: 900px;
        max-height: 90vh;
        background: white;
        border-radius: var(--border-radius);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        overflow-y: auto;
        z-index: 2001;
        animation: slideUp 0.3s ease;
    }

    .modal-close {
        position: sticky;
        top: 0;
        right: 0;
        float: right;
        font-size: 2rem;
        background: white;
        border: none;
        color: var(--color-text-light);
        cursor: pointer;
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: 50%;
        z-index: 2002;
        transition: var(--transition);
    }

    .modal-close:hover {
        background: var(--color-accent-blue);
        color: white;
    }

    .article-detail {
        padding: var(--spacing-xxl);
        font-family: var(--font-primary);
        line-height: 1.8;
    }

    .article-detail h1 {
        font-size: 2.5rem;
        color: var(--color-primary);
        margin-bottom: var(--spacing-lg);
        border-bottom: 2px solid var(--color-accent-blue);
        padding-bottom: var(--spacing-md);
    }

    .article-detail h2 {
        font-size: 1.8rem;
        color: var(--color-primary);
        margin-top: var(--spacing-xl);
        margin-bottom: var(--spacing-md);
    }

    .article-detail h3 {
        font-size: 1.4rem;
        color: var(--color-secondary);
        margin-top: var(--spacing-lg);
        margin-bottom: var(--spacing-sm);
    }

    .article-detail p {
        margin-bottom: var(--spacing-md);
        text-align: justify;
    }

    .article-detail blockquote {
        border-left: 4px solid var(--color-accent-blue);
        padding-left: var(--spacing-lg);
        margin: var(--spacing-lg) 0;
        color: var(--color-text-light);
        font-style: italic;
        background: var(--color-background-light);
        padding: var(--spacing-md) var(--spacing-lg);
        border-radius: var(--border-radius);
    }

    .article-detail code {
        background: var(--color-background-light);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: var(--font-code);
        font-size: 0.9em;
        color: #e74c3c;
    }

    .article-detail pre {
        background: #f6f8fa;
        padding: var(--spacing-md);
        border-radius: var(--border-radius);
        overflow-x: auto;
        margin: var(--spacing-md) 0;
    }

    .article-detail pre code {
        background: none;
        padding: 0;
        color: inherit;
    }

    .article-detail ul, .article-detail ol {
        margin-left: var(--spacing-lg);
        margin-bottom: var(--spacing-md);
    }

    .article-detail li {
        margin-bottom: var(--spacing-xs);
    }

    .article-detail img {
        max-width: 100%;
        height: auto;
        border-radius: var(--border-radius);
        margin: var(--spacing-md) 0;
    }

    .article-detail strong {
        color: var(--color-primary);
        font-weight: 600;
    }

    .article-detail em {
        color: var(--color-accent-blue);
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .category-nav {
            flex-direction: column;
            align-items: stretch;
        }

        .category-btn {
            text-align: center;
        }

        .modal-content-wrapper {
            width: 95%;
            max-height: 95vh;
        }

        .article-detail {
            padding: var(--spacing-lg);
        }

        .article-detail h1 {
            font-size: 1.8rem;
        }

        .article-detail h2 {
            font-size: 1.4rem;
        }
    }
`;

document.head.appendChild(style);
