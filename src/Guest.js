import React, { Component } from 'react'

import { MyContext } from "./Context";

export default class Guest extends Component {
    static contextType=MyContext;
    componentDidMount=()=>{
        console.log(this.context);
    }
    render() {
        const {name,value}=this.context.data;
        return (
            <div>
        <h1>Gusest Component</h1>
        <h4>Name:{name} Value:{value}</h4>
        <button onClick={this.context.handleClick}>Change Value</button>
        </div>
        )
    }
}
