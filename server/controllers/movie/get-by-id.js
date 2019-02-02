const axios = require('axios');
const { generateRouteGetById } = require('../../lib/route-generator');
const config = require('../../config/app.config');

const getById = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const url = generateRouteGetById(movieId);
    const response = await axios.get(url);
    const { data } = response;

    const posterPath = data.poster_path
      ? `${config.api.moviedb.images.secure_base_url}/w500/${data.poster_path}`
      : `${config.cdn}/${config.image.defaultCoverImagePath}`;

    const movie = {
      posterPath,
      credits: req.credits,
      director: req.credits.crew.filter(c => c.job === 'Director').map(d => d.name).join(', '),
      writer: req.credits.crew.filter(c => c.department === 'Writing').map(w => w.name).join(', '),
      images: req.images,
      videos: req.videos,
      orginalTitle: data.original_title,
      backdropPath: `${config.api.moviedb.images.secure_base_url}/original/${data.backdrop_path}`,
      year: data.release_date.substring(0, 4),
      genreNames: data.genres.map(g => g.name).join(', '),
      countries: data.production_countries.map(c => c.name).join(', '),
      language: data.spoken_languages.map(l => l.name).join(', '),
      ...data,
    };

    res.status(200).json(movie || null);
  } catch (err) {
    next(err);
  }
};

module.exports = getById;
