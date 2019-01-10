import React from 'react'
import ReactDOM from 'react-dom'
// import MyButton from './MyButton'


// ReactDOM.render(
//     <MyButton/>,
//     document.getElementById("root")
// )

import Loadable from 'react-loadable'

const LoadableOtherComponent = Loadable({
    loader:()=>import('./MyButton'),
    loading:()=><div>Loading...</div>
})

const MyButtonContainer = ()=>( <LoadableOtherComponent />)

ReactDOM.render(
    <MyButtonContainer/>,
    document.getElementById("root")
)