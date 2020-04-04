import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import DropDown from 'src/components/DropDown';
import Icons from 'src/assets/Icons.jsx';

const propTypes = {
  content: PropTypes.array,
  onChange: PropTypes.func,
}

const defaultProps = {
  content: [
    {
      name: 'Home',
      url: null,
    }
  ],
}

const cssMode = ['dark mode', 'light mode'];

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flexHeader">
          <Tooltip
            title="Skills Set"
            placement="bottom"
          >
            <Button
              color="secondary"
              variant="contained"
              className="headerButton"
              onClick={() => {
                this.props.onChange('Skillset');
              }}
            >
              <Icons icon="dashboard" color="inherit"/>
            </Button>
          </Tooltip>
          <Tooltip
            title="Portfolio"
            placement="bottom"
          >
            <Button
              color="secondary"
              variant="contained"
              className="headerButton"
              onClick={() => {
                this.props.onChange('Portfolio');
              }}
            >
              <Icons icon="identity" color="inherit"/>
            </Button>
          </Tooltip>
          <Tooltip
            title="Work"
            placement="bottom"
          >
            <Button
              color="secondary"
              variant="contained"
              className="headerButton"
              onClick={() => {
                this.props.onChange('Work');
              }}
            >
              <Icons icon="desktop" color="inherit"/>
            </Button>
          </Tooltip>
          <Tooltip
            title="Education"
            placement="bottom"
          >
            <Button
              color="secondary"
              variant="contained"
              className="headerButton"
              onClick={() => {
                this.props.onChange('Education')
              }}
            >
              <Icons icon="bulb" color="inherit"/>
            </Button>
          </Tooltip>
          <Tooltip
            title="Achievements"
            placement="bottom"
          >
            <Button
              color="secondary"
              variant="contained"
              className="headerButton"
              onClick={() => {
                this.props.onChange('Achievements')
              }}
            >
              <Icons icon="trophy" color="inherit"/>
            </Button>
          </Tooltip>
          <Tooltip
            title={`Change to ${this.props.cssState === 'dark mode' ? 'light theme': 'dark theme'}`}
            placement="bottom"
          >
            <Button
              classes={{
                root: "themebackground",
              }}
              variant="contained"
              className="headerButton"
              onClick={() => {
                if(this.props.cssState === 'dark mode') {
                  this.props.updateCss('light mode');
                } else {
                  this.props.updateCss('dark mode');
                }
              }}
            >
              <Icons icon="paint" color="inherit"/>
            </Button>
          </Tooltip>
        </div>
        <Breadcrumbs className="breadcrumb" arial-label="Breadcrumb">
          {this.props.content.reduce((prev, item) => {
            if(item.url) {
              prev.push(
                <Typography key={item.name} className="link" onClick={() => {
                  this.props.onChange(item.url);
                }}>
                  {item.name}
                </Typography>
              );
            } else {
              prev.push(
                <Typography key={item.name} className="nolink">
                  {item.name}
                </Typography>
              );
            }
            return prev;
          }, [])}
        </Breadcrumbs>
      </React.Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
