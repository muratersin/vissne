const express = require('express');

const router = express.Router();
const register = require('../controllers/register');

router.get('/*', register.registerPageController);
router.post('/*', [
  register.registerController,
  register.registerPageController,
]);

module.exports = router;
