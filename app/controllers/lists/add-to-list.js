const axios = require('axios');

const { generateRouteGetById } = require('../../../lib/route-generator');
const config = require('../../../config/app.config');
const { ListMovie, Movie } = require('../../../lib/sequelize');

const addToList = async (req, res, next) => {
  try {
    const listId = Number.parseInt(req.params.id, 10);
    const movieId = Number.parseInt(req.params.movieId, 10);

    const movie = await Movie.findOne({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      const url = generateRouteGetById(movieId);
      const response = await axios.get(url);
      const { data } = response;

      const poster = data.poster_path
        ? `${config.api.moviedb.images.secure_base_url}/w500/${data.poster_path}`
        : `${config.cdn}/${config.image.defaultCoverImagePath}`;

      const newMovie = {
        poster,
        id: data.id,
        title: data.original_title,
        releaseDate: data.release_date,
        rating: data.vote_average,
      };

      await Movie.create(newMovie);
    }

    await ListMovie.create({
      listId,
      movieId,
    });

    res.status(200).json({ message: 'Movie added to list.' });
  } catch (err) {
    next(err);
  }
};

module.exports = addToList;
