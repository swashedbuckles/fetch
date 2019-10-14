/**
 * @typedef {object} RequestInit
 * @property {`DELETE` | `GET` | `HEAD` | `OPTIONS` | `POST` | `PUT`} [method="GET"] The request method, e.g., GET, POST. The default is GET. 
 * @property {Object.<string, string>} [headers] Any headers you want to add to your request
 * @property {Blob | BufferSource | FormData | URLSearchParams | String | ReadableStream} [body] Any body that you want to add to your request: 
 * @property {string} [mode="cors"] The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate.
 * @property {string} [credentials="same-origin"] The request credentials you want to use for the request: omit, same-origin, or include.
 * @property {string} [cache] The cache mode you want to use for the request.
 * @property {string} [redirect="follow"] The redirect mode to use: follow, error, or manual
 * @property {string} [referrer="about:client"]  A USVString specifying no-referrer, client, or a URL 
 * @property {string} [integrity] Contains the subresource integrity value of the request
 */

//  import {VALID_METHODS, FORBIDDEN_METHODS} from './enums';

const REQUEST_DEFAULTS = Object.freeze({
  method: "GET",
  mode: "cors",
  credentials: "same-origin",
  redirect: "follow",
  referrer: "about:client"
});
/**
 * Request represents a resource request. 
 * It can be passed directly to the fetch API
 * @class
 */
export default class Request {
  /**
   * @param {string | Request} input resource URL
   * @param {object} [init] request configuration
   */
  constructor(input, init) {
    this.url = input;
    Object.assign(this, REQUEST_DEFAULTS, init);
  }
}

