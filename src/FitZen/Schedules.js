import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Schedules = () => {
  const [data,setData] =useState(null);
  const [error, setError] = useState("");

  useEffect (()=>{
     axios.get(`https://fitversereactappbackend.onrender.com/schedules`)
     .then((res)=>{
      setData(res.data)



     })

     .catch((err)=>{
      
      setError("Failed to fetch schedules. Please try again later.");

     })
  },[])

  if(error) {
    return <p>{error}</p>
  }

  if(!data) {
    return <p>Loading...</p>

  }
  


  return (
<section id="schedule" className="py-5 bg-light text-dark">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold text-primary"> Class Schedule</h2>
      <p className="text-muted">Join any session — each class runs for 1 hour. Sunday is a rest day.</p>
    </div>

   



    <div className="table-responsive">
      <table className="table table-bordered align-middle text-center shadow-sm bg-white">
        <thead className="table-primary">
          <tr>
            <th>Class Title</th>
            <th>Timings</th>
            <th>Day</th>
            <th>Trainer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {

           data.map((schedule,index)=>{

           return(
             <tr key={index}>
                <td>{schedule.classTitle}</td>
                 <td>{schedule.time}</td>
                  <td>{schedule.day}</td>
                   <td>{schedule.trainer}</td>
                    <td>{schedule.status}</td>
             </tr>


        
           )


          } )

        }

        </tbody>
      </table>
    </div>
  </div>
</section>

  



    
  )
}

export default Schedules