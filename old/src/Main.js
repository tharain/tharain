import React, {
  Component,
} from 'react';
import {
  Route,
  HashRouter,
  Switch,
} from 'react-router-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Cookies from 'universal-cookie';

// css
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint.css';
import './css/common.css';

// codemirror
import 'codemirror/keymap/vim';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint';

import App from './pages/App';
import Game from './pages/Game';

const cssMode = {
  'dark mode': 'dark mode',
  'light mode': 'light mode',
};
const cookies = new Cookies();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cssState: 'light mode',
      backupState: {},
    };
  }

  updateCss() {
    const cssState = cookies && cookies.get('cssState') && cssMode[atob(cookies.get('cssState'))]
      ? cssMode[atob(cookies.get('cssState'))] : null;
    if(cssState) {
      this.setState({
        cssState: cssState,
      });
    }
  }

  componentDidMount() {
    this.updateCss();
  }

  componentDidUpdate(nextProps) { // update again
    if(nextProps.cssState != this.props.cssState) {
      console.log(nextProps.cssState)
      this.updateCss();
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.cssState === 'dark mode' ? (
          <link rel="stylesheet" href="./css/dark.css" />
        ) : (
          <link rel="stylesheet" href="./css/light.css" />
        )}
        <HashRouter>
          <div className="main">
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <MuiThemeProvider theme={theme}>
                    <App
                      currState={this.state.backupState.app}
                      cssState={this.state.cssState}
                      updateCss={(cssState) => {
                        this.setState({
                          cssState: cssState,
                        });
                      }}
                      onChange={(state) => {
                        this.state.backupState.app = state;
                      }}
                    />
                  </MuiThemeProvider>
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
      </React.Fragment>
    );
  }
}

export default Main;
