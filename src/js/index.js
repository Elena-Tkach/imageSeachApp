'use strict;'
import { getDataFromApi } from './api';
import { renderPagination } from './pagination';
import { renderTagsList } from './tags';
import { renderCardsList } from './cards';
import { sortCards } from './sort';
import { filterByTags } from './filter';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { getCardsBySearchValue } from './search';
import { pageParamRequest } from './utils';

const globalState = {
  search: '',
};

const appInit = async () => {
  const result = await getDataFromApi();
  const searchValue = JSON.parse(localStorage.getItem('searchParam'));


  // if (searchValue) {

  //   console.log(searchValue);

  // }

  if (searchValue) {
    renderCardsList(result);
    renderTagsList(result);
    renderPagination(result);
    getCardsBySearchValue();
  }




  // filterByTags();
  // sortCards(result, pageParam, 'nature');
}

appInit();
sidebarHandler();
modalCardHandler();







