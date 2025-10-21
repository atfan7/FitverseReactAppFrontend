import axios from "axios";

import React, { useEffect } from "react";
import { useState } from "react";



const ViewClasses = ()=>{

    const[classes, setClasses] = useState([]);

    const[oneClass,setOneClass] = useState({name :'',description : '',duration:'',level :'',category:''});


    useEffect(()=>{

        axios.get(`https://fitversereactappbackend.onrender.com/classes`)
        .then((res)=>{
            setClasses(res.data)
            


        })

        .catch((err)=>{

            console.log(err);


        })
    },[]);

    const deleteClass =(cid)=>{
        

        axios.delete(`https://fitversereactappbackend.onrender.com/classes/${cid}`)
        .then(()=>{

            alert(`Class Deleted Successfully`);
            const updatedClasses = classes.filter(c => c._id !== cid);
            setClasses(updatedClasses);

           
            
        })
        
        .catch((err)=>{

            alert(`Unable to Delete the Record`);

        })


    }

    const extractDetails =(id)=>{

        axios.get(`https://fitversereactappbackend.onrender.com/classes/${id}`)
        .then((res)=>{
            setOneClass(res.data)
       })

        .catch((err)=>{
             console.log(err)

        })


    }

    const {name ,description ,duration,level,category} = oneClass;

    const changeData =(e)=>{

        setOneClass({...oneClass ,[e.target.name] : e.target.value })


    }


    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(oneClass)

        axios.put(`https://fitversereactappbackend.onrender.com/classes/${oneClass._id}`,oneClass)
        .then(()=>{
            alert(`Class Updated Successfully`)

            const updatedClasses = classes.map(c => {
            if (c._id === oneClass._id) {

            return oneClass; // replace the old class with the updated one
            }

            return c; // keep the class as it is
            });

            setClasses(updatedClasses);
         })

        .catch((err)=>{
            console.log(err)

        })
    }
    

    return (
        <div className="container p-5">
           <h1 className="mb-3 text-center">Classes at <strong>Fit<span className='text-danger'>Verse</span></strong> </h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Level</th>
                        <th>Catagory</th>
                        <th>Action</th>

                    </tr>
                </thead>

                <tbody>

                    {
                        classes.map((cl,index)=>{

                            return (

                            <tr>    

                            <td>{cl.name}</td>
                            <td>{cl.description}</td>
                            <td>{cl.duration}</td>
                            <td>{cl.level}</td>
                            <td>{cl.category}</td>
                            <td className="d-flex">
                            <button onClick={()=>extractDetails(cl._id)}  data-bs-target ='#popup' data-bs-toggle='modal' className="btn btn-primary me-2"><i class="bi bi-pencil"></i></button> 

                            <button onClick={()=>(deleteClass(cl._id))} className="btn btn-danger"><i class="bi bi-trash"></i></button> 

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
                            <h2>Edit the Class</h2>
                        </div>
                        <div className="modal-body">

            <form onSubmit={submitHandler}>
            <input name='name' value={name} onChange={changeData} className='form-control mb-3' placeholder='Enter Name of Workout ' />
             <input name='description' value={description} onChange={changeData} className='form-control mb-3' placeholder='Description' />
              <input  name='duration' value={duration} onChange={changeData} className='form-control mb-3' placeholder='Duration' />
               <select name='level' value={level} onChange={changeData} className='form-control mb-3' placeholder='Level'>
                <option value=''>Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
               <option value="Advanced">Advanced</option>

                 </select>

                <select
                name="category"
                value={category}
                onChange={changeData}
               
                
                className="form-control mb-3">

                    <option value=''>Select Category</option>

                <option value="Mind & Body">Mind & Body</option>
                 <option value="Cardio & Strength">Cardio & Strength</option>
                 <option value="Strength & Flexibility">Strength & Flexibility</option>
                 <option value="Dance & Cardio">Dance & Cardio</option>
                
                </select>

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

export default ViewClasses ;