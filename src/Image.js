import React, { Component } from 'react'
export default class Image extends Component {
    render() {
        if(this.props.balike === "NoImage"){
            throw new Error("image not found");
        }
        return (
            <img src={this.props.balike} alt="MYPIC" width="300px"/>
        )
    }
}
