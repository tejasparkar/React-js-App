import React, { Component } from 'react';

class App extends Component {
  state = {
    name: "Tejas",
    code: "React js"
  }
  handleclick = (e) => {
    console.log(e.target);
    this.setState({
      name: "Shlok"
    })
  }
  handleover = (e) => {
    console.log(e.target, e.pageX)
  }

  copyCat = (e) => {
    alert("Try to be original cheaters")
  }
  handlechange =(e)=>{
    this.setState({
      name:e.target.value
    })
  }

  handlesubmit =(e)=>{
    e.preventDefault();
    console.log("Form submitted name", this.state.name)
  }
  render() {
    return (
      <div>
        <h3>Hi Welcome to React</h3>
        <p onMouseOver={this.handleover}>Hello my name is {this.state.name} and i am a {this.state.code} programmer</p>
        <button className="btn" onClick={this.handleclick}>Click me</button>
        <p onCopy={this.copyCat}>What we think, we become</p>
        <div>
          <form onSubmit={this.handlesubmit}>
          <input type="text"onChange={this.handlechange}/>
          
          <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
          
          
          </div>
      </div>
    );
  }
}

export default App;
