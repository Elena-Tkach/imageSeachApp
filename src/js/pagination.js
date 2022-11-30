import { colors } from './consts';

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

export const renderPagination = (result) => {
  const queryParam = queryParamDefinition();
  const pages = Math.ceil(result.total / 10);

  for (let i = pages; i >= 1; i--) {
    listPageEl.insertAdjacentHTML('afterbegin', createPage(i, queryParam));
  }
};