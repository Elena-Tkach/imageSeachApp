import { getSortArrayTags } from './getSortArrayTags';

export const createFilterTagList = () => {
	const containerTagList = document.querySelector('.js-tag-list');
	const tagList = getSortArrayTags();


	containerTagList.innerHTML = tagList.map(tag => {
		return `
			<li class="tags__item tag tag--border-yellow">
                <a href="#" class="tags__link">
                    <p class="text text--black text--space">${tag}</p>
                </a>
            </li>
		`;

	}).join('');

	
}