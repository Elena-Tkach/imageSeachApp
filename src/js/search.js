import { getDataFromApi } from './api';
import { pageParamRequest } from './utils';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';
import { globalState } from './index';


export const getCardsBySearchValue = async () => {
  const searchForm = document.querySelector(`.js-form-search`);
  const input = document.querySelector(`.js-input`);
  const pageParam = pageParamRequest();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const query = input.value;
    const search = await getDataFromApi(pageParam, query);
    

    if (!query) return false;
    if (query === '') return await getDataFromApi(pageParam, '');
    globalState.search = query;
    
    removeCards();
    removePaginaton();
    renderCardsList(search);
    renderPagination(search, pageParam);

  }


  // searchForm.addEventListener('input', handleSubmit);

  searchForm.addEventListener('submit', handleSubmit);
}