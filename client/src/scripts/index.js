(() => {
  const win = window;

  win.onload = () => {
    const pageLoading = document.getElementById('pageLoading');

    if (pageLoading) {
      pageLoading.remove();
    }
  };

  // if (vissne.env === 'production') {
  //   if ('serviceWorker' in navigator) {
  //     win.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
  //   }
  // }
})();
