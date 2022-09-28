import {onShowContainer, onHideContainer}  from './modal';

export const openHideSidebar = (body) => {
  const btnOpenSidebarEl = document.querySelector('.js-btn-open-sidebar');
  const btnCloseSidebarEl = document.querySelector('.js-btn-close-sidebar');
  
  const sidebarEl = document.querySelector('.js-sidebar');
  const overlayEl = document.querySelector('.js-overlay');

  btnOpenSidebarEl.addEventListener('click', () => {
    onShowContainer(sidebarEl, body, overlayEl,  btnCloseSidebarEl);
  });

  btnCloseSidebarEl.addEventListener('click', () => {
    onHideContainer(sidebarEl, body, overlayEl );
  });

  overlayEl.addEventListener('click', () => {
    onHideContainer( sidebarEl, body,  overlayEl);
  });

};

