import React from "react";

export default class Hello extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello {this.props.nama} </h1>
            </div>
        )
    }
}