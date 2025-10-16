// 出版物筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');

    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选出版物
            publicationItems.forEach(item => {
                const itemType = item.getAttribute('data-type');
                
                if (filter === 'all' || filter === itemType) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // 更新年份标题显示
            updateYearSections();
        });
    });

    // 更新年份部分显示
    function updateYearSections() {
        const yearSections = document.querySelectorAll('.year-section');
        
        yearSections.forEach(section => {
            const visibleItems = section.querySelectorAll('.publication-item[style*="block"], .publication-item:not([style*="none"])');
            
            if (visibleItems.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    }

    // 统计信息动画
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 30);
        });
    }

    // 页面滚动到统计部分时触发动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats-summary');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // 展开/收起摘要功能
    const abstracts = document.querySelectorAll('.publication-abstract');
    abstracts.forEach(abstract => {
        if (abstract.scrollHeight > 100) {
            abstract.style.maxHeight = '80px';
            abstract.style.overflow = 'hidden';
            abstract.style.position = 'relative';
            
            // 添加"展开"按钮
            const expandBtn = document.createElement('button');
            expandBtn.textContent = '展开摘要';
            expandBtn.className = 'expand-btn';
            expandBtn.style.cssText = `
                background: none;
                border: none;
                color: var(--color-accent-blue);
                cursor: pointer;
                font-size: 0.9rem;
                margin-top: 0.5rem;
                text-decoration: underline;
            `;
            
            abstract.parentNode.insertBefore(expandBtn, abstract.nextSibling);
            
            expandBtn.addEventListener('click', function() {
                if (abstract.style.maxHeight === '80px') {
                    abstract.style.maxHeight = abstract.scrollHeight + 'px';
                    this.textContent = '收起摘要';
                } else {
                    abstract.style.maxHeight = '80px';
                    this.textContent = '展开摘要';
                }
            });
        }
    });

    // 搜索功能
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索出版物...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 0.75rem 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius);
        font-family: var(--font-primary);
        font-size: 1rem;
        margin-bottom: 1rem;
    `;

    const filterSection = document.querySelector('.filter-section');
    filterSection.insertBefore(searchInput, filterSection.firstChild);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        publicationItems.forEach(item => {
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            const authors = item.querySelector('.authors').textContent.toLowerCase();
            const abstract = item.querySelector('.publication-abstract').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || authors.includes(searchTerm) || abstract.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        updateYearSections();
    });
});

// CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .stats-summary {
        background: white;
        border-radius: var(--border-radius);
        padding: var(--spacing-lg);
        box-shadow: 0 5px 15px var(--color-shadow);
        margin-bottom: var(--spacing-lg);
    }

    .stat-item {
        padding: var(--spacing-md);
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--color-accent-blue);
        display: block;
    }

    .stat-label {
        font-size: 1rem;
        color: var(--color-text-light);
        margin-top: var(--spacing-xs);
    }

    .filter-section {
        text-align: center;
        margin-bottom: var(--spacing-lg);
    }

    .filter-buttons {
        display: flex;
        gap: var(--spacing-sm);
        justify-content: center;
        flex-wrap: wrap;
    }

    .filter-btn {
        margin: 0;
    }

    .filter-btn.active {
        background: var(--color-primary);
        color: white;
    }

    .year-section {
        margin-bottom: var(--spacing-xl);
    }

    .year-title {
        font-size: 1.75rem;
        color: var(--color-primary);
        border-bottom: 2px solid var(--color-accent-blue);
        padding-bottom: var(--spacing-xs);
        margin-bottom: var(--spacing-lg);
    }

    .publication-item {
        margin-bottom: var(--spacing-lg);
    }

    .authors {
        color: var(--color-text);
        margin-bottom: var(--spacing-xs);
        font-size: 1rem;
    }

    .authors strong {
        color: var(--color-primary);
    }

    .journal-info {
        color: var(--color-accent-blue);
        font-style: italic;
        margin-bottom: var(--spacing-sm);
    }

    .publication-meta {
        margin-bottom: var(--spacing-sm);
    }

    .publication-abstract {
        margin-bottom: var(--spacing-sm);
        color: var(--color-text-light);
        line-height: 1.6;
        transition: max-height 0.3s ease;
    }

    .publication-links {
        display: flex;
        gap: var(--spacing-sm);
        flex-wrap: wrap;
    }

    .publication-links .btn {
        font-size: 0.9rem;
        padding: var(--spacing-xs) var(--spacing-sm);
    }

    .academic-service ul {
        list-style: none;
        padding: 0;
    }

    .academic-service li {
        padding: var(--spacing-xs) 0;
        border-bottom: 1px solid var(--color-border);
    }

    .academic-service li:last-child {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        .filter-buttons {
            flex-direction: column;
            align-items: center;
        }

        .publication-links {
            flex-direction: column;
        }

        .publication-links .btn {
            text-align: center;
        }
    }
`;

document.head.appendChild(style);
