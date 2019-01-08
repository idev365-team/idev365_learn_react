import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      counter:[1,2,3]
    }
    let autoIndex = 0
    setInterval(()=>{
      // let counterNew = {...this.state.counter}
      let counterNew = [...this.state.counter,autoIndex++]
      // counterNew.a = autoIndex++
      this.setState((prevState)=>({
        counter:counterNew,
      }))
      console.log("setInterval call counter->",this.state.counter)
    },1000)
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.counter!=this.state.counter){
      return true
    }
    return false
  }
  render() {
    console.log("App->render()")
    return (
      <h1 className="App">
        Hello,React Render!!!
        <div>
          {JSON.stringify(this.state.counter)}
        </div>
      </h1>
    );
  }
}

export default App;
