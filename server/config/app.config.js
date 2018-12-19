
const path = require('path');
const { version } = require('../../package.json');

const {
  MOVIE_DB_API_KEY,
  NODE_ENV,
  JWTSECRET,
} = process.env;

if (!MOVIE_DB_API_KEY || !JWTSECRET) {
  console.error('API key is required.');
  process.exit(1);
}

const env = (NODE_ENV || 'development').trim();
const suffix = env === 'production'
  ? `?v=${version}`
  : '';

const appConfig = {
  name: 'Vissne',
  version,
  env,
  publicPath: path.join(__dirname, '../public'),
  viewPath: path.join(__dirname, '../views'),
  viewEngine: 'pug',
  saltRounds: 10,
  jwtSecret: JWTSECRET,
  bundles: {
    app: {
      js: `dist/app.bundle.js${suffix}`,
      css: `dist/app.css${suffix}`,
    },
  },

  // Config for whic uses all externap api in vissne
  api: {
    moviedb: {
      protocol: 'https',
      url: 'api.themoviedb.org',
      version: 3,
      key: MOVIE_DB_API_KEY,
    },
  },
};

module.exports = appConfig;
