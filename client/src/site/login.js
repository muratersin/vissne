import xhr from '../lib/xhr';

(() => {
  const doc = window.document;

  const [alertDialog] = doc.getElementsByClassName('alert');

  if (alertDialog) {
    const closeButton = document.getElementById('closeButton');

    closeButton.addEventListener('click', () => {
      alertDialog.className = alertDialog.className.replace(' show', '');
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

      return xhr({
        method: 'POST',
        url: 'login',
        data: formData,
      }, (err, result) => {
        if ((err && alertDialog) || !result.success) {
          alertDialog.className += ' show';
        } else {
          window.location.href = '/dashboard';
        }

        return null;
      });
    });
  }
})();
