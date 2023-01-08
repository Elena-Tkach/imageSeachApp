import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';
import { pagination, removePaginaton } from './pagination';


export const getCardsBySearchValue = async () => {
  const searchForm = document.querySelector(`.js-form-search`);
  const input = document.querySelector(`.js-input`);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = input.value;
    localStorage.removeItem('searchParam');
    localStorage.setItem('searchParam', JSON.stringify(query));

    const search = await getDataFromApi(1, query);
    console.log(search);

    if (!query) return false;
    if (query === '') return await getDataFromApi();

    removeCards();
    removePaginaton();
    renderCardsList(search);
    pagination(search);
    searchForm.reset();

  }



  // searchForm.addEventListener('input', handleSubmit);

  searchForm.addEventListener('submit', handleSubmit);

}