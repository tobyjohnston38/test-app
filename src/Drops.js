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
        <div className="container">Drop-down</div>
        {this.state.open && <div className="panel"/>}
      </div>
    );
  }
}

export default Drops;
