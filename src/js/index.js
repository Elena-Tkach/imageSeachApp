'use strict;'
import { sortMenu } from './sortMenu';
import { createCards } from './createАrrayСards';
import { changeBgPage } from './changeBgPage';

const body = document.body;
const cardsContainer = document.querySelector('.js-cards-container');
const paginationPages = document.querySelectorAll('.js-page-btn');
const paginationBtns = document.querySelectorAll('.js-pagination-arrow');

sortMenu(body);
createCards(cardsContainer)
changeBgPage(body, paginationPages, paginationBtns);