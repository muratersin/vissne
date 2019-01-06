const { Sequelize, sequelize } = require('../lib/sequelize');

const Genre = sequelize.define('genre', {
  name: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
});

Genre.sync({});

module.exports = Genre;
