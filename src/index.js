const burger = document.querySelector('.header-burger');
const menuLinks = document.querySelectorAll('.mobile-menu-background a');
const mobileMenu = document.querySelector('.mobile-menu-background');
const closeBtn = document.querySelector('.menu-btn');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});

closeBtn.addEventListener('click', event => {
    mobileMenu.classList.remove('is-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
