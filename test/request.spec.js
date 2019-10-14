import sinon from 'sinon';
import {expect} from 'chai';
import {Request} from '../index';

describe('Request', () => {
  describe('construction', () => {
    it('takes a string as an input resource');
    it('can take another request object to clone it');
    it('takes some security precautions when cloning a request object');
    it('can take custom options for the request as an object');
    it('will throw an error if the request url contains credentials');
    it('will throw an error if a get or head request has a body');
  });

  describe('properties', () => {
    it('has a bunch of read-only properties', () => {
      const r = new Request('url');
      const props = [
        'cache',
        'context',
        'credentials',
        'destination',
        'headers',
        'integrity',
        'method',
        'mode',
        'redirect',
        'referrer',
        'referrerPolicy',
        'url',
        'body',
        'bodyUsed'
      ];
      props.forEach(p => expect(r.hasOwnProperty(p)).to.be.true);
    });
  });

  describe('methods', () => {
    it('should be able to clone itself');
    it('can resolve an arrayBuffer representation of the request body');
    it('can resolve an blob representation of the request body');
    it('can resolve an formData representation of the request body');
    it('can resolve an json representation of the request body');
    it('can resolve an text representation of the request body');
    it('will resolve empty strings or buffers on subsequent calls to transform the request body');
  });
});