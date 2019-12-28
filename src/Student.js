import React, { Component } from 'react';

class Student extends Component{
    componentDidMount(){
        console.log("Student Mounted");
    }
    render(){
        console.log("Student renderd");
    return (<div>
              <h2>helooo Student Component</h2>
           </div>);
        }
    }
export default Student;