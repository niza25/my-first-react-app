import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'
import LightSwitch from './components/LightSwitch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Title content='Welcome to the Scoreboard' />
          <LightSwitch />
          <p>
            Welcome to Codaisseur! Below is the Scoreboard and the Players:
          </p>
          <Scoreboard />
        </main>
      </div>
    );
  }
}

export default App;
