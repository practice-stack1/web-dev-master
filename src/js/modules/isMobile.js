import checkMobile from '../basic/checkMobile';

const isMobile = (selector) => {
  const elements = document.querySelectorAll(selector);
  if(checkMobile.any()){
    elements.forEach(element => {
      element.classList.add('mobile');
    });
  }else {
    elements.forEach(element => {
      element.classList.remove('mobile');
    });
  }
};

export default isMobile;