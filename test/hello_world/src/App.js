import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      squares:Array(9).fill(null),
      stepCount:0,
      history:[],
    }
  }

  getIsXPlayer(){
    return this.state.stepCount%2
  }
  

  handleClick(pos){
    const { squares,history,stepCount } = this.state;
    const squereType = this.getSquereType(pos)
    const curPlayer = this.getIsXPlayer()?"x":"o"
    console.log("pos->",pos,squereType)
    if(squereType==null){
      let squaresNew = [...squares];
      squaresNew[pos] = curPlayer;
      let historyNew = [...history,{player:curPlayer,pos:pos}]
      this.setState((preState,prop)=>({
        squares:squaresNew,
        stepCount:preState.stepCount+1,
        history:historyNew,
      }))
    }
    
  }

  getSquereType(pos){
    const { squares } = this.state
    return squares[pos]
  }

  genSquare(pos){
    const { squares } = this.state
    return (<Square pos={pos} type={squares[pos]} onClick={this.handleClick.bind(this,pos)}/>)
  }

  handleChangePos(step){
    let historyNew = this.state.history.splice(0,step)
    let squaresNew = Array(9).fill(null)
    historyNew.map((item,index)=>squaresNew[item.pos]=item.player)
    this.setState({
      stepCount:step,
      history:historyNew,
      squares:squaresNew,
    })
  }

  genHistoryItem(item,index){
    return <div onClick={this.handleChangePos.bind(this,index)} key={`history-item-${index}`}>第{index}回合-{item.player}</div>
  }

  genHistoryUI(){
    const { history } = this.state
    return (
      <div>
          {history.map((item,index)=>this.genHistoryItem(item,index))}
      </div>
    )
  }
  
  render() {
    return (
      <div className="App">
        <div className="Board">
          <div className="row">
            {this.genSquare(0)}
            {this.genSquare(1)}
            {this.genSquare(2)}
          </div>
          <div className="row">
            {this.genSquare(3)}
            {this.genSquare(4)}
            {this.genSquare(5)}
          </div>
          <div className="row">
            {this.genSquare(6)}
            {this.genSquare(7)}
            {this.genSquare(8)}
          </div>
        </div>
        <div>
          当前旗手: {this.getIsXPlayer()?"X":"O"}
        </div>
        {this.genHistoryUI()}
        
      </div>
    );
  }
}

export default App;
