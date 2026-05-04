document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectRows = document.querySelectorAll('.project-row');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            projectRows.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                item.style.display = (filter === 'all' || categories.includes(filter)) ? 'block' : 'none';
            });
        });
    });
});
