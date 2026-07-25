document.addEventListener('DOMContentLoaded', () => {
    const buttons = [...document.querySelectorAll('.filter-btn[data-filter]')];
    const items = [...document.querySelectorAll('.pub-item[data-type]')];
    const groups = [...document.querySelectorAll('.collection-group')];

    if (!buttons.length || !items.length) return;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            buttons.forEach((candidate) => {
                const active = candidate === button;
                candidate.classList.toggle('active', active);
                candidate.setAttribute('aria-pressed', String(active));
            });

            items.forEach((item) => {
                item.hidden = filter !== 'all' && item.dataset.type !== filter;
            });

            groups.forEach((group) => {
                group.hidden = !group.querySelector('.pub-item:not([hidden])');
            });
        });
    });
});
