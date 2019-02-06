const cache = {};

const set = (name, val) => {
  cache[name] = val;
};

const get = name => cache[name];

module.exports = {
  get,
  set,
};
