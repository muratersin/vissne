const bcrypt = require('bcrypt');
const User = require('../../models/user.model');
const { saltRounds } = require('../../config/app.config');
const { createJWToken } = require('../../lib/auth');

async function registerController(req, res, next) {
  try {
    const { body } = req;

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(body.password, salt);

    body.password = hash;

    const result = await User.create(body);
    const user = result.publicParse();
    const token = createJWToken({
      sessionData: user,
      maxAge: 3600,
    });

    res.cookie('jwt', token, {
      maxAge: 900000,
      httpOnly: true,
    });

    res.cookie('user_email', user.email, {
      maxAge: 900000,
    });

    res.cookie('user_full_name', user.fullName, {
      maxAge: 900000,
    });

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    req.registerError = err;
    next(err);
  }
}

module.exports = registerController;

// TODO: add full data
// TODO: add doc
