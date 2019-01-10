import React, { Component } from 'react';
import './App.css';
import FancyButton from './components/FancyButton';

class App extends Component {
  constructor(){
    super()
    this.state = {
      title:"ABC",
    }
    this.handleClickFancyButton = this.handleClickFancyButton.bind(this)

    this.fancyButtonRef = React.createRef()
  }

  handleClickFancyButton(){
    this.setState({
      title:123,
    })

    console.log( "this.fancyButtonRef->",this.fancyButtonRef )
    this.fancyButtonRef.current.sayHi()
  }

  render() {
    return (
      <div className="App">
        <FancyButton onClick={this.handleClickFancyButton} 
                     title={this.state.title}
                     ref={ this.fancyButtonRef }
        />
      </div>
    );
  }
}

export default App;
