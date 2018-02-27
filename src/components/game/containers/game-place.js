import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import GamePlace from '../components/game-place';
import { gameItemsSelector } from '../selectors';

const mapStateToProps = state => ({
  items: gameItemsSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GamePlace);