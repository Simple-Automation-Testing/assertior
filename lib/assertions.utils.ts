let _stepDeclarator;

function postAssertCall(resulter, message, expected, _isSoft, actual?) {
  if (_stepDeclarator) {
    _stepDeclarator(message, resulter, expected, actual);
  }

  if (resulter && _isSoft) {
    if (!_stepDeclarator) {
      console.error(resulter);
    }
  } else if (resulter) {
    throw resulter;
  }
}

function _initStepDeclarator(stepDeclarator) {
  _stepDeclarator = stepDeclarator;
}

export {
  postAssertCall,
  _initStepDeclarator
};
