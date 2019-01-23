const express = require('express');
const passport = require('passport');
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

router.get('/auth/facebook/callback', [
  passport.authenticate('facebook', {
    session: false,
    failureRedirect: '/login',
  }),
  controllers.auth.loginWithSocialMedia,
  setCookie,
  responder,
]);

router.get('/auth/google/callback', [
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/login',
  }),
  controllers.auth.loginWithSocialMedia,
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

router.get('/account', [
  verifyToken,
  controllers.account.getUserAccount,
]);

module.exports = router;
