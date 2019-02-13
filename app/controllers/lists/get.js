const { List } = require('../../../lib/sequelize');

function get(req, res, next) {
  const public = req.user && req.user.id;
  res.status(200).json([]);
}

module.exports = get;
