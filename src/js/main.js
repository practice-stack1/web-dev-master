import './basic/ibg';
import './basic/anim-scroll';
import navPosition from './modules/fix-navigation';
import burger from './modules/burger';
import './modules/isotope';
import './modules/chart';
import isMobile from './modules/isMobile';
import popup from './modules/popup-portfolio';
import hoverImg from './modules/hoverChangeImg';


window.addEventListener('DOMContentLoaded', function() {
  navPosition();
  burger('.menu__burger', '.menu__body', '.menu__item a');
  isMobile('.portfolio__item');
  popup('.portfolio__item', '.modal-portfolio', '.overlay', '.modal-portfolio__close');
  hoverImg('.portfolio__item');

});