'use strict;'
import { cards } from './consts';

import { renderColorPaginationAndPage, initPagination } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { renderCardsList } from './cards/renderCardsList';
import { sortCards } from './sort';
import { filterByTags, filterBySearch } from './filter';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';

// const newCards = getDataFromUnsplash();
sidebarHandler();
modalCardHandler();
// renderColorPaginationAndPage();
renderCardsList();
renderTagsList();
filterByTags();
filterBySearch();
sortCards();
initPagination()







