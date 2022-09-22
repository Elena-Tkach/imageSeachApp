import { cards } from './createArray';

export const getSortArrayTags = () => {
	let tagArray = [];

	  cards.map(card => {
	    card.tags.map(tag => {
	      
	      tagArray.push(tag);

	    });
	  })


	const uniqueTags = tagArray.filter((element, index) => {
	    return tagArray.indexOf(element) === index;
	});



	return uniqueTags;

}

