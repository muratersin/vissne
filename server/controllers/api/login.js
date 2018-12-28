const { createJWToken } = require('../../lib/auth');
const User = require('../../models/user.model');

async function signinController(req, res, next) {
  const { email, password } = req.body;
  const authError = {
    message: 'Invalid email or password.',
  };

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json(authError);
  }

  return user.comparePassword(password, (auth) => {
    if (!auth) {
      return res.status(400).json(authError);
    }

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
  });
}

module.exports = signinController;

// TODO: Add doc.
