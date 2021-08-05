import getDataModal from "./getModalData";
import setData from './setDatModal';
const popup = (triggerSelector, modalSelector, overlaySelector, closeSelector) => {
  const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        overlay = document.querySelector(overlaySelector),
        closes = document.querySelectorAll(closeSelector);

  for(let trigger of triggers){
    trigger.addEventListener('click', (e) => {
      if(e.target.closest('.mobile') || e.target.querySelector('.mobile')){
        visibleModal();
        setData(modal, getDataModal(e.target.closest('.portfolio__item')));
      }
    });
  }
  for(let close of closes){
    close.addEventListener('click', (e) => {
      unvisibleModal();
    });
  }
  overlay.addEventListener('click', (e) => {
    if(!e.target.closest('.modal')){
      unvisibleModal();
    }
  });
  function visibleModal(){
    modal.classList.add('_visible');
    overlay.classList.add('_visible');
    document.body.style.overflow = 'hidden';
  }
  function unvisibleModal(){
    modal.classList.remove('_visible');
    overlay.classList.remove('_visible');
    document.body.style.overflow = '';
  }
};

export default popup;