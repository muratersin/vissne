const { Sequelize, sequelize } = require('../lib/sequelize');

const Comments = sequelize.define('comments', {
  title: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING(2),
    allowNull: false,
  },
  body: {
    type: Sequelize.STRING(3),
    allowNull: false,
  },
});

Comments.sync();

module.exports = Comments;
