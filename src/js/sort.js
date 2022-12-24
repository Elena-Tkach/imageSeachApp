import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';

export const sortCards = (page) => {
	const sortContain = document.querySelector('.js-sort');
	// const result = await getDataFromApi();
	const searchValue = JSON.parse(localStorage.getItem('searchParam'));


	sortContain.addEventListener('click', async (event) => {
		const dataSort = event.target.getAttribute(`data-sort`);

		if (dataSort) {
			const sort = await getDataFromApi(page, searchValue, dataSort);

			removeCards();
			// removePaginaton();
			renderCardsList(sort);
			// renderPagination(sort);
			console.log(page, dataSort);
		}

	})
};








