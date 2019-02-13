const { User } = require('../../lib/sequelize');
const { verifyToken } = require('../../lib/auth');

const verifyTokenMiddleware = (req, res, next) => {
  verifyToken(req.cookies.jwt, async (err, decodedToken) => {
    try {
      if (err || !decodedToken) {
        return res.status(403).json({
          message: 'Nout Authorized.',
        });
      }

      // req.isLoggedIn = true;
      // TODO: Change this variable as isLoggedIn
      const user = await User.findOne({
        where: decodedToken.data.id,
      });

      if (!user) {
        return res.status(403).json({
          message: 'Nout Authorized.',
        });
      }

      req.user = user.publicParse();
      next();
    } catch (error) {
      next(error);
    }
  });
};

module.exports = verifyTokenMiddleware;
