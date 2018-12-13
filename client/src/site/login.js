import xhr from '../lib/xhr';

(() => {
  const doc = window.document;

  const [alertDialog] = doc.getElementsByClassName('error-notification');

  if (alertDialog) {
    const closeButton = alertDialog.firstChild;

    closeButton.addEventListener('click', () => {
      alertDialog.style.opacity = 0;
    });
  }

  const loginButton = document.getElementById('loginButton');

  if (loginButton) {
    loginButton.addEventListener('click', () => {
      const formData = {
        email: document.getElementById('emailInput').value,
        password: document.getElementById('passwordInput').value,
      };

      if (!formData.email) {
        return null;
      }

      if (!formData.password) {
        return null;
      }

      xhr({
        method: 'POST',
        url: 'login',
        data: formData,
      }, (err, result) => {
        if (err && alertDialog) {
          alertDialog.style.opacity = 1;
        }

        if (result.success) {
          window.location.href = '/dashboard';
        }
      });
    });
  }
})();
