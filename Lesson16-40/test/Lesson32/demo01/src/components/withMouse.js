import React from 'react'

function withMouse(Component){

    class WithMouse extends React.Component {
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
                    <h1>withMouse.js-->请移动你的鼠标！</h1>
                    <p>当前鼠标位置为({this.state.x},{this.state.y})</p>
                    <Component {...this.props} mouse={mouse} />
                </div>
            )
        }
    }
    return WithMouse
}

export default withMouse