'use strict;'
import { openHideSidebar } from './sidebar';
import { pagination } from './pagination';
import { renderTagsList } from './tags/renderTagsList';
import { sortCards } from './sort/sort';


const body = document.body;




openHideSidebar(body);
renderTagsList();
sortCards();
pagination(body);




