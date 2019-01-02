const express = require('express');


const controllers = require('../controllers');
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
  controllers.login,
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
  controllers.register,
  setCookie,
  responder,
]);

router.get('/movie/:movieId', [
  getCredits,
  getVideos,
  getImages,
  controllers.movie.getById,
]);
router.get('/discover', controllers.movie.discover);
router.get('/genre', controllers.movie.genre);

module.exports = router;
