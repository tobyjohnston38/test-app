import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Counter from "./Counter";
import Cards from "./Cards";
import Tictac from "./Tictac";

class Stuff extends Component {
  render() {
    return (
      <Router>
        <div className="stuff-page">
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/tictac" component={Tictac} />
          <ul>
            <li className="Counter-thing">
              <Link to="/Counter">Counter thing</Link>
            </li>
            <li className="Cards">
              <Link to="/Cards">Cards</Link>
            </li>
            <li className="Tic-tac">
              <Link to="/Tictac">Tictac</Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default Stuff;
