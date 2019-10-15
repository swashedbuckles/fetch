/** @typedef {`DELETE` | `GET` | `HEAD` | `OPTIONS` | `POST` | `PUT`} VALID_METHOD */
/** @typedef {`TRACE` | `TRACK` | `CONNECT`} FORBIDDEN_METHOD*/
/** @typedef {`cors` | `no-cors` | `same-origin` | `navigate`} REQUEST_MODES */
/** @typedef {`omit` | `same-origin` | `include`} REQUEST_CREDENTIAL */
/** @typedef {`follow` | `error` | `manual`} REQUEST_REDIRECTS */

/**
 * @param {string|number} value
 * @param {object} enumeration
 */
export function checkEnum(value, enumeration) {
  if(typeof value !== 'string' || typeof value !== 'number') {
    throw new TypeError('Value must be a valid object key');
  }

  if(typeof enumeration !== 'object') {
    throw new TypeError('Enumeration must be a simple object');
  }

  return enumeration.hasOwnProperty(value);
}

/** @enum {string}*/
export const VALID_METHODS = Object.freeze({
  DELETE: `DELETE`,
  GET: `GET`,
  HEAD: `HEAD`, 
  OPTIONS: `OPTIONS`,
  POST: `POST`, 
  PUT: `PUT`
});

/** @enum {string}*/
export const FORBIDDEN_METHODS = Object.freeze({
  TRACE: `TRACE`,
  TRACK: `TRACK`,
  CONNECT: `CONNECT`
});

/** @enum {string}*/
export const REQUEST_MODE = Object.freeze({
  'no-cors': `no-cors`,
  'same-origin': `same-origin`,
  cors: `cors`,
  navigate: `navigate`,
});

/** @enum {string}*/
export const REQUEST_CREDENTIALS = Object.freeze({
  omit: `omit`,
  'same-origin': `same-origin`,
  includ: `include`,
});

/** @enum {string}*/
export const REQUEST_REDIRECT = Object.freeze({
  follow: `follow`,
  manual: `manual`,
  error: `error`,
});