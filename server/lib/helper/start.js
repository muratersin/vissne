const config = require('../../config/app.config');
const logger = require('../logger');

function setLocalVariables(req, res, next) {
  res.locals.cdn = config.cdn;
  res.locals.domain = config.domain;
  res.locals.youtubeWatchUrl = config.youtubeWatchUrl;
  res.locals.imagesSecureBaseUrl = config.api.moviedb.images.secure_base_url;
  res.locals.env = config.env;
  next();
}

function catchNotFoundError(req, res) {
  const { user, path, method } = req;
  const message = 'Page not found';
  const errorCode = 404;
  logger.error({
    path,
    method,
    errorCode,
    user: user || null,
  }, 'Page not found.');
  res.status(errorCode).json({ message });
}

function handleError(err, req, res) {
  res.status(err.status || 500).json({
    message: err.message,
  });
}

function routeMap(a, route = '') {
  const keys = Object.keys(a);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    const typeOf = Array.isArray(a[key])
      ? 'array'
      : typeof a[key];

    switch (typeOf) {
      case 'object':
        this.map(a[key], route + key);
        break;

      case 'array':
      case 'function':
        this[key](route, a[key]);
        break;

      default: break;
    }
  }
}

module.exports = {
  setLocalVariables,
  catchNotFoundError,
  handleError,
  routeMap,
};
