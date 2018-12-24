const express = require('express');

const api = require('../controllers/api');
const paramCheck = require('../middlewares/param-check');

const router = express.Router();

router.post('/login', [
  paramCheck(['email', 'password']),
  api.login,
]);

router.post('/register', [
  paramCheck([
    'email',
    'password',
    'confirmPassword',
    'firstName',
    'lastName',
  ]),
  api.register,
]);

router.get('/movie/:movieId', api.movie.getById);
router.get('/discover', api.movie.discover);

module.exports = router;
