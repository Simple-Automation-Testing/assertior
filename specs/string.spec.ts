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
      assert.strictEqual(error instanceof AssertionError, true);
    }

    try {
      expect({}).stringIncludesSubstring('');
    } catch (error) {
      assert.strictEqual(error instanceof TypeError, true);
    }
  });

  it('[P] stringNotIncludesSubstring', function() {
    expect('foo').stringNotIncludesSubstring('bar');
  });

  it('[N] stringNotIncludesSubstring', function() {
    try {
      expect('foo').stringNotIncludesSubstring('oo');
    } catch (error) {
      assert.strictEqual(error instanceof AssertionError, true);
    }

    try {
      expect({}).stringNotIncludesSubstring('');
    } catch (error) {
      assert.strictEqual(error instanceof TypeError, true);
    }
  });

  it('[P] stringIsNotEmpty', function() {
    expect('test').stringIsNotEmpty();
  });

  it('[N] stringIsNotEmpty', function() {
    try {
      expect('').stringIsNotEmpty();
    } catch (error) {
      assert.strictEqual(error instanceof AssertionError, true);
    }

    try {
      expect({}).stringIsNotEmpty();
    } catch (error) {
      assert.strictEqual(error instanceof TypeError, true);
    }
  });

  it('[P] stringIsEmpty', function() {
    expect('').stringIsEmpty();
  });

  it('[N] stringIsEmpty', function() {
    try {
      expect('test').stringIsEmpty();
    } catch (error) {
      assert.strictEqual(error instanceof AssertionError, true);
    }

    try {
      expect({}).stringIsEmpty();
    } catch (error) {
      assert.strictEqual(error instanceof TypeError, true);
    }
  });

  it('[P] toMatchRegex', function() {
    expect('test').toMatchRegex(/te/ig);
  });

  it('[N] toMatchRegex', function() {
    try {
      expect('test').toMatchRegex(/h/ig);
    } catch (error) {
      assert.strictEqual(error instanceof AssertionError, true);
    }
  });
});

