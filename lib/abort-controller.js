// https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal

module.exports = function AbortController() {
  let reject;
  const p = new Promise((_, r) => (reject = r));
  
  return {
    abort: reject,
    signal: new AbortSignal(p)
  }
}
