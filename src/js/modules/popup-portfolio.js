const popup = (triggerSelector, modalSelector, overlaySelector, closeSelector) => {
  const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        overlay = document.querySelector(overlaySelector),
        closes = document.querySelectorAll(closeSelector);

  for(let trigger of triggers){
    trigger.addEventListener('click', (e) => {
        modal.classList.add('_visible');
        overlay.classList.add('_visible');
        document.body.style.overflow = 'hidden';
    });
  }
  for(let close of closes){
    close.addEventListener('click', (e) => {
      modal.classList.remove('_visible');
      overlay.classList.remove('_visible');
      document.body.style.overflow = '';
    });
  }
  overlay.addEventListener('click', (e) => {
    console.log(e.target.closest('.modal'));
    if(!e.target.closest('.modal')){
      modal.classList.remove('_visible');
      overlay.classList.remove('_visible');
      document.body.style.overflow = '';
    }
  });
};

export default popup;