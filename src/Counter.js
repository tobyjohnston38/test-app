import React, { Component } from "react";
import "./App.css";

class Button extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
    );
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

class App extends Component {
  state = { counter: 0 };

  incrementCounter = incrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div className="counter-page">
        <h1>Counter Thing</h1>
        <div className="counter-1">
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        </div>
        <div className="counter-5">
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        </div>
        <div className="counter-10">
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        </div>
        <div className="counter-100">
          <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        </div>
        <div className="counter-result">
          <Result counter={this.state.counter} />
        </div>
      </div>
    );
  }
}

export default App;
