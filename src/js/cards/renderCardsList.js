import { cards } from '../consts';
import { createCard } from './createСard';

export const renderCardsList = () => {
	const cardsContainer = document.querySelector('.js-cards-container');

	cardsContainer.innerHTML = cards.map((card) => {

		 return createCard( card );

	}).join('');


};
