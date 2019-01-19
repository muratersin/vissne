const { verifyToken } = require('../lib/auth');

const verifyTokenMiddleware = noRedirect => (req, res, next) => {
  verifyToken(req.cookies.jwt, (err, decodedToken) => {
    if (err || !decodedToken) {
      const { host } = req.headers;
      const { protocol } = req;

      if (noRedirect) {
        req.user = false;
        return next();
      }

      return res.redirect(`${protocol}://${host}/auth`);
    }

    req.user = decodedToken.data; // TODO: Change this variable as isLoggedIn
    return next();
  });
};

module.exports = verifyTokenMiddleware;
