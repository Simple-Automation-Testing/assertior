import {AssertionError} from './error';
import {buildDefaultMessage, buildTypeErrorMessage} from './utils';
import {isString} from './types';
import {postAssertCall, _initStepDeclarator} from './assertions.utils';

function stringIncludesSubstring(expected: string, actual: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to includes substring', expected, actual);

  if (!isString(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('string', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  if (!isString(actual)) {
    resulter = new TypeError(buildTypeErrorMessage('string', actual));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  const isIncludes = expected.includes(actual);
  if (!isIncludes) {
    resulter = new AssertionError({
      message,
      expected,
      actual,
      operator: 'stringIncludesSubstring'
    });
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function stringNotIncludesSubstring(expected: string, actual: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to not includes substring', expected, actual);

  if (!isString(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('string', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  if (!isString(actual)) {
    resulter = new TypeError(buildTypeErrorMessage('string', actual));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  const isIncludes = expected.includes(actual);
  if (isIncludes) {
    resulter = new AssertionError({
      message,
      expected,
      actual,
      operator: 'stringNotIncludesSubstring'
    });
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function stringIsNotEmpty(expected: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be not empty', expected);

  if (!isString(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('string', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  if (!expected.length) {
    resulter = new AssertionError({
      message,
      expected,
      actual: '',
      operator: 'stringIsNotEmpty'
    });
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function stringIsEmpty(expected: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be empty', expected);
  if (!isString(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('string', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  if (expected.length) {
    resulter = new AssertionError({
      message,
      expected: '',
      actual: expected,
      operator: 'stringIsEmpty'
    });
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function toMatchRegex(expected: string, actual: RegExp, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to match regex', expected);
  if (!isString(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('string', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  if (!expected.match(actual)) {
    resulter = new AssertionError({
      message,
      expected: '',
      actual: expected,
      operator: 'toMatchRegex'
    });
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

export {
  stringIncludesSubstring,
  stringNotIncludesSubstring,
  stringIsNotEmpty,
  stringIsEmpty,
  toMatchRegex
};
