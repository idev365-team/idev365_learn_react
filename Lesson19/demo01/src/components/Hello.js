import React,{Component} from 'react'

class Hello extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:"Hello"
        }
        this.myRef = React.createRef()
        console.log("constructor->",this.myRef)
    }


    componentWillMount(){
        console.log("componentWillMount->",this.myRef)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount->",this.myRef)
    }

    componentDidMount(){
        console.log("componentDidMount->",this.myRef)

        setTimeout(()=>{
            if(this.myRef && this.myRef.current){
                this.myRef.current.innerHTML="山地人"

                setTimeout(()=>{
                    this.setState({
                        title:"world"
                    })
                },1000)
            }
        },1000)
    }

    componentWillUpdate(){
        console.log("componentWillUpdate->",this.myRef)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate->",this.myRef)
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps->",this.myRef)
    }

    

    render(){
        console.log("render->",this.myRef)
        return <div ref={this.myRef}>{this.state.title}</div>
    }
}

export default Hello