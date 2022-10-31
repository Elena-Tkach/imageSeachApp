export const cloneCardToModal = (target, title, img, box) => {
  const targetParent = target.closest('.card__content');
  const targetLikes = targetParent.querySelector('.rating');
  const targetTitle = targetParent.querySelector('.info__title');
  const targetTags = targetParent.querySelector('.js-tags');
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