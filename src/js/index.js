'use strict;'
import { cards, colors } from './consts';
import { pagination } from './main/pagination';
import { renderTagsList } from './app/tags/renderTagsList';
import { renderCardsList } from './app/cards/renderCardsList';
import { sortCards } from './app/sort';
import { filterOnPage } from './main/filterOnPage';
import { openHideSidebar } from './main/sidebar';
import { onClickCardLargeSize } from './main/largeCard';


openHideSidebar();
onClickCardLargeSize();
pagination(colors);
renderCardsList(cards);
renderTagsList(cards);
filterOnPage(cards);
sortCards(cards);




