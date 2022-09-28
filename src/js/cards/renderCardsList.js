import { cards } from '../consts';
 import { createCard } from './createСard';

export const renderCardsList = () => {
	const cardsContainer = document.querySelector('.js-cards-container');

	cardsContainer.innerHTML = cards.map((card) => {

		console.log(card.title);

		// createCard( {card.imageLink});

	}).join('');



};
