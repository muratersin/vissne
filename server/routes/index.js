const express = require('express');

const router = express.Router();

const { bundles, publ } = require('../config/app.config');
const verifyTokenMiddleware = require('../middlewares/verify-token-middleware');

router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.clearCookie('user_email');
  res.clearCookie('user_full_name');
  res.redirect('/');
});

router.get('/*', (req, res) => {
  res.render('index', {
    title: 'Vissne',
    jsBundle: bundles.app.js,
    cssBundle: bundles.app.css,
  });
});

// router.get('/dashboard', [
//   verifyTokenMiddleware,
//   (req, res) => {
//     res.render('dashboard', {
//       title: 'Dashboard',
//       jsBundle: bundles.dashboard.js,
//       cssBundle: bundles.dashboard.css,
//     });
//   },
// ]);

module.exports = router;
