const { createJWToken } = require('../../../lib/auth');
const { User } = require('../../../lib/sequelize');

async function signinController(req, res, next) {
  try {
    const { email, password } = req.body;
    const authError = {
      message: 'Invalid email or password.',
    };

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json(authError);
    }

    const auth = await user.comparePassword(password);

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
  } catch (err) {
    next(err);
  }
}

module.exports = signinController;
