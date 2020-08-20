import {objectIncludesKeys} from './type.object.assertions';
import {stringIncludesSubstring, stringNotIncludesSubstring} from './type.string.assertions';
import {toDeepEqual, toEqual, hasType, toNotDeepEqual, toNotEqual} from './type.common.assertions';
import {toBeEmptyArray, toBeNotEmptyArray} from './type.array.assertions';
import {_initStepDeclarator} from './assertions.utils';

interface IStepDeclarator {
  (stepAssertionName: string, error, expected, actual)
}

function initStepDeclarator(stepDeclarator: IStepDeclarator) {
  _initStepDeclarator(stepDeclarator);
}

function _expect(expected, message?, _isSoft = false) {
  return {
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
  hasType(expectedType, toEqualMessage?: string);
  objectIncludesKeys(keysList: string[], message?: string);
  stringIncludesSubstring(subString: string, message?: string);
  stringNotIncludesSubstring(subString: string, message?: string);
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
  initStepDeclarator
};
