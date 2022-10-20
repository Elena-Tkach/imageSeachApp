
import { renderCardsList } from './cards/renderCardsList';

export const sortCards = (cards) => {
	const btnSortDateUp = document.querySelector('.js-sort-date-up');
	const btnSortDateDown = document.querySelector('.js-sort-date-down');
	const btnSortLikeUp = document.querySelector('.js-sort-like-up');
	const btnSortLikeDown = document.querySelector('.js-sort-like-down');


	const sortCards = (btn) => {
		cards.sort((a, b) => {
			const dateA = new Date(a.date), dateB = new Date(b.date);

			if (btn === btnSortDateUp) return dateA - dateB;
			if (btn === btnSortDateDown) return dateB - dateA;
			if (btn === btnSortLikeUp) return b.likes - a.likes;
			if (btn === btnSortLikeDown) return a.likes - b.likes;
		});

		return renderCardsList(cards);
	};


	btnSortDateUp.addEventListener('click', (e) => {
		sortCards(e.target);

	});

	btnSortDateDown.addEventListener('click', (e) => {
		sortCards(e.target);
	});

	btnSortLikeUp.addEventListener('click', (e) => {
		sortCards(e.target);
	});


	btnSortLikeDown.addEventListener('click', (e) => {
		sortCards(e.target);
	});


};





