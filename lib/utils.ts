function reformatMessageArguments(argument) {
  if ((typeof argument === 'string') && argument.length === 0) {
    return argument;
  }
  const stringified = JSON.stringify(argument);
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

function isArray(argument) {
  return Array.isArray(argument);
}

function buildTypeErrorMessage(expectedType: string, argument) {
  return `Expected argument should be a ${expectedType}, but argument is ${reformatMessageArguments(argument)}`;
}

export {
  buildDefaultMessage,
  reformatMessageArguments,
  isObject,
  isArray,
  buildTypeErrorMessage,
};
