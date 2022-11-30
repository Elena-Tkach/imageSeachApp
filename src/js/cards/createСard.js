import { createTag } from '../tags/createTag';
import { capitalizeFirstLetter } from '../utils';

export const createCard = (link, likes, date, author, tag, title) => {

  // const capitalizeFirstLetter = (str) => {
  //   if (!str) return;
  //   return str[0].toUpperCase() + str.slice(1).toLowerCase();
  // }

  const cardTemplate = document.querySelector('#cardTemplate');
  const cloneCardTemplate = cardTemplate.content.cloneNode(true);
  const cardImg = cloneCardTemplate.querySelector('.js-card-img');
  const cardLikes = cloneCardTemplate.querySelector('.js-card-likes');
  const cardTitle = cloneCardTemplate.querySelector('.js-card-title');
  const cardDate = cloneCardTemplate.querySelector('.js-card-date');
  const cardAuthor = cloneCardTemplate.querySelector('.js-card-author');
  const cardTagsList = cloneCardTemplate.querySelector('.js-card-tags');

  tag.forEach(tagItem => {
    const tag = createTag(tagItem, 'btn--bg-light-white');
    cardTagsList.append(tag);
  });

  cardImg.setAttribute('src', link);
  cardImg.setAttribute('alt', title);
  cardLikes.innerHTML = likes;
  cardDate.innerHTML = date;
  cardAuthor.innerHTML = author;
  cardTitle.innerHTML = capitalizeFirstLetter(title);

  return cloneCardTemplate;

};
