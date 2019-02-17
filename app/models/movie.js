
module.exports = (sequelize, type) => {
  const Movie = sequelize.define('movie', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {
      type: type.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: type.DATE,
      allowNull: false,
    },
    poster: {
      type: type.STRING,
      allowNull: false,
    },
    rating: {
      type: type.FLOAT,
      allowNull: false,
    },
  });

  return Movie;
};
