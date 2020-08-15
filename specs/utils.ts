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

export {
  stubConsoleError
};
