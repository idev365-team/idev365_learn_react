import React, { Component } from 'react'
import './App.css'
import World from './components/World'
// import Hello from './components/Hello'
// import CustomTextInput from './components/CustomTextInput'
// import AutoFocusTextInput from './components/AutoFocusTextInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <World/>
      </div>
    );
  }
}

export default App;
