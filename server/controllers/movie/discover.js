const request = require('request');
const {
  generateRouteDiscover,
  generateSearchRoute,
  generateFilterRoute,
} = require('../../lib/route-generator');
const config = require('../../config/app.config');

const { string } = commonGlobal.helpers;

const discover = (req, res, next) => {
  let url = generateRouteDiscover(req.query);

  if (req.query.searchText) {
    url = generateSearchRoute(req.query);
  }

  if (req.query.filter) {
    url = generateFilterRoute(req.query);
  }

  request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    const { body } = response;

    body.results = body.results.map(m => ({
      id: m.id,
      poster: m.poster_path
        ? `${config.api.moviedb.images.secure_base_url}/w500/${m.poster_path}`
        : `${config.cdn}/${config.image.defaultCoverImagePath}`,
      title: m.title,
      voteAverage: m.vote_average,
      slug: string.slugify(m.title),
    }));

    return res.status(200).json(body || []);
  });
};

module.exports = discover;
