const bcrypt = require('bcrypt');

const { cdn } = require('../../config/app.config');

module.exports = (sequelize, type) => {
  const User = sequelize.define('user', {
    firstName: {
      type: type.STRING(40),
      allowNull: false,
    },
    lastName: {
      type: type.STRING(40),
      allowNull: false,
    },
    userName: {
      type: type.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: type.STRING(40),
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    googleId: {
      type: type.STRING(50),
      allowNull: true,
      unique: true,
    },
    facebookId: {
      type: type.STRING(50),
      allowNull: true,
      unique: true,
    },
    password: {
      type: type.STRING,
      allowNull: true,
    },
    provider: {
      type: type.ENUM(
        'local',
        'google',
        'facebook',
      ),
      defaultValue: 'local',
      allowNull: false,
    },
    avatar: {
      type: type.STRING,
      defaultValue: `${cdn}/images/default-profile.jpg`,
      allowNull: false,
    },
  });

  User.prototype.comparePassword = function comparePassword(password) {
    return bcrypt.compare(password, this.password);
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

  // User.sync({ force: true });

  return User;
};
