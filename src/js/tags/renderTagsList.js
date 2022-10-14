import { getSortTags } from './tags';
import { createTag } from './createTag';
import { renderCardsList } from '../cards/renderCardsList';


export const renderTagsList = () => {
	const containerTagList = document.querySelector('.js-tag-list');
	const tagList = getSortTags();

	containerTagList.innerHTML = tagList.map(tag => {
		return createTag(tag);

	}).join('');

};
