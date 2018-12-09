import '../../assets/scss/login.scss';

(() => {
  const doc = window.document;
  const [alertDialog] = doc.getElementsByClassName('failed-login');

  if (alertDialog) {
    const closeButton = alertDialog.firstChild;

    closeButton.addEventListener('click', () => {
      alertDialog.style.opacity = 0;
    });
  }
})();
