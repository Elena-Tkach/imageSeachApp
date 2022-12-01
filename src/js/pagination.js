import { colors } from './consts';
import { getDataFromApi } from './api';
const paginationContainer = document.querySelector('.js-pagination-container');

export const initPagination = async () => {
  const result = await getDataFromApi();
 
  const createPagination = (page) => {
    const paginTemplate = document.querySelector('#pagination-template');
    const clonePaginTemplate = paginTemplate.content.cloneNode(true);
    const pageBtn = clonePaginTemplate.querySelector('.js-page-btn');

    pageBtn.setAttribute('value', `${page}`);
    pageBtn.innerHTML = `${page}`;

    return clonePaginTemplate;

  };

  const renderPagination = () => {
    const listPageEl = document.querySelector('.js-pagination-list');
    for (let i = 1; i < result.total_pages; i++) {
      const page = createPagination(i);
      listPageEl.append(page);
    }
  };

  return renderPagination();

}



export const renderColorPaginationAndPage = () => {

  const pageBnts = document.querySelectorAll('.js-page-btn');

  const changeColorBodyBg = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[(randomColor)];
  }

  const addClass = (target) => {
    target.classList.add('active');
  }

  const deleteClass = (elements) => {
    elements.forEach(element => {
      element.classList.remove('active');
    })
  };


  paginationContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-page-arrow')) {
      changeColorBodyBg();
      addClass(event.target);
    }

    if (event.target.classList.contains('js-page-btn')) {

      deleteClass(pageBnts);
      changeColorBodyBg();
      addClass(event.target);
    }
  })
}
