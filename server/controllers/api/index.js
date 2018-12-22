const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const movieGetById = require('./movie/get-by-id');

module.exports = {
  login,
  register,
  logout,
  movie: {
    getById: movieGetById,
  },
};
