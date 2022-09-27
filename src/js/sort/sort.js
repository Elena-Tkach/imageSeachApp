import { cards } from '../createArray';
import { createCard } from '../createСard';

export const sortCards = () => {
	const btnSortDateUp = document.querySelector('.js-sort-date-up');
	const btnSortDateDown = document.querySelector('.js-sort-date-down');
	const btnSortLikeUp = document.querySelector('.js-sort-like-up');
	const btnSortLikeDown = document.querySelector('.js-sort-like-down');

	const sortLikesUp = (a, b) => {
	    const sortA = a.likes, sortB = b.likes;
	    if (sortA > sortB) return -1;
	    if (sortA < sortB) return 1;
	    return 0;
	}

	const sortLikesDown = (a, b) => {
	    const sortA = a.likes, sortB = b.likes;
	    if (sortA < sortB) return -1;
	    if (sortA > sortB) return 1;
	    return 0;
	}


	const sortDateUp = (a, b) => {
	    const sortA = a.date, sortB = b.date;
	    if (sortA > sortB) return -1;
	    if (sortA < sortB) return 1;
	    return 0;
	}

	
	const sortDateDown = (a, b) => {
	    const sortA = a.date, sortB = b.date;
	    if (sortA < sortB) return -1;
	    if (sortA > sortB) return 1;
	    return 0;
	}

	

	createCard();

	btnSortDateUp.addEventListener('click', () => {
		cards.sort(sortDateUp);
		createCard();

	});

	btnSortDateDown.addEventListener('click', () => {
		cards.sort(sortDateDown);
		createCard();
		console.log('date');

	});

	btnSortLikeUp.addEventListener('click', () => {
		cards.sort(sortLikesUp);
		createCard();
		console.log('карты');

	});
		

	btnSortLikeDown.addEventListener('click', () => {
		cards.sort(sortLikesDown);
		createCard();
		console.log('карты2')
	});



}





