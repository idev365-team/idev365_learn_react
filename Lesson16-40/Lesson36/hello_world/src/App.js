import React, { Component } from 'react';
import './App.css';
import MyButton from './components/MyButton';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
      <div className="App">
        <MyButton/>
      </div>
      </React.StrictMode>
    );
  }
}

export default App;
