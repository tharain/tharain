import React, { Component } from 'react';

const randomWord = require('random-words');

class BasicObstacleGame extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      isRecord: false,
    }
  }

  render() {
    return (
      <div className="gameCanvas">
        Score:
        {' '}
        {this.state.score}
        <div className="ySpace" />
        
        Test
      </div>
    );
  }
}

export default BasicObstacleGame;
