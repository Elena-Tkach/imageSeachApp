import { onShowContainer, onHideContainer } from './modal';
import { cloneCardToModal, clearCardModal } from '../app/cards/cloneCard';

export const onClickCardLargeSize = () => {
  const cardsContainer = document.querySelector('.js-cards-container');
  const modalEl = document.querySelector('.js-modal');
  const btnCloseModalEl = document.querySelector('.js-btn-close-modal');
  const modalTitle = document.querySelector('.js-modal-title');
  const modalImg = document.querySelector('.js-modal-img');
  const modalBody = document.querySelector('.js-modal-body');
  const overlayEl = document.querySelector('.js-overlay');

  cardsContainer.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('card__img')) {
      onShowContainer(modalEl, document.body, overlayEl, btnCloseModalEl);
      cloneCardToModal(target, modalTitle, modalImg, modalBody);

    }
  })

  btnCloseModalEl.addEventListener('click', () => {
    onHideContainer(modalEl, document.body, overlayEl);
    clearCardModal(modalTitle, modalImg, modalBody);
  })

  overlayEl.addEventListener('click', () => {
    onHideContainer(modalEl, document.body, overlayEl);
    clearCardModal(modalTitle, modalImg, modalBody);

  })
};