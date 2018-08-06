import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Counter from './Counter'

class Stuff extends Component {
  render() {
    return (
      <Router>
      <div>
        <h1 className="stuff-page">About Page</h1>
        <p className="stuff-content">Links</p>
        <ul>
          <li>
            <Link to="/Counter">Counter thing</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/counter" component={Counter} />
      </Router>
    );
  }
}

export default Stuff;
