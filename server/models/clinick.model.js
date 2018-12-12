const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../lib/sequelize');

const Clinick = sequelize.define('clinick', {
  clinickName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Clinick.prototype.comparePassword = function comparePassword(password, callBack) {
  bcrypt.compare(password, this.password).then(callBack);
};

Clinick.prototype.publicParse = function publicParse() {
  return {
    clinickName: this.clinickName,
    email: this.email,
  };
};


// Clinick.sync({ force: true });

module.exports = Clinick;
