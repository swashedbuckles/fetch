import {test, describe} from 'ava-spec';
import sinon from 'sinon';
import Response from './response';

describe('Response', it => {
  it.todo('can create a new response object');
  it.todo('can take a body defining the response');
  it.todo('can have a null body');
  it.todo('can have a blob body');
  it.todo('can have a buffer body');
  it.todo('can have a formData body');
  it.todo('can have a stream body');
  it.todo('can have a search params body');
  it.todo('can have a string body');

  it.todo('can define a custom status for the response');
  it.todo('can define a custom statusText for the response');
  it.todo('can define custom headers for the response');

  it('has a bunch of readonly properties', t => {
    const r = new response;
    const props = [
      'headers',
      'ok',
      'redirected',
      'status',
      'statusText',
      'type',
      'url',
      'useFinalURL',
      'body',
      'bodyUsed'
    ];

    props.forEach(p => t.true(r.hasOwnProperty(p)));
  });

  it.todo('has a method to clone the response');
  it.todo('has a method to return an error response');
  it.todo('can redirect the response');
  it.todo('can resolve an array buffer');
  it.todo('can resolve an blob buffer');
  it.todo('can resolve an formData buffer');
  it.todo('can resolve an json buffer');
  it.todo('can resolve an text buffer');
});