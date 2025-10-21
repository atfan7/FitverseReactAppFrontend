import React, { Component } from 'react'

export default class StateExample extends Component {
   constructor() {
    super();

    this.state = {
        count: 0
    }
   }

   add =()=>{
    this.setState({
        count: this.state.count + 1 
    })
   }

   sub =()=>{
    this.setState({
        count: this.state.count - 1 
    })
   }


   


  render() {


    return (
      <div className='container p-5'>

        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>

      </div>
    )



  }
}
