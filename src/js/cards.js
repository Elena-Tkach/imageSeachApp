import { capitalizeFirstLetter } from './utils';
import { createTag } from './tags';

export const cardsContainer = document.querySelector('.js-cards-container');

const createCard = (link, likes, date, author, tag, title) => {
	const cardTemplate = document.querySelector('#cardTemplate');
	const cloneCardTemplate = cardTemplate.content.cloneNode(true);
	const cardImg = cloneCardTemplate.querySelector('.js-card-img');
	const cardLikes = cloneCardTemplate.querySelector('.js-card-likes');
	const cardTitle = cloneCardTemplate.querySelector('.js-card-title');
	const cardDate = cloneCardTemplate.querySelector('.js-card-date');
	const cardAuthor = cloneCardTemplate.querySelector('.js-card-author');
	const cardTagsList = cloneCardTemplate.querySelector('.js-card-tags');

	tag.forEach(tagItem => {
		const tag = createTag(tagItem, 'btn--bg-light-white');
		cardTagsList.append(tag);
	});

	cardImg.setAttribute('src', link);
	cardImg.setAttribute('alt', title);
	cardLikes.innerHTML = likes;
	cardDate.innerHTML = date;
	cardAuthor.innerHTML = author;
	cardTitle.innerHTML = capitalizeFirstLetter(title);

	return cloneCardTemplate;

};

export const renderCardsList = (result) => {
	for (let item of result.results) {
		const options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		};

		const titleRes = () => {
			if (item.description) {
				return item.description;
			}
			if (!item.description) {
				return item.alt_description;
			}
			if (!item.alt_description && !item.description) {
				return;
			}
		}
		
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
			titleRes(),
		);
		cardsContainer.append(card);
	};

	return result;

};

// export const removeCards = (result) => {

// 	return result.results.innerHTML = '';
// }


export const removeCards = () => {
	return cardsContainer.innerHTML = '';
}