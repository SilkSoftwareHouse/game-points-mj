import React, { Component } from 'react';

import GamePlace from '../containers/game-place';
import GameInfo from '../containers/game-info';

class Game extends Component {
  render() {
    return (
      <div className="container-fluid p-0 h-100 game">
        <div className="row no-gutters h-100">
          <div className="col col-36 col-lg-26">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark game-place__nav">
              <a className="navbar-brand" href="#">
                <i className="fa fa-gamepad"></i> Game points
              </a>
            </nav>

            <div className="game-place__content">
              <GamePlace/>
            </div>

          </div>
          <div className="col col-36 col-lg-10">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark game-info__nav">
              <a className="navbar-brand" href="#">
                <i className="fa fa-info-circle"></i> Player items
              </a>
            </nav>

            <div className="game-info__content">
              <GameInfo/>
            </div>

          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchGameSettings();
  }
}

export default Game;