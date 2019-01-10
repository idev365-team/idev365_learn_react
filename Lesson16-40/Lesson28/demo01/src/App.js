import React, { Component } from 'react'
import MyWidget from './components/MyWidget'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';


class App extends Component {
  render() {
    return (
      <ErrorBoundary>
      <div className="App">
          <MyWidget/>
      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
