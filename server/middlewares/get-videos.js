const request = require('request');
const { generateRouteGetVideos } = require('../lib/route-generator');

const getCredits = (req, res, next) => {
  const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).json({
      message: 'movieId param is required.',
    });
  }

  const url = generateRouteGetVideos(movieId);

  return request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    req.videos = response.body.results;

    return next();
  });
};

module.exports = getCredits;
