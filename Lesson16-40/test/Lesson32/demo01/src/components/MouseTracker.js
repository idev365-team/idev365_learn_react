import React from 'react'
import Mouse from './Mouse';

class MouseTracker extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>请移动你的鼠标！</h1>
                <Mouse 
                    render={
                        ({mouse})=>(
                            <Cat mouse={mouse} />
                        ) 
                    } 
                />
            </div>
        )
    }
}

export default MouseTracker