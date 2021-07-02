const navPosition = () => {
  const mainSectionHeight = document.querySelector('.main').getBoundingClientRect().height,
		navigation = document.querySelector('.about__navigation');
  window.addEventListener('scroll', () => {
    if(window.pageYOffset >= mainSectionHeight){
			navigation.classList.add('_fix');
			navigation.classList.remove('_static');
    } else {
			navigation.classList.remove('_fix');
			navigation.classList.add('_static');
		}
  });
};

export default navPosition;
