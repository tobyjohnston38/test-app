import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './About'
import Home from './Home'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Homepage goes here</h1>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
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
