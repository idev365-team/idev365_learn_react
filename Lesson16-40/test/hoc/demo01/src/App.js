import React, { Component } from 'react'
import './App.css'
import CommentList from './components/CommentList'
import BlogPost from './components-hoc/BlogPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentList />
        <BlogPost id={1}/>
      </div>
    );
  }
}

export default App;
