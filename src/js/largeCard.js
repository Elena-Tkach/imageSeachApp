import { onShowContainer, onHideContainer } from './modal';
import { cloneCardToModal, clearCardModal } from './cards/cloneCard';

export const onClickCardLargeSize = (body, overlay) => {
  const cardsContainer = document.querySelector('.js-cards-container');
  const modalEl = document.querySelector('.js-modal');
  const btnCloseModalEl = document.querySelector('.js-btn-close-modal');
  const modalTitle = document.querySelector('.js-modal-title');
  const modalImg = document.querySelector('.js-modal-img');
  const modalBody = document.querySelector('.js-modal-body');

  cardsContainer.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('card__img')) {
      onShowContainer(modalEl, body, overlay, btnCloseModalEl);
      cloneCardToModal(target, modalTitle, modalImg, modalBody);

    }
  })

  btnCloseModalEl.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    clearCardModal(modalTitle, modalImg, modalBody);
  })

  overlay.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    clearCardModal(modalTitle, modalImg, modalBody);

  })
};