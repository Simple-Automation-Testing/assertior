import {expect} from '../lib';
import * as assert from 'assert';
import {AssertionError} from 'assert';


describe('String', function() {
  it('[P] stringIncludesSubstring', function() {
    expect('test').stringIncludesSubstring('test');
  });

  it('[N] stringIncludesSubstring', function() {
    try {
      expect('foo').stringIncludesSubstring('bar');
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }

    try {
      expect({}).stringIncludesSubstring('');
    } catch (error) {
      assert.equal(error instanceof TypeError, true);
    }
  });

  it('[P] stringNotIncludesSubstring', function() {
    expect('foo').stringNotIncludesSubstring('bar');
  });

  it('[N] stringNotIncludesSubstring', function() {
    try {
      expect('foo').stringNotIncludesSubstring('oo');
    } catch (error) {
      assert.equal(error instanceof AssertionError, true);
    }

    try {
      expect({}).stringNotIncludesSubstring('');
    } catch (error) {
      assert.equal(error instanceof TypeError, true);
    }
  });
});

