import { Record } from 'immutable';

const DEFAULT_VALUES = {
  quantity: 0,
  points: 0
};

class BonusModel extends Record(DEFAULT_VALUES) {
  /**
   * Check if this bonus is empty bonus (with no result when applied)
   * @returns {boolean}
   */
  isEmpty() {
    return this.quantity === 0 && this.points === 0;
  }
}

export default BonusModel;