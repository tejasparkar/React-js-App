import React, { Component } from 'react'

export class Addninja extends Component {

    state = {
        name: null,
        age : null,
        course :null
    }
    handlechange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state);
       // console.log(this.state)
    }
    render() {
        return (
            <div className="card col-md-6">
                <h3>Add new Object</h3>
                <form onSubmit={this.handlesubmit}>
                    <br/>
                    <label htmlFor="name">Name :</label>
                    <input type="text" className="form-control" name="" id="name" onChange={this.handlechange} />
                    <br/>
                    <label htmlFor="age">Age :</label>
                    <input type="text" className="form-control" name="" id="age" onChange={this.handlechange} />
                    <br/>
                    <label htmlFor="course">Course :</label>
                    <input type="text" className="form-control" name="" id="course" onChange={this.handlechange}/>
                    <br/>
                    <br/>
                    <button className="form-control" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Addninja
