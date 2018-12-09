
const Model = require('./model');

const schema = {
  fields: {
    firstName: {
      type: String,
      required: true,
      maxLen: 80,
      minLen: 2,
    },
    lastName: {
      type: String,
      required: true,
      maxLen: 80,
      minLen: 2,
    },
  },
};

const clinick = new Model('Clinick', schema);

module.exports = clinick;
