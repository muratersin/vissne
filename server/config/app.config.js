
const path = require('path');
const { version } = require('../../package.json');

const env = (process.env.NODE_ENV || 'development').trim();

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
  bundles: {
    site: {
      js: `dist/site.bundle.js${suffix}`,
      css: `dist/site.css${suffix}`,
    },
    login: {
      js: `dist/login.bundle.js${suffix}`,
      css: `dist/login.css${suffix}`,
    },
    register: {
      js: `dist/register.bundle.js${suffix}`,
      css: `dist/register.css${suffix}`,
    },
    dashboard: {
      js: `dist/dashboard.bundle.js${suffix}`,
      css: `dist/dashboard.css${suffix}`,
    },
  },
};

module.exports = appConfig;
