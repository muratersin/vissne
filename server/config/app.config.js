
const path = require('path');
const { version } = require('../../package.json');

const env = (process.env.NODE_ENV || 'development').trim();
const jwtSecret = process.env.JWTSECRET;

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
  jwtSecret,
  bundles: {
    app: {
      js: `dist/app.bundle.js${suffix}`,
      css: `dist/app.css${suffix}`,
    },
  },
};

module.exports = appConfig;
