const { verifyToken } = require('../lib/auth');

const verifyTokenMiddleware = (req, res, next) => {
  verifyToken(req.cookies.jwt, (err, decodedToken) => {
    if (err || !decodedToken) {
      return res.status(403).json({
        message: 'Nout Authorized.',
      });
    }

    req.user = decodedToken.data; // TODO: Change this variable as isLoggedIn
    return next();
  });
};

module.exports = verifyTokenMiddleware;
