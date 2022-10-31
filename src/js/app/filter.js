// text if nothing is found
export const appendHtmlText = (block) => {
  const div = document.createElement('div');
  div.className = 'nothing-found';
  div.innerHTML = `Nothing found. Try again`;
  block.append(div);

  setTimeout(() => {
    div.remove();
  }, 5000);
};

export const filteringCardsByTags = (target, cards) => {
  return cards.filter(({ tags: arr }) => arr.some(tag => target.includes(tag)));
};

export const filteringCardsByIncomingData = (target, search, cards) => {
  return cards.filter(card => (card[search]).toLowerCase().includes(target));
};





