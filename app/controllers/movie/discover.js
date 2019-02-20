const axios = require('axios');

const config = require('../../../config/app.config');
const string = require('../../../lib/helper/string');
const {
  generateRouteDiscover,
  generateSearchRoute,
  generateFilterRoute,
} = require('../../../lib/route-generator');

const discover = async (req, res, next) => {
  try {
    let url = generateRouteDiscover(req.query);

    if (req.query.searchText) {
      url = generateSearchRoute(req.query);
    }

    if (req.query.filter) {
      url = generateFilterRoute(req.query);
    }

    const response = await axios.get(url);
    const { data } = response;

    data.results = data.results.map(m => ({
      id: m.id,
      poster: m.poster_path
        ? `${config.api.moviedb.images.secure_base_url}/w500/${m.poster_path}`
        : `${config.cdn}/${config.image.defaultCoverImagePath}`,
      title: m.title,
      voteAverage: m.vote_average,
      slug: string.slugify(m.title),
    }));

    res.status(200).json(data || []);
  } catch (err) {
    next(err);
  }
};

module.exports = discover;
