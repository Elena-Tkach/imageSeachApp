'use strict;'
import { getDataFromApi, getDataSort } from './api';
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
  const sort = await getDataSort('latest');

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







