'use strict;'
import { cards } from './consts';
import { renderColorPaginationAndPage } from './main/pagination';
import { renderTagsList } from './app/tags/renderTagsList';
import { renderCardsList } from './app/cards/renderCardsList';
import { sortCards } from './app/sort';
import { filterOnPage } from './main/filterOnPage';
import { sidebarHandler } from './main/sidebar';
import { modalCardHandler } from './main/largeCard';


sidebarHandler();
modalCardHandler();
renderColorPaginationAndPage();
renderCardsList(cards);
renderTagsList(cards);
filterOnPage(cards);
sortCards(cards);




