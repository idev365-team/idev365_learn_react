import React from 'react'
import DataSource from './../db/DataSource'


const withSubscription = function(Component,selectData){
    return class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                data:selectData(DataSource,props)
            }
            this.handleChange = this.handleChange.bind(this)
        }
    
        componentDidMount(){
            DataSource.addChangeListener(this.handleChange)
        }
    
        componentWillUnmount(){
            DataSource.removeChangeListener(this.handleChange)
        }
    
        handleChange=()=>{
            this.setState({
                data:selectData(DataSource,this.props)
            })
        }
    
        render(){
            return (
                <Component {...this.props} data={this.state.data}/>
            )
        }
    }    
}

export default withSubscription