var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class')

var Greeting  = createReactClass({
    getInitialState:function(){
        return { count:this.props.initialCount}
    },
    getDefaultProps:function(){
        return {
            name:"Unknow",
            initialCount:1,
        }
    },
    updateCount(){
        this.setState({
            count:this.state.count+1,
        })
    },
    componentDidMount:function(){
        var me = this
        this.timerID = setInterval(this.updateCount.bind(this),1000)
    },
    handleClick:function(){
        this.setState({
            count:this.state.count*10,
        })
    },
    render:function(){
        return (
            <div>
                <h1>Hello,{this.props.name}</h1>
                <span>{this.state.count}</span>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
})

// Greeting.defaultProps = {
//     name:"山地人"
// }

ReactDOM.render(<Greeting />,document.querySelector("#app"))

