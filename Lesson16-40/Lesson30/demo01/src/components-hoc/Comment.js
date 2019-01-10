import React from 'react'

class Comment extends React.Component {
    render(){
        return <div>{ this.props.comment.msg }</div>
    }
}

export default Comment