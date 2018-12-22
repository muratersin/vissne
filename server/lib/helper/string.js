
/**
 * @param {string} param0 string to be converted to capitalize
 *
 * @description
 * Capitalizes the first letter of a string.
 *
 * @example
 * capitalize('helLo') // Hello
 */
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
module.exports.capitalize = capitalize;

/**
 * @param {string} str string to be converted
 *
 * @description
 * Capitalizes the first letter of every word in a string.
 *
 * @example
 * capitalizeEveryWord('hello world') // Hello World
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * @param {string} str
 *
 * @description
 * Returns a string with whitespaces compacted.
 *
 * @example
 * compactWhiteSpace('   Lorem ip') // 'Lorem ip'
 */
const compactWhiteSpace = str => str.replace(/\s{2,}/g, ' ');

/**
 * @param {string} str
 * @param {string} separator optional
 *
 * @description
 * Converts a string from camelcase.
 *
 * @example
 * fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
 * fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
 */
const fromCamelCase = (str, separator = ' ') => str
  .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
  .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
  .toLowerCase();

/**
 * @param {string} url
 *
 * @description
 * Returns true if the given string is an absolute URL, false otherwise.
 *
 * @example
 * isAbsoluteURL('https://vissne.com'); // true
 * isAbsoluteURL('ftp://www.myserver.net'); // true
 * isAbsoluteURL('/foo/bar'); // false
 */
const isAbsoluteURL = url => /^[a-z][a-z0-9+.-]*:/.test(url);

module.exports = {
  capitalize,
  capitalizeEveryWord,
  compactWhiteSpace,
  fromCamelCase,
  isAbsoluteURL,
};
