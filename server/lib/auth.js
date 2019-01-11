const jwt = require('jsonwebtoken');
const config = require('../config/app.config');

function verifyToken(token, callback) {
  jwt.verify(token, config.jwtSecret, callback);
}

function createJWToken(ops = {}) {
  const options = ops;
  options.sessionData = options.sessionData || {};
  if (!options.maxAge || typeof options.maxAge !== 'number') {
    options.maxAge = 3600;
  }

  const token = jwt.sign({
    data: options.sessionData,
  }, config.jwtSecret, {
    expiresIn: options.maxAge,
    algorithm: 'HS256',
  });

  return token;
}

module.exports.verifyToken = verifyToken;
module.exports.createJWToken = createJWToken;
