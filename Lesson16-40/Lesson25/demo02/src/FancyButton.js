import React from 'react'

class FancyButton extends React.Component {
    sayHi(){
        alert("Hi,山地人")
    }
    render(){
        return <button onClick={this.props.onClick}>FancyButton</button>
    }
}

export default React.forwardRef((props,ref)=><FancyButton {...props} ref={ref}/>)