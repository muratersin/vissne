const { List } = require('../../../lib/sequelize');

async function create(req, res, next) {
  try {
    const list = req.body;
    list.userId = req.user.id;

    await List.create(list);

    res.status(200).json({
      message: 'New list was created.',
    });
  } catch (err) {
    next(err);
  }
}

module.exports = create;
