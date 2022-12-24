import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';
import { renderPagination, removePaginaton } from './pagination';


export const getCardsBySearchValue = async () => {
  const searchForm = document.querySelector(`.js-form-search`);
  const input = document.querySelector(`.js-input`);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = input.value;
    localStorage.setItem('searchParam', JSON.stringify(query));

    const search = await getDataFromApi(1, query);

    if (!query) return false;
    if (query === '') return await getDataFromApi();

    removeCards();
    removePaginaton();
    renderCardsList(search);
    renderPagination(search);
    searchForm.reset();

  }



  // searchForm.addEventListener('input', handleSubmit);

  searchForm.addEventListener('submit', handleSubmit);

}