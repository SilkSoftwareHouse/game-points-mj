import { createSelector } from 'reselect';

const sortDesc = (a, b) => {
  if (a < b) return 1;
  if (a === b) return 0;
  if (a > b) return -1;
};

export const gameSelector = state => state.get('game');

export const gameItemsSelector = createSelector(gameSelector, state => state.get('items'));
export const gameLogSelector = createSelector(gameSelector, state => state.get('gameLog'));
export const playerItemsRawSelector = createSelector(gameSelector, state => state.get('playerItems'));

export const playerItemsSelector = createSelector(playerItemsRawSelector, state =>
  state
    // Sort DESC by timestamp
    .sortBy(value => value.clickTimestamp, sortDesc)
    // Convert to sequence (to easily render in JSX)
    .valueSeq()
);

export const playerTotalPointsSelector = createSelector(playerItemsSelector, state => {
  let points = 0;
  state.forEach(item => points += item.calculatePoints());

  return points;
});

export const playerTotalPointsWithoutBonusSelector = createSelector(playerItemsSelector, state => {
  let points = 0;
  state.forEach(item => points += item.calculatePointsWithoutBonus());

  return points;
});