import axios from "axios";

import React, { useEffect } from "react";
import { useState } from "react";



const ViewSchedules = ()=>{

    const[schedule, setSchedules] = useState([]);

    const[oneSchedule,setOneSchedule] = useState({classTitle :'',time: '', day :'',trainer:'',status :''})


    useEffect(()=>{

        axios.get(`https://fitversereactappbackend.onrender.com/schedules`)
        .then((res)=>{
            setSchedules(res.data)
            


        })

        .catch((err)=>{

            console.log(err);


        })
    },[]);

    const deleteSchedule =(scid)=>{

        axios.delete(`https://fitversereactappbackend.onrender.com/schedules/${scid}`)
        .then(()=>{

            alert(`Class Deleted Successfully`);

            const updatedSchedules =schedule.filter(s => s._id !==scid)

            setSchedules(updatedSchedules);
            
            
            

        })
        
        .catch((err)=>{

            console.log(err)

        })


    }

    const extractDetails =(edid)=>{

        axios.get(`https://fitversereactappbackend.onrender.com/schedules/${edid}`)
        .then((res)=>{
            setOneSchedule(res.data)
            console.log(res.data)


        })

        .catch((err)=>{
             console.log(err)

        })


    }

    const {classTitle ,time ,day,trainer,status} = oneSchedule;

    const changeData =(e)=>{

        setOneSchedule({...oneSchedule ,[e.target.name] : e.target.value })


    }


    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(oneSchedule);

        axios.put(`https://fitversereactappbackend.onrender.com/schedules/${oneSchedule._id}`,oneSchedule)
        .then(()=>{
            alert(`Schedule Updated Successfully`)

            const updatedSchedules = schedule.map(s =>{
                if(s._id ===oneSchedule._id){
                    return oneSchedule ;
                }

                return s;


               })

               setSchedules(updatedSchedules)

               



        })

        .catch((err)=>{
            console.log(err)

        })
    }
    

    return (
        <div className="container p-5">
            <h1 className="text-center mb-4">Class Schedule at Fit<span className='text-danger'>Verse</span></h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Time</th>
                        <th>Day</th>
                        <th>Trainer</th>
                        <th>Status</th>
                        <th>Action</th>
                        

                    </tr>
                </thead>

                <tbody>

                    {
                        schedule.map((sc,index)=>{

                            return (

                            <tr>    

                            <td>{sc.classTitle}</td>
                            <td>{sc.time}</td>
                            <td>{sc.day}</td>
                            <td>{sc.trainer}</td>
                            <td>{sc.status}</td>
                           
                            <td className="d-flex">
                            <button onClick={()=>extractDetails(sc._id)}  data-bs-target ='#popup' data-bs-toggle='modal' className="btn btn-primary me-2"><i class="bi bi-pencil"></i></button> 

                            <button onClick={()=>(deleteSchedule(sc._id))} className="btn btn-danger"><i class="bi bi-trash"></i></button> 

                            </td>

                            </tr>

                            



                                   )
                        })
                    }
                    


                </tbody>


            </table>

            <div className="modal" id ='popup'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Edit the Schedule</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body">

          <form onSubmit={submitHandler}>
            <input className="form-control mb-3" value={classTitle} name="classTitle" onChange={changeData} placeholder="Enter the Class Name"/>
            <input className="form-control mb-3" value={time} name="time" onChange={changeData} placeholder="Enter the time"/>
            


            <input name='day' value={day}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the day"/>
            <input name='trainer' value={trainer}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the name of trainer"/>
            <input name='status' value={status}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the status (Open/Closed)"/>

            <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Submit</button>



        </form>




            </div>
                        <div className="modal-footer"></div>
                    </div>

                </div>

            </div>


        
        
        
        
        
        
        
        </div>

       

    )

}

export default ViewSchedules ;