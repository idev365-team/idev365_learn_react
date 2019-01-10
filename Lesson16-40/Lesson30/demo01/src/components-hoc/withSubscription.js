import React from 'react'
import DataSource from '../db/DataSource'

/*
    //BlogPost里的 
    state:{
        blogPost:DataSource.getBlogPost(props.id)
    }
    //使用高阶组件
    withSubscription(BlogPost, (ds,props)=>ds.getBlogPost(props.id)  )
*/

function withSubscription(MyComponent,selector){
    const MyComponentName = MyComponent.displayName || MyComponent.name
    return class extends React.Component {
        static displayName = `withSubscription->${MyComponentName}`
        constructor(props){
            super(props)
            this.state = {
                data:selector(DataSource,props)
            }
            this.handleChange = this.handleChange.bind(this)
        }
    
        componentDidMount(){
            DataSource.addChangeListener(this.handleChange)
        }
    
        componentWillUnmount(){
            DataSource.removeChangeListener(this.handleChange)
        }
    
        handleChange(){
            this.setState({
                data:selector(DataSource,this.props)
            })
        }

        render(){
            return <MyComponent {...this.props} data={this.state.data} />
        }
    }
}

export default withSubscription



/*
function withSubscription(MyComponent,selector){
    return class extends React.Component {}
}

function connect(selector){
    return function(MyComponent){
        return class extends React.Component {}
    }
}

connect( (ds,props)=>ds.getBlogPost(props.id) )(BlogPost)
*/