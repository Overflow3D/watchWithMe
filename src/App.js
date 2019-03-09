import React, { Component } from 'react';
import './App.css';
import Room from './containers/Room'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Room />
        </header>
      </div>
    );
  }
}

export default App;
