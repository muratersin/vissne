const { List } = require('../../../lib/sequelize');

async function create(req, res, next) {
  try {
    const list = req.body;
    list.user = req.user;

    await List.create(list);

    res.status(200).json({
      message: 'New list was created.',
    });
  } catch (err) {
    next(err);
  }
}

module.exports = create;
