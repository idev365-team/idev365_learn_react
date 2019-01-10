import React from 'react'



class Chosen extends React.Component {

    componentDidMount(){
        this.$el = window.$(this.el)
        this.$el.chosen({width: "200px"})

        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
          this.$el.trigger("chosen:updated");
        }
    }

    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destroy');
    }

    handleChange(e) {
        console.log("Chosen->handleChange called")
        if(this.props.onChange){
            this.props.onChange(e.target.value);
        }
        
    }


    render(){
        return (
            <div>
                <select data-placeholder="Choose a country..." multiple className="chosen-select" ref={el=>this.el = el}>
                    {this.props.children}
                </select>
            </div>
        )
    }
}

export default Chosen