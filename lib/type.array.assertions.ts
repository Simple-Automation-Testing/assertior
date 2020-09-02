import {AssertionError} from 'assert';
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
    resulter = new AssertionError({message: `${message}`, expected});
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function toBeEmptyArray(expected, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be empty array', expected);
  if (!Array.isArray(expected)) {
    resulter = new TypeError(buildTypeErrorMessage('array', expected));
    return postAssertCall(resulter, message, expected, _isSoft);
  }
  if (expected.length) {
    resulter = new AssertionError({message: `${message}`, expected, actual: []});
    return postAssertCall(resulter, message, expected, _isSoft);
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

export {
  toBeEmptyArray,
  toBeNotEmptyArray
};
