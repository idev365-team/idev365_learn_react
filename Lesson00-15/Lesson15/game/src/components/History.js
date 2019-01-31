import React,{Component} from 'react'
import Square from './Square'
import './History.css'

class History extends Component {
    handleClick(item){
        const {onClickHistory} = this.props
        if(onClickHistory){
            onClickHistory(item)
        }
    }
    genHistoryStart(){
        return (
            <li key={`history-item-start`}>
                <button onClick={this.props.onRestartGame}>
                    重新开始
                </button>
            </li>
        )
    }
    genHistoryItem(item,index){
        return (
            <li key={`history-item-${index}`}>
                <button onClick={this.handleClick.bind(this,item)}>
                    #{item.stepCount}:棋手{item.player}下到位置{item.pos}
                </button>
            </li>
        )
    }
    render(){
        const { history } = this.props
        if(history.length==0){
            return (
                <div className="history">
                    我是历史记录
                </div>
            )
        }else{
            return (
                <div className="history">
                    <ul>
                        {this.genHistoryStart()}
                        {history.map((item,index)=>this.genHistoryItem(item,index))}
                    </ul>
                </div>
            )
        }
        
    }
}

export default History