const burger = (burgerSelector, menuSelector, menuItemSelector) => {
  	const burger = document.querySelector(burgerSelector),
  		menu = document.querySelector(menuSelector),
		items = document.querySelectorAll(menuItemSelector);

	burger.addEventListener('click', (e) => {
		if(e.target.classList.contains('menu__burger') || e.target.parentElement.classList.contains('menu__burger')){
			if(document.querySelector('.about__navigation').classList.contains('_fix')){
				document.body.classList.toggle('_block');
			}
			burger.classList.toggle('_active');
			menu.classList.toggle('_active');
		}
	});

	items.forEach(item => {
		item.addEventListener('click', (e) => {

			menu.classList.remove('_active');
			burger.classList.remove('_active');
		});
	});

	window.addEventListener('scroll', () => {
		if(burger.classList.contains('_active') && document.querySelector('.about__navigation').classList.contains('_fix')){
			document.body.classList.add('_block');
		}else {
			document.body.classList.remove('_block');
		}
	});
};

export default burger;