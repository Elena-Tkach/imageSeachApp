import { getSortArrayTags } from './getSortArrayTags';

export const createFilterTagList = () => {
	const containerTagList = document.querySelector('.js-tag-list');
	const tagList = getSortArrayTags();


	containerTagList.innerHTML = tagList.map(tag => {
		return `
			<li class="tags__item tag">
                <button class="tag__btn btn btn--border-yellow btn--color-black btn--font-tag">
                   ${tag}
                </button>
            </li>
		`;

	}).join('');

	
}