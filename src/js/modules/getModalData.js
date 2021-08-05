const getDataModal = (getSelector) => {
  const title = getSelector.querySelector('.hover__title').textContent,
        categories = getSelector.querySelector('.hover__categories').textContent,
        view = getSelector.querySelector('.hover__view').getAttribute('href'),
        code = getSelector.querySelector('.hover__code').getAttribute('href'),
        src = getSelector.querySelector('.portfolio__img').getAttribute('data-src');
  return {
    title: title,
    categories: categories,
    view: view,
    code: code,
    src: src,
  };
};

export default getDataModal;