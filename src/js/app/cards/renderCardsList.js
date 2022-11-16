import { createCard } from './createСard';


export const renderCardsList = (cards) => {
	const cardsContainer = document.querySelector('.js-cards-container');

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

};
