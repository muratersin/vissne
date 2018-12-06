const express = require('express');

const router = express.Router();

const { bundles } = require('../config/app.config');

router.get('/*', (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    jsBundle: bundles.dashboard.js,
    cssBundle: bundles.dashboard.css,
  });
});

module.exports = router;
