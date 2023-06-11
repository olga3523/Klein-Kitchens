const sitePages = document.querySelectorAll('.page');

const navPages = document.querySelector('.section-navigation');
const navItems = navPages.querySelectorAll('a');

function onPageScroll() {
  sitePages.forEach((page, i) => {
    if (page.offsetTop - 100 <= window.scrollY) {
      navPages.querySelector('.active').classList.remove('active');
      navItems[i].classList.add('active');
    }
  });
}

document.addEventListener('scroll', onPageScroll);
