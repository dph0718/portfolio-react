import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Importing components
import Overall from "./components/Overall.js"

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
    console.log('increase speed?')
    console.log(this.state.atomSpeed)
    this.setState({ atomSpeed: this.state.atomSpeed - 1 })
  }

  speedDec = () => {
    console.log('decrease speed?')
    this.setState({ atomSpeed: this.state.atomSpeed + 1 })
  }

  makeRed = () => {
    console.log('Make it red.');
    this.setState({ color: 'red' })
  }

  render() {

    let h1Style = {
      color: this.state.color
    }

    let atStyle = {
      style: `animation: App-logo-spin infinite ${this.state.atomSpeed}s linear; color: red`
    }

    return (
      <div className="App">
        <h1 style={h1Style}>This is an &lt;h1&gt; tag I typed in the <code>App.js</code>  component</h1>
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
          <button>Slower</button>
          <img src={logo} className="App-logo" alt="logo" title="rotating atom logo" style={atStyle} />
        </header>
      </div>
    );
  }
}

export default App;
