import { createLogger } from 'redux-logger';

const middlewares = [];

if (__DEV__) {  // eslint-disable-line no-undef
  middlewares.push(createLogger());
}

export default middlewares;