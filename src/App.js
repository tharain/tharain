import React, { Component } from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel className="App-header">
          <Carousel.Item>
            <h1>❤ Daphne Won ❤</h1>
            <p>❤ Bachelor in Computer Science (National University of Singapore) ❤</p>
            <p>❤ 8163 7781 ❤ won.jr@hotmail.com ❤</p>
          </Carousel.Item>
          <Carousel.Item>

          </Carousel.Item>
          <Carousel.Item>
          
          </Carousel.Item>
        </Carousel>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
