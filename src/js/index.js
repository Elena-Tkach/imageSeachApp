'use strict;'
import { getDataFromApi, getDataSort } from './api';
import { renderPagination } from './pagination';
import { renderTagsList } from './tags';
import { renderCardsList } from './cards';
import { sortCards } from './sort';
import { filterByTags } from './filter';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { getCardsBySearchValue } from './search';
import { pageParamRequest } from './utils';

export const globalState = {
  search: '',
}



const appInit = async () => {
  const pageParam = pageParamRequest();
  const result = await getDataFromApi(pageParam, 'nature');
 


  renderCardsList(result);
  renderTagsList(result);
  renderPagination(result, pageParam);
  getCardsBySearchValue();

  console.log(globalState.search);
  // filterByTags();
  sortCards(result, pageParam, 'nature');
}

appInit();
sidebarHandler();
modalCardHandler();







