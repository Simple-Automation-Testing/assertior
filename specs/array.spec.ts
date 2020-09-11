import {expect} from '../lib';
import * as assert from 'assert';
import {AssertionError} from 'assert';


describe('Array', function() {

  it('[P] arrayNotIncludesMembers', function() {
    expect([1, 2, 3]).arrayNotIncludesMembers(4);
    expect([1, 2, 3]).arrayNotIncludesMembers([4]);
  });

  it('[N] arrayNotIncludesMembers', function() {
    try {
      expect([1, 2, 3]).arrayNotIncludesMembers(3);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }

    try {
      expect([1, 2, 3]).arrayNotIncludesMembers([3]);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] arrayIncludesMembers', function() {
    expect([1, 2, 3]).arrayIncludesMembers(3);
    expect([1, 2, 3]).arrayIncludesMembers([2]);
  });

  it('[N] arrayIncludesMembers', function() {
    let e = null;
    let e1 = null;
    try {
      expect([1, 2, 3]).arrayIncludesMembers(5);
    } catch (error) {
      e = error;
    }
    assert.equal(e instanceof AssertionError, true);
    try {
      expect([1, 2, 3]).arrayIncludesMembers([5]);
    } catch (error) {
      e1 = error;
    }
    assert.equal(e1 instanceof AssertionError, true);
  });

  it('[P] toBeEmptyArray', function() {
    expect([]).toBeEmptyArray();
  });

  it('[N] toBeEmptyArray', function() {
    try {
      expect([1]).toBeEmptyArray();
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[NM] toBeEmptyArray', function() {
    const message = 'Test message';
    try {
      expect([1]).toBeEmptyArray(message);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
      assert.equal(error.message, message);
    }

    try {
      expect([1], message).toBeEmptyArray();
      expect([1], message).toBeNotEmptyArray();
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
      assert.equal(error.message, message);
    }
  });

  it('[P] toBeNotEmptyArray', function() {
    expect([1]).toBeNotEmptyArray();
  });

  it('[N] toBeNotEmptyArray', function() {
    try {
      expect([]).toBeNotEmptyArray();
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[NM] toBeNotEmptyArray', function() {
    const message = 'Test message';
    try {
      expect([]).toBeNotEmptyArray(message);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
      assert.equal(error.message, message);
    }

    try {
      expect([], message).toBeNotEmptyArray();
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
      assert.equal(error.message, message);
    }
  });

  it('[P] arrayHasLengthAbove', function() {
    expect([12, 3, 4]).arrayHasLengthAbove(2);
  });

  it('[N] arrayHasLengthAbove', function() {
    try {
      expect([]).arrayHasLengthAbove(1);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[NM] arrayHasLengthAbove', function() {
    const message = 'Test message';
    try {
      expect([1, 2, 3]).arrayHasLengthAbove(5, message);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
      assert.equal(error.message, message);
    }

    try {
      expect([12, 3, 4], message).arrayHasLengthAbove(5);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
      assert.equal(error.message, message);
    }
  });
});

