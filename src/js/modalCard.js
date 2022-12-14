import { onShowContainer, onHideContainer } from './utils';

const cloneCardToModal = (target, title, img, box) => {
  const targetParent = target.closest('.card__content');
  const targetLikes = targetParent.querySelector('.rating');
  const targetTitle = targetParent.querySelector('.info__title');
  const targetTags = targetParent.querySelector('.js-card-tags');
  const targetAuthor = targetParent.querySelector('.author');


  const cloneImg = target.cloneNode(true);
  const cloneTargetTags = targetTags.cloneNode(true);
  const cloneTargetTitle = targetTitle.cloneNode(true);
  const cloneTargetLikes = targetLikes.cloneNode(true);
  const clonTargetAuthor = targetAuthor.cloneNode(true);

  const appentContentCard = () => {
    title.appendChild(cloneTargetTitle);
    img.append(cloneImg);
    box.append(cloneTargetLikes);
    box.append(clonTargetAuthor);
    box.append(cloneTargetTags);
  }
  return appentContentCard();

}

export const clearCardModal = (title, img, box) => {
  title.innerHTML = '';
  img.innerHTML = '';
  box.innerHTML = '';
}

export const modalCardHandler = () => {
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