import 'jquery';
import 'popper.js';
import 'bootstrap';

(() => {
  window.onload = () => {
    const pageLoading = document.getElementById('pageLoading');

    if (pageLoading) {
      pageLoading.remove();
    }
  };
})();
