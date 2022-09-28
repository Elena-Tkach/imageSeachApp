  let previousActiveElement;

export const onShowContainer = (container, body, overlay, btnClose) => {
    container.classList.add('open');
    overlay.classList.add('open');
    body.classList.add('no-scroll');

    previousActiveElement = document.activeElement;

    setTimeout(() => {
      btnClose.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);
  }

export const onHideContainer = (container, body, overlay) => {
    container.classList.remove('open');
    overlay.classList.remove('open');
    body.classList.remove('no-scroll');

    previousActiveElement.focus();

     document.removeEventListener('keydown', onPressEscKeydown);
    
  }

  const onPressEscKeydown = (el) => {
    if (el.code === `Escape`) {
      onHideContainer();
    }
  };
