import React, { Component } from 'react';

class GamePlace extends Component {
  handleItemClick = itemId => () => this.props.clickOnItem(itemId);

  render() {
    const { items } = this.props;

    return (
      <div className="p-3">
        <div className="card-deck game-place">
          {items.map((item, index) => (
            <div key={`item_${index}`} className="card text-white bg-info mb-3 game-item" onClick={this.handleItemClick(item.id)}>
              <div className="card-body">
                <div className="card-text text-center">
                  <div className="game-item__name">{item.name}</div>
                </div>
              </div>
              <div className="card-footer">
                <i className="fa fa-hand-o-up"></i>
                {' '}
                <span className="font-weight-bold">{item.unitPoints}</span> points
                {!item.bonus.isEmpty() && (
                  <span className="pull-right">
                    <i className="fa fa-medkit"></i>
                    {' '}
                    <span className="font-weight-bold">{item.bonus.points}</span> for {item.bonus.quantity}
                  </span>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default GamePlace;