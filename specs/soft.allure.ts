import {expect, initStepDeclarator} from '../lib';
import {allureStep} from './utils';

/**
 * init step for allure
 */
initStepDeclarator(allureStep);

describe('Soft Allure Negative assertions', function() {
  it('Soft toEqual', function() {
    const val = 2;
    expect.soft(val, 'Values should equal each other').toEqual(22);
  });

  it('Soft allure toDeepEqual', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect.soft(val, 'Full objects should equal each other').toDeepEqual({a: 2, c: [1, 222, 3], b: 3});
  });
});
