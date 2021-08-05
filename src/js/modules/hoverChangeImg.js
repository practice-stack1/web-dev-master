// import ibg from '../basic/ibg';
import isMobile from '../basic/checkMobile';

const hoverImg = (hoverSelector) => {
    if(!isMobile.any()) {
      const hoverSelectors = document.querySelectorAll(hoverSelector);

      for (let item of hoverSelectors){
        item.addEventListener('mouseenter', ({target}) => {
          changeImg(target);
        });
        item.addEventListener('mouseleave', ({target}) => {
          changeImg(target);
        });
      }
      function changeImg(target){
        const img = target.querySelector('.portfolio__img');
          let dataSrc = img.dataset.src;
            img.setAttribute('data-src', `${img.getAttribute('src')}`);
            img.setAttribute('src', `${dataSrc}`);
      }
    }
};

export default hoverImg;