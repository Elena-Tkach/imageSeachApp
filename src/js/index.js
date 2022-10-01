'use strict;'
import { openHideSidebar } from './sidebar';
import { pagination } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { renderCardsList } from './cards/renderCardsList';
import { sortCards } from './sort';


const body = document.body;


openHideSidebar(body);
renderTagsList();
renderCardsList();
sortCards();
pagination(body);




