import * as assert from 'assert';

function toEqual(expected, current, message?, isSoft = false) {
  if (!isSoft) {
    return assert.equal(expected, current, message);
  }
  try {
    assert.deepEqual(expected, current, message);
  } catch (error) {
    console.error(error);
  }
}

function toDeepEqual(expected, current, message?, isSoft = false) {
  if (!isSoft) {
    return assert.deepEqual(expected, current, message);
  }
  try {
    assert.deepEqual(expected, current, message);
  } catch (error) {
    console.error(error);
  }
}

function expect(expected, message?, _isSoft = false) {
  return {
    toEqual: function(current, toEqualMessage?) {
      toEqual(expected, current, message ? message : toEqualMessage, _isSoft);
    },
    toDeepEqual: function(current, toEqualMessage?) {
      toDeepEqual(expected, current, message ? message : toEqualMessage, _isSoft);
    },
  };
}

expect.soft = function(expected, message?) {
  return expect(expected, message, true);
};

export {
  expect
};
