import { getDataFromApi } from './api';
import { pageParamRequest } from './utils';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';


export const getSearchValue = async () => {
  const pageParam = pageParamRequest();

  const searchForm = document.querySelector(`.js-form-search`);
  const input = document.querySelector(`.js-input`);
  const result = await getDataFromApi(pageParam, 'building');

  renderCardsList(result);
  renderPagination(result);

  const handleSubmit = async (event) => {
    event.preventDefault()

    const query = input.value;
    if (!query) return false;

    const search = await getDataFromApi(pageParam, query);
    if (query === '') {
      return await getDataFromApi(pageParam, '');
    }

    removeCards();
    removePaginaton();
    renderCardsList(search);
    renderPagination(search);


  }
  searchForm.addEventListener('input', handleSubmit);
  document.querySelector('.js-btn').addEventListener('click', handleSubmit)
}