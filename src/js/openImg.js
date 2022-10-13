import { onShowContainer, onHideContainer } from './modal';

export const openCloseImg = (body, overlay) => {
  const cardsContainer = document.querySelector('.js-cards-container');
  const modalEl = document.querySelector('.js-modal');
  const btnCloseModalEl = document.querySelector('.js-btn-close-modal');
  const modalTitle = document.querySelector('.js-modal-title');
  const modalImg = document.querySelector('.js-modal-img');
  const modalBody = document.querySelector('.js-modal-body');

  cardsContainer.addEventListener('click', event => {
    const target = event.target;
    const targetParent = target.parentElement;
    const targetParentTags = targetParent.lastElementChild.lastElementChild;
    const targetParentTitle = targetParent.lastElementChild.childNodes[3].lastElementChild;
    const targetParentAuthors = targetParent.lastElementChild.childNodes[3].firstElementChild;
    const targetParentLikes = targetParent.lastElementChild.childNodes[1].firstElementChild;

    const cloneImg = target.cloneNode(true);
    const cloneTargetTags = targetParentTags.cloneNode(true);
    const cloneTargetTitle = targetParentTitle.cloneNode(true);
    const cloneTargetLikes = targetParentLikes.cloneNode(true);
    const cloeTargetAuthors = targetParentAuthors.cloneNode(true);

    if (target.classList.contains('card__img')) {
      onShowContainer(modalEl, body, overlay, btnCloseModalEl);

      console.log(targetParentLikes);
      modalTitle.append(cloneTargetTitle);
      modalImg.append(cloneImg);
      modalBody.append(cloneTargetLikes);
      modalBody.append(cloeTargetAuthors);
      modalBody.append(cloneTargetTags);

    }
  })

  btnCloseModalEl.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);

    modalTitle.innerHTML = '';
    modalImg.innerHTML = '';
    modalBody.innerHTML = '';
  })

  overlay.addEventListener('click', () => {
    onHideContainer(modalEl, body, overlay);
    modalTitle.innerHTML = '';
    modalImg.innerHTML = '';
    modalBody.innerHTML = '';
  })



};