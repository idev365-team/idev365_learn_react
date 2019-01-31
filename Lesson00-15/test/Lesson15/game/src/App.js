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
    return stepCount%2 ===0 ? "X" : "O"
  }

  getIsWin(){
    const winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    let isWin = false;
    let winPlayer = null;
    const { squares } = this.state
    //判断是否有在一条线的相同类型的棋子
    for(let i=0;i<winConditions.length;i++){
      const curCondition=winConditions[i]
      const square01 = squares[ curCondition[0] ]
      const square02 = squares[ curCondition[1] ]
      const square03 = squares[ curCondition[2] ]
      if(null !==square01 && square01===square02 && square02===square03 ){
        isWin = true
        winPlayer = square01
      }
    }
    return {
      isWin,
      winPlayer,
    }
  }

  handleClickSquare=(pos,info)=>{
    const {
      squares,
      stepCount,
      history,
    } = this.state

    console.log("pos->",pos,"info->",info)
    //当前是否已经win？，win状态不做任何操作
    const {isWin} = this.getIsWin()
    if(isWin){ return }
    //当前的棋盘格子是否已经下过子
    if(!info){
      //下这步棋
      const curPlayer = this.getCurPlayer()
      console.log("handleClickSquare->history",history,stepCount)
      const oldHistory = history.slice(0,stepCount)
      console.log("handleClickSquare->history",oldHistory,stepCount)
      const historyNew = [
        ...oldHistory,{
          player:curPlayer,
          pos:pos,
        }
      ]
      const stepCountNew = stepCount+1
      this.setState({
        history:historyNew,
        stepCount:stepCountNew,
        squares:this.calcBoardAllSquares(historyNew,stepCountNew)
      })
    }
  }

  handleClickRecord=(curStepCount,record)=>{
    console.log("handleClickRecord-->",curStepCount,record)
    // const { history } = this.state
    const stepCountNew = curStepCount+1
    this.setState((preState)=>({
      stepCount:stepCountNew,
      squares:this.calcBoardAllSquares(preState.history,stepCountNew)
    }))
  }

  handleClickRestartGame=()=>{
    const stepCountNew = 0
    this.setState((preState)=>({
      stepCount:stepCountNew,
      squares:this.calcBoardAllSquares(preState.history,stepCountNew)
    }))
  }

  calcBoardAllSquares(history,stepCount){
    console.log("calcBoardAllSquares->",history,stepCount)
    let squares = new Array(9).fill(null)
    for(let i=0;i<stepCount;i++){
      let info = history[i]
      squares[info.pos] = info.player
    }
    return squares
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
          <PlayerInfo curPlayer={curPlayer} winInfo={this.getIsWin()}/>
          <History history={history} 
                   onClickRecord={this.handleClickRecord}
                   onClickRestartGame={this.handleClickRestartGame}
                   />
        </div>
      </div>
    );
  }
}

export default App;
