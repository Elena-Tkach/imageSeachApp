import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';
import { sortCards } from './sort';

const colors = ['#c8dcdb', '#9ab5b5', '#a1acab', '#f7e7d2', '#e2ba65', '#f1d7da', '#e2e2e2', '#ffffff'];
const paginationParent = document.querySelector('.js-pagination-list');

const changeColorBodyBg = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[(randomColor)];
}

const createPagination = (page) => {
  const paginTemplate = document.querySelector('#pagination-template');
  const clonePaginTemplate = paginTemplate.content.cloneNode(true);
  const pageBtn = clonePaginTemplate.querySelector('.js-page-btn');
  if (page == 1) {
    pageBtn.classList.add('active');
  }
  pageBtn.innerHTML = `${page}`;
  return clonePaginTemplate;
};

export const renderPagination = (result) => {
  for (let i = 0; i < result.total_pages; i++) {
    const pageItem = createPagination(i + 1);
    paginationParent.append(pageItem);
  }
};

export const removePaginaton = () => {
  return paginationParent.innerHTML = '';
}

paginationParent.addEventListener('click', async (event) => {
  const pageBtn = event.target;

  const activeBtn = paginationParent.querySelector('.active');
  const previousStorageQuery = JSON.parse(localStorage.getItem('searchParam'));
  const previousStorageSort = JSON.parse(localStorage.getItem('sort'));


  if (event.target.closest('.js-page-btn')) {
    const activePageNum = pageBtn.textContent
    localStorage.setItem('page', JSON.stringify(activePageNum));
    const page = await getDataFromApi(activePageNum);

    console.log(previousStorageSort);
    if (previousStorageQuery) {
      const queryResults = await getDataFromApi(activePageNum, previousStorageQuery);
      removeCards();
      renderCardsList(queryResults);
      changeColorBodyBg();
      activeBtn.classList.remove('active');
      pageBtn.classList.add('active');
    }

    if (previousStorageSort) {
      const sortResults = await getDataFromApi(activePageNum, 'nature', previousStorageSort);
      console.log(sortResults);
      removeCards();
      renderCardsList(sortResults);
      changeColorBodyBg();
      activeBtn.classList.remove('active');
      pageBtn.classList.add('active');
    }

    if (previousStorageSort && previousStorageQuery) {
      const storageResults = await getDataFromApi(activePageNum, previousStorageQuery, previousStorageSort);
      removeCards();
      renderCardsList(storageResults);
      changeColorBodyBg();
      activeBtn.classList.remove('active');
      pageBtn.classList.add('active');
    }

    if (!previousStorageQuery || !previousStorageSort) {
      removeCards();
      renderCardsList(page);
      changeColorBodyBg();
      activeBtn.classList.remove('active');
      pageBtn.classList.add('active');
    }
  }
})








