const express = require('express');

const router = express.Router();

const { bundles } = require('../config/app.config');
const verifyTokenMiddleware = require('../middlewares/verify-token-middleware');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Vissne',
    jsBundle: bundles.site.js,
    cssBundle: bundles.site.css,
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Vissne',
    jsBundle: bundles.site.js,
    cssBundle: bundles.site.css,
  });
});

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Vissne',
    jsBundle: bundles.site.js,
    cssBundle: bundles.site.css,
  });
});

router.get('/dashboard', [
  verifyTokenMiddleware,
  (req, res) => {
    res.render('dashboard', {
      title: 'Dashboard',
      jsBundle: bundles.dashboard.js,
      cssBundle: bundles.dashboard.css,
    });
  },
]);

module.exports = router;
