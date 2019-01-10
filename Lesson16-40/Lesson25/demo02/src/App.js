import React, { Component } from 'react';
import './App.css';
import FancyButton from './FancyButton';

class TestComp extends React.Component{
  componentDidMount(){
    this.props.myRef.current = this;
  }
  sayHello(){
    console.log("TestComp->sayHello")
  }
  render(){
    console.log("TestComp",this.props,this.refs)
    return (<div onClick={this.props.onClick}>AABB</div>)
  }
}

class App extends Component {
  constructor(props){
    super(props)
    // this.ref = React.createRef()
    this.refTest = React.createRef()
  }

  handleClick=()=>{
    // console.log("App handleClick->",this.ref.current)
    // this.ref.current.sayHi()

    this.refTest.current.sayHello()
  }
  render() {
    return (
      <div className="App">
        <TestComp myRef={this.refTest}  onClick={this.handleClick}/>
        {/* <FancyButton ref={this.ref} onClick={this.handleClick}/> */}
      </div>
    );
  }
}

export default App;
