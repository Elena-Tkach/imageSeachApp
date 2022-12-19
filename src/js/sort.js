import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';

export const sortCards = async (result, pageParam, search) => {
	const sortContain = document.querySelector('.js-sort');


	sortContain.addEventListener('click', async (event) => {
		const dataSort = event.target.getAttribute(`data-sort`);

		if (dataSort === 'date') {
			console.log(dataSort);
			const date = await getDataFromApi(pageParam, search, 'latest');
			removeCards();
			return renderCardsList(date, pageParam);
		}

		if (dataSort === 'relevant') {
			const relevant = await getDataFromApi(pageParam, search, 'relevant');
			removeCards();
			return renderCardsList(relevant, pageParam);
		}

		return renderCardsList(result, pageParam);

	})
};








