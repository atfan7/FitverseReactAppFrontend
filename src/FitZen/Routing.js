import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Hero from './Hero'
import About from './About'
import Classes from './Classes'
import Schedules from './Schedules'
import Trainers from './Trainers'
import Contact from './Contact'
import NoPage from './NoPage'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import Welcome from './Admin/Welcome'
import AddClass from './Admin/AddClass'
import ViewClasses from './Admin/ViewClasses'
import AddSchedule from './Admin/AddSchedule'
import ViewSchedules from './Admin/ViewSchedules'
import AddTrainer from './Admin/AddTrainer'
import ViewTrainers from './Admin/ViewTrainers'
import ViewEnquiries from './Admin/ViewEnquiries'
import ClassDetails from './ClassDetails'
import Register from './Admin/Register'


const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/classes' element={<Classes />} />
      <Route path='/ClassDetails/:id' element ={<ClassDetails />} />
      <Route path='/trainers' element={<Trainers />} />
      <Route path='/schedules' element={<Schedules />} />
      <Route path='/contact' element={<Contact />} />
      <Route path ='/admin' element={<AdminLogin/>} />
      <Route path ='/register' element={<Register/>} />


      <Route path ='/dashboard' element={<Dashboard/>} >
          <Route path='' element={<Welcome/>} />
          <Route path='addclass' element={<AddClass/>} />
          <Route path='viewclasses' element={<ViewClasses/>} />
          <Route path='addschedule' element={<AddSchedule/>} />
          <Route path='viewschedules' element={<ViewSchedules/>} />
          <Route path='addtrainer' element={<AddTrainer/>} />
          <Route path='viewtrainer' element={<ViewTrainers/>} />
          <Route path='viewenquiries' element={<ViewEnquiries/>} />
      </Route>    
      
      <Route path='*' element={<NoPage />} />
    </Routes>
  )
}

export default Routing
