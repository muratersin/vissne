(() => {
  const win = window;

  win.onload = () => {
    const pageLoading = document.getElementById('pageLoading');

    if (pageLoading) {
      pageLoading.remove();
    }
  };

  if ('serviceWorker' in navigator) {
    win.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
})();
