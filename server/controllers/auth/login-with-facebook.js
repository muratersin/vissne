const request = require('request');
const { createJWToken } = require('../../lib/auth');

const User = commonGlobal.models.user;

const loginWithFacebook = (req, res, next) => {
  request.get({
    url: `https://graph.facebook.com/me?fields=email,name&access_token=${req.body.authResponse.accessToken}`,
    json: true,
  }, async (error, response, body) => {
    try {
      if (error) {
        throw error;
      }

      const siplittedName = body.name.split(' ');
      const lastName = siplittedName.pop();
      const firstName = siplittedName.join(' ');

      const [user] = await User.findOrCreate({
        where: {
          email: body.email,
        },
        defaults: {
          firstName,
          lastName,
          email: body.email,
          facebookId: body.id,
          provider: 'facebook',
        },
      });

      req.publicUserData = user.publicParse();
      req.token = createJWToken({
        sessionData: req.publicUserData,
        maxAge: 3600,
      });

      req.jsonResponse = {
        user: req.publicUserData,
        success: true,
      };

      return next();
    } catch (err) {
      next(err);
    }
  });
};

module.exports = loginWithFacebook;
