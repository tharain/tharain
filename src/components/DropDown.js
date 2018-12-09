import React from 'react';
import PropTypes from 'prop-types';

const {
  generateKey,
} = require('../logic/HtmlSupport');

const propTypes = {
  placeholder: PropTypes.string,
  suggestions: PropTypes.array,
  updateText: PropTypes.func,
  width: PropTypes.number,
  uniquedropdownid: PropTypes.string,
};

const defaultProps = {
  placeholder: 'Select...',
  suggestions: [],
  updateText: () => {},
  width: 197,
  uniquedropdownid: 'ddrop',
};

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.placeholder,
      isOpen: false,
      isUnselected: true,
    };
  }

  renderSuggestions() {
    let suggestions = [];
    this.props.suggestions.forEach((suggestion, index) => {
      suggestions.push(
        <div
          className="suggestion"
          key={generateKey(this.props.uniquedropdownid.concat(String(index)))}
          onKeyPress={() => {
            this.setState({
              selected: suggestion,
              isOpen: false,
            });
            this.props.updateText(suggestion);
          }}
          onClick={() => {
            this.setState({
              selected: suggestion,
              isOpen: false,
            });
            this.props.updateText(suggestion);
          }}
          tabIndex="0"
          role="button"
        >
          {suggestion}
        </div>,
      );
    });
    return suggestions;
  }

  render() {
    return (
      <div style={{ minWidth: String(this.props.width).concat('px'), cursor: 'pointer' }}>
        <div
          className="dropdown flexWrap"
          style={{ minWidth: String(this.props.width).concat('px'), justifyContent: 'space-between' }}
          onKeyPress={() => {
            if (this.state.isOpen) {
              this.setState({
                isOpen: false,
              });
            } else {
              this.setState({
                isOpen: true,
              });
            }
          }}
          onClick={() => {
            if (this.state.isOpen) {
              this.setState({
                isOpen: false,
              });
            } else {
              this.setState({
                isOpen: true,
              });
            }
          }}
          tabIndex="0"
          role="button"
        >
          <div className="dropdownSelectText" style={{ width: String(this.props.width - 35).concat('px') }}>{this.state.selected}</div>
          {this.state.isOpen ? (
            <div className="arrowupIcon" style={{ height: '15px', width: '15px' }} />
          ): (
            <div className="arrowdownIcon" style={{ height: '15px', width: '15px' }} />
          )}
        </div>
        {this.state.isOpen ? (
          <div className="dropdownbodyBackground" style={{ minWidth: String(this.props.width).concat('px') }}>
            {this.renderSuggestions()}
          </div>
        ) : null}
      </div>
    );
  }
}

DropDown.propTypes = propTypes;
DropDown.defaultProps = defaultProps;

export default DropDown;
