import { getSortTags } from './tags';
import { createTag } from './createTag';

export const renderTagsList = (cards) => {
	const containerTagList = document.querySelector('.js-tag-list');
	const tagList = getSortTags(cards);

	containerTagList.innerHTML = tagList.map(tag => {
		return createTag(tag);

	}).join('');

};
