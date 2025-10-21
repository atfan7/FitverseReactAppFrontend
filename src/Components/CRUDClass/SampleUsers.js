import React, { Component } from 'react';
import axios from 'axios';

export default class SampleUsers extends Component {

    constructor(){
        super();

        this.state={
            users :[]
        }


    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            console.log(res.data)
            this.setState({
                users : res.data
            })

        })
        .catch((err)=>{
             console.log(err)


        })

        

    }
  render() {
    return (
      <div className='container p-5'>

        <h1>Users : {this.state.users.length}</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Company</th>
                </tr>
            </thead>

            <tbody>
                { 
                  this.state.users.map((user,index)=>{
                     return (

                        <tr key={index} >
                             <td>{user.name}</td>
                             <td>{user.phone}</td>
                             <td>{user.email}</td>
                             <td>{user.address.city}</td>
                             <td>{user.company.name}</td>


                        </tr>
                     )


                  })


                }

            </tbody>


        </table>
        
      </div>
    )
  }
}
