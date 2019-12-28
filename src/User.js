
import React, { Component } from 'react';
class User extends Component{
  componentWillMount(){
      console.log("User Component Will Mount");
  } 
    render(){
    return (<div>
           <h2>User Component h2</h2>
           </div>);
        }
    }
export default User;