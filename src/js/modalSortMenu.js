export const modalSortMenu = (body) => {
  const btnOpenSortModalEl = document.querySelector('.js-btn-sort-modal');
  const modalSortEl = document.querySelector('.js-modal-sort');
  const btnCloseSortModalEl = document.querySelector('.btn-close-sort');
  const overlayEl = document.querySelector('.js-overlay');
  let previousActiveElement;


  const onShoModalSort = () => {
    modalSortEl.classList.add('open');
    overlayEl.classList.add('open');
    body.classList.add('no-scroll');

    previousActiveElement = document.activeElement;

    setTimeout(() => {
      btnCloseSortModalEl.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);
  }

  const onHideModalSort = () => {
    modalSortEl.classList.remove('open');
    overlayEl.classList.remove('open');
    body.classList.remove('no-scroll');

    previousActiveElement.focus();

    document.removeEventListener('keydown', onPressEscKeydown);
  }

  const onPressEscKeydown = (el) => {
    if (el.code === `Escape`) {
      onHideModalSort();
    }
  };

  btnOpenSortModalEl.addEventListener('click', onShoModalSort);
  btnCloseSortModalEl.addEventListener('click', onHideModalSort);
  overlayEl.addEventListener('click', onHideModalSort);


}

