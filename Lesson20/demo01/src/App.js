import React, { Component } from 'react';
import NameForm from './components/NameForm';
import './App.css';
import FileInput from './components/FileINput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileInput />
      </div>
    );
  }
}

export default App;
