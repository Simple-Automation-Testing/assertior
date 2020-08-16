import {deepEqual, equal} from 'assert';
import {buildDefaultMessage} from './utils';
import {postAssertCall} from './assertions.utils';

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

export {
  toEqual,
  toDeepEqual
};
