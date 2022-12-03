import { capitalizeFirstLetter } from './utils';

export const createTag = (tag, classBtn) => {

	const tagTemplate = document.querySelector('#tags-template');
	const cloneTagTemplate = tagTemplate.content.cloneNode(true);
	const cloneBtnTag = cloneTagTemplate.querySelector('.js-btn-tag');

	cloneBtnTag.setAttribute('value', tag);
	cloneBtnTag.classList.add(classBtn);
	cloneBtnTag.innerHTML = tag;

	return cloneTagTemplate;
};


export const renderTagsList = (result) => {
	const containerTagList = document.querySelector('.js-tag-list');

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
