import { cards } from '../consts';
import { renderCardsList, removeCards, cardsContainer } from './cards/renderCardsList';

const newCards = JSON.parse(JSON.stringify(cards));

export const sortCards = () => {
	const sortContain = document.querySelector('.js-sort');

	const sortCards = (target, dataAtribute) => {
		const data = target.getAttribute(`${dataAtribute}`);

		newCards.sort((a, b) => {
			const dateA = new Date(a.date), dateB = new Date(b.date);
			switch (data) {
				case 'date-up':
					return dateA - dateB;
				case 'date-down':
					return dateB - dateA;
				case 'like-up':
					return b.likes - a.likes;
				case 'like-down':
					return a.likes - b.likes;
			};
		});

		removeCards(cardsContainer);
		return renderCardsList(newCards);
	};


	sortContain.addEventListener('click', event => {
		const sortData = event.target.dataset['sort'];

		if (sortData) {
			return sortCards(event.target, 'data-sort');
		}

		removeCards(cardsContainer);
		return renderCardsList(newCards);

	})

};





