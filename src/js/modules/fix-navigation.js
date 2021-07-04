const navPosition = () => {
	listenScroll();
  window.addEventListener('orientationchange', () => {
		listenScroll();
	});
};
	function listenScroll(){
		const navigation = document.querySelector('.about__navigation');
		window.addEventListener('scroll', () => {
			const mainSectionHeight = document.querySelector('.main').getBoundingClientRect().height;
			if(window.pageYOffset >= mainSectionHeight){
				navigation.classList.add('_fix');
				navigation.classList.remove('_static');
			} else {
				navigation.classList.remove('_fix');
				navigation.classList.add('_static');
			}
		});
	}
export default navPosition;
