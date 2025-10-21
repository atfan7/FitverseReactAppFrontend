import React, { useState } from "react";
import axios from "axios";


const AddSchedule = ()=>{

    const[schedules,setSchedule] =useState({classTitle :'',time: '', day :'',trainer:'',status :''})

    const changeData =(e)=>{

        setSchedule({...schedules,[e.target.name] : e.target.value})

        
        


    }

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(schedules)

        axios.post(`https://fitversereactappbackend.onrender.com/schedules`,schedules)
        .then(()=>{
            alert(`Schedule Added Successfully to the Database`)
            setSchedule({classTitle :'',time: '', day :'',trainer:'',status :''})


        })

        .catch((err)=>{
            console.log(err)


        })
    }

    const{classTitle,time, day ,trainer,status } =schedules




   

    






    return(
        <div className="container p-5 text-center">
            <h1><strong>Fit<span className='text-danger'>Verse</span></strong> </h1>

        <h2 className="mb-3">Add Schedules</h2>

        <form onSubmit={submitHandler}>
            <input className="form-control mb-3" value={classTitle} name="classTitle" onChange={changeData} placeholder="Enter the Class Name"/>
            <input className="form-control mb-3" value={time} name="time" onChange={changeData} placeholder="Enter the time"/>
            


            <input name='day' value={day}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the day"/>
            <input name='trainer' value={trainer}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the name of trainer"/>
            <input name='status' value={status}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the status (Open/Closed)"/>

            <button type="submit" className="btn btn-success">Submit</button>



        </form>
        
        </div>

    )


}

export default AddSchedule;