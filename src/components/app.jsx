import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '@/redux/store';
import { Game } from '@/components/game';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game/>
      </Provider>
    );
  }
}

export default App;