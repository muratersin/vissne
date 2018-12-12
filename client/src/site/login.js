import xhr from '../lib/xhr';

(() => {
  const doc = window.document;
  const loginButton = document.getElementById('loginButton');

  const [alertDialog] = doc.getElementsByClassName('failed-login');

  if (alertDialog) {
    const closeButton = alertDialog.firstChild;

    closeButton.addEventListener('click', () => {
      alertDialog.style.opacity = 0;
    });
  }

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
      if (err) {
        alert(err);
      }

      console.log(result);
    });
  });
})();
