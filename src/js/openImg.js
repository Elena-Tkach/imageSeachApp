import { onShowContainer, onHideContainer } from './modal';

export const openCloseImg = (body, overlay) => {
  const cardsContainer = document.querySelector('.js-cards-container');
  const modalEl = document.querySelector('.js-modal');
  const btnCloseModalEl = document.querySelector('.js-btn-close-modal');
  const modalContentEl = document.querySelector('.js-modal-content');

  cardsContainer.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('card__img')) {
      onShowContainer(modalEl, body, overlay, btnCloseModalEl);
      const cloneImg = target.cloneNode(true);
      modalContentEl.append(cloneImg);
    }
  })

  btnCloseModalEl.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    modalContentEl.innerHTML = '';
  })

  overlay.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    modalContentEl.innerHTML = '';
  })



};