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
  * [toNotEqual](#tonotequal)
  * [toNotDeepEqual](#tonotdeepequal)
  * [toBeEmptyArray](#tobeemptyarray)
  * [toBeNotEmptyArray](#tobenotemptyarray)
  * [objectIncludesKeys](#objectincludeskeys)
  * [hasType](#hastype)
  * [stringNotIncludesSubstring](#stringnotincludesubstring)
  * [stringIncludesSubstring](#stringincludesubstring)
  * [objectIsNotEmpty](#objectisnotempty)
  * [objectIsEmpty](#objectisempty)

# expect
## toDeepEqual
```js
  const {expect} = require('assertior');
  expect([{foo: 'bar'}]).toDeepEqual([{foo: 'bar'}]);
```

## toNotDeepEqual
```js
  const {expect} = require('assertior');
  expect([{foo: 'bar'}]).toNotDeepEqual([{foo: 'foo'}]);
```

## toEqual
```js
  const {expect} = require('assertior');
  expect('bar').toEqual('bar');
```

## toNotEqual
```js
  const {expect} = require('assertior');
  expect('bar').toNotEqual('foo');
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

## stringIncludesSubstring
```js
  const {expect} = require('assertior');
  expect('foo').stringIncludesSubstring('foo');
```

## stringNotIncludesSubstring
```js
  const {expect} = require('assertior');
  expect('foo').stringNotIncludesSubstring('foo');
```

## objectIsNotEmpty
```js
  const {expect} = require('assertior');
  expect({a: 1}).objectIsNotEmpty('foo');
```

## objectIsEmpty
```js
  const {expect} = require('assertior');
  expect({a: 1}).objectIsEmpty('foo');
```

## stringIsNotEmpty
```js
  const {expect} = require('assertior');
  expect('test').stringIsNotEmpty();
```

## stringIsEmpty
```js
  const {expect} = require('assertior');
  expect('').stringIsNotEmpty();
```

# expect.soft
## toEqual
```js
  const {expect} = require('assertior');
  expect.soft('bar').toEqual('bar');
```

## toDeepEqual
```js
  const {expect} = require('assertior');
  expect.soft({a: 'bar'}).toDeepEqual({a: 'bar'});
```

## toNotEqual
```js
  const {expect} = require('assertior');
  expect.soft('bar').toNotEqual('foo');
```

## toNotDeepEqual
```js
  const {expect} = require('assertior');
  expect.soft([{a: 'foo'}]).toNotDeepEqual([{a: 'bar'}]);
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

## stringIncludesSubstring
```js
  const {expect} = require('assertior');
  expect.soft('foo').stringIncludesSubstring('foo');
```

## stringNotIncludesSubstring
```js
  const {expect} = require('assertior');
  expect.soft('foo').stringNotIncludesSubstring('foo');
```

## objectIsNotEmpty
```js
  const {expect} = require('assertior');
  expect.soft({a: 1}).objectIsNotEmpty('foo');
```

## objectIsEmpty
```js
  const {expect} = require('assertior');
  expect.soft({a: 1}).objectIsEmpty('foo');
```

## stringIsNotEmpty
```js
  const {expect} = require('assertior');
  expect.soft('test').stringIsNotEmpty();
```

## stringIsEmpty
```js
  const {expect} = require('assertior');
  expect.soft('').stringIsNotEmpty();
```