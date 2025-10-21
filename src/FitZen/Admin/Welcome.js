import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {

  const classes =useCallApi('classes')
  const schedules =useCallApi('schedules')
  const trainers =useCallApi('trainers')
  const enquiries =useCallApi('enquiries')
  return (
    

    <div className='h-100 p-5 text-center align-items-center d-flex'>
    <div className='container'>

    <h1>Welcome to Admin Dashboard</h1>
    <div className='row'>
       <div className='col-md-6 col-lg-4 col-xl-3'>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>{classes.length}+</h1>
            <h5 className='card-title'>Classes</h5>
          </div>
      </div>



       </div>

        <div className='col-md-6 col-lg-4 col-xl-3'>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>{schedules.length}+</h1>
            <h5 className='card-title'>Schedules</h5>



          </div>



        </div>



       </div>


        <div className='col-md-6 col-lg-4 col-xl-3'>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>{trainers.length}+</h1>
            <h5 className='card-title'>Trainers</h5>



          </div>



        </div>



       </div>


        <div className='col-md-6 col-lg-4 col-xl-3'>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>{enquiries.length}+</h1>
            <h5 className='card-title'>Enquiries</h5>



          </div>



        </div>



       </div>


    </div>




    </div>


    </div>
    
  )
}

export default Welcome ;