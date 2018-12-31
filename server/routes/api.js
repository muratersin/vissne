const express = require('express');
const api = require('../controllers/api');

const {
  paramCheck,
  setCookie,
  responder,
  getCredits,
  getVideos,
  getImages,
} = commonGlobal.middlewares;

const router = express.Router();

router.post('/login', [
  paramCheck(['email', 'password']),
  api.login,
  setCookie,
  responder,
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
  setCookie,
  responder,
]);

router.get('/movie/:movieId', [
  getCredits,
  getVideos,
  getImages,
  api.movie.getById,
]);
router.get('/discover', api.movie.discover);
router.get('/genre', api.movie.genre);

module.exports = router;
