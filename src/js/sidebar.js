import { onShowContainer, onHideContainer } from './modal';

export const openHideSidebar = (body, overlay) => {
  const btnOpenSidebarEl = document.querySelector('.js-btn-open-sidebar');
  const btnCloseSidebarEl = document.querySelector('.js-btn-close-sidebar');
  const sidebarEl = document.querySelector('.js-sidebar');




  btnOpenSidebarEl.addEventListener('click', () => {
    onShowContainer(sidebarEl, body, overlay, btnCloseSidebarEl);
  });

  btnCloseSidebarEl.addEventListener('click', () => {
    onHideContainer(sidebarEl, body, overlay);
  });

  overlay.addEventListener('click', () => {
    onHideContainer(sidebarEl, body, overlay);
  });

 


};

