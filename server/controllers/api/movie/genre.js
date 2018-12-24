const request = require('request');
const { genreRoute } = require('../../../lib/route-generator');

const genres = (req, res, next) => {
  request(genreRoute, { json: true }, (error, { body }) => {
    if (error) {
      return next(error);
    }

    return res.status(200).json(body.genres);
  });
};

module.exports = genres;
