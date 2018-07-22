import React, { Component } from 'react';
import './Dropup.css';

export default class Dropup extends Component {
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
        <div className="containerUp">Drop-up</div>
        {this.state.open && <div className="panelUp"/>}
      </div>
    );
  }
}
