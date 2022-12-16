'use strict;'
import { getDataFromApi } from './api';
import { renderPagination } from './pagination';
import { renderTagsList } from './tags';
import { renderCardsList } from './cards';
import { sortCards } from './sort';
import { filterByTags } from './filter';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { getSearchValue } from './search';
import { pageParamRequest } from './utils';


const appInit = async () => {
  const pageParam = pageParamRequest();
  const result = await getDataFromApi(pageParam, 'nature');

  renderCardsList(result);
  renderTagsList(result);
  renderPagination(result, pageParam);
  getSearchValue();

  // filterByTags();
  sortCards(result, pageParam, 'nature');
}

appInit();
sidebarHandler();
modalCardHandler();







