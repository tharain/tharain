import React, { Component } from 'react';

class BasicScissorsPaperStoneGame extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      wrongScore: 0,
      enemyCard: '',
      isRecord: false,
    }
  }

  randomAnswer() {
    return Math.floor(Math.random() * 3) + 1;
  }

  render() {
    return (
      <div className="gameCanvas">
        Lose:
        {' '}
        {this.state.wrongScore}
        <br />
        Won:
        {' '}
        {this.state.score}
        <div className="ySpace" />
        <div className="justifyCenter">
          <div className="gameCard maxFont">
            {this.state.enemyCard}
          </div>
        </div>
        <div className="ySpace" />
        <div className="justifyCenter">
          <div
            className="gameCard maxFont"
            onClick={() => {
              if(!this.state.isRecord) {
                const enemyPlay = this.randomAnswer();
                let enemyIcon = '';
                let positiveScore = 0;
                let negativeScore = 0;
                switch(enemyPlay) {
                  case 1: // scissors
                    enemyIcon = '✂';
                    break;
                  case 2: // paper
                    enemyIcon = '❐';
                    positiveScore = 1;
                    break;
                  case 3: // stone
                    enemyIcon = '⌓';
                    negativeScore = 1;
                    break;
                  default:
                }
                this.setState((prevState) => {
                  const prevScore = prevState.score;
                  const prevWrongScore = prevState.wrongScore;
                  return {
                    enemyCard: enemyIcon,
                    score: prevScore + positiveScore,
                    wrongScore: prevWrongScore + negativeScore,
                    isRecord: true,
                  }
                });
              }
            }}
          >
            ✂
          </div>
          <div
            className="gameCard maxFont"
            onClick={() => {
              if(!this.state.isRecord) {
                const enemyPlay = this.randomAnswer();
                let enemyIcon = '';
                let positiveScore = 0;
                let negativeScore = 0;
                switch(enemyPlay) {
                  case 1: // scissors
                    enemyIcon = '✂';
                    negativeScore = 1;
                    break;
                  case 2: // paper
                    enemyIcon = '❐';
                    break;
                  case 3: // stone
                    enemyIcon = '⌓';
                    positiveScore = 1;
                    break;
                  default:
                }
                this.setState((prevState) => {
                  const prevScore = prevState.score;
                  const prevWrongScore = prevState.wrongScore;
                  return {
                    enemyCard: enemyIcon,
                    score: prevScore + positiveScore,
                    wrongScore: prevWrongScore + negativeScore,
                    isRecord: true,
                  }
                });
              }
            }}
          >
            ❐
          </div>
          <div
            className="gameCard maxFont"
            onClick={() => {
              if(!this.state.isRecord) {
                const enemyPlay = this.randomAnswer();
                let enemyIcon = '';
                let positiveScore = 0;
                let negativeScore = 0;
                switch(enemyPlay) {
                  case 1: // scissors
                    enemyIcon = '✂';
                    positiveScore = 1;
                    break;
                  case 2: // paper
                    enemyIcon = '❐';
                    negativeScore = 1;
                    break;
                  case 3: // stone
                    enemyIcon = '⌓';
                    break;
                  default:
                }
                this.setState((prevState) => {
                  const prevScore = prevState.score;
                  const prevWrongScore = prevState.wrongScore;
                  return {
                    enemyCard: enemyIcon,
                    score: prevScore + positiveScore,
                    wrongScore: prevWrongScore + negativeScore,
                    isRecord: true,
                  }
                });
              }
            }}
          >
            ⌓
          </div>
        </div>
        <div className="ySpace" />
        <div className="justifyCenter">
          <div
            className="next"
            onClick={() => {
              this.setState({
                isRecord: false,
                enemyCard: '',
              })
            }}
          >
            Play Again
          </div>
        </div>
        <div className="ySpace" />
      </div>
    );
  }
}

export default BasicScissorsPaperStoneGame;
