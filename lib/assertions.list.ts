import * as assert from 'assert';
import {buildDefaultMessage} from './utils';

let _stepDeclarator = null;

function toEqual(expected, current, message?, _isSoft = false) {
  let resulter;
  try {
    assert.deepEqual(expected, current, message);
  } catch (error) {
    resulter = error;
  }
  if (_stepDeclarator) {
    _stepDeclarator(message ? message : buildDefaultMessage('to equal', expected, current), resulter, expected, current);
  }

  if (resulter && _isSoft) {
    if (!_stepDeclarator) {
      console.error(resulter);
    }
  } else if (resulter) {
    throw resulter;
  }
}

function toDeepEqual(expected, current, message?, _isSoft = false) {
  let resulter;

  try {
    assert.deepEqual(expected, current, message);
  } catch (error) {
    resulter = error;
  }

  if (_stepDeclarator) {
    _stepDeclarator(message ? message : buildDefaultMessage('to deep equal', expected, current), resulter, expected, current);
  }
  // console.log(resulter)

  if (resulter && _isSoft) {
    if (!_stepDeclarator) {
      console.error(resulter);
    }
  } else if (resulter) {
    throw resulter;
  }
}

interface IStepDeclarator {
  (stepAssertionName: string, error, expected, current)
}

function initStepDeclarator(stepDeclarator: IStepDeclarator) {
  _stepDeclarator = stepDeclarator;
}

export {
  toEqual,
  toDeepEqual,
  initStepDeclarator
};
