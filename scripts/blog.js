// 博客页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.blog-post');
    const categoryLinks = document.querySelectorAll('.category-list a');
    const searchInput = document.getElementById('blog-search');
    const tagLinks = document.querySelectorAll('.tag-link');

    // 分类筛选功能
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // 更新激活状态
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选文章
            filterPosts(category);
        });
    });

    // 文章筛选函数
    function filterPosts(category, searchTerm = '') {
        blogPosts.forEach(post => {
            const postCategory = post.getAttribute('data-category');
            const postTitle = post.querySelector('.post-title').textContent.toLowerCase();
            const postExcerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
            const postTags = Array.from(post.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            
            const matchesCategory = category === 'all' || postCategory === category;
            const matchesSearch = searchTerm === '' || 
                postTitle.includes(searchTerm.toLowerCase()) || 
                postExcerpt.includes(searchTerm.toLowerCase()) ||
                postTags.includes(searchTerm.toLowerCase());
            
            if (matchesCategory && matchesSearch) {
                post.style.display = 'block';
                post.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                post.style.display = 'none';
            }
        });
        
        updatePostCount();
    }

    // 搜索功能
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value;
        const activeCategory = document.querySelector('.category-list a.active').getAttribute('data-category');
        filterPosts(activeCategory, searchTerm);
    });

    // 标签云交互
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tagText = this.textContent;
            searchInput.value = tagText;
            
            // 触发搜索
            const activeCategory = document.querySelector('.category-list a.active').getAttribute('data-category');
            filterPosts(activeCategory, tagText);
        });
    });

    // 统计数字动画
    function animateBlogStats() {
        const statNumbers = document.querySelectorAll('.blog-stats .stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseFloat(stat.textContent.replace('k', ''));
            const isK = stat.textContent.includes('k');
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (isK) {
                    stat.textContent = (current).toFixed(1) + 'k';
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        });
    }

    // 文章统计更新
    function updatePostCount() {
        const visiblePosts = document.querySelectorAll('.blog-post[style*="block"], .blog-post:not([style*="none"])');
        const countSpan = document.querySelector('.category-list a.active .count');
        if (countSpan) {
            countSpan.textContent = `(${visiblePosts.length})`;
        }
    }

    // 滚动观察者
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('blog-stats')) {
                    animateBlogStats();
                    observer.unobserve(entry.target);
                }
                
                if (entry.target.classList.contains('blog-post')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // 观察统计部分
    const blogStats = document.querySelector('.blog-stats');
    if (blogStats) {
        observer.observe(blogStats);
    }

    // 观察博客文章
    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(30px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(post);
    });

    // 文章悬浮效果
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // 分页功能
    function setupPagination() {
        const pageNumbers = document.querySelectorAll('.page-number');
        const prevBtn = document.querySelector('.pagination .btn:first-child');
        const nextBtn = document.querySelector('.pagination .btn:last-child');
        
        pageNumbers.forEach(pageNum => {
            pageNum.addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    pageNumbers.forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                    
                    // 滚动到顶部
                    document.querySelector('.blog-main').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        nextBtn.addEventListener('click', function() {
            const activePage = document.querySelector('.page-number.active');
            const nextPage = activePage.nextElementSibling;
            if (nextPage && nextPage.classList.contains('page-number')) {
                activePage.classList.remove('active');
                nextPage.classList.add('active');
            }
        });
        
        prevBtn.addEventListener('click', function() {
            const activePage = document.querySelector('.page-number.active');
            const prevPage = activePage.previousElementSibling;
            if (prevPage && prevPage.classList.contains('page-number')) {
                activePage.classList.remove('active');
                prevPage.classList.add('active');
            }
        });
    }

    // 标签云大小效果
    function setupTagCloud() {
        const tagLinks = document.querySelectorAll('.tag-link');
        
        tagLinks.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.fontWeight = '600';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.fontWeight = '500';
            });
        });
    }

    // 侧边栏固定效果
    function setupStickysidebar() {
        const sidebar = document.querySelector('.blog-sidebar');
        const main = document.querySelector('.blog-main');
        
        if (sidebar && main) {
            window.addEventListener('scroll', function() {
                const sidebarRect = sidebar.getBoundingClientRect();
                const mainRect = main.getBoundingClientRect();
                
                if (window.innerWidth > 1024) {
                    if (mainRect.top <= 100 && mainRect.bottom > window.innerHeight) {
                        sidebar.style.position = 'fixed';
                        sidebar.style.top = '100px';
                        sidebar.style.width = '300px';
                    } else {
                        sidebar.style.position = 'static';
                        sidebar.style.width = 'auto';
                    }
                }
            });
        }
    }

    // 阅读进度条
    function setupReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 80px;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--color-accent-blue);
            z-index: 1000;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = Math.min(scrolled, 100) + '%';
        });
    }

    // 初始化所有功能
    setupPagination();
    setupTagCloud();
    setupStickysidebar();
    setupReadingProgress();
    
    // 搜索按钮功能
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const activeCategory = document.querySelector('.category-list a.active').getAttribute('data-category');
            filterPosts(activeCategory, searchInput.value);
        });
    }

    // 回车键搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const activeCategory = document.querySelector('.category-list a.active').getAttribute('data-category');
            filterPosts(activeCategory, this.value);
        }
    });
});

// 添加样式
const style = document.createElement('style');
style.textContent = `
    .blog-layout {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: var(--spacing-xl);
        margin-top: var(--spacing-lg);
    }

    .blog-main {
        min-width: 0;
    }

    .blog-stats {
        background: white;
        border-radius: var(--border-radius);
        padding: var(--spacing-lg);
        box-shadow: 0 5px 15px var(--color-shadow);
    }

    .featured-post {
        position: relative;
    }

    .featured-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        position: relative;
        overflow: hidden;
    }

    .featured-label {
        position: absolute;
        top: 0;
        right: 0;
        background: var(--color-accent-gold);
        color: white;
        padding: var(--spacing-xs) var(--spacing-md);
        font-size: 0.8rem;
        font-weight: 600;
        border-bottom-left-radius: var(--border-radius);
    }

    .featured-card .post-title a {
        color: white;
        font-size: 1.75rem;
        font-weight: 600;
    }

    .featured-card .post-meta span {
        color: rgba(255, 255, 255, 0.8);
    }

    .featured-card .post-excerpt {
        color: rgba(255, 255, 255, 0.9);
    }

    .featured-card .tag {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .blog-post {
        margin-bottom: var(--spacing-lg);
        transition: all 0.3s ease;
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
    }

    .post-category {
        background: var(--color-accent-blue);
        color: white;
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: 15px;
        font-size: 0.8rem;
    }

    .reading-time {
        color: var(--color-text-light);
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

    .post-stats {
        display: flex;
        gap: var(--spacing-md);
        font-size: 0.9rem;
        color: var(--color-text-light);
    }

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-md);
        margin-top: var(--spacing-xl);
        padding: var(--spacing-lg) 0;
    }

    .page-numbers {
        display: flex;
        gap: var(--spacing-xs);
    }

    .page-number {
        padding: var(--spacing-xs) var(--spacing-sm);
        background: var(--color-background-light);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 40px;
        text-align: center;
    }

    .page-number:hover,
    .page-number.active {
        background: var(--color-accent-blue);
        color: white;
        border-color: var(--color-accent-blue);
    }

    .page-dots {
        padding: var(--spacing-xs) var(--spacing-sm);
        color: var(--color-text-light);
    }

    .blog-sidebar {
        position: relative;
        max-width: 100%;
    }

    .sidebar-widget {
        background: white;
        border-radius: var(--border-radius);
        padding: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
        box-shadow: 0 3px 10px var(--color-shadow);
    }

    .widget-title {
        font-size: 1.25rem;
        color: var(--color-primary);
        margin-bottom: var(--spacing-md);
        border-bottom: 2px solid var(--color-accent-blue);
        padding-bottom: var(--spacing-xs);
    }

    .search-box {
        display: flex;
        gap: var(--spacing-xs);
    }

    .search-input {
        flex-grow: 1;
        padding: var(--spacing-sm);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius);
        font-family: var(--font-primary);
    }

    .search-btn {
        padding: var(--spacing-sm);
        background: var(--color-accent-blue);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .search-btn:hover {
        background: var(--color-primary);
    }

    .category-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .category-list li {
        margin-bottom: var(--spacing-xs);
    }

    .category-list a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-sm);
        color: var(--color-text);
        text-decoration: none;
        border-radius: var(--border-radius);
        transition: all 0.3s ease;
    }

    .category-list a:hover,
    .category-list a.active {
        background: var(--color-background-light);
        color: var(--color-primary);
    }

    .count {
        color: var(--color-text-light);
        font-size: 0.9rem;
    }

    .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
    }

    .tag-link {
        padding: var(--spacing-xs) var(--spacing-sm);
        background: var(--color-background-light);
        color: var(--color-text);
        text-decoration: none;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
        border: 1px solid var(--color-border);
    }

    .tag-link:hover {
        background: var(--color-accent-blue);
        color: white;
        border-color: var(--color-accent-blue);
        text-decoration: none;
    }

    .tag-link[data-size="large"] {
        font-size: 1rem;
        font-weight: 600;
    }

    .tag-link[data-size="medium"] {
        font-size: 0.95rem;
        font-weight: 550;
    }

    .tag-link[data-size="small"] {
        font-size: 0.85rem;
    }

    .recent-comments {
        space-y: var(--spacing-md);
    }

    .comment-item {
        padding-bottom: var(--spacing-md);
        border-bottom: 1px solid var(--color-border);
        margin-bottom: var(--spacing-md);
    }

    .comment-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }

    .comment-author {
        font-weight: 600;
        color: var(--color-primary);
        margin-bottom: var(--spacing-xs);
    }

    .comment-text {
        color: var(--color-text-light);
        font-size: 0.9rem;
        margin-bottom: var(--spacing-xs);
        line-height: 1.5;
    }

    .comment-meta {
        font-size: 0.8rem;
        color: var(--color-text-light);
    }

    .social-links-sidebar {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .social-link-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-sm);
        color: var(--color-text);
        text-decoration: none;
        border-radius: var(--border-radius);
        transition: all 0.3s ease;
    }

    .social-link-item:hover {
        background: var(--color-background-light);
        color: var(--color-primary);
        text-decoration: none;
    }

    @media (max-width: 1200px) {
        .blog-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
        }

        .blog-sidebar {
            position: static !important;
            width: 100% !important;
            max-width: 100% !important;
            order: -1;
        }

        .sidebar-widget {
            margin-bottom: var(--spacing-md);
        }
    }

    @media (max-width: 768px) {
        .post-meta {
            flex-direction: column;
            gap: var(--spacing-xs);
        }

        .post-title a {
            font-size: 1.25rem;
        }

        .pagination {
            flex-direction: column;
            gap: var(--spacing-sm);
        }

        .page-numbers {
            order: -1;
        }

        .tag-cloud {
            justify-content: center;
        }
    }
`;

document.head.appendChild(style);
