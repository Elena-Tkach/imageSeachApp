
const colors = ['#c8dcdb', '#9ab5b5', '#a1acab', '#f7e7d2', '#e2ba65', '#f1d7da', '#e2e2e2', '#ffffff', '#a75452'];

const changeColorBodyBg = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[(randomColor)];
}

const createPagination = (page, pageParam) => {
  const paginTemplate = document.querySelector('#pagination-template');
  const clonePaginTemplate = paginTemplate.content.cloneNode(true);
  const pageBtn = clonePaginTemplate.querySelector('.js-page-btn');

  pageBtn.setAttribute(`href`, `index.html?page=${page}`);
  pageBtn.setAttribute(`value`, `${page}`);

  if (page == Number(pageParam)) {
    changeColorBodyBg();
    pageBtn.classList.add('active');
  }

  pageBtn.innerHTML = `${page}`;
  return clonePaginTemplate;
};

export const renderPagination = (result, pageParam) => {
  const listPageEl = document.querySelector('.js-pagination-list');

  for (let i = 0; i < result.total_pages; i++) {
    const pageItem = createPagination(i + 1, pageParam);
    listPageEl.append(pageItem);
  }
};

export const removePaginaton = () => {
  const listPageEl = document.querySelector('.js-pagination-list');
  return listPageEl.innerHTML = '';
}








