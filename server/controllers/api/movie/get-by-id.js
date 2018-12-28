const request = require('request');
const { generateRouteGetById } = require('../../../lib/route-generator');

const getById = (req, res, next) => {
  const { movieId } = req.params;

  const url = generateRouteGetById(movieId);

  request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    const { body } = response;

    return res.status(200).json(body || null);
  });
};

module.exports = getById;
