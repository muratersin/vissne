const fs = require('fs');
const { string } = require('./helper');

/**
 *
 * @param {*} dirname
 */
function fileCollector(dirname) {
  const files = fs.readdirSync(dirname)
    .filter(f => f !== 'index.js');

  const fileCollection = {};
  const fileLength = files.length;

  for (let i = 0; i < fileLength; i += 1) {
    const [fileName] = files[i].split('.');
    fileCollection[string.toCamelCase(fileName)] = require(`${dirname}/${fileName}`); // eslint-disable-line global-require
  }

  return fileCollection;
}

module.exports = fileCollector;

// TODO: add recursive
