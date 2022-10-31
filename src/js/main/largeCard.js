import { onShowContainer, onHideContainer } from '../app/modal';
import { cloneCardToModal, clearCardModal } from '../app/cards/cloneCard';

export const onClickCardLargeSize = () => {
  const modalEl = document.querySelector('.js-modal');
  const modalTitle = document.querySelector('.js-modal-title');
  const modalImg = document.querySelector('.js-modal-img');
  const modalBody = document.querySelector('.js-modal-body');

  document.body.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('card__img')) {
      onShowContainer(modalEl);
      cloneCardToModal(target, modalTitle, modalImg, modalBody);
    }

    if (target.classList.contains('js-btn-close')) {
      onHideContainer(modalEl);
      clearCardModal(modalTitle, modalImg, modalBody);

    }

    if (target.classList.contains('js-overlay')) {
      onHideContainer(modalEl);
      clearCardModal(modalTitle, modalImg, modalBody);
    }
  })

};