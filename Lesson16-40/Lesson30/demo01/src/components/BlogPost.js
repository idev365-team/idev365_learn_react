import React from 'react'
import DataSource from '../db/DataSource'

class BlogPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            blogPost:DataSource.getBlogPost(props.id)
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdateABlog = this.handleUpdateABlog.bind(this)
    }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange(){
        this.setState({
            blogPost:DataSource.getBlogPost(this.props.id)
        })
    }

    handleUpdateABlog(){
        const { blogPost } = this.state
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
                    { this.state.blogPost.msg }
                </div>
                <button onClick={this.handleUpdateABlog}>提交文章修改</button>
            </div>
        )
    }
}

export default BlogPost