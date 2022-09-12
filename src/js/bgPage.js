export function bodyBg(body) {
  const paginationItems = document.querySelectorAll('.js-pag-item');
  const paginationBtns = document.querySelectorAll('.js-pagination-btn');

  const colorArray = ['#fff', '#c8dcdb', '#9ab5b5', '#a1acab', '#f7e7d2', '#e2ba65', '#f1d7da'];

  const showPagination = (event) => {
    event.preventDefault();
    const target = event.target;

    hidePagination();
    changeColor();
    target.classList.add('active');

  }

  const hidePagination = () => {
    paginationItems.forEach(item => {
      item.classList.remove('active');
    })
  }

  const changeColor = () => {
    body.style.background = colorArray[Math.floor(Math.random()
      * colorArray.length)];
  }

  paginationItems.forEach(item => {
    item.addEventListener('click', showPagination);
  })

  paginationBtns.forEach(item => {
    item.addEventListener('click', changeColor);
  })



}