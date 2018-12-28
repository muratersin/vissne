const helpers = require('./helper');
const middlewares = require('../middlewares');
const models = require('../models');

const init = () => {
  const initializedApp = {};

  initializedApp.helpers = helpers;
  initializedApp.middlewares = middlewares;
  initializedApp.models = models;

  return initializedApp;
};

module.exports = init;
