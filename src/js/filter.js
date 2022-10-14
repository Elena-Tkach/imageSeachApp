import { renderCardsList } from './cards/renderCardsList';

export const filterTags = (cards) => {
  const containerTagList = document.querySelector('.js-tag-list');
  const tagListCard = document.querySelector('.js-tags');

  console.log(tagListCard);
  const filterTagsOnPage = (target) => {
    return cards.filter(({ tags: arr }) => arr.some(tag => target.value.includes(tag)));
  }

  tagListCard.addEventListener('click', event => {
    const target = event.target;
    const result = filterTagsOnPage(target);
    console.log(target);

    if (target.classList.contains('tag__btn')) {
      console.log(target);
      if (result) return renderCardsList(result);
      if (!result) return console.log('fail');
    }

  })

  containerTagList.addEventListener('click', event => {
    const target = event.target;
    const result = filterTagsOnPage(target);

    if (target.classList.contains('tag__btn')) {
      if (result) return renderCardsList(result);
      if (!result) return console.log('fail');
    }

  });



}


