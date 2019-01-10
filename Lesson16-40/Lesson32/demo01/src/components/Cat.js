import React from 'react'

class Cat extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{
                height:80,
                width:80,
                backgroundColor:'red',
                borderWidth:1,
                borderStyle:'solid',
                position:"absolute",
                left:this.props.mouse?this.props.mouse.x:0,
                top:this.props.mouse?this.props.mouse.y:0,
                }}>
            </div>
        )
    }
}

export default Cat
