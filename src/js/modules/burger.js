const burger = (burgerSelector, menuSelector) => {
  	const burger = document.querySelector(burgerSelector),
  		menu = document.querySelector(menuSelector);

	burger.addEventListener('click', (e) => {
		console.log(e.target);
		if(e.target.classList.contains('menu__burger') || e.target.parentElement.classList.contains('menu__burger')){
			document.body.classList.toggle('_block');
			menu.classList.toggle('_active');
			burger.classList.toggle('_active');
		}
	});

};

export default burger;