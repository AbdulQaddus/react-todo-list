import React, { Component } from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faTrash,faPen} from "@fortawesome/free-solid-svg-icons"
export default class TodoItem extends Component {
    render() {
        const { title,handleDelete,handleEdit }=this.props;
        const txtc={
        //    marginLeft:"500px",    
        };
        return (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{title}</h6>
            <div className="todo-icon" style={txtc}>
                <span className="mx-2 text-success" onClick={handleEdit}>
                <i className="fas fa-pen" />
                    {/* <FontAwesomeIcon icon={faPen}/> */}
                </span>
                <span className="mx-2 text-danger" onClick={handleDelete} >
                <i className="fas fa-trash" />
                {/* <FontAwesomeIcon icon={faTrash}/> */}
                </span>
            </div>
        </li>
        )
    }
}
