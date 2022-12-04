'use strict;'
import { getDataFromApi } from './api';
import { renderPagination } from './pagination';
import { renderTagsList } from './tags';
import { renderCardsList } from './cards';
import { sortCards } from './sort';
import { filterByTags, filterBySearch } from './filter';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { queryParamDefinition } from './utils';



const appInit = async () => {
  const queryParam = queryParamDefinition();
  const serch = filterBySearch();

  const result = await getDataFromApi(serch, queryParam);

  renderPagination(result, queryParam);
  renderCardsList(result);
  renderTagsList(result);

  filterByTags();

  sortCards();
}

appInit();
sidebarHandler();
modalCardHandler();







