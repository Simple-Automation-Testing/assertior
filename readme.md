# assertior

##### 🛠 Development in progress

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

- [expect.soft](#expectsoft)
- [expect](#expect)
  * [toDeepEqual](#todeepequal)
  * [toEqual](#toequal)
  * [toNotEqual](#tonotequal)
  * [isGreaterThan](#isgreaterthan)
  * [toNotDeepEqual](#tonotdeepequal)
  * [toBeEmptyArray](#tobeemptyarray)
  * [arrayHasLengthAbove](#arrayhaslengthabove)
  * [arrayIncludesMembers](#arrayincludesmembers)
  * [arrayNotIncludesMembers](#arraynotincludesmembers)
  * [toBeNotEmptyArray](#tobenotemptyarray)
  * [toMatchRegex](#tomatchregex)
  * [objectIncludesKeys](#objectincludeskeys)
  * [hasType](#hastype)
  * [stringNotIncludesSubstring](#stringnotincludesubstring)
  * [stringIncludesSubstring](#stringincludesubstring)
  * [objectIsNotEmpty](#objectisnotempty)
  * [objectIsEmpty](#objectisempty)
  * [stringIsEmpty](#stringisempty)
  * [toBePromise](#tobepromise)
  * [toBeSymbol](#tobesymbol)
  * [toBeBool](#tobebool)
  * [toBeAsyncFunction](#tobeasyncfunction)
  * [toBeFunction](#tobefunction)
  * [toBeSet](#tobeset)
  * [toBeUndefined](#tobeundefined)
  * [toBeNumber](#tobenumber)
  * [toBeNull](#tobenull)
  * [toBeArray](#tobearray)
  * [toBeObject](#tobeobject)
  * [toBeString](#tobestring)

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

## isGreaterThan

```js
  const {expect} = require('assertior');
  expect(10).isGreaterThan(9);
```

## arrayHasLengthAbove

```js
  const {expect} = require('assertior');
  expect([1, 2, 3]).arrayHasLengthAbove(2);
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

## isLessThan

```js
  const {expect} = require('assertior');
  expect(9).isLessThan(10);
```

## stringIsEmpty

```js
  const {expect} = require('assertior');
  expect('').stringIsEmpty();
```

## toBePromise

```js
  const {expect} = require('assertior');
  expect(Promise.resolve('test')).toBePromise;
```

## toBeSymbol

```js
  const {expect} = require('assertior');
  expect(Symbol('test')).toBeSymbol;
```

## toBeArray

```js
  const {expect} = require('assertior');
  expect([]).toBeArray;
```

## toBeBool

```js
  const {expect} = require('assertior');
  expect(false).toBeBool;
```

## toBeAsyncFunction

```js
  const {expect} = require('assertior');
  expect(async () => ({})).toBeAsyncFunction;
```

## toBeFunction

```js
  const {expect} = require('assertior');
  expect(() => ({})).toBeFunction;
```

## toBeSet

```js
  const {expect} = require('assertior');
  expect(new Set()).toBeSet;
```

## toBeUndefined

```js
  const {expect} = require('assertior');
  expect(undefined).toBeUndefined;
```

## toBeNumber

```js
  const {expect} = require('assertior');
  expect(1).toBeNumber;
```

## toBeNull

```js
  const {expect} = require('assertior');
  expect(null).toBeNull;
```

## toBeObject

```js
  const {expect} = require('assertior');
  expect({}).toBeObject;
```

## toBeString

```js
  const {expect} = require('assertior');
  expect('').toBeString;
```

## arrayIncludesMembers

```js
  const {expect} = require('assertior');
  expect([12,23]).arrayIncludesMembers(23);
```

## arrayNotIncludesMembers

```js
  const {expect} = require('assertior');
  expect([12,23]).arrayNotIncludesMembers(25);
```


## toMatchRegex

```js
  const {expect} = require('assertior');
  expect('test').toMatchRegex(/t/ig);
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
  expect.soft('').stringIsEmpty();
```

## isGreaterThan

```js
  const {expect} = require('assertior');
  expect.soft(10).isGreaterThan(9);
```

## isLessThan
```js
  const {expect} = require('assertior');
  expect.soft(9).isLessThan(10);
```

## toBePromise

```js
  const {expect} = require('assertior');
  expect.soft(Promise.resolve('test')).toBePromise;
```

## toBeSymbol

```js
  const {expect} = require('assertior');
  expect.soft(Symbol('test')).toBeSymbol;
```

## toBeBool

```js
  const {expect} = require('assertior');
  expect.soft(false).toBeBool;
```

## toBeAsyncFunction

```js
  const {expect} = require('assertior');
  expect.soft(async () => ({})).toBeAsyncFunction;
```

## toBeFunction

```js
  const {expect} = require('assertior');
  expect.soft(() => ({})).toBeFunction;
```

## toBeSet

```js
  const {expect} = require('assertior');
  expect.soft(new Set()).toBeSet;
```

## toBeUndefined

```js
  const {expect} = require('assertior');
  expect.soft(undefined).toBeUndefined;
```

## toBeNumber

```js
  const {expect} = require('assertior');
  expect.soft(1).toBeNumber;
```

## toBeNull

```js
  const {expect} = require('assertior');
  expect.soft(null).toBeNull;
```

## toBeObject

```js
  const {expect} = require('assertior');
  expect.soft({}).toBeObject;
```

## toBeString

```js
  const {expect} = require('assertior');
  expect.soft('').toBeString;
```

## toBeArray

```js
  const {expect} = require('assertior');
  expect.soft([]).toBeArray;
```

## toMatchRegex

```js
  const {expect} = require('assertior');
  expect.soft('test').toMatchRegex(/t/ig);
```

## arrayIncludesMembers

```js
  const {expect} = require('assertior');
  expect.soft([12,23]).arrayIncludesMembers(23);
```

## arrayNotIncludesMembers

```js
  const {expect} = require('assertior');
  expect.soft([12,23]).arrayNotIncludesMembers(25);
```

## arrayHasLengthAbove

```js
  const {expect} = require('assertior');
  expect.soft([1, 2, 3]).arrayHasLengthAbove(2);
```
