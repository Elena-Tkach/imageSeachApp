'use strict;'
import { cards } from './consts';
import { pagination } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { renderCardsList } from './cards/renderCardsList';
import { sortCards } from './sort';
import { filterTags } from './filter';
import { openHideSidebar } from './sidebar';
import { onClickCardLargeSize } from './largeCard';


const body = document.body;
const overlayEl = document.querySelector('.js-overlay');



renderCardsList(cards);
renderTagsList();
sortCards();
filterTags(cards);
openHideSidebar(body, overlayEl);
onClickCardLargeSize(body, overlayEl);
pagination(body);




