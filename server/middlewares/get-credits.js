const request = require('request');
const { generateRouteGetCredits } = require('../lib/route-generator');

const getCredits = (req, res, next) => {
  const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).json({
      message: 'movieId param is required.',
    });
  }

  const url = generateRouteGetCredits(movieId);

  return request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    req.credits = response.body;

    return next();
  });
};

module.exports = getCredits;
