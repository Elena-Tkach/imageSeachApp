export const createTag = (tag, classBtn) => {

   const tagTemplate = document.querySelector('#tags-template');
   const cloneTagTemplate = tagTemplate.content.cloneNode(true);
   const cloneBtnTag = cloneTagTemplate.querySelector('.js-btn-tag');

   cloneBtnTag.setAttribute('value', tag);
   cloneBtnTag.classList.add(classBtn);
   cloneBtnTag.innerHTML = tag;

   return cloneTagTemplate;

};