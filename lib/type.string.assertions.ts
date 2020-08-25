import {AssertionError} from 'assert';
import {buildDefaultMessage, buildTypeErrorMessage} from './utils';
import {isString} from './types';
import {postAssertCall, _initStepDeclarator} from './assertions.utils';

function stringIncludesSubstring(expected: string, actual: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to includes substring', expected, actual);
  try {
    if (!isString(expected)) {
      throw new TypeError(buildTypeErrorMessage('string', expected));
    }
    if (!isString(actual)) {
      throw new TypeError(buildTypeErrorMessage('string', actual));
    }
    const isIncludes = expected.includes(actual);
    if (!isIncludes) {
      throw new AssertionError({message: `${message}`, expected, actual});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function stringNotIncludesSubstring(expected: string, actual: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to not includes substring', expected, actual);
  try {
    if (!isString(expected)) {
      throw new TypeError(buildTypeErrorMessage('string', expected));
    }
    if (!isString(actual)) {
      throw new TypeError(buildTypeErrorMessage('string', actual));
    }
    const isIncludes = expected.includes(actual);
    if (isIncludes) {
      throw new AssertionError({message: `${message}`, expected, actual});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function stringIsNotEmpty(expected: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be not empty', expected);
  try {
    if (!isString(expected)) {
      throw new TypeError(buildTypeErrorMessage('string', expected));
    }

    if (!expected.length) {
      throw new AssertionError({message: `${message}`, expected});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

function stringIsEmpty(expected: string, message = '', _isSoft = false) {
  let resulter;
  message = message ? message : buildDefaultMessage('to be empty', expected);
  try {
    if (!isString(expected)) {
      throw new TypeError(buildTypeErrorMessage('string', expected));
    }

    if (expected.length) {
      throw new AssertionError({message: `${message}`, expected});
    }
  } catch (error) {
    resulter = error;
  }

  postAssertCall(resulter, message, expected, _isSoft);
}

export {
  stringIncludesSubstring,
  stringNotIncludesSubstring,
  stringIsNotEmpty,
  stringIsEmpty
};
