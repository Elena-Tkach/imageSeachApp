'use strict;'
import { cards } from './consts';
import { renderColorPaginationAndPage } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { renderCardsList } from './cards/renderCardsList';
import { sortCards } from './sort';
import { filterByTags, filterBySearch } from './filter';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';

const newCards = JSON.parse(JSON.stringify(cards));
sidebarHandler();
modalCardHandler();
renderColorPaginationAndPage();
renderCardsList(newCards);
renderTagsList(newCards);
filterByTags();
filterBySearch();
sortCards();







