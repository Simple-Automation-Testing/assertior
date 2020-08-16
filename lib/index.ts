import {
  toDeepEqual,
  toEqual,
  initStepDeclarator,
  toBeEmptyArray,
  toBeNotEmptyArray,
  objectIncludesKeys
} from './assertions.list';

let logger;

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
    }
  };
}

_expect.soft = function(expected, message?) {
  return _expect(expected, message, true);
};


interface IAssetionList {
  toEqual(actual: any, message?: string);
  toDeepEqual(actual: any, message?: string);
  toBeEmptyArray(message?: string);
  toBeNotEmptyArray(message?: string);
  objectIncludesKeys(keysList: string[], message?: string)
}

interface IExpectation {
  soft(expected: any, message?: string): IAssetionList;
  (expected, message?): IAssetionList;
}

const expect = _expect as IExpectation;

export {
  expect,
  initStepDeclarator
};
