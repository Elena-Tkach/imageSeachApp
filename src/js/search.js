import { getDataFromApi } from './api';
import { pageParamRequest } from './utils';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';


export const getSearchValue = async () => {
  const searchForm = document.querySelector(`.js-form-search`);
  const input = document.querySelector(`.js-input`);
  const pageParam = pageParamRequest();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const query = input.value;
    const search = await getDataFromApi(pageParam, query);

    if (!query) return false;
    if (query === '') return await getDataFromApi(pageParam, '');


    removeCards();
    removePaginaton();
    renderCardsList(search);
    renderPagination(search, pageParam);

  }

  searchForm.addEventListener('input', async () => {
    if (input.value === '') {
      const result = await getDataFromApi(pageParam, '');
      removeCards();
      removePaginaton();
      renderCardsList(result);
      renderPagination(result, pageParam);
    }
  })

  document.querySelector('.js-btn').addEventListener('click', handleSubmit)
}