import React, { Component } from 'react'

export default class Welcome extends Component {

    componentWillUnmount(){
       alert("Are you sure?")
    }
  render() {
    return (
      <div>Welcome to the Application</div>
    )
  }
}
