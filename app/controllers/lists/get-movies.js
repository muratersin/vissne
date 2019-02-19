const { ListMovie, Movie } = require('../../../lib/sequelize');

const getMovies = async (req, res, next) => {
  try {
    const listId = req.params.id;
    const { page, limit } = req.query;

    const listMovies = await ListMovie.findAndCountAll({
      where: { listId },
      raw: true,
      limit,
      offset: (limit * (page - 1)),
      order: [
        ['createdAt', 'DESC'],
      ],
    });

    const movieIds = listMovies.rows.map(lm => lm.movieId);
    const movies = await Movie.findAll({
      where: {
        id: movieIds,
      },
    });

    res.status(200).json({
      rows: movies,
      count: listMovies.count,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getMovies;
