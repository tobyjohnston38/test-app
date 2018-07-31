import React, { Component } from 'react';
import './App.css';

class Drops extends Component {
  constructor() {
    super();
    this.state ={
      open: true
    }
  }
  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div onClick ={this.toggle} >
        <div className="dropdown-container">Drop-down</div>
          {this.state.open && <div className="dropdown-panel"/>}
        <div className="dropup-container">Drop-up</div>
          {this.state.open && <div className="dropup-panel"/>}
        <div className="dropleft-container">Drop-left</div>
          {this.state.open && <div className="dropleft-panel"/>}
        <div className="dropright-container">Drop-right</div>
          {this.state.open && <div className="dropright-panel"/>}
      </div>
    );
  }
}

export default Drops;
