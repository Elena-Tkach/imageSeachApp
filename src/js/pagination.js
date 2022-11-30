import { colors } from './consts';
import { getDataFromApi } from './api';
import { queryParamDefinition } from './utils';

export const renderColorPaginationAndPage = () => {
  const paginationContainer = document.querySelector('.js-pagination-container');
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

export const createPaginationLink = (i, queryParam) => {
  const paginTemplate = document.querySelector('#pagination-template');
  const clonePaginTemplate = paginTemplate.content.cloneNode(true);
  const link = clonePaginTemplate.querySelector('.js-page-btn');

  link.setAttribute('href', `?page=${i}`);
  (i === queryParam) ? link.classList.add('active') : '';

  link.innerHTML = i;

  return clonePaginTemplate;

};


export const renderPagination = async () => {
  const listPageEl = document.querySelector('.js-pagination-list');
  const queryParam = queryParamDefinition();
  const result = await getDataFromApi(`texture`, queryParam);

  const pages = Math.ceil(result.total / 1000);

  for (let i = pages; i >= 1; i--) {
    const page = createPaginationLink(i, queryParam);
    listPageEl.prepend(page);
    //  listPageEl.insertAdjacentHTML('afterbegin', createPaginationLink(i, queryParam));
  }
};