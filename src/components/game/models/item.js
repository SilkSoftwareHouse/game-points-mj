import { Record } from 'immutable';

import BonusModel from './bonus';

const DEFAULT_VALUES = {
  id: '',                   // Unique ID of item
  name: '',                 // Name of item
  quantity: 0,              // Items collected
  unitPoints: 0,            // How much points player earn for one click (without bonus)
  bonus: new BonusModel(),  // Empty bonus by default (with 0 extra points for 0 items)
  clickTimestamp: 0         // Item is not clicked (when quantity is > 0 it means last click timestamp)
};

/**
 * Domain model which describe every item in app
 * By move calculations logic to model we increase flexibility of further modifications
 * If we want to change the logic of calculating points it should be changed in only one place
 */
class ItemModel extends Record(DEFAULT_VALUES) {
  /**
   * Calculate points without bonus points
   * @returns {number}
   */
  calculatePointsWithoutBonus() {
    return this.quantity * this.unitPoints;
  }

  /**
   * Calculate points including bonus points
   * @returns {number}
   */
  calculatePoints() {
    if (this.bonus.isEmpty() || this.quantity < this.bonus.quantity) {
      return this.calculatePointsWithoutBonus();
    } else {
      const quantityWithoutBonus = this.quantity - this.bonus.quantity;
      return this.bonus.points + (quantityWithoutBonus * this.unitPoints);
    }
  }
}

export default ItemModel;