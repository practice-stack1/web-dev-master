init();

function init(){
  let items = document.querySelector('.portfolio__items');
  let iso = new Isotope( items, {
    itemSelector: '.portfolio__item-wrapper',
    masonry: {
      columnWidth: '.portfolio-sizer'
    },
    layoutMode: 'fitRows',
    transitionDuration: '0.4s'
  });

  let filterBtn = document.querySelectorAll('.portfolio__categories .categories__item a');
  filterBtn.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      removerActive();
      e.target.classList.add('active');
      let filterData = e.target.getAttribute('data-filter');
      iso.arrange({
        filter: filterData
      });
    });
  });

  function removerActive() {
    filterBtn.forEach(a => {
      a.classList.remove('active');
    });
  }
}