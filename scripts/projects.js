// 开源项目页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选项目
            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // GitHub统计动画
    function animateGitHubStats() {
        const statNumbers = document.querySelectorAll('.github-stats .stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 60;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 25);
        });
    }

    // 语言统计条动画
    function animateLanguageBars() {
        const bars = document.querySelectorAll('.bar-container .bar');
        
        bars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            bar.style.transition = 'width 1.5s ease-out';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }

    // 滚动观察者
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('github-stats')) {
                    animateGitHubStats();
                }
                if (entry.target.classList.contains('language-stats')) {
                    animateLanguageBars();
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const githubStats = document.querySelector('.github-stats');
    const languageStats = document.querySelector('.language-stats');
    
    if (githubStats) observer.observe(githubStats);
    if (languageStats) observer.observe(languageStats);

    // 项目卡片悬浮效果
    projectItems.forEach(item => {
        const card = item.querySelector('.project-card');
        
        item.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // 搜索功能
    function setupSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '搜索项目...';
        searchInput.className = 'project-search';
        
        const filterSection = document.querySelector('.filter-section');
        filterSection.insertBefore(searchInput, filterSection.firstChild);

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            projectItems.forEach(item => {
                const title = item.querySelector('.project-title').textContent.toLowerCase();
                const description = item.querySelector('.project-description').textContent.toLowerCase();
                const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // 状态徽章动画
    function setupStatusBadges() {
        const statusBadges = document.querySelectorAll('.status-badge');
        
        statusBadges.forEach(badge => {
            if (badge.textContent.includes('活跃')) {
                badge.style.animation = 'pulse 2s infinite';
            }
        });
    }

    // 项目统计工具提示
    function setupTooltips() {
        const stats = document.querySelectorAll('.project-stats .stat');
        
        stats.forEach(stat => {
            stat.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                
                const text = this.textContent.trim();
                if (text.includes('⭐')) {
                    tooltip.textContent = 'GitHub Stars';
                } else if (text.includes('🍴')) {
                    tooltip.textContent = 'Forks';
                } else if (text.includes('📥')) {
                    tooltip.textContent = 'Downloads';
                } else if (text.includes('🐛')) {
                    tooltip.textContent = 'Open Issues';
                }
                
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
                
                this.addEventListener('mouseleave', function() {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, { once: true });
            });
        });
    }

    // 初始化所有功能
    setupSearch();
    setupStatusBadges();
    setupTooltips();

    // 项目展开/收起功能
    const projectDescriptions = document.querySelectorAll('.project-description');
    
    projectDescriptions.forEach(desc => {
        const p = desc.querySelector('p');
        if (p && p.textContent.length > 120) {
            const fullText = p.textContent;
            const shortText = fullText.substring(0, 120) + '...';
            
            p.textContent = shortText;
            
            const expandBtn = document.createElement('button');
            expandBtn.textContent = '展开';
            expandBtn.className = 'expand-description-btn';
            expandBtn.style.cssText = `
                background: none;
                border: none;
                color: var(--color-accent-blue);
                cursor: pointer;
                font-size: 0.9rem;
                margin-left: 0.5rem;
                text-decoration: underline;
            `;
            
            p.appendChild(expandBtn);
            
            expandBtn.addEventListener('click', function() {
                if (p.textContent.includes('...')) {
                    p.textContent = fullText;
                    this.textContent = '收起';
                } else {
                    p.textContent = shortText;
                    p.appendChild(this);
                    this.textContent = '展开';
                }
            });
        }
    });
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

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .github-stats {
        background: white;
        border-radius: var(--border-radius);
        padding: var(--spacing-lg);
        box-shadow: 0 5px 15px var(--color-shadow);
    }

    .stat-item {
        padding: var(--spacing-md);
        text-align: center;
    }

    .stat-icon {
        font-size: 2rem;
        margin-bottom: var(--spacing-xs);
        display: block;
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--color-accent-blue);
        display: block;
    }

    .stat-label {
        color: var(--color-text-light);
        font-size: 1rem;
        margin-top: var(--spacing-xs);
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: var(--spacing-lg);
        margin-top: var(--spacing-lg);
    }

    .project-card {
        background: white;
        border-radius: var(--border-radius);
        padding: var(--spacing-lg);
        box-shadow: 0 5px 15px var(--color-shadow);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .project-item.featured .project-card {
        border-left: 4px solid var(--color-accent-gold);
        background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: var(--spacing-sm);
    }

    .project-title {
        font-size: 1.5rem;
        color: var(--color-primary);
        margin: 0;
        flex-grow: 1;
    }

    .project-status {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
        align-items: flex-end;
    }

    .status-badge {
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
        white-space: nowrap;
    }

    .status-badge.active {
        background: #d4edda;
        color: #155724;
    }

    .status-badge.stable {
        background: #cce5ff;
        color: #004085;
    }

    .status-badge.beta {
        background: #fff3cd;
        color: #856404;
    }

    .status-badge.archive {
        background: #f8d7da;
        color: #721c24;
    }

    .language-badge {
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: 15px;
        font-size: 0.75rem;
        font-weight: 500;
        color: white;
    }

    .language-badge.python {
        background: #3776ab;
    }

    .language-badge.r {
        background: #276DC3;
    }

    .language-badge.javascript {
        background: #f7df1e;
        color: #333;
    }

    .language-badge.jupyter {
        background: #f37626;
    }

    .language-badge.data {
        background: #6c757d;
    }

    .project-description {
        margin-bottom: var(--spacing-md);
        color: var(--color-text-light);
        line-height: 1.6;
    }

    .project-features {
        margin-bottom: var(--spacing-md);
    }

    .project-features h4 {
        font-size: 1rem;
        color: var(--color-primary);
        margin-bottom: var(--spacing-xs);
    }

    .project-features ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .project-features li {
        padding: var(--spacing-xs) 0;
        color: var(--color-text-light);
        position: relative;
        padding-left: 1.2rem;
    }

    .project-features li:before {
        content: '▸';
        position: absolute;
        left: 0;
        color: var(--color-accent-blue);
    }

    .project-stats {
        display: flex;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-md);
        flex-wrap: wrap;
    }

    .project-stats .stat {
        font-size: 0.9rem;
        color: var(--color-text-light);
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .project-stats .stat:hover {
        color: var(--color-primary);
    }

    .project-tags {
        margin-bottom: var(--spacing-md);
    }

    .project-links {
        display: flex;
        gap: var(--spacing-sm);
        flex-wrap: wrap;
        margin-top: auto;
    }

    .project-links .btn {
        font-size: 0.9rem;
        padding: var(--spacing-xs) var(--spacing-md);
    }

    .project-search {
        width: 100%;
        max-width: 400px;
        padding: var(--spacing-sm) var(--spacing-md);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius);
        font-family: var(--font-primary);
        font-size: 1rem;
        margin-bottom: var(--spacing-md);
    }

    .contribution-section {
        background: var(--color-background-light);
        padding: var(--spacing-xxl) 0;
    }

    .contribution-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
        margin-top: var(--spacing-lg);
    }

    .contribution-chart,
    .language-stats {
        background: white;
        padding: var(--spacing-lg);
        border-radius: var(--border-radius);
        box-shadow: 0 5px 15px var(--color-shadow);
    }

    .activity-placeholder {
        text-align: center;
        padding: var(--spacing-xl);
        background: var(--color-background-light);
        border-radius: var(--border-radius);
        color: var(--color-text-light);
    }

    .language-bars {
        margin-top: var(--spacing-md);
    }

    .language-bar {
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing-md);
        gap: var(--spacing-md);
    }

    .language-name {
        width: 100px;
        font-weight: 500;
        color: var(--color-text);
    }

    .bar-container {
        flex-grow: 1;
        height: 20px;
        background: var(--color-background-light);
        border-radius: 10px;
        overflow: hidden;
    }

    .bar {
        height: 100%;
        border-radius: 10px;
        transition: width 1.5s ease-out;
    }

    .python-bar {
        background: #3776ab;
    }

    .r-bar {
        background: #276DC3;
    }

    .js-bar {
        background: #f7df1e;
    }

    .other-bar {
        background: #6c757d;
    }

    .percentage {
        width: 40px;
        text-align: right;
        font-weight: 500;
        color: var(--color-text);
    }

    .opensource-philosophy {
        padding: var(--spacing-xl) 0;
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

    .tooltip {
        position: absolute;
        background: var(--color-primary);
        color: white;
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--border-radius);
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    .tooltip:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-top-color: var(--color-primary);
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }

        .project-header {
            flex-direction: column;
            gap: var(--spacing-sm);
        }

        .project-status {
            flex-direction: row;
            align-items: flex-start;
        }

        .contribution-grid {
            grid-template-columns: 1fr;
        }

        .project-stats {
            justify-content: center;
        }

        .project-links {
            flex-direction: column;
        }
    }
`;

document.head.appendChild(style);
