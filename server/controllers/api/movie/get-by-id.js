const request = require('request');
const { generateRouteGetById } = require('../../../lib/route-generator');

const getById = (req, res, next) => {
  const { movieId } = req.params;

  const url = generateRouteGetById(movieId);

  request(url, (error, response) => {
    if (error) {
      return next(error);
    }
    const body = JSON.parse(response.body);
    return res.status(200).json(body);
  });
};

module.exports = getById;
