const { List } = require('../../../lib/sequelize');

async function get(req, res, next) {
  try {
    const { query, user } = req;

    const where = {

    };

    const result = await List.findAndCountAll({
      raw: true,
      limit: query.limit,
      offset: (query.limit * query.page),
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = get;
