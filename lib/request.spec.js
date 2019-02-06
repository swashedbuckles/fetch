import {test, describe} from 'ava-spec';
import sinon from 'sinon';
import {Request} from '../index';

describe('Request', it => {
  it.todo('should be able to clone itself');
  it('has a bunch of read-only properties', t => {
    const r = new Request();
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
    props.forEach(p => t.true(r.hasOwnProperty(p)));
  });

  it.todo('can resolve an arrayBuffer representation of the request body');
  it.todo('can resolve an blob representation of the request body');
  it.todo('can resolve an formData representation of the request body');
  it.todo('can resolve an json representation of the request body');
  it.todo('can resolve an text representation of the request body');
  it.todo('will resolve empty strings or buffers on subsequent calls to transform the request body');

  it.todo('takes a string as an input resource');
  it.todo('can take another request object to clone it');
  it.todo('takes some security precautions when cloning a request object');
  it.todo('can take custom options for the request as an object');
  it.todo('will throw an error if the request url contains credentials');
});