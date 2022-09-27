'use strict;'
import { openHideSidebar } from './sidebar';
import { changeBgPage } from './changeBgPage';
import { createFilterTagList } from './createFilterTagList';
import { sortCards } from './sort/sort';


const body = document.body;
const paginationPages = document.querySelectorAll('.js-page-btn');
const paginationBtns = document.querySelectorAll('.js-pagination-arrow');



openHideSidebar(body);
createFilterTagList();
sortCards();
changeBgPage(body, paginationPages, paginationBtns);




