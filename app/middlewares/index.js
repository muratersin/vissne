const fileCollector = require('../../lib/file-collector');

const middlewares = fileCollector(__dirname);

module.exports = middlewares;
