const { Sequelize, sequelize } = require('../lib/sequelize');

const City = sequelize.define('city', {
  cityName: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  plateNumber: {
    type: Sequelize.STRING(2),
    allowNull: false,
  },
  phoneCode: {
    type: Sequelize.STRING(3),
    allowNull: false,
  },
});

City.sync();

module.exports = City;
