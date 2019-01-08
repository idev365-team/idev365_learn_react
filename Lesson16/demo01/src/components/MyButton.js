import React from 'react'

function MyTest(props){
    return <h1>MyTest</h1>
}

function MyHi(){
    return <h1>MyHi</h1>
}

const comps = {
    myTest:MyTest,
    myHi:MyHi
}

class MyButton extends React.Component {
    render(){
        const H1 = comps[this.props.compName]
        return <H1 />
    }
}

export default MyButton