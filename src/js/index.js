'use strict;'
import { getDataFromApi } from './api';
import { renderPagination, removePaginaton } from './pagination';
import { renderTagsList } from './tags';
import { renderCardsList, removeCards } from './cards';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { getCardsBySearchValue } from './search';


const globalState = {
  search: '',
};

const appInit = async () => {
  const result = await getDataFromApi();
  const searchValue = JSON.parse(localStorage.getItem('searchParam'));

  if (searchValue) {
  
    const search = await getDataFromApi(1, searchValue);
    removeCards();
    removePaginaton();
    renderCardsList(search);
    renderTagsList(search);
    renderPagination(search);
  }

  if (!searchValue) {
    removeCards();
    removePaginaton();
    renderCardsList(result);
    renderTagsList(result);
    renderPagination(result);
  }

  getCardsBySearchValue();

}

appInit();
sidebarHandler();
modalCardHandler();







