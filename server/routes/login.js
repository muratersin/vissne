const express = require('express');

const login = require('../controllers/login');
const paramCheck = require('../middlewares/param-check');

const router = express.Router();

router.get('/*', login.pageController);

router.post('/*', [
  paramCheck(['email', 'password']),
  login.signinController,
  login.pageController,
]);

module.exports = router;
