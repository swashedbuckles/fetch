import {expect} from 'chai';
import sinon from 'sinon';
import Response from '../index';

describe('Response', () => {
  it('can create a new response object');
  it('can take a body defining the response');
  it('can have a null body');
  it('can have a blob body');
  it('can have a buffer body');
  it('can have a formData body');
  it('can have a stream body');
  it('can have a search params body');
  it('can have a string body');

  it('can define a custom status for the response');
  it('can define a custom statusText for the response');
  it('can define custom headers for the response');

  it('has a bunch of readonly properties', t => {
    const r = new Response;
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

    props.forEach(p => expect(r.hasOwnProperty(p)).to.be.true);
  });

  it('has a method to clone the response');
  it('has a method to return an error response');
  it('can redirect the response');
  it('can resolve an array buffer');
  it('can resolve an blob buffer');
  it('can resolve an formData buffer');
  it('can resolve an json buffer');
  it('can resolve an text buffer');
});