document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!navToggle || !navMenu) return;

    const translate = (key) => window.siteI18n?.t(key) || key;

    const updateToggleLabel = (isOpen = navMenu.classList.contains('active')) => {
        navToggle.setAttribute('aria-label', translate(isOpen ? '关闭导航菜单' : '打开导航菜单'));
    };

    const closeMenu = () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        updateToggleLabel(false);
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        updateToggleLabel(isOpen);
    });

    navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1080) closeMenu();
    });

    window.addEventListener('site:languagechange', () => updateToggleLabel());
    updateToggleLabel();
});
