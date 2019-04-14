import React, { Component } from 'react';
import DropDown from 'src/components/DropDown';
import BasicTypeGame from 'src/games/BasicTypeGame';
import BasicObstacleGame from 'src/games/BasicObstacleGame';
import BasicScissorsPaperStoneGame from 'src/games/BasicScissorsPaperStoneGame';

const cssMode = ['dark mode', 'light mode'];
const games = ['basic-typing game', 'scissors-paper-stone game'];

class Game extends Component {
  constructor(){
    super();
    this.state = {
      gameState: '',
      cssState: 'dark mode',
    }
  }

  render() {
    return (
      <div className="flexWrap justifyCenter maxWidth">
        {this.state.cssState === 'dark mode' ? (
          <link rel="stylesheet" href="src/css/dark.css" />
        ) : (
          <link rel="stylesheet" href="src/css/light.css" />
        )}
        <div className="maxWidth">
          <a href="/">🏠 Back to resume</a>
        </div>
        <div className="floatRight">
          <DropDown
            uniquedropdownid="cssMode"
            placeholder='dark mode'
            suggestions={cssMode}
            updateText={(css) => {
              this.setState({
                cssState: css
              })
            }}
            width={110}
          />
        </div>
        <div className="h1">
          Welcome to games section
        </div>
        <div className="ySpace" />
        <div className="justifyCenter">
          <DropDown
            uniquedropdownid="games"
            suggestions={games}
            updateText={(game) => {
              this.setState({
                gameState: game
              })
            }}
          />
        </div>
        <div className="ySpace" />
        {this.state.gameState === 'basic-typing game' ? (
          <BasicTypeGame />
        ): null}
        {this.state.gameState === 'scissors-paper-stone game' ? (
          <BasicScissorsPaperStoneGame />
        ): null}
        <BasicObstacleGame />
      </div>
    );
  }
}

export default Game;
