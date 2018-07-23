import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown'
import Dropup from './Dropup'
import Dropleft from './Dropleft'
import Dropright from './Dropright'
import Drops from './Drops'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Homepage goes here</h1>
        </header>
        <p className="App-intro">
          Thing
        </p>
        <Drops />
        <Dropdown />
        <Dropup />
        <Dropleft />
        <Dropright />
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="footer-message">Fooooooter</h1>
        </footer>
      </div>
    );
  }
}

export default App;
