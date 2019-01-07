import React, { Component } from 'react'
import Board from './components/Board'
import PlayerInfo from './components/PlayerInfo'
import History from './components/History'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      squares:new Array(9).fill(null),
      stepCount:0,
      history:[],
    }
  }
  getCurPlayer(){
    const { stepCount } = this.state
    return stepCount%2==0?"X":"O"
  }
  render() {
    const curPlayer = this.getCurPlayer()
    const { history,squares } = this.state
    return (
      <div className="App">
        <div className="leftPanel">
          <Board squares={squares}/>
        </div>
        <div className="rightPanel">
          <PlayerInfo curPlayer={curPlayer}/>
          <History history={history}/>
        </div>
      </div>
    );
  }
}

export default App;
