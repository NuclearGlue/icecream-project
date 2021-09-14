(() => {
  const refs = {
    openContactBtn: document.querySelector('[contacts-modal-open]'),
    closeContactBtn: document.querySelector('[contacts-modal-close]'),
    contact: document.querySelector('[contacts-modal]'),
  };

  refs.openContactBtn.addEventListener('click', toggleContact);
  refs.closeContactBtn.addEventListener('click', toggleContact);

  function toggleContact() {
    refs.contact.classList.toggle('is-hidden');
  }
})();