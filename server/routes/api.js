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

router.post('/auth/facebook', [
  controllers.auth.loginWithFacebook,
  setCookie,
  responder,
]);

router.post('/login', [
  paramCheck('login'),
  controllers.auth.login,
  setCookie,
  responder,
]);

router.post('/register', [
  paramCheck('register'),
  controllers.auth.register,
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
  controllers.profile.getCurrentUser,
]);

module.exports = router;
