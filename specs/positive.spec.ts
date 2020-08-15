import {expect} from '../lib';

describe('Positive assertions', function() {
  it('toEqual', function() {
    const val = 2;
    expect(val).toEqual(2);
  });

  it('toDeepEqual', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
  });
});
