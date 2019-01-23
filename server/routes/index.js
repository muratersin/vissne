
const express = require('express');
const passport = require('passport');

const router = express.Router();
const { image } = require('../config/app.config');

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

router.get('/*', (req, res) => {
  res.render('index.html', {
    image,
    title: 'Vissne',
  });
});

module.exports = router;
