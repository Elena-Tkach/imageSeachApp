export const getImageData = async () => {
  const API_KEY = 'KdT4e5cukzJ7sWMNqitIlKCsz_1FFcktSmElOcV0tvg';
  const API_URL = `https://api.unsplash.com/photos/`;
  const query = 'flowers';

  const response = await fetch(
    `${API_URL}/?client_id=${API_KEY}&per_page=8&query=${query}`
  );

  const result = await response.json();
  return result;

}

