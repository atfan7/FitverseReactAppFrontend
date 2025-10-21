import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { Store } from '../../App';
import axios from 'axios';





const Dashboard = () => {

  const [token,setToken]= useContext(Store);
  const [data,setData] =useState("")

  useEffect(()=>{
    axios.get('https://fitversereactappbackend.onrender.com/dashboard',{
      headers :{
        "x-token": token

      }


    })
    .then((res)=>{
      setData(res.data.message)

    })
    .catch((err)=>console.log(err))

  },[token])

 if (!token) {
  return <Navigate to="/admin" replace />;
}


    return (
    <section className='container-fluid '>

        <div className='row'>
            <aside className='col-lg-3'>

                <Link to={''}>
                <button className='btn ' style={{color:'teal'}}><h1>{data} Dashboard</h1></button>
                </Link>

                <Link to={`addclass`}>
                <button>Add Class</button>
                </Link>
                

                 <Link to={`viewclasses`}>
                 <button>View Classes</button>
                 </Link>

                  <Link to={`addschedule`}>
                  <button>Add Schedule</button>
                  </Link>

                   <Link to={`viewschedules`}>
                   <button>View Schedules</button>
                   </Link>

                  <Link to={`addtrainer`}>
                    <button>Add Trainer</button>
                  </Link>

                   <Link to={`viewtrainer`}>
                     <button>View Trainers</button>
                    </Link>

                  <Link to={`viewenquiries`}>
                      <button>View Enquiries</button>
                   </Link>

                   <button className="btn btn-danger mt-2 w-25" onClick={() => setToken(null)}>Logout</button>

                


            </aside>

            <div className='col-lg-9'>
              <Outlet />


            </div>

        </div>


    </section>
  )

  }

 


  


export default Dashboard