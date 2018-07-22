import React, { Component } from 'react';
import './Dropleft.css';

export default class Dropleft extends Component {
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
        <div className="containerLeft">Drop-left</div>
        {this.state.open && <div className="panelLeft"/>}
      </div>
    );
  }
}
