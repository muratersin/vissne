(() => {
  window.onload = () => {
    const pageLoading = document.getElementById('pageLoading');

    if (pageLoading) {
      pageLoading.remove();
    }
  };

  window.fbAsyncInit = () => {
    FB.init({
      appId: vissne.facebook.appId,
      cookie: true,
      xfbml: true,
      version: vissne.facebook.version,
    });
    FB.AppEvents.logPageView();
  };

  (function facebookInitialize(d, s, id) {
    let js = null;
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
})();
