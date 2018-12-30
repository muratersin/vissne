
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

/**
 * @param {string} str
 *
 * @description
 * Converts a string to camelcase.
 *
 * @example
 * toCamelCase('to_camel_case'); // 'toCamelCase'
 * toCamelCase('To camel case'); // 'toCamelCase'
 * toCamelCase('to-camel-case'); // 'toCamelCase'
 */
const toCamelCase = (str) => {
  const s = str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * @param {string} str
 *
 * @description
 * Shourcut for log strings.
 *
 * @example
 * truncate('Truncate title', 6); // 'Tru...'
 */
const truncate = (str, num) => (
  (str.length > num)
    ? `${str.slice(0, num > 3 ? num - 3 : num)}...`
    : str
);

/**
 * @param {string} str
 *
 * @description
 * Converts a string to slug.
 *
 * @example
 * toCamelCase('The Big Fish'); // 'the-big-fish'
 */
const slugify = str => str.replace(/[^\w\s-]/g, '').replace(/ /g, '-').toLowerCase();

module.exports = {
  capitalize,
  capitalizeEveryWord,
  compactWhiteSpace,
  fromCamelCase,
  isAbsoluteURL,
  toCamelCase,
  truncate,
  slugify,
};
