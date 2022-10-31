import { onShowContainer, onHideContainer } from '../app/modal';

export const openHideSidebar = () => {
  const btnOpenSidebarEl = document.querySelector('.js-btn-open-sidebar');
  const sidebarEl = document.querySelector('.js-sidebar');
  const overlayEl = document.querySelector('.js-overlay');


  btnOpenSidebarEl.addEventListener('click', () => {
    onShowContainer(sidebarEl);
  });

  sidebarEl.addEventListener('click', event => {
    if (event.target.classList.contains('js-btn-close')) {
      onHideContainer(sidebarEl);
    }

  })

  overlayEl.addEventListener('click', () => {
    onHideContainer(sidebarEl);
  });

};

