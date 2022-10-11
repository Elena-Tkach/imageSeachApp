import { onShowContainer, onHideContainer } from './modal';

export const openCloseImg = (body, overlay) => {
  const cardsContainer = document.querySelector('.js-cards-container');
  const modalEl = document.querySelector('.js-modal');
  const btnCloseModalEl = document.querySelector('.js-btn-close-modal');
  const modalImg = document.querySelector('.js-modal-img');

  cardsContainer.addEventListener('click', event => {
    const target = event.target;


    if (target.classList.contains('card__img')) {

      onShowContainer(modalEl, body, overlay, btnCloseModalEl);

      const cloneImg = target.cloneNode(true);


      modalImg.append(cloneImg);

    }
  })

  btnCloseModalEl.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    modalImg.innerHTML = '';
  })

  overlay.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    modalImg.innerHTML = '';
  })



};