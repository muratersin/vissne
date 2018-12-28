const request = require('request');
const { genreRoute } = require('../../../lib/route-generator');

const genres = (req, res, next) => {
  request(genreRoute, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    const { body } = response;

    return res.status(200).json(body || []);
  });
};

module.exports = genres;
