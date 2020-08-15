# assertior

## This library is a wrapper around nodejs "assert" module

### The main porpuse is build new assertion library with soft assertions based on "assert" module

#### allure/any other reporter ready

##### Development in progress

##### Сurrent usage and avaliable API (toEqual, toDeepEqual), mocha example

```js
const {expect} = require('assertior');

describe('Suite', function() {
  it('soft toEqual positive', function() {
    const val = 2;
    expect.soft(val).toEqual(2);
  });

  it('soft toDeepEqual positive', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect.soft(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
  });

  it('toDeepEqual positive', function () {
    const val = 2;
    expect(val).toEqual(2);
  });

  it('toDeepEqual positive', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
  });
});
```

##### Сurrent usage and avaliable API (toEqual, toDeepEqual), mocha example with allure
```js
// Allure step
function allureStep(stepAssertionName: string, error, expected, current) {
  const step = allure.startStep(stepAssertionName);
  allure.attachment('Expected value', JSON.stringify(expected, null, 2), 'application/json');
  allure.attachment('Current value', JSON.stringify(current, null, 2), 'application/json');
  if (error) {
    allure.attachment('Error', JSON.stringify(error, null, 2), 'application/json');
  }
  step.step.stepResult.status = error ? 'broken' : 'passed';
  step.endStep();
}

const {expect, initStepDeclarator} = require('assertior');

initStepDeclarator(allureStep);
describe('Suite', function() {
  it('soft toEqual positive', function() {
    const val = 2;
    expect.soft(val).toEqual(2);
  });

  it('soft toDeepEqual positive', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect.soft(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
  });

  it('toDeepEqual positive', function () {
    const val = 2;
    expect(val).toEqual(2);
  });

  it('toDeepEqual positive', function() {
    const val = {a: 2, b: 3, c: [1, 2, 3]};
    expect(val).toDeepEqual({a: 2, c: [1, 2, 3], b: 3});
  });
});
```
