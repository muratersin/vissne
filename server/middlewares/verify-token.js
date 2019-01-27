const { verifyToken } = require('../lib/auth');

const verifyTokenMiddleware = (req, res, next) => {
  verifyToken(req.cookies.jwt, (err, decodedToken) => {
    if (!err && decodedToken) {
      req.user = decodedToken.data; // TODO: Change this variable as isLoggedIn
      return next();
    }

    const contentType = req.get('content-type');
    const host = req.get('host');
    const { protocol } = req;

    if (contentType === 'application/json') {
      return res.status(403).json({
        message: 'Nout Authorized.',
      });
    }

    return res.redirect(`${protocol}://${host}/auth`);
  });
};

module.exports = verifyTokenMiddleware;
