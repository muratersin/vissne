const request = require('request');
const { generateRouteDiscover } = require('../../../lib/route-generator');
const movieDbConfig = require('../../../config/app.config').api.moviedb;

const { string } = commonGlobal.helpers;

const discover = (req, res, next) => {
  const url = generateRouteDiscover(req.query);

  request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    const { body } = response;

    body.results = body.results.map(m => ({
      id: m.id,
      poster: `${movieDbConfig.images.secure_base_url}/w342/${m.poster_path}`, // http://image.tmdb.org/t/p/w342/
      title: string.truncate(m.title, 14),
      voteAverage: m.vote_average,
      slug: string.slugify(m.title),
    }));

    return res.status(200).json(body || []);
  });
};

module.exports = discover;
