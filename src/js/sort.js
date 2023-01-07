import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';

export const sortCards = (page) => {
	const sortContain = document.querySelector('.js-sort');
	// const result = await getDataFromApi();
	const queryFromStorage = JSON.parse(localStorage.getItem('searchParam'));
	const sortingFromStorage = JSON.parse(localStorage.getItem('sort'));
	const pageFromStorage = JSON.parse(localStorage.getItem('page'));


	sortContain.addEventListener('click', async (event) => {
		const dataSort = event.target.getAttribute(`data-sort`);
		if (dataSort) {
			localStorage.setItem('sort', JSON.stringify(dataSort));
			const sortResult = await getDataFromApi(1, 'nature', dataSort);

			if (sortingFromStorage) {
				if (queryFromStorage) {
					const queryResult = await getDataFromApi(1, queryFromStorage, dataSort);

					if (pageFromStorage) {
						const pageResult = await getDataFromApi(pageFromStorage, queryFromStorage, dataSort);
						removeCards();
					
						renderCardsList(pageResult);
							// removePaginaton();
						// renderPagination(pageResult);
					}

					removeCards();
					// removePaginaton();
					renderCardsList(queryResult);
				}


				console.log(sortResult);
				removeCards();
				// removePaginaton();
				renderCardsList(sortResult);
				// renderPagination(sortResult);
			}
		}

	})
};








