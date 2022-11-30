import { createTag } from './createTag';
import { getDataFromApi } from '../api';
import { capitalizeFirstLetter } from '../utils';

export const renderTagsList = async () => {
	const containerTagList = document.querySelector('.js-tag-list');
	const result = await getDataFromApi();
	console.log(result);

	const getUniqueTags = () => {
		let tags = [];

		for (let item of result.results) {
			item.tags.map(tag => {
				return tags.push(capitalizeFirstLetter(tag.title));
			});
		}

		const uniqueTags = tags.filter((element, index) => {
			return tags.indexOf(element) === index;
		});

		return uniqueTags;

	};

	const tagList = getUniqueTags(result);
	tagList.forEach(tagItem => {
		const tag = createTag(tagItem, 'btn--border-yellow');
		return containerTagList.append(tag);
	});

};
