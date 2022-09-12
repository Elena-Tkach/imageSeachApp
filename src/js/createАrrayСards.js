export function createCards(cardsContainer) {
  const cards = [
    {
      imageLink: 'https://images.unsplash.com/photo-1662511024026-bc935d6d7962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      alt: 'image',
      likes: 16,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Red'],
      author: 'John Doe',
    },

    {
      imageLink: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'image',
      likes: 100,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Black'],
      author: 'John Doe',
    },

    {
      imageLink: 'https://images.unsplash.com/photo-1662515291656-304de59d70de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
      alt: 'image',
      likes: 102,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Red'],
      author: 'John Doe',
    },

    {
      imageLink: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'image',
      likes: 12,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Red'],
      author: 'John Doe',
    },

    {
      imageLink: 'https://images.unsplash.com/photo-1662671541709-4a3151a39409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'image',
      likes: 12,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Red'],
      author: 'John Doe',
    },

    {
      imageLink: 'https://images.unsplash.com/photo-1662496167893-96a24461e7b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'image',
      likes: 12,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Red'],
      author: 'John Doe',
    },

    {
      imageLink: 'https://images.unsplash.com/photo-1662720215950-ce15c16373d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzODl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'image',
      likes: 12,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Red'],
      author: 'John Doe',
    },

    {
      imageLink: 'https://images.unsplash.com/photo-1662657835175-595c83a5587c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'image',
      likes: 12,
      date: '05/09/22',
      tags: ['Yellow', 'Blue', 'Red'],
      author: 'John Doe',
    },
  ];

  const addCards = (cards, cardsContainer) => {
    cardsContainer.innerHTML = cards.map((card) => {
      return ` 
          <li class="cards__item card">
            <figure class="card__figure">
              <img class="card__img"
                src="${card.imageLink}"
                alt="${card.alt}">

                <figcaption class="card__wrapper card-info">
                  <div class="card-info__top top-content">
                    <ul class="top-content__top-list top-list">
                      <li class="top-list__item">
                        <button class="top-list__like btn js-btn-likes"></button>
                        <span class="top-list__rating js-likes-result">${card.likes}</span>
                      </li>
                      <li class="top-list__item">
                        <time class="top-list__date js-date" datetime="2022-09-05">${card.date}</time>
                      </li>
                    </ul>

                    <p class="top-content__author">
                      <span class="top-content__span">by</span>
                      <span class="top-content__name">${card.author}</span>
                    </p>
                  </div>

                  <ul class="card-info__tags-list tags-list">
                    <li class="tags-list__item">
                      <a href="#" class="tags-list__link">#${card.tags[0]}</a>
                    </li>

                    <li class="tags-list__item">
                      <a href="#" class="tags-list__link">#${card.tags[1]}</a>
                    </li>

                    <li class="tags-list__item">
                    <a href="#" class="tags-list__link">#${card.tags[2]}</a>
                  </li>
                  </ul>
                </figcaption>
            </figure>
          </li>
        `;
    }).join(``);
  }

  addCards(cards, cardsContainer);




};