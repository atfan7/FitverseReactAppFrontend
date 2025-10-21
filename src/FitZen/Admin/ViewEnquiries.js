import axios from 'axios'

import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {

    const[enquiries,setEnquiries] =useState([])
    const [enquiry,setEnquiry] =useState({name : '',mobile : '',email : '',message : ''})
    useEffect(()=>{
        

        axios.get(`https://fitversereactappbackend.onrender.com/enquiries`)
        .then((res)=>{
            setEnquiries(res.data)

        })
        .catch((e)=>{
            console.log(e)
        })
    },[])


    const deleteEnq = (eid)=> {
        axios.delete(`https://fitversereactappbackend.onrender.com/enquiries/${eid}`)
        .then(()=>{
            alert(`Enquiry deleted`)

            const updatedEnquiries = enquiries.filter(e => e._id !== eid);

            setEnquiries(updatedEnquiries);

        })
        .catch((err)=>{
            console.log(err)

        })
    }
    

     const getOneRecord = (eid)=>{
        axios.get(`https://fitversereactappbackend.onrender.com/enquiries/${eid}`)
        .then((res)=>{
            setEnquiry(res.data)

        })
        .catch((err)=>{
             console.log(err)


        })


    }
    const changeData = (e)=>{
    setEnquiry({...enquiry ,[e.target.name] : e.target.value})
    }
    const submitHandler =(e)=>{ 
        e.preventDefault();
        console.log(enquiry)

        axios.put(`https://fitversereactappbackend.onrender.com/enquiries/${enquiry._id}`,enquiry)
        .then(()=>{
            alert(`Enquiry Updated`)

            const updatedEnquiries = enquiries.map(e =>{

                if(e._id === enquiry._id){
                    return enquiry
                }
                return e


            })

            setEnquiries(updatedEnquiries)

        })
        .catch((err)=>{
            console.log(err)

        })
     
    
    }

    const {name,email,mobile,message} =enquiry



  return (
    <div className='container p-5'>
        <h1 className='text-center mb-3'>Enquiries</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    enquiries.map((enq,index)=>{

                        return (
                            <tr key={index}>
                                <td>{enq.name}</td>
                                <td>{enq.mobile}</td>
                                <td>{enq.email}</td>
                                <td>{enq.message}</td>
                                <td>
                                    <button onClick={()=>getOneRecord(enq._id)}  data-bs-target='#modalid' data-bs-toggle='modal' className='btn btn-primary me-3'>
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                    <button onClick={()=>deleteEnq(enq._id)} className='btn btn-danger'>
                                        <i class="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>


                        )

                    })
                }


            </tbody>






        </table>

        <div className='modal' id ='modalid'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h1>Update Enquiry</h1>
                    </div>
                    <div className='modal-body'>

                        <form onSubmit={submitHandler}>

        <input type='text' name='name' value={name} onChange={changeData} placeholder='Enter Name' className='form-control mb-3'/>
        <p id='nameError'></p>

        <input type='text' name='mobile' value={mobile} onChange={changeData} placeholder='Mobile Number' className='form-control mb-3'/>
        <p id='mobileError'></p>

        <input type='email' name='email' value={email} onChange={changeData}  placeholder='Email Address' className='form-control mb-3'/>
        <p id='emailError'></p>
        <textarea name='message' value={message} onChange={changeData}  className='form-control mb-3' placeholder='Message'></textarea>

        <input type='submit' data-bs-dismiss='modal' className='btn btn-success'/>
    </form>  

                    </div>
                    <div className='modal-footer'> 

                    </div>

                </div>

            </div>

        </div>



    </div>
  )
}

export default ViewEnquiries