window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('#mainNav');
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    const collapse = document.querySelector('#navbarResponsive');

    const updateNav = () => {
        nav.classList.toggle('scrolled', window.scrollY > 24);
    };
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (collapse && collapse.classList.contains('show') && window.bootstrap) {
                bootstrap.Collapse.getOrCreateInstance(collapse).hide();
            }
        });
    });
});
