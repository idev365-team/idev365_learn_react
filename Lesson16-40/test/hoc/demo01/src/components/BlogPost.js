import React from 'react'
import DataSource from './../db/DataSource'

class BlogPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            blogPost:DataSource.getBlogPost(props.id)
        }
        
    }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange=()=>{
        this.setState({
            blogPost:DataSource.getBlogPost(this.props.id)
        })
    }

    handleChangeBlog=()=>{
        const {blogPost} = this.state
        const blogPostNew = Object.assign({},blogPost,{ msg:"修改的文章"+Date.now()})
        DataSource.updateBlogPost(blogPostNew)
    }

    render(){
        const { blogPost } = this.state
        return (
            <div>
                <div>{blogPost.msg}</div>
                <button onClick={this.handleChangeBlog}>修改文章</button>
            </div>
        )
    }
}

export default BlogPost