export const openHideSidebar = (body) => {
  const btnOpenSidebarEl = document.querySelector('.js-btn-open-sidebar');
  const btnCloseSidebarEl = document.querySelector('.js-btn-close-sidebar');
  
  const sidebarEl = document.querySelector('.js-sidebar');
  const overlayEl = document.querySelector('.js-overlay');
  let previousActiveElement;


  const onShowBlock = () => {
    sidebarEl.classList.add('open');
    overlayEl.classList.add('open');
    body.classList.add('no-scroll');

    previousActiveElement = document.activeElement;

    setTimeout(() => {
      btnCloseSidebarEl.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);
  }

  const onHideBlock = () => {
    sidebarEl.classList.remove('open');
    overlayEl.classList.remove('open');
    body.classList.remove('no-scroll');

    previousActiveElement.focus();

    document.removeEventListener('keydown', onPressEscKeydown);
  }

  const onPressEscKeydown = (el) => {
    if (el.code === `Escape`) {
      onHideBlock();
    }
  };

  btnOpenSidebarEl.addEventListener('click', onShowBlock);
  btnCloseSidebarEl.addEventListener('click', onHideBlock);
  overlayEl.addEventListener('click', onHideBlock);


}

