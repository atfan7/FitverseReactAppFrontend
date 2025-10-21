import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';

const Classes = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get(`https://fitversereactappbackend.onrender.com/classes`)
    .then((res)=>{
      
      setData(res.data)
      

    })
    .catch((err)=>{
      console.log(err)

    })
  })



  return (
    <section id="classes" className="py-5 " style={{height:'80vh'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Classes</h2>
          <p className="text-muted">Discover sessions designed for your body and mind.</p>
        </div>

        <div className="row g-4">

          {
            data.map((item,index)=>{
              return (

                <div className ="col-md-4" key={index}>
                  <div className='card' >
                    <div className='card-header' >
                      <p className='text-danger'>{item.level}</p>

                  </div>
                  
                  <div className='card-body' >
                    <h5 className='card-title mb-3'>{item.name}</h5>

                    <Link to={`/classDetails/${item._id}`}>
                    <button className='btn btn-success' >Know More</button>
                    
                    </Link>
                    
                   
                    
                    

                  </div>
                  


                  </div>
                  </div>
              )
              
          })
          
        }
        

        </div>
        </div>
        
         
          
    </section>
    
  )
}

export default Classes;
