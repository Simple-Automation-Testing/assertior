import {AssertionError} from 'assert';
import {buildDefaultMessage, buildTypeErrorMessage} from './utils';
import {postAssertCall, _initStepDeclarator} from './assertions.utils';


function toBeNotEmptyArray(expected, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be not empty array', expected);
  try {
    if (!Array.isArray(expected)) {
      throw new TypeError(buildTypeErrorMessage('array', expected));
    }
    if (!expected.length) {
      throw new AssertionError({message: `${message}`, expected});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function toBeEmptyArray(expected, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be empty array', expected);
  try {
    if (!Array.isArray(expected)) {
      throw new TypeError(buildTypeErrorMessage('array', expected));
    }
    if (expected.length) {
      throw new AssertionError({message: `${message}`, expected, actual: []});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

export {
  toBeEmptyArray,
  toBeNotEmptyArray
};
