import React from 'react'

class MouseTracker extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            x:0,
            y:0,
        }
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove(event){
        this.setState({
            x:event.clientX,
            y:event.clientY,
        })
    }

    render(){
        return (
            <div style={{height:300,borderWidth:1,borderStyle:'solid'}} onMouseMove={this.handleMouseMove}>
                <h1>移动您的鼠标</h1>
                <div>鼠标当前坐标为:({this.state.x},{this.state.y})</div>
            </div>
        )
    }
}

export default MouseTracker
