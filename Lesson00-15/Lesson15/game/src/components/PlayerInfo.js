import React,{Component} from 'react'
import Square from './Square'
import './PlayerInfo.css'

class PlayerInfo extends Component {
    render(){
        const { curPlayer,winInfo } = this.props
        console.log("PlayerInfo:winInfo->",winInfo)
        if(winInfo.isWin){
            return (<div className="playInfo">棋手{winInfo.winPlayer}-获胜!</div>)
        }else{
            return (<div className="playInfo">下个棋手:{curPlayer}</div>)
        }
        
    }
}

export default PlayerInfo