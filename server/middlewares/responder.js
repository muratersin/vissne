const createError = require('http-errors');

const responder = (req, res, next) => {
  const { jsonResponse } = req;

  if (!jsonResponse) {
    return next(createError(500, 'Somethings went wrong.'));
  }

  return res.status(200).json(jsonResponse);
};

module.exports = responder;
