  let previousActiveElement;

export const onShowContainer = (container, body, overlay, btnClose) => {
    container.classList.add('js-visible');
    overlay.classList.add('js-visible');
    body.classList.add('no-scroll');

    previousActiveElement = document.activeElement;

    setTimeout(() => {
      btnClose.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);
  };


export const onHideContainer = (container, body, overlay) => {
    container.classList.remove('js-visible');
    overlay.classList.remove('js-visible');
    body.classList.remove('no-scroll');

    previousActiveElement.focus();

     document.removeEventListener('keydown', onPressEscKeydown);
    
  };

  // в onHideContainer необходимо передать переменные, но при передаче 
  // выдает ошибку: что не возможно найти (el); 
  // Не знаю: как исправить это. :(
  const onPressEscKeydown = (el) => {
    if (el.code === `Escape`) {
      onHideContainer();
    }
  };


  