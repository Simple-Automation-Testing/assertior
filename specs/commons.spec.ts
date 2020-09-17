import {expect} from '../lib';
import {AssertionError} from 'assert';
import * as assert from 'assert';

describe('Common assertions', function() {
  it('[P] toNotEqual', function() {
    const val = 2;
    expect(val).toNotEqual(3);
  });

  it('[N] toNotEqual', function() {
    const val = 2;
    try {
      expect(val).toNotEqual(2);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toNotDeepEqual', function() {
    expect({a: 2}).toNotDeepEqual({a: 3});
  });

  it('[N] toNotDeepEqual', function() {
    try {
      expect({a: 2}).toNotDeepEqual({a: 2});
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

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

  it('[P] toBeString', function() {
    expect('').toBeString;
  });

  it('[N] toBeString', function() {
    const val = {a: 2, b: 3, c: [1, 7, 3]};
    try {
      expect(val).toBeString;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeObject', function() {
    expect({}).toBeObject;
  });

  it('[N] toBeObject', function() {
    try {
      expect([]).toBeObject;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeNull', function() {
    expect(null).toBeNull;
  });

  it('[N] toBeNull', function() {
    try {
      expect([]).toBeNull;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeNumber', function() {
    expect(1).toBeNumber;
  });

  it('[N] toBeNumber', function() {
    try {
      expect([]).toBeNumber;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeUndefined', function() {
    expect(undefined).toBeUndefined;
  });

  it('[N] toBeUndefined', function() {
    try {
      expect([]).toBeUndefined;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeSet', function() {
    expect(new Set()).toBeSet;
  });

  it('[N] toBeSet', function() {
    try {
      expect([]).toBeSet;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeFunction', function() {
    expect(() => ({})).toBeFunction;
  });

  it('[N] toBeFunction', function() {
    try {
      expect([]).toBeFunction;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeAsyncFunction', function() {
    expect(async () => ({})).toBeAsyncFunction;
  });

  it('[N] toBeAsyncFunction', function() {
    try {
      expect(() => ({})).toBeAsyncFunction;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeBool', function() {
    expect(false).toBeBool;
  });

  it('[N] toBeBool', function() {
    try {
      expect(() => ({})).toBeBool;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBeSymbol', function() {
    expect(Symbol('test')).toBeSymbol;
  });

  it('[N] toBeSymbol', function() {
    try {
      expect(() => ({})).toBeSymbol;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] toBePromise', function() {
    expect(Promise.resolve('test')).toBePromise;
  });

  it('[N] toBePromise', function() {
    try {
      expect(() => ({})).toBePromise;
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });
});
