import React from 'react'
import DataSource from '../db/DataSource'
import withSubscription from './withSubscription';

class BlogPost extends React.Component {
    constructor(props){
        super(props)
        this.handleUpdateABlog = this.handleUpdateABlog.bind(this)
    }

    handleUpdateABlog(){
        
        const blogPost = this.props.data
        const blogPostNew = Object.assign({},blogPost,{
            msg:"我是修改后的文章内容"+Date.now()
        })
        console.log("handleUpdateABlog-》",blogPostNew)
        DataSource.updateBlogPost(blogPostNew)
    }

    render(){
        return (
            <div>
                <div>
                    { this.props.data.msg }
                </div>
                <button onClick={this.handleUpdateABlog}>提交文章修改</button>
            </div>
        )
    }
}

//DataSource.getBlogPost(props.id)
export default withSubscription(BlogPost,(ds,props)=>ds.getBlogPost(props.id) )