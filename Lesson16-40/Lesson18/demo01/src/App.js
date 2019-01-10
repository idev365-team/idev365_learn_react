import React from 'react';
import './App.css';
import MyComponent from './MyComponent'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyComponent foo={"42"} bar={"abc"}/>
      </div>
    );
  }
}

export default App;
