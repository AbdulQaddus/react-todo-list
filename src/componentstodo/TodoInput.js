import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBook} from "@fortawesome/free-solid-svg-icons"
export default class TodoInput extends Component {
    
    render() {
        const { item,handleChange,handleSubmit,editItem}=this.props; 
        
        return <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
        <div className="input-group">
        <div className="input-group-prepend">
        <div className="input-group-text bg-primary text-white">
            <i className="fas fa-book" />
            {/* <FontAwesomeIcon icon={faBook}/> */}
            </div> 
            </div> 
            <input type="text" className="form-control text-capitalize" placeholder="add to do item" 
            value={item}
            onChange={handleChange}
            ></input>
            </div>    
    <button type="submit" className={editItem?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"}>{editItem?"edit item":"add item"}</button>
            </form>
        </div>
    }
}
