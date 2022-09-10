export function bodyBg(body) {
  const paginationParent = document.querySelector('.js-paginationList');
  const paginationItems = document.querySelectorAll('.js-pag-item');


  // paginationParent.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   const target = event.target;

  //   if (target.classList.contains(`active`)) {
  //     hidePagination(target);
  //   }

  // })

  paginationItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target;

      showPagination(target);
    })
  })

  function showPagination(item) {
    item.classList.add('active');

  }

  function hidePagination(item) {
    item.classList.remove('active');

  }





}