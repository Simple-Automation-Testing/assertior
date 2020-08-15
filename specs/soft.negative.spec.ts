import {expect} from '../lib';
import {stubConsoleError} from './utils';
import * as assert from 'assert';

describe('Soft Negative assertions', function() {
  it('toEqual', function() {
    const stub = stubConsoleError();
    const val = 2;
    expect.soft(val).toEqual(22);
    assert.equal(true, stub.getCallCondition());
    stub.restore();
  });

  it('toDeepEqual', function() {
    const stub = stubConsoleError();
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect.soft(val).toDeepEqual({a: 2, c: [1, 222, 3], b: 3});
    assert.equal(true, stub.getCallCondition());
    stub.restore();
  });
});
