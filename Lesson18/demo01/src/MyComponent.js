// @flow
import React from 'react';

type Props = {
    foo:number,
    bar?:string,
}

class MyComponent extends React.Component<Props> {
    render(){
        return <div>{this.props.bar}</div>
    }
}

export default MyComponent