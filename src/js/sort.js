import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';

export const sortCards = (page) => {
	const sortContain = document.querySelector('.js-sort');
	const queryFromStorage = JSON.parse(localStorage.getItem('searchParam'));
	const sortingFromStorage = JSON.parse(localStorage.getItem('sort'));
	const pageFromStorage = JSON.parse(localStorage.getItem('page'));


	sortContain.addEventListener('click', async (event) => {
		const dataSort = event.target.getAttribute(`data-sort`);
		if (dataSort) {
			localStorage.setItem('sort', JSON.stringify(dataSort));

			if (sortingFromStorage) {
				const sortResult = await getDataFromApi(1, 'nature', dataSort);
				console.log(sortResult);
				removeCards();
				renderCardsList(sortResult);
			}

			if (queryFromStorage) {
				const queryResult = await getDataFromApi(1, queryFromStorage, dataSort);

				removeCards();
				renderCardsList(queryResult);
			}

			if (pageFromStorage) {
				const pageResult = await getDataFromApi(pageFromStorage, queryFromStorage, dataSort);
				removeCards();
				renderCardsList(pageResult);
			}
		}

	})
};








