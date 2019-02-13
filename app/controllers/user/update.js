
const { User } = require('../../../lib/sequelize');

const projectionData = body => ({
  email: body.email,
  firstName: body.firstName,
  lastName: body.lastName,
  userName: body.userName,
});

const updateUser = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const user = projectionData(req.body);

    if (id !== req.user.id) {
      return res.status(403).json({
        message: 'You can\'t update other accounts.',
      });
    }

    if (req.user.userName !== user.userName) {
      const existsUser = await User.findOne({
        where: {
          userName: user.userName,
        },
      });
      if (existsUser) {
        return res.status(400).json({
          message: 'Username is already in use.',
        });
      }
    }

    if (req.user.email !== user.email) {
      const existsUser = await User.findOne({
        where: {
          email: user.email,
        },
      });
      if (existsUser) {
        return res.status(400).json({
          message: 'Email is already in use.',
        });
      }
    }

    await User.update(user, {
      where: { id },
    });

    const updatedUser = await User.findOne({
      where: { id },
    });

    req.publicUserData = updatedUser.publicParse();
    req.jsonResponse = req.publicUserData;
    req.updatedUser = true;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = updateUser;
