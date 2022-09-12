'use strict;'
import { createCards } from './createАrrayСards';
import { bodyBg } from './bgPage';

const body = document.body;
const cardsContainer = document.querySelector('.js-cards-container');

createCards(cardsContainer)
bodyBg(body);