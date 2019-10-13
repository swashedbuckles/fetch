import {expect} from 'chai';
import sinon from 'sinon';
import fetch from '../index';

describe('Fetch!', () => {
  it('should be a function', () => {
    expect(fetch).to.be.a('function');
  });

  it('should return a promise', () => {
    expect(fetch() instanceof Promise).to.be.true;
  })
});