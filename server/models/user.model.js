const bcrypt = require('bcrypt');
const { Sequelize, sequelize } = require('../lib/sequelize');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
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

User.prototype.comparePassword = function comparePassword(password, callBack) {
  bcrypt.compare(password, this.password).then(callBack);
};

User.prototype.publicParse = function publicParse() {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    clinickName: this.clinickName,
    email: this.email,
  };
};

User.sync({ force: true });

module.exports = User;
