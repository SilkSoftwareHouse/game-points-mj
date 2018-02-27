import {
  handleActions
} from 'redux-actions';
import { Map, List } from 'immutable';

import ACTION from '@/redux/action-types';

const INITIAL_STATE = new Map({
  items: new List(),              // List of all items available in game
  gameLog: new List(),            // List of all actions performed in game
  playerItems: new List()         // List of items grouped by id
});

const reducer = handleActions({
  [ACTION.GET_GAME_SETTINGS](state, action) {
    return state
      .set('items', action.payload);
  },

  [ACTION.CLICK_ON_ITEM](state, action) {
    let itemModel = state.get('items').find(item => item.id === action.payload.id);

    if (!itemModel) return state;
    itemModel = itemModel
      .set('quantity', 1)     // One click add one item to gameLog (it may change in the future)
      .set('clickTimestamp', action.payload.timestamp);

    const gameLog = state.get('gameLog').insert(0, itemModel);

    const playerItems = gameLog
      .groupBy(item => item.id)
      .map(item => {
        const lastItem = item.first();                                  // First item have fresh clickTimestamp
        const quantity = item.reduce((sum, x) => sum + x.quantity, 0);  // Sum quantity of all items

        return lastItem.set('quantity', quantity);                      // Create item with last clickTimestamp and quantity of all items
      });

    return state
      .set('gameLog', gameLog)
      .set('playerItems', playerItems);
  },

  [ACTION.NEW_GAME](state) {
    // Clear everything except items
    return state
      .set('gameLog', new List())
      .set('playerItems', new List());
  }
}, INITIAL_STATE);

export default reducer;