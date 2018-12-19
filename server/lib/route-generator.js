const { api } = require('../config/app.config');

const {
  protocol,
  version,
  url,
  lang,
  key,
} = api.moviedb;

const baseUrl = `${protocol}://${url}/${version}`;
const baseQueryString = `?api_key=${key}&language=${lang}`;

module.exports.byId = (
  movieId,
  type = false,
) => `${baseUrl}/movie/${movieId}${type ? `/${type}` : null}${baseQueryString}`;

module.exports.list = (

) => '';
