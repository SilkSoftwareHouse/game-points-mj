import React, { Component } from 'react';
import classNames from 'classnames';

class GameInfo extends Component {
  tabs = [
    'Score',
    'Actions log'
  ];

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  handleTabChange = tabIndex => (event) => {
    event.preventDefault();
    this.setState({ activeTab: tabIndex });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="p-3 game-info">
        <ul className="nav nav-tabs">
        {this.tabs.map((item, index) => (
          <li key={`game_nav_item_${index}`} className="nav-item">
            <a className={classNames('nav-link', { 'active': activeTab === index })}
               onClick={this.handleTabChange(index)}
               href="#">{item}</a>
          </li>
        ))}
        </ul>

        {activeTab === 0 && this.renderScore()}
        {activeTab === 1 && this.renderHistory()}
      </div>
    );
  }

  renderScore() {
    const {
      newGame,
      playerItems,
      totalPoints,
      totalPointsWithoutBonus
    } = this.props;

    const bonusPoints = totalPoints - totalPointsWithoutBonus;

    return (
      <div>
        {playerItems.size === 0 ? (
          <div className="alert alert-primary text-center mt-3">
            <i className="fa fa-list-alt"></i> Game score is empty
          </div>
        ) : (
          <table className="table text-center mt-3">
            <thead>
            <tr>
              <th>Item:</th>
              <th>Quantity:</th>
              <th>Score:</th>
            </tr>
            </thead>
            <tbody>
            {playerItems.map((item, index) => (
              <tr key={`game_info_item_${index}`}>
                <td className="h2 font-weight-bold">{item.name}</td>
                <td className="h2">
                  {item.quantity}
                </td>
                <td className="h2">{(item.calculatePoints())}</td>
              </tr>
            ))}
            </tbody>
          </table>
        )}

        <div className="row">
          <div className="col-36">
            <span className="h5">Bonuses: {bonusPoints}</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-36 col-xl-13 d-flex align-items-center">
            <div className="h5">Total: {totalPoints}</div>
          </div>
          <div className="col-36 col-xl-23 text-right">
            <button onClick={newGame} className="btn btn-success btn-lg btn-lg-block">
              <i className="fa fa-play"></i> New Game
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderHistory() {
    const { gameLog } = this.props;

    return (
      <div>
        {gameLog.size === 0 ? (
          <div className="alert alert-primary text-center mt-3">
            <i className="fa fa-list-alt"></i> Actions log is empty
          </div>
        ) : (
          <table className="table text-center">
            <thead>
            <tr>
              <th>Item:</th>
              <th>Click time:</th>
            </tr>
            </thead>
            <tbody>
            {gameLog.map((item, index) => (
              <tr key={`game_info_history_${index}`}>
                <td>{item.name}</td>
                <td>{new Date(item.clickTimestamp).toLocaleTimeString()}</td>
              </tr>
            ))}
            </tbody>
          </table>
        )}

      </div>
    );
  }
}

export default GameInfo;