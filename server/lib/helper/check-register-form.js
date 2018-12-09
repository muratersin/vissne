const logger = require('../logger');

function formCheck(body, ops) {
  if (typeof body !== 'object' || typeof ops !== 'object') {
    throw new Error('Body and optins both of mut be object');
  }

  const error = {};

  const opsLen = ops.length;
  for (let i = 0; i < opsLen; i += 1) {
    const {
      field,
      required,

    } = ops[i];
    const value = body[ops[i]]
  }

  return error;
}

module.exports = formCheck;
