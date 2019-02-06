const bcrypt = require('bcrypt');

const { Sequelize, sequelize } = require('../../lib/sequelize');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING(40),
    allowNull: false,
    unique: true,
    isEmail: true,
  },
  googleId: {
    type: Sequelize.STRING(50),
    allowNull: true,
    unique: true,
  },
  facebookId: {
    type: Sequelize.STRING(50),
    allowNull: true,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  provider: {
    type: Sequelize.ENUM(
      'local',
      'google',
      'facebook',
    ),
    defaultValue: 'local',
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue: 'default-avatar.jpg',
    allowNull: false,
  },
});

User.prototype.comparePassword = function comparePassword(password, callBack) {
  bcrypt.compare(password, this.password).then(callBack);
};

User.prototype.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.publicParse = function publicParse() {
  const createdAt = new Date(this.createdAt);

  return {
    id: this.id,
    userName: this.userName,
    firstName: this.firstName,
    lastName: this.lastName,
    fullName: `${this.firstName} ${this.lastName}`,
    email: this.email,
    provider: this.provider,
    avatar: this.avatar,
    createdAt: `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getUTCFullYear()}`,
  };
};

User.sync({ force: true });

module.exports = User;
