const request = require('request');
const { generateRouteDiscover, generateSearchRoute } = require('../../lib/route-generator');
const movieDbConfig = require('../../config/app.config').api.moviedb;

const { string } = commonGlobal.helpers;

const discover = (req, res, next) => {
  const url = !req.query.searchText
    ? generateRouteDiscover(req.query)
    : generateSearchRoute(req.query);

  request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    const { body } = response;

    body.results = body.results.map(m => ({
      id: m.id,
      poster: `${movieDbConfig.images.secure_base_url}/w500/${m.poster_path}`,
      title: m.title,
      voteAverage: m.vote_average,
      slug: string.slugify(m.title),
    }));

    return res.status(200).json(body || []);
  });
};

module.exports = discover;
