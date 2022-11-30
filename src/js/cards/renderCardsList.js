import { getDataFromApi } from '../api';
import { createCard } from './createСard';
import { capitalizeFirstLetter } from '../utils';

export const cardsContainer = document.querySelector('.js-cards-container');

export const renderCardsList = async () => {
	const result = await getDataFromApi();
	for (let item of result.results) {
		const options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		};

		const titleRes = item.description ? item.description :
			item.alt_description;
		const date = new Date(item.created_at).toLocaleDateString('ru-Ru', options);


		let tags = item.tags.map(item => {
			return capitalizeFirstLetter(item.title);
		});

		const card = createCard(
			item.urls.regular,
			item.likes,
			date,
			item.user.name,
			tags,
			titleRes
		);
		cardsContainer.append(card);
	};

	return result;

};

export const removeCards = async () => {
	const result = await getDataFromUnsplash();
	return result.innerHTML = '';
}
