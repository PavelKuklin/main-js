const menu = () => {
  const clubsList = document.querySelector('.clubs-list'),
    headerMain = document.querySelector('.header-main'),
    clubsListLinks = clubsList.querySelector('ul'),
    popupMenu = document.querySelector('.popup-menu'),
    menuButton = document.querySelector('.menu-button'),
    topMenu = document.querySelector('.top-menu'),
    headMain = document.querySelector('.head-main'),
    totop = document.getElementById('totop');


  const handlerMenu = (event) => {  //выпадашка в шапке сайта. По клике на нее открвыает, дальше закрвыает ее. (можно сделать через тогл  и добавить класс) 
    let target = event.target;

    if (target.closest('.clubs-list')) {
      clubsListLinks.classList.toggle('show');
    } else if (!target.closest('.clubs-list') && clubsListLinks.matches('.show')) {
      clubsListLinks.classList.toggle('show');
    } else if (target.closest('.menu-button__image')) {
      popupMenu.style.display = 'flex';
    } else if (target.closest('.close-menu-btn') || target.closest('.scroll')) {
      popupMenu.style.display = 'none';
    }
  };

  const scrollMenu = (event) => {
    if (headerMain.getBoundingClientRect().bottom < 0) {
      totop.style.cssText = `display: block;`;
    } else {
      totop.style.cssText = `display: none;`;
    }
    if (document.documentElement.clientWidth < 768) {
      if (topMenu.getBoundingClientRect().top <= 0) {
        topMenu.style.cssText = `position: fixed; top: 0;`
      }

      if (headMain.getBoundingClientRect().bottom > topMenu.getBoundingClientRect().top) {
        console.log('fgd');
        topMenu.style.cssText = `position: relative;`
      };
    } else {
      topMenu.style.cssText = `position: relative;`
    }
  };


  headerMain.addEventListener('click', handlerMenu);
  window.addEventListener('scroll', scrollMenu);
  window.addEventListener('resize', scrollMenu);
}
export default menu;