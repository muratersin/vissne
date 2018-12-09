const { verifyToken } = require('../lib/auth');

function verifyTokenMiddleware(req, res, next) {
  const token = req.method === 'POST'
    ? req.body.token
    : req.query.token;

  verifyToken(token, (err, decodedToken) => {
    if (err || !decodedToken) {
      return res.status(403).json({
        message: 'Invalid token',
      });
    }

    req.user = decodedToken.data;
    return next();
  });
}

module.exports = verifyTokenMiddleware;
