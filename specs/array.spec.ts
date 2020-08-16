import {expect} from '../lib';
import * as assert from 'assert';
import {AssertionError} from 'assert';


describe('Array', function() {
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

});

