import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const ViewTrainers = ()=>{

    const[trainers, setTrainers] = useState([]);

    const[oneTrainer,setOneTrainer] = useState({name :'',specialization : '',description:'',image :''});


    useEffect(()=>{

        axios.get(`https://fitversereactappbackend.onrender.com/trainers`)
        .then((res)=>{
            setTrainers(res.data)
            


        })

        .catch((err)=>{

            console.log(err);


        })
    },[]);

    const deleteTrainer =(tid)=>{

        axios.delete(`https://fitversereactappbackend.onrender.com/trainers/${tid}`)
        .then(()=>{

            alert(`Trainer Deleted Successfully`);

            const updatedTrainers =trainers.filter(t => t._id !== tid)

            setTrainers(updatedTrainers)
            
            
            

        })
        
        .catch((err)=>{

            console.log(err)

        })


    }

    const extractDetails =(tid)=>{

        axios.get(`https://fitversereactappbackend.onrender.com/trainers/${tid}`)
        .then((res)=>{
            setOneTrainer(res.data)
            console.log(res.data)


        })

        .catch((err)=>{
             console.log(err)

        })


    }

    const {name ,specialization ,description,image,} = oneTrainer;

    const changeData =(e)=>{

        setOneTrainer({...oneTrainer ,[e.target.name] : e.target.value })


    }


    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(oneTrainer);

        axios.put(`https://fitversereactappbackend.onrender.com/trainers/${oneTrainer._id}`,oneTrainer)
        .then(()=>{
            alert(`Data Updated Successfully`)

            const updatedTrainer = trainers.map(t =>{

                if(t._id === oneTrainer._id){
                    return oneTrainer;
                }
                return t
            })

            setTrainers(updatedTrainer);



        })

        .catch((err)=>{
            console.log(err)

        })
    }


    return(

        <div className="container p-5">
            <h1 className="text-center mb-4">Trainers at Fit<span className='text-danger'>Verse</span></h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Description</th>
                        <th>Image</th>
                        
                        <th>Action</th>

                    </tr>
                </thead>

                <tbody>

                    {
                        trainers.map((tr,index)=>{

                            return (

                            <tr>    

                            <td>{tr.name}</td>
                            <td>{tr.specialization}</td>
                            <td>{tr.description}</td>
                            <td>{tr.image}</td>
                          
                            <td className="d-flex">
                            <button onClick={()=>extractDetails(tr._id)}  data-bs-target ='#popup' data-bs-toggle='modal' className="btn btn-primary me-2"><i class="bi bi-pencil"></i></button> 

                            <button onClick={()=>(deleteTrainer(tr._id))} className="btn btn-danger"><i class="bi bi-trash"></i></button> 

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
                            <h2>Edit the Trainer Details </h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-body">

            <form onSubmit={submitHandler}>
            <input name='name' value={name} onChange={changeData} className='form-control mb-3' placeholder='Enter Name of Workout ' />
             <select name='specialization' value={specialization}  onChange={changeData} className="form-control mb-3" placeholder ='Specialization' >
                <option value="">Select Specialization</option>
                <option value='Yoga & Meditation'>Yoga & Meditation</option>
                <option value='HIIT & Strength Training'>HIIT & Strength Training</option>
                <option value='Zumba & Cardio'>Zumba & Cardio</option>
            </select>

              <input  name='description' value={description} onChange={changeData} className='form-control mb-3' placeholder='Description' />
              <input  name='image' value={image} onChange={changeData} className='form-control mb-3' placeholder='images/ImageName.jpg' />
               

                 

               

                <button type='submit' data-bs-dismiss ='modal' className='btn btn-success'>Submit</button>

        </form>




            </div>
                        <div className="modal-footer"></div>
                    </div>

                </div>

            </div>


        
        
        
        
        
        
        
        </div>




    )



}

export default ViewTrainers;