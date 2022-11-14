
export const showErrorText = () => {
  const error = document.querySelector('.error');
  error.style.display = "block";

  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};

export const appendErrorElement = (block, textError) => {
  const errorHTML = `<div class="error error--color">${textError}</div>`
  block.insertAdjacentHTML('beforebegin', errorHTML);

  setTimeout(() => {
    document.querySelector('.error').remove();
  }, 5000);
};



export const filteringCardsByTags = (target, cards) => {
  return cards.filter(({ tags: arr }) => arr.some(tag => target.includes(tag)));
};

export const filteringCardsByIncomingData = (target, search, cards) => {
  return cards.filter(card => (card[search]).toLowerCase().includes(target));
};







