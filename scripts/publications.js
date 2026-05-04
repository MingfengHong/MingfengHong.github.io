document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pubItems = document.querySelectorAll('.pub-item');
    const yearTitles = document.querySelectorAll('.year-title');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            pubItems.forEach(item => {
                const itemType = item.getAttribute('data-type');
                item.style.display = (filter === 'all' || filter === itemType) ? 'block' : 'none';
            });

            updateYearTitles();
        });
    });

    function updateYearTitles() {
        yearTitles.forEach(title => {
            let next = title.nextElementSibling;
            let hasVisible = false;
            while (next && !next.classList.contains('year-title')) {
                if (next.classList.contains('pub-item') && next.style.display !== 'none') {
                    hasVisible = true;
                }
                next = next.nextElementSibling;
            }
            title.style.display = hasVisible ? 'block' : 'none';
        });
    }
});
