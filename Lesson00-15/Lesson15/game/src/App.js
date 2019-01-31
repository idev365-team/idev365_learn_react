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

  calcSquares(history,stepCount){
    const squaresNew = new Array(9).fill(null)
    for(let i=0;i<stepCount;i++){
        let curHistory = history[i]
        squaresNew[curHistory.pos] = curHistory.player
    }
    return squaresNew
  }

  isWin(){
    let result = false
    let winPlayer = null
    const { squares } = this.state
    const winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let i=0;i<winConditions.length;i++){
      let curCondition = winConditions[i];
      let first = squares[curCondition[0]]
      let second = squares[curCondition[1]]
      let third = squares[curCondition[2]]
      if(null!=first && first===second && second===third){
        result = true;
        winPlayer = first
        break;
      }
    }
    
    return {
      result:result,
      winPlayer:winPlayer,
    }
  }

  handleRestartGame=()=>{
    const stepCountNew = 0
    this.setState((prevState)=>({
      stepCount:stepCountNew,
      squares:this.calcSquares(prevState.history,stepCountNew)
    }))
  }

  handleClickHistory=(hisotryItem)=>{
    console.log("hisotryItem-->",hisotryItem)
    const stepCountNew = hisotryItem.stepCount
    this.setState((prevState)=>({
      stepCount:stepCountNew+1,
      squares:this.calcSquares(prevState.history,stepCountNew+1)
    }))
  }

  handleClickSquare=(pos,info)=>{
    console.log(pos,info)
    let { result } = this.isWin() 
    if( result ){
      return
    }
    if(info==null){
      const { history } = this.state;
      console.log("history",history)
      const historyNew = [
        ...history.slice(0,this.state.stepCount),
        {
          stepCount:this.state.stepCount,
          player:this.getCurPlayer(),
          pos:pos,

        }
      ]
      this.setState((prevState)=>({
        history:historyNew,
        stepCount:prevState.stepCount+1,
        squares:this.calcSquares(historyNew,prevState.stepCount+1)
      }))
    }
  }

  render() {
    const curPlayer = this.getCurPlayer()
    const { history,squares } = this.state
    return (
      <div className="App">
        <div className="leftPanel">
          <Board squares={squares} onClickSquare={this.handleClickSquare}/>
        </div>
        <div className="rightPanel">
          <PlayerInfo 
            winResult={this.isWin()}
            curPlayer={curPlayer}/>
          <History 
            history={history} 
            onRestartGame={this.handleRestartGame} 
            onClickHistory={this.handleClickHistory}/>
        </div>
      </div>
    );
  }
}

export default App;
