import React from 'react'
import Comment from './Comment'
import DataSource from './../db/DataSource'

class CommentList extends React.Component {
    constructor(){
        super()
        this.state = {
            comments:DataSource.getComments()
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
            comments: DataSource.getComments()
        })
    }

    handleAddComment(){
        DataSource.addComment({ msg:"这是一条评论"+Date.now() })
    }

    render(){
        return (
            <div>
                {
                    this.state.comments.map((comment)=>(
                        <Comment comment={comment} key={comment.id} />
                    ))
                }
                <button onClick={this.handleAddComment}>添加评论</button>
            </div>
        )
    }
}

export default CommentList