export const cardsImg = [
  {
    imageLink: 'https://images.unsplash.com/photo-1662412740518-21df8af88320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    alt: 'image',
    likes: 112,
    date: '05/09/22',
    tags: ['Red', 'Yellow', 'Blue'],
    author: 'John Doe'

  }
];



// function generateTable(items, tableList) {
//   tableList.innerHTML = items.map((item) => {
//     return `
//       <li class="cards__item card">
//         <figure class="card__figure">
//             <img class="card__img"
//                 src="${item.imageLink}"
//                 alt="${item.alt}">

//             <figcaption class="card__wrapper card-info">
//                 <div class="card-info__top top-content">
//                     <ul class="top-content__top-list top-list">
//                         <li class="top-list__item">
//                             <button class="top-list__like btn js-btn-likes"></button>
//                             <span class="top-list__rating js-likes-result">${item.likes}</span>
//                         </li>
//                         <li class="top-list__item">
//                             <time class="top-list__date js-date" datetime="2022-09-05">${item.date}</time>
//                         </li>
//                     </ul>

//                     <p class="top-content__author">
//                         <span class="top-content__span">by</span>
//                         <span class="top-content__name">${item.author}</span>
//                     </p>
//                 </div>

//                 <ul class="card-info__tags-list tags-list">
//                     <li class="tags-list__item">
//                         <a href="#" class="tags-list__link">${item.teg}</a>
//                     </li>
//                     <li class="tags-list__item">
//                         <a href="#" class="tags-list__link">#Yellow</a>
//                     </li>
//                     <li class="tags-list__item">
//                         <a href="#" class="tags-list__link">#Green</a>
//                     </li>
//                 </ul>
//             </figcaption>
//         </figure>
//       </li>
//     `;

//   });

// }
