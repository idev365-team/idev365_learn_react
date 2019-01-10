import React from 'react'

export default class MyButton extends React.Component {

  
    render(){
        return <button ref={(ref)=>this.btnRef=ref}>My Button</button>
    }
}