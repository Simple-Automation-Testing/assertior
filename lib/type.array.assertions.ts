import {AssertionError} from './error';
import {buildDefaultMessage, buildTypeErrorMessage} from './utils';
import {postAssertCall, _initStepDeclarator} from './assertions.utils';

function toBeNotEmptyArray(expected, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be not empty array', expected);

  if (!Array.isArray(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('array', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  if (!expected.length) {
    resulter = new AssertionError({
      message: `${message}`,
      expected: `Expected array length > 0`,
      actual: `Actual array length ${expected.length}`,
      operator: 'toBeNotEmptyArray'
    });
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  return postAssertCall(resulter, message, expected, _isSoft);
}

function toBeEmptyArray(expected, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be empty array', expected);
  if (!Array.isArray(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('array', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  if (expected.length) {
    resulter = new AssertionError({
      message: `${message}`,
      expected: `Expected array length 0`,
      actual: `Actual array length ${expected.length}`,
      operator: 'toBeEmptyArray'
    });
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function arrayIncludesMembers(expected, actual, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to include', expected, actual);
  if (!Array.isArray(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('array', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  actual = Array.isArray(actual) ? actual : [actual];
  if (!actual.every((item) => expected.includes(item))) {
    resulter = new AssertionError({
      message: `${message}`,
      expected: `Expected array length 0`,
      actual: `Actual array length ${expected.length}`,
      operator: 'arrayIncludeMember'
    });
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function arrayNotIncludesMembers(expected, actual, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to not include', expected, actual);
  if (!Array.isArray(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('array', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  actual = Array.isArray(actual) ? actual : [actual];
  if (actual.every((item) => expected.includes(item))) {
    resulter = new AssertionError({
      message: `${message}`,
      expected,
      actual,
      operator: 'arrayNotIncludesMembers'
    });
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function arrayHasLengthAbove(expected, actual, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to have length above', expected, actual);
  if (!Array.isArray(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('array', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  if (expected.length <= actual) {
    resulter = new AssertionError({
      message: `${message}`,
      expected: actual,
      actual: expected.length,
      operator: 'arrayHasLengthAbove'
    });
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

export {
  toBeEmptyArray,
  toBeNotEmptyArray,
  arrayIncludesMembers,
  arrayNotIncludesMembers,
  arrayHasLengthAbove
};
