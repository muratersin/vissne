const request = require('request');
const { generateRouteDiscover } = require('../../../lib/route-generator');

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
      poster: m.poster_path,
      title: string.truncate(m.title, 14),
      voteAverage: m.vote_average,
    }));

    return res.status(200).json(body || []);
  });
};

module.exports = discover;
