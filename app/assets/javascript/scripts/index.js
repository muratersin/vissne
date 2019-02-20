import yall from 'yall-js';

(() => {
  const win = window;

  document.addEventListener('DOMContentLoaded', () => {
    yall({
      observeChanges: true,
    });
  });

  win.onload = () => {
    const pageLoading = document.getElementById('pageLoading');

    if (pageLoading) {
      pageLoading.remove();
    }

    if (vissne.env === 'production') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
      }
    }
  };
})();
