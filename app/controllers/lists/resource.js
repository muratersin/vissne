/**
 * List resource
 */

const index = require('./get');
const getById = require('./get-by-id');
const create = require('./create');
const update = require('./update');
const destroy = require('./destroy');

const listResurce = {
  index,
  getById,
  create,
  update,
  destroy,
};

module.exports = listResurce;
