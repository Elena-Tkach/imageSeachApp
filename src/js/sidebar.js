import { onShowContainer, onHideContainer } from './modal';

export const openHideSidebar = (body) => {
  const btnOpenSidebarEl = document.querySelector('.js-btn-open-sidebar');
  const btnCloseSidebarEl = document.querySelector('.js-btn-close-sidebar');
  const sidebarEl = document.querySelector('.js-sidebar');
  const overlayEl = document.querySelector('.js-overlay');

  const cardsContainer = document.querySelector('.js-cards-container');

  //---- нет на странице. Пустой NodeList 
  const cards = document.querySelectorAll('.js-card');
  console.log(cards);

  btnOpenSidebarEl.addEventListener('click', () => {
    onShowContainer(sidebarEl, body, overlayEl, btnCloseSidebarEl);
  });

  btnCloseSidebarEl.addEventListener('click', () => {
    onHideContainer(sidebarEl, body, overlayEl);
  });

  overlayEl.addEventListener('click', () => {
    onHideContainer(sidebarEl, body, overlayEl);
  });


  cardsContainer.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('card__img')) {
      target.classList.add('open');
      console.log(target);
      // onShowContainer(target, body, overlayEl, btnCloseSidebarEl);

    }
  })

};

