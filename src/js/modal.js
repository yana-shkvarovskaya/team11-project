(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
    }
  })();
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-two]'),
      closeModalBtn: document.querySelector('[data-modal-close-two]'),
      modal: document.querySelector('[data-modal-two]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
    }
  })();
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-three]'),
      closeModalBtn: document.querySelector('[data-modal-close-three]'),
      modal: document.querySelector('[data-modal-three]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
    }
  })();