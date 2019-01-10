import React from 'react'
import withMouse from './withMouse';

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse
      return (
        <div style={{display:"inline-block",width:50,height:50,backgroundColor:'blue', position: 'absolute', left: mouse?mouse.x:0, top: mouse?mouse.y:0 }} />
      );
    }
}

export default withMouse(Cat)
