function stubConsoleError() {
  let called = false;
  const errorLog = console.error;

  console.error = function() {
    called = true;
  };
  return {
    restore() {
      console.error = errorLog.bind(console);
    },
    dropCall() {
      called = false;
    },
    getCallCondition() {
      return called;
    }
  };
}

declare const allure;

function allureStep(stepAssertionName: string, error, expected, current) {
  const step = allure.startStep(stepAssertionName);
  allure.attachment('Expected value', JSON.stringify(expected, null, 2), 'application/json');
  allure.attachment('Current value', JSON.stringify(current, null, 2), 'application/json');
  if (error) {
    allure.attachment('Error', JSON.stringify(error, null, 2), 'application/json');
  }
  step.step.stepResult.status = error ? 'broken' : 'passed';
  step.endStep();
}

export {
  stubConsoleError,
  allureStep
};
