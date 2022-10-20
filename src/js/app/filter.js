import { renderCardsList } from './cards/renderCardsList';

export const filterTags = (cards) => {
  const containerTagList = document.querySelector('.js-tag-list');
  const tagListCard = document.querySelectorAll('.js-tags');
  const searchForm = document.querySelector('.js-form-search');

  // text if nothing is found
  const appendHtmlText = (block) => {
    const div = document.createElement('div');
    div.className = 'nothing-found';
    div.innerHTML = `Nothing found. Try again`;
    block.append(div);

    setTimeout(() => {
      div.remove();
    }, 5000);
  };

  const filterTagsOnPage = (target) => {
    return cards.filter(({ tags: arr }) => arr.some(tag => target.includes(tag)));
  };

  const filterTitleCards = (target, search) => {
    return cards.filter(card => (card[search]).toLowerCase().includes(target));
  };


  // search by cards
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const target = event.target;
    const targetValue = target.search.value;
    const resultTitle = filterTitleCards(targetValue.toLowerCase(), 'title');
    const resultAuthor = filterTitleCards(targetValue.toLowerCase(), 'author');

    if (targetValue === '') return;
    if (resultTitle.length > 0) return renderCardsList(resultTitle);
    if (resultAuthor.length > 0) return renderCardsList(resultAuthor);
    if (resultTitle.length === 0 || resultAuthor.length === 0) return appendHtmlText(searchForm);

  })

  // filter by tags
  containerTagList.addEventListener('click', event => {
    const target = event.target;
    const result = filterTagsOnPage(target.value);

    if (target.classList.contains('tag__btn')) {
      if (result.length > 0) return renderCardsList(result);
      if (result.length === 0) return appendHtmlText(searchForm);
    }

  })


  //Doesn't work
  tagListCard.forEach(list => {
    list.addEventListener('click', (event) => {
      const target = event.target;
      const result = filterTagsOnPage(target.value);

      if (target.classList.contains('js-btn-tag')) {
        console.log(target.value);
        // if (result.length > 0) return renderCardsList(result);
      }

    })
  })



}


