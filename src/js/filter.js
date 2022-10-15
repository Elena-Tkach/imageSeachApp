import { renderCardsList } from './cards/renderCardsList';

export const filterTags = (cards) => {
  const containerTagList = document.querySelector('.js-tag-list');
  const tagListCard = document.querySelectorAll('.js-tags');

  const filterTagsOnPage = (target) => {
    return cards.filter(({ tags: arr }) => arr.some(tag => target.value.includes(tag)));
  }

  //doesn't work
  tagListCard.forEach(list => {
    list.addEventListener('click', event => {
      const target = event.target;
      const result = filterTagsOnPage(target);
      console.log(target)

      // if (target.classList.contains('tag__btn')) {
      //   //Выполняется один раз !!!!PROBLEM
      //   if (result) { return renderCardsList(result) };
      //   if (!result) return console.log('fail');
      // }

    })
  });


  containerTagList.addEventListener('click', event => {
    const target = event.target;
    const result = filterTagsOnPage(target);

    if (target.classList.contains('tag__btn')) {
      if (result) return renderCardsList(result);
      if (!result) return console.log('fail');
    }

  });



}


