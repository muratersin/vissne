const request = require('request');
const { generateRouteDiscover } = require('../../../lib/route-generator');

const discover = (req, res, next) => {
  const { page, sort } = req.query;
  const url = generateRouteDiscover(page, sort);

  request(url, (error, response) => {
    if (error) {
      return next(error);
    }

    const body = JSON.parse(response.body);
    return res.status(200).json(body);
  });
};

module.exports = discover;
