import React from 'react'
import error from './assets/error.jpg'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='container p-5 text-center'>
       
       <Link to='/'>
       <img src={error} alt='' className='w-50'/>
       
       </Link>
        


    </div>
  )
}

export default NoPage