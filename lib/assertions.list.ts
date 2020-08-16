
import {_initStepDeclarator} from './assertions.utils';

export * from './type.common.assertions';
export * from './type.array.assertions';
export * from './type.object.assertions';


interface IStepDeclarator {
  (stepAssertionName: string, error, expected, actual)
}

function initStepDeclarator(stepDeclarator: IStepDeclarator) {
  _initStepDeclarator(stepDeclarator);
}

export {
  initStepDeclarator
};
