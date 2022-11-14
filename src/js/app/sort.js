import { cards } from '../consts';
import { renderCardsList } from './cards/renderCardsList';

export const sortCards = () => {
	const sortContain = document.querySelector('.js-sort');
	const cardList = cards;

	const sortCards = (target, dataAtribute) => {
		const data = target.getAttribute(`${dataAtribute}`);

		cardList.sort((a, b) => {
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

		return renderCardsList(cardList);
	};


	sortContain.addEventListener('click', event => {
		const sortData = event.target.dataset['sort'];

		if (sortData) {
			return sortCards(event.target, 'data-sort');
		}
		return renderCardsList(cardList);

	})

};





