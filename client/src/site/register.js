
import xhr from '../lib/xhr';

(() => {
  const doc = window.document;
  const registerButton = document.getElementById('registerButton');

  const [alertDialog] = doc.getElementsByClassName('error-notification');

  if (alertDialog) {
    const closeButton = alertDialog.firstChild;

    closeButton.addEventListener('click', () => {
      alertDialog.style.opacity = 0;
    });
  }

  if (registerButton) {
    registerButton.addEventListener('click', () => {
      const formData = {
        firstName: document.getElementById('firstNameInput').value,
        lastName: document.getElementById('lastNameInput').value,
        clinickName: document.getElementById('clinickNameInput').value,
        email: document.getElementById('emailInput').value,
        password: document.getElementById('passwordInput').value,
        passwordConfirm: document.getElementById('passwordConfirmInput').value,
      };

      if (formData.password !== formData.passwordConfirm) {
        return null;
      }

      xhr({
        method: 'POST',
        url: 'register',
        data: formData,
      }, (err, result) => {
        if (err && alertDialog) {
          alertDialog.style.opacity = 1;
          return false;
        }

        if (result.success) {
          window.location.href = '/dashboard';
        }

        return true;
      });
    });
  }
})();
