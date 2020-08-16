import {expect} from '../lib';
import * as assert from 'assert';
import {AssertionError} from 'assert';


describe('Negative assertions', function() {
  it('toEqual', function() {
    const val = 2;
    try {
      expect(val).toEqual(3);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });
  it('toDeepEqual', function() {
    const val = {a: 2, b: 3, c: [1, 7, 3]};
    try {
      expect(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });
});
