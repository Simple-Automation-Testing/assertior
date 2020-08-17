# assertior

##### 🛠  Development in progress

## This library is a wrapper around nodejs "assert" module

### The main porpuse is build new assertion library with soft assertions based on "assert" module

#### allure/any other reporter ready

##### mocha example
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
});
```

##### mocha example with allure
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

  it('toDeepEqual positive', function () {
    const val = 2;
    expect(val).toDeepEqual(2);
  });
});
```
- [expect.soft](#expect.soft)
- [expect](#expect)
  * [toDeepEqual](#todeepequal)
  * [toEqual](#toequal)
  * [toBeEmptyArray](#tobeemptyarray)
  * [toBeNotEmptyArray](#tobenotemptyarray)
  * [objectIncludesKeys](#objectincludeskeys)
  * [hasType](#hastype)

# expect
## toDeepEqual
```js
  const {expect} = require('assertior');
  expect([{foo: 'bar'}]).toDeepEqual([{foo: 'bar'}]);
```

## toEqual
```js
  const {expect} = require('assertior');
  expect('bar').toEqual('bar');
```

## toBeEmptyArray
```js
  const {expect} = require('assertior');
  expect([]).toBeEmptyArray();
```

## toBeNotEmptyArray
```js
  const {expect} = require('assertior');
  expect([1,2,3]).toBeNotEmptyArray();
```

## objectIncludesKeys
```js
  const {expect} = require('assertior');
  expect({foo: 'bar'}).objectIncludesKeys(['foo']);
```

## hasType
```js
  const {expect} = require('assertior');
  expect({foo: 'bar'}).hasType('object');
  expect([]).hasType('array');
  expect(null).hasType('null');
```

# expect.soft
## toEqual
```js
  const {expect} = require('assertior');
  expect.soft('bar').toEqual('bar');
```

## toBeEmptyArray
```js
  const {expect} = require('assertior');
  expect.soft([]).toBeEmptyArray();
```

## toBeNotEmptyArray
```js
  const {expect} = require('assertior');
  expect.soft([1,2,3]).toBeNotEmptyArray();
```

## objectIncludesKeys
```js
  const {expect} = require('assertior');
  expect.soft({foo: 'bar'}).objectIncludesKeys(['foo']);
```

## hasType
```js
  const {expect} = require('assertior');
  expect.soft({foo: 'bar'}).hasType('object');
  expect.soft([]).hasType('array');
  expect.soft(null).hasType('null');
```