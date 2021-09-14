(() => {
  const refs = {
    openModalBtn: document.querySelector('[products-modal-open]'),
    closeModalBtn: document.querySelector('[products-modal-close]'),
    modal: document.querySelector('[products-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[productssecond-modal-open]'),
    closeModalBtn: document.querySelector('[productssecond-modal-close]'),
    modal: document.querySelector('[productssecond-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[productsthird-modal-open]'),
    closeModalBtn: document.querySelector('[productsthird-modal-close]'),
    modal: document.querySelector('[productsthird-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();