import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MouseWithCat from './components/MouseWithCat';
import Mouse from './components/Mouse';
import Cat from './components/Cat';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Cat/>
      </div>
    );
  }
}

export default App;
