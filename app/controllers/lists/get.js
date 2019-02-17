const Sequelize = require('sequelize');

const { List, ListMovie, Movie } = require('../../../lib/sequelize');

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

    result.row = result.row.map(async (row) => {
      const rowMovies = await ListMovie.findAndCountAll({
        where: {
          listId: row.id,
        },
      });

      const movies = rowMovies;
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
