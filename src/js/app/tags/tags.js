export const getSortTags = (cards) => {
	let tags = [];

	cards.map(card => {
		card.tags.map(tag => {
			tags.push(tag);
		});
	})

	const uniqueTags = tags.filter((element, index) => {
		return tags.indexOf(element) === index;
	});

	return uniqueTags;

};

