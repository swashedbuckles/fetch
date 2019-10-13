import sinon from 'sinon';
import fetch from '../index';

// https://github.com/web-platform-tests/wpt/blob/master/fetch/api/abort/general.any.js

describe('Abort', () => {
  it('rejects a promise with an abort error');
  it('errors thrown from a request constructor take priority over abort');
  it('request objects should have a a signal property');
  describe('Request Signal', () => {
    it('should exit');
    it('should be an AbortSignal instance');
    it('should be a new instance and not a reference');
    it('should signal when aborted'); 
    it('should retain signal when passed into a fetch constructor');
    it('should not reject promise if removed');
  });
  it('should reject immediately if already aborted');
  it('should still "use" body if pre-aborted');
  it('should not actually make a request if pre-aborted');
  it('when pre-aborted, should be reusable in multiple fetches');
  it('should be usable in multiple fetches');
  it('should abort multiple fetches');
  it('should be usable in other fetches, even if some succeeded');
  it('should close the connection, having aborted it');
});

describe('Abort Signal', () => {
  it('should have an aborted property');
  describe("signal.aborted", () => {
    it('should be unset initially');
    it('should inidicate a request the signal is associated with has been aborted');
  })
  it('should have an onabort event');
  it('should invoke onabort when the abort fires');
});