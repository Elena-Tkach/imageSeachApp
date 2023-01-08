'use strict;'
import { getDataFromApi } from './api';
import { pagination, removePaginaton } from './pagination';
import { renderTagsList } from './tags';
import { renderCardsList, removeCards } from './cards';
import { sidebarHandler } from './sidebar';
import { modalCardHandler } from './modalCard';
import { getCardsBySearchValue } from './search';
import { sortCards } from './sort';

const globalState = {
  search: '',
};

const appInit = async () => {
  const queryFromStorage = JSON.parse(localStorage.getItem('searchParam'));
  const sortingFromStorage = JSON.parse(localStorage.getItem('sort'));
  const pageFromStorage = JSON.parse(localStorage.getItem('page'));
  const result = await getDataFromApi();

  if (queryFromStorage) {
    console.log(queryFromStorage)
    const queryResults = await getDataFromApi(1, queryFromStorage);

    // if (pageFromStorage) {
    //   const queryPageResults = await getDataFromApi(pageFromStorage, queryFromStorage);
    //   removeCards();
    //   removePaginaton();
    //   renderCardsList(queryPageResults);
    //   renderTagsList(queryPageResults);
    //   pagination(queryPageResults);

    //   if (sortingFromStorage) {
    //     const queryPageSortResults = await getDataFromApi(pageFromStorage, queryFromStorage, sortingFromStorage);
    //     removeCards();
    //     removePaginaton();
    //     renderCardsList(queryPageSortResults);
    //     renderTagsList(queryPageSortResults);
    //     pagination(queryPageSortResults);
    //   }
    // }


    removeCards();
    removePaginaton();
    renderCardsList(queryResults);
    renderTagsList(queryResults);
    pagination(queryResults);
  }

  if (sortingFromStorage) {
    const sortResults = await getDataFromApi(1, queryFromStorage, sortingFromStorage);

    if (pageFromStorage) {
      const sortPageResults = await getDataFromApi(pageFromStorage, queryFromStorage, sortingFromStorage);
      removeCards();
      removePaginaton();
      renderCardsList(sortPageResults);
      renderTagsList(sortPageResults);
      pagination(sortPageResults);
    }

    removeCards();
    removePaginaton();
    renderCardsList(sortResults);
    renderTagsList(sortResults);
    pagination(sortResults);
  }

  if (!queryFromStorage || !sortingFromStorage || !pageFromStorage) {
    removeCards();
    removePaginaton();
    renderCardsList(result);
    renderTagsList(result);
    pagination(result);

  }



  if (pageFromStorage ) {
    const pageResult = await getDataFromApi(pageFromStorage,);

    const paginationParent = document.querySelector('.js-pagination-list');
    const paginations = document.querySelectorAll('.js-page-btn');
    paginations.forEach(page => {
      if (page.textContent === pageFromStorage) {
        removeCards();
        renderCardsList(pageResult);
        renderTagsList(pageResult);

        const pageActive = paginationParent.querySelector('.active');
        pageActive.classList.remove('active');
        page.classList.add('active');
      }
    })
  }

  getCardsBySearchValue();
  sortCards(1);

}

appInit();
sidebarHandler();
modalCardHandler();







