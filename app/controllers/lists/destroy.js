const { List } = require('../../../lib/sequelize');

async function destroy(req, res, next) {
  try {
    const { id } = req.params;

    const result = await List.destroy({
      where: {
        id,
      },
    });

    if (result === 1) {
      return res.status(200).json({
        message: 'List deleted.',
      });
    }

    return res.status(400).json({
      message: 'List Can\' be deleted',
    });
  } catch (err) {
    next(err);
  }
}

module.exports = destroy;
