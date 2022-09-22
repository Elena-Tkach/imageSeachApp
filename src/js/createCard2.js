import { cards } from './createArray';

export const createCard2 = (cardsContainer) => {

	const tmplCard = document.querySelector('#js-tmpl-card');
	const img = tmplCard.content.querySelector('.js-tmpl-img');

	
	
  img.innerHTML = cards.map(card =>  {
		card.imageLink;

	}).join('');
	
	
	let li = tmplCard.content.cloneNode(true);
	cardsContainer.append(li);
	 
};