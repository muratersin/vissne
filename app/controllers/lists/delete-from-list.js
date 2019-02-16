const { ListMovie } = require('../../../lib/sequelize');

const removeFromList = async (req, res, next) => {
  try {
    const listId = req.params.id;
    const movieId = req.body.id;

    ListMovie.create({
      listId,
      movieId,
    })
  } catch(err) {
    next(err);
  }
};
