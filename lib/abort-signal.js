
function AbortSignal(promise) {
  this.aborted = false;
  this.promise = promise;
  this.onabort = () => {};

  this.promise.catch(() => this.onabort());
}