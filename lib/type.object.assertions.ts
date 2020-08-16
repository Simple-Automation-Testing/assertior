import {AssertionError} from 'assert';
import {buildDefaultMessage, buildTypeErrorMessage, isObject, isArray} from './utils';
import {postAssertCall, _initStepDeclarator} from './assertions.utils';


function objectIncludesKeys(expected, actual, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to includes keys', expected, actual);
  try {
    if (!isObject(expected)) {
      throw new TypeError(buildTypeErrorMessage('object', expected));
    }
    if (!isArray(actual)) {
      throw new TypeError(buildTypeErrorMessage('array', actual));
    }
    if (expected) {
      const targetKeysList = Object.keys(expected);
      const keysList = actual.filter((expectedKey) => !targetKeysList.includes(expectedKey));
      if (keysList.length) {
        throw new AssertionError({message: `${message}`, expected: Object.keys(expected), actual});
      }
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

export {
  objectIncludesKeys
};
