const path = require('path');
const bunyan = require('bunyan');

const config = require('../config/app.config');

const logger = bunyan.createLogger({
  name: config.name,
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'error',
      type: 'rotating-file',
      path: path.join(__dirname, '../var/tmp/error.log'),
      period: '1m',
      count: 3,
    },
    {
      level: 'fatal',
      type: 'rotating-file',
      path: path.join(__dirname, '../var/tmp/fatal.log'),
      period: '1y',
      count: 3,
    },
  ],
});

delete logger.fields.name;
delete logger.fields.pid;
delete logger.fields.v;

const accessLogger = (req, res, next) => {
  logger.info({
    method: req.method,
    path: req.path,
    user: req.user,
  });
  next();
};

module.exports = logger;
module.exports.accessLogger = accessLogger;
