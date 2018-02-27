import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import GameInfo from '../components/game-info';
import {
  gameLogSelector,
  playerItemsSelector,
  playerTotalPointsSelector,
  playerTotalPointsWithoutBonusSelector
} from '../selectors';

const mapStateToProps = state => ({
  gameLog: gameLogSelector(state),
  playerItems: playerItemsSelector(state),
  totalPoints: playerTotalPointsSelector(state),
  totalPointsWithoutBonus: playerTotalPointsWithoutBonusSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);