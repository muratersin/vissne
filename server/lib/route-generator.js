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

module.exports.config = `${baseUrl}/config${baseQueryString}`;
module.exports.genreRoute = `${baseUrl}/genre/movie/list${baseQueryString}`;

module.exports.generateRouteGetById = (movieId, type = false) => `
  ${baseUrl}/movie/${movieId}${type ? `/${type}` : ''}${baseQueryString}
`;

module.exports.generateRouteGetCredits = movieId => `${baseUrl}/movie/${movieId}/credits${baseQueryString}`;
module.exports.generateRouteGetVideos = movieId => `${baseUrl}/movie/${movieId}/videos${baseQueryString}`;
module.exports.generateRouteGetImages = movieId => `${baseUrl}/movie/${movieId}/images${baseQueryString}`;
module.exports.generateRouteDiscover = disoverQuery => `
  ${baseUrl}/discover/movie${baseQueryString}&${querystring.stringify(convertQueryKeys(disoverQuery))}
`;

module.exports.generateSearchRoute = (q) => {
  const discoverQuery = q;
  const query = discoverQuery.searchText;
  delete discoverQuery.searchText;
  return `${baseUrl}/search/movie${baseQueryString}&query=${query}&${querystring.stringify(convertQueryKeys(discoverQuery))}`;
};
