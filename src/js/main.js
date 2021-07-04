import './basic/ibg';
import './basic/anim-scroll';
import navPosition from './modules/fix-navigation';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', function() {
  navPosition();
  burger('.menu__burger', '.menu__body', '.menu__item a');
});