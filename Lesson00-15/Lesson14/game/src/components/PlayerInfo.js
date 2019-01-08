import React,{Component} from 'react'
import Square from './Square'
import './PlayerInfo.css'

class PlayerInfo extends Component {
    render(){
        const { curPlayer } = this.props
        return (<div className="playInfo">
            下个棋手:{curPlayer}
        </div>)
    }
}

export default PlayerInfo