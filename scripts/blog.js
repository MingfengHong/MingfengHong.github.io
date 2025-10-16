// 博客页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.blog-post');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const tagLinks = document.querySelectorAll('.blog-tag-link');

    // 分类筛选功能
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新激活状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选文章
            filterPosts(category);
        });
    });

    // 文章筛选函数
    function filterPosts(category) {
        blogPosts.forEach(post => {
            const postCategory = post.getAttribute('data-category');
            
            if (category === 'all' || postCategory === category) {
                post.style.display = 'block';
                post.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // 滚动观察者
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

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

    .tags-section {
        padding: var(--spacing-xl) 0;
        background: var(--color-background-light);
        border-radius: var(--border-radius);
    }

    .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        justify-content: center;
        margin-top: var(--spacing-md);
    }

    .blog-tag-link {
        padding: var(--spacing-sm) var(--spacing-lg);
        background: white;
        color: var(--color-text);
        text-decoration: none;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
        border: 1px solid var(--color-border);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .blog-tag-link:hover {
        background: var(--color-accent-blue);
        color: white;
        border-color: var(--color-accent-blue);
        text-decoration: none;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
