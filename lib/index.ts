import {objectIncludesKeys, objectIsNotEmpty, objectIsEmpty} from './type.object.assertions';
import {toDeepEqual, toEqual, hasType, toNotDeepEqual, toNotEqual} from './type.common.assertions';
import {toBeEmptyArray, toBeNotEmptyArray} from './type.array.assertions';
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

function _expect(expected, message?, _isSoft = false) {
  return {
    get toBeString() {
      return hasType(expected, 'string', message, _isSoft);
    },
    get toBeArray() {
      return hasType(expected, 'array', message, _isSoft);
    },
    get toBeObject() {
      return hasType(expected, 'object', message, _isSoft);
    },
    get toBeNull() {
      return hasType(expected, 'null', message, _isSoft);
    },
    get toBeNumber() {
      return hasType(expected, 'number', message, _isSoft);
    },
    get toBeUndefined() {
      return hasType(expected, 'undefined', message, _isSoft);
    },
    get toBeSet() {
      return hasType(expected, 'set', message, _isSoft);
    },
    get toBeFunction() {
      return hasType(expected, 'function', message, _isSoft);
    },
    get toBeAsyncFunction() {
      return hasType(expected, 'asyncFunction', message, _isSoft);
    },
    get toBePromise() {
      return hasType(expected, 'promise', message, _isSoft);
    },
    get toBeBool() {
      return hasType(expected, 'boolean', message, _isSoft);
    },
    get toBeSymbol() {
      return hasType(expected, 'symbol', message, _isSoft);
    },
    toEqual(actual, toEqualMessage?: string) {
      toEqual(expected, actual, message || toEqualMessage, _isSoft);
    },
    toDeepEqual(actual, toEqualMessage?: string) {
      toDeepEqual(expected, actual, message || toEqualMessage, _isSoft);
    },
    toBeEmptyArray(toEqualMessage?: string) {
      toBeEmptyArray(expected, message || toEqualMessage, _isSoft);
    },
    toBeNotEmptyArray(toEqualMessage?: string) {
      toBeNotEmptyArray(expected, message || toEqualMessage, _isSoft);
    },
    objectIncludesKeys(actual: string[], toEqualMessage?: string) {
      objectIncludesKeys(expected, actual, message || toEqualMessage, _isSoft);
    },
    hasType(expectedType, toEqualMessage?: string) {
      hasType(expected, expectedType, message || toEqualMessage, _isSoft);
    },
    stringIncludesSubstring(subString: string, toEqualMessage?) {
      stringIncludesSubstring(expected, subString, message || toEqualMessage, _isSoft);
    },
    stringNotIncludesSubstring(subString: string, toEqualMessage?) {
      stringNotIncludesSubstring(expected, subString, message || toEqualMessage, _isSoft);
    },
    toNotEqual(actual, toEqualMessage?: string) {
      toNotEqual(expected, actual, message || toEqualMessage, _isSoft);
    },
    toNotDeepEqual(actual, toEqualMessage?: string) {
      toNotDeepEqual(expected, actual, message || toEqualMessage, _isSoft);
    },
    objectIsNotEmpty(toEqualMessage?: string) {
      objectIsNotEmpty(expected, message || toEqualMessage, _isSoft);
    },
    objectIsEmpty(toEqualMessage?: string) {
      objectIsEmpty(expected, message || toEqualMessage, _isSoft);
    },
    stringIsEmpty(toEqualMessage?: string) {
      stringIsEmpty(expected, message || toEqualMessage, _isSoft);
    },
    stringIsNotEmpty(toEqualMessage?: string) {
      stringIsNotEmpty(expected, message || toEqualMessage, _isSoft);
    },
    isGreaterThan(actual, toEqualMessage?: string) {
      isGreaterThan(expected, actual, message || toEqualMessage, _isSoft);
    },
    isLessThan(actual, toEqualMessage?: string) {
      isLessThan(expected, actual, message || toEqualMessage, _isSoft);
    },
    toMatchRegex(actual, toEqualMessage?: string) {
      toMatchRegex(expected, actual, message || toEqualMessage, _isSoft);
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
