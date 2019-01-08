import React,{Component} from 'react'
import Square from './Square'
import './History.css'

class History extends Component {

    handleChangeRecord=(curStepCount,record)=>{
        const { onClickRecord } = this.props;
        if(onClickRecord){
            onClickRecord(curStepCount,record)
        }
    }
    genRecordItemUI(record,index){
        return (
            <div key={`record-item-${index}`} className="recordItem">
                {index+1}.<button onClick={this.handleChangeRecord.bind(this,index,record)} className="btnRecord">{record.player}下子到#{record.pos}位置</button>
            </div>
        )
    }

    handleRestartGame=()=>{
        const { onClickRestartGame } = this.props
        if(onClickRestartGame){
            onClickRestartGame()
        }
    }

    genRestartGameItemUI(){
        return (
            <div className="recordItem">
                0.<button onClick={this.handleRestartGame} className="btnRecord">重新开始游戏</button>
            </div>
        )
    }

    render(){
        const { history } = this.props
        if(history&& history.length>0){
            return (
                <div className="history">
                    {this.genRestartGameItemUI()}
                    {history.map((record,index)=>this.genRecordItemUI(record,index))}
                </div>
            )
        }else{
            return (<div className="history">当前无历史记录</div>)
        }
        
    }
}

export default History