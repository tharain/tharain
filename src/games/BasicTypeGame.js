import React, { Component } from 'react';

const randomWord = require('random-words');

class BasicTypeGame extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      wrongScore: 0,
      level: 1,
      randomWord: randomWord(),
      isRecord: false,
    }
  }

  render() {
    return (
      <div className="gameCanvas">
        Level
        {' '}
        {this.state.level}
        <br />
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
              onKeyPress={(event) => {
                  if (event.which === 13 /* Enter */) {
                    event.preventDefault();
                  }
              }}
              onChange={(event) => {
                const wordTyped = event.target.value;
                if (wordTyped === this.state.randomWord) {
                  this.setState((prevState) => {
                    const prevScore = prevState.score;
                    const prevWrongScore = prevState.wrongScore;
                    const newLevel = Math.ceil((prevScore - prevWrongScore + 1)/10);
                    return {
                      score: prevScore + 1,
                      level: newLevel,
                      randomWord: randomWord({ exactly: newLevel }).join(' '),
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
        <div className="ySpace" />
      </div>
    );
  }
}

export default BasicTypeGame;
