const bcrypt = require('bcrypt');

const User = require('../../models/user');
const { saltRounds } = require('../../../config/app.config');
const { createJWToken } = require('../../../lib/auth');
const { trimStringFields } = require('../../../lib/helper/object');
const { Sequelize } = require('../../../lib/sequelize');

/**
 * @name registerController
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {function} next
 *
 * @description
 */
async function registerController(req, res, next) {
  try {
    const { body } = req;

    const existsUser = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{
          email: body.email,
        }, {
          userName: body.userName,
        }],
      },
    });

    if (existsUser) {
      const field = body.email === existsUser.email
        ? 'email'
        : 'user name';

      return res.status(400).json({
        message: `That ${field} is already taken.`,
      });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(body.password.trim(), salt);

    body.password = hash;

    const result = await User.create(trimStringFields(body));

    req.publicUserData = result.publicParse();

    req.token = createJWToken({
      sessionData: req.publicUserData,
      maxAge: 3600,
    });

    req.jsonResponse = {
      user: req.publicUserData,
      success: true,
    };

    return next();
  } catch ({ message }) {
    return res.status(400).json({
      message,
    });
  }
}

module.exports = registerController;

// TODO: add full data
// TODO: add doc
