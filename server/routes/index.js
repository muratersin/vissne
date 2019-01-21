const express = require('express');
const passport = require('passport');

const router = express.Router();
const notFound = require('../middlewares/not-found');
const { image } = require('../config/app.config');

const {
  verifyToken,
} = commonGlobal.middlewares;

router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.clearCookie('user_id');
  res.clearCookie('user_email');
  res.clearCookie('user_full_name');
  res.redirect('/');
});

router.get('/auth/google', passport.authenticate('google', {
  scope: [
    'profile',
    'email',
  ],
}));

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth', verifyToken(true), (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }

  return res.render('auth.html', {
    title: 'Vissne - Login',
  });
});

router.get('/auth/*', notFound);
router.get('/page-not-found', notFound);

router.get('/*', (req, res) => {
  res.render('index.html', {
    image,
    title: 'Vissne',
  });
});

module.exports = router;
