const express = require('express');

const router = express.Router();
const login = require('../controllers/login');

router.get('/*', login.pageController);

router.post('/*', [
  login.signinController,
  login.pageController,
]);

module.exports = router;
