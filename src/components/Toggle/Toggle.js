import * as React from "react";

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
                isToggleOn: !this.state.isToggleOn
            }
        )
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'on' : 'OFF'}
            </button>
        )
    }
}

export default Toggle;