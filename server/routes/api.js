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

router.get('/logout', api.logout);

router.get('/movie/:movieId', api.movie.getById);

module.exports = router;
