const express = require('express');

const router = express.Router();

const { bundles } = require('../config/app.config');

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

module.exports = router;
