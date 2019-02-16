const { List } = require('../../../lib/sequelize');

async function update(req, res, next) {
  try {
    const list = await List.find({
      where: {
        id: req.params.id,
      },
    });

    await list.update({
      name: req.body.name,
    });

    res.status(200).json({ message: 'List updated.' });
  } catch (err) {
    next(err);
  }
}

module.exports = update;
