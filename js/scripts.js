        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        function showPage(pageId) {
            pages.forEach(page => {
                page.classList.toggle('active', page.id === pageId);
            });
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.page === pageId);
            });
        }
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(link.dataset.page);
            });
        });
        document.getElementById('logo').addEventListener('click', () => {
            showPage('home');
        });