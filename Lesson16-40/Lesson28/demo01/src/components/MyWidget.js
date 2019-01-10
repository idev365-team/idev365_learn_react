import React from 'react'

class MyWidget extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
       return (
                <div>
                    <h1>MyWidget</h1>
                        <span>
                            课28.发生错误时如何科学展示——Error Boundaries
                            {this.state.abc}
                        </span>
                </div>
       )
    }
}

export default MyWidget