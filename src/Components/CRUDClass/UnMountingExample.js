import React, { Component } from 'react'
import Welcome from './Welcome';

export default class UnMountingExample extends Component {

    constructor(){
        super();
        this.state ={
            login:true
        }
    }
    logout = ()=>{
        this.setState({
            login: false
        })
        
       

    }
  render() {

    let msg=""

    if(this.state.login){
        msg= <Welcome />
    }
    else {
        msg="Please Login Again"
    }
    return (
      <div className='container p-5'>
        <h1>{msg}</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
