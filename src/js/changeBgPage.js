export function changeBgPage(body, paginationPages, paginationBtns) {


  const colorArray = ['#c8dcdb', '#9ab5b5', '#a1acab', '#f7e7d2', '#e2ba65', '#f1d7da'];
  const showPagination = (event) => {
    event.preventDefault();
    const target = event.target;

    hidePagination();
    changeColor();
    target.classList.add('active');

  }


  const hidePagination = () => {
    paginationPages.forEach(item => {
      item.classList.remove('active');
    })
  }

  const changeColor = () => {
    body.style.background = colorArray[Math.floor(Math.random()
      * colorArray.length)];
  }

  paginationPages.forEach(item => {
    item.addEventListener('click', showPagination);
  })

  paginationBtns.forEach(item => {
    item.addEventListener('click', changeColor);

  })



}