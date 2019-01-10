import React from 'react'
import withMouse from './withMouse';

class Dog extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{
                color:"white",
                height:80,
                width:80,
                backgroundColor:'blue',
                borderWidth:1,
                borderStyle:'solid',
                position:"absolute",
                left:this.props.mouse?this.props.mouse.x:0,
                top:this.props.mouse?this.props.mouse.y:0,
                }}>
                小狗
            </div>
        )
    }
}

export default Dog


