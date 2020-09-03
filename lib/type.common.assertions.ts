import {deepEqual} from 'assert';
import {buildDefaultMessage} from './utils';
import {postAssertCall} from './assertions.utils';
import {typesEnum, expectedArg, isType, getType} from './types';
import {AssertionError} from './error';

function toEqual(expected, actual, message?, _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to equal', expected, actual);
  if (expected !== actual) {
    resulter = new AssertionError({
      message,
      expected,
      actual,
      operator: 'toEqual'
    });
  }
  postAssertCall(resulter, message, expected, _isSoft, actual);
}

function toNotEqual(expected, actual, message?, _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to not equal', expected, actual);
  if (expected === actual) {
    resulter = new AssertionError({
      message,
      expected,
      actual,
      operator: 'toNotEqual'
    });
  }
  postAssertCall(resulter, message, expected, _isSoft, actual);
}

function toDeepEqual(expected, actual, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to deep equal', expected, actual);
  try {
    deepEqual(expected, actual, message);
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft, actual);
}

function toNotDeepEqual(expected, actual, message = '', _isSoft = false) {
  message = message ? message : buildDefaultMessage('to not deep equal', expected, actual);
  let resulter = new AssertionError({
    message,
    expected,
    actual,
    operator: 'toNotDeepEqual'
  });
  try {
    deepEqual(expected, actual, message);
  } catch (error) {
    resulter = null;
  }

  postAssertCall(resulter, message, expected, _isSoft, actual);
}

function hasType(expected: any, expectedType: expectedArg, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('has type', expected, expectedType);

  if (!(expectedType in typesEnum)) {
    resulter = new TypeError(`Type ${expectedType} does not exist, available types are: ${Object.keys(typesEnum).join(',')}`);
    return postAssertCall(resulter, message, expected, _isSoft, expectedType);
  }
  const hasTypeResult = isType(expected, expectedType);
  if (!hasTypeResult) {
    resulter = new AssertionError({
      message,
      expected: getType(expected),
      actual: expectedType,
      operator: 'hasType'
    });
    return postAssertCall(resulter, message, expected, _isSoft, expectedType);
  }
  return postAssertCall(resulter, message, expected, _isSoft, expectedType);
}

export {
  toEqual,
  toDeepEqual,
  hasType,
  toNotEqual,
  toNotDeepEqual
};
