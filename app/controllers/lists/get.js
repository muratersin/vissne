const Sequelize = require('sequelize');

const { List, ListMovie } = require('../../../lib/sequelize');

async function get(req, res, next) {
  try {
    const { query, user } = req;

    const where = {};

    if (query.userId) {
      const userId = Number.parseInt(query.userId, 10);
      where.userId = userId;

      if (!user || (user.id !== userId)) {
        where.public = true;
      }
    } else {
      where.public = true;
    }

    const result = await List.findAndCountAll({
      where,
      raw: true,
      limit: query.limit,
      offset: (query.limit * (query.page - 1)),
      order: [
        ['createdAt', 'DESC'],
      ],
    });


    const promises = [];
    for (let i = 0; i < result.rows.length; i += 1) {
      const rowId = result.rows[i].id;

      promises[i] = ListMovie.count({
        where: {
          listId: rowId,
        },
      });
    }

    const counts = await Promise.all(promises);

    counts.forEach((c, i) => {
      result.rows[i].totalMovie = c;
    });

    if (query.movieId) {
      const listsOfMovie = await ListMovie.findAll({
        where: {
          movieId: query.movieId,
          listId: {
            [Sequelize.Op.or]: result.rows.map(l => l.id),
          },
        },
      });

      const listIds = listsOfMovie.map(lm => lm.listId);

      result.rows = result.rows.map((l) => {
        const list = l;

        list.isAdded = listIds.indexOf(list.id) > -1;

        return list;
      });
    }

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = get;
