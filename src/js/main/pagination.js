
export const pagination = (colors) => {
  const paginationPages = document.querySelectorAll('.js-page-btn');
  const paginationBtns = document.querySelectorAll('.js-pagination');

  const onShowPagination = (event) => {
    event.preventDefault();
    const target = event.target;

    onHidePagination();
    changeColorBodyBg();
    target.classList.add('active');

  }

  const onHidePagination = () => {
    paginationPages.forEach(item => {
      item.classList.remove('active');
    })
  }

  const changeColorBodyBg = () => {
    document.body.style.background = colors[Math.floor(Math.random()
      * colors.length)];
  }

  paginationPages.forEach(item => {
    item.addEventListener('click', onShowPagination);
  })

  paginationBtns.forEach(item => {
    item.addEventListener('click', changeColorBodyBg);

  })



}