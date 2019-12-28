import React, { Component } from 'react';

export default class Marks extends Component{
    constructor(props){
        super(props);
        this.state={
            mroll:this.props.roll
        };
    }
    static getDerivedStateFromProps(props,state){
        console.log("Get Derived state from Props");
        console.log(props,state);
       if(props.roll !== state.mroll)
       {
           return { mroll:props.roll };
       }
       return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.mroll <107){
            console.log("Marks ShouldComponentUpdate");
            console.log(nextProps,nextState);
            return true;
        }
        console.log(nextProps,nextState);
        return false;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Marks  get Snapshot Before Update it run before update");
        console.log(prevProps,prevState);
        return 266;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Marks Component Did Update it run after update");
        console.log(prevProps,prevState,snapshot);
    }
    render(){
        console.log("Marks Rendered");
    return (<div>
    <h1>{this.state.mroll}</h1>
           </div>);
        }
    }
