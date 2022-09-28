import { cards } from './consts';

export const createCard = () => {
const cardsContainer = document.querySelector('.js-cards-container');


  const tags = (tags) => {

    return `
       <ul class="info__tags tags js-tags">

        ${tags.map((tag) => {
          return `
            <li class="tags__item tag">
                <button class="tag__btn btn btn--bg-light-white btn--font-tag">
                  #${tag}
                </button>
            </li>
          `;
        }).join(``)
      }
      </ul>
    `;
  };
 
  const addCards = (cards, cardsContainer) => {
    cardsContainer.innerHTML = cards.map((card) => {
      return ` 
            <li class="cards__item card">
              <figure class="card__content">
                  <img class="card__img" src="${card.imageLink}" alt="${card.alt}">

                  <figcaption class="card__info info">
                      <div class="info__header">
                          <div class="info__rating rating">
                              <button class="rating__like btn js-btn-likes"></button>
                              <span class="rating__result js-likes-result">${card.likes}</span>
                          </div>

                          <div class="info__date">
                              <time class="date js-date" datetime="2022-09-05">${card.date}</time>
                          </div>
                      </div>

                      <div class="info__body"> 
                        
                        <p class="info__author author">
                        by
                            <span class="author__name">${card.author}</span>
                        </p>
                        <h2 class="info__title title title--second title--yellow">${card.title}</h2>
                      </div>  

                      ${tags(card.tags)}

                  </figcaption>
              </figure>
          </li>
        `;
    }).join(``);
  };

  addCards(cards, cardsContainer);


};