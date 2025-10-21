import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import SendEnquiry from './SendEnquiry'

import yoga from './assets/yoga.jpg'


const ClassDetails = () => {

    const {id}= useParams()

    const [data,setData] =useState({})

    useEffect(()=>{

        axios.get(`https://fitversereactappbackend.onrender.com/classDetails/${id}`)
        .then((res)=>{
            setData(res.data);
           


        })

        .catch((err)=>{
            console.log(err)


        })

      


},[id])



  return (
    <div className='container p-5'>

        <div class='row'>
            <div className='col-md-6'>
                 <h1>{data.name}</h1>
                <p>{data.description}</p>
                <button className='btn btn-primary'>Duration : {data.duration}</button>
                <p className='my-2'> Note : This activity is for {data.level}</p>
                <p className='my-3'><span className='text-bg-success p-2'>Category : {data.category}</span></p>
                <img src={yoga} className='w-100' alt='imag'/>


            </div>

            <div className='col-md-6'>
                <h2>Book your Slot</h2>
                <SendEnquiry/>

            </div>


        </div>


       
        
        </div>
  )
}

export default ClassDetails