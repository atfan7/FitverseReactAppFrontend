import React, { Component } from 'react'
import axios from 'axios';

export default class AddStudent extends Component {

    constructor(){
        super();

        this.state={
            name : '',
            course : '',
            status :''
        }
    }

    changeData=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    submitHandler =(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post(`http://localhost:3000/students`,this.state)
        .then(()=>{
            alert("Student Added Successfully")
        })
        .catch(()=>{
            console.log(e)
        })




    }
  render() {
    return (
      <div className='col-lg-6 mx-auto  shadow container p-5'>
        <h1>AddStudent</h1>
        <form onSubmit={this.submitHandler}>

            <input type='text' name='name' onChange={this.changeData}className='form-control mb-3'  placeholder='Enter Name' />
            <input type='text' name='course'onChange={this.changeData} className='form-control mb-3'  placeholder='Enter Course' />
            <input type='text' name='status'onChange={this.changeData} className='form-control mb-3'  placeholder='Enter Status' />
            <input type='submit'className='form-control mb-3' />
        </form>

        </div>
    )
  }
}
