export const createTag = (tag) => {
		return `
			<li class="tags__item tag">
                <button class="tag__btn btn btn--border-yellow btn--color-black btn--font-tag">
                   ${tag}
                </button>
            </li>
		`;
	
};