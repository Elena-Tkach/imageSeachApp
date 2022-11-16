export const createTag = (tag) => {

   const tagTemplate = document.querySelector('#tags-template');
   const cloneTagTemplate = tagTemplate.content.cloneNode(true);
   const cloneBtnTag = cloneTagTemplate.querySelector('.js-btn-tag');

   cloneBtnTag.setAttribute('value', tag);
   cloneBtnTag.innerHTML = tag;

   return cloneTagTemplate;

};

export const createTagInCard = (tag) => {

   const tagTemplate = document.querySelector('#tags-template-white-border');
   const cloneTagTemplate = tagTemplate.content.cloneNode(true);
   const cloneBtnTag = cloneTagTemplate.querySelector('.js-btn-tag');

   cloneBtnTag.setAttribute('value', tag);
   cloneBtnTag.innerHTML = tag;

   return cloneTagTemplate;

};