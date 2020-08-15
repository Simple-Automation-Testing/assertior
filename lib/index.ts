import {toDeepEqual, toEqual} from './assertions.list';

let logger;

function _expect(expected, message?, _isSoft = false) {
  return {
    toEqual: function(current, toEqualMessage?) {
      toEqual(expected, current, message ? message : toEqualMessage, _isSoft);
    },
    toDeepEqual: function(current, toEqualMessage?) {
      toDeepEqual(expected, current, message ? message : toEqualMessage, _isSoft);
    },
  };
}

_expect.soft = function(expected, message?) {
  return _expect(expected, message, true);
};


interface IAssetionList {
  toEqual(current: any, message?: string);
  toDeepEqual(current: any, message?: string);
}

interface IExpectation {
  soft(expected: any, message?: string): IAssetionList;
  (expected, message?): IAssetionList;
}

const expect = _expect as IExpectation;

export {
  expect
};
