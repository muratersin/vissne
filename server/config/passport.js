const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./app.config');
const User = require('../models/user');

const strategyCallback = (accessToken, refreshToken, profile, callback) => {
  const splittedName = profile.displayName.split(' ');
  const lastName = splittedName.pop();
  const firstName = splittedName.join(' ');
  const email = profile.emails[0].value;
  const { provider } = profile;
  let avatar = null;
  let userName = null;

  if (provider === 'google') {
    avatar = profile.photos[0].value.replace('sz=50', 'sz=200'); // change default profile image size
    userName = `g-${profile.id}`;
  } else if (provider === 'facebook') {
    avatar = profile.photos[0].value;
    userName = `f-${profile.id}`;
  } else {
    throw new Error('Unknown provider.');
  }

  const where = {
    email,
    provider,
  };
  const defaults = {
    userName,
    firstName,
    lastName,
    email,
    avatar,
    provider,
    [`${provider}Id`]: profile.id,
  };

  User.findOrCreate({ where, defaults })
    .spread(user => callback(null, user))
    .catch(err => callback(err));
};

const googleStrategy = new GoogleStrategy({
  clientID: config.google.clientId,
  clientSecret: config.google.clientSecret,
  callbackURL: `${config.domain}/api/auth/google/callback`,
}, strategyCallback);

const facebookStrategy = new FacebookStrategy({
  clientID: config.facebook.appId,
  clientSecret: config.facebook.secret,
  callbackURL: `${config.domain}/api/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'photos', 'email'],
}, strategyCallback);

passport.use(googleStrategy);
passport.use(facebookStrategy);
