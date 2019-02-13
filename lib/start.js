const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const passport = require('passport');
const nunjucks = require('nunjucks');
const cors = require('cors');

const config = require('../config/app.config');
const logger = require('./logger');
const routes = require('../config/routes.config');
const listResource = require('../app/controllers/lists/resource');
const {
  setLocalVariables,
  catchNotFoundError,
  handleError,
  routeMap,
  resource,
} = require('./helper/start');

require('../config/passport');

function init() {
  const app = express();

  nunjucks.configure(config.path.view, {
    autoescape: true,
    express: app,
  });

  if (config.env !== 'production') {
    app.use(logger.accessLogger);
  }

  app.use(cors());
  app.use(passport.initialize());
  app.use(favicon(config.path.favicon));
  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/static', express.static(config.path.public));

  // set map method to app object for route mapping
  app.map = routeMap.bind(app);
  app.resource = resource.bind(app);

  app.use(setLocalVariables);
  app.resource('/api/lists', listResource);
  app.map(routes);
  app.use(catchNotFoundError);
  app.use(handleError);

  return app;
}

module.exports.init = init;
