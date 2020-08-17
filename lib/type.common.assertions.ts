import {deepEqual, equal, AssertionError} from 'assert';
import {buildDefaultMessage} from './utils';
import {postAssertCall} from './assertions.utils';
import {typesEnum, expectedArg, isType} from './types';

function toEqual(expected, actual, message?, _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to equal', expected, actual);
  try {
    equal(expected, actual, message);
  } catch (error) {
    resulter = error;
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

function hasType(expected: any, expectedType: expectedArg, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('has type', expected, expectedType);
  try {
    if (!(expectedType in typesEnum)) {
      throw new TypeError(`Type ${expectedType} does not exist, available types are: ${Object.keys(typesEnum).join(',')}`);
    }
    const hasTypeResult = isType(expected, expectedType);
    if (!hasTypeResult) {
      throw new AssertionError({message, expected, actual: expectedType});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft, expectedType);
}

export {
  toEqual,
  toDeepEqual,
  hasType,
};
