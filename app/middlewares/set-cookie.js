const createError = require('http-errors');

const setCookie = (req, res, next) => {
  if ((!req.token && !req.updatedUser) || !req.publicUserData) {
    return next(createError(500, 'Something went wrong'));
  }

  const conf = {
    maxAge: 900000,
    encode: c => c,
  };

  // may request come from user update middleware
  if (!req.updatedUser) {
    res.cookie('jwt', req.token, {
      maxAge: 900000,
      httpOnly: true,
    });
  }

  res.cookie('user_id', req.publicUserData.id, conf);

  res.cookie('username', req.publicUserData.userName, conf);

  res.cookie('user_email', req.publicUserData.email, conf);

  res.cookie('user_first_name', req.publicUserData.firstName, conf);

  res.cookie('user_last_name', req.publicUserData.lastName, conf);

  return next();
};

module.exports = setCookie;
