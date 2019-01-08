var React = require("react")
var ReactDOM = require('react-dom')
var createReactClass  = require('create-react-class')

var Greeting = createReactClass({
    render:function(){
        return <h1>Hello,{this.props.name}</h1>
    }
})


ReactDOM.render(<Greeting name="ABC" />,document.querySelector("#app"))



