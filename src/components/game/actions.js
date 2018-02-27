import { createAction } from 'redux-actions';
import { List } from 'immutable';

import ACTION from '@/redux/action-types';
import gameConfig from '@/game-config';
import ItemModel from './models/item';
import BonusModel from './models/bonus';

/**
 * Get game config
 * In real game it probably comes from REST API, action is right place to make request for data
 */
export const fetchGameSettings = createAction(ACTION.GET_GAME_SETTINGS, function() {
  const gameItems = gameConfig.gameItems;
  let items = [];

  for (let item in gameItems) {
    let itemModel = new ItemModel({
      id: gameItems[item].id,
      name: gameItems[item].name,
      unitPoints: gameItems[item].unitPoints
    });

    if (gameItems[item].bonus) {
      let bonusModel = new BonusModel({
        quantity: gameItems[item].bonus.quantity,
        points: gameItems[item].bonus.points
      });

      itemModel = itemModel.set('bonus', bonusModel);
    }

    items.push(itemModel);
  }

  return new List(items);
});

/**
 * Handle click on item in game
 */
export const clickOnItem = createAction(ACTION.CLICK_ON_ITEM, function(itemId) {
  return {
    id: itemId,
    timestamp: new Date().getTime()
  };
});

/**
 * Clear store data and begin new game
 */
export const newGame = createAction(ACTION.NEW_GAME);