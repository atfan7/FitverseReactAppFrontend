import React, { useEffect, useState } from 'react';


import axios from 'axios';

const Trainers = () => {

  const [data,setData] =useState([])

  useEffect(()=>{

   axios.get(`https://fitversereactappbackend.onrender.com/trainers`)
   .then((res)=>{
    setData(res.data)
    


   })
   .catch((err)=>{
    console.log(err)

   })


  })
  return (
    <section id="trainers" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Trainers</h2>
          <p className="text-muted">
            Dedicated, certified, and passionate — our team is here to guide your journey.
          </p>
        </div>

        <div className="row g-4" >

          {

            data.map((trainers,index)=>{

              return(

                <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0 text-center">
              <img
                src={trainers.image}
                alt=""
                className="card-img-top"
                style={{ height: "400px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{trainers.name}</h5>
                <p className="text-primary">{trainers.specialization}</p>
                <p className="card-text">
                  {trainers.description}
                </p>
              </div>
            </div>
          </div>


              )




            })

         
          

         
         
         
         }
       </div>
      
      </div>
    </section>
  );
};

export default Trainers;
