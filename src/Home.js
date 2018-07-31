import React, { Component } from 'react';
import cat from './cat.svg';

class App extends Component {
  render() {
    return (
        <div className="App-cat">
          <img src={cat} className="App-cat" alt="cat" />
        </div>
    );
  }
}

export default App;
