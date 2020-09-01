import {AssertionError} from 'assert';
import {buildDefaultMessage, buildTypeErrorMessage} from './utils';
import {isNumber} from './types';
import {postAssertCall, _initStepDeclarator} from './assertions.utils';

function isGreaterThan(expected: number, actual: number, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be greater than', expected, actual);
  try {
    if (!isNumber(expected)) {
      throw new TypeError(buildTypeErrorMessage('number', expected));
    }
    if (!isNumber(actual)) {
      throw new TypeError(buildTypeErrorMessage('number', actual));
    }
    if (!(expected > actual)) {
      throw new AssertionError({message: `${message}`, expected, actual});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function isLessThan(expected: string, actual: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be less than', expected, actual);
  try {
    if (!isNumber(expected)) {
      throw new TypeError(buildTypeErrorMessage('number', expected));
    }
    if (!isNumber(actual)) {
      throw new TypeError(buildTypeErrorMessage('number', actual));
    }
    if (!(expected < actual)) {
      throw new AssertionError({message: `${message}`, expected, actual});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

export {
  isLessThan,
  isGreaterThan
};
