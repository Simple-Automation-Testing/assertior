import {expect} from '../lib';

describe('Soft Positive assertions', function() {
  it('toEqual', function() {
    const val = 2;
    expect.soft(val).toEqual(2);
  });

  it('toDeepEqual', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect.soft(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
  });
});
