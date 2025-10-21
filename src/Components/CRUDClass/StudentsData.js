import axios from 'axios';
import React, { Component } from 'react'

export default class StudentsData extends Component {

    constructor(){
        super();

        this.state ={
            students : [],
            id: '',
            name: '',
            course : '',
            status :''


        }

    }

    componentDidMount(){
        axios.get(`http://localhost:3000/students`)
        .then((res)=>{
            console.log(res.data)
            this.setState({
                students : res.data

            })

        })
        .catch((err)=>{
            console.log(err)

        })
    }

    deleteStudent =(sid)=>{
        axios.delete(`http://localhost:3000/students/${sid}`)
        .then(()=>{
            alert(`Student removed`)
            this.setState({
                students : this.state.students.filter ((student) => student.sid !=sid)
            })

        })
        .catch((e)=>{
            console.log(e)

        })

    }

    getOneRecord =(sid)=>{
        axios.get(`http://localhost:3000/students/${sid}`)
        .then((res)=>{

            this.setState({
                id: res.data.id,
                name:res.data.name,
                course:res.data.course,
                status:res.data.status
            })
            

        })
        .catch((e)=>{
            console.log(e)

        })


    }

    changeData = (e)=>{
        this.setState({
        [e.target.name] : e.target.value
        })
    }

    submitHandler =(e)=>{
        
         const {id,name,course,status} =this.state;
         console.log(id,name,course,status)

         axios.put(`http://localhost:3000/students/${id}`,{id,name,course,status})
         .then(()=>{
            alert(`Student Details Updated Successfully`)

         })
         .catch((e)=>{
             console.log(e)

         })


    }



  render() {
    const {id,name,course,status} =this.state;

    return (
      <div className='container p-5'>
        <h1>Students :{this.state.students.length}</h1>
        
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Status</th>
                    <th>Action</th>
                 </tr>

            </thead>

            <tbody>
                {
                    this.state.students.map((stu,index)=>{

                        return(

                            <tr key={index}>
                                <td>{stu.name}</td>
                                <td>{stu.course}</td>
                                <td>{stu.status}</td>
                                <td>
                                    <button onClick={()=>this.getOneRecord(stu.id)} data-bs-target ='#update' data-bs-toggle ='modal' className='btn btn-primary me-3 '>Edit</button>
                                    <button  className='btn btn-danger' onClick={()=>this.deleteStudent(stu.id)}>Delete</button>
                                </td>
                            </tr>


                        )
                            

                        

                    })
                }
            </tbody>


        </table>
        <div className='modal fade' id='update' data-bs-backdrop='static'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4>Update Student</h4>
                        <button className='btn btn-close' data-bs-dismiss ='modal'></button>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={this.submitHandler}>
                            <input value ={name} name ='name' onChange={this.changeData} placeholder='Student Name' className='form-control mb-3' />
                            <input value ={course} name ='course' onChange={this.changeData} placeholder='Course Name' className='form-control mb-3' />
                            <input value ={status} name ='status' onChange={this.changeData} placeholder='Course Status' className='form-control mb-3' />
                            <input  type='submit' className='form-control mb-3 btn btn-success' />

                        </form>


                    </div>
                    <div className='modal-footer'></div>


                </div>
            </div>

        </div>
        </div>
    )
  }
}
