const express = require('express');
const controllers = require('../controllers');

const {
  paramCheck,
  setCookie,
  responder,
  getCredits,
  getVideos,
  getImages,
  verifyToken,
} = commonGlobal.middlewares;

const router = express.Router();

router.post('/login', [
  paramCheck('login'),
  controllers.login,
  setCookie,
  responder,
]);

router.post('/register', [
  paramCheck('register'),
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

router.get('/profile', [
  verifyToken,
  controllers.profile.profile,
]);

module.exports = router;
