const menuButton = document.querySelector('.header-menu');
const menu = document.querySelector('.menu-aside');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu-aside-active');
})

const linkButton = document.querySelector('.menu-aside-link');

linkButton.addEventListener('mouseover', () => {
  linkButton.classList.toggle('menu-aside-link-active')
})