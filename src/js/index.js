'use strict;'
import { cards } from './consts';
import { renderColorPaginationAndPage } from './main/pagination';
import { renderTagsList } from './app/tags/renderTagsList';
import { renderCardsList } from './app/cards/renderCardsList';
import { sortCards } from './app/sort';
import { filterByTags, filterBySearch } from './main/filterOnPage';
import { sidebarHandler } from './main/sidebar';
import { modalCardHandler } from './main/largeCard';


sidebarHandler();
modalCardHandler();
renderColorPaginationAndPage();
renderCardsList(cards);
renderTagsList(cards);
filterByTags(cards);
filterBySearch(cards);
sortCards(cards);




