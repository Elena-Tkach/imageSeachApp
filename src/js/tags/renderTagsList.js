import { getSortTags } from './tags';
import { createTag } from './createTag';
import { cards } from '../consts';
import { renderCardsList } from '../cards/renderCardsList';

export const renderTagsList = () => {
	const containerTagList = document.querySelector('.js-tag-list');
	const tagList = getSortTags();

	containerTagList.innerHTML = tagList.map(tag => {
		return createTag(tag);

	}).join('');

	//Фильтрация по тегам при клике на список тегов
	containerTagList.addEventListener('click', event => {
		if (event.target.classList.contains('tag__btn')) {
			const target = event.target;

			console.log(target.value);

			const tagsCard = cards.map(card => {
				card.tags.filter(tag => {
					console.log(tag);
					tag === target.value
				})
			});

			if (tagsCard) return renderCardsList();
			if (!tagsCard) return console.log('zero');
		}

	});


};
