import React, { Component } from 'react';
import './App.css';
import Chosen from './components/Chosen';

class App extends Component {
  constructor(){
    super()
    this.state = {
      chooseValue:"",
    }
    this.handleChoseChange = this.handleChoseChange.bind(this)
  }
  handleChoseChange(value){
    this.setState({
      chooseValue:value
    })
  }
  render() {
    return (
      <div className="App">
        <Chosen onChange={this.handleChoseChange} defaultValue={this.state.chooseValue}>
          <option>vanilla</option>
          <option>chocolate</option>
          <option>strawberry</option>
        </Chosen>
        <div>
          {this.state.chooseValue}
        </div>
      </div>
    );
  }
}

export default App;
