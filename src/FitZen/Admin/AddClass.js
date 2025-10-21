import React from 'react' ;
import { useState } from 'react';
import axios from 'axios';


const AddClass = () => {

    const [classes,setClasses] = useState({name :'',description :'',duration : '',level:'', category :''});


const changeData=((e)=>{

    setClasses(
        {...classes,[e.target.name] : e.target.value}
    )






})
 const submitHandler = ((e)=>{
    e.preventDefault();
    console.log(classes)

    axios.post(`https://fitversereactappbackend.onrender.com/classes/`,classes)
    .then(()=>{
        alert(`Class Uploaded Successfully in the database`);
        setClasses(
        {name :'',description :'',duration : '',level:'', category :''}
    )


    })

    .catch((err)=>{
        console.log(err)
    })



    
 })

 const {name ,description ,duration ,level, category } =classes 


  return (

    
     <div className='container p-5 text-center'>
        <div className=" navbar-brand mb-4" >
        <h1><strong>Fit<span className='text-danger'>Verse</span></strong> </h1>

        </div>

    
        <div className='mb-5'><h2>Add New Class Here </h2> </div>

        <form onSubmit={submitHandler}>
            <input name='name' value={name} className='form-control mb-3' onChange={changeData} placeholder='Enter Name of Workout ' />
             <input name='description' value={description}  className='form-control mb-3' onChange={changeData}  placeholder='Description' />
              <input  name='duration' value={duration} className='form-control mb-3' onChange={changeData}  placeholder='Duration' />
               <select name='level' value={level}  className='form-control mb-3' onChange={changeData}  placeholder='Level'>
                <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
               <option value="Advanced">Advanced</option>

                 </select>

                <select
                name="category"
               
                value={category}
                onChange={changeData}
                className="form-control mb-3">

                    <option value="">Select Category</option>

                <option value="Mind & Body">Mind & Body</option>
                 <option value="Cardio & Strength">Cardio & Strength</option>
                 <option value="Strength & Flexibility">Strength & Flexibility</option>
                 <option value="Dance & Cardio">Dance & Cardio</option>
                
                </select>

                <button type='submit' className='btn btn-success'>Submit</button>

        </form>


     </div>


     
    
  )
}

export default AddClass;