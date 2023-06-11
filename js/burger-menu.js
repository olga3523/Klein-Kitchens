const burgerMenu = document.querySelector('.burger-menu');
const btnBurgerMenu = document.querySelector('.btn-burger-menu');

function togglerBurgerMenu() {
  btnBurgerMenu.classList.toggle('i-burger');
  btnBurgerMenu.classList.toggle('i-close');
  burgerMenu.classList.toggle('open');

  document.body.classList.toggle('page-fixed');
}

btnBurgerMenu.addEventListener('click', togglerBurgerMenu);
burgerMenu.addEventListener('click', togglerBurgerMenu);
