

const axios = require('axios');

const cache = require('../lib/cache');
const { Genre } = require('../lib/sequelize');
const { genreRoute } = require('../lib/route-generator');

async function initGenreTable() {
  try {
    const genres = await Genre.findAll();

    if (genres && genres.length > 0) {
      cache.set('genres', genres);
      return;
    }

    const response = await axios(genreRoute);
    const { data } = response;

    cache.set('genres', data.genres);

    for (let i = 0; i < data.genres.length; i += 1) {
      const g = data.genres[i];
      Genre.create(g);
    }
  } catch (err) {
    throw err;
  }
}

function bootstrap() {
  initGenreTable();

  for (let i = 2; i < process.argv.length; i += 1) {
    switch (process.argv[i]) {
      case 'dbseed':
        break;

      default:
        console.log('no args');
        break;
    }
  }
}

module.exports = bootstrap;
