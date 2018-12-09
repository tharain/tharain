import React, {
  Component,
} from 'react';

import {
  Route,
  HashRouter,
  Switch,
} from 'react-router-dom';

import App from './pages/App';
import Game from './pages/Game';

class Main extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <HashRouter>
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <App />
              )}
            />
            <Route
              exact
              path="/game"
              component={() => (
                <Game />
              )}
            />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
