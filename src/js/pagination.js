
const colors = ['#c8dcdb', '#9ab5b5', '#a1acab', '#f7e7d2', '#e2ba65', '#f1d7da', '#e2e2e2', '#ffffff', '#a75452'];


const changeColorBodyBg = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[(randomColor)];
}

const createPagination = (page, queryParam) => {
  const paginTemplate = document.querySelector('#pagination-template');
  const clonePaginTemplate = paginTemplate.content.cloneNode(true);
  const pageBtn = clonePaginTemplate.querySelector('.js-page-btn');

  pageBtn.setAttribute(`href`, `index.html?page=${page}`);
  pageBtn.setAttribute(`value`, `${page}`);
  
  if (page == Number(queryParam)) {
    changeColorBodyBg();
    pageBtn.classList.add('active');
  }

  pageBtn.innerHTML = `${page}`;
  return clonePaginTemplate;

};

export const renderPagination = (result, queryParam) => {
  const listPageEl = document.querySelector('.js-pagination-list');

  for (let i = 1; i < result.total_pages; i++) {
    const pageItem = createPagination(i, queryParam);
    listPageEl.append(pageItem);
  }
};








