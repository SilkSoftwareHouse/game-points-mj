import { combineReducers } from 'redux-immutable';

import { reducer as game } from '@/components/game';

const rootReducer = combineReducers({
  game
});

export default rootReducer;