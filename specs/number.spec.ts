import {expect} from '../lib';
import * as assert from 'assert';
import {AssertionError} from 'assert';

describe('Number', function() {
  it('[P] isLessThan', function() {
    expect(1).isLessThan(3);
  });

  it('[N] isLessThan', function() {
    try {
      expect(3).isLessThan(2);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] isGreaterThan', function() {
    expect(3).isGreaterThan(2);
  });

  it('[N] isGreaterThan', function() {
    try {
      expect(3).isGreaterThan(5);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });
});

