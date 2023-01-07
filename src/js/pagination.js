import { getDataFromApi } from './api';
import { renderCardsList, removeCards } from './cards';


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


export const removePaginaton = () => {
  return paginationParent.innerHTML = '';
}

export const renderPagination = (pages) => {
  const arrowsParent = document.querySelector('.js-arrows');
  const arrowPrev = document.querySelector('.js-arrow-prev');
  const arrowNext = document.querySelector('.js-arraw-next');
  const queryFromStorage = JSON.parse(localStorage.getItem('searchParam'));
  const sortingFromStorage = JSON.parse(localStorage.getItem('sort'));
  const pageFromStorage = JSON.parse(localStorage.getItem('page'));

  const totalPages = pages.total_pages; //всего страниц
  const perPage = 5; //   сколько показываем
  let currentPage = 1;
  const numPages = Math.ceil(totalPages / perPage);

  const pagination = (page) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    removePaginaton();

    for (let i = (page - 1) * perPage; i < (page * perPage) && i < totalPages; i++) {
      const pageItem = createPagination(i + 1);
      paginationParent.append(pageItem);
    }

    if (page < numPages) {
      paginationParent.insertAdjacentHTML('beforeend', `<li class="pagination__page dot-right">...</li > `);
    }

    if (page > 1) {
      paginationParent.insertAdjacentHTML('afterbegin', `<li class="pagination__page dot-left" style="margin-right: 15px;">...</li > `);
    }

    (page === 1) ? arrowPrev.disabled = true : arrowPrev.disabled = false;
    (page === numPages) ? arrowNext.disabled = true : arrowNext.disabled = false;
  }

  const prevPage = () => {
    if (currentPage > 1) {
      currentPage--;
      pagination(currentPage);
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      currentPage++;
      pagination(currentPage);
    }
  }

  pagination(1);

  arrowsParent.addEventListener('click', event => {
    if (event.target.closest('.js-arrow-prev')) {
      prevPage();
    }

    if (event.target.closest('.js-arraw-next')) {
      nextPage();
    }
  })

  paginationParent.addEventListener('click', async (event) => {
    const pageBtn = event.target;
    const activeBtn = paginationParent.querySelector('.active');
    if (event.target.closest('.dot-right')) {
      nextPage();
    }

    if (event.target.closest('.dot-left')) {
      prevPage();
    }

    if (event.target.closest('.js-page-btn')) {
      const activePageNum = pageBtn.textContent
      localStorage.setItem('page', JSON.stringify(activePageNum));
      const page = await getDataFromApi(activePageNum);

      if (queryFromStorage) {
        const queryResults = await getDataFromApi(activePageNum, queryFromStorage, sortingFromStorage);
        removeCards();
        renderCardsList(queryResults);
        changeColorBodyBg();
        activeBtn.classList.remove('active');
        pageBtn.classList.add('active');
      }

      removeCards();
      renderCardsList(page);
      changeColorBodyBg();
      pageBtn.classList.add('active');

      if (activeBtn) {
        activeBtn.classList.remove('active');
        pageBtn.classList.add('active');
      }
    }
  })
}

// paginationParent.addEventListener('click', async (event) => {
//   const pageBtn = event.target;
//   const activeBtn = paginationParent.querySelector('.active');

//   const queryFromStorage = JSON.parse(localStorage.getItem('searchParam'));
//   const sortingFromStorage = JSON.parse(localStorage.getItem('sort'));

//   if (event.target.closest('.js-page-btn')) {
//     const activePageNum = pageBtn.textContent
//     localStorage.setItem('page', JSON.stringify(activePageNum));
//     const page = await getDataFromApi(activePageNum);

//     if (queryFromStorage) {
//       const queryResults = await getDataFromApi(activePageNum, queryFromStorage, sortingFromStorage);
//       removeCards();
//       renderCardsList(queryResults);
//       changeColorBodyBg();
//       activeBtn.classList.remove('active');
//       pageBtn.classList.add('active');
//     }

//     removeCards();
//     renderCardsList(page);
//     changeColorBodyBg();
//     activeBtn.classList.remove('active');
//     pageBtn.classList.add('active');

//   }
// })








