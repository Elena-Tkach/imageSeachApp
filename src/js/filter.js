import { renderCardsList } from './cards/renderCardsList';

export const filterTags = (cards) => {
  const containerTagList = document.querySelector('.js-tag-list');
  const tagListCard = document.querySelectorAll('.js-tags');
  const searchForm = document.querySelector('.js-form-search');


  const filterTagsOnPage = (target) => {
    return cards.filter(({ tags: arr }) => arr.some(tag => target.value.includes(tag)));
  };

  const filterTitleCards = (target) => {
    return cards.filter(card => card.title.includes(target));
  };


  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const target = event.target;
    const targetValue = (target.search.value).toLowerCase();
    const result = filterTitleCards(targetValue);


    if (targetValue === '') return;
    if (result.length > 0) return renderCardsList(result);
    if (result.length === 0) return pastHtml(searchForm);

  })

  //Doesn't work
  tagListCard.forEach(list => {
    list.addEventListener('click', (event) => {
      const target = event.target;
      const result = filterTagsOnPage(target);

      if (target.classList.contains('tag__btn')) {
        console.log(result)
        if (result) { renderCardsList(result) };
      }

    })
  })


  containerTagList.addEventListener('click', event => {
    const target = event.target;
    const result = filterTagsOnPage(target);

    if (target.classList.contains('tag__btn')) {
      if (result) return renderCardsList(result);
      if (!result) return console.log('fail');
    }

  });

  // добавление дапси если ничего не найдено
  function pastHtml(block) {
    const div = document.createElement('div');
    div.className = 'nothing-found';
    div.innerHTML = `Nothing found. Try another theme`;
    block.after(div);
  }


}


