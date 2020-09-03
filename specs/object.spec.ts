import {expect} from '../lib';
import * as assert from 'assert';
import {AssertionError} from 'assert';


describe('Object', function() {
  it('[P] objectIncludesKeys', function() {
    expect({a: 2, b: 3, c: {a: 1, b: 2}}).objectIncludesKeys(['a', 'b']);
    expect({a: 2, b: 3, c: {a: 1, b: 2}}).objectIncludesKeys(['a', 'b', 'c']);
  });

  it('[N] objectIncludesKeys', function() {
    try {
      expect({a: 1}).objectIncludesKeys(['c']);
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] objectIsNotEmpty', function() {
    expect({a: 1}).objectIsNotEmpty();
  });

  it('[N] objectIsNotEmpty', function() {
    try {
      expect({}).objectIsNotEmpty();
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });

  it('[P] objectIsEmpty', function() {
    expect({}).objectIsEmpty();
  });

  it('[N] objectIsEmpty', function() {
    try {
      expect({a: 1}).objectIsNotEmpty();
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }
  });
});

