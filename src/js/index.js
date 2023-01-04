'use strict;'
import { getDataFromApi } from './api';
import { renderPagination, removePaginaton } from './pagination';
import { renderTagsList } from './tags';
import { renderCardsList, removeCards } from './cards';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { getCardsBySearchValue } from './search';
import { sortCards } from './sort';


const globalState = {
  search: '',
};

const appInit = async () => {

  const previousStorageQuery = JSON.parse(localStorage.getItem('searchParam'));
  const previousStorageSort = JSON.parse(localStorage.getItem('sort'));
  const previousStoragePage = JSON.parse(localStorage.getItem('page'));
  const result = await getDataFromApi(previousStoragePage);
  console.log(previousStoragePage);
  console.log(previousStorageSort);


  if (previousStorageQuery) {
    const queryResults = await getDataFromApi(previousStoragePage, previousStorageQuery);
    removeCards();
    removePaginaton();
    renderCardsList(queryResults);
    renderTagsList(queryResults);
    renderPagination(queryResults);
  }

  if (previousStoragePage) {
    
  }

  if (!previousStorageQuery) {
    removeCards();
    removePaginaton();
    renderCardsList(result);
    renderTagsList(result);
    renderPagination(result);
  }

  getCardsBySearchValue();
  sortCards(1);

}

appInit();
sidebarHandler();
modalCardHandler();







