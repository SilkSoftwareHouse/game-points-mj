import {
  applyMiddleware,
  createStore
} from 'redux';
import { Map } from 'immutable';

import middlewares from '@/redux/middlewares';
import rootReducer from '@/redux/root-reducer';

const initialState = Map();
const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;