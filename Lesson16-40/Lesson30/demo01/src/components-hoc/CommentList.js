import React from 'react'
import DataSource from '../db/DataSource'
import Comment from './Comment'
import withSubscription from './withSubscription';

class CommentList extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOneCommonent = this.handleAddOneCommonent.bind(this)
    }

    handleAddOneCommonent(){
        const id = Date.now()
        DataSource.addComment({ id:id,msg:"新评论"+id})
    }

    render(){
        return (
            <div>
                { this.props.data.map((comment)=>(
                    <Comment comment={comment} key={comment.id} />
                )) }

                <button onClick={this.handleAddOneCommonent}>添加一条评论</button>
            </div>
        )
    }
}

export default withSubscription(CommentList,(ds)=>ds.getComments())