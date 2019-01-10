import React from 'react'
import Cat from './Cat';

class MouseWithCat extends React.Component {
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
        const mouse = { x:this.state.x, y:this.state.y }
        return (
            <div style={{ height:'300px',borderWidth:1,borderStyle:'solid' }} onMouseMove={this.handleMouseMove}>
                <h1>请移动你的鼠标！</h1>
                <Cat {...this.props} mouse={mouse}/>
            </div>
        )
    }
}

export default MouseWithCat