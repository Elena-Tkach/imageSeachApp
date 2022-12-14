let previousActiveElement;
const overlayEl = document.querySelector('.js-overlay');
const btnClose = document.querySelector('.js-btn-close');

export const onShowContainer = (container) => {
  container.classList.add('js-visible');
  overlayEl.classList.add('js-visible');
  document.body.classList.add('no-scroll');

  previousActiveElement = document.activeElement;

  setTimeout(() => {
    btnClose.focus();
  }, 100);

};

export const onHideContainer = (container) => {
  container.classList.remove('js-visible');
  overlayEl.classList.remove('js-visible');
  document.body.classList.remove('no-scroll');
  previousActiveElement.focus();

};

export const capitalizeFirstLetter = (str) => {
  if (!str) return;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


export const pageParamRequest = () => {
  // определение query-параметра
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let pageParam = params.page;
  if (!pageParam) {
    pageParam = 1;
    history.pushState(null, null, '?page=1');
  }
  return pageParam;
}


export const appendErrorElement = (block, textError, time) => {
  const errorHTML = `<div class="error error--color">${textError}</div>`
  block.insertAdjacentHTML('beforebegin', errorHTML);

  setTimeout(() => {
    document.querySelector('.error').remove();
  }, time);
};




