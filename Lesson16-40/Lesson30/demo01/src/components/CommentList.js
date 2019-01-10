import React from 'react'
import DataSource from '../db/DataSource'
import Comment from './Comment'

class CommentList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments:DataSource.getComments()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddOneCommonent = this.handleAddOneCommonent.bind(this)
    }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange(){
        this.setState({
            comments:DataSource.getComments()
        })
    }

    handleAddOneCommonent(){
        const id = Date.now()
        DataSource.addComment({ id:id,msg:"新评论"+id})
    }

    render(){
        return (
            <div>
                { this.state.comments.map((comment)=>(
                    <Comment comment={comment} key={comment.id} />
                )) }

                <button onClick={this.handleAddOneCommonent}>添加一条评论</button>
            </div>
        )
    }
}

export default CommentList