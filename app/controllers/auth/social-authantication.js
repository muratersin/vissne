const passport = require('passport');

const socialAuthantication = provider => (req, res, next) => {
  passport.authenticate(provider, {
    session: false,
    failureRedirect: '/login',
  }, (err, user) => {
    if (!err && user) {
      req.user = user;
      return next();
    }

    let { message } = err.message;

    if (err.fields.email) {
      message = 'This email already taken.';
    }

    res.cookie('errorMessage', message, {
      maxAge: 10000,
      encode: c => c,
    });

    return res.redirect('/auth');
  })(req, res, next);
};

module.exports = socialAuthantication;
