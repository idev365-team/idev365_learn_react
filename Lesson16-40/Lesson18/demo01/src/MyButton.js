// @flow

import React from 'react'

type Props = {
    foo:number,
}

function MyButton(props:Props){
    // let a = props.abc
    return <button>MyButton</button>
}

MyButton.defaultProps = {
    foo:42,
}

