module.exports = function AbortController() {
  let reject;
  const p = new Promise((_, r) => (reject = r));
  
  return {
    abort: reject,
    signal: new AbortSignal(p)
  }
}

function AbortSignal(promise) {
  this.aborted = false;
  this.promise = promise;
  this.onabort = () => {};

  this.promise.catch(() => this.onabort());
}