'use strict;'
import { modalSortMenu } from './modalSortMenu';
import { changeBgPage } from './changeBgPage';
import { createFilterTagList } from './createFilterTagList';
import { sortCards } from './sort/sortCards';


const body = document.body;
const paginationPages = document.querySelectorAll('.js-page-btn');
const paginationBtns = document.querySelectorAll('.js-pagination-arrow');



modalSortMenu(body);
createFilterTagList();
sortCards();
changeBgPage(body, paginationPages, paginationBtns);




