import {isSymbol} from './types';

function reformatMessageArguments(argument) {
  if ((typeof argument === 'string') && argument.length === 0) {
    return argument;
  }

  const stringified = argument === undefined ? 'undefined' : isSymbol(argument) ? argument.toString() : JSON.stringify(argument);

  if (stringified.length > 10) {
    return `${stringified.split('').splice(0, 10).join('')}...`;
  }
  return stringified;
}

function buildDefaultMessage(condition, expected, actual = '') {
  return `Expect that ${reformatMessageArguments(expected)} ${condition} ${reformatMessageArguments(actual)}`;
}

function isObject(argument) {
  return Object.prototype.toString.call(argument) === '[object Object]';
}


function buildTypeErrorMessage(expectedType: string, argument) {
  return `Expected argument should be a ${expectedType}, but argument is ${reformatMessageArguments(argument)}`;
}

export {
  buildDefaultMessage,
  reformatMessageArguments,
  isObject,
  buildTypeErrorMessage,
};
