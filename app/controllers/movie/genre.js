const cache = require('../../../lib/cache');
const { Genre } = require('../../../lib/sequelize');

const genre = async (req, res, next) => {
  try {
    const cachedGenred = cache.get('genres');

    if (cachedGenred) {
      return res.status(200).json(cachedGenred);
    }

    const genres = await Genre.findAll({
      attributes: ['id', 'name'],
    });

    cache.set('genres', genres);

    return res.status(200).json(genres);
  } catch (err) {
    return next(err);
  }
};

module.exports = genre;
