import { renderCardsList } from '../app/cards/renderCardsList';
import {
  showErrorText,
  appendErrorElement,
  filteringCardsByTags,
  filteringCardsByIncomingData
} from '../app/filter';

export const filterByTags = (cards) => {

  document.body.addEventListener('click', event => {

    if (event.target.classList.contains('js-btn-tag')) {
      const filterCardsByTags = filteringCardsByTags(event.target.value, cards);

      if (filterCardsByTags.length > 0) return renderCardsList(filterCardsByTags);
      if (filterCardsByTags.length === 0) return appendHtmlText(searchForm);
    }
  })
};

export const filterBySearch = (cards) => {
  const searchForm = document.querySelector('.js-form-search');

  searchForm.addEventListener('focusin', (event) => {
    if (event.target.value === '') return renderCardsList(cards);
  });


  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const targetValue = event.target.search.value;
    const filteredCardsWithTitle = filteringCardsByIncomingData(targetValue.toLowerCase(), 'title', cards);
    const filteredCardsWithAuthor = filteringCardsByIncomingData(targetValue.toLowerCase(), 'author', cards);


    if (targetValue === '') return renderCardsList(cards);
    if (filteredCardsWithTitle.length > 0) return renderCardsList(filteredCardsWithTitle);
    if (filteredCardsWithAuthor.length > 0) return renderCardsList(filteredCardsWithAuthor);
    if (filteredCardsWithTitle.length === 0 || filteredCardsWithAuthor.length === 0) {
      return (
        showErrorText(searchForm),
        appendErrorElement(searchForm, 'Ничего не найдено.(js)'),
        renderCardsList(cards)
      )
    };
  });


}