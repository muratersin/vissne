const express = require('express');

const router = express.Router();

const { bundles } = require('../config/app.config');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Vissne',
    jsBundle: bundles.site.js,
    cssBundle: bundles.site.css,
  });
});

module.exports = router;
