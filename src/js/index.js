'use strict;'
import { pagination } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { renderCardsList } from './cards/renderCardsList';
import { sortCards } from './sort';
import { openHideSidebar } from './sidebar';


const body = document.body;


openHideSidebar(body);
renderTagsList();
renderCardsList();
sortCards();
pagination(body);




