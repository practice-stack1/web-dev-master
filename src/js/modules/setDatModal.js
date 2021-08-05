const setData = (modal, {title, categories, view, code, src}) => {
  modal.querySelector('.modal-portfolio__title span').textContent = title;
  modal.querySelector('.modal-portfolio__categories span').textContent = categories;
  modal.querySelector('.modal-portfolio__view').setAttribute('href', `${view}`);
  modal.querySelector('.modal-portfolio__code').setAttribute('href', `${code}`);
  modal.querySelector('.modal-portfolio__bg').setAttribute('src', `${src}`);
};

export default setData;