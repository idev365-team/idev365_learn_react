import React,{Component} from 'react'
import Square from './Square'
import './PlayerInfo.css'

class PlayerInfo extends Component {
    render(){
        const { curPlayer,winResult } = this.props
        if(winResult.result){
            return (
                <div className="playInfo">
                    棋手:{winResult.winPlayer}-获胜
                </div>)
        }
        else{
            return (
                <div className="playInfo">
                    下个棋手:{curPlayer}
                </div>)
        }
    }
}

export default PlayerInfo