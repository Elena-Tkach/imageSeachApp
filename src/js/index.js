'use strict;'
import { pagination } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { renderCardsList } from './cards/renderCardsList';
import { sortCards } from './sort';
import { openHideSidebar } from './sidebar';
import { openCloseImg } from './openImg';


const body = document.body;
const overlayEl = document.querySelector('.js-overlay');


renderCardsList();
renderTagsList();
sortCards();
openHideSidebar(body, overlayEl);
openCloseImg(body, overlayEl);
pagination(body);




