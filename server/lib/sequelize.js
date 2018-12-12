const Sequelize = require('sequelize');
const logger = require('../lib/logger');
const {
  dbName,
  userName,
  password,
  host,
} = require('../config/pg.config');

const sequelize = new Sequelize(dbName, userName, password, {
  host,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
});

sequelize.authenticate()
  .then(() => logger.info('Connection has been established successfully.'))
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });

module.exports = sequelize;
