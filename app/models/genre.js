
module.exports = (sequelize, type) => {
  const Genre = sequelize.define('genre', {
    name: {
      type: type.STRING(40),
      allowNull: false,
    },
  });

  Genre.sync({});

  return Genre;
};
