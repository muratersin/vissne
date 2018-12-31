const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');

const config = require('./config/app.config');
const logger = require('./lib/logger');
const initCommonGlobal = require('./lib/init-common-global');

const { accessLogger } = logger;

const app = express();

global.commonGlobal = initCommonGlobal();

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

// view engine setup
app.set('views', config.viewPath);
app.set('view engine', config.viewEngine);

if (config.env !== 'production') {
  app.use(accessLogger);
}

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.publicPath));

// Set default queries
app.use((req, res, next) => {
  req.query.page = req.query.page || 1;
  res.locals.cdn = config.cdn;
  res.locals.domain = config.domain;
  res.locals.youtubeWatchUrl = config.youtubeWatchUrl;
  res.locals.imagesSecureBaseUrl = config.api.moviedb.images.secure_base_url;
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
  next(createError(errorCode));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
