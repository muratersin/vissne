const { verifyToken } = require('../lib/auth');

const verifyTokenMiddleware = (req, res, next) => {
  verifyToken(req.cookies.jwt, (err, decodedToken) => {
    if (err || !decodedToken) {
      const { host } = req.headers;
      const { protocol } = req;
      return res.redirect(`${protocol}://${host}/auth`);
    }

    req.user = decodedToken.data; // TODO: Change this variable as isLoggedIn
    return next();
  });
};

module.exports = verifyTokenMiddleware;
