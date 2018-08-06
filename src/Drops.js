import React, { Component } from 'react';
import './App.css';

class Drops extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }
  toggleUp = () => {
    this.setState({
      open: !this.state.open
    })
  }
  toggleDown = () => {
    this.setState({
      open: !this.state.open
    })
  }
  toggleLeft = () => {
    this.setState({
      open: !this.state.open
    })
  }
  toggleRight = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <div onClick ={this.toggleUp} >
          <div className="dropdown-container">Drop-down</div>
            {this.state.open && <div className="dropdown-panel"/>}
        </div>
        <div onClick ={this.toggleDown} >
          <div className="dropup-container">Drop-up</div>
            {this.state.open && <div className="dropup-panel"/>}
        </div>
        <div onClick ={this.toggleLeft} >
          <div className="dropleft-container">Drop-left</div>
            {this.state.open && <div className="dropleft-panel"/>}
        </div>
        <div onClick ={this.toggleRight} >
          <div className="dropright-container">Drop-right</div>
            {this.state.open && <div className="dropright-panel"/>}
        </div>
      </div>
    );
  };
}

export default Drops;
