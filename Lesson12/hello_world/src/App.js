import React, { Component } from 'react'
import './App.css'
import MyButton from './components/MyButtton'

class App extends Component {
  handerClickMyButton=()=>{
    console.log("点击了 MyButton")
  }
  render() {
    return (
      <div className="App">
        <h1>Hello,山地人</h1>
        <MyButton onClick={this.handerClickMyButton}/>
      </div>
    );
  }
}

export default App;
