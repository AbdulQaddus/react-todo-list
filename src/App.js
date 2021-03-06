import React, { Component } from "react";
import Home from "./pages/Home";
import TodoInput from "./componentstodo/TodoInput";
import TodoList from "./componentstodo/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  }
  handleChange=e=>{
    this.setState({
      item:e.target.value
    });
  }
  handleSubmit=e=>{
   e.preventDefault();
   const newItem={
     id:this.state.id,
     title:this.state.item
   };
   console.log(newItem)
   const updatedItems=[...this.state.items,newItem];
   this.setState({
     items:updatedItems,
     item:'',
     id:uuid(),
     editItem:false
   })
  }
  clearList=()=>{
    this.setState({items:[]})
  }
  handleDelete=id=>{
    const filteredItems=this.state.items.filter(item=>{
      return item.id !== id;//jo equal nahi hai wo ham ko cha hiya .jo equal hai wo nahi chahiya
      });
    this.setState({
      items:filteredItems
    });
  };
  handleEdit=id=>{
    const filteredItems=this.state.items.filter(item=>{
      return item.id !== id;//jo equal nahi hai wo ham ko cha hiya .jo equal hai wo nahi chahiya
      });
    const selectedItem=this.state.items.find(item=>item.id===id);
    console.log(selectedItem);
      this.setState({
      items:filteredItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    });
  };

  render(){
  return(
    <div>
   <div className="container">
     <div className="row">
       <div className="col-10 mx-auto col-md-8 mt-4">
         <h3 className="text-capitalize text-center">Todo Input</h3>
        <TodoInput item={this.state.item} editItem={this.state.editItem} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} 
        handleEdit={this.handleEdit}
         /> 
       </div>
     </div>
   </div>     
 
  </div>

  );
}
}
export default App;