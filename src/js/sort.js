import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';

export const sortCards = (page) => {
	const sortContain = document.querySelector('.js-sort');
	// const result = await getDataFromApi();
	const previousStorageQuery = JSON.parse(localStorage.getItem('searchParam'));
	const previousStoragePage = JSON.parse(localStorage.getItem('page'));
	console.log(previousStoragePage);

	sortContain.addEventListener('click', async (event) => {
		const dataSort = event.target.getAttribute(`data-sort`);

		if (dataSort) {
			localStorage.setItem('sort', JSON.stringify(dataSort));

			if (previousStorageQuery) {
				const queryResults = await getDataFromApi(1, previousStorageQuery, dataSort);
				removeCards();
				removePaginaton();
				renderCardsList(queryResults);
				renderPagination(queryResults);

			}

			if (!previousStorageQuery) {
				const sort = await getDataFromApi(1, 'nature', dataSort);
				console.log(sort);
				removeCards();
				removePaginaton();
				renderCardsList(sort);
				renderPagination(sort);
			}

		}

	})
};








