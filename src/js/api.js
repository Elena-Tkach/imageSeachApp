const API_KEY = 'KdT4e5cukzJ7sWMNqitIlKCsz_1FFcktSmElOcV0tvg';
const API_URL = `https://api.unsplash.com/`;
const MAX_CARDS_PER_PAGE = 8;

export const getDataFromApi = async (query = 'nature', page = 1) => {
  try {
    const SEARCH = `search/photos`;
    const response = await fetch(`${API_URL}${SEARCH}/?client_id=${API_KEY}&per_page=${MAX_CARDS_PER_PAGE}&query=${query}&$page=${page}`);

    const result = await response.json();
    return result;

  } catch (err) {
    console.log('Error >>>', err);
  }

}

