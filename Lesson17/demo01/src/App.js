import React, { Component } from 'react';

import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting />
      </div>
    );
  }
}

export default App;
