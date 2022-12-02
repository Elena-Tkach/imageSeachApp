'use strict;'
import { cards } from './consts';

import { renderPagination } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { renderCardsList } from './cards/renderCardsList';
import { sortCards } from './sort';
import { filterByTags, filterBySearch } from './filter';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { queryParamDefinition } from './utils';

const queryParam = queryParamDefinition();
sidebarHandler();
modalCardHandler();

renderCardsList();
renderTagsList();
renderPagination(queryParam);
filterByTags();
filterBySearch();
sortCards();








