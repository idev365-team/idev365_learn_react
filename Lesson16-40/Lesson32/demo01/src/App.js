import React, { Component } from 'react';
import './App.css';
import MouseTracker from './components/MouseTracker';
import MouseWithCat from './components/MouseWithCat';
import Dog from './components/Dog';
import Mouse from './components/Mouse';
import withMouse from './components/withMouse';

const RunDog = withMouse(Dog)

class App extends Component {
  render() {

    return (
      <div className="App">
        
        <RunDog/>
      </div>
    );
  }
}

export default App;
