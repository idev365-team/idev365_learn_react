import React,{Component} from 'react'
import './Square.css'

class Square extends Component {
    constructor(props){
        /*
            info
            pos
         */
        super(props)
        this.state={}
    }
    getSquareTitle(){
        const { info,pos } = this.props
        let title = pos
        if(info){
            title = info
        }
        return title
    }
    render(){
        return (
            <div className="square">
                {this.getSquareTitle()}
            </div>
        )
    }
}

export default Square