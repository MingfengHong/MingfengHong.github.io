let blogConfig = null;
let currentCategory = 'all';

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

async function loadBlogConfig() {
    try {
        const response = await fetch('./blog/blog-config.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        blogConfig = JSON.parse(await response.text());
        initBlog();
    } catch (error) {
        document.getElementById('blog-posts').innerHTML = '<p style="color:#999;text-align:center;padding:2rem 0;">加载失败，请刷新重试。</p>';
        if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
            setTimeout(loadFallbackConfig, 2000);
        }
    }
}

function loadFallbackConfig() {
    blogConfig = {
        "categories": [{
            "name": "理论分享",
            "slug": "theory",
            "articles": [
                {
                    "title": "诺贝尔经济学奖思考1——是什么推动了今天的世界",
                    "file": "blog/理论分享/诺贝尔经济学奖思考1——是什么推动了今天的世界.md",
                    "date": "2025-10-14",
                    "excerpt": "今年的诺贝尔经济学奖授予了三位杰出的经济学家，我们今天先将目光聚焦于其中一位——乔尔·莫基尔（Joel Mokyr）。",
                    "tags": ["诺贝尔奖", "经济学", "创新理论"]
                }
            ]
        }]
    };
    initBlog();
}

function initBlog() {
    if (!blogConfig || !blogConfig.categories) return;
    renderCategories();
    renderArticleList();
}

function renderCategories() {
    const nav = document.getElementById('category-nav');
    let html = '<button class="filter-btn active" onclick="filterCategory(\'all\')">全部文章</button>';
    blogConfig.categories.forEach(cat => {
        html += `<button class="filter-btn" onclick="filterCategory('${cat.slug}')">${cat.name}</button>`;
    });
    nav.innerHTML = html;
}

function renderArticleList(categorySlug = 'all') {
    const postsContainer = document.getElementById('blog-posts');
    let articles = [];

    blogConfig.categories.forEach(cat => {
        if (categorySlug === 'all' || cat.slug === categorySlug) {
            cat.articles.forEach(article => {
                articles.push({ ...article, category: cat.name, categorySlug: cat.slug });
            });
        }
    });

    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (articles.length === 0) {
        postsContainer.innerHTML = '<p style="color:#999;text-align:center;">暂无文章</p>';
        return;
    }

    let html = '';
    articles.forEach(article => {
        html += `
            <article class="blog-row" data-category="${article.categorySlug}">
                <div class="blog-date">${formatDate(article.date)} · ${article.category}</div>
                <h3><a href="#" onclick="loadArticle('${article.file}', '${article.title}'); return false;">${article.title}</a></h3>
                <p class="blog-excerpt">${article.excerpt}</p>
                <div style="margin-top:0.5rem;">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </article>
        `;
    });

    postsContainer.innerHTML = html;
}

function filterCategory(slug) {
    currentCategory = slug;
    document.querySelectorAll('#category-nav .filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderArticleList(slug);
}

async function loadArticle(filePath, title) {
    try {
        const modal = document.getElementById('article-modal');
        const content = document.getElementById('article-content');
        content.innerHTML = '<p style="color:#999;">加载中...</p>';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        let response;
        try {
            response = await fetch('./' + filePath);
        } catch (e) {
            response = await fetch(filePath);
        }

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const markdown = await response.text();
        content.innerHTML = marked.parse(markdown);

        if (typeof hljs !== 'undefined') {
            content.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
        }

        document.querySelector('.modal').scrollTop = 0;
    } catch (error) {
        document.getElementById('article-content').innerHTML = `<p style="color:#999;">文章加载失败</p>`;
    }
}

function closeArticle() {
    document.getElementById('article-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月${String(date.getDate()).padStart(2, '0')}日`;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArticle();
});

document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('blog-posts')) return;
    const checkLibraries = () => {
        if (typeof marked === 'undefined') {
            setTimeout(checkLibraries, 3000);
            return;
        }
        loadBlogConfig();
    };
    checkLibraries();
});
