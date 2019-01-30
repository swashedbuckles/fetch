import {test, describe} from 'ava-spec';
import sinon from 'sinon';
import fetch from './index';

// https://github.com/web-platform-tests/wpt/blob/master/fetch/api/abort/general.any.js

describe('Abort', it => {
  it.todo('rejects a promise with an abort error');
  it.todo('errors thrown from a request constructor take priority over abort');
  it.todo('request objects should have a a signal property');
  describe('Request Signal', it => {
    it.todo('should exit');
    it.todo('should be an AbortSignal instance');
    it.todo('should be a new instance and not a reference');
    it.todo('should signal when aborted'); 
    it.todo('should retain signal when passed into a fetch constructor');
    it.todo('should not reject promise if removed');
  });
  it.todo('should reject immediately if already aborted');
  it.todo('should still "use" body if pre-aborted');
  it.todo('should not actually make a request if pre-aborted');
  it.todo('when pre-aborted, should be reusable in multiple fetches');
  it.todo('should be usable in multiple fetches');
  it.todo('should abort multiple fetches');
  it.todo('should be usable in other fetches, even if some succeeded');
  it.todo('should close the connection, having aborted it');
});

describe('Abort Signal', it => {
  it.todo('should have an aborted property');
  describe("signal.aborted", it => {
    it.todo('should be unset initially');
    it.todo('should inidicate a request the signal is associated with has been aborted');
  })
  it.todo('should have an onabort event');
  it.todo('should invoke onabort when the abort fires');
});