import { createCard } from './createСard';
export const cardsContainer = document.querySelector('.js-cards-container');

export const renderCardsList = (cards) => {

	cards.forEach(cardItem => {
		const card = createCard(
			cardItem.imageLink,
			cardItem.likes,
			cardItem.date,
			cardItem.author,
			cardItem.tags,
			cardItem.title
		);

		cardsContainer.append(card);

	});
	return cards;

};

export const removeCards = (cards) => {
	return cards.innerHTML = '';
}
