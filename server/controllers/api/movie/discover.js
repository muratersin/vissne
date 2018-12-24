const request = require('request');
const { generateRouteDiscover } = require('../../../lib/route-generator');

const discover = (req, res, next) => {
  const url = generateRouteDiscover(req.query);

  request(url, { json: true }, (error, { body }) => {
    if (error) {
      return next(error);
    }

    return res.status(200).json(body);
  });
};

module.exports = discover;
