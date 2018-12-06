const express = require('express');

const router = express.Router();

const { bundles } = require('../config/app.config');

router.get('/*', (req, res) => {
  res.render('register', {
    title: 'Register',
    jsBundle: bundles.register.js,
    cssBundle: bundles.register.css,
  });
});

module.exports = router;
