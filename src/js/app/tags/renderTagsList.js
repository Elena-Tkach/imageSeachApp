import { createTag } from './createTag';

export const renderTagsList = (cards) => {
	const containerTagList = document.querySelector('.js-tag-list');

	const getUniqueTags = (cards) => {
		let tags = [];

		cards.forEach(card => {
			card.tags.forEach((tag) => {
				return tags.push(tag);
			});
		})

		const uniqueTags = tags.filter((element, index) => {
			return tags.indexOf(element) === index;
		});

		return uniqueTags;

	};

	const tagList = getUniqueTags(cards);

	containerTagList.innerHTML = tagList.map(tag => {
		return createTag(tag);

	}).join('');

};
