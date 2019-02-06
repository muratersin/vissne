const createError = require('http-errors');

const setCookie = (req, res, next) => {
  if (!req.token || !req.publicUserData) {
    return next(createError(500, 'Something went wrong'));
  }

  res.cookie('jwt', req.token, {
    maxAge: 900000,
    httpOnly: true,
  });

  res.cookie('id', req.publicUserData.id, {
    maxAge: 900000,
  });

  res.cookie('user_email', req.publicUserData.email, {
    maxAge: 900000,
    encode: c => c,
  });

  res.cookie('user_first_name', req.publicUserData.firstName, {
    maxAge: 900000,
    encode: c => c,
  });

  res.cookie('user_last_name', req.publicUserData.lastName, {
    maxAge: 900000,
    encode: c => c,
  });

  return next();
};

module.exports = setCookie;
