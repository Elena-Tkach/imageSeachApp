import { getImageData } from '../getApiImgs';
import { createCard } from './createСard';
export const cardsContainer = document.querySelector('.js-cards-container');

export const renderCardsList = async (cards) => {
	const getResult = await getImageData();

	getResult.forEach(cardItem => {
		var options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		};

		const titleRes = cardItem.description === null ? 'Красивое фото' : cardItem.description;
		const date = new Date(cardItem.created_at).toLocaleDateString('ru-Ru', options);
		cardItem.urls.regular;

		const card = createCard(
			cardItem.urls.regular,
			cardItem.likes,
			date,
			cardItem.user.name,
			// cardItem.tags,
			titleRes
		);

		cardsContainer.append(card);
	})
	return cards;

};

export const removeCards = (cards) => {
	return cards.innerHTML = '';
}
