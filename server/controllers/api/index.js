const login = require('./login');
const register = require('./register');
const movieGetById = require('./movie/get-by-id');

module.exports = {
  login,
  register,
  movie: {
    getById: movieGetById,
  },
};
