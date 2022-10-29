export const cloneCardToModal = (target, title, img, box) => {
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

  const appentContentCard = () => {
    title.append(cloneTargetTitle);
    img.append(cloneImg);
    box.append(cloneTargetLikes);
    box.append(cloeTargetAuthors);
    box.append(cloneTargetTags);
  }

  return appentContentCard();

}

export const clearCardModal = (title, img, box) => {
  title.innerHTML = '';
  img.innerHTML = '';
  box.innerHTML = '';
}