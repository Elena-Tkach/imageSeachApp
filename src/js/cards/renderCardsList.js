import { getDataFromUnsplash } from '../getApiData';
import { createCard } from './createСard';

export const cardsContainer = document.querySelector('.js-cards-container');

export const renderCardsList = async () => {
	const result = await getDataFromUnsplash();
	const copyResult = JSON.parse(JSON.stringify(result));

	copyResult.forEach(cardItem => {
		var options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		};

		const titleRes = cardItem.description === null ? 'Красивое фото' : cardItem.description;
		const date = new Date(cardItem.created_at).toLocaleDateString('ru-Ru', options);

		const card = createCard(
			cardItem.urls.regular,
			cardItem.likes,
			date,
			cardItem.user.name,
			// cardItem.tags,
			titleRes
		);

		cardsContainer.append(card);
	});

	// return copyResult;

};

export const removeCards = async () => {
	const result = await getDataFromUnsplash();
	return result.innerHTML = '';
}
