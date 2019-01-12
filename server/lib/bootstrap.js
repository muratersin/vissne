

const request = require('request');

const cache = require('../lib/cache');
const Genre = require('../models/genre');
const { genreRoute } = require('../lib/route-generator');

async function initGenreTable() {
  const genres = await Genre.findAll();

  if (genres && genres.length > 0) {
    cache.set('genres', genres);
  } else {
    request(genreRoute, { json: true }, (error, response) => {
      if (error) {
        throw error;
      }

      const { body } = response;

      cache.set('genres', body.genres);

      for (let i = 0; i < body.genres.length; i += 1) {
        const g = body.genres[i];
        Genre.create(g);
      }
    });
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
