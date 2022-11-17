import { cards } from '../consts';
import { renderCardsList, removeCards, cardsContainer } from '../app/cards/renderCardsList';
import {
  appendErrorElement,
  filteringCardsByTags,
  filteringCardsByIncomingData
} from '../app/filter';

const newCards = JSON.parse(JSON.stringify(cards));

export const filterByTags = () => {

  document.body.addEventListener('click', event => {
    if (event.target.classList.contains('js-btn-tag')) {

      const filterCardsByTags = filteringCardsByTags(event.target.value, newCards);

      if (filterCardsByTags.length > 0) {
        removeCards(cardsContainer);
        return renderCardsList(filterCardsByTags);
      }

      if (filterCardsByTags.length === 0) {
        removeCards(cardsContainer);
        return appendErrorElement(searchForm, 'Ничего не найдено.');
      }
    }
  })
};

export const filterBySearch = () => {
  const searchForm = document.querySelector('.js-form-search');

  searchForm.addEventListener('input', (event) => {
    if (event.target.value === '') {
      removeCards(cardsContainer);
      return renderCardsList(newCards);
    }
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const targetValue = event.target.search.value;
    const filteredCardsWithTitle = filteringCardsByIncomingData(targetValue.toLowerCase(), 'title', newCards);
    const filteredCardsWithAuthor = filteringCardsByIncomingData(targetValue.toLowerCase(), 'author', newCards);

    if (filteredCardsWithTitle.length > 0) {
      removeCards(cardsContainer);
      return renderCardsList(filteredCardsWithTitle);
    }

    if (filteredCardsWithAuthor.length > 0) {
      removeCards(cardsContainer);
      return renderCardsList(filteredCardsWithAuthor);
    }

    if (filteredCardsWithTitle.length === 0 || filteredCardsWithAuthor.length === 0) {
      return (
        appendErrorElement(searchForm, 'Ничего не найдено.'),
        removeCards(cardsContainer)
      )
    };
  });


}