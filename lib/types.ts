// eslint-disable-next-line max-len
type expectedArg = 'object' | 'array' | 'set' | 'function' | 'asyncFunction' | 'promise' | 'null' | 'string' | 'undefined' | 'symbol' | 'number' | 'boolean';

const typesEnum = {
  object: '[object Object]',
  array: '[object Array]',
  set: '[object Set]',
  function: '[object Function]',
  asyncFunction: '[object AsyncFunction]',
  promise: '[object Promise]',

  null: '[object Null]',
  string: '[object String]',
  undefined: '[object Undefined]',
  symbol: '[object Symbol]',
  number: '[object Number]',
  boolean: '[object Boolean]'
};

function isObject(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Object]';
}

function isArray(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

function isNull(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Null]';
}

function isString(arg: any) {
  return Object.prototype.toString.call(arg) === '[object String]';
}

function isUndefined(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Undefined]';
}

function isSet(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Set]';
}

function isSymbol(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Symbol]';
}

function isNumber(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Number]';
}

function isBoolean(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Boolean]';
}

function isFunction(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Function]';
}

function isAsyncFunction(arg: any) {
  return Object.prototype.toString.call(arg) === '[object AsyncFunction]';
}

function isPromise(arg: any) {
  return Object.prototype.toString.call(arg) === '[object Promise]';
}

function isType(arg, typeArg: expectedArg) {
  return Object.prototype.toString.call(arg) === typesEnum[typeArg];
}

export {
  isArray,
  isObject,
  isNull,
  isString,
  isSet,
  isUndefined,
  isNumber,
  isPromise,
  isBoolean,
  isSymbol,
  isFunction,
  isAsyncFunction,
  typesEnum,
  expectedArg,
  isType
};
