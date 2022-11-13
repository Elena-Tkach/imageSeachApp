'use strict;'
import { cards, colors } from './consts';
import { renderColorPaginationAndPage } from './main/pagination';
import { renderTagsList } from './app/tags/renderTagsList';
import { renderCardsList } from './app/cards/renderCardsList';
import { sortCards } from './app/sort';
import { filterOnPage } from './main/filterOnPage';
import { openHideSidebar } from './main/sidebar';
import { onClickCardLargeSize } from './main/largeCard';


openHideSidebar();
onClickCardLargeSize();
renderColorPaginationAndPage();
renderCardsList(cards);
renderTagsList(cards);
filterOnPage(cards);
sortCards(cards);




