const { verifyToken } = require('../lib/auth');

function verifyTokenMiddleware(req, res, next) {
  verifyToken(req.cookies.jwt, (err, decodedToken) => {
    if (err || !decodedToken) {
      return res.redirect('./login');
    }

    req.user = decodedToken.data;
    return next();
  });
}

module.exports = verifyTokenMiddleware;
