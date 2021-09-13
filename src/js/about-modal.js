(() => {
  const refs = {
    openContactBtn: document.querySelector('[about-modal-open]'),
    closeContactBtn: document.querySelector('[about-modal-close]'),
    contact: document.querySelector('[about-modal]'),
  };

  refs.openContactBtn.addEventListener('click', toggleContact);
  refs.closeContactBtn.addEventListener('click', toggleContact);

  function toggleContact() {
    refs.contact.classList.toggle('is-hidden');
  }
})();