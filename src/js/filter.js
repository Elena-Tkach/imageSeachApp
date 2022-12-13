import { cards } from './consts';
import { renderCardsList, removeCards, cardsContainer } from './cards';




const filteringCardsByTags = (target, cards) => {
  return cards.filter(({ tags: arr }) => arr.some(tag => target.includes(tag)));
};

// const filteringCardsByIncomingData = (target, search, cards) => {
//   return cards.filter(card => (card[search]).toLowerCase().includes(target));
// };

;

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











