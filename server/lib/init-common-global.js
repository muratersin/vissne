const helpers = require('./helper');
const middlewares = require('../middlewares');

const init = () => {
  const initializedApp = {};

  initializedApp.helpers = helpers;
  initializedApp.middlewares = middlewares;

  return initializedApp;
};

module.exports = init;
