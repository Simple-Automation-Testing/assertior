import {AssertionError as AE} from 'assert';

interface IAssertionError {
  message?: string;
  expected?: any;
  actual?: any;
  operator?: string;
}

class AssertionError extends AE {
  constructor({message, expected, actual, operator = 'equal'}: IAssertionError = {}) {
    super({message, expected, actual, operator});
    Error.captureStackTrace(this, AssertionError);
  }
}

export {
  AssertionError
};
