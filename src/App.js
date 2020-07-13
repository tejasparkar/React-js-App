import React, { Component } from 'react';
import Ninjas from './ninjas';
import Addninja from './Addninja'

export class App extends Component {
 state = {
   ninjas : [
     {name:"Tejas",course:"IT",id:1, age:27},
     {name:"Shlok",course:"Comps",id:2, age:6},
     {name:"Sneha",course:"Commerce",id:3, age:32}
   ]
 }

 addNinja = (ninja)=>{
  ninja.id = Math.random();
  let ninjas = [...this.state.ninjas,ninja];
  this.setState({
    ninjas : ninjas
  })
 }

 deleteNinja = (id)=>{
  let ninjas =  this.state.ninjas.filter(ninja =>{
    return ninja.id !== id;
  });
  this.setState({
    ninjas : ninjas
  })
 }
 
  render() {
    return (
      <div className="container-fluid container">
        <div className="row">
       
        <div className="col-md-6">
        <h1>My First react app</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} data={this.state.ninjas}/>
        </div>
        <Addninja addNinja={this.addNinja}/>
        </div>
      </div>
    )
  }
}

export default App
