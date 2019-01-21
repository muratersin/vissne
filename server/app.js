const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const favicon = require('serve-favicon');
const passport = require('passport');
const nunjucks = require('nunjucks');

const config = require('./config/app.config');
const logger = require('./lib/logger');
const initCommonGlobal = require('./lib/init-common-global');
require('./config/passport');

const { accessLogger } = logger;

const app = express();

global.commonGlobal = initCommonGlobal();

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app,
});

if (config.env !== 'production') {
  app.use(accessLogger);
}

app.use(passport.initialize());
app.use(favicon(config.faviconPath));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.publicPath));

app.use((req, res, next) => {
  res.locals.cdn = config.cdn;
  res.locals.domain = config.domain;
  res.locals.youtubeWatchUrl = config.youtubeWatchUrl;
  res.locals.imagesSecureBaseUrl = config.api.moviedb.images.secure_base_url;
  res.locals.env = config.env;
  next();
});

app.use('/api', apiRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const { user, path, method } = req;
  const errorCode = 404;
  logger.error({
    path,
    method,
    errorCode,
    user: user || null,
  }, 'Page not found.');
  res.render('404.html', {
    title: '404 Not Found',
  });
});

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
