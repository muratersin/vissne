const createError = require('http-errors');

const responder = (req, res, next) => {
  const { jsonResponse, redirectUri } = req;

  if (!jsonResponse && !redirectUri) {
    return next(createError(500, 'Somethings went wrong.'));
  }

  if (req.redirectUri) {
    return res.redirect(redirectUri);
  }

  return res.status(200).json(jsonResponse);
};

module.exports = responder;
