import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Counter from "./Counter";

class Stuff extends Component {
  render() {
    return (
      <Router>
        <div className="stuff-page">
        <Route exact path="/counter" component={Counter} />
          <ul>
            <li className="Counter-thing">
              <Link to="/Counter">Counter thing</Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default Stuff;
