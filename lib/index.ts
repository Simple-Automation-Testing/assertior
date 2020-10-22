import {objectIncludesKeys, objectIsNotEmpty, objectIsEmpty} from './type.object.assertions';
import {toDeepEqual, toEqual, hasType, toNotDeepEqual, toNotEqual, toExist} from './type.common.assertions';
import {
  toBeEmptyArray,
  toBeNotEmptyArray,
  arrayIncludesMembers,
  arrayNotIncludesMembers,
  arrayHasLengthAbove
} from './type.array.assertions';
import {isGreaterThan, isLessThan} from './type.number.asssertions';
import {
  stringIncludesSubstring,
  stringNotIncludesSubstring,
  stringIsEmpty,
  stringIsNotEmpty,
  toMatchRegex
} from './type.string.assertions';
import {_initStepDeclarator} from './assertions.utils';
import {AssertionError} from './error';

interface IStepDeclarator {
  (stepAssertionName: string, error, expected, actual)
}

function initStepDeclarator(stepDeclarator: IStepDeclarator) {
  _initStepDeclarator(stepDeclarator);
}

function _expect(actual, message?, _isSoft = false) {
  return {
    get toExist() {
      return toExist(actual, message, _isSoft);
    },
    get toBeString() {
      return hasType(actual, 'string', message, _isSoft);
    },
    get toBeArray() {
      return hasType(actual, 'array', message, _isSoft);
    },
    get toBeObject() {
      return hasType(actual, 'object', message, _isSoft);
    },
    get toBeNull() {
      return hasType(actual, 'null', message, _isSoft);
    },
    get toBeNumber() {
      return hasType(actual, 'number', message, _isSoft);
    },
    get toBeUndefined() {
      return hasType(actual, 'undefined', message, _isSoft);
    },
    get toBeSet() {
      return hasType(actual, 'set', message, _isSoft);
    },
    get toBeFunction() {
      return hasType(actual, 'function', message, _isSoft);
    },
    get toBeAsyncFunction() {
      return hasType(actual, 'asyncFunction', message, _isSoft);
    },
    get toBePromise() {
      return hasType(actual, 'promise', message, _isSoft);
    },
    get toBeBool() {
      return hasType(actual, 'boolean', message, _isSoft);
    },
    get toBeSymbol() {
      return hasType(actual, 'symbol', message, _isSoft);
    },
    toEqual(expected, toEqualMessage?: string) {
      toEqual(actual, expected, message || toEqualMessage, _isSoft);
    },
    toDeepEqual(expected, toEqualMessage?: string) {
      toDeepEqual(actual, expected, message || toEqualMessage, _isSoft);
    },
    toBeEmptyArray(toEqualMessage?: string) {
      toBeEmptyArray(actual, message || toEqualMessage, _isSoft);
    },
    toBeNotEmptyArray(toEqualMessage?: string) {
      toBeNotEmptyArray(actual, message || toEqualMessage, _isSoft);
    },
    objectIncludesKeys(expected: string[], toEqualMessage?: string) {
      objectIncludesKeys(actual, expected, message || toEqualMessage, _isSoft);
    },
    hasType(expectedType, toEqualMessage?: string) {
      hasType(actual, expectedType, message || toEqualMessage, _isSoft);
    },
    stringIncludesSubstring(subString: string, toEqualMessage?) {
      stringIncludesSubstring(actual, subString, message || toEqualMessage, _isSoft);
    },
    stringNotIncludesSubstring(subString: string, toEqualMessage?) {
      stringNotIncludesSubstring(actual, subString, message || toEqualMessage, _isSoft);
    },
    toNotEqual(expected, toEqualMessage?: string) {
      toNotEqual(actual, expected, message || toEqualMessage, _isSoft);
    },
    toNotDeepEqual(expected, toEqualMessage?: string) {
      toNotDeepEqual(actual, expected, message || toEqualMessage, _isSoft);
    },
    objectIsNotEmpty(toEqualMessage?: string) {
      objectIsNotEmpty(actual, message || toEqualMessage, _isSoft);
    },
    objectIsEmpty(toEqualMessage?: string) {
      objectIsEmpty(actual, message || toEqualMessage, _isSoft);
    },
    stringIsEmpty(toEqualMessage?: string) {
      stringIsEmpty(actual, message || toEqualMessage, _isSoft);
    },
    stringIsNotEmpty(toEqualMessage?: string) {
      stringIsNotEmpty(actual, message || toEqualMessage, _isSoft);
    },
    isGreaterThan(expected, toEqualMessage?: string) {
      isGreaterThan(actual, expected, message || toEqualMessage, _isSoft);
    },
    isLessThan(expected, toEqualMessage?: string) {
      isLessThan(actual, expected, message || toEqualMessage, _isSoft);
    },
    toMatchRegex(expected, toEqualMessage?: string) {
      toMatchRegex(actual, expected, message || toEqualMessage, _isSoft);
    },
    arrayNotIncludesMembers(expected, toEqualMessage?: string) {
      arrayNotIncludesMembers(actual, expected, message || toEqualMessage, _isSoft);
    },
    arrayIncludesMembers(expected, toEqualMessage?: string) {
      arrayIncludesMembers(actual, expected, message || toEqualMessage, _isSoft);
    },
    arrayHasLengthAbove(expected, toEqualMessage?: string) {
      arrayHasLengthAbove(actual, expected, message || toEqualMessage, _isSoft);
    }
  };
}

interface IAssetionList {
  toEqual(actual: any, message?: string);
  toNotEqual(actual: any, message?: string);
  toDeepEqual(actual: any, message?: string);
  toNotDeepEqual(actual: any, message?: string);
  toBeEmptyArray(message?: string);
  toBeNotEmptyArray(message?: string);
  objectIsNotEmpty(message?: string);
  objectIsEmpty(message?: string);
  stringIsEmpty(message?: string);
  stringIsNotEmpty(message?: string);
  hasType(expectedType, toEqualMessage?: string);
  objectIncludesKeys(keysList: string[], message?: string);
  stringIncludesSubstring(subString: string, message?: string);
  stringNotIncludesSubstring(subString: string, message?: string);
  isLessThan(actual: any, message?: string);
  isGreaterThan(actual: any, message?: string);
  toMatchRegex(actual: RegExp, message?: string);
  arrayIncludesMembers(actual: any | any[], message?: string);
  arrayNotIncludesMembers(actual: any | any[], message?: string);
  arrayHasLengthAbove(actual: number, message?: string);
  toExist;
  toBeString;
  toBeObject;
  toBeNull;
  toBeNumber;
  toBeUndefined;
  toBeSet;
  toBeFunction;
  toBeAsyncFunction;
  toBePromise;
  toBeBool;
  toBeSymbol;
  toBeArray;
}

interface IExpectation {
  soft(expected: any, message?: string): IAssetionList;
  (expected, message?): IAssetionList;
}

const expect: IExpectation = function(expected, message?): IAssetionList {
  return _expect(expected, message);
};

expect.soft = function(expected, message?): IAssetionList {
  return _expect(expected, message, true);
};

export {
  expect,
  initStepDeclarator,
  AssertionError
};
