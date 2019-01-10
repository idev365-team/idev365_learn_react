import React from 'react'

class Comment extends React.Component {
    constructor(){
        super()
        this.state = {
           
        }
      
    }

    render(){
        return (
            <div>
                {
                   this.props.comment.msg
                }
            </div>
        )
    }
}

export default Comment