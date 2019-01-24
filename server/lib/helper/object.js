
/**
 * @param {object} object
 *
 * @description
 * This method trim all string fields in an object and
 * return new object instance.
 */
module.exports.trimStringFields = (object) => {
  const obj = { ...object };

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'string') {
      obj[key] = obj[key].trim();
    }
  });

  return obj;
};
