module.exports = {
  isString
};

/**
 * whether value is a string
 * 
 * @param {any} value
 * @return {boolean}
 */
function isString(value) {
  return typeof value === 'string';
}