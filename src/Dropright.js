import React, { Component } from 'react';
import './Dropright.css';

export default class Dropright extends Component {
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
        <div className="containerRight">Drop-right</div>
        {this.state.open && <div className="panelRight"/>}
      </div>
    );
  }
}
