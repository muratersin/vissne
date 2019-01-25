const fs = require('fs');
const path = require('path');
const { string } = require('./helper');

/**
 * When you call this method and pass a valid directory, return
 * all exported methods as object. I will be recursive only one sub folder.
 *
 * @param {String} dirname
 * @returns {Object}
 */
function fileCollector(dirname) {
  if (!dirname || typeof dirname !== 'string') {
    throw new Error('`dirname` is required and must be a string');
  }

  try {
    const files = fs.readdirSync(dirname).filter(f => f !== 'index.js');
    const fileCollection = {};
    const fileLength = files.length;

    for (let i = 0; i < fileLength; i += 1) {
      const [fileName] = files[i].split('.');
      const filePath = path.resolve(dirname, files[i]);
      const stats = fs.lstatSync(filePath);
      const propName = string.toCamelCase(fileName);

      if (stats.isDirectory()) {
        fileCollection[propName] = fileCollection[propName] || {};
        const subFiles = fs.readdirSync(filePath);
        const subFilesLength = subFiles.length;

        for (let j = 0; j < subFilesLength; j += 1) {
          const [subFileName] = subFiles[j].split('.');
          fileCollection[propName][string.toCamelCase(subFileName)] = require(`${filePath}/${subFileName}`); // eslint-disable-line
        }
      } else {
        fileCollection[propName] = require(`${dirname}/${fileName}`); // eslint-disable-line
      }
    }

    return fileCollection;
  } catch (err) {
    throw err;
  }
}

module.exports = fileCollector;
