'use strict;'
import { cards } from './consts';
import { renderColorPaginationAndPage } from './main/pagination';
import { renderTagsList } from './app/tags/renderTagsList';
import { renderCardsList } from './app/cards/renderCardsList';
import { sortCards } from './app/sort';
import { filterByTags, filterBySearch } from './main/filterOnPage';
import { sidebarHandler } from './main/sidebar';
import { modalCardHandler } from './main/largeCard';

const newCards = JSON.parse(JSON.stringify(cards));
sidebarHandler();
modalCardHandler();
renderColorPaginationAndPage();
renderCardsList(newCards);
renderTagsList(newCards);
filterByTags();
filterBySearch();
sortCards();







