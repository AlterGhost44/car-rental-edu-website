const menu = document.querySelector('.nav_mobile');
const burger = document.querySelector('.toogle_menu');

if (menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });
}