import React, { Component } from 'react'

export default class MountingExample extends Component {

 constructor(){

    super();
    this.state ={
        count:0 
    }
    console.log("constructor");

 }
 static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps")
    return null
 }

 componentDidMount() {
    console.log("componentDidMount")
 }

 add =()=>{
    this.setState({
        count: this.state.count + 1
    })
    console.log("Update Phase Starts here")

 }
 shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true

 }

 getSnapshotBeforeUpdate(preProp,preState) {
    console.log("getSnapshotBeforeUpdate",preState.count);
    return null

 }

 componentDidUpdate(){
    console.log("componentDidUpdate",this.state.count);

 }


  render() {

    console.log("render");

    return (
      <div className='container p-5'>

        <h1>counter :{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}
