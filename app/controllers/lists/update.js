const { List } = require('../../../lib/sequelize');

function update(req, res, next) {
  const public = req.user && req.user.id;
  res.send('ok');
}

module.exports = update;
