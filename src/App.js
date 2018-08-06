import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './About'
import Home from './Home'
import Drops from './Drops'
import Posts from './Posts'
import Stuff from './Stuff'

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <header className="App-header">
        <div className="Home-header">
          <Link to="/">Home</Link>
        </div>
        <div className="About-header">
          <Link to="/about">About</Link>
        </div>
        <div className="Drops-header">
          <Link to="/drops">Drops</Link>
        </div>
        <div className="Posts-header">
          <Link to="/posts">Posts</Link>
        </div>
        <div className="Stuff-header">
          <Link to="/stuff">Stuff</Link>
        </div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Homepage goes here</h1>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/drops" component={Drops} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/stuff" component={Stuff} />
          <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="footer-message">Fooooooter</h1>
          </footer>
        </div>
        </Router>
    );
  }
}

export default App;
