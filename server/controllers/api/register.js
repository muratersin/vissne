const bcrypt = require('bcrypt');
const User = require('../../models/user.model');
const { saltRounds } = require('../../config/app.config');
const { createJWToken } = require('../../lib/auth');

async function registerController(req, res) {
  try {
    const { body } = req;

    const existsUser = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (existsUser) {
      return res.status(400).json({
        message: 'That email is already taken.',
      });
    }

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

    res.cookie('user_first_name', user.firstName, {
      maxAge: 900000,
    });

    res.cookie('user_last_name', user.lastName, {
      maxAge: 900000,
    });

    return res.status(200).json({
      user,
      success: true,
    });
  } catch ({ message }) {
    return res.status(400).json({
      message,
    });
  }
}

module.exports = registerController;

// TODO: add full data
// TODO: add doc
