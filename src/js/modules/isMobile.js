import checkMobile from '../basic/checkMobile';

const isMobile = (selector) => {
  const elements = document.querySelectorAll(selector);

  if(checkMobile){
    elements.forEach(element => {
      element.classList.add('mobile');
    });
  }
};

export default isMobile;