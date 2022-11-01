import { renderCardsList } from '../app/cards/renderCardsList';
import {
  appendHtmlText,
  filteringCardsByTags,
  filteringCardsByIncomingData
} from '../app/filter';

export const filterOnPage = (cards) => {
  const searchForm = document.querySelector('.js-form-search');

  searchForm.addEventListener('focusin', (event) => {
    const target = event.target.value;

    if (target === '') return renderCardsList(cards);
    return renderCardsList(cards);
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const target = event.target;
    const targetValue = target.search.value;
    const filteredCardsWithTitle = filteringCardsByIncomingData(targetValue.toLowerCase(), 'title', cards);
    const filteredCardsWithAuthor = filteringCardsByIncomingData(targetValue.toLowerCase(), 'author', cards);

    if (filteredCardsWithTitle.length > 0) return renderCardsList(filteredCardsWithTitle);
    if (filteredCardsWithAuthor.length > 0) return renderCardsList(filteredCardsWithAuthor);
    if (filteredCardsWithTitle.length === 0 || filteredCardsWithAuthor.length === 0) return appendHtmlText(searchForm);

    return renderCardsList(cards);
  });

  // filter by tags
  document.body.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('js-btn-tag') || target.classList.contains('tag__btn')) {
      const filterCardsByTags = filteringCardsByTags(target.value, cards);
      if (filterCardsByTags.length > 0) return renderCardsList(filterCardsByTags);
      if (filterCardsByTags.length === 0) return appendHtmlText(searchForm);
      return renderCardsList(cards);
    }
  })

}