'use strict;'
import { modalSortMenu } from './modalSortMenu';
import { createCard } from './createСard';
import { changeBgPage } from './changeBgPage';

// import { createCard2 } from './createCard2';

const body = document.body;
const cardsContainer = document.querySelector('.js-cards-container');
const paginationPages = document.querySelectorAll('.js-page-btn');
const paginationBtns = document.querySelectorAll('.js-pagination-arrow');

modalSortMenu(body);
createCard(cardsContainer);

// createCard2(cardsContainer);

changeBgPage(body, paginationPages, paginationBtns);