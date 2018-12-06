const express = require('express');

const router = express.Router();

const { bundles } = require('../config/app.config');

router.get('/*', (req, res) => {
  res.render('login', {
    title: 'Login',
    jsBundle: bundles.login.js,
    cssBundle: bundles.login.css,
  });
});

module.exports = router;
