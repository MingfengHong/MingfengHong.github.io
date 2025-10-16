// 作品集筛选和交互功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选作品集项目
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === itemCategory) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 卡片悬浮效果
    portfolioItems.forEach(item => {
        const card = item.querySelector('.portfolio-card');
        
        item.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // 模态框功能（用于展示作品详情）
    function createModal() {
        const modal = document.createElement('div');
        modal.className = 'portfolio-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <div class="modal-body">
                        <div class="modal-image">
                            <div class="image-placeholder">
                                <span class="placeholder-text">作品展示图片</span>
                            </div>
                        </div>
                        <div class="modal-info">
                            <h3 class="modal-title">作品标题</h3>
                            <p class="modal-description">作品详细描述...</p>
                            <div class="modal-details">
                                <h4>项目详情</h4>
                                <ul>
                                    <li><strong>客户：</strong>项目客户</li>
                                    <li><strong>时间：</strong>项目时间</li>
                                    <li><strong>角色：</strong>设计角色</li>
                                    <li><strong>工具：</strong>使用工具</li>
                                </ul>
                            </div>
                            <div class="modal-tags">
                                <span class="tag">标签1</span>
                                <span class="tag">标签2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }

    // 懒加载图片占位符
    function setupImagePlaceholders() {
        const placeholders = document.querySelectorAll('.image-placeholder');
        
        placeholders.forEach(placeholder => {
            // 添加渐变背景
            const category = placeholder.closest('.portfolio-item')?.getAttribute('data-category') || 'default';
            placeholder.classList.add(`${category}-placeholder`);
            
            // 添加点击事件
            placeholder.addEventListener('click', function() {
                const item = this.closest('.portfolio-item');
                const title = item.querySelector('.portfolio-title').textContent;
                const description = item.querySelector('.portfolio-description').textContent;
                
                // 这里可以添加模态框显示逻辑
                console.log('查看作品:', title);
            });
        });
    }

    // 滚动动画
    function setupScrollAnimations() {
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

        portfolioItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });

        // 观察其他元素
        const animatedElements = document.querySelectorAll('.philosophy-card, .client-item');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // 客户标志动画
    function setupClientAnimation() {
        const clientItems = document.querySelectorAll('.client-item');
        
        clientItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const logo = this.querySelector('.client-logo');
                logo.style.transform = 'scale(1.2)';
                logo.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                const logo = this.querySelector('.client-logo');
                logo.style.transform = 'scale(1)';
            });
        });
    }

    // 搜索功能
    function setupSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '搜索作品...';
        searchInput.className = 'portfolio-search';
        
        const filterSection = document.querySelector('.filter-section');
        filterSection.insertBefore(searchInput, filterSection.firstChild);

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            portfolioItems.forEach(item => {
                const title = item.querySelector('.portfolio-title').textContent.toLowerCase();
                const description = item.querySelector('.portfolio-description').textContent.toLowerCase();
                const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // 初始化所有功能
    setupImagePlaceholders();
    setupScrollAnimations();
    setupClientAnimation();
    setupSearch();
});

// 添加样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--spacing-lg);
        margin-top: var(--spacing-lg);
    }

    .portfolio-card {
        background: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: 0 5px 15px var(--color-shadow);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .portfolio-image {
        height: 200px;
        overflow: hidden;
    }

    .image-placeholder {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s ease;
        background: linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-primary) 100%);
    }

    .image-placeholder:hover {
        transform: scale(1.05);
    }

    .branding-placeholder {
        background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
    }

    .visualization-placeholder {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .web-placeholder {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }

    .publication-placeholder {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }

    .presentation-placeholder {
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    }

    .placeholder-text {
        font-size: 1.1rem;
        line-height: 1.4;
    }

    .portfolio-content {
        padding: var(--spacing-lg);
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .portfolio-title {
        font-size: 1.25rem;
        color: var(--color-primary);
        margin-bottom: var(--spacing-sm);
    }

    .portfolio-description {
        color: var(--color-text-light);
        line-height: 1.6;
        margin-bottom: var(--spacing-md);
        flex-grow: 1;
    }

    .portfolio-tags {
        margin-bottom: var(--spacing-md);
    }

    .portfolio-links {
        display: flex;
        gap: var(--spacing-sm);
        flex-wrap: wrap;
    }

    .portfolio-links .btn {
        font-size: 0.9rem;
        padding: var(--spacing-xs) var(--spacing-md);
    }

    .portfolio-search {
        width: 100%;
        max-width: 400px;
        padding: var(--spacing-sm) var(--spacing-md);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius);
        font-family: var(--font-primary);
        font-size: 1rem;
        margin-bottom: var(--spacing-md);
    }

    .design-philosophy {
        background: var(--color-background-light);
        padding: var(--spacing-xxl) 0;
        margin-top: var(--spacing-xxl);
    }

    .philosophy-card {
        text-align: center;
        padding: var(--spacing-lg);
    }

    .philosophy-icon {
        font-size: 3rem;
        margin-bottom: var(--spacing-md);
        display: block;
    }

    .clients-section {
        padding: var(--spacing-xl) 0;
    }

    .clients-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-lg);
        margin-top: var(--spacing-lg);
    }

    .client-item {
        text-align: center;
        padding: var(--spacing-lg);
        background: white;
        border-radius: var(--border-radius);
        box-shadow: 0 3px 10px var(--color-shadow);
        transition: transform 0.3s ease;
    }

    .client-item:hover {
        transform: translateY(-5px);
    }

    .client-logo {
        font-size: 2.5rem;
        margin-bottom: var(--spacing-sm);
        transition: transform 0.3s ease;
    }

    .client-item h4 {
        font-size: 1.1rem;
        color: var(--color-primary);
        margin-bottom: var(--spacing-xs);
    }

    .client-item p {
        color: var(--color-text-light);
        font-size: 0.9rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        .portfolio-grid {
            grid-template-columns: 1fr;
        }

        .portfolio-links {
            flex-direction: column;
        }

        .portfolio-links .btn {
            text-align: center;
        }

        .clients-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    }

    @media (max-width: 480px) {
        .portfolio-card {
            margin: 0 -1rem;
        }

        .filter-buttons {
            flex-direction: column;
            align-items: center;
        }
    }
`;

document.head.appendChild(style);
