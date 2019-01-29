// https://fetch.spec.whatwg.org/#url
const {isString} = require('./util');

module.exports = {
  isLocal,
  isHTTP,
  isNetwork,
  isFetch,
};

/**
 * @param {string} url
 * @return {boolean}
 */
function isLocal(url) {
  const scheme = getScheme(url);
  const LOCAL_SCHEMES = [
    'about',
    'blob',
    'data',
    'filesystem'
  ];

  return LOCAL_SCHEMES.indexOf(scheme) > -1;
}

/**
 * @param {string} url
 * @return {boolean}
 */
function isHTTP(url) {
  const scheme = getScheme(url);
  const HTTP_SCHEMES = [
    'http',
    'https'
  ];

  return HTTP_SCHEMES.indexOf(url) > -1;
}

/**
 * @param {string} url
 * @return {boolean}
 */
function isNetwork(url) {
  const scheme = getScheme(url);
  const isFTP  = scheme === 'ftp';
  
  return isHTTP(url) || isFTP;
}

/**
 * @param {string} url
 * @return {boolean}
 */
function isFetch(url) {
  const scheme = getScheme(url);

  return isNetwork(url) || isLocal(url);
}

/**
 * return the scheme part of a url
 * @param {string} url
 * @return {string}
 */
function getScheme(url) {
  if(!isString(url)) {
    throw new TypeError('URL should be a string');
  }

  const parts = url.split('://', 1);
  return parts[0].toLowerCase();
}