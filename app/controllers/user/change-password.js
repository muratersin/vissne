const bcrypt = require('bcrypt');

const { User } = require('../../../lib/sequelize');
const { saltRounds } = require('../../../config/app.config');
const { trimStringFields } = require('../../../lib/helper/object');

const changePassword = async (req, res, next) => {
  try {
    const passwordForm = trimStringFields(req.body);

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      return res.status(400).json({
        message: 'Passwords are does not match.',
      });
    }

    const user = await User.findById(req.user.id);
    const salt = await bcrypt.genSalt(saltRounds);
    const password = await bcrypt.hash(passwordForm.newPassword.trim(), salt);
    const auth = await user.comparePassword(passwordForm.oldPassword);

    if (!auth) {
      return res.status(400).json({
        message: 'Invalid password',
      });
    }

    if (user.password === password) {
      return res.status(400).json({
        message: 'Password cannot be the same with old password.',
      });
    }

    await User.update({ password }, {
      where: {
        id: user.id,
      },
    });

    res.status(200).json({
      message: 'Password changed successfully.',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = changePassword;
