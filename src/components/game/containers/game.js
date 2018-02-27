import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Game from '../components/game';

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(undefined, mapDispatchToProps)(Game);