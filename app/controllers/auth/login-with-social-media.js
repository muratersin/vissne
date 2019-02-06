const { createJWToken } = require('../../../lib/auth');

const loginWithSocialMedia = (req, res, next) => {
  req.publicUserData = req.user.publicParse();
  req.token = createJWToken({
    sessionData: req.publicUserData,
    maxAge: 3600,
  });

  req.redirectUri = '/';

  return next();
};

module.exports = loginWithSocialMedia;
