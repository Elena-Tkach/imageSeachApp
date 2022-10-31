let previousActiveElement;
const overlayEl = document.querySelector('.js-overlay');

export const onShowContainer = (container, btnClose) => {
  container.classList.add('js-visible');
  overlayEl.classList.add('js-visible');
  document.body.classList.add('no-scroll');

  previousActiveElement = document.activeElement;

  setTimeout(() => {
    btnClose.focus();
  }, 100);

};

export const onHideContainer = (container) => {
  container.classList.remove('js-visible');
  overlayEl.classList.remove('js-visible');
  document.body.classList.remove('no-scroll');
  previousActiveElement.focus();

};


