const { ListMovie } = require('../../../lib/sequelize');

const removeFromList = async (req, res, next) => {
  try {
    const listId = Number.parseInt(req.params.id, 10);
    const movieId = Number.parseInt(req.params.movieId, 10);

    await ListMovie.destroy({
      where: {
        listId,
        movieId,
      },
    });

    res.status(200).json({
      message: 'Movie deleted from list.',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = removeFromList;
