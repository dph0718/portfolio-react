import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Importing components
import Overall from "./components/Overall.js"
// import { isAbsolute } from 'upath';
import logem from "./functions/makeCarousel"

class App extends Component {

  state = {
    stateA: "this is state A, a string",
    stateB: true,
    stateC: ['stateB', 'is', 'a', 'boolean', ', and state C is an array.'],
    stateD: {
      string: "State D is its own object.",
      integer: 4,
      boolean: true,
      array: ['1', '2', '3', '5']
    },
    n: 0,
    atomSpeed: 1,
    color: 'blue'
  }

  buttonClicker = () => {
    console.log(this)
  }

  inheritedFunction = (childArg) => {
    return childArg[3];
  }

  speedInc = () => {
    this.setState({ atomSpeed: this.state.atomSpeed - 50 })
  }

  speedDec = () => {
    this.setState({ atomSpeed: this.state.atomSpeed + 50 })
  }

  makeRed = () => {
    this.setState({ color: 'red' })
  }

  render() {

    logem();
    let h1Style = {
      color: this.state.color
    }

    let divMove = {
      top: this.state.atomSpeed + 'px',
      position: 'absolute'
    }



    let atStyle = {
      animation: `App-logo-spin infinite ${this.state.atomSpeed}s linear; color: red`,
      pointerEvents: 'none',
      // backgroundColor: `${this.state.color}`,
      left: `${this.state.atomSpeed}px`,
      position: 'fixed'
    }

    return (
      <div className="App">
        <Overall
          prop01="bananas"
          prop02={this.state.stateC}
          prop04={this.inheritedFunction}
          prop05={this.state.stateD}
          prop06={this.buttonClicker}
          prevState={this.state}
        />
        <header className="App-header">
          <button onClick={this.makeRed}>Make Red</button>
          <button onClick={this.speedInc}>Faster</button>
          <button onClick={this.speedDec}>Slower</button>
        </header>
      </div>
    );
  }
}

export default App;
