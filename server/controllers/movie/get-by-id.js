const request = require('request');
const { generateRouteGetById } = require('../../lib/route-generator');
const config = require('../../config/app.config');

const getById = (req, res, next) => {
  const { movieId } = req.params;

  const url = generateRouteGetById(movieId);

  request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    const { body } = response;

    const posterPath = body.poster_path
      ? `${config.api.moviedb.images.secure_base_url}/w500/${body.poster_path}`
      : `${config.cdn}/${config.image.defaultCoverImagePath}`;

    const movie = {
      posterPath,
      credits: req.credits,
      director: req.credits.crew.filter(c => c.job === 'Director').map(d => d.name).join(', '),
      writer: req.credits.crew.filter(c => c.department === 'Writing').map(w => w.name).join(', '),
      images: req.images,
      videos: req.videos,
      orginalTitle: body.original_title,
      backdropPath: `${config.api.moviedb.images.secure_base_url}/original/${body.backdrop_path}`,
      year: body.release_date.substring(0, 4),
      genreNames: body.genres.map(g => g.name).join(', '),
      countries: body.production_countries.map(c => c.name).join(', '),
      language: body.spoken_languages.map(l => l.name).join(', '),
      ...body,
    };

    return res.status(200).json(movie || null);
  });
};

module.exports = getById;
