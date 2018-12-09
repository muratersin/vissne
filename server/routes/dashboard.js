const express = require('express');

const verifyTokenMiddleware = require('../middlewares/verify-token-middleware');
const { bundles } = require('../config/app.config');

const router = express.Router();

router.all('*', verifyTokenMiddleware);

router.get('/*', (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    jsBundle: bundles.dashboard.js,
    cssBundle: bundles.dashboard.css,
  });
});

module.exports = router;
