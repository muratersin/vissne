const { User } = require('../../lib/sequelize');
const { verifyToken } = require('../../lib/auth');

const verifyTokenMiddleware = passAuthError => (req, res, next) => {
  verifyToken(req.cookies.jwt, async (err, decodedToken) => {
    try {
      if (err || !decodedToken) {
        if (!passAuthError) {
          return next();
        }

        return res.status(403).json({
          message: 'Nout Authorized.',
        });
      }

      const user = await User.findOne({
        where: decodedToken.data.id,
      });

      if (!user) {
        if (!passAuthError) {
          return next();
        }

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
