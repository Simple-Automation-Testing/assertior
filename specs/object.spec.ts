import {expect} from '../lib';
import * as assert from 'assert';
import {AssertionError} from 'assert';


describe('Object', function() {
  it('[P] stringNotIncludesSubstring', function() {
    expect({a: 2, b: 3, c: {a: 1, b: 2}}).objectIncludesKeys(['a', 'b']);
    expect({a: 2, b: 3, c: {a: 1, b: 2}}).objectIncludesKeys(['a', 'b', 'c']);
  });

  it('[N] stringNotIncludesSubstring', function() {
    try {
      expect({a: 1}).objectIncludesKeys(['c']);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });
});

