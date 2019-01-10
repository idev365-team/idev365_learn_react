import React from 'react'

function logProps(WrappedComponent){
    const WrappedComponentName = WrappedComponent.displayName || WrappedComponent.name
    class LogProps extends React.Component {
        componentDidUpdate(prevProps){
            console.log(WrappedComponentName+'->old props:',prevProps)
            console.log(WrappedComponentName+'->new props:',this.props)
        }
        render(){
            const { forwardedRef,...rest } = this.props
            return <WrappedComponent ref={forwardedRef} {...rest} />
        }
    }


    function forwardRef(props, ref) {
        return <LogProps {...props} forwardedRef={ref} />;
    }


    return React.forwardRef(forwardRef)
}

export default logProps