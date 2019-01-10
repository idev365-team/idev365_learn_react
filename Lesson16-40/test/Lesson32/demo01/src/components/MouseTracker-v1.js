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
            <div style={{ height:'300px',borderWidth:1,borderStyle:'solid' }} onMouseMove={this.handleMouseMove}>
                <h1>请移动你的鼠标！</h1>
                <p>当前鼠标位置为({this.state.x},{this.state.y})</p>
            </div>
        )
    }
}

export default MouseTracker