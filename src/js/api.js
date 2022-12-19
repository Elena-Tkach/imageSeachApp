import { appendErrorElement } from './utils';

const API_KEY = `KdT4e5cukzJ7sWMNqitIlKCsz_1FFcktSmElOcV0tvg`;
const API_URL = `https://api.unsplash.com/`;
const MAX_CARDS_PER_PAGE = 3;

export const getDataFromApi = async (pageParam, query = 'nature', sort = 'relevant') => {
  try {
    const SEARCH = `search/photos`;
    const response = await fetch(`${API_URL}${SEARCH}/?client_id=${API_KEY}&per_page=${MAX_CARDS_PER_PAGE}&query=${query}&page=${pageParam}&order_by=${sort}`);
    const result = await response.json();
    console.log(result);
    return result;

  } catch (err) {
    appendErrorElement(
      document.querySelector(`.js-searchWrap`),
      `Что-то пошло не так :( Попробуйте перезагрузить страницу`,
      8000);
  }

};

// export const getDataSort = async (sort) => {
//   try {
//     const SEARCH = `search/photos`;
//     const response = await fetch(`${API_URL}${SEARCH}/?client_id=${API_KEY}&per_page=${MAX_CARDS_PER_PAGE}&order_by=${sort}`);
//     const result = await response.json();
//     console.log(result);
//     return result;

//   } catch (err) {
//     appendErrorElement(
//       document.querySelector(`.js-searchWrap`),
//       `Что-то пошло не так :( Попробуйте перезагрузить страницу`,
//       8000);
//   }

// };

