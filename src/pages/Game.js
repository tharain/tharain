import React, { Component } from 'react';
import DropDown from '../components/DropDown';

const cssMode = ['dark mode', 'light mode'];
const games = ['basic-typing game'];
const randomWord = require('random-words');

class Game extends Component {
  constructor(){
    super();
    this.state = {
      gameState: '',
      cssState: 'dark mode',
      score: 0,
      wrongScore: 0,
      randomWord: randomWord(),
      isRecord: false,
    }
  }

  render() {
    return (
      <div className="flexWrap justifyCenter maxWidth">
        {this.state.cssState === 'dark mode' ? (
          <link rel="stylesheet" href="./css/dark.css" />
        ) : (
          <link rel="stylesheet" href="./css/light.css" />
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
          <div className="gameCanvas">
            Wrong Score:
            {' '}
            {this.state.wrongScore}
            <br />
            Score:
            {' '}
            {this.state.score}
            <div className="ySpace" />
            <div className="h1">
              {this.state.randomWord}
            </div>
            <div className="gameSpace" />
            <div className="justifyCenter">
              <form>
                <input
                  className="reactText"
                  type="text"
                  name="textgame"
                  onChange={(event) => {
                    const wordTyped = event.target.value;
                    if (wordTyped === this.state.randomWord) {
                      this.setState((prevState) => {
                        const prevScore = prevState.score;
                        return {
                          score: prevScore + 1,
                          randomWord: randomWord(),
                          isRecord: false,
                        }
                      });
                      event.target.value = '';
                    } else if (!this.state.randomWord.startsWith(wordTyped) && !this.state.isRecord) {
                      this.setState((prevState) => {
                        const prevScore = prevState.wrongScore;
                        return {
                          wrongScore: prevScore + 1,
                          isRecord: true,
                        }
                      });
                    }
                  }}
                />
              </form>
            </div>
          </div>
        ): null}
      </div>
    );
  }
}

export default Game;
