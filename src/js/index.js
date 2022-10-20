'use strict;'
import { cards, colors } from './consts';
import { pagination } from './main/pagination';
import { renderTagsList } from './app/tags/renderTagsList';
import { renderCardsList } from './app/cards/renderCardsList';
import { sortCards } from './app/sort';
import { filterTags } from './app/filter';
import { openHideSidebar } from './main/sidebar';
import { onClickCardLargeSize } from './main/largeCard';

const body = document.body;
const overlayEl = document.querySelector('.js-overlay');

openHideSidebar(body, overlayEl);
onClickCardLargeSize(body, overlayEl);
pagination(body, colors);
renderCardsList(cards);
renderTagsList(cards);
filterTags(cards);
sortCards(cards);




