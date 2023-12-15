import React, { Component } from "react";

class ClassExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name + ' Rodda'
        }

    }

    render() {
        return (<div>Hello {this.state.name}</div>);
    }
}


export default ClassExample