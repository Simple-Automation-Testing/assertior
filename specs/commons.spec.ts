import {expect} from '../lib';
import {AssertionError} from 'assert';
import * as assert from 'assert';

describe('Common assertions', function() {
  it('[P] toEqual', function() {
    const val = 2;
    expect(val).toEqual(2);
  });

  it('[N] toEqual', function() {
    const val = 2;
    try {
      expect(val).toEqual(3);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] hasType', function() {
    expect({}).hasType('object');
    expect([]).hasType('array');
    expect(null).hasType('null');
    expect('').hasType('string');
    expect(Symbol('a')).hasType('symbol');
    expect(undefined).hasType('undefined');
    expect(new Set()).hasType('set');
    expect(Promise.resolve(1)).hasType('promise');
  });

  it('[N] haType', function() {
    // type
    try {
      expect({}).hasType('not exist');
    } catch (error) {
      assert.equal(error instanceof TypeError, true);
    }

    try {
      expect({}).hasType('array');
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }

    try {
      expect({}).hasType('string');
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }

    try {
      expect({}).hasType('symbol');
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toDeepEqual', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
  });

  it('[N] toDeepEqual', function() {
    const val = {a: 2, b: 3, c: [1, 7, 3]};
    try {
      expect(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });
});