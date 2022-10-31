import { onShowContainer, onHideContainer } from '../app/modal';

export const openHideSidebar = () => {
  const btnOpenSidebarEl = document.querySelector('.js-btn-open-sidebar');
  const btnCloseSidebarEl = document.querySelector('.js-btn-close-sidebar');
  const sidebarEl = document.querySelector('.js-sidebar');
  const overlayEl = document.querySelector('.js-overlay');


  btnOpenSidebarEl.addEventListener('click', () => {
    onShowContainer(sidebarEl, btnCloseSidebarEl);
  });

  btnCloseSidebarEl.addEventListener('click', () => {
    onHideContainer(sidebarEl);
  });

  overlayEl.addEventListener('click', () => {
    onHideContainer(sidebarEl);
  });

};

