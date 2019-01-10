import React from 'react'
import DataSource from './../db/DataSource'
import withSubscription from './withSubscription'

class BlogPost extends React.Component {
    constructor(props){
        super(props)
    }

    handleChangeBlog=()=>{
        const {data} = this.props
        const blogPostNew = Object.assign({},data,{ msg:"修改的文章"+Date.now()})
        DataSource.updateBlogPost(blogPostNew)
    }

    render(){
        const { data } = this.props
        console.log("data->",data)

        return (
            <div>
                <div>{data.msg}</div>
                <button onClick={this.handleChangeBlog}>修改文章</button>
            </div>
        )
    }
}

export default withSubscription(BlogPost,(ds,props)=>ds.getBlogPost(props.id))
