'use strict';

function drawNav() {
    const header = document.querySelector('#header');
    const menu = document.querySelector('.header_nav');
    const menuTrigger = document.querySelector('.hamburger');
    const menuLinks = document.querySelectorAll('.header_nav-list .list-item a');

    function closeMenu() {
        menuTrigger.classList.remove('active');
        menu.classList.remove('active');
    }

    menuTrigger.addEventListener('click', () => {
        menuTrigger.classList.toggle('active');
        menu.classList.toggle('active');
        if (window.scrollY === 0 || menu.classList.contains('active')) {
            header.classList.add('sticky');
        }
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    })

    window.addEventListener('resize', () => {
        closeMenu();
        if (window.scrollY === 0) {
            header.classList.remove('sticky');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    })
}

export default drawNav;