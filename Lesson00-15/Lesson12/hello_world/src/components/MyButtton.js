import React,{Component} from 'react'
import './MyButton.css'

class MyButton extends Component {
    handleClick=()=>{
        const {onClick} = this.props
        if(onClick){
            onClick()
        }
    }
    render(){

        return <button className="btn" onClick={this.handleClick}>MyButton</button>
    }
}

export default MyButton