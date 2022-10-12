import { onShowContainer, onHideContainer } from './modal';

export const openCloseImg = (body, overlay) => {
  const cardsContainer = document.querySelector('.js-cards-container');
  const modalEl = document.querySelector('.js-modal');
  const btnCloseModalEl = document.querySelector('.js-btn-close-modal');
  const modalImg = document.querySelector('.js-modal-img');
  const modalContent = document.querySelector('.js-modal-content');

  cardsContainer.addEventListener('click', event => {
    const target = event.target;
    const targetParent = target.parentElement;
    const targetParentChildChild = targetParent.lastElementChild.lastElementChild;
    
    const cloneImg = target.cloneNode(true);
    const cloneTargetParentChildChild = targetParentChildChild.cloneNode(true);

    if (target.classList.contains('card__img')) {

      onShowContainer(modalEl, body, overlay, btnCloseModalEl);




      modalImg.append(cloneImg);
      modalContent.append(cloneTargetParentChildChild);

    }
  })

  btnCloseModalEl.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    modalImg.innerHTML = '';
    modalContent.innerHTML = '';
  })

  overlay.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    modalImg.innerHTML = '';
    modalContent.innerHTML = '';
  })



};