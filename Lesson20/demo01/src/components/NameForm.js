import React from 'react'

class NameForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        console.log("非受控Input里的name是"+this.input.value)
        console.log("受控Input里的name是"+this.state.name)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" defaultValue="ABC" ref={(input)=>this.input=input} />
                    <input type="text" 
                           value={this.state.name} 
                           onChange={(event)=>this.setState({name:event.target.value})} 
                    />
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

export default NameForm