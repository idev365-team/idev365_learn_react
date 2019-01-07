import React,{Component} from 'react'
import './Square.css'

class Square extends Component {
    constructor(props){
        super(props)
        this.state={
            pos:props.pos,
        }
    }
    handleClick=()=>{
        const {onClick} = this.props
        if(onClick){
            onClick()
        }
    }
    getSqueryType(){
        const { pos } = this.state
        const { type }=this.props
        let typeName = "."
        if(type==="x"){
            typeName = "X"
        }else if(type==="o"){
            typeName = "O"
        }else{
            // typeName = pos
        }
        return typeName
    }
    render(){
       
        return <button className="square" onClick={this.handleClick}>{ this.getSqueryType() }</button>
    }
}

export default Square