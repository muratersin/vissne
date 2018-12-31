const request = require('request');
const { generateRouteGetImages } = require('../lib/route-generator');

const getCredits = (req, res, next) => {
  const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).json({
      message: 'movieId param is required.',
    });
  }

  const url = generateRouteGetImages(movieId);

  return request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    req.images = response.body;

    return next();
  });
};

module.exports = getCredits;
