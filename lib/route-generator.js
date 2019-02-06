const querystring = require('querystring');

const { api } = require('../config/app.config');
const string = require('./helper/string');

const {
  protocol,
  version,
  url,
  lang,
  key,
} = api.moviedb;

function convertQueryKeys(query) {
  const qs = {};
  Object.keys(query).forEach((queryName) => {
    qs[string.fromCamelCase(queryName, '_')] = query[queryName];
  });
  return qs;
}

const baseUrl = `${protocol}://${url}/${version}`;
const baseQueryString = `?api_key=${key}&language=${lang}&include_adult=false`;

const config = `${baseUrl}/config${baseQueryString}`;
const genreRoute = `${baseUrl}/genre/movie/list${baseQueryString}`;

const generateRouteGetById = (movieId, type = false) => `
  ${baseUrl}/movie/${movieId}${type ? `/${type}` : ''}${baseQueryString}
`;

const generateRouteGetCredits = movieId => `${baseUrl}/movie/${movieId}/credits${baseQueryString}`;
const generateRouteGetVideos = movieId => `${baseUrl}/movie/${movieId}/videos${baseQueryString}`;
const generateRouteGetImages = movieId => `${baseUrl}/movie/${movieId}/images${baseQueryString}`;
const generateRouteDiscover = disoverQuery => `
  ${baseUrl}/discover/movie${baseQueryString}&${querystring.stringify(convertQueryKeys(disoverQuery))}
`;

const generateSearchRoute = (q) => {
  const discoverQuery = q;
  const query = discoverQuery.searchText;
  delete discoverQuery.searchText;
  return `${baseUrl}/search/movie${baseQueryString}&query=${query}&${querystring.stringify(convertQueryKeys(discoverQuery))}`;
};

const generateFilterRoute = (query) => {
  const filter = query.filter === 'coming-soon'
    ? 'upcoming'
    : 'now_playing';
  return `${baseUrl}/movie/${filter}${baseQueryString}&page=${query.page || 1}`;
};

module.exports = {
  config,
  genreRoute,
  generateRouteGetById,
  generateRouteGetCredits,
  generateRouteGetVideos,
  generateRouteGetImages,
  generateRouteDiscover,
  generateSearchRoute,
  generateFilterRoute,
};
