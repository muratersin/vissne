const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');

const config = require('./config/app.config');
const logger = require('./lib/logger');

const { accessLogger } = logger;

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const dashboardRouter = require('./routes/dashboard');

const app = express();

// view engine setup
app.set('views', config.viewPath);
app.set('view engine', config.viewEngine);

if (config.env !== 'production') {
  app.use(accessLogger);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.publicPath));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/dashboard', dashboardRouter);
app.use('/api', (req, res) => res.json({}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const { user, path } = req;
  const errorCode = 404;
  logger.error({
    path,
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
