import React from 'react'
import PropTypes from 'prop-types'

class Greeting extends React.Component {
    static propTypes = {
        name:  PropTypes.oneOf(['News', 'Photos'])
    }

    static defaultProps = {
        name:"Photos",
    }

    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
}

  
export default Greeting