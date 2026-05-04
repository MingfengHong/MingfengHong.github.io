document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            workItems.forEach(item => {
                const category = item.getAttribute('data-category');
                item.style.display = (filter === 'all' || filter === category) ? 'grid' : 'none';
            });
        });
    });
});
