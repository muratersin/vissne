const { Sequelize, sequelize } = require('../lib/sequelize');
const User = require('./user');

const Comment = sequelize.define('comment', {
  title: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  movieId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

Comment.hasOne(User, {
  as: 'User',
  foreignKey: 'userId',
});

Comment.sync({});

module.exports = Comment;
