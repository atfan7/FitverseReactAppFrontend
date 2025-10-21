import React, { useState } from "react";
import axios from "axios";


const AddTrainer = ()=>{

    const[trainer,setTrainer] =useState({name :'',specialization: '', description :'',image:''})

    const changeData =(e)=>{

        setTrainer({...trainer,[e.target.name] : e.target.value})

         console.log(trainer)
        


    }

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(trainer)

        axios.post(`https://fitversereactappbackend.onrender.com/trainers`,trainer)
        .then(()=>{
            alert(`Trainer Added Successfully`)
            setTrainer({name :'',specialization: '', description :'',image :''})


        })

        .catch((err)=>{
            console.log(err)


        })
    }

    const{name,specialization, description,image} =trainer




   

    






    return(
        <div className="container p-5 text-center">
            <h1><strong>Fit<span className='text-danger'>Verse</span></strong> </h1>

        <h2 className="mb-3">Add Trainers </h2>

        <form onSubmit={submitHandler}>
            <input className="form-control mb-3" value={name} name="name" onChange={changeData} placeholder="Enter the Name"/>
            <select name='specialization' value={specialization}  onChange={changeData} className="form-control mb-3" placeholder ='Specialization' >
                <option value="">Select Specialization</option>
                <option value='Yoga & Meditation'>Yoga & Meditation</option>
                <option value='HIIT & Strength Training'>HIIT & Strength Training</option>
                <option value='Zumba & Cardio'>Zumba & Cardio</option>
            </select>


            <input name='description' value={description}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the Description"/>
            <input name='image' value={image}  className="form-control mb-3 " onChange={changeData} placeholder="Enter the image url (/images/image.jpg)"/>

            <button type="submit" className="btn btn-success">Submit</button>



        </form>
        
        </div>

    )


}

export default AddTrainer;