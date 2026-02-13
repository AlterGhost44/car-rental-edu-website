const menu = document.querySelector('.nav_mobile');
const burger = document.querySelector('.toogle_menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});